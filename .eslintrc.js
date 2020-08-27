module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  rules: {
    'max-len': [ 'error', 120, 2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'react/jsx-filename-extension': [ 1, { extensions: [ '.tsx', '.jsx' ] } ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/no-unknown-property': [ 'error', { ignore: [ 'class' ] } ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      pragma: 'h',
      version: 'detect'
    }
  },
  overrides: [
    {
      files: [ '*.js' ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};
