// Native
const path = require('path');

// Arguments
const {
	input,
	output,
	compression,
	quality,
	transparancy,
	flags,
} = require('./argsHandler');

// Constants
const {
	S3TCSupportedInputTypes,
	S3TCSupportedOutputTypes,
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

const compressWithS3TC = () => {
	const inputFileExtension = getFileExtension(input);
	const outputFileExtension = getFileExtension(output);

	if (!S3TCSupportedOutputTypes.includes(outputFileExtension)) {
		console.error(`${outputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${S3TCSupportedOutputTypes}]`);
		return;
	}

	console.log(quality);
	console.log(transparancy);

	if (S3TCSupportedInputTypes.includes(inputFileExtension)) {
		const flagMapping = [
			'-file', input,
			'-out', output,
			`-${compression}`,
		];

		const toolPath = path.join(compressionToolDirectory, 'crunch');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		createProcess(toolPath, [...flagMapping, ...toolFlags]);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${S3TCSupportedInputTypes}]`);
	}
};

module.exports = compressWithS3TC;
