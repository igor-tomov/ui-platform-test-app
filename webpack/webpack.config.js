require('babel-register');
let webpackConfig = require('./webpack.core.config')();
require('./webpack.custom.config')(webpackConfig);

module.exports = webpackConfig;
