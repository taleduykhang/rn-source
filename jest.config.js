const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  // transformIgnorePatterns: ['/node_modules/(?!(my-module|my-other-module))'],
  // globals: {
  //   'ts-jest': {
  //     babelConfig: true,
  //   },
  //   // performance: require('react-native/Libraries/Performance/Systrace')
  //   //   .performance,
  // },

  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push|@react-navigation/elements/lib/commonjs/assets/back-icon\\.png)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '/detox',
    '@react-native',
  ],
  // testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/test/setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
};
