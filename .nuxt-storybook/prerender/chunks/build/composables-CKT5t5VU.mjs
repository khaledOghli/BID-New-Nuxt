import { getCurrentInstance } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { useRoute } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-router@4.3.2_vue@3.4.27_typescript@5.4.5_/node_modules/vue-router/dist/vue-router.node.mjs';
import { a as useNuxtApp } from './server.mjs';

const warnRuntimeUsage = (method) => {
  console.warn(
    `${method}() is a compiler-hint helper that is only usable inside the script block of a single file component which is also a page. Its arguments should be compiled away and passing it at runtime has no effect.`
  );
};
const definePageMeta = (meta) => {
  var _a, _b;
  {
    const component = (_a = getCurrentInstance()) == null ? void 0 : _a.type;
    try {
      const isRouteComponent = component && useRoute().matched.some((p) => Object.values(p.components || {}).includes(component));
      const isRenderingServerPage = (_b = useNuxtApp().ssrContext) == null ? void 0 : _b.islandContext;
      if (isRouteComponent || isRenderingServerPage) {
        return;
      }
    } catch {
    }
    warnRuntimeUsage("definePageMeta");
  }
};

export { definePageMeta as d };
//# sourceMappingURL=composables-CKT5t5VU.mjs.map
