// Native
const path = require('path');

// Arguments
const {
	input,
	output,
	compression,
	flags,
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

	// PVRTC1_2', 'PVRTC1_4', 'PVRTC1_2_RGB', 'PVRTC1_4_RGB', 'PVRTC2_2', 'PVRTC2_4
	// PVRQualityTypes: ['pvrtcfastest', 'pvrtcfast', 'pvrtcnormal', 'pvrtchigh', 'pvrtcbest'],

	if (PVRSupportedInputTypes.includes(inputFileExtension)) {
		const flagMapping = [
			'-i', input,
			'-o', output,
		];

		const toolPath = path.join(compressionToolDirectory, 'crunch');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		createProcess(toolPath, [...flagMapping, ...toolFlags]);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${PVRSupportedInputTypes}]`);
	}
};

module.exports = compressWithPVR;
