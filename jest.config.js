module.exports = {
  preset: 'react-native',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
          https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
  },
  transformIgnorePatterns: [
    '<rootDir>node_modules/(?!(react-native|react-native-vector-icons)/)',
  ],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/testing/test-utils.tsx',
    '<rootDir>/app/screens/HomeLayout/index.tsx',
  ],
};
