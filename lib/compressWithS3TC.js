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

	if (S3TCSupportedInputTypes.includes(inputFileExtension)) {
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
		} else {
			compressionFlag = '-DXT5';
		}

		// Quality flag
		let crnQualityFlag;
		let dxtQualityFlag;

		if (outputFileExtension === '.crn') {
			crnQualityFlag = quality * 25.5; // [0 - 255]
		} else {
			const qualityOptions = ['superfast', 'fast', 'normal', 'better', 'uber'];
			const qualityPicker = (Math.floor(quality / 2.1));
			dxtQualityFlag = qualityOptions[qualityPicker]; // One of the five options
		}

		// Default mapping
		const defaultMapping = [
			'-helperThreads', os.cpus().length,
			'-mipMode', 'None',
		];

		// Flag mapping
		const flagMapping = [
			'-file', input,
			'-out', output,
			`${compressionFlag}`,
			crnQualityFlag ? '-quality' : '-dxtQuality',
			crnQualityFlag ? `${crnQualityFlag}` : `${dxtQualityFlag}`,
		];

		const toolPath = path.join(compressionToolDirectory, 'crunch');
		const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

		const combinedFlags = [...defaultMapping, ...flagMapping, ...toolFlags];

		createProcess(toolPath, combinedFlags);
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${S3TCSupportedInputTypes}]`);
	}
};

module.exports = compressWithS3TC;
