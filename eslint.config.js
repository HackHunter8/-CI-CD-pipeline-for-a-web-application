const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  // Recommended base configuration
  js.configs.recommended,
  
  // Global configuration
  {
    languageOptions: {
      // Set global variables
      globals: {
        ...globals.node,
        ...globals.jest
      },
      
      // Set ECMAScript version
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    
    // Customize rules
    rules: {
      // Example custom rules
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  },
  
  // Ignore specific files/directories
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '**/*.test.js'
    ]
  }
];