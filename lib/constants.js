const constants = {
  IS_ASTC: process.argv.includes('astc'),
  IS_ETC: process.argv.includes('etc'),
  IS_PVR: process.argv.includes('pvr'),
  IS_S3TC: process.argv.includes('s3tc'),

  ASTC_COMPRESSION_TYPES: ['astc'],
  ASTC_SUPPORTED_INPUT_TYPES: ['.jpeg', '.jpg', '.png', '.bmp', '.gif'],
  ASTC_SUPPORTED_OUTPUT_TYPES: ['.ktx'],

  ETC_COMPRESSION_TYPES: ['etc1', 'etc2'],
  ETC_SUPPORTED_INPUT_TYPES: ['.jpeg', '.jpg', '.png', '.bmp'],
  ETC_SUPPORTED_OUTPUT_TYPES: ['.ktx'],

  PVR_COMPRESSION_TYPES: ['pvrtc1'],
  PVR_SUPPORTED_INPUT_TYPES: ['.jpeg', '.jpg', '.png', '.bmp'],
  PVR_SUPPORTED_OUTPUT_TYPES: ['.ktx'],

  S3TC_COMPRESSION_TYPES: ['dxt1', 'dxt3', 'dxt5'],
  S3TC_SUPPORTED_INPUT_TYPES: ['.jpeg', '.jpg', '.png', '.bmp', '.gif'],
  S3TC_SUPPORTED_OUTPUT_TYPES: ['.ktx'],
};

module.exports = constants;
