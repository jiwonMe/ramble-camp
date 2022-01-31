module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "airbnb-base", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "plugin:wc/best-practice", "plugin:lit/recommended", "plugin:storybook/recommended"],
  settings: {
    wc: {
      elementBaseClasses: ['LitElement']
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.ts']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: 2,
    'no-console': 'off',
    'no-unused-vars': ['warn', {
      args: 'none'
    }],
    'no-constant-condition': 1,
    'no-global-assign': ['error', {
      exceptions: ['require']
    }],
    // new rule
    'linebreak-style': 0,
    'arrow-parens': [2, 'as-needed'],
    'max-len': ['error', {
      code: 120,
      ignoreComments: true
    }],
    'object-curly-newline': ['error', {
      multiline: true
    }],
    // variables false for pub/sub hook function
    'no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: false
    }],
    'no-param-reassign': ['error', {
      props: false
    }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    // eslint-disable-next-line no-underscore-dangle

    /* eslint-disable guard-for-in */

    /* eslint-disable no-restricted-syntax */
    'no-continue': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'no-alert': 'off',
    'lines-between-class-members': 'off',
    'lit/quoted-expressions': 'error'
  },
  globals: {
    NODE_ENV: true,
    API_HOST: true
  }
};