function loadBinary(filename) {
	return new Promise((resolve, reject) => {
		fileLoader(filename, 'arraybuffer')
			.then((bin) => {
				console.log(filename);
				resolve(parseBinary(filename, bin));
			})
			.catch((error) => {
				reject(console.warn(error));
			});
	});
}
