module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '~': './src',
          '@models': './database/models',
          '@services': './database/services',
          '@resources': './resources',
          '@images': './resources/images/index',
          '@config': './system/config/index',
          '@drivers': './system/driver/index',
          '@util': './system/util/index',
          '@util/Algorithm': './system/util/Algorithm',
          '@util/Api': './system/util/Api',
          '@util/Css': './system/util/Css',
          '@util/Geo': './system/util/Geo',
          '@util/Functional': './system/util/Functional',
          '@util/Form': './system/util/Form',
          '@util/Chrono': './system/util/Chrono',
          '@util/React': './system/util/React',
          '@util/Tailwind': './system/util/Tailwind',
          '@util/Token': './system/util/Token',
          '@util/TokenStorage': './system/util/TokenStorage',
          '@util/Unit': './system/util/Unit',
        }
      }
    ]
  ]
};
