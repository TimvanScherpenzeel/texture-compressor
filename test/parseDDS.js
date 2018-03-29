function parseDDS(buffer) {
	// Supports DXT1, DXT3, DXT5
	// WEBGL_compressed_texture_s3tc

	// DDS
	const DDS_HEADER_MAGIC = 0;
	const DDS_HEADER_SIZE = 1;
	const DDS_HEADER_FLAGS = 2;
	const DDS_HEADER_HEIGHT = 3;
	const DDS_HEADER_WIDTH = 4;
	const DDS_HEADER_MIPMAPCOUNT = 7;
	const DDS_HEADER_LENGTH = 31; // 32 bits
	const DDSD_MIPMAPCOUNT = 0x20000;
	const DDS_MAGIC = 0x20534444;
	const DDS_PIXEL_FORMAT_FOURCC = 0x4;
	const DDS_HEADER_PIXEL_FORMAT_FLAGS = 20;
	const DDS_HEADER_PIXEL_FORMAT_FOURCC = 21;

	// ENUM S3TC
	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
	const COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
	const COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
	const COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;

	// S3TC
	const FOURCC_TYPE_DXT1 = 827611204;
	const FOURCC_TYPE_DXT3 = 861165636;
	const FOURCC_TYPE_DXT5 = 894720068;

	const header = new Int32Array(buffer, 0, DDS_HEADER_LENGTH);

	if (header[DDS_HEADER_MAGIC] !== DDS_MAGIC) {
		console.warn(`Invalid magic number: ${header[DDS_HEADER_MAGIC]} in DDS header`);
	}

	if (!header[DDS_HEADER_PIXEL_FORMAT_FLAGS] & DDS_PIXEL_FORMAT_FOURCC) {
		console.warn('Unsupported format, must contain a FourCC code');
	}

	const fileType = header[DDS_HEADER_PIXEL_FORMAT_FOURCC];

	let format;
	let type;

	switch (fileType) {
		case FOURCC_TYPE_DXT1:
			format = COMPRESSED_RGB_S3TC_DXT1_EXT;
			type = 'DXT1';
			break;
		case FOURCC_TYPE_DXT3:
			format = COMPRESSED_RGBA_S3TC_DXT3_EXT;
			type = 'DXT3';
			break;
		case FOURCC_TYPE_DXT5:
			format = COMPRESSED_RGBA_S3TC_DXT5_EXT;
			type = 'DXT5';
			break;
		default:
			console.warn(`${fileType} was not recognized as a valid type`);
			break;
	}

	const compression = 's3tc';
	const mipMapLevels = (header[DDS_HEADER_FLAGS] & DDSD_MIPMAPCOUNT) ? Math.max(1, header[DDS_HEADER_MIPMAPCOUNT]) : 1;
	const width = header[DDS_HEADER_WIDTH];
	const height = header[DDS_HEADER_HEIGHT];
	const dataOffset = header[DDS_HEADER_SIZE] + 4;
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
