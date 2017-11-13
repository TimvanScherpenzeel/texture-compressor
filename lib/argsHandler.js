// Native
const pkg = require('../package.json');

// Vendor
const { ArgumentParser } = require('argparse');

// Constants
const {
	isASTC,
	ASTCCompressionTypes,

	isETC,
	ETCCompressionTypes,

	isPVR,
	PVRCompressionTypes,

	isS3TC,
	S3TCCompressionTypes,
} = require('./constants');

const createParserArguments = () => {
	const parser = new ArgumentParser({
		version: pkg.version,
		addHelp: true,
		description: pkg.description,
	});

	// Input / output
	parser.addArgument(['-i', '--input'], {
		help: 'Input file',
		required: true,
	});

	parser.addArgument(['-o', '--output'], {
		help: 'Output file',
		required: true,
	});

	// File type flag
	parser.addArgument(['-m', '--method'], {
		choices: ['astc', 'etc', 'pvr', 's3tc'],
		help: 'Compression method',
		required: true,
	});

	// File compression flags
	parser.addArgument(['-c', '--compression'], {
		choices: [
			...(isASTC ? ASTCCompressionTypes : []),
			...(isETC ? ETCCompressionTypes : []),
			...(isPVR ? PVRCompressionTypes : []),
			...(isS3TC ? S3TCCompressionTypes : []),
		],
		help: 'Compression type',
		required: true,
	});

	// Flags for tools
	parser.addArgument(['-f', '--flags'], {
		nargs: '*',
	});

	const args = parser.parseArgs();

	return args;
};

const args = createParserArguments();

module.exports = args;

