function parseBinary(filename, bin) {
	const containerType = filename.split('.').pop();

	let result;

	if (containerType === 'dds') {
		result = parseDDS(bin);
	} else if (containerType === 'pvr') {
		result = parsePVR(bin);
	} else {
		console.error('Filename should have a .dds or .pvr extension');
	}

	return result;
}
