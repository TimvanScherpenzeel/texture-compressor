// Native
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
const { ETC_SUPPORTED_INPUT_TYPES, ETC_SUPPORTED_OUTPUT_TYPES } = require('./constants');

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
      compressionFlag = alpha ? 'ETC2_RGBA' : 'ETC2_RGB';
    }

    // Quality flag
    const qualityOptions = ['etcfast', 'etcslow', 'etcfastperceptual', 'etcslowperceptual'];
    const qualityPicker = Math.floor(quality / 2.7);
    const qualityFlag = qualityOptions[qualityPicker]; // One of the five options

    // Flag mapping
    const flagMapping = [
      '-i',
      input,
      '-o',
      output,
      '-f',
      `${compressionFlag}`,
      '-q',
      `${qualityFlag}`,
      '-square',
      '+',
      '-pot',
      '+',
    ];

    if (mipmap) {
      const { width } = getImageSize(input);
      flagMapping.push('-m', getMipChainLevels(width));
    }

    if (flipY) {
      flagMapping.push('-flip', 'y');
    }

    const toolPath = path.join(compressionToolDirectory, 'PVRTexToolCLI');
    const toolFlags = flags ? splitFlagAndValue(createFlagsForTool(flags)) : [];

    const combinedFlags = [...flagMapping, ...toolFlags];

    createToolProcess(toolPath, combinedFlags);
  } else {
    console.error(`${inputFileExtension} is not supported.`);
    console.error(`The supported filetypes are: [${ETC_SUPPORTED_INPUT_TYPES}]`);
  }
};

module.exports = compressWithETC;
