const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (coreConfig) => {
  if(coreConfig.plugins[0].definitions.__PROD__) {
    const styleLoadersRule = coreConfig.module.rules.find(rule => rule.use && rule.use[0] === 'style-loader');
    // Add ExtractTextPlugin for styles
    const styleExtractFile = new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    });

    coreConfig.plugins.push(styleExtractFile);
    styleLoadersRule.use[0] = MiniCssExtractPlugin.loader;
  }

  return coreConfig;
};
