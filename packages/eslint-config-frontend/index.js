module.exports = {
  extends: [
    'next',
    'turbo',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['.eslintrc.js', 'next.config.js', 'jest.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
    {
      files: ['next-env.d.ts', 'environment.d.ts'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ],
  plugins: ['sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'arrow-body-style': ['error'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'builtin',
            pattern: 'react',
            position: 'before',
          },
          { group: 'internal', pattern: '@api/**' },
          { group: 'internal', pattern: '@components/**' },
          { group: 'internal', pattern: '@contextProviders/**' },
          { group: 'internal', pattern: '@config/**' },
          { group: 'internal', pattern: '@consts/**' },
          { group: 'internal', pattern: '@features/**' },
          { group: 'internal', pattern: '@layouts/**' },
          { group: 'internal', pattern: '@hocs/**' },
          { group: 'internal', pattern: '@hooks/**' },
          { group: 'internal', pattern: '@styles/**' },
          { group: 'internal', pattern: '@utils/**' },
          {
            group: 'internal',
            pattern: '@assets/**',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
      { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
    ],
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
    'react/jsx-sort-props': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': ['error', { replacements: { props: false, ref: false } }],
  },
};
