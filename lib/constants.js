const constants = {
	isASTC: process.argv.includes('astc'),
	isETC: process.argv.includes('etc'),
	isPVR: process.argv.includes('pvr'),
	isS3TC: process.argv.includes('s3tc'),

	ASTCCompressionTypes: ['astc'],
	ASTCSupportedInputTypes: ['.jpeg', '.jpg', '.png', '.bmp', '.gif'],
	ASTCSupportedOutputTypes: ['.dds'],

	ETCCompressionTypes: ['etc1', 'etc2'],
	ETCSupportedInputTypes: ['.png'],
	ETCSupportedOutputTypes: ['.dds'],

	PVRCompressionTypes: ['pvrtc1'],
	PVRSupportedInputTypes: ['.jpeg', '.jpg', '.png', '.bmp'],
	PVRSupportedOutputTypes: ['.dds', '.pvr'],

	S3TCCompressionTypes: ['dxt1', 'dxt3', 'dxt5'],
	S3TCSupportedInputTypes: ['.jpeg', '.jpg', '.png', '.bmp', '.gif'],
	S3TCSupportedOutputTypes: ['.dds', '.crn'],
};

module.exports = constants;
