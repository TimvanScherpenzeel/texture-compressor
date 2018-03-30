// Native
const os = require('os');
const path = require('path');

// Vendor
const imageSize = require('image-size');
const uuid = require('uuid');

const utilities = {
	compressionToolDirectory: path.join(__dirname, '../bin/', os.platform()),

	getFileExtension: filename => path.parse(filename).ext,

	convertNumberToDecimalString: (number) => {
		let result;

		if (number % 1 === 0) {
			result = parseFloat(number).toFixed(1);
		} else {
			result = number.toString();
		}

		return result;
	},

	isPowerOfTwo: value => !(value & (value - 1)) && (!!value),
	isSquare: (width, height) => width === height,
	getImageSize: filepath => imageSize(filepath),

	createFlagsForTool: flags => flags.map(flag => `-${flag}`),
	splitFlagAndValue: flags => [].concat(...flags.map(flag => flag.split(' '))),

	getTempFilename() {
		return uuid.v4();
	},

	getTempDirectory() {
		const tempDirectory = os.tmpdir();
		const randomId = uuid.v4();
		return path.join(tempDirectory, randomId);
	},
};

module.exports = utilities;
