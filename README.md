# Texture compressor

[![npm version](https://badge.fury.io/js/texture-compressor.svg)](https://badge.fury.io/js/texture-compressor)
[![dependencies](https://david-dm.org/timvanscherpenzeel/texture-compressor.svg)](https://david-dm.org/timvanscherpenzeel/texture-compressor)
[![devDependencies](https://david-dm.org/timvanscherpenzeel/texture-compressor/dev-status.svg)](https://david-dm.org/timvanscherpenzeel/texture-compressor#info=devDependencies)

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in a KTX container.

Easily compress for all hardware using sensible defaults but with the option to pass any custom flag directly to the tool.

## Installation

```sh
$ npm install -g --save texture-compressor
```

## Support table

| Device                         | Device vendor | Device model | OS      | OS version | Browser       | Browser version | WebGL | WebGL2 | ASTC | ATC | ETC | ETC1 | S3TC | PVRTC |
| ------------------------------ | ------------- | ------------ | ------- | ---------- | ------------- | --------------- | ----- | ------ | ---- | --- | --- | ---- | ---- | ----- |
| Apple-iPad 5th-Safari          | Apple         | iPad         | iOS     | 11.0.3     | Mobile Safari | 11.0            | X     |        |      |     |     |      |      | X     |
| Apple-iPad Air 2-Safari        | Apple         | iPad         | iOS     | 8.4        | Mobile Safari | 8.0             | X     |        |      |     |     |      |      | X     |
| Apple-iPad Mini 3-Safari       | Apple         | iPad         | iOS     | 8.1.2      | Mobile Safari | 8.0             | X     |        |      |     |     |      |      | X     |
| Apple-iPad Pro-Safari          | Apple         | iPad         | iOS     | 11.2.1     | Mobile Safari | 11.0            | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 5S-Safari         | Apple         | iPhone       | iOS     | 8.1.3      | Mobile Safari | 8.0             | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 6 Plus-Safari     | Apple         | iPhone       | iOS     | 8.1        | Mobile Safari | 8.0             | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 6-Safari          | Apple         | iPhone       | iOS     | 8.1.3      | Mobile Safari | 8.0             | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 6S Plus-Safari    | Apple         | iPhone       | iOS     | 9.0.1      | Mobile Safari | 9.0             | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 6S-Safari         | Apple         | iPhone       | iOS     | 9.1        | Mobile Safari | 9.0             | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 7-Safari          | Apple         | iPhone       | iOS     | 10.3.1     | Mobile Safari | 10.0            | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 8 Plus-Safari     | Apple         | iPhone       | iOS     | 11.0       | Mobile Safari | 11.0            | X     |        |      |     |     |      |      | X     |
| Apple-iPhone 8-Safari          | Apple         | iPhone       | iOS     | 11.0       | Mobile Safari | 11.0            | X     |        |      |     |     |      |      | X     |
| Apple-iPhone SE-Safari         | Apple         | iPhone       | iOS     | 11.2.1     | Mobile Safari | 11.0            | X     |        |      |     |     |      |      | X     |
| Apple-iPhone X-Safari          | Apple         | iPhone       | iOS     | 11.2       | Mobile Safari | 11.0            | X     |        |      |     |     |      |      | X     |
| Google-Nexus 5X-Chrome         | LG            | Nexus 5      | Android | 7.0        | Chrome        | 63.0.3239.111   | X     | X      | X    | X   |     | X    |      |       |
| Google-Nexus 6P-Chrome         | Huawei        | Nexus 6P     | Android | 7.0        | Chrome        | 63.0.3239.111   | X     | X      | X    | X   |     | X    |      |       |
| Google-Pixel 2-Chrome          | Google        | Pixel        | Android | 8.0.0      | Chrome        | 63.0.3239.111   | X     | X      | X    | X   |     | X    |      |       |
| Google-Pixel 2-Firefox         | Unknown       | Unknown      | Android | 8.0.0      | Firefox       | 51.0            | X     | X      |      | X   | X   | X    |      |       |
| Google-Pixel v7-Chrome         | Google        | Pixel        | Android | 7.1        | Chrome        | 63.0.3239.111   | X     | X      | X    | X   |     | X    |      |       |
| Google-Pixel v8-Chrome         | Google        | Pixel        | Android | 8.0.0      | Chrome        | 63.0.3239.111   | X     | X      | X    | X   |     | X    |      |       |
| Google-Pixel v8-Firefox        | Unknown       | Unknown      | Android | 8.0.0      | Firefox       | 51.0            | X     | X      |      | X   | X   | X    |      |       |
| LG-G5-Chrome                   | LG            | H850         | Android | 6.0.1      | Chrome        | 63.0.3239.111   | X     | X      | X    | X   |     | X    |      |       |
| MacOS-High Sierra-Chrome       | Unknown       | Unknown      | Mac OS  | 10.13.3    | Chrome        | 65.0.3325.181   | X     | X      |      |     |     |      | X    |       |
| MacOS-High Sierra-Firefox      | Unknown       | Unknown      | Mac OS  | 10.13      | Firefox       | 59.0            | X     | X      |      |     |     |      | X    |       |
| MacOS-High Sierra-Safari       | Unknown       | Unknown      | Mac OS  | 10.13.3    | Safari        | 11.0.3          | X     |        |      |     |     |      | X    |       |
| Motorola-Moto X 2nd Gen-Chrome | Motorola      | XT1092       | Android | 6.0        | Chrome        | 63.0.3239.111   | X     |        |      | X   |     | X    |      |       |
| Samsung-S6-Chrome              | Samsung       | SM-G920F     | Android | 5.0.2      | Chrome        | 63.0.3239.111   | X     | X      | X    |     |     | X    |      |       |
| Samsung-S7-Chrome              | Samsung       | SM-G930F     | Android | 6.0.1      | Chrome        | 63.0.3239.111   | X     | X      | X    |     |     | X    |      |       |
| Samsung-S7-Firefox             | Unknown       | Unknown      | Android | 6.0.1      | Firefox       | 51.0            | X     | X      |      |     | X   | X    |      |       |
| Samsung-S8-Chrome              | Samsung       | SM-G950F     | Android | 7.0        | Chrome        | 63.0.3239.111   | X     | X      | X    |     |     | X    |      |       |
| Samsung-S8-Firefox             | Unknown       | Unknown      | Android | 7.0        | Firefox       | 51.0            | X     | X      |      |     | X   | X    |      |       |
| Samsung-S8+-Chrome             | Samsung       | SM-G955F     | Android | 7.0        | Chrome        | 63.0.3239.111   | X     | X      | X    |     |     | X    |      |       |
| Samsung-S8+-Firefox            | Unknown       | Unknown      | Android | 7.0        | Firefox       | 51.0            | X     | X      |      |     | X   | X    |      |       |
| Windows 10-Chrome              | Unknown       | Unknown      | Windows | 10         | Chrome        | 65.0.3325.146   | X     | X      |      |     |     | X    | X    |       |
| Windows 10-Edge 14             | Unknown       | Unknown      | Windows | 10         | Edge          | 14.14393        | X     |        |      |     |     |      | X    |       |
| Windows 10-Edge 15             | Unknown       | Unknown      | Windows | 10         | Edge          | 15.15063        | X     |        |      |     |     |      | X    |       |
| Windows 10-Edge 16             | Unknown       | Unknown      | Windows | 10         | Edge          | 16.16299        | X     |        |      |     |     |      | X    |       |
| Windows 10-Firefox             | Unknown       | Unknown      | Windows | 10         | Firefox       | 59.0            | X     |        |      |     |     |      | X    |       |
| Windows 10-IE 11               | Unknown       | Unknown      | Windows | 10         | IE            | 11.0            | X     |        |      |     |     |      | X    |       |
| Windows 7-IE 10                | Unknown       | Unknown      | Windows | 7          | IE            | 10.0            |       |        |      |     |     |      |      |       |
| Windows 7-IE 11                | Unknown       | Unknown      | Windows | 7          | IE            | 11.0            | X     |        |      |     |     |      | X    |       |
| Windows 8-IE 10                | Unknown       | Unknown      | Windows | 8          | IE            | 10.0            |       |        |      |     |     |      |      |       |

## Example

### ASTC
```sh
# Astcenc - https://github.com/ARM-software/astc-encoder
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-astc.ktx -m astc -c astc
```

### ETC

```sh
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-etc1.ktx -m etc -c etc1

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-etc2.ktx -m etc -c etc2
```

### PVR

```sh
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-pvrtc1.ktx -m pvr -c pvrtc1
```

### S3TC

```sh
# Crunch - https://code.google.com/archive/p/crunch/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-dxt1.ktx -m s3tc -c dxt1

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-dxt3.ktx -m s3tc -c dxt3

$ node ./bin/texture-compressor -i ./example/example.png -o ./example/example-dxt5.ktx -m s3tc -c dxt5
```

## Flags

### Required
	-c, --compression ['astc', 'etc1', 'etc2', 'pvrtc1', 'dxt1', 'dxt3', 'dxt5'] [required]
	-i, --input [example: ./example/example.png] [required]
	-o, --output [example: ./example/example.ktx] [required]
	-m, --method ['etc', 'pvr', 's3tc'] [required]

### Optional
	-b, --bitrate [2.0 - 4.0, default: 2.0 = 8x8 blocksize] [not required]

	Or if using ASTC you can optionally change the bitrate for one of the following blocksizes:
	[4x4, 5x4, 5x5, 6x5, 6x6, 8x5, 8x6, 8x8, 10x5, 10x6, 10x8, 10x10, 12x10, 12x12] [not required]

	-q, --quality [0 - 10, default: 5] [not required]
	-t, --transparant [true / false, default: false] [not required]

### Tool flags
	-f, --flags ["flag value" "flag value"] [not required]

## Licence

My work is released under the [MIT licence](https://raw.githubusercontent.com/TimvanScherpenzeel/texture-compressor/master/LICENSE).

Much has been based on the automated texture compression tool baked into [gltf-pipeline](https://raw.githubusercontent.com/AnalyticalGraphicsInc/gltf-pipeline/master/LICENSE.md).

This repository distributes multiple binary tools for Windows, Mac and Linux.

- [astcenc](https://raw.githubusercontent.com/ARM-software/astc-encoder/master/license.txt)
- [PVRTexToolCLI](https://community.imgtec.com/developers/powervr/sdk-end-user-licence-agreement/)
- [crunch](https://raw.githubusercontent.com/Unvanquished/crunch/master/license.txt)
