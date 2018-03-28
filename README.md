# Texture compressor

[![npm version](https://badge.fury.io/js/texture-compressor.svg)](https://badge.fury.io/js/texture-compressor)
[![dependencies](https://david-dm.org/timvanscherpenzeel/texture-compressor.svg)](https://david-dm.org/timvanscherpenzeel/texture-compressor)
[![devDependencies](https://david-dm.org/timvanscherpenzeel/texture-compressor/dev-status.svg)](https://david-dm.org/timvanscherpenzeel/texture-compressor#info=devDependencies)

CLI tool for texture compression using ETC, PVRTC and S3TC in DDS or PVR containers.

Easily compress for all hardware using sensible defaults but with the option to pass any custom flag directly to the tool.

## Installation

```sh
$ npm install -g --save texture-compressor
```

## Example

### ETC

```sh
# ETC1 & ETC2 - Supported by most Android devices
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# PVR container
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-etc1.pvr -m etc -c etc1

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-etc2.pvr -m etc -c etc2
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
# DDS container
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-dxt1.dds -m s3tc -c dxt1

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-dxt3.dds -m s3tc -c dxt3

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-dxt5.dds -m s3tc -c dxt5
```

## Flags

### Required
	-c, --compression ['etc1', 'etc2', 'pvrtc1', 'dxt1', 'dxt3', 'dxt5'] [required]
	-i, --input [example: ./example/example.png] [required]
	-o, --output [example: ./example/example.dds] [required]
	-m, --method ['etc', 'pvr', 's3tc'] [required]

### Optional
	-b, --bitrate [2.0 - 4.0, default: 2.0] [not required]
	-q, --quality [0 - 10, default: 5] [not required]
	-t, --transparant [true / false, default: false] [not required]

### Tool flags
	-f, --flags ["flag value" "flag value"] [not required]

## Licence

My work is released under the [MIT licence](https://raw.githubusercontent.com/TimvanScherpenzeel/texture-compressor/master/LICENSE).

Much has been based on the automated texture compression tool baked into [gltf-pipeline](https://raw.githubusercontent.com/AnalyticalGraphicsInc/gltf-pipeline/master/LICENSE.md).

This repository distributes multiple binary tools for Windows, Mac and Linux.

- [PVRTexToolCLI](https://community.imgtec.com/developers/powervr/sdk-end-user-licence-agreement/)
- [crunch](https://raw.githubusercontent.com/Unvanquished/crunch/master/license.txt)
