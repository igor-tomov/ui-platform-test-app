#!/usr/bin/env node
const path = require('path');
const cliArgs = require('cli-args');
const initApp = require('ui-platform-launcher/dist/lib/init-app').default;
const launchApp = require('ui-platform-launcher/dist/bin/www');
const bundleConfig = require('../webpack/manifest-config');

const args = cliArgs(process.argv.slice(2));
const configPath = args.c;

if (! configPath) {
  console.warn('`-c` argument with configuration filename is not passed, so default config is going to be used');
}


launchApp(initApp({
  rootPath: path.join(__dirname, '..'),
  configPath,
  assetsManifestPath: bundleConfig.OUTPUT_MANIFEST_FILENAME,
}));
