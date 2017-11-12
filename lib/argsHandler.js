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
	parser.addArgument(['-i', '--input'], { required: true });
	parser.addArgument(['-o', '--output'], { required: true });

	// File type flag
	parser.addArgument(['-m', '--method'], {
		choices: ['astc', 'etc', 'pvr', 's3tc'],
		help: 'Compression method',
		required: true,
	});

	// File quality flag
	parser.addArgument(['-q', '--quality'], {
		choices: ['low', 'medium', 'high'],
		help: 'Compression quality',
		required: false,
		defaultValue: 'high',
	});

	// File transparancy flag
	parser.addArgument(['-t', '--transparancy'], {
		choices: ['true', 'false'],
		help: 'Transparancy',
		required: false,
		defaultValue: 'true',
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

