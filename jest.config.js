// eslint-disable-next-line
const { defaults } = require('jest-config')

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  modulePathIgnorePatterns: ['extras'],
  setupFiles: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|react-navigation|@react-navigation/(.*))',
  ],
  moduleDirectories: ['node_modules', 'app'],
  verbose: true,
  timers: 'fake',
  testEnvironment: 'jsdom',
  testTimeout: 10000,
}
