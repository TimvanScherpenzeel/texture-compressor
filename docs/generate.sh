#!/bin/bash

### ASTC
# Astcenc - https://github.com/ARM-software/astc-encoder
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

# example-astc-4x4
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-4x4.ktx -m astc -c astc -b 4x4

# example-astc-5x4
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-5x4.ktx -m astc -c astc -b 5x4

# example-astc-5x5
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-5x5.ktx -m astc -c astc -b 5x5

# example-astc-6x5
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-6x5.ktx -m astc -c astc -b 6x5

# example-astc-6x6
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-6x6.ktx -m astc -c astc -b 6x6

# example-astc-8x5
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-8x5.ktx -m astc -c astc -b 8x5

# example-astc-8x6
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-8x6.ktx -m astc -c astc -b 8x6

# example-astc-8x8
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-8x8.ktx -m astc -c astc -b 8x8

# example-astc-10x5
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-10x5.ktx -m astc -c astc -b 10x5

# example-astc-10x6
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-10x6.ktx -m astc -c astc -b 10x6

# example-astc-10x8
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-10x8.ktx -m astc -c astc -b 10x8

# example-astc-10x10
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-10x10.ktx -m astc -c astc -b 10x10

# example-astc-12x10
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-12x10.ktx -m astc -c astc -b 12x10

# example-astc-12x12
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-12x12.ktx -m astc -c astc -b 12x12


### ETC

# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

# example-etc1
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc1.ktx -m etc -c etc1

# example-etc2
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc2.ktx -m etc -c etc2

# example-etc2A
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc2A.ktx -m etc -c etc2 -t


### PVR

# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/

# example-pvrtc2BPP
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc2BPP.ktx -m pvr -c pvrtc1

# example-pvrtc2BPPA
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc2BPPA.ktx -m pvr -c pvrtc1 -t

# example-pvrtc4BPP
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc4BPP.ktx -m pvr -c pvrtc1 -b 4

# example-pvrtc4BPPA
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc4BPPA.ktx -m pvr -c pvrtc1 -b 4 -t


### S3TC

# Crunch - https://code.google.com/archive/p/crunch/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

# example-dxt1
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt1.ktx -m s3tc -c dxt1

# example-dxt1A
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt1A.ktx -m s3tc -c dxt1 -t

# example-dxt3
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt3.ktx -m s3tc -c dxt3

# example-dxt5
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt5.ktx -m s3tc -c dxt5
