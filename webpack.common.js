/**
 * Global Imports
*/

require('dotenv').config();

const path = require('path');
const { DefinePlugin } = require('webpack');

/**
 * Relative Imports
*/

const envConfig = require('./env.config.js');

/**
 * Load Environment Variables
*/

const env = {};

for (const key of envConfig.variables) {
  env['process.env.' + key] = JSON.stringify(process.env[key]);
}

/**
 * Exports
*/

module.exports = {
  entry: [
    `./src/app/${ process.env.APP_DOMAIN }/index.ts`,
  ],

  plugins: [
    new DefinePlugin(env),
  ],

  output: {
    filename: 'bundle.[contenthash].js',
    chunkFilename: '[id].[contenthash].js',
    path:  path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.css', '.sass', '.scss', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@models': path.resolve(__dirname, 'database/models'),
      '@services': path.resolve(__dirname, 'database/services'),
      '@images': path.resolve(__dirname, 'resources/images'),
      '@config': path.resolve(__dirname, 'system/config'),
      '@drivers': path.resolve(__dirname, 'system/driver'),
      '@util': path.resolve(__dirname, 'system/util'),
      '@util/Algorithm': path.resolve(__dirname, 'system/util/Algorithm'),
      '@util/Api': path.resolve(__dirname, 'system/util/Api'),
      '@util/Css': path.resolve(__dirname, 'system/util/Css'),
      '@util/Functional': path.resolve(__dirname, 'system/util/Functional'),
      '@util/Form': path.resolve(__dirname, 'system/util/Form'),
      '@util/Geo': path.resolve(__dirname, 'system/util/Geo'),
      '@util/Chrono': path.resolve(__dirname, 'system/util/Chrono'),
      '@util/React': path.resolve(__dirname, 'system/util/React'),
      '@util/Tailwind': path.resolve(__dirname, 'system/util/Tailwind'),
      '@util/Token': path.resolve(__dirname, 'system/util/Token'),
      '@util/TokenStorage': path.resolve(__dirname, 'system/util/TokenStorage'),
      '@util/Unit': path.resolve(__dirname, 'system/util/Unit'),
    }
  },
};
