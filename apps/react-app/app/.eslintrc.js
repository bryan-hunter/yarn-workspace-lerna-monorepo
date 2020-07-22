const config = require('../../../.eslintrc');

module.exports = {
    ...config,
    ignorePatterns: ['serviceWorker.ts', 'config/**/*.js', 'scripts/**/*.js', 'node_modules'],
};
