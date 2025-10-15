module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: [
    'controllers/**/*.js',
    'models/**/*.js',
    'routes/**/*.js'
  ],
  coverageDirectory: 'coverage',
  testMatch: ['**/tests/integration/**/*.test.js']
};