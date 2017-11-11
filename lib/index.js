// Arguments
const { 
    input,
    method,
} = require('./argsHandler');

// Compression methods
const compressWithASTC = require('./compressWithASTC');
const compressWithETC = require('./compressWithETC');
const compressWithPVR = require('./compressWithPVR');
const compressWithS3TC = require('./compressWithS3TC');

// Utilities
const {
    isPowerOfTwo,
    isSquare,
    getImageSize,
} = require('./utilities');

const { width, height } = getImageSize(input);

// This restriction is imposed as it is much more efficient and some of targeted hardware requires it.
// Example: 2048 x 2048
if (!isSquare(width, height) && !isPowerOfTwo(width)) {
    console.error('Input image must be square');
    return;
}

switch (method) {
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
        console.error(new Error('Compression method was not recognized'));
        break;
}
