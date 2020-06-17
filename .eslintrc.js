module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/strongly-recommended',
        '@vue/standard',
        '@vue/typescript',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'always'],
        'no-extra-semi': 'error',
        eqeqeq: 'off',
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-return-assign': 'off',
        yoda: 'off',
        camelcase: 'off',
        'standard/array-bracket-even-spacing': 'off',
        'no-octal-escape': 'off',
        'padded-blocks': 'off',
        'space-before-function-paren': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/no-template-shadow': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/attributes-order': 'error',
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 10,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
