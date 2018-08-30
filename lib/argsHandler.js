// Vendor
const { ArgumentParser } = require('argparse');

// Package
const pkg = require('../package.json');

// Constants
const {
  IS_ASTC,
  ASTC_COMPRESSION_TYPES,

  IS_ETC,
  ETC_COMPRESSION_TYPES,

  IS_PVR,
  PVR_COMPRESSION_TYPES,

  IS_S3TC,
  S3TC_COMPRESSION_TYPES,
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
      ...(IS_ASTC ? ASTC_COMPRESSION_TYPES : []),
      ...(IS_ETC ? ETC_COMPRESSION_TYPES : []),
      ...(IS_PVR ? PVR_COMPRESSION_TYPES : []),
      ...(IS_S3TC ? S3TC_COMPRESSION_TYPES : []),
    ],
    help: 'Compression algorithm',
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

  // File type flag
  parser.addArgument(['-t', '--type'], {
    choices: ['astc', 'etc', 'pvr', 's3tc'],
    help: 'Compression type',
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

  // File alpha flag
  parser.addArgument(['-a', '--alpha'], {
    help: 'Output file alpha',
    action: 'storeTrue',
    required: false,
  });

  // Mipmapping flag
  parser.addArgument(['-m', '--mipmap'], {
    help: 'Enable mipmapping',
    action: 'storeTrue', // Disabled by default, storeFalse evaluates to true by default
    required: false,
  });

  // Vertical flip flag
  parser.addArgument(['-y', '--flipY'], {
    help: 'Output file flipped vertically',
    action: 'storeTrue',
    required: false,
  });

  const args = parser.parseArgs();

  return args;
};

const args = createParserArguments();

module.exports = args;
