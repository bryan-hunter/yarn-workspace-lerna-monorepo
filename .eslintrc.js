module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'jest'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:jest/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    env: {
        node: true,
        browser: true,
        jest: true,
        serviceworker: true,
    },
    ignorePatterns: ['build', '.*.js', '*.config.js', 'node_modules'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        'import/no-extraneous-dependencies': ['error'],
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
        'import/prefer-default-export': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/prop-types': 'off',
    },
};
