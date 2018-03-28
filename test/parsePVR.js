function parsePVR(buffer) {
	// Supports ETC1, ETC2, PVRTC1
	// WEBGL_compressed_texture_etc1
	// WEBGL_compressed_texture_etc
	// WEBGL_compressed_texture_pvrtc

	// PVR
	const PVR_HEADER_LENGTH = 13;
	const PVR_MAGIC = 0x03525650;
	const PVR_HEADER_MAGIC = 0;
	const PVR_HEADER_FORMAT = 2;
	const PVR_HEADER_HEIGHT = 6;
	const PVR_HEADER_WIDTH = 7;
	const PVR_HEADER_MIPMAPCOUNT = 11;
	const PVR_HEADER_METADATA = 12;

	// ENUM ETC1
	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1/
	const COMPRESSED_RGB_ETC1_WEBGL = 0x8D64;

	// ENUM ETC2
	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
	const COMPRESSED_RGB8_ETC2 = 0x9274;
	const COMPRESSED_RGBA8_ETC2_EAC = 0x9278;

	// ENUM PVRTC
	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
	const COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00;
	const COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8C01;
	const COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02;
	const COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8C03;

	// ETC1
	const ETC1 = 6;

	// ETC2
	const ETC2_RGB = 22;
	const ETC2_RGBA = 23;

	// PVRTC
	const PVRTC_2BPP_RGB = 0;
	const PVRTC_2BPP_RGBA = 1;
	const PVRTC_4BPP_RGB = 2;
	const PVRTC_4BPP_RGBA = 3;

	const header = new Int32Array(buffer, 0, PVR_HEADER_LENGTH);

	if (header[PVR_HEADER_MAGIC] !== PVR_MAGIC) {
		console.warn(`Invalid magic number: ${header[PVR_HEADER_MAGIC]} in PVR header`);
	}

	const fileType = header[PVR_HEADER_FORMAT];

	let compression;
	let format;
	let type;

	switch(fileType) {
		// ETC1
		case ETC1:
			format = COMPRESSED_RGB_ETC1_WEBGL;
			compression = 'etc1';
			type = 'ETC1_RGB';
			break;

		// ETC2
		case ETC2_RGB:
			format = COMPRESSED_RGB8_ETC2;
			compression = 'etc';
			type = 'ETC2_RGB';
			break;

		case ETC2_RGBA:
			format = COMPRESSED_RGBA8_ETC2_EAC;
			compression = 'etc';
			type = 'ETC2_RGBA';
			break;

		// PVRTC
		case PVRTC_2BPP_RGB:
			format = COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			compression = 'pvrtc';
			type = 'PVRTC_RGB_2BPP';
			break;

		case PVRTC_2BPP_RGBA:
			format = COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			compression = 'pvrtc';
			type = 'PVRTC_RGBA_2BPP';
			break;

		case PVRTC_4BPP_RGB:
			format = COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			compression = 'pvrtc';
			type = 'PVRTC_RGB_4BPP';
			break;

		case PVRTC_4BPP_RGBA:
			format = COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			compression = 'pvrtc';
			type = 'PVRTC_RGBA_4BPP';
			break;

		default:
			console.warn(`${fileType} was not recognized as a valid type`);
			break;
	}

	const mipMapLevels = Math.max(1, header[PVR_HEADER_MIPMAPCOUNT])
	const width = header[PVR_HEADER_WIDTH];
	const height = header[PVR_HEADER_HEIGHT];
	const dataOffset = header[PVR_HEADER_METADATA] + 52;
	const data = new Uint8Array(buffer, dataOffset);

	return {
		compression,
		mipMapLevels,
		width,
		height,
		format,
		type,
		data,
	}
}
