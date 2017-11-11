# Texture compressor

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in KTX, DDS or PVR containers

## Status

	Work in progress

## Example

	General:
	-i, --input ./docs/example.png
	-o, --output ./docs/example.dds
	-m, --method s3tc
	-c, --compression dxt5

	Optional:
	-f, --flags "mipmode none" "quality 100"

    node ./bin/texture-compressor.js -i ./docs/example.png -o ./docs/example-dxt5.dds -m s3tc -c dxt5 -f "mipmode none" "quality 100"
