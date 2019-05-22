# Texture Compressor

[![npm version](https://badge.fury.io/js/texture-compressor.svg)](https://badge.fury.io/js/texture-compressor)

CLI tool for texture compression using ASTC, ETC, PVRTC and S3TC in a KTX container.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
 $ npm install texture-compressor
```

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

## CLI Usage

### ASTC

```sh
$ node ./bin/texture-compressor -i input/example.png -t astc -c ASTC_4x4 -q astcmedium -o output/example-astc.ktx -y -m -vb
```

### ETC

```sh
$ node ./bin/texture-compressor -i input/example.png -t etc -c ETC2_RGB -q etcfast -o output/example-etc.ktx -y -m -vb
```

### PVR

```sh
$ node ./bin/texture-compressor -i input/example.png -t pvr -c PVRTC1_2 -q pvrtcnormal -o output/example-pvrtc.ktx -y -m -vb
```

### S3TC

```sh
$ node ./bin/texture-compressor -i input/example.png -t s3tc -c DXT1 -q normal -o output/example-s3tc.ktx -y -m -vb
```

## Module usage

```js
const { pack } = require('./dist/cli/lib/index');

pack({
  type: 'astc',
  input: 'input/example.png',
  output: 'output/example-astc.ktx',
  compression: 'ASTC_4x4',
  quality: 'astcmedium',
  verbose: true,
}).then(() => console.log('done!'));
```

## Flags

### Required

    -i, --input [example: ./input/example.png] [required]
    -o, --output [example: ./output/example.ktx] [required]
    -t, --type [example: astc, etc, pvr, s3tc] [required]
    -c, --compression [example: ASTC_4x4, ETC2_RGB, PVRTC1_2, DXT1] [required]
    -q, --quality [example: astcmedium, etcfast, pvrtcnormal, normal] [required]

### Optional

    -vb, --verbose [true / false, default: false] [not required]

    -m, --mipmap [true / false, default: false] [not required]
    -y, --flipY [tue / false, default: false] [not required]

### Tool flags

Tool flags are not processed by `texture-compressor` but rather directly by the binary you are targeting itself.

For example adding `--flags ["usesourceformat DXT1A" "alphaThreshold 200"]` will pass `usesourceformat DXT1A` and `alphaThreshold 200` directly to `Crunch`.

Please be aware that these flags are tool specific and can therefore not be directly applied to the other binaries.

    -f, --flags ["flag value" "flag value"] [not required]

To find tool specific flags please refer to the manuals of [ASTC](http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf), [ETC](http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf), [PVRTC](http://cdn.imgtec.com/sdk-documentation/PVRTexTool.User+Manual.pdf), [S3TC](https://github.com/BinomialLLC/crunch/blob/235946f7a1cf8b9c97e8bf0e8062d5439a51dec7/crunch/crunch.cpp#L70-L181).

## Licence

My work is released under the [MIT licence](https://raw.githubusercontent.com/TimvanScherpenzeel/texture-compressor/master/LICENSE).

This repository distributes multiple binary tools for Windows, Mac and Linux.
This product includes components of the PowerVR™ SDK from Imagination Technologies Limited.

- [astcenc](https://raw.githubusercontent.com/ARM-software/astc-encoder/master/license.txt)
- [PVRTexToolCLI](https://community.imgtec.com/developers/powervr/sdk-end-user-licence-agreement/)
- [crunch](https://raw.githubusercontent.com/BinomialLLC/crunch/master/license.txt)
