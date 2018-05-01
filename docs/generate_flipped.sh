#!/bin/bash

### ASTC
# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Astcenc - https://github.com/ARM-software/astc-encoder
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

# example-astc-4x4
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-astc-4x4.ktx -t astc -c astc -b 4x4 -y

# example-astc-8x8
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-astc-8x8.ktx -t astc -c astc -b 8x8 -y

### ETC

# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/

# example-etc1
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-etc1.ktx -t etc -c etc1 -y

# example-etc2
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-etc2.ktx -t etc -c etc2 -y

# example-etc2A
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-etc2A.ktx -t etc -c etc2 -a -y


### PVR

# PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/

# example-pvrtc2BPP
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-pvrtc2BPP.ktx -t pvr -c pvrtc1 -y

# example-pvrtc2BPPA
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-pvrtc2BPPA.ktx -t pvr -c pvrtc1 -a -y

# example-pvrtc4BPP
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-pvrtc4BPP.ktx -t pvr -c pvrtc1 -b 4 -y

# example-pvrtc4BPPA
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-pvrtc4BPPA.ktx -t pvr -c pvrtc1 -b 4 -a -y


### S3TC

# Crunch - https://code.google.com/archive/p/crunch/
# Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/

# example-dxt1
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-dxt1.ktx -t s3tc -c dxt1 -y

# example-dxt1A
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-dxt1A.ktx -t s3tc -c dxt1 -a -y

# example-dxt3
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-dxt3.ktx -t s3tc -c dxt3 -y

# example-dxt5
node ./bin/texture-compressor -i ./docs/example/example.png -o ./docs/example/flippedY/example-dxt5.ktx -t s3tc -c dxt5 -y
