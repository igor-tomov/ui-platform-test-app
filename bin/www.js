#!/usr/bin/env node
const path = require('path');
const initApp = require('ui-platform-launcher/dist/lib/init-app').default;
const launchApp = require('ui-platform-launcher/dist/bin/www');
const { createServerIocContainer } = require('ui-platform-core/dist/lib/ui-application/server.ioc-container');
const bundleConfig = require('../webpack/manifest-config');


const app = initApp({
  rootPath: path.join(__dirname, '..'),
  serverIoCFactory: createServerIocContainer,
  manifestPath: bundleConfig.OUTPUT_MANIFEST_FILENAME
});



launchApp(app);
