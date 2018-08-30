// Native
const path = require('path');

// Arguments
const {
 bitrate, flags, flipY, input, mipmap, output, quality,
} = require('./argsHandler');

// Constants
const { ASTC_SUPPORTED_INPUT_TYPES, ASTC_SUPPORTED_OUTPUT_TYPES } = require('./constants');

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

const compressWithASTC = () => {
  const inputFileExtension = getFileExtension(input);
  const outputFileExtension = getFileExtension(output);

  if (!ASTC_SUPPORTED_OUTPUT_TYPES.includes(outputFileExtension)) {
    console.error(`${outputFileExtension} is not supported.`);
    console.error(`The supported filetypes are: [${ASTC_SUPPORTED_OUTPUT_TYPES}]`);
    return;
  }

  if (ASTC_SUPPORTED_INPUT_TYPES.includes(inputFileExtension)) {
    // Compression flag
    let compressionFlag;

    switch (bitrate) {
      case '4x4':
        compressionFlag = 'ASTC_4x4';
        break;
      case '5x4':
        compressionFlag = 'ASTC_5x4';
        break;
      case '5x5':
        compressionFlag = 'ASTC_5x5';
        break;
      case '6x5':
        compressionFlag = 'ASTC_6x5';
        break;
      case '6x6':
        compressionFlag = 'ASTC_6x6';
        break;
      case '8x5':
        compressionFlag = 'ASTC_8x5';
        break;
      case '8x6':
        compressionFlag = 'ASTC_8x6';
        break;
      case '8x8':
        compressionFlag = 'ASTC_8x8';
        break;
      case '10x5':
        compressionFlag = 'ASTC_10x5';
        break;
      case '10x6':
        compressionFlag = 'ASTC_10x6';
        break;
      case '10x8':
        compressionFlag = 'ASTC_10x8';
        break;
      case '10x10':
        compressionFlag = 'ASTC_10x10';
        break;
      case '12x10':
        compressionFlag = 'ASTC_12x10';
        break;
      case '12x12':
        compressionFlag = 'ASTC_12x12';
        break;
      case '3x3x3':
        compressionFlag = 'ASTC_3x3x3';
        break;
      case '4x3x3':
        compressionFlag = 'ASTC_4x3x3';
        break;
      case '4x4x3':
        compressionFlag = 'ASTC_4x4x3';
        break;
      case '4x4x4':
        compressionFlag = 'ASTC_4x4x4';
        break;
      case '5x4x4':
        compressionFlag = 'ASTC_5x4x4';
        break;
      case '5x5x4':
        compressionFlag = 'ASTC_5x5x4';
        break;
      case '5x5x5':
        compressionFlag = 'ASTC_5x5x5';
        break;
      case '6x5x5':
        compressionFlag = 'ASTC_6x5x5';
        break;
      case '6x6x5':
        compressionFlag = 'ASTC_6x6x5';
        break;
      case '6x6x6':
        compressionFlag = 'ASTC_6x6x6';
        break;
      default:
        compressionFlag = 'ASTC_4x4';
        break;
    }

    // Quality flag
    const qualityOptions = [
      'astcveryfast',
      'astcfast',
      'astcmedium',
      'astcthorough',
      'astcexhaustive',
    ];
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

    createToolProcess(toolPath, combinedFlags, compressionToolDirectory);
  } else {
    console.error(`${inputFileExtension} is not supported.`);
    console.error(`The supported filetypes are: [${ASTC_SUPPORTED_INPUT_TYPES}]`);
  }
};

module.exports = compressWithASTC;
