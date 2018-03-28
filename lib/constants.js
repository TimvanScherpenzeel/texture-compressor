const constants = {
	IS_ETC: process.argv.includes('etc'),
	IS_PVR: process.argv.includes('pvr'),
	IS_S3TC: process.argv.includes('s3tc'),

	ETC_COMPRESSION_TYPES: ['etc1', 'etc2'],
	ETC_SUPPORTED_INPUT_TYPES: ['.jpeg', '.jpg', '.png', '.bmp'],
	ETC_SUPPORTED_OUTPUT_TYPES: ['.pvr'],

	PVR_COMPRESSION_TYPES: ['pvrtc1'],
	PVR_SUPPORTED_INPUT_TYPES: ['.jpeg', '.jpg', '.png', '.bmp'],
	PVR_SUPPORTED_OUTPUT_TYPES: ['.pvr'],

	S3TC_COMPRESSION_TYPES: ['dxt1', 'dxt3', 'dxt5'],
	S3TC_SUPPORTED_INPUT_TYPES: ['.jpeg', '.jpg', '.png', '.bmp', '.gif'],
	S3TC_SUPPORTED_OUTPUT_TYPES: ['.dds'],
};

module.exports = constants;
