const config = require('../../../.eslintrc');

module.exports = {
    ...config,
    ignorePatterns: [...config.ignorePatterns, '*.js'],
};
