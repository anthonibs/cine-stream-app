/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'no-duplicate-imports': 'error',
		quotes: ['error', 'single'],
		eqeqeq: ['error', 'always'],
		'jsx-quotes': ['error', 'prefer-single'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'linebreak-style': ['error', 'unix'],
		semi: ['error', 'always'],
		'prefer-const': 'off',
	},
};
