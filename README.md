# Texture compressor

[![npm version](https://badge.fury.io/js/texture-compressor.svg)](https://www.npmjs.com/package/texture-compressor)
[![dependencies](https://david-dm.org/timvanscherpenzeel/texture-compressor.svg)](https://david-dm.org/timvanscherpenzeel/texture-compressor)
[![devDependencies](https://david-dm.org/timvanscherpenzeel/texture-compressor/dev-status.svg)](https://david-dm.org/timvanscherpenzeel/texture-compressor#info=devDependencies)

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in a KTX container.

Easily compress for all hardware using sensible defaults but with the option to pass any custom flag directly to the tool.

## Installation

```sh
$ npm install -g --save texture-compressor
```

## Live demo

[Live demo](https://timvanscherpenzeel.github.io/texture-compressor/) and [Live demo (mipmaps)](https://timvanscherpenzeel.github.io/texture-compressor/mipmap.html) using [KTXLoader](https://github.com/mrdoob/three.js/blob/dev/examples/js/loaders/KTXLoader.js) from [Three.js](https://github.com/mrdoob/three.js/).

## Support table

| Device                  | OS      | OS version | Browser       | Browser version | ASTC | ETC | ETC1 | S3TC | PVRTC |
| ----------------------- | ------- | ---------- | ------------- | --------------- | ---- | --- | ---- | ---- | ----- |
| Apple iPad 5th          | iOS     | 11.0.3     | Mobile Safari | 11.0            |      |     |      |      | X     |
| Apple iPad Air 2        | iOS     | 8.4        | Mobile Safari | 8.0             |      |     |      |      | X     |
| Apple iPad Mini 3       | iOS     | 8.1.2      | Mobile Safari | 8.0             |      |     |      |      | X     |
| Apple iPad Pro          | iOS     | 11.2.1     | Mobile Safari | 11.0            |      |     |      |      | X     |
| Apple iPhone 5S         | iOS     | 8.1.3      | Mobile Safari | 8.0             |      |     |      |      | X     |
| Apple iPhone 6 Plus     | iOS     | 8.1        | Mobile Safari | 8.0             |      |     |      |      | X     |
| Apple iPhone 6          | iOS     | 8.1.3      | Mobile Safari | 8.0             |      |     |      |      | X     |
| Apple iPhone 6S Plus    | iOS     | 9.0.1      | Mobile Safari | 9.0             |      |     |      |      | X     |
| Apple iPhone 6S         | iOS     | 9.1        | Mobile Safari | 9.0             |      |     |      |      | X     |
| Apple iPhone 7          | iOS     | 10.3.1     | Mobile Safari | 10.0            |      |     |      |      | X     |
| Apple iPhone 8          | iOS     | 11.0       | Mobile Safari | 11.0            |      |     |      |      | X     |
| Apple iPhone 8          | iOS     | 11.0       | Mobile Safari | 11.0            |      |     |      |      | X     |
| Apple iPhone SE         | iOS     | 11.2.1     | Mobile Safari | 11.0            |      |     |      |      | X     |
| Apple iPhone X          | iOS     | 11.2       | Mobile Safari | 11.0            |      |     |      |      | X     |
| Google Nexus 5X         | Android | 7.0        | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Google Nexus 6P         | Android | 7.0        | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Google Pixel 2          | Android | 8.0.0      | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Google Pixel 2          | Android | 8.0.0      | Firefox       | 51.0            |      | X   | X    |      |       |
| Google Pixel            | Android | 7.1        | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Google Pixel            | Android | 8.0.0      | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Google Pixel            | Android | 8.0.0      | Firefox       | 51.0            |      | X   | X    |      |       |
| LG G5                   | Android | 6.0.1      | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| MacOS High Sierra       | Mac OS  | 10.13.3    | Chrome        | 65.0.3325.181   |      |     |      | X    |       |
| MacOS High Sierra       | Mac OS  | 10.13      | Firefox       | 59.0            |      |     |      | X    |       |
| MacOS High Sierra       | Mac OS  | 10.13.3    | Safari        | 11.0.3          |      |     |      | X    |       |
| Motorola Moto X 2nd Gen | Android | 6.0        | Chrome        | 63.0.3239.111   |      |     | X    |      |       |
| Oculus Go               | Android | 7.1.2      | Oculus        | 4.5.1.108860099 | X    | X   | X    |      |       |
| Samsung S6              | Android | 5.0.2      | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Samsung S7              | Android | 6.0.1      | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Samsung S7              | Android | 6.0.1      | Firefox       | 51.0            |      | X   | X    |      |       |
| Samsung S8              | Android | 7.0        | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Samsung S8              | Android | 7.0        | Firefox       | 51.0            |      | X   | X    |      |       |
| Samsung S8+             | Android | 7.0        | Chrome        | 63.0.3239.111   | X    |     | X    |      |       |
| Samsung S8+             | Android | 7.0        | Firefox       | 51.0            |      | X   | X    |      |       |
| Windows 10              | Windows | 10         | Chrome        | 65.0.3325.146   |      |     | X    | X    |       |
| Windows 10              | Windows | 10         | Edge          | 14.14393        |      |     |      | X    |       |
| Windows 10              | Windows | 10         | Edge          | 15.15063        |      |     |      | X    |       |
| Windows 10              | Windows | 10         | Edge          | 16.16299        |      |     |      | X    |       |
| Windows 10              | Windows | 10         | Firefox       | 59.0            |      |     |      | X    |       |
| Windows 10              | Windows | 10         | IE            | 11.0            |      |     |      | X    |       |
| Windows 7               | Windows | 7          | IE            | 10.0            |      |     |      |      |       |
| Windows 7               | Windows | 7          | IE            | 11.0            |      |     |      | X    |       |
| Windows 8               | Windows | 8          | IE            | 10.0            |      |     |      |      |       |

## Usage

### ASTC

```sh
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Astcenc - https://github.com/ARM-software/astc-encoder
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

# example-astc-4x4
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-4x4.ktx -t astc -c astc -b 4x4

# example-astc-8x8
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-8x8.ktx -t astc -c astc -b 8x8
```

### ETC

```sh
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

# example-etc1
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc1.ktx -t etc -c etc1

# example-etc2
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc2.ktx -t etc -c etc2

# example-etc2A
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc2A.ktx -t etc -c etc2 -a
```

### PVR

```sh
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/

# example-pvrtc2BPP
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc2BPP.ktx -t pvr -c pvrtc1

# example-pvrtc2BPPA
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc2BPPA.ktx -t pvr -c pvrtc1 -a

# example-pvrtc4BPP
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc4BPP.ktx -t pvr -c pvrtc1 -b 4

# example-pvrtc4BPPA
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc4BPPA.ktx -t pvr -c pvrtc1 -b 4 -a
```

### S3TC

```sh
# Crunch - https://code.google.com/archive/p/crunch/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

# example-dxt1
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt1.ktx -t s3tc -c dxt1

# example-dxt1A
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt1A.ktx -t s3tc -c dxt1 -a

# example-dxt3
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt3.ktx -t s3tc -c dxt3

# example-dxt5
$ node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt5.ktx -t s3tc -c dxt5
```

In [docs/generate_default.sh](docs/generate_default.sh), [docs/generate_flipped_y.sh](docs/generate_flipped_y.sh) and [docs/generate_flipped_y_mipmaps.sh](docs/generate_flipped_y_mipmaps.sh) one can find batch scripts for automatically generating all the filetypes mentioned above.

## Flags

### Required

    -c, --compression ['astc', 'etc1', 'etc2', 'pvrtc1', 'dxt1', 'dxt3', 'dxt5'] [required]
    -i, --input [example: ./docs/example/example.png] [required]
    -o, --output [example: ./docs/example/example.ktx] [required]
    -t, --type ['astc', 'etc', 'pvr', 's3tc'] [required]

### Optional

    -b, --bitrate [2.0 - 4.0, default: 2.0 = 8x8 blocksize] [not required]

    Or if using ASTC you can optionally change the bitrate for one of the following blocksizes:
    [4x4, 5x4, 5x5, 6x5, 6x6, 8x5, 8x6, 8x8, 10x5, 10x6, 10x8, 10x10, 12x10, 12x12] [not required]

    -q, --quality [0 - 10, default: 5] [not required]
    -a, --alpha [true / false, default: false] [not required]
    -m, --mipmap [true / false, default: false] [not required]
    -y, --flipY [tue / false, default: false] [not required]

### Tool flags

Tool flags are not processed by `texture-compressor` but rather directly by the binary you are targeting itself.

For example adding `--flags ["usesourceformat DXT1A" "alphaThreshold 200"]` will pass `usesourceformat DXT1A` and `alphaThreshold 200` directly to `Crunch`.

Please be aware that these flags are tool specific and can therefore not be directly applied to the other binaries.

    -f, --flags ["flag value" "flag value"] [not required]

To find tool specific flags please refer to the manuals of [ASTC](http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf), [ETC](http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf), [PVRTC](http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf), [S3TC](https://github.com/BinomialLLC/crunch/blob/235946f7a1cf8b9c97e8bf0e8062d5439a51dec7/crunch/crunch.cpp#L70-L181).

## Mipmaps

One important thing to note is that compressed mipmapped textures in WebGL should always have a complete mipchain going to `1x1` pixel (`512x512`, `256x256`, `128x128`, `64x64`, `32x32`, `16x16`, `8x8`, `4x4`, `2x2`, `1x1`).

Previously I had an option `-l` to pass in a custom amount of mip levels but to avoid confusion I've decided to automatically detect the power of two's down to `1x1` necessary to create the correct amount of mip levels.

## Licence

My work is released under the [MIT licence](https://raw.githubusercontent.com/TimvanScherpenzeel/texture-compressor/master/LICENSE).

Much has been based on the automated texture compression tool baked into [gltf-pipeline](https://raw.githubusercontent.com/AnalyticalGraphicsInc/gltf-pipeline/master/LICENSE.md).

This repository distributes multiple binary tools for Windows, Mac and Linux.
This product includes components of the PowerVR™ SDK from Imagination Technologies Limited.

- [astcenc](https://raw.githubusercontent.com/ARM-software/astc-encoder/master/license.txt)
- [PVRTexToolCLI](https://community.imgtec.com/developers/powervr/sdk-end-user-licence-agreement/)
- [crunch](https://raw.githubusercontent.com/BinomialLLC/crunch/master/license.txt)
