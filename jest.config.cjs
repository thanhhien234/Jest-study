module.exports = {
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
};
  