const config = require('../../../.eslintrc');

module.exports = {
    ...config,
    ignorePatterns: ['config/**/*.js', 'scripts/**/*.js', 'node_modules'],
};
