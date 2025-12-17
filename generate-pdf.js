const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const OUTPUT_PDF = 'public/Dumitru_Vulpe_CV.pdf';

// Simple static file server
function createServer(publicDir) {
  return http.createServer((req, res) => {
    let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);

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
    // Launch browser and generate PDF
    console.log('Launching browser...');
    const browser = await chromium.launch();
    const page = await browser.newPage();

    console.log(`Navigating to http://localhost:${PORT}`);
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });

    console.log(`Generating PDF: ${OUTPUT_PDF}`);
    await page.pdf({
      path: OUTPUT_PDF,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });

    await browser.close();
    console.log('PDF generated successfully!');
  } finally {
    // Close server
    server.close();
    console.log('Server stopped');
  }
}

generatePDF().catch(console.error);
