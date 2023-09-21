const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  
  entry: path.resolve(__dirname, 'src/index.js'),
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
      inject: false
    })
  ],
  mode : 'development',
}