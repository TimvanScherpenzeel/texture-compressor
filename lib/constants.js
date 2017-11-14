const constants = {
	isASTC: process.argv.includes('astc'),
	isETC: process.argv.includes('etc'),
	isPVR: process.argv.includes('pvr'),
	isS3TC: process.argv.includes('s3tc'),

	// ASTC ('astc')
	// Supported by all iOS devices with an A8 processor or higher (iPhone 6+)
	// Astcenc - https://github.com/ARM-software/astc-encoder
	// Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
	ASTCCompressionTypes: ['astc'],
	ASTCSupportedInputTypes: ['.jpeg', '.jpg', '.png', '.bmp', '.gif'],
	ASTCSupportedOutputTypes: ['.dds'],

	// ETC ('etc1', 'etc2')
	// Supported by most Android devices
	// Etc2comp - https://github.com/google/etc2comp
	// Extension - https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
	ETCCompressionTypes: ['etc1', 'etc2'],
	ETCSupportedInputTypes: ['.png'],
	ETCSupportedOutputTypes: ['.dds'],

	// PVR ('pvrtc1', 'pvrtc2')
	// Supported by all iOS devices and some Android devices
	// PVRTexTool - https://community.imgtec.com/developers/powervr/tools/pvrtextool/
	// Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
	PVRCompressionTypes: ['pvrtc1', 'pvrtc2'],
	PVRSupportedInputTypes: ['.jpeg', '.jpg', '.png', '.bmp'],
	PVRSupportedOutputTypes: ['.dds', '.pvr'],

	// S3TC ('dxt1', 'dxt3', 'dxt5')
	// Supported by all desktop devices and some Android devices
	// Crunch - https://code.google.com/archive/p/crunch/
	// Extension - http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
	S3TCCompressionTypes: ['dxt1', 'dxt3', 'dxt5'],
	S3TCSupportedInputTypes: ['.jpeg', '.jpg', '.png', '.bmp', '.gif'],
	S3TCSupportedOutputTypes: ['.dds', '.crn'],
};

module.exports = constants;
