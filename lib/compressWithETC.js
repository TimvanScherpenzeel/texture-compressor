// Native
const os = require('os');
const path = require('path');

// Arguments
const {
	compression,
	flags,
	input,
	output,
	quality,
	transparent,
} = require('./argsHandler');

// Constants
const {
	ETC_SUPPORTED_INPUT_TYPES,
	ETC_SUPPORTED_OUTPUT_TYPES,
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

	if (!ETC_SUPPORTED_OUTPUT_TYPES.includes(outputFileExtension)) {
		console.error(`${outputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${ETC_SUPPORTED_OUTPUT_TYPES}]`);
		return;
	}

	if (ETC_SUPPORTED_INPUT_TYPES.includes(inputFileExtension)) {
		// Compression flag
		let compressionFlag;

		if (compression === 'etc1') {
			compressionFlag = 'ETC1';
		} else if (compression === 'etc2') {
			compressionFlag = (transparent) ? 'RGBA8' : 'RGB8';
		}

		// Flag mapping
		const flagMapping = [
			input,
			'-format', `${compressionFlag}`,
			'-effort', `${quality * 10.0}`,
			'-jobs', os.cpus().length,
			'-output', output,
		];

		const toolPath = path.join(compressionToolDirectory, 'EtcTool');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		const combinedFlags = [...flagMapping, ...toolFlags];

		createProcess(toolPath, combinedFlags);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${ETC_SUPPORTED_INPUT_TYPES}]`);
	}
};

module.exports = compressWithETC;
