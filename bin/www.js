#!/usr/bin/env node
const path = require('path');
const appName = require('../package').name;
const { initSingleApp } = require('ui-platform-launcher/dist/lib/app/init-app');
const { resolveAppVersion } = require('ui-platform-core/dist/lib/path-resolvers/app-version.resolver');
const launchApp = require('ui-platform-launcher/dist/bin/www');

const args = require('minimist')(process.argv.slice(2));
const rootDir = path.join(__dirname, '..');


if (! args['config-dir']) {
  throw new Error('[www.js] `--config-type` isn\'t provided');
}



initSingleApp({
  version: resolveAppVersion(rootDir),
  rootDir,
  configReaderType: args['config-type'],
  appName,
})
  .then(app => launchApp(app))
  .catch(err => console.error(err));
