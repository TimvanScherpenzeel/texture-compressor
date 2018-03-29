function parseKTX(buffer, facesExpected = 1) {
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

	console.log(glTypeSize);

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

	return {
		compression: glInternalFormat,
	};

	// 	compression,
	// 	mipMapLevels,
	// 	width,
	// 	height,
	// 	format,
	// 	type,
	// 	data,
	// };
}
