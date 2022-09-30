/**
 * Global Imports
*/

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Relative Imports
*/

const common = require('./webpack.common.js');

/**
 * Exports
*/

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },

  entry: [
    './resources/sass/app.scss',
  ],

  module: {
    rules: [
      {
        test: /\.(png|gif|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules|resources|staging|dist/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules|resources|staging|dist/,
        use: {
          loader: 'ts-loader'
        }
      },

      {
        test: /\.css|sass|scss$/,
        exclude: /node_modules|staging|dist/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      template: './staging/index.prod.html',
      filename: 'index.html'
    })
  ]
});
