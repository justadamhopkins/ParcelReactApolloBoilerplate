module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['standard-preact', 'airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	settings: {
		react: {
			pragma: 'h',
		},
	},
	plugins: ['react'],
	rules: {
		'no-tabs': 0,
		'indent': ['error', 'tab'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': [
			2,
			'tab',
			{ checkAttributes: false, indentLogicalExpressions: true },
		],
		'react/jsx-indent-props': [2, 'tab'],
		'jsx-quotes': ['error', 'prefer-single'],
	},
};
