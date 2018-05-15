require('babel-register');
let webpackConfig = require('./webpack.core.config')();
const resultConfig = require('./webpack.custom.config')(webpackConfig);

module.exports = resultConfig;
