// Native
const os = require('os');
const path = require('path');

// Vendor
const imageSize = require('image-size');

const utilities = {
	compressionToolDirectory: path.join(__dirname, '../bin/', os.platform()),

	getFilePath: filename => filename.substring(0, filename.lastIndexOf('/') + 1),
	getFilename: filename => path.parse(filename).name,
	getFileExtension: filename => path.parse(filename).ext,

	convertNumberToString: number => (number % 1 === 0) ? parseFloat(number).toFixed(1) : number.toString(),

	isPowerOfTwo: value => !(value & (value - 1)) && (!!value),
	isSquare: (width, height) => width === height,
	getImageSize: filepath => imageSize(filepath),

	createFlagsForTool: flags => flags.map(flag => `-${flag}`),
	splitFlagAndValue: flags => [].concat(...flags.map(flag => flag.split(' '))),
};

module.exports = utilities;
