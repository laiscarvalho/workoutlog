module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [
      "<rootDir>/(build|docs|node_modules)/"
    ],
    coverageDirectory: './coverage',
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'], 

  };
