module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/.storybook/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/lib/',
    '/tests/',
    '/coverage/',
    '/.storybook/',
  ],
  setupFiles: ['./jestSetup.ts'],
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost:3000',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '@Internal/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
