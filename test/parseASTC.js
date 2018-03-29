function parseASTC(buffer) {
	// Supports 4x4, 5x4, 5x5, 6x5, 6x6, 8x5, 8x6, 8x8, 10x5, 10x6, 10x8, 10x10, 12x10, 12x12
	// WEBGL_compressed_texture_astc

	// ASTC CONSTANTS

	const header = new Int32Array(buffer, 0, ASTC_HEADER_LENGTH);

	return 'astc';
}
