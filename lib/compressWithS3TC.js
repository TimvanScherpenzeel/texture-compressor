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
	S3TC_SUPPORTED_INPUT_TYPES,
	S3TC_SUPPORTED_OUTPUT_TYPES,
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

	if (!S3TC_SUPPORTED_OUTPUT_TYPES.includes(outputFileExtension)) {
		console.error(`${outputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${S3TC_SUPPORTED_OUTPUT_TYPES}]`);
		return;
	}

	if (S3TC_SUPPORTED_INPUT_TYPES.includes(inputFileExtension)) {
		// Compression flag
		let compressionFlag;

		if (compression === 'dxt1') {
			if (transparent && outputFileExtension === '.crn') {
				console.log('Crunch compressor does not support DXT1 with alpha, the alpha channel will be ignored.');
				compressionFlag = '-DXT1';
			} else if (transparent) {
				compressionFlag = '-DXT1A';
			} else {
				compressionFlag = '-DXT1';
			}
		} else if (compression === 'dxt3') {
			compressionFlag = '-DXT3';
		} else if (compression === 'dxt5') {
			compressionFlag = '-DXT5';
		}

		// Quality flag
		let CRNQualityFlag;
		let DXTQualityFlag;

		if (outputFileExtension === '.crn') {
			CRNQualityFlag = quality * 25.5; // [0 - 255]
		} else {
			const qualityOptions = ['superfast', 'fast', 'normal', 'better', 'uber'];
			const qualityPicker = (Math.floor(quality / 2.1));
			DXTQualityFlag = qualityOptions[qualityPicker]; // One of the five options
		}

		// Flag mapping
		const flagMapping = [
			'-file', input,
			'-out', output,
			`${compressionFlag}`,
			CRNQualityFlag === Number ? '-quality' : '-dxtQuality',
			CRNQualityFlag === Number ? `${CRNQualityFlag}` : `${DXTQualityFlag}`,
			'-helperThreads', os.cpus().length,
			'-mipMode', 'None',
		];

		const toolPath = path.join(compressionToolDirectory, 'crunch');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		const combinedFlags = [...flagMapping, ...toolFlags];

		createProcess(toolPath, combinedFlags);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${S3TC_SUPPORTED_INPUT_TYPES}]`);
	}
};

module.exports = compressWithS3TC;
