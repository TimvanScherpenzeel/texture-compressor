function parseKTX(buffer, facesExpected = 1, loadMipmaps = true) {
	// https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    const COMPRESSED_RGBA_ASTC_4x4_KHR = 0x93B0;
    const COMPRESSED_RGBA_ASTC_5x4_KHR = 0x93B1;
    const COMPRESSED_RGBA_ASTC_5x5_KHR = 0x93B2;
    const COMPRESSED_RGBA_ASTC_6x5_KHR = 0x93B3;
    const COMPRESSED_RGBA_ASTC_6x6_KHR = 0x93B4;
    const COMPRESSED_RGBA_ASTC_8x5_KHR = 0x93B5;
    const COMPRESSED_RGBA_ASTC_8x6_KHR = 0x93B6;
    const COMPRESSED_RGBA_ASTC_8x8_KHR = 0x93B7;
    const COMPRESSED_RGBA_ASTC_10x5_KHR = 0x93B8;
    const COMPRESSED_RGBA_ASTC_10x6_KHR = 0x93B9;
    const COMPRESSED_RGBA_ASTC_10x8_KHR = 0x93BA;
    const COMPRESSED_RGBA_ASTC_10x10_KHR = 0x93BB;
    const COMPRESSED_RGBA_ASTC_12x10_KHR = 0x93BC;
    const COMPRESSED_RGBA_ASTC_12x12_KHR = 0x93BD;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 0x93D0;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 0x93D1;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 0x93D2;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 0x93D3;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 0x93D4;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 0x93D5;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 0x93D6;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 0x93D7;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 0x93D8;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 0x93D9;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 0x93DA;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 0x93DB;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 0x93DC;
    const COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 0x93DD;

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
    const COMPRESSED_R11_EAC = 0x9270;
    const COMPRESSED_SIGNED_R11_EAC = 0x9271;
    const COMPRESSED_RG11_EAC = 0x9272;
    const COMPRESSED_SIGNED_RG11_EAC = 0x9273;
    const COMPRESSED_RGB8_ETC2 = 0x9274;
    const COMPRESSED_SRGB8_ETC2 = 0x9275;
    const COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9276;
    const COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9277;
    const COMPRESSED_RGBA8_ETC2_EAC = 0x9278;
    const COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9279;

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1/
	const COMPRESSED_RGB_ETC1_WEBGL = 0x8D64;

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    const COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
    const COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;
    const COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
    const COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
	const COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00;
    const COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8C01;
    const COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02;
    const COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8C03;

	const identifier = new Uint8Array(buffer, 0, 12);

	if (identifier[0] !== 0xAB ||
		identifier[1] !== 0x4B ||
		identifier[2] !== 0x54 ||
		identifier[3] !== 0x58 ||
		identifier[4] !== 0x20 ||
		identifier[5] !== 0x31 ||
		identifier[6] !== 0x31 ||
		identifier[7] !== 0xBB ||
		identifier[8] !== 0x0D ||
		identifier[9] !== 0x0A ||
		identifier[10] !== 0x1A ||
		identifier[11] !== 0x0A
	) {
		console.error('Texture missing KTX identifier');
	}

	// Load the rest of the header in 32 bit int
	const header = new Int32Array(buffer, 12, 13);
	const glType = header[1];
	const glTypeSize = header[2];
	const glFormat = header[3];
	const glInternalFormat = header[4];
	const glBaseInternalFormat = header[5];
	const pixelWidth = header[6];
	const pixelHeight = header[7];
	const pixelDepth = header[8];
	const numberOfArrayElements = header[9];
	const numberOfFaces = header[10];
	let numberOfMipmapLevels = header[11];
	const bytesOfKeyValueData = header[12];

	if (glType !== 0) {
		console.error('Only compressed formats are supported');
	} else {
		numberOfMipmapLevels = Math.max(1, numberOfMipmapLevels);
	}

	if (pixelHeight === 0 || pixelDepth !== 0) {
		console.error('Only 2D textures are supported');
	}

	if (numberOfArrayElements !== 0) {
		console.error('Texture arrays are not supported');
	}

	if (numberOfFaces !== facesExpected) {
		console.error(`Number of faces expected ${facesExpected} but found ${numberOfFaces}`);
	}

	let id;
	let compression;

	switch (glInternalFormat) {
		// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
		case COMPRESSED_RGBA_ASTC_4x4_KHR:
			id = 'ASTC_RGBA_4x4';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_5x4_KHR:
			id = 'ASTC_RGBA_5x4';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_5x5_KHR:
			id = 'ASTC_RGBA_5x5';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_6x5_KHR:
			id = 'ASTC_RGBA_6x5';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_6x6_KHR:
			id = 'ASTC_RGBA_6x6';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_8x5_KHR:
			id = 'ASTC_RGBA_8x5';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_8x6_KHR:
			id = 'ASTC_RGBA_8x6';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_8x8_KHR:
			id = 'ASTC_RGBA_8x8';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_10x5_KHR:
			id = 'ASTC_RGBA_10x5';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_10x6_KHR:
			id = 'ASTC_RGBA_10x6';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_10x8_KHR:
			id = 'ASTC_RGBA_10x8';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_10x10_KHR:
			id = 'ASTC_RGBA_10x10';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_12x10_KHR:
			id = 'ASTC_RGBA_12x10';
			compression = 'astc';
			break;

		case COMPRESSED_RGBA_ASTC_12x12_KHR:
			id = 'ASTC_RGBA_12x12';
			compression = 'astc';
			break;

		// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
		case COMPRESSED_RGB8_ETC2:
			id = 'ETC2_RGB';
			compression = 'etc';
			break;

		case COMPRESSED_RGBA8_ETC2_EAC:
			id = 'ETC2_RGBA';
			compression = 'etc';
			break;

		// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1/
		case COMPRESSED_RGB_ETC1_WEBGL:
			id = 'ETC1_RGB';
			compression = 'etc1';
			break;

		// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
		case COMPRESSED_RGB_S3TC_DXT1_EXT:
			id = 'DXT1_RGB';
			compression = 's3tc';
			break;

		case COMPRESSED_RGBA_S3TC_DXT1_EXT:
			id = 'DXT1_RGBA';
			compression = 's3tc';
			break;

		case COMPRESSED_RGBA_S3TC_DXT3_EXT:
			id = 'DXT3_RGBA';
			compression = 's3tc';
			break;

		case COMPRESSED_RGBA_S3TC_DXT5_EXT:
			id = 'DXT5_RGBA';
			compression = 's3tc';
			break;

		// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
		case COMPRESSED_RGB_PVRTC_4BPPV1_IMG:
		case COMPRESSED_RGB_PVRTC_2BPPV1_IMG:
		case COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:
		case COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:
			compression = 'pvrtc';
			break;

		default:
			console.warn(`glInternalFormat: ${glInternalFormat} was not regocnized`);
			break;
	}

	const mipmaps = [];
	let dataOffset = (12 + (13 * 4)) + bytesOfKeyValueData;
	let width = pixelWidth;
	let height = pixelHeight;
	const mipmapCount = loadMipmaps ? numberOfMipmapLevels : 1;

	for (let i = 0; i < mipmapCount; i++) {
		const imageSize = new Int32Array(buffer, dataOffset, 1)[0]; // Size per face

		for (let j = 0; j < numberOfFaces; j++) {
			const byteArray = new Uint8Array(buffer, dataOffset + 4, imageSize);
			mipmaps.push({
				data: byteArray,
				width,
				height,
			});
			dataOffset += imageSize + 4;
			dataOffset += 3 - ((imageSize + 3) % 4);
		}

		width = Math.max(1.0, width * 0.5);
		height = Math.max(1.0, height * 0.5);
	}

	return {
		id,
		compression,
		width: pixelWidth,
		height: pixelHeight,
		format: glInternalFormat,
		data: mipmaps[0].data,
	};

	// return 'ktx';

	// 	compression,
	// 	mipMapLevels,
	// 	width,
	// 	height,
	// 	format,
	// 	type,
	// 	data,
	// };
}