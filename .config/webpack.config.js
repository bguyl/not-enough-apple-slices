const webpack = require('webpack');
const path = require('path');
const title = require("../package.json").title;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: ['./dist']
  },
  module: {
  rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: 'tslint.json',
          failOnHint: false,
          tsConfigFile: 'tsconfig.json'
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif|ttf)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({title: title}),
    new CopyWebpackPlugin([{from: './static', to: 'static'}]),
    new webpack.DefinePlugin({
      'CANVAS_RENDERER': JSON.stringify(true),
      'WEBGL_RENDERER': JSON.stringify(true)
    })
  ]
}
