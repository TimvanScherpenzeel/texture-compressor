// Native
const { spawn } = require('child_process');

// Vendor
const Promise = require('bluebird');

const createProcess = (toolPath, toolFlags = []) => new Promise((resolve, reject) => {
	console.log(`Using flags: ${toolFlags}`);

	const child = spawn(toolPath, toolFlags);

	child.stdout.on('data', data => console.log(`Output: ${data}`));

	child.once('exit', (code) => {
		if (code !== 0) {
			console.error(`Compression tool exited with error code ${code}`);
			reject();
		} else {
			resolve();
		}
	});
});

module.exports = createProcess;
