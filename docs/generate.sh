#!/bin/bash

### ASTC
# Astcenc - https://github.com/ARM-software/astc-encoder
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

# example-astc-4x4
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-4x4.ktx -t astc -c astc -b 4x4

# example-astc-8x8
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-astc-8x8.ktx -t astc -c astc -b 8x8

### ETC

# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

# example-etc1
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc1.ktx -t etc -c etc1

# example-etc2
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc2.ktx -t etc -c etc2

# example-etc2A
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-etc2A.ktx -t etc -c etc2 -a


### PVR

# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/

# example-pvrtc2BPP
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc2BPP.ktx -t pvr -c pvrtc1

# example-pvrtc2BPPA
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc2BPPA.ktx -t pvr -c pvrtc1 -a

# example-pvrtc4BPP
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc4BPP.ktx -t pvr -c pvrtc1 -b 4

# example-pvrtc4BPPA
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-pvrtc4BPPA.ktx -t pvr -c pvrtc1 -b 4 -a


### S3TC

# Crunch - https://code.google.com/archive/p/crunch/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

# example-dxt1
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt1.ktx -t s3tc -c dxt1

# example-dxt1A
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt1A.ktx -t s3tc -c dxt1 -a

# example-dxt3
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt3.ktx -t s3tc -c dxt3

# example-dxt5
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/example-dxt5.ktx -t s3tc -c dxt5
