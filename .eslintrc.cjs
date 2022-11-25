module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ]
    },
    settings: {
        'import/resolver': {
            typescript: {},
            node: ['js','jsx','ts','tsx']
        }
    },
    ignorePatterns: ['!.*', 'node_modules']
}