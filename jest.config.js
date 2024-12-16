module.exports = {
    testEnvironment: 'node', // Set the test environment to Node.js
    collectCoverage: true, // Enable test coverage collection
    coverageDirectory: 'coverage', // Directory to store coverage reports
    coverageReporters: ['text', 'lcov'], // Formats for coverage reports
    coverageProvider: 'v8', // Use the v8 coverage provider
  };
  