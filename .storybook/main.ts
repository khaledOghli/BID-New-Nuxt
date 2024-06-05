import path from 'node:path'
import type { StorybookConfig } from '@storybook/vue3-vite'
import { type ConfigEnv, loadConfigFromFile, mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)', '../UI/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-i18n',
    'storybook-addon-vue-slots',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(baseConfig) {
    const loaded = await loadConfigFromFile(
      {} as unknown as ConfigEnv,
      path.resolve(__dirname, 'vite.config.ts'),
    )

    if (!loaded)
      return baseConfig
    const userConfig = loaded.config
    return mergeConfig(baseConfig, userConfig)
  },
}

export default config
