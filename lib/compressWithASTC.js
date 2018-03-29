// Native
const fs = require('fs');
const os = require('os');
const path = require('path');

// Vendor
const fsExtra = require('fs-extra');

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

function processAndReturnAsBuffer(toolPath, toolFlags = [], outputPath) {
	return createProcess(toolPath, toolFlags)
		.then(() => fsExtra.readFile(outputPath));
}

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
		const blockSizes = ['4x4', '5x4', '5x5', '6x5', '6x6', '8x5', '8x6', '8x8', '10x5', '10x6', '10x8', '10x10', '12x10', '12x12'];

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

		// Astcenc does not support writing to KTX by directly so we prepend it with a KTX header
		processAndReturnAsBuffer(toolPath, combinedFlags, output)
			.then((buffer) => {
				// https://github.com/AnalyticalGraphicsInc/gltf-pipeline/blob/a28152503f28be88051de8df85f5f6a350169e8b/lib/compressTexture.js#L436-L485
				const blockWidth = buffer.readUInt8(4);
				const blockHeight = buffer.readUInt8(5);
				const xsize = [buffer.readUInt8(7), buffer.readUInt8(8), buffer.readUInt8(9)];
				const ysize = [buffer.readUInt8(10), buffer.readUInt8(11), buffer.readUInt8(12)];
				const pixelHeight = xsize[0] + 256 * xsize[1] + 65536 * xsize[2];
				const pixelWidth = ysize[0] + 256 * ysize[1] + 65536 * ysize[2];
				const blockSize = `${blockWidth}x${blockHeight}`;
				const glInternalFormat = 0x93B0 + blockSizes.indexOf(blockSize);
				const glBaseInternalFormat = 0x1908; // gl.RGBA
				const imageData = buffer.slice(16);
				const imageSize = imageData.length;

				// KTX header
				const ktxHeader = Buffer.allocUnsafe(68);
				const identifier = [0xAB, 0x4B, 0x54, 0x58, 0x20, 0x31, 0x31, 0xBB, 0x0D, 0x0A, 0x1A, 0x0A];

				for (let i = 0; i < 12; i++) {
					ktxHeader.writeUInt8(identifier[i], i);
				}

				ktxHeader.writeUInt32LE(0x04030201, 12); // endianness
				ktxHeader.writeUInt32LE(0, 16); // glType
				ktxHeader.writeUInt32LE(1, 20); // glTypeSize
				ktxHeader.writeUInt32LE(0, 24); // glFormat
				ktxHeader.writeUInt32LE(glInternalFormat, 28); // glInternalFormat
				ktxHeader.writeUInt32LE(glBaseInternalFormat, 32); // glBaseInternalFormat
				ktxHeader.writeUInt32LE(pixelWidth, 36); // pixelWidth
				ktxHeader.writeUInt32LE(pixelHeight, 40); // pixelHeight
				ktxHeader.writeUInt32LE(0, 44); // pixelDepth
				ktxHeader.writeUInt32LE(0, 48); // numberOfArrayElements
				ktxHeader.writeUInt32LE(1, 52); // numberOfFaces
				ktxHeader.writeUInt32LE(1, 56); // numberOfMipmapLevels
				ktxHeader.writeUInt32LE(0, 60); // bytesOfKeyValueData
				ktxHeader.writeUInt32LE(imageSize, 64); // imageSize

				console.log(blockSize, imageSize);
				const result = Buffer.concat([ktxHeader, imageData]);

				fs.writeFile(output, result, 'binary', (error) => {
					if (error) {
						console.error(error);
					} else {
						console.log(`Succesfully written file to ${output}`);
					}
				});
			});
	} else {
		console.error(`${inputFileExtension} is not supported.`);
		console.error(`The supported filetypes are: [${ASTC_SUPPORTED_INPUT_TYPES}]`);
	}
};

module.exports = compressWithASTC;
