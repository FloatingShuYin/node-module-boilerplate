// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'text'],
  testMatch: ['<rootDir>/__tests__/**/*spec.js'],
  testEnvironment: 'node'
}
