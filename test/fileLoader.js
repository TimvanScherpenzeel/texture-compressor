function fileLoader(url, responseType = '') {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();

		request.responseType = responseType || '';
		request.onreadystatechange = () => {
			if (request.readyState !== 4) return;

			if (request.readyState === 4 && request.status === 200) {
				resolve(request.response, request.status);
			} else {
				reject(request.status);
			}
		};

		request.open('GET', url, true);
		request.send();
	});
}
