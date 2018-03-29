function parseBinary(filename, bin) {
	const containerType = filename.split('.').pop();

	let result;

	if (containerType === 'astc') {
		result = parseASTC(bin);
	} else if (containerType === 'dds') {
		result = parseDDS(bin);
	} else if (containerType === 'pvr') {
		result = parsePVR(bin);
	} else {
		console.error('Output filename should have a .astc, .dds or .pvr extension');
	}

	return result;
}
