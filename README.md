# Texture compressor

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in KTX, DDS or PVR containers.

A WebGL texture tester is available on

## Texture tester

A texture tester is available on https://timvanscherpenzeel.github.io/texture-compressor/.
This is a modified version of Brandon Jones's WebGL texture tester.

## Status

	Work in progress

## Texture tester



## Example

	General:
	-i, --input ./docs/example.png
	-o, --output ./docs/example.dds
	-m, --method s3tc
	-c, --compression dxt5

	Optional:
	-f, --flags "mipmode none" "quality 100"

    node ./bin/texture-compressor.js -i ./docs/example.png -o ./docs/example-dxt5.dds -m s3tc -c dxt5 -f "mipmode none" "quality 100"
