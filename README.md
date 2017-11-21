# Texture compressor

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in DDS or PVR containers.

Easily compress for all hardware using sensible defaults but with the option to pass any custom flag directly to the tool.

## Installation

```sh
$ npm install -g --save texture-compressor
```

## Example

### ASTC

```sh
# ASTC - Supported by all iOS devices with an A8 processor or higher (iPhone 6+)
# Astcenc - https://github.com/ARM-software/astc-encoder
# DDS container
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-astc.dds -m astc -c astc
```

### ETC

```sh
# ETC1 & ETC2 - Supported by most Android devices
# Etc2comp - https://github.com/google/etc2comp
# DDS container
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-etc1.dds -m etc -c etc1
```

### PVR

```sh
# PVRTC1 - Supported by all iOS devices and some Android devices
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# PVR container
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-pvrtc1.pvr -m pvr -c pvrtc1
```

### S3TC

```sh
# DXT1 & DXT3 & DXT5 - Supported by all desktop devices and some Android devices
# Crunch - https://code.google.com/archive/p/crunch/
# CRN & DDS container
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-dxt5.dds -m s3tc -c dxt5
```

## Flags

### Required
	-c, --compression ['astc', 'etc1', 'etc2', 'pvrtc1', 'dxt1', 'dxt3', 'dxt5'] [required]
	-i, --input [example: ./example/example.png] [required]
	-o, --output [example: ./example/example.dds] [required]
	-m, --method ['astc', 'etc', 'pvr', 's3tc'] [required]

### Optional
	-b, --bitrate [2.0 - 4.0, default: 2.0 = 8x8 blocksize] [not required]

	Or if using ASTC you can optionally change the bitrate for one of the following blocksizes:
	[4x4, 5x4, 5x5, 6x5, 6x6, 8x5, 8x6, 8x8, 10x5, 10x6, 10x8, 10x10, 12x10, 12x12] [not required]

	-q, --quality [0 - 10, default: 5] [not required]
	-t, --transparant [true / false, default: false] [not required]

### Tool flags
	-f, --flags ["flag value" "flag value"] [not required]

## Licence

My work is released under [GNU General Public License v3.0](https://raw.githubusercontent.com/TimvanScherpenzeel/texture-compressor/master/LICENSE).

Much has been based on the automated texture compression tool baked into [gltf-pipeline](https://raw.githubusercontent.com/AnalyticalGraphicsInc/gltf-pipeline/master/LICENSE.md).

This repository distributes multiple binary tools for Windows, Mac and Linux.

- [astcenc](https://raw.githubusercontent.com/ARM-software/astc-encoder/master/license.txt)
- [EtcTool](https://raw.githubusercontent.com/google/etc2comp/master/LICENSE)
- [PVRTexToolCLI](https://community.imgtec.com/developers/powervr/sdk-end-user-licence-agreement/)
- [crunch](https://raw.githubusercontent.com/Unvanquished/crunch/master/license.txt)
