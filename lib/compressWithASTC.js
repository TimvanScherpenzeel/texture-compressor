// Native
const os = require('os');
const path = require('path');

// Arguments
const {
	bitrate,
	flags,
	input,
	output,
	quality,
	transparent,
} = require('./argsHandler');

// Constants
const {
	ASTC_SUPPORTED_INPUT_TYPES,
	ASTC_SUPPORTED_OUTPUT_TYPES,
} = require('./constants');

// Child process
const createProcess = require('./createProcess');

// Utilities
const {
	compressionToolDirectory,
	getFileExtension,
	convertNumberToDecimalString,
	createFlagsForTool,
	splitFlagAndValue,
} = require('./utilities');

const compressWithASTC = () => {
	const inputFileExtension = getFileExtension(input);
	const outputFileExtension = getFileExtension(output);

	if (!ASTC_SUPPORTED_OUTPUT_TYPES.includes(outputFileExtension)) {
		console.error(`${outputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${ASTC_SUPPORTED_OUTPUT_TYPES}]`);
		return;
	}

	if (ASTC_SUPPORTED_INPUT_TYPES.includes(inputFileExtension)) {
		// Bitrate flag (2.0 bbp = 8x8 blocksize)
		// 4x4, 5x4, 5x5, 6x5, 6x6, 8x5, 8x6, 8x8, 10x5, 10x6, 10x8, 10x10, 12x10, 12x12
		const bitrateFlag = convertNumberToDecimalString(bitrate);

		// Quality flag
		const qualityOptions = ['-veryfast', '-fast', '-medium', '-thorough', '-exhaustive'];
		const qualityPicker = (Math.floor(quality / 2.1));
		const qualityFlag = qualityOptions[qualityPicker]; // One of the five options

		// Flag mapping
		const flagMapping = [
			'-cl', input,
			output,
			`${bitrateFlag}`,
			'-j', os.cpus().length,
			`${qualityFlag}`,
		];

		// Transparent mapping, tool doesn't accept empty flags
		if (transparent) {
			flagMapping.push('-alphablend');
		}

		const toolPath = path.join(compressionToolDirectory, 'astcenc');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		const combinedFlags = [...flagMapping, ...toolFlags];

		createProcess(toolPath, combinedFlags);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${ASTC_SUPPORTED_INPUT_TYPES}]`);
	}
};

module.exports = compressWithASTC;
