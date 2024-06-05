import { defuFn } from 'defu'
import { updateAppConfig } from '#app/config'

const inlineConfig = {
  nuxt: {
    buildId: '4c2f377c-f240-4b94-9700-0e9a0cfce68e',
  },
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

export default /* @__PURE__ */ defuFn(inlineConfig)
