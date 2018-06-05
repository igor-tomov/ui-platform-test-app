const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractSVGPlugin = require('svg-sprite-loader/plugin');
const {
  BUILD_MANIFEST_FILENAME,
  PUBLIC_PATH,
} = require('./manifest-config');

const outputSvgSpriteFilename = '[name].[hash:6].svg';

module.exports = (coreConfig) => {
  const SVGSpriteRule = coreConfig.module.rules.find(rule => rule.use && rule.use[0] === 'svg-sprite-loader');
  const styleLoadersRule = coreConfig.module.rules.find(rule => rule.use && rule.use[0] === 'style-loader');

  SVGSpriteRule.use = [
    {
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
        filename: 'sprite.[hash].svg'
      }
    }
  ];
  styleLoadersRule.use[0] = MiniCssExtractPlugin.loader;
  // Add ExtractTextPlugin for styles
  const styleExtractFile = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css'
  });

  coreConfig.plugins.push(
    styleExtractFile,

    new ManifestPlugin({
      fileName: BUILD_MANIFEST_FILENAME,
      basePath: PUBLIC_PATH,
      stripSrc: true
    }),

    new ExtractSVGPlugin(outputSvgSpriteFilename, {
      allChunks: true
    })
  );

  return coreConfig;
};
