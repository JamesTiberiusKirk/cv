submodule:
	git submodule update --init --recursive

dev:
	hugo serve -D --theme=researcher --disableFastRender

build:
	hugo --theme=researcher

pdf-only:
	@echo "Checking if Node.js dependencies are installed..."
	@if [ ! -d "node_modules" ]; then \
		echo "Installing Node.js dependencies..."; \
		npm install; \
	fi
	@echo "Generating PDF from local build..."
	node generate-pdf.js
	@echo "PDF generated at public/Dumitru_Vulpe_CV.pdf"

pdf: build pdf-only

.PHONY: submodule dev build pdf pdf-only
