const path = require('path');

const { ASTCSupportedInputTypes } = require('./constants');
const { compressionToolDirectory } = require('./utilities');

const compressWithASTC = () => {
    const toolPath = path.join(compressionToolDirectory, 'astcenc');
};

module.exports = compressWithASTC;
