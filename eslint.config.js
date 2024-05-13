// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      unocss: true,
      formatters: true,
      rules: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false, ignores: [] }],
        'vue/component-api-style': ['error', ['script-setup']],
        'vue/block-lang': ['error', { script: { lang: 'ts' } }],
        'vue/block-order': ['error', {
          order: ['script', 'template', 'style'],
        }],
        'vue/define-emits-declaration': ['error', 'type-based'],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/define-macros-order': ['error', {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: true,
        }],
        'vue/enforce-style-attribute': [
          'error',
          { allow: ['scoped'] },
        ],
        'vue/html-button-has-type': ['error', { button: true, submit: true, reset: true }],
        'vue/no-empty-component-block': ['error'],
        'vue/no-multiple-objects-in-class': ['error'],
        'vue/v-for-delimiter-style': ['error', 'in'],
        'vue/v-on-handler-style': ['error', ['method', 'inline-function']],
        'vue/no-side-effects-in-computed-properties': ['error'],
        'no-magic-numbers': ['error', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }],
      },
      ignores: ['theme/'],
    },
  ),
)
