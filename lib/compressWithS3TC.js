// Native
const os = require('os');
const path = require('path');

// Arguments
const {
  alpha,
  compression,
  flags,
  flipY,
  input,
  mipmap,
  output,
  quality,
} = require('./argsHandler');

// Constants
const { S3TC_SUPPORTED_INPUT_TYPES, S3TC_SUPPORTED_OUTPUT_TYPES } = require('./constants');

// Child process
const createToolProcess = require('./createToolProcess');

// Utilities
const {
  getFileExtension,
  getImageSize,
  getMipChainLevels,
  compressionToolDirectory,
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
      compressionFlag = alpha ? '-DXT1A' : '-DXT1';
    } else if (compression === 'dxt3') {
      compressionFlag = '-DXT3';
    } else if (compression === 'dxt5') {
      compressionFlag = '-DXT5';
    }

    // Quality flag
    const qualityOptions = ['superfast', 'fast', 'normal', 'better', 'uber'];
    const qualityPicker = Math.floor(quality / 2.1);
    const DXTQualityFlag = qualityOptions[qualityPicker]; // One of the five options

    // Get input image size
    const { width } = getImageSize(input);

    // Flag mapping
    const flagMapping = [
      '-file',
      input,
      '-out',
      output,
      '-fileformat',
      'ktx',
      `${compressionFlag}`,
      '-dxtQuality',
      `${DXTQualityFlag}`,
      '-helperThreads',
      os.cpus().length,
      '-mipMode',
      `${mipmap ? 'Generate' : 'None'}`,
      '-maxmips',
      `${mipmap ? getMipChainLevels(width) : 16}`,
    ];

    if (flipY) {
      flagMapping.push('-yflip');
    }

    const toolPath = path.join(compressionToolDirectory, 'crunch');
    const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

    const combinedFlags = [...flagMapping, ...toolFlags];

    createToolProcess(toolPath, combinedFlags);
  } else {
    console.error(`${inputFileExtension} is not supported.`);
    console.error(`The supported filetypes are: [${S3TC_SUPPORTED_INPUT_TYPES}]`);
  }
};

module.exports = compressWithS3TC;
