submodule:
	git submodule update --init --recursive

dev:
	hugo serve -D --theme=researcher --disableFastRender
