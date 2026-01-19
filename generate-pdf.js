const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

// CV configurations: each entry maps a page path to output PDF filename
const CV_CONFIGS = [
  { path: '/', outputFile: 'public/dumitru_vulpe_cv.pdf' },
  { path: '/platform-engineer/', outputFile: 'public/dumitru_vulpe_platform_engineer_cv.pdf' },
];

// Simple static file server
function createServer(publicDir) {
  return http.createServer((req, res) => {
    let filePath = path.join(publicDir, req.url);

    // If the path is a directory or ends with '/', serve index.html
    if (req.url === '/' || req.url.endsWith('/')) {
      filePath = path.join(filePath, 'index.html');
    }

    // Try to read the file
    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        // If it's a directory, try to serve index.html from that directory
        const indexPath = path.join(filePath, 'index.html');
        fs.readFile(indexPath, (err2, data) => {
          if (err2) {
            res.writeHead(404);
            res.end('Not found');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
        return;
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }

        const ext = path.extname(filePath);
        const contentTypes = {
          '.html': 'text/html',
          '.css': 'text/css',
          '.js': 'text/javascript',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.svg': 'image/svg+xml',
        };

        res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
        res.end(data);
      });
    });
  });
}

async function generatePDF() {
  const publicDir = path.join(__dirname, 'public');

  // Start local server
  const server = createServer(publicDir);
  await new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
      resolve();
    });
  });

  try {
    // Launch browser
    console.log('Launching browser...');
    const browser = await chromium.launch();

    // Generate PDFs for each CV configuration
    for (const config of CV_CONFIGS) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${config.path}`;

      console.log(`\nNavigating to ${url}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for fonts and styles to load
      await page.waitForTimeout(2000);

      console.log(`Generating PDF: ${config.outputFile}`);
      await page.pdf({
        path: config.outputFile,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px'
        }
      });

      await page.close();
      console.log(`✓ Generated: ${config.outputFile}`);
    }

    await browser.close();
    console.log('\n✓ All PDFs generated successfully!');
  } finally {
    // Close server
    server.close();
    console.log('Server stopped');
  }
}

generatePDF().catch(console.error);
