const { isProd } = require('./scripts/env.config');

module.exports = {
  extends: [
    'eslint-config-zoro'
  ],
  env: {
    jest: true
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json'
  },
  rules: {
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-console': isProd ? 'warn' : 'off',
    'no-restricted-properties': [
      'error',
      {
        'object': 'arguments',
        'property': 'callee',
        'message': 'arguments.callee is deprecated.'
      },
      {
        'object': 'global',
        'property': 'isFinite',
        'message': 'Please use Number.isFinite instead.'
      },
      {
        'object': 'self',
        'property': 'isFinite',
        'message': 'Please use Number.isFinite instead.'
      },
      {
        'object': 'window',
        'property': 'isFinite',
        'message': 'Please use Number.isFinite instead.'
      },
      {
        'object': 'global',
        'property': 'isNaN',
        'message': 'Please use Number.isNaN instead.'
      },
      {
        'object': 'self',
        'property': 'isNaN',
        'message': 'Please use Number.isNaN instead.'
      },
      {
        'object': 'window',
        'property': 'isNaN',
        'message': 'Please use Number.isNaN instead.'
      },
      {
        'property': '__defineGetter__',
        'message': 'Please use Object.defineProperty instead.'
      },
      {
        'property': '__defineSetter__',
        'message': 'Please use Object.defineProperty instead.'
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ],
    'react/jsx-indent': [
      'error',
      2
    ],
    'react/sort-comp': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-includes': 'off'
  }
};
