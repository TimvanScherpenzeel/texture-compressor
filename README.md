# Texture compressor

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in DDS or PVR containers.

## Status

	Experimental

## Installation

```sh
npm install -g --save texture-compressor
```

## Example

### ASTC

```sh
# Supported by all iOS devices with an A8 processor or higher (iPhone 6+)
# Astcenc - https://github.com/ARM-software/astc-encoder
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

texture-compressor -i ./example/example.png -o ./example/example-astc.dds -m astc -c astc
```

### ETC

```sh
# Supported by most Android devices
# Etc2comp - https://github.com/google/etc2comp
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

texture-compressor -i ./example/example.png -o ./example/example-etc1.dds -m etc -c etc1
```

### PVR

```sh
# Supported by all iOS devices and some Android devices
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/

texture-compressor -i ./example/example.png -o ./example/example-pvrtc1.pvr -m pvr -c pvrtc1
```

### S3TC

```sh
# Supported by all desktop devices and some Android devices
# Crunch - https://code.google.com/archive/p/crunch/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

texture-compressor -i ./example/example.png -o ./example/example-dxt5.dds -m s3tc -c dxt5
```

## Flags

### Required
	-c, --compression ['astc', 'etc1', 'etc2', 'pvrtc1', 'dxt1', 'dxt3', 'dxt5'] [required]
	-i, --input [example: ./example/example.png] [required]
	-o, --output [example: ./example/example.dds] [required]
	-m, --method ['astc', 'etc', 'pvr', 's3tc'] [required]

### Optional
	-b, --bitrate [2.0 - 4.0, default: 2.0] [not required]
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
