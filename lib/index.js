// Arguments
const { input, quality, type } = require('./argsHandler');

// Compression types
const compressWithASTC = require('./compressWithASTC');
const compressWithETC = require('./compressWithETC');
const compressWithPVR = require('./compressWithPVR');
const compressWithS3TC = require('./compressWithS3TC');

// Utilities
const { isPowerOfTwo, isSquare, getImageSize } = require('./utilities');

// Get input image size
const { width, height } = getImageSize(input);

// This restriction is imposed as it is much more
// efficient and some of targeted hardware requires it.
// Example: 2048 x 2048
if (!isSquare(width, height) || !isPowerOfTwo(width) || !isPowerOfTwo(height)) {
  throw new Error('Input image must be square and a power of two');
}

if (quality < 0 || quality > 10) {
  throw new Error('Quality flag should be in a range between 0 and 10');
}

switch (type) {
  case 'astc':
    compressWithASTC();
    break;
  case 'etc':
    compressWithETC();
    break;
  case 'pvr':
    compressWithPVR();
    break;
  case 's3tc':
    compressWithS3TC();
    break;
  default:
    console.error(`Compression type: ${type} was not recognized`);
    break;
}
