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

	// File bitrate flag
	parser.addArgument(['-b', '--bitrate'], {
		help: 'Output file bitrate',
		defaultValue: 2.0,
		required: false,
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

	// Flags to pass on to tools
	parser.addArgument(['-f', '--flags'], {
		help: 'Any flags you want to directly pass to the compression tool',
		nargs: '*',
	});

	// File input flag
	parser.addArgument(['-i', '--input'], {
		help: 'Input file including path',
		required: true,
	});

	// File method flag
	parser.addArgument(['-m', '--method'], {
		choices: ['astc', 'etc', 'pvr', 's3tc'],
		help: 'Compression method',
		required: true,
	});

	// File output flag
	parser.addArgument(['-o', '--output'], {
		help: 'Output file including path',
		required: true,
	});

	// File quality flag
	parser.addArgument(['-q', '--quality'], {
		help: 'Output file quality',
		defaultValue: 5,
		required: false,
	});

	// File transparency flag
	parser.addArgument(['-t', '--transparent'], {
		help: 'Output file transparency',
		action: 'storeTrue',
		required: false,
	});

	const args = parser.parseArgs();

	return args;
};

const args = createParserArguments();

module.exports = args;

