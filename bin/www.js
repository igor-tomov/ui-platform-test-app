#!/usr/bin/env node
const path = require('path');
const { initSingleApp } = require('ui-platform-launcher/dist/lib/app/init-app');
const { resolveAppVersion } = require('ui-platform-core/dist/lib/path-resolvers/app-version.resolver');
const launchApp = require('ui-platform-launcher/dist/bin/www');

//const args = argv(process.argv.slice(2));
const args = require('minimist')(process.argv.slice(2));

const rootDir = path.join(__dirname, '..');

// set specific config reader data
// todo: find better solution for `configReaderParams` definition


const configReaderType = args.t || 'env-vars';
const configReaderParams = {
  configDirPath: args.c || 'config/'
};



launchApp(initSingleApp({
  version: resolveAppVersion(rootDir),
  rootDir,
  configReaderType,
  configReaderParams,
}));
