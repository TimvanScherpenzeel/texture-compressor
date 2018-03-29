function parseBinary(filename, bin) {
	const containerType = filename.split('.').pop();

	let result;

	if (containerType === 'ktx') {
		result = parseKTX(bin);
	} else {
		console.error('Output filename should have a .ktx extension');
	}

	return result;
}
