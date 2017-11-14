// Native
const path = require('path');

// Arguments
const {
	flags,
	input,
	output,
} = require('./argsHandler');

// Constants
const {
	ETCSupportedInputTypes,
	ETCSupportedOutputTypes,
} = require('./constants');

// Child process
const createProcess = require('./createProcess');

// Utilities
const {
	compressionToolDirectory,
	getFileExtension,
	createFlagsForTool,
	splitFlagAndValue,
} = require('./utilities');

const compressWithETC = () => {
	const inputFileExtension = getFileExtension(input);
	const outputFileExtension = getFileExtension(output);

	if (!ETCSupportedOutputTypes.includes(outputFileExtension)) {
		console.error(`${outputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${ETCSupportedOutputTypes}]`);
		return;
	}

	if (ETCSupportedInputTypes.includes(inputFileExtension)) {
		// Flag mapping
		const flagMapping = [

		];

		const toolPath = path.join(compressionToolDirectory, 'EtcTool');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		const combinedFlags = [...flagMapping, ...toolFlags];

		createProcess(toolPath, combinedFlags);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${ETCSupportedInputTypes}]`);
	}
};

module.exports = compressWithETC;
