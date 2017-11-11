const path = require('path');

const { ETCSupportedInputTypes } = require('./constants');
const { compressionToolDirectory } = require('./utilities');

const compressWithETC = () => {
    const toolPath = path.join(compressionToolDirectory, 'EtcTool');
};

module.exports = compressWithETC;
