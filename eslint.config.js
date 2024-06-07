// @ts-check
import antfu from '@antfu/eslint-config';
import NuxtEslintConfig from './.nuxt/eslint.config.mjs';

export default antfu(
  {
    unocss: true,
    formatters: true,
    rules: {
      '@stylistic/semi': ['error', 'always'],
      'semi-style': ['error', 'last'],
      'quotes': ['error', 'single'],
      'quote-props': ['error', 'consistent'],
      'no-console': ['off'],
      'no-debugger': ['error'],
      'no-alert': ['error'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'space-before-blocks': ['error', 'always'],
      'space-infix-ops': ['error', { int32Hint: false }],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: true,
        },
      ],
      'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
      'vue/html-button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'vue/no-empty-component-block': ['error'],
      'vue/no-multiple-objects-in-class': ['error'],
      'vue/v-for-delimiter-style': ['error', 'in'],
      'vue/no-side-effects-in-computed-properties': ['error'],
      'vue/require-v-for-key': ['error'],
      'vue/no-use-v-if-with-v-for': ['error'],
      'no-magic-numbers': [
        'error',
        {
          ignore: [0, 1],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],
      'vue/max-attributes-per-line': ['error', { singleline: 1 }],
      'vue/first-attribute-linebreak': [
        'error',
        {
          multiline: 'below',
          singleline: 'beside',
        },
      ],
      'vue/no-restricted-syntax': ['error'],
      'vue/no-bare-strings-in-template': ['error', {
        allowlist: [
          '(',
          ')',
          ',',
          '.',
          '&',
          '+',
          '-',
          '=',
          '*',
          '/',
          '#',
          '%',
          '!',
          '?',
          ':',
          '[',
          ']',
          '{',
          '}',
          '<',
          '>',
          '\u00B7',
          '\u2022',
          '\u2010',
          '\u2013',
          '\u2014',
          '\u2212',
          '|',
          '©',
        ],
        attributes: {
          '/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-roledescription', 'aria-valuetext'],
          'input': ['placeholder'],
          'img': ['alt'],
        },
        directives: ['v-text'],
      }],
      'vue/no-duplicate-attributes': ['error'],
      'vue/no-mutating-props': ['error'],
      'vue/no-useless-template-attributes': ['error'],
      'vue/return-in-computed-property': ['error'],
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/v-on-event-hyphenation': ['error', 'always'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/this-in-template': ['error', 'never'],
      'vue/no-root-v-if': ['error'],
      'vue/no-use-v-else-with-v-for': ['error'],
      'vue/padding-line-between-blocks': ['error'],
    },
  },
  NuxtEslintConfig,
  {
    ignores: [
      'node_modules',
      '**/node_modules/',
      '**/.nuxt/',
      '.git',
      '.vscode',
      '.github',
      '.storybook',
      '.nuxt-storybook',
      '.husky',
      '**/.storybook/',
      '**/.nuxt-storybook/',
      '**/.husky/',
      'dist',
      '.output',
      'package.json',
      'package-lock.json',
      '**/docs/',
      '**/*.md',
      '**/theme/',
      'assets/primevue',
      'assets/json',
    ],
  },
);
