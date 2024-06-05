import { computed, createTextVNode, defineComponent, getCurrentInstance, getCurrentScope, onMounted, onScopeDispose, ref, unref, useSSRContext, watch, withCtx } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { d as __nuxt_component_0$1, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './Card-BzdzGKPV.mjs';
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

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === 'function' ? r() : unref(r);
}
typeof WorkerGlobalScope !== 'undefined' && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = val => toString.call(val) === '[object Object]';
function noop() {
}
function unrefElement(elRef) {
  let _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === 'string' || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  }
  else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach(fn => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map(listener => register(el, event, listener, optionsClone));
        }),
      );
    },
    { immediate: true, flush: 'post' },
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useNetwork(options = {}) {
  const { window: window2 = defaultWindow } = options;
  const navigator = window2 == null ? void 0 : window2.navigator;
  const isSupported = useSupported(() => navigator && 'connection' in navigator);
  const isOnline = ref(true);
  const saveData = ref(false);
  const offlineAt = ref(void 0);
  const onlineAt = ref(void 0);
  const downlink = ref(void 0);
  const downlinkMax = ref(void 0);
  const rtt = ref(void 0);
  const effectiveType = ref(void 0);
  const type = ref('unknown');
  const connection = isSupported.value && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window2) {
    useEventListener(window2, 'offline', () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window2, 'online', () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    });
  }
  if (connection)
    useEventListener(connection, 'change', updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    onlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type,
  };
}
function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'test',
  __ssrInlineRender: true,
  setup(__props) {
    useOnline();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_VCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSuspense(_push, {
        fallback: () => {
          _push('<div italic op50><span animate-pulse>Loading...</span></div>');
        },
        default: () => {
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            /* STABLE */
          }, _parent));
        },
        _: 1,
        /* STABLE */
      });
      _push(ssrRenderComponent(_component_VCard, {
        title: 'Hello',
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            _push2(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit esse voluptatem et deserunt earum explicabo aut quis laboriosam nostrum quisquam sequi maxime est vitae, vero reiciendis veniam repudiandae fugit! ');
          else
            return [createTextVNode(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit esse voluptatem et deserunt earum explicabo aut quis laboriosam nostrum quisquam sequi maxime est vitae, vero reiciendis veniam repudiandae fugit! ')];
        }),
        _: 1,
        /* STABLE */
      }, _parent));
      _push('</div>');
    };
  },
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('pages/test.vue');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/pages/test.vue']]);

export { test as default };
// # sourceMappingURL=test-ON6-f6UO.mjs.map
