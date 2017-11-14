# Texture compressor

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in DDS or PVR containers.

## Texture tester

A texture tester is available on https://timvanscherpenzeel.github.io/texture-compressor/.

## Status

	Work in progress

## Flags

	Required:
	-c, --compression dxt5 [required]
	-i, --input ./docs/example.png [required]
	-o, --output ./docs/example.dds [required]
	-m, --method s3tc [required]

	Optional:
	-b, --bitrate [2.0 - 4.0, default: 2.0]
	-q, --quality [0 - 10, default: 5]
	-t, --transparant [true / false, default: false]

	Tool:
	-f, --flags ["flag value" "flag value" "flag value"]

## Example

### ASTC
	node ./bin/texture-compressor.js -i ./docs/example.png -o ./docs/example-astc.dds -m astc -c astc

### PVR
	node ./bin/texture-compressor.js -i ./docs/example.png -o ./docs/example-pvrtc1.pvr -m pvr -c pvrtc1

### S3TC
    node ./bin/texture-compressor.js -i ./docs/example.png -o ./docs/example-dxt5.dds -m s3tc -c dxt5

## Licence

My work is released under [GNU General Public License v3.0](https://raw.githubusercontent.com/TimvanScherpenzeel/texture-compressor/master/LICENSE).

This repository distributes multiple binary tools for Windows, Mac and Linux.

[astcenc](https://raw.githubusercontent.com/ARM-software/astc-encoder/master/license.txt)

[crunch](https://raw.githubusercontent.com/Unvanquished/crunch/master/license.txt)

[EtcTool](https://raw.githubusercontent.com/google/etc2comp/master/LICENSE)

[PVRTexToolCLI](https://community.imgtec.com/developers/powervr/sdk-end-user-licence-agreement/)
