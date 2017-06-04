const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
// Extract the style sheets into a dedicated file in production
// const ExtractTextPlugin  = require('extract-text-webpack-plugin');  

// const extractSass = new ExtractTextPlugin({
//   filename: '[name].[contenthash].css',
//   disable: process.env.NODE_ENV === 'development'
// });

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.jsx$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
      // { test: /\.scss$/, 
      //   use: extractSass.extract({
      //     use: [ 'style-loader', 'css-loader',  'sass-loader' ],
      //     // use style-loader in development
      //     fallback: 'style-loader'
      //   })
      // }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    // extractSass,
    HtmlWebpackPluginConfig
  ]
};
