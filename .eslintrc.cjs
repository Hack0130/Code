module.exports = {
  root: true,
  env: { browser: true, es2020: true, "node": true, "jest": true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  // Added new rules to run extra checkes
  rules: {
    'no-unused-vars': 'error',
    'no-unused-expressions': 'error',
    'no-unreachable': 'error',
    'react/prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error'
  }
}