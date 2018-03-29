function parseKTX(buffer) {
	const identifier = new Uint8Array(buffer, 0, 12);
	console.log(identifier);

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

	return 'ktx';

	// const compression = 's3tc';
	// const mipMapLevels = (header[DDS_HEADER_FLAGS] & DDSD_MIPMAPCOUNT) ? Math.max(1, header[DDS_HEADER_MIPMAPCOUNT]) : 1;
	// const width = header[DDS_HEADER_WIDTH];
	// const height = header[DDS_HEADER_HEIGHT];
	// const dataOffset = header[DDS_HEADER_SIZE] + 4;
	// const data = new Uint8Array(buffer, dataOffset);

	// return {
	// 	compression,
	// 	mipMapLevels,
	// 	width,
	// 	height,
	// 	format,
	// 	type,
	// 	data,
	// };
}
