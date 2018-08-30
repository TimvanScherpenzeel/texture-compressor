// Native
const path = require('path');

// Arguments
const {
 alpha, bitrate, flags, flipY, input, mipmap, output, quality,
} = require('./argsHandler');

// Constants
const { PVR_SUPPORTED_INPUT_TYPES, PVR_SUPPORTED_OUTPUT_TYPES } = require('./constants');

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

const compressWithPVR = () => {
  const inputFileExtension = getFileExtension(input);
  const outputFileExtension = getFileExtension(output);

  if (!PVR_SUPPORTED_OUTPUT_TYPES.includes(outputFileExtension)) {
    console.error(`${outputFileExtension} is not supported.`);
    console.error(`The supported filetypes are: [${PVR_SUPPORTED_OUTPUT_TYPES}]`);
    return;
  }

  if (PVR_SUPPORTED_INPUT_TYPES.includes(inputFileExtension)) {
    // Compression flag
    let compressionFlag;

    if (alpha) {
      if (parseFloat(bitrate) === 2) {
        compressionFlag = 'PVRTC1_2';
      } else if (parseFloat(bitrate) === 4) {
        compressionFlag = 'PVRTC1_4';
      }
    } else if (!alpha) {
      if (parseFloat(bitrate) === 2) {
        compressionFlag = 'PVRTC1_2_RGB';
      } else if (parseFloat(bitrate) === 4) {
        compressionFlag = 'PVRTC1_4_RGB';
      }
    }

    // Quality flag
    const qualityOptions = ['pvrtcfastest', 'pvrtcfast', 'pvrtcnormal', 'pvrtchigh', 'pvrtcbest'];
    const qualityPicker = Math.floor(quality / 2.1);
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
    console.error(`The supported filetypes are: [${PVR_SUPPORTED_INPUT_TYPES}]`);
  }
};

module.exports = compressWithPVR;
