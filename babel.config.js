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
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.android.js',
        ],
        alias: {
          '@util': './src/util',
          '@components': './src/components',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@widgets': './src/widgets',
          underscore: 'lodash',
        },
      },
    ],
  ],
};
