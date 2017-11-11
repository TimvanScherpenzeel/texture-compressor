const path = require('path');

const { PVRSupportedInputTypes } = require('./constants');
const { compressionToolDirectory } = require('./utilities');

const compressWithPVR = () => {
	const toolPath = path.join(compressionToolDirectory, 'PVRTexToolCLI');
};

module.exports = compressWithPVR;
