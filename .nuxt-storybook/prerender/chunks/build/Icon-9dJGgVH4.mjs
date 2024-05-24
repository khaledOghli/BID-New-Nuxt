import { _ as _export_sfc, f as useAppConfig, r as useState, a as useNuxtApp } from './server.mjs';
import { useSSRContext, defineComponent, watch, ref, computed, withAsyncContext, mergeProps, unref, createVNode, resolveDynamicComponent } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@iconify+vue@4.1.2_vue@3.4.27_typescript@5.4.5_/node_modules/@iconify/vue/dist/offline.mjs';
import { addAPIProvider, loadIcon } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@iconify+vue@4.1.2_vue@3.4.27_typescript@5.4.5_/node_modules/@iconify/vue/dist/iconify.mjs';
import { r as resolveIconName } from './index-Cj2Bc71W.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@unhead+ssr@1.9.11/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/cheerio@1.0.0-rc.12/node_modules/cheerio/lib/esm/slim.js';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/xss@1.0.15/node_modules/xss/lib/index.js';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ipx@2.1.0_ioredis@5.4.1/node_modules/ipx/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unhead@1.9.11/node_modules/unhead/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@unhead+shared@1.9.11/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-router@4.3.2_vue@3.4.27_typescript@5.4.5_/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-devtools-stub@0.1.0/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/cookie-es@1.1.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/sweetalert2@11.11.0/node_modules/sweetalert2/dist/sweetalert2.all.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    const props = __props;
    watch(() => {
      var _a;
      return (_a = appConfig.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions;
    }, () => {
      var _a, _b, _c, _d, _e, _f;
      if (!((_b = (_a = appConfig.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url))
        return;
      try {
        new URL(appConfig.nuxtIcon.iconifyApiOptions.url);
      } catch (e) {
        console.warn("Nuxt Icon: Invalid custom Iconify API URL");
        return;
      }
      if ((_d = (_c = appConfig.nuxtIcon) == null ? void 0 : _c.iconifyApiOptions) == null ? void 0 : _d.publicApiFallback) {
        addAPIProvider("custom", {
          resources: [(_e = appConfig.nuxtIcon) == null ? void 0 : _e.iconifyApiOptions.url],
          index: 0
        });
        return;
      }
      addAPIProvider("", {
        resources: [(_f = appConfig.nuxtIcon) == null ? void 0 : _f.iconifyApiOptions.url]
      });
    }, { immediate: true });
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a, _b;
      if ((_b = (_a = appConfig.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[props.name]) {
        return appConfig.nuxtIcon.aliases[props.name];
      }
      return props.name;
    });
    const resolvedIcon = computed(() => resolveIconName(iconName.value));
    const iconKey = computed(() => [resolvedIcon.value.provider, resolvedIcon.value.prefix, resolvedIcon.value.name].filter(Boolean).join(":"));
    const icon = computed(() => {
      var _a;
      return (_a = state.value) == null ? void 0 : _a[iconKey.value];
    });
    const component = computed(() => {
      var _a;
      return (_a = nuxtApp.vueApp) == null ? void 0 : _a.component(iconName.value);
    });
    const sSize = computed(() => {
      var _a, _b, _c;
      if (!props.size && typeof ((_a = appConfig.nuxtIcon) == null ? void 0 : _a.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a;
      return ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.class) ?? "icon";
    });
    async function loadIconComponent() {
      var _a;
      if (component.value) {
        return;
      }
      if (!((_a = state.value) == null ? void 0 : _a[iconKey.value])) {
        isFetching.value = true;
        state.value[iconKey.value] = await loadIcon(resolvedIcon.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(iconName, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-84ef814a></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-84ef814a>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-icon@0.6.10_nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12_jxtntewwdssv5p3iyt44weljrq/node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84ef814a"], ["__file", "/Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/nuxt-icon@0.6.10_nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12_jxtntewwdssv5p3iyt44weljrq/node_modules/nuxt-icon/dist/runtime/Icon.vue"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Icon-9dJGgVH4.mjs.map
