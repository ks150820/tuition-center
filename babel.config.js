module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@util': 'util',
          '@components': 'components',
          '@services': 'services',
          '@hooks': 'hooks',
          '@navigators': 'navigators',
          '@screens': 'screens',
          '@store': 'store',
          '@theme': 'theme',
          '@widgets': 'widgets',
          underscore: 'lodash',
        },
      },
    ],
  ],
};
