// Native
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
	PVRSupportedInputTypes,
	PVRSupportedOutputTypes,
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

const compressWithPVR = () => {
	const inputFileExtension = getFileExtension(input);
	const outputFileExtension = getFileExtension(output);

	if (!PVRSupportedOutputTypes.includes(outputFileExtension)) {
		console.error(`${outputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${PVRSupportedOutputTypes}]`);
		return;
	}

	if (PVRSupportedInputTypes.includes(inputFileExtension)) {
		// Compression flag
		let compressionFlag;

		if (transparent) {
			if (bitrate === 2) {
				compressionFlag = 'PVRTC1_2';
			} else if (bitrate === 4) {
				compressionFlag = 'PVRTC1_4';
			}
		} else if (!transparent) {
			if (bitrate === 2) {
				compressionFlag = 'PVRTC1_2_RGB';
			} else if (bitrate === 4) {
				compressionFlag = 'PVRTC1_4_RGB';
			}
		}

		// Quality flag
		const qualityOptions = ['pvrtcfastest', 'pvrtcfast', 'pvrtcnormal', 'pvrtchigh', 'pvrtcbest'];
		const qualityPicker = (Math.floor(quality / 2.1));
		const qualityFlag = qualityOptions[qualityPicker]; // One of the five options

		// Default mapping
		const defaultMapping = [
			'-square', '-',
			'-pot', '-',
		];

		// Flag mapping
		const flagMapping = [
			'-i', input,
			'-o', output,
			'-f', `${compressionFlag}`,
			'-q', `${qualityFlag}`,
		];

		const toolPath = path.join(compressionToolDirectory, 'PVRTexToolCLI');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		const combinedFlags = [...defaultMapping, ...flagMapping, ...toolFlags];

		createProcess(toolPath, combinedFlags);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${PVRSupportedInputTypes}]`);
	}
};

module.exports = compressWithPVR;
