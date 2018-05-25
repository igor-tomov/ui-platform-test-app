#!/usr/bin/env node
const path = require('path');
const cliArgs = require('cli-args');
const { initSingleApp } = require('ui-platform-launcher/dist/lib/app/init-app');
const { resolveAppVersion } = require('ui-platform-core/dist/lib/path-resolvers/app-version.resolver');
const launchApp = require('ui-platform-launcher/dist/bin/www');

const args = cliArgs(process.argv.slice(2));
const rootDir = path.join(__dirname, '..');
const configPath = args.c;

if (! configPath) {
  console.warn('`-c` argument with configuration filename is not passed, so default config is going to be used');
}


launchApp(initSingleApp({
  version: resolveAppVersion(rootDir),
  rootDir,
  configPath,
}));
