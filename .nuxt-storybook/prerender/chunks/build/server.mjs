import process from 'node:process';
import { Fragment, Suspense, Text, Transition, computed, createApp, createElementBlock, createVNode, defineAsyncComponent, defineComponent, effectScope, getCurrentInstance, getCurrentScope, h, hasInjectionContext, inject, isReactive, isReadonly, isRef, isShallow, markRaw, mergeProps, nextTick, onActivated, onBeforeUnmount, onDeactivated, onErrorCaptured, onMounted, onScopeDispose, onServerPrefetch, onUnmounted, provide, reactive, readonly, ref, resolveComponent, resolveDynamicComponent, shallowReactive, shallowRef, toRaw, toRef, toRefs, unref, useSSRContext, version, watch, watchEffect, withCtx } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import { createError as createError$1, deleteCookie, getCookie, getRequestHeader, getRequestHeaders, sanitizeStatusCode, setCookie } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import { getActiveHead } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unhead@1.9.11/node_modules/unhead/dist/index.mjs';
import { composableNames, defineHeadPlugin } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@unhead+shared@1.9.11/node_modules/@unhead/shared/dist/index.mjs';
import { RouterView, START_LOCATION, createMemoryHistory, createRouter, useRoute as useRoute$1 } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-router@4.3.2_vue@3.4.27_typescript@5.4.5_/node_modules/vue-router/dist/vue-router.node.mjs';
import { createRouter as createRouter$1, toRouteMatcher } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { defu, defuFn } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { klona } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { setupDevtoolsPlugin } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-devtools-stub@0.1.0/node_modules/vue-devtools-stub/dist/index.mjs';
import destr from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { parse as parse$1 } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/cookie-es@1.1.0/node_modules/cookie-es/dist/index.mjs';
import { isEqual as isEqual$1 } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import Swal from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/sweetalert2@11.11.0/node_modules/sweetalert2/dist/sweetalert2.all.js';
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@unhead+ssr@1.9.11/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/cheerio@1.0.0-rc.12/node_modules/cheerio/lib/esm/slim.js';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/xss@1.0.15/node_modules/xss/lib/index.js';
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ipx@2.1.0_ioredis@5.4.1/node_modules/ipx/dist/index.mjs';

globalThis._importMeta_ = globalThis._importMeta_ || { url: 'file:///_entry.js', env: process.env };

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL(),
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext('nuxt-app', {
  asyncContext: false,
});
const NuxtPluginIndicator = '__nuxt_plugin';
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: 'nuxt',
    versions: {
      get nuxt() {
        return '3.11.2';
      },
      get vue() {
        return nuxtApp.vueApp.version;
      },
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true },
    }),
    static: {
      data: {},
    },
    runWithContext: fn => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called)
          return;

        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook('app:suspense:resolve');
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options,
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function (hooks, args) {
      for (const hook of hooks)
        await nuxtApp.runWithContext(() => hook(...args));
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = `$${name}`;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, '$nuxt', nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, '$nuxt', nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload)
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);

    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app,
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide('config', runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks)
    nuxtApp.hooks.addHooks(plugin2.hooks);

  if (typeof plugin2 === 'function') {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === 'object') {
      for (const key in provide2)
        nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  let _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    let _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter(name => plugins2.some(p => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    }
    else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel)
        parallels.push(promise.catch(e => errors.push(e)));
      else
        await promise;
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false)
      continue;

    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++)
      await Promise.all(parallels);
  }
  if (errors.length)
    throw errors[0];
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === 'function')
    return plugin2;

  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  let _a;
  let nuxtAppInstance;
  if (hasInjectionContext())
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;

  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error('[nuxt] A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function. This is probably not a Nuxt bug. Find out more at `https://nuxt.com/docs/guide/concepts/auto-imports#vue-and-nuxt-composables`.');
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/g;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/g;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI(`${text}`).replace(ENC_PIPE_RE, '|');
}
function encodeQueryValue(input) {
  return encode(typeof input === 'string' ? input : JSON.stringify(input)).replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CARET_RE, '^').replace(SLASH_RE, '%2F');
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F').replace(ENC_ENC_SLASH_RE, '%2F').replace(AMPERSAND_RE, '%26').replace(PLUS_RE, '%2B');
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, '%2F');
}
function decode(text = '') {
  try {
    return decodeURIComponent(`${text}`);
  }
  catch {
    return `${text}`;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, ' '));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, ' '));
}
function parseQuery(parametersString = '') {
  const object = {};
  if (parametersString[0] === '?')
    parametersString = parametersString.slice(1);

  for (const parameter of parametersString.split('&')) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2)
      continue;

    const key = decodeQueryKey(s[1]);
    if (key === '__proto__' || key === 'constructor')
      continue;

    const value = decodeQueryValue(s[2] || '');
    if (object[key] === void 0)
      object[key] = value;
    else if (Array.isArray(object[key]))
      object[key].push(value);
    else
      object[key] = [object[key], value];
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === 'number' || typeof value === 'boolean')
    value = String(value);

  if (!value)
    return encodeQueryKey(key);

  if (Array.isArray(value))
    return value.map(_value => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join('&');

  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter(k => query[k] !== void 0).map(k => encodeQueryItem(k, query[k])).filter(Boolean).join('&');
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === 'boolean')
    opts = { acceptRelative: opts };

  if (opts.strict)
    return PROTOCOL_STRICT_REGEX.test(inputString);

  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = '', respectQueryAndFragment) {
  if (!respectQueryAndFragment)
    return input.endsWith('/');

  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = '', respectQueryAndFragment) {
  if (!respectQueryAndFragment)
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || '/';

  if (!hasTrailingSlash(input, true))
    return input || '/';

  let path = input;
  let fragment = '';
  const fragmentIndex = input.indexOf('#');
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split('?');
  const cleanPath = s0.endsWith('/') ? s0.slice(0, -1) : s0;
  return (cleanPath || '/') + (s.length > 0 ? `?${s.join('?')}` : '') + fragment;
}
function withTrailingSlash(input = '', respectQueryAndFragment) {
  if (!respectQueryAndFragment)
    return input.endsWith('/') ? input : `${input}/`;

  if (hasTrailingSlash(input, true))
    return input || '/';

  let path = input;
  let fragment = '';
  const fragmentIndex = input.indexOf('#');
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path)
      return fragment;
  }
  const [s0, ...s] = path.split('?');
  return `${s0}/${s.length > 0 ? `?${s.join('?')}` : ''}${fragment}`;
}
function hasLeadingSlash(input = '') {
  return input.startsWith('/');
}
function withLeadingSlash(input = '') {
  return hasLeadingSlash(input) ? input : `/${input}`;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isNonEmptyURL(url) {
  return url && url !== '/';
}
function joinURL(base, ...input) {
  let url = base || '';
  for (const segment of input.filter(url2 => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, '');
      url = withTrailingSlash(url) + _segment;
    }
    else {
      url = segment;
    }
  }
  return url;
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}
const protocolRelative = Symbol.for('ufo:protocolRelative');
function parseURL(input = '', defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i,
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ''] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: '',
      host: '',
      search: '',
      hash: '',
    };
  }
  if (!hasProtocol(input, { acceptRelative: true }))
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);

  const [, protocol = '', auth, hostAndPath = ''] = input.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = '', path = ''] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Z]:)/i, ''),
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : '',
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol,
  };
}
function parsePath(input = '') {
  const [pathname = '', search = '', hash = ''] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash,
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || '';
  const search = parsed.search ? (parsed.search.startsWith('?') ? '' : '?') + parsed.search : '';
  const hash = parsed.hash || '';
  const auth = parsed.auth ? `${parsed.auth}@` : '';
  const host = parsed.host || '';
  const proto = parsed.protocol || parsed[protocolRelative] ? `${parsed.protocol || ''}//` : '';
  return proto + auth + host + pathname + search + hash;
}
const LayoutMetaSymbol = Symbol('layout-meta');
const PageRouteSymbol = Symbol('route');
function useRouter() {
  let _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
}
function useRoute() {
  if (isProcessingMiddleware())
    console.warn('[nuxt] Calling `useRoute` within middleware may lead to misleading results. Instead, use the (to, from) arguments passed to the middleware to access the new and old routes.');

  if (hasInjectionContext())
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);

  return (/* @__PURE__ */ useNuxtApp())._route;
}
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
function addRouteMiddleware(name, middleware, options = {}) {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const global2 = options.global || typeof name !== 'string';
  const mw = middleware;
  if (!mw) {
    console.warn('[nuxt] No route middleware passed to `addRouteMiddleware`.', name);
    return;
  }
  if (global2)
    nuxtApp._middleware.global.push(mw);
  else
    nuxtApp._middleware.named[name] = mw;
}
function isProcessingMiddleware() {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware)
      return true;
  }
  catch {
    return false;
  }
  return false;
}
function navigateTo(to, options) {
  if (!to)
    to = '/';

  const toPath = typeof to === 'string' ? to : withQuery(to.path || '/', to.query || {}) + (to.hash || '');
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external))
      throw new Error('Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.');

    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol))
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === 'string' || isExternal ? toPath : router.resolve(to).fullPath || '/';
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function (response) {
        await nuxtApp.callHook('app:redirected');
        const encodedLoc = location2.replace(/"/g, '%22');
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 },
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach(final => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace)
      (void 0).replace(toPath);
    else
      (void 0).href = toPath;

    if (inMiddleware) {
      if (!nuxtApp.isHydrating)
        return false;

      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
}
const NUXT_ERROR_SIGNATURE = '__nuxt_error';
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, 'error');
function showError(error2) {
  const nuxtError = createError(error2);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error22 = useError();
    if (false)
      ;
    error22.value = error22.value || nuxtError;
  }
  catch {
    throw nuxtError;
  }
  return nuxtError;
}
const isNuxtError = error2 => !!error2 && typeof error2 === 'object' && NUXT_ERROR_SIGNATURE in error2;
function createError(error2) {
  const nuxtError = createError$1(error2);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false,
  });
  return nuxtError;
}
version.startsWith('3');
function resolveUnref(r) {
  return typeof r === 'function' ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = '') {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map(r => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === 'object') {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === 'titleTemplate' || k.startsWith('on'))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      }),
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    'entries:resolve': function (ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    },
  },
});
const headSymbol = 'usehead';
const _global = typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
const globalKey$1 = '__unhead_injection_handler__';
function setHeadInjectionHandler(handler2) {
  _global[globalKey$1] = handler2;
}
function injectHead() {
  if (globalKey$1 in _global)
    return _global[globalKey$1]();

  const head = inject(headSymbol);
  if (!head && 'prerender' !== 'production')
    console.warn('Unhead is missing Vue context, falling back to shared context. This may have unexpected results.');
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry2.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry2;
}
const coreComposableNames = [
  'injectHead',
];
({
  '@unhead/vue': [...coreComposableNames, ...composableNames],
});
const unhead_pa5VDruYua = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:head',
  enforce: 'pre',
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead,
    );
    nuxtApp.vueApp.use(head);
  },
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance)
      throw new Error('Context conflict');
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage)
      als = new _AsyncLocalStorage();
    else
      console.warn('[unctx] `AsyncLocalStorage` is not provided.');
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0)
        return instance;
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0)
        throw new Error('Context is not available');

      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace)
        checkConflict(instance);

      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      }
      finally {
        if (!isSingleton)
          currentInstance = void 0;
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton)
          currentInstance = void 0;

        return await r;
      }
      finally {
        asyncHandlers.delete(onLeave);
      }
    },
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key])
        contexts[key] = createContext({ ...defaultOpts, ...opts });

      contexts[key];
      return contexts[key];
    },
  };
}
const _globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};
const globalKey = '__unctx__';
_globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const asyncHandlersKey = '__unctx_async_handlers__';
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2)
      restores.push(restore2);
  }
  const restore = () => {
    for (const restore2 of restores)
      restore2();
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === 'object' && 'catch' in awaitable) {
    awaitable = awaitable.catch((error2) => {
      restore();
      throw error2;
    });
  }
  return [awaitable, restore];
}
function interpolatePath(route, match) {
  return match.path.replace(/(:\w+)\([^)]+\)/g, '$1').replace(/(:\w+)[?+*]/g, '$1').replace(/:\w+/g, (r) => {
    let _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || '';
  });
}
function generateRouteKey$1(routeProps, override) {
  const matchedRoute = routeProps.route.matched.find((m) => {
    let _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === 'function' ? source(routeProps.route) : source;
}
function wrapInKeepAlive(props, children) {
  return { default: () => children };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const inlineConfig = {
  nuxt: {
    buildId: '4c2f377c-f240-4b94-9700-0e9a0cfce68e',
  },
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function deepDelete(obj, newObj) {
  for (const key in obj) {
    const val = newObj[key];
    if (!(key in newObj))
      delete obj[key];

    if (val !== null && typeof val === 'object')
      deepDelete(obj[key], newObj[key]);
  }
}
function deepAssign(obj, newObj) {
  for (const key in newObj) {
    const val = newObj[key];
    if (val !== null && typeof val === 'object') {
      obj[key] = obj[key] || {};
      deepAssign(obj[key], val);
    }
    else {
      obj[key] = val;
    }
  }
}
function useAppConfig() {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  if (!nuxtApp._appConfig)
    nuxtApp._appConfig = klona(__appConfig);

  return nuxtApp._appConfig;
}
{
  const applyHMR = (newConfig) => {
    const appConfig = useAppConfig();
    if (newConfig && appConfig) {
      deepAssign(appConfig, newConfig);
      deepDelete(appConfig, newConfig);
    }
  };
  if (globalThis._importMeta_.webpackHot) {
    globalThis._importMeta_.webpackHot.accept('#build/app.config.mjs', () => {
      applyHMR(__appConfig);
    });
  }
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules }),
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$5 = {
  layout: 'auth',
};
const __nuxt_page_meta$4 = {
  layout: 'auth',
  middleware: 'guest',
};
const __nuxt_page_meta$3 = {
  layout: 'auth',
};
const __nuxt_page_meta$2 = {
  layout: 'auth',
};
const __nuxt_page_meta$1 = {
  layout: 'admin',
  middleware: 'auth',
};
const _routes = [
  {
    name: 'index',
    path: '/',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./index-CsyLW2VF.mjs').then(m => m.default || m),
  },
  {
    name: 'all___en',
    path: '/en/:all(.*)*',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_...all_-DZxGLUSV.mjs').then(m => m.default || m),
  },
  {
    name: 'all___ar',
    path: '/ar/:all(.*)*',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_...all_-DZxGLUSV.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? 'auth-forgot-password___en',
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? '/en/auth/forgot-password',
    meta: __nuxt_page_meta$5 || {},
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect,
    component: () => import('./forgot-password-DxqiYa6j.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? 'auth-forgot-password___ar',
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? '/ar/auth/forgot-password',
    meta: __nuxt_page_meta$5 || {},
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect,
    component: () => import('./forgot-password-DxqiYa6j.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? 'auth-login___en',
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? '/en/auth/login',
    meta: __nuxt_page_meta$4 || {},
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect,
    component: () => import('./login-h2R0RkSq.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? 'auth-login___ar',
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? '/ar/auth/login',
    meta: __nuxt_page_meta$4 || {},
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect,
    component: () => import('./login-h2R0RkSq.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? 'auth-register___en',
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? '/en/auth/register',
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect,
    component: () => import('./register-BIxRkp3z.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? 'auth-register___ar',
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? '/ar/auth/register',
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect,
    component: () => import('./register-BIxRkp3z.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? 'auth-reset-password___en',
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? '/en/auth/reset-password',
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect,
    component: () => import('./reset-password-FlFlnp6v.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? 'auth-reset-password___ar',
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? '/ar/auth/reset-password',
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect,
    component: () => import('./reset-password-FlFlnp6v.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? 'dashboard___en',
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? '/en/dashboard',
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect,
    component: () => import('./index-C_Ul_R8N.mjs').then(m => m.default || m),
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? 'dashboard___ar',
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? '/ar/dashboard',
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect,
    component: () => import('./index-C_Ul_R8N.mjs').then(m => m.default || m),
  },
  {
    name: 'index___en',
    path: '/en',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./index-CsyLW2VF.mjs').then(m => m.default || m),
  },
  {
    name: 'index___ar',
    path: '/ar',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./index-CsyLW2VF.mjs').then(m => m.default || m),
  },
  {
    name: 'test___en',
    path: '/en/test',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./test-ON6-f6UO.mjs').then(m => m.default || m),
  },
  {
    name: 'test___ar',
    path: '/ar/test',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./test-ON6-f6UO.mjs').then(m => m.default || m),
  },
  {
    path: '/iframe.html',
    name: 'storybook-iframe',
  },
];
function _wrapIf(component, props, slots) {
  props = props === true ? {} : props;
  return { default: () => {
    let _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
}
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, '$1').replace(/(:\w+)[?+*]/g, '$1').replace(/:\w+/g, (r) => {
    let _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || '';
  });
  return typeof source === 'function' ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION)
    return false;

  if (generateRouteKey(to) !== generateRouteKey(from))
    return true;

  const areComponentsSame = to.matched.every(
    (comp, index2) => {
      let _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index2]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    },
  );
  if (areComponentsSame)
    return false;

  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    let _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? 'auto';
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === 'function' ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from))
      position = { left: 0, top: 0 };

    if (to.path === from.path) {
      if (from.hash && !to.hash)
        return { left: 0, top: 0 };

      if (to.hash)
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };

      return false;
    }
    const hasTransition = route => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? 'page:transition:finish' : 'page:finish';
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise(resolve22 => setTimeout(resolve22, 0));
        if (to.hash)
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };

        resolve2(position);
      });
    });
  },
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem)
      return Number.parseFloat(getComputedStyle(elem).scrollMarginTop);
  }
  catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: 'auto',
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0,
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  let _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate))
    return;

  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true)
    return;

  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {

  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule,
];
const namedMiddleware = {
  auth: () => import('./auth-DACzJ7zV.mjs'),
  guest: () => import('./guest-NBO715Er.mjs'),
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:router',
  enforce: 'pre',
  async setup(nuxtApp) {
    let _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes('#'))
      routerBase += '#';

    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ('scrollRestoration' in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = 'manual';
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes,
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, 'previousRoute', {
      get: () => previousRoute.value,
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook('page:finish', syncCurrentRoute);
    router.afterEach((to, from) => {
      let _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default))
        syncCurrentRoute();
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {},
    };
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    }
    catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext)
      return { provide: { router } };

    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      let _a2, _b2;
      await nuxtApp.callHook('page:loading:start');
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout))
        to.meta.layout = initialLayout;

      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware)
            continue;

          for (const entry2 of toArray(componentMiddleware))
            middlewareEntries.add(entry2);
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key])
                middlewareEntries.add(key);
              else
                middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === 'string' ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then(r => r.default || r)) : entry2;
          if (!middleware) {
            {
              throw new Error(`Unknown route middleware: '${entry2}'. Valid middleware: ${Object.keys(namedMiddleware).map(mw => `'${mw}'`).join(', ')}.`);
            }
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`,
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true)
            continue;

          if (result || result === false)
            return result;
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook('page:loading:end');
    });
    useError();
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure)
        await nuxtApp.callHook('page:loading:end');

      if ((failure == null ? void 0 : failure.type) === 4)
        return;

      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath,
          },
        })));
      }
      else if (to.fullPath !== initialURL && (to.redirectedFrom || !isSamePath(to.fullPath, initialURL))) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || '/'));
      }
    });
    nuxtApp.hooks.hookOnce('app:created', async () => {
      try {
        if ('name' in resolvedInitialRoute)
          resolvedInitialRoute.name = void 0;

        await router.replace({
          ...resolvedInitialRoute,
          force: true,
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      }
      catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  },
});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = pinia => activePinia = pinia;
const piniaSymbol = Symbol('pinia');
function isPlainObject$1(o) {
  return o && typeof o === 'object' && Object.prototype.toString.call(o) === '[object Object]' && typeof o.toJSON !== 'function';
}
let MutationType;
(function (MutationType2) {
  MutationType2.direct = 'direct';
  MutationType2.patchObject = 'patch object';
  MutationType2.patchFunction = 'patch function';
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  const _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach(plugin2 => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2)
        toBeInstalled.push(plugin2);
      else
        _p.push(plugin2);

      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state,
  });
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState))
      continue;

    const targetValue = newState[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    }
    else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
function noop() {
}
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope())
    onScopeDispose(removeSubscription);

  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = fn => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map)
    patchToApply.forEach((value, key) => target.set(key, value));

  if (target instanceof Set && patchToApply instanceof Set)
    patchToApply.forEach(target.add, target);

  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch))
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    else
      target[key] = subPatch;
  }
  return target;
}
const { assign: assign$2 } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (name in localState)
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);

      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$2({ actions: {} }, options);
  if (!pinia._e.active)
    throw new Error('Pinia destroyed');

  const $subscribeOptions = {
    deep: true,
    // flush: 'post',
  };
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      }
      else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents))
          debuggerEvents.push(event);
        else
          console.error('🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.');
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === 'function') {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents,
      };
    }
    else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents,
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId)
        isListening = true;
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$2($state, newState);
    });
  };
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function () {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError,
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      }
      catch (error2) {
        triggerSubscriptions(onErrorCallbackList, error2);
        throw error2;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error2) => {
          triggerSubscriptions(onErrorCallbackList, error2);
          return Promise.reject(error2);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState,
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === 'sync' ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents,
          }, state);
        }
      }, assign$2({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose,
  };
  const store = reactive(assign$2(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set()),
      // devtools custom properties
    },
    partialStore,
    // must be added later
    // setupStore
  ));
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (hot)
        set(hotState.value, key, toRef(setupStore, key));

      {
        _hmrPayload.state.push(key);
      }
    }
    else if (typeof prop === 'function') {
      const actionValue = hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    }
    else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] // @ts-expect-error
        = options.getters[key];
      }
    }
  }
  {
    assign$2(store, setupStore);
    assign$2(toRaw(store), setupStore);
  }
  Object.defineProperty(store, '$state', {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot)
        throw new Error('cannot set hotState');

      $patch(($state) => {
        assign$2($state, state);
      });
    },
  });
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === 'object' && isPlainObject$1(newStateTarget) && isPlainObject$1(oldStateSource))
            patchObject(newStateTarget, oldStateSource);
          else
            newStore.$state[stateKey] = oldStateSource;
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state))
          del(store, stateKey);
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, 'hotState');
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        );
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters))
          del(store, key);
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions))
          del(store, key);
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  pinia._p.forEach((extender) => {
    {
      assign$2(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin,
      })));
    }
  });
  if (store.$state && typeof store.$state === 'object' && typeof store.$state.constructor === 'function' && !store.$state.constructor.toString().includes('[native code]')) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate)
    options.hydrate(store.$state, initialState);

  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  if (typeof idOrOptions === 'string') {
    id = idOrOptions;
    options = setup;
  }
  else {
    options = idOrOptions;
    id = idOrOptions.id;
    if (typeof id !== 'string')
      throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    = (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    if (!activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      {
        createOptionsStore(id, options, pinia);
      }
      {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (hot) {
      const hotId = `__hot:${id}`;
      const newStore = createOptionsStore(hotId, assign$2({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useStateKeyPrefix = '$s';
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === 'string' ? args.pop() : void 0;
  if (typeof args[0] !== 'string')
    args.unshift(autoKey);

  const [_key, init] = args;
  if (!_key || typeof _key !== 'string')
    throw new TypeError(`[nuxt] [useState] key must be a string: ${_key}`);

  if (init !== void 0 && typeof init !== 'function')
    throw new Error(`[nuxt] [useState] init must be a function: ${init}`);

  const key = useStateKeyPrefix + _key;
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  let _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  if (!include || !event)
    return _headers;

  const headers = /* @__PURE__ */ Object.create(null);
  for (const _key of include) {
    const key = _key.toLowerCase();
    const header = _headers[key];
    if (header)
      headers[key] = header;
  }
  return headers;
}
const CookieDefaults = {
  path: '/',
  watch: true,
  decode: val => destr(decodeURIComponent(val)),
  encode: val => encodeURIComponent(typeof val === 'string' ? val : JSON.stringify(val)),
};
function useCookie(name, _opts) {
  let _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies2 = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0)
    delay = opts.maxAge * 1e3;
  else if (opts.expires)
    delay = opts.expires.getTime() - Date.now();

  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies2[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  if (hasExpired)
    console.warn(`[nuxt] not setting cookie \`${name}\` as it has already expired.`);

  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual$1(cookie.value, cookies2[name]))
        return;

      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce('app:rendered', writeFinalCookieValue);
    nuxtApp.hooks.hookOnce('app:error', () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse$1(getRequestHeader(useRequestEvent(), 'cookie') || '', opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0)
      return setCookie(event, name, value, opts);

    if (getCookie(event, name) !== void 0)
      return deleteCookie(event, name, opts);
  }
}
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const clientOnlySymbol = Symbol.for('nuxt:client-only');
const __nuxt_component_0$1 = defineComponent({
  name: 'ClientOnly',
  inheritAttrs: false,

  props: ['fallback', 'placeholder', 'placeholderTag', 'fallbackTag'],
  setup(_, { slots, attrs }) {
    const mounted6 = ref(false);
    onMounted(() => {
      mounted6.value = true;
    });
    {
      const nuxtApp = /* @__PURE__ */ useNuxtApp();
      nuxtApp._isNuxtPageUsed = true;
      nuxtApp._isNuxtLayoutUsed = true;
    }
    provide(clientOnlySymbol, true);
    return (props) => {
      let _a;
      if (mounted6.value)
        return (_a = slots.default) == null ? void 0 : _a.call(slots);

      const slot = slots.fallback || slots.placeholder;
      if (slot)
        return slot();

      const fallbackStr = props.fallback || props.placeholder || '';
      const fallbackTag = props.fallbackTag || props.placeholderTag || 'span';
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  },
});
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia,
    },
  };
});
const reducers = {
  NuxtError: data => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: data => isRef(data) && isShallow(data) && !data.value && (typeof data.value === 'bigint' ? '0n' : JSON.stringify(data.value) || '_'),
  EmptyRef: data => isRef(data) && !data.value && (typeof data.value === 'bigint' ? '0n' : JSON.stringify(data.value) || '_'),
  ShallowRef: data => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: data => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: data => isRef(data) && data.value,
  Reactive: data => isReactive(data) && toRaw(data),
};
const revive_payload_server_h2ecFZgka5 = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:revive-payload:server',
  setup() {
    for (const reducer in reducers)
      definePayloadReducer(reducer, reducers[reducer]);
  },
});
const LazyButton = defineAsyncComponent(() => import('./button.esm-DmUJJLCv.mjs').then(r => r.default || r.default || r));
const LazyIcon = defineAsyncComponent(() => import('./Icon-9dJGgVH4.mjs').then(r => r.default || r.default || r));
const LazyIconCSS = defineAsyncComponent(() => import('./IconCSS-DfCkCYUo.mjs').then(r => r.default || r.default || r));
const LazyNuxtIcon = defineAsyncComponent(() => import('./nuxt-icon-DWcJ3f5h.mjs').then(r => r.default || r.default || r));
const lazyGlobalComponents = [
  ['Button', LazyButton],
  ['Icon', LazyIcon],
  ['IconCSS', LazyIconCSS],
  ['NuxtIcon', LazyNuxtIcon],
];
const components_plugin_gDA1dPA3uF = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:global-components',
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component(`Lazy${name}`, component);
    }
  },
});
const STATE_KEY = 'viewportState';
function createViewportManager(options, state) {
  const breakpoint = computed({
    get() {
      return state.value || options.fallbackBreakpoint;
    },
    set(newBreakpoint) {
      state.value = newBreakpoint;
    },
  });
  const queries = computed(() => {
    const breakpoints = options.breakpoints || {};
    const breakpointsKeys = Object.keys(breakpoints).sort((a, b) => breakpoints[a] - breakpoints[b]);
    const output = {};
    let i = breakpointsKeys.length;
    while (i--) {
      const currentKey = breakpointsKeys[i];
      const size = breakpoints[currentKey];
      const nextSize = breakpoints[breakpointsKeys[i + 1]];
      const prevSize = breakpoints[breakpointsKeys[i - 1]];
      let mediaQuery = '';
      if (options.feature === 'minWidth') {
        if (i > 0)
          mediaQuery = `(min-width: ${size}px)`;
        else
          mediaQuery = '(min-width: 1px)';

        if (nextSize)
          mediaQuery += ` and (max-width: ${nextSize - 1}px)`;
      }
      else {
        mediaQuery = `(max-width: ${size}px)`;
        if (prevSize)
          mediaQuery = `(min-width: ${prevSize - 1}px) and ${mediaQuery}`;
      }
      output[currentKey] = {
        mediaQuery,
        size,
      };
    }
    return output;
  });
  const queriesKeys = computed(() => Object.keys(queries.value));
  return {
    breakpoint,
    breakpointValue,
    isGreaterThan,
    isGreaterOrEquals,
    isLessThan,
    match,
    matches,
    queries,
  };
  function breakpointValue(searchBreakpoint) {
    const breakpoints = options.breakpoints || {};
    return breakpoints[searchBreakpoint];
  }
  function isGreaterThan(searchBreakpoint) {
    const currentIndex = queriesKeys.value.indexOf(breakpoint.value);
    const breakpointIndex = queriesKeys.value.indexOf(searchBreakpoint);
    if (breakpointIndex === -1)
      return false;

    return breakpointIndex > currentIndex;
  }
  function isGreaterOrEquals(searchBreakpoint) {
    return isGreaterThan(searchBreakpoint) || match(searchBreakpoint);
  }
  function isLessThan(searchBreakpoint) {
    const currentIndex = queriesKeys.value.indexOf(breakpoint.value);
    const breakpointIndex = queriesKeys.value.indexOf(searchBreakpoint);
    if (breakpointIndex === -1)
      return false;

    return breakpointIndex < currentIndex;
  }
  function match(breakpointToMatch) {
    return breakpoint.value === breakpointToMatch;
  }
  function matches(...breakpointsToMatch) {
    return breakpointsToMatch.includes(breakpoint.value);
  }
}
async function detectBreakpoint(options, input) {
  let _a;
  try {
    if (input.cookie && input.cookie in options.breakpoints)
      return input.cookie;

    const userAgent = (_a = input.headers) == null ? void 0 : _a['user-agent'];
    if (!userAgent)
      return options.fallbackBreakpoint;

    let deviceType = '';
    if (input.headers) {
      if (userAgent === 'Amazon CloudFront') {
        const types = {
          'cloudfront-is-android-viewer': 'mobile',
          'cloudfront-is-desktop-viewer': 'desktop',
          'cloudfront-is-ios-viewer': 'mobile',
          'cloudfront-is-mobile-viewer': 'mobile',
          'cloudfront-is-smarttv-viewer': 'tv',
          'cloudfront-is-tablet-viewer': 'tablet',
        };
        for (const key in types) {
          if (input.headers[key] === 'true') {
            deviceType = types[key];
            break;
          }
        }
      }
      else if (input.headers['cf-device-type']) {
        deviceType = input.headers['cf-device-type'];
      }
    }
    if (!deviceType) {
      const { default: Bowser } = await import(
        /* webpackChunkName: "bowser" */
        'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/bowser@2.11.0/node_modules/bowser/es5.js'
      );
      const parser = Bowser.getParser(userAgent);
      deviceType = parser.getPlatformType();
    }
    if (deviceType in options.defaultBreakpoints)
      return options.defaultBreakpoints[deviceType];

    return options.fallbackBreakpoint;
  }
  catch (error2) {
    console.error(error2);
    return options.fallbackBreakpoint;
  }
}
function parseCookie(input) {
  if (!input.length)
    return {};

  return Object.fromEntries(input.split(/; */).map(cookie => cookie.split('=', 2)));
}
const viewportOptions = { breakpoints: { 'xs': 320, 'sm': 640, 'md': 768, 'lg': 1024, 'xl': 1280, '2xl': 1536 }, cookie: { expires: 365, name: 'viewport', path: '/', sameSite: 'Strict', secure: true }, defaultBreakpoints: { desktop: 'lg', mobile: 'xs', tablet: 'md' }, fallbackBreakpoint: 'lg', feature: 'minWidth' };
const plugin_server_cn5LiYP7bQ = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  let _a, _b, _c, _d;
  let __temp, __restore;
  const state = useState(STATE_KEY, '$fXDqvVCCdX');
  const manager = createViewportManager(viewportOptions, state);
  let cookie = '';
  const headers = (_c = (_b = (_a = nuxtApp == null ? void 0 : nuxtApp.ssrContext) == null ? void 0 : _a.event) == null ? void 0 : _b.req) == null ? void 0 : _c.headers;
  if (headers != null) {
    cookie = headers.cookie;
    headers['user-agent'];
  }
  if (typeof cookie !== 'string')
    cookie = '';

  cookie = parseCookie(cookie)[(_d = viewportOptions.cookie) == null ? void 0 : _d.name];
  state.value = ([__temp, __restore] = executeAsync(() => detectBreakpoint(viewportOptions, { cookie, headers })), __temp = await __temp, __restore(), __temp);
  return nuxtApp.provide('viewport', manager);
});
const COOKIE_ID_SEPARATOR = '~';
function getAllCookieIdsString(moduleOptions) {
  return getCookieIds([
    ...moduleOptions.cookies.necessary,
    ...moduleOptions.cookies.optional,
  ]).join('');
}
const getCookieIds = cookies2 => cookies2.map(cookie => cookie.id);
const plugin_OggO9PRE1S = /* @__PURE__ */ defineNuxtPlugin((_nuxtApp) => {
  let _a;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const moduleOptions = runtimeConfig.public.cookieControl;
  const cookieIsConsentGiven = useCookie(
    moduleOptions.cookieNameIsConsentGiven,
    moduleOptions.cookieOptions,
  );
  const cookieCookiesEnabledIds = (_a = useCookie(
    moduleOptions.cookieNameCookiesEnabledIds,
    moduleOptions.cookieOptions,
  ).value) == null
    ? void 0
    : _a.split(COOKIE_ID_SEPARATOR);
  const isConsentGiven = ref(
    cookieIsConsentGiven.value === void 0 ? void 0 : cookieIsConsentGiven.value === getAllCookieIdsString(moduleOptions),
  );
  const cookiesEnabled = ref(
    cookieCookiesEnabledIds === void 0
      ? void 0
      : [
          ...moduleOptions.cookies.necessary.filter(
            cookieNecessary => cookieCookiesEnabledIds.includes(cookieNecessary.id),
          ),
          ...moduleOptions.cookies.optional.filter(
            cookieOptional => cookieCookiesEnabledIds.includes(cookieOptional.id),
          ),
        ],
  );
  const cookiesEnabledIds = ref(cookieCookiesEnabledIds);
  const isModalActive = ref();
  const locale = ref();
  const state = {
    cookiesEnabled,
    cookiesEnabledIds,
    isConsentGiven,
    isModalActive,
    locale,
    moduleOptions,
  };
  return {
    provide: {
      cookies: state,
    },
  };
});
/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
const RE_ARGS = /\{([0-9a-z]+)\}/gi;
function format$1(message, ...args) {
  if (args.length === 1 && isObject(args[0]))
    args = args[0];

  if (!args || !args.hasOwnProperty)
    args = {};

  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : '';
  });
}
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = json => JSON.stringify(json).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029').replace(/\u0027/g, '\\u0027');
const isNumber = val => typeof val === 'number' && isFinite(val);
const isDate = val => toTypeString(val) === '[object Date]';
const isRegExp = val => toTypeString(val) === '[object RegExp]';
const isEmptyObject = val => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
let _globalThis;
function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {});
}
function escapeHtml(rawText) {
  return rawText.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = val => typeof val === 'function';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isSymbol = val => typeof val === 'symbol';
const isObject = val => val !== null && typeof val === 'object';
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
const objectToString = Object.prototype.toString;
const toTypeString = value => objectToString.call(value);
function isPlainObject(val) {
  if (!isObject(val))
    return false;
  const proto = Object.getPrototypeOf(val);
  return proto === null || proto.constructor === Object;
}
function toDisplayString(val) {
  return val == null ? '' : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
}
function join(items, separator = '') {
  return items.reduce((str, item, index2) => index2 === 0 ? str + item : str + separator + item, '');
}
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${' '.repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ${' '.repeat(pad)}${'^'.repeat(length)}`);
        }
        else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ${'^'.repeat(length)}`);
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join('\n');
}
function incrementer(code2) {
  let current = code2;
  return () => ++current;
}
function warn(msg, err) {
  if (typeof console !== 'undefined') {
    console.warn(`[intlify] ${msg}`);
    if (err)
      console.warn(err.stack);
  }
}
const hasWarned = {};
function warnOnce(msg) {
  if (!hasWarned[msg]) {
    hasWarned[msg] = true;
    warn(msg);
  }
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler2) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler2);
      if (!added)
        events.set(event, [handler2]);
    },
    off(event, handler2) {
      const handlers = events.get(event);
      if (handlers)
        handlers.splice(handlers.indexOf(handler2) >>> 0, 1);
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map(handler2 => handler2(payload));
      (events.get('*') || []).slice().map(handler2 => handler2(event, payload));
    },
  };
  return emitter;
}
const isNotObjectOrIsArray = val => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des))
    throw new Error('Invalid value');

  const stack = [{ src, des }];
  while (stack.length) {
    const { src: src2, des: des2 } = stack.pop();
    Object.keys(src2).forEach((key) => {
      if (isNotObjectOrIsArray(src2[key]) || isNotObjectOrIsArray(des2[key]))
        des2[key] = src2[key];
      else
        stack.push({ src: src2[key], des: des2[key] });
    });
  }
}
/*!
  * message-compiler v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  return loc;
}
const CompileWarnCodes = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2,
};
const warnMessages$2 = {
  [CompileWarnCodes.USE_MODULO_SYNTAX]: 'Use modulo before \'{{0}}\'.',
};
function createCompileWarn(code2, loc, ...args) {
  const msg = format$1(warnMessages$2[code2], ...args || []);
  const message = { message: String(msg), code: code2 };
  if (loc)
    message.location = loc;

  return message;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17,
};
const errorMessages$2 = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: 'Expected token: \'{0}\'',
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: 'Invalid token in placeholder: \'{0}\'',
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: 'Unterminated single quote in placeholder',
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: 'Unknown escape sequence: \\{0}',
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: 'Invalid unicode escape sequence: {0}',
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: 'Unbalanced closing brace',
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: 'Unterminated closing brace',
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: 'Empty placeholder',
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: 'Not allowed nest placeholder',
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: 'Invalid linked format',
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: 'Plural must have messages',
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: 'Unexpected empty linked modifier',
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: 'Unexpected empty linked key',
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: 'Unexpected lexical analysis in token: \'{0}\'',
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: 'unhandled codegen node type: \'{0}\'',
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: 'unhandled mimifier node type: \'{0}\'',
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = format$1((messages || errorMessages$2)[code2] || '', ...args || []);
  const error2 = new SyntaxError(String(msg));
  error2.code = code2;
  if (loc)
    error2.location = loc;

  error2.domain = domain;
  return error2;
}
function defaultOnError(error2) {
  throw error2;
}
const RE_HTML_TAG = /<[\w\s=":;#-/]+>/;
const detectHtmlTag = source => RE_HTML_TAG.test(source);
const CHAR_SP = ' ';
const CHAR_CR = '\r';
const CHAR_LF = '\n';
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = index22 => _buf[index22] === CHAR_CR && _buf[index22 + 1] === CHAR_LF;
  const isLF = index22 => _buf[index22] === CHAR_LF;
  const isPS = index22 => _buf[index22] === CHAR_PS;
  const isLS = index22 => _buf[index22] === CHAR_LS;
  const isLineEnd = index22 => isCRLF(index22) || isLF(index22) || isPS(index22) || isLS(index22);
  const index2 = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = offset => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index))
      _index++;

    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset))
      _peekOffset++;

    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index)
      next();

    _peekOffset = 0;
  }
  return {
    index: index2,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek,
  };
}
const EOF = void 0;
const DOT = '.';
const LITERAL_DELIMITER = '\'';
const ERROR_DOMAIN$3 = 'tokenizer';
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 14,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 14,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: '',
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code2, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$3,
        args,
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location)
      token.loc = createLocation(context2.startLoc, context2.endLoc);

    if (value != null)
      token.value = value;

    return token;
  }
  const getEndToken = context2 => getToken(
    context2,
    14,
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    }
    else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return '';
    }
  }
  function peekSpaces(scnr) {
    let buf = '';
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF)
      return false;

    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 // a-z
      || cc >= 65 && cc <= 90 // A-Z
      || cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF)
      return false;

    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2)
      return false;

    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2)
      return false;

    peekSpaces(scnr);
    const ch = scnr.currentPeek() === '-' ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2)
      return false;

    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8)
      return false;

    peekSpaces(scnr);
    const ret = scnr.currentPeek() === '.';
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9)
      return false;

    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 8 || currentType === 12))
      return false;

    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ':';
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 10)
      return false;

    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === '{') {
        return isIdentifierStart(scnr.peek());
      }
      else if (ch === '@' || ch === '%' || ch === '|' || ch === ':' || ch === '.' || ch === CHAR_SP || !ch) {
        return false;
      }
      else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      }
      else {
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === '|';
    scnr.resetPeek();
    return ret;
  }
  function detectModuloStart(scnr) {
    const spaces = peekSpaces(scnr);
    const ret = scnr.currentPeek() === '%' && scnr.peek() === '{';
    scnr.resetPeek();
    return {
      isModulo: ret,
      hasSpace: spaces.length > 0,
    };
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = '', detectModulo = false) => {
      const ch = scnr.currentPeek();
      if (ch === '{') {
        return prev === '%' ? false : hasSpace;
      }
      else if (ch === '@' || !ch) {
        return prev === '%' ? true : hasSpace;
      }
      else if (ch === '%') {
        scnr.peek();
        return fn(hasSpace, '%', true);
      }
      else if (ch === '|') {
        return prev === '%' || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
      }
      else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP, detectModulo);
      }
      else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF, detectModulo);
      }
      else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF)
      return EOF;

    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 // a-z
      || cc >= 65 && cc <= 90 // A-Z
      || cc >= 48 && cc <= 57 // 0-9
      || cc === 95 // _
      || cc === 36;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 // a-z
      || cc >= 65 && cc <= 90 // A-Z
      || cc >= 48 && cc <= 57 // 0-9
      || cc === 95 // _
      || cc === 36 // $
      || cc === 45;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 // 0-9
      || cc >= 65 && cc <= 70 // A-F
      || cc >= 97 && cc <= 102;
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = '';
    let num = '';
    while (ch = takeDigit(scnr))
      num += ch;

    return num;
  }
  function readModulo(scnr) {
    skipSpaces(scnr);
    const ch = scnr.currentChar();
    if (ch !== '%')
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);

    scnr.next();
    return '%';
  }
  function readText(scnr) {
    let buf = '';
    while (true) {
      const ch = scnr.currentChar();
      if (ch === '{' || ch === '}' || ch === '@' || ch === '|' || !ch) {
        break;
      }
      else if (ch === '%') {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        }
        else {
          break;
        }
      }
      else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        }
        else if (isPluralStart(scnr)) {
          break;
        }
        else {
          buf += ch;
          scnr.next();
        }
      }
      else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = '';
    let name = '';
    while (ch = takeNamedIdentifierChar(scnr))
      name += ch;

    if (scnr.currentChar() === EOF)
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);

    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = '';
    if (scnr.currentChar() === '-') {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    }
    else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF)
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);

    return value;
  }
  function isLiteral2(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, '\'');
    let ch = '';
    let literal = '';
    while (ch = takeChar(scnr, isLiteral2)) {
      if (ch === '\\')
        literal += readEscapeSequence(scnr);
      else
        literal += ch;
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, '\'');
      }
      return literal;
    }
    eat(scnr, '\'');
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case '\\':
      case '\'':
        scnr.next();
        return `\\${ch}`;
      case 'u':
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case 'U':
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return '';
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = '';
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== '{' && ch !== '}' && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = '';
    let identifiers = '';
    while (ch = takeChar(scnr, isInvalidIdentifier))
      identifiers += ch;

    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = '';
    let name = '';
    while (ch = takeIdentifierChar(scnr))
      name += ch;

    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = (buf) => {
      const ch = scnr.currentChar();
      if (ch === '{' || ch === '%' || ch === '@' || ch === '|' || ch === '(' || ch === ')' || !ch) {
        return buf;
      }
      else if (ch === CHAR_SP) {
        return buf;
      }
      else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
      else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn('');
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      '|',
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case '{':
        if (context2.braceNest >= 1)
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);

        scnr.next();
        token = getToken(
          context2,
          2,
          '{',
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case '}':
        if (context2.braceNest > 0 && context2.currentType === 2)
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);

        scnr.next();
        token = getToken(
          context2,
          3,
          '}',
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0)
          context2.inLinked = false;

        return token;
      case '@':
        if (context2.braceNest > 0)
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);

        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default: {
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0)
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);

          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 5 || context2.currentType === 6 || context2.currentType === 7)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 6, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 7, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 13, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
      }
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 8 || currentType === 9 || currentType === 12 || currentType === 10) && (ch === CHAR_LF || ch === CHAR_SP))
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);

    switch (ch) {
      case '@':
        scnr.next();
        token = getToken(
          context2,
          8,
          '@',
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case '.':
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          '.',
          /* TokenChars.LinkedDot */
        );
      case ':':
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          10,
          ':',
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 12, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === '{')
            return readTokenInPlaceholder(scnr, context2) || token;
          else
            return getToken(context2, 11, readLinkedRefer(scnr));
        }
        if (currentType === 8)
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);

        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 14,
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0)
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);

    if (context2.inLinked)
      return readTokenInLinked(scnr, context2) || getEndToken(context2);

    const ch = scnr.currentChar();
    switch (ch) {
      case '{':
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case '}':
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          '}',
          /* TokenChars.BraceRight */
        );
      case '@':
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default: {
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        const { isModulo, hasSpace } = detectModuloStart(scnr);
        if (isModulo)
          return hasSpace ? getToken(context2, 0, readText(scnr)) : getToken(context2, 4, readModulo(scnr));

        if (isTextStart(scnr))
          return getToken(context2, 0, readText(scnr));

        break;
      }
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        14,
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context,
  };
}
const ERROR_DOMAIN$2 = 'parser';
const KNOWN_ESCAPES = /\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6})/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case '\\\\':
      return '\\';
    case '\\\'':
      return '\'';
    default: {
      const codePoint = Number.parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344)
        return String.fromCodePoint(codePoint);

      return '�';
    }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const { onError, onWarn } = options;
  function emitError(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$2,
        args,
      });
      onError(err);
    }
  }
  function emitWarn(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onWarn) {
      const loc = location ? createLocation(start, end) : null;
      onWarn(createCompileWarn(code2, loc, args));
    }
  }
  function startNode(type, offset, loc) {
    const node = { type };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (location) {
      node.end = offset;
      if (node.loc)
        node.loc.end = pos;
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index2) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = Number.parseInt(index2, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key, modulo) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key;
    if (modulo === true)
      node.modulo = true;

    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 12) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = '';
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node,
      };
    }
    if (token.value == null)
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

    node.value = token.value || '';
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node,
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 9) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 10)
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

    token = tokenizer.nextToken();
    if (token.type === 2)
      token = tokenizer.nextToken();

    switch (token.type) {
      case 11:
        if (token.value == null)
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

        linkedNode.key = parseLinkedKey(tokenizer, token.value || '');
        break;
      case 5:
        if (token.value == null)
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

        linkedNode.key = parseNamed(tokenizer, token.value || '');
        break;
      case 6:
        if (token.value == null)
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

        linkedNode.key = parseList(tokenizer, token.value || '');
        break;
      case 7:
        if (token.value == null)
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

        linkedNode.key = parseLiteral(tokenizer, token.value || '');
        break;
      default: {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = '';
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode,
        };
      }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode,
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    let modulo = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null)
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

          node.items.push(parseText(tokenizer, token.value || ''));
          break;
        case 6:
          if (token.value == null)
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

          node.items.push(parseList(tokenizer, token.value || ''));
          break;
        case 4:
          modulo = true;
          break;
        case 5:
          if (token.value == null)
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

          node.items.push(parseNamed(tokenizer, token.value || '', !!modulo));
          if (modulo) {
            emitWarn(tokenizer, CompileWarnCodes.USE_MODULO_SYNTAX, context.lastStartLoc, 0, getTokenCaption(token));
            modulo = null;
          }
          break;
        case 7:
          if (token.value == null)
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));

          node.items.push(parseLiteral(tokenizer, token.value || ''));
          break;
        case 8: {
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
        }
      }
    } while (context.currentType !== 14 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage)
        hasEmptyMessage = msg.items.length === 0;

      node.cases.push(msg);
    } while (context.currentType !== 14);
    if (hasEmptyMessage)
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);

    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 14)
      return msgNode;
    else
      return parsePlural(tokenizer, offset, startLoc, msgNode);
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location && node.loc)
      node.loc.source = source;

    node.body = parseResource(tokenizer);
    if (options.onCacheKey)
      node.cacheKey = options.onCacheKey(source);

    if (context.currentType !== 14)
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || '');

    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 14)
    return 'EOF';

  const name = (token.value || '').replace(/\r?\n/gu, '\\n');
  return name.length > 10 ? `${name.slice(0, 9)}…` : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set(),
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++)
    traverseNode(nodes[i], transformer);
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        'plural',
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6: {
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        'linked',
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        'type',
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      transformer.helper(
        'interpolate',
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        'list',
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        'interpolate',
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        'named',
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    'normalize',
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2)
    optimizeMessageNode(body);
  else
    body.cases.forEach(c => optimizeMessageNode(c));

  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  }
  else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 || item.type === 9))
        break;

      if (item.value == null)
        break;

      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 || item.type === 9)
          delete item.value;
      }
    }
  }
}
const ERROR_DOMAIN$1 = 'minifier';
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0: {
      const resource = node;
      minify(resource.body);
      resource.b = resource.body;
      delete resource.body;
      break;
    }
    case 1: {
      const plural = node;
      const cases = plural.cases;
      for (let i = 0; i < cases.length; i++)
        minify(cases[i]);

      plural.c = cases;
      delete plural.cases;
      break;
    }
    case 2: {
      const message = node;
      const items = message.items;
      for (let i = 0; i < items.length; i++)
        minify(items[i]);

      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    }
    case 6: {
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    }
    case 5: {
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    }
    case 4: {
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    }
    default:
    {
      throw createCompileError(CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: ERROR_DOMAIN$1,
        args: [node.type],
      });
    }
  }
  delete node.type;
}
const ERROR_DOMAIN = 'parser';
function createCodeGenerator(ast, options) {
  const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: '',
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0,
  };
  if (location && ast.loc)
    _context.source = ast.loc.source;

  const context = () => _context;
  function push(code2, node) {
    _context.code += code2;
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : '';
    push(_needIndent ? _breakLineCode + '  '.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = key => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent,
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    'linked',
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(', ');
    generateNode(generator, node.modifier);
    generator.push(', _type');
  }
  else {
    generator.push(', undefined, _type');
  }
  generator.push(')');
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    'normalize',
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1)
      break;

    generator.push(', ');
  }
  generator.deindent(needIndent());
  generator.push('])');
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      'plural',
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1)
        break;

      generator.push(', ');
    }
    generator.deindent(needIndent());
    generator.push('])');
  }
}
function generateResource(generator, node) {
  if (node.body)
    generateNode(generator, node.body);
  else
    generator.push('null');
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        'interpolate',
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        'list',
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        'interpolate',
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        'named',
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
    default:
    {
      throw createCompileError(CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: ERROR_DOMAIN,
        args: [node.type],
      });
    }
  }
}
function generate(ast, options = {}) {
  const mode = isString(options.mode) ? options.mode : 'normal';
  const filename = isString(options.filename) ? options.filename : 'message.intl';
  const sourceMap = !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === 'arrow' ? ';' : '\n';
  const needIndent = options.needIndent ? options.needIndent : mode !== 'arrow';
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap,
    breakLineCode,
    needIndent,
  });
  generator.push(mode === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {');
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map(s => `${s}: _${s}`), ', ')} } = ctx`);
    generator.newline();
  }
  generator.push('return ');
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push('}');
  delete ast.helpers;
  const { code: code2, map } = generator.context();
  return {
    ast,
    code: code2,
    map: map ? map.toJSON() : void 0,

  };
}
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  }
  else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: '' };
  }
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
  'w'
  /* PathCharTypes.WORKSPACE */
  ]: [
    0,
    /* States.BEFORE_PATH */
  ],
  [
  'i'
  /* PathCharTypes.IDENT */
  ]: [
    3,
    0,
    /* Actions.APPEND */
  ],
  [
  '['
  /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    /* States.IN_SUB_PATH */
  ],
  [
  'o'
  /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    /* States.AFTER_PATH */
  ],
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
  'w'
  /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    /* States.IN_PATH */
  ],
  [
  '.'
  /* PathCharTypes.DOT */
  ]: [
    2,
    /* States.BEFORE_IDENT */
  ],
  [
  '['
  /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    /* States.IN_SUB_PATH */
  ],
  [
  'o'
  /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    /* States.AFTER_PATH */
  ],
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
  'w'
  /* PathCharTypes.WORKSPACE */
  ]: [
    2,
    /* States.BEFORE_IDENT */
  ],
  [
  'i'
  /* PathCharTypes.IDENT */
  ]: [
    3,
    0,
    /* Actions.APPEND */
  ],
  [
  '0'
  /* PathCharTypes.ZERO */
  ]: [
    3,
    0,
    /* Actions.APPEND */
  ],
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
  'i'
  /* PathCharTypes.IDENT */
  ]: [
    3,
    0,
    /* Actions.APPEND */
  ],
  [
  '0'
  /* PathCharTypes.ZERO */
  ]: [
    3,
    0,
    /* Actions.APPEND */
  ],
  [
  'w'
  /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1,
    /* Actions.PUSH */
  ],
  [
  '.'
  /* PathCharTypes.DOT */
  ]: [
    2,
    1,
    /* Actions.PUSH */
  ],
  [
  '['
  /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1,
    /* Actions.PUSH */
  ],
  [
  'o'
  /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1,
    /* Actions.PUSH */
  ],
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
  '\''
  /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0,
    /* Actions.APPEND */
  ],
  [
  '"'
  /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0,
    /* Actions.APPEND */
  ],
  [
  '['
  /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2,
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
  ']'
  /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3,
    /* Actions.PUSH_SUB_PATH */
  ],
  [
  'o'
  /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
  'l'
  /* PathCharTypes.ELSE */
  ]: [
    4,
    0,
    /* Actions.APPEND */
  ],
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
  '\''
  /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0,
    /* Actions.APPEND */
  ],
  [
  'o'
  /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
  'l'
  /* PathCharTypes.ELSE */
  ]: [
    5,
    0,
    /* Actions.APPEND */
  ],
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
  '"'
  /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0,
    /* Actions.APPEND */
  ],
  [
  'o'
  /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
  'l'
  /* PathCharTypes.ELSE */
  ]: [
    6,
    0,
    /* Actions.APPEND */
  ],
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null)
    return 'o';

  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return 'i';
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w';
  }
  return 'i';
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === '0' && isNaN(Number.parseInt(path)))
    return false;

  return isLiteral(trimmed) ? stripQuotes(trimmed) : `*${trimmed}`;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0)
      key = newChar;
    else
      key += newChar;
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    }
    else {
      subPathDepth = 0;
      if (key === void 0)
        return false;

      key = formatSubPath(key);
      if (key === false) {
        return false;
      }
      else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === '\'' || mode === 6 && nextChar === '"') {
      index2++;
      newChar = `\\${nextChar}`;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c = path[index2];
    if (c === '\\' && maybeUnescapeQuote())
      continue;

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      'l'
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8)
      return;

    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false)
          return;
      }
    }
    if (mode === 7)
      return keys;
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj))
    return null;

  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit)
      cache.set(path, hit);
  }
  if (!hit)
    return null;

  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0)
      return null;

    if (isFunction(last))
      return null;

    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = str => str;
const DEFAULT_MESSAGE = ctx => '';
const DEFAULT_MESSAGE_DATA_TYPE = 'text';
const DEFAULT_NORMALIZE = values => values.length === 0 ? '' : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2)
    return choice ? choice > 1 ? 1 : 0 : 1;

  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count)
    props.count = pluralIndex;

  if (!props.n)
    props.n = pluralIndex;
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = index2 => _list[index2];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = key => _named[key];
  function message(key) {
    const msg = isFunction(options.messages) ? options.messages(key) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = name => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = 'text';
    let modifier = '';
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      }
      else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    }
    else if (args.length === 2) {
      if (isString(arg1))
        modifier = arg1 || modifier;

      if (isString(arg2))
        type2 = arg2 || type2;
    }
    const ret = message(key)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === 'vnode' && isArray(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
    'list'
    /* HelperNameMap.LIST */
    ]: list,
    [
    'named'
    /* HelperNameMap.NAMED */
    ]: named,
    [
    'plural'
    /* HelperNameMap.PLURAL */
    ]: plural,
    [
    'linked'
    /* HelperNameMap.LINKED */
    ]: linked,
    [
    'message'
    /* HelperNameMap.MESSAGE */
    ]: message,
    [
    'type'
    /* HelperNameMap.TYPE */
    ]: type,
    [
    'interpolate'
    /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
    'normalize'
    /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
    'values'
    /* HelperNameMap.VALUES */
    ]: assign({}, _list, _named),
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit('i18n:init', {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta,
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(
  'function:translate',
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function createDevToolsHook(hook) {
  return payloads => devtools && devtools.emit(hook, payloads);
}
const code$1$1 = CompileWarnCodes.__EXTEND_POINT__;
const inc$1$1 = incrementer(code$1$1);
const CoreWarnCodes = {
  NOT_FOUND_KEY: code$1$1,
  // 2
  FALLBACK_TO_TRANSLATE: inc$1$1(),
  // 3
  CANNOT_FORMAT_NUMBER: inc$1$1(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: inc$1$1(),
  // 5
  CANNOT_FORMAT_DATE: inc$1$1(),
  // 6
  FALLBACK_TO_DATE_FORMAT: inc$1$1(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: inc$1$1(),
  // 8
  __EXTEND_POINT__: inc$1$1(),
  // 9
};
const warnMessages$1 = {
  [CoreWarnCodes.NOT_FOUND_KEY]: 'Not found \'{key}\' key in \'{locale}\' locale messages.',
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: 'Fall back to translate \'{key}\' key with \'{target}\' locale.',
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: 'Cannot format a number value due to not supported Intl.NumberFormat.',
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: 'Fall back to number format \'{key}\' key with \'{target}\' locale.',
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: 'Cannot format a date value due to not supported Intl.DateTimeFormat.',
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: 'Fall back to datetime format \'{key}\' key with \'{target}\' locale.',
  [CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: 'This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.',
};
function getWarnMessage$1(code2, ...args) {
  return format$1(warnMessages$1[code2], ...args);
}
const code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = incrementer(code$2);
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  // 17
  INVALID_DATE_ARGUMENT: inc$2(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: inc$2(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: inc$2(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: inc$2(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: inc$2(),
  // 23
  __EXTEND_POINT__: inc$2(),
  // 24
};
function createCoreError(code2) {
  return createCompileError(code2, null, { messages: errorMessages$1 });
}
const errorMessages$1 = {
  [CoreErrorCodes.INVALID_ARGUMENT]: 'Invalid arguments',
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: 'The date provided is an invalid Date object.Make sure your Date represents a valid date.',
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: 'The argument provided is not a valid ISO date string',
  [CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: 'Not support non-string message',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: 'cannot support promise value',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: 'cannot support async function',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE]: 'cannot support locale type',
};
function getLocale$1(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale) {
  if (isString(locale)) {
    return locale;
  }
  else {
    if (isFunction(locale)) {
      if (locale.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      }
      else if (locale.constructor.name === 'Function') {
        const resolve2 = locale();
        if (isPromise(resolve2))
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);

        return _resolveLocale = resolve2;
      }
      else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    }
    else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start) {
  return [...new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start],
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache)
    context.__localeChainCache = /* @__PURE__ */ new Map();

  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block))
      block = appendBlockToChain(chain, block, fallback);

    const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback.default ? fallback.default : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block))
      appendBlockToChain(chain, block, false);

    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString(locale))
      follow = appendLocaleToChain(chain, block[i], blocks);
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split('-');
  do {
    const target = tokens.join('-');
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== '!';
      const locale = target.replace(/!/g, '');
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale])
        follow = blocks[locale];
    }
  }
  return follow;
}
const VERSION$1 = '9.13.1';
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = 'en-US';
const MISSING_RESOLVE_VALUE = '';
const capitalize = str => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === 'text' && isString(val) ? val.toUpperCase() : type === 'vnode' && isObject(val) && '__v_isVNode' in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === 'text' && isString(val) ? val.toLowerCase() : type === 'vnode' && isObject(val) && '__v_isVNode' in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === 'text' && isString(val) ? capitalize(val) : type === 'vnode' && isObject(val) && '__v_isVNode' in val ? capitalize(val.children) : val;
    },
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
function setAdditionalMeta(meta) {
  _additionalMeta = meta;
}
const getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
let _fallbackContext = null;
function setFallbackContext(context) {
  _fallbackContext = context;
}
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const version2 = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = isPlainObject(options.messages) ? options.messages : { [_locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  if (isFunction(options.messageCompiler))
    warnOnce(getWarnMessage$1(CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));

  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta,
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  {
    context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
  }
  {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  {
    const emitter = context.__v_emitter;
    if (emitter) {
      emitter.emit('missing', {
        locale,
        key,
        type,
        groupId: `${type}:${key}`,
      });
    }
  }
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  }
  else {
    if (isTranslateMissingWarn(missingWarn, key))
      onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, { key, locale }));

    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
  if (locale === compareLocale)
    return false;
  return locale.split('-')[0] === compareLocale.split('-')[0];
}
function isImplicitFallback(targetLocale, locales) {
  const index2 = locales.indexOf(targetLocale);
  if (index2 === -1)
    return false;

  for (let i = index2 + 1; i < locales.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales[i]))
      return true;
  }
  return false;
}
function format(ast) {
  const msg = ctx => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = ast.b || ast.body;
  if ((body.t || body.type) === 1) {
    const plural = body;
    const cases = plural.c || plural.cases;
    return ctx.plural(cases.reduce((messages, c) => [
      ...messages,
      formatMessageParts(ctx, c),
    ], []));
  }
  else {
    return formatMessageParts(ctx, body);
  }
}
function formatMessageParts(ctx, node) {
  const _static = node.s || node.static;
  if (_static) {
    return ctx.type === 'text' ? _static : ctx.normalize([_static]);
  }
  else {
    const messages = (node.i || node.items).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages);
  }
}
function formatMessagePart(ctx, node) {
  const type = node.t || node.type;
  switch (type) {
    case 3: {
      const text = node;
      return text.v || text.value;
    }
    case 9: {
      const literal = node;
      return literal.v || literal.value;
    }
    case 4: {
      const named = node;
      return ctx.interpolate(ctx.named(named.k || named.key));
    }
    case 5: {
      const list = node;
      return ctx.interpolate(ctx.list(list.i != null ? list.i : list.index));
    }
    case 6: {
      const linked = node;
      const modifier = linked.m || linked.modifier;
      return ctx.linked(formatMessagePart(ctx, linked.k || linked.key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    }
    case 7: {
      const linkedKey = node;
      return linkedKey.v || linkedKey.value;
    }
    case 8: {
      const linkedModifier = node;
      return linkedModifier.v || linkedModifier.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${type}`);
  }
}
const WARN_MESSAGE = 'Detected HTML in \'{source}\' message. Recommend not using HTML messages to avoid XSS.';
function checkHtmlMessage(source, warnHtmlMessage) {
  if (warnHtmlMessage && detectHtmlTag(source))
    warn(format$1(WARN_MESSAGE, { source }));
}
const defaultOnCacheKey = message => message;
const compileCache = /* @__PURE__ */ Object.create(null);
function onCompileWarn(_warn) {
  if (_warn.code === CompileWarnCodes.USE_MODULO_SYNTAX) {
    warn(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${_warn.message})`);
  }
}
const isMessageAST = val => isObject(val) && (val.t === 0 || val.type === 0) && ('b' in val || 'body' in val);
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
function compile(message, context) {
  {
    context.onWarn = onCompileWarn;
  }
  if (isString(message)) {
    const warnHtmlMessage = isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    checkHtmlMessage(message, warnHtmlMessage);
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached)
      return cached;

    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: 'prerender' !== 'production',
      jit: true,
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  }
  else {
    if (!isMessageAST(message)) {
      warn(`the message that is resolve with key '${context.key}' is not supported for jit compilation`);
      return () => message;
    }
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached)
        return cached;

      return compileCache[cacheKey] = format(message);
    }
    else {
      return format(message);
    }
  }
}
const NOOP_MESSAGE_FUNCTION = () => '';
const isMessageFunction = val => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : '';
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== '';
  const locale = getLocale$1(context, options);
  escapeParameter && escapeParams(options);
  const [formatScope, targetLocale, message] = !resolvedMessage
    ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn)
    : [
        key,
        locale,
        messages[locale] || {},
      ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale)))
    return unresolving ? NOT_REOSLVED : key;

  if (isString(format2) && context.messageCompiler == null) {
    warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
    return key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred)
    return format2;

  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : '',
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ''),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : '',
      message: ret,
    };
    payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map(item => isString(item) ? escapeHtml(item) : item);
  }
  else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key]))
        options.named[key] = escapeHtml(options.named[key]);
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = 'translate';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (locale !== targetLocale && !isAlmostSameLocale(locale, targetLocale) && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
        key,
        target: targetLocale,
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit('fallback', {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`,
        });
      }
    }
    message = messages[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null)
      format2 = message[key];

    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2))
      break;

    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(
        context,

        key,
        targetLocale,
        missingWarn,
        type,
      );
      if (missingRet !== key)
        format2 = missingRet;
    }
    from = to;
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1))
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);

  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2))
    options.plural = arg2;
  else if (isString(arg2))
    options.default = arg2;
  else if (isPlainObject(arg2) && !isEmptyObject(arg2))
    options.named = arg2;
  else if (isArray(arg2))
    options.list = arg2;

  if (isNumber(arg3))
    options.plural = arg3;
  else if (isString(arg3))
    options.default = arg3;
  else if (isPlainObject(arg3))
    assign(options, arg3);

  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      {
        const _source = getSourceForCodeFrame(source);
        const message = `Message compilation error: ${err.message}`;
        const codeFrame = err.location && _source && generateCodeFrame(_source, err.location.start.offset, err.location.end.offset);
        const emitter = context.__v_emitter;
        if (emitter && _source) {
          emitter.emit('compile-error', {
            message: _source,
            error: err.message,
            start: err.location && err.location.start.offset,
            end: err.location && err.location.end.offset,
            groupId: `${'translate'}:${key}`,
          });
        }
        console.error(codeFrame
          ? `${message}
${codeFrame}`
          : message);
      }
    },
    onCacheKey: source2 => generateFormatCacheKey(locale, key, source2),
  };
}
function getSourceForCodeFrame(source) {
  if (isString(source)) {
    return source;
  }
  else {
    if (source.loc && source.loc.source)
      return source.loc.source;
  }
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    }
    else if (isMessageFunction(val)) {
      return val;
    }
    else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage,
  };
  if (context.processor)
    ctxOptions.processor = context.processor;

  if (options.list)
    ctxOptions.list = options.list;

  if (options.named)
    ctxOptions.named = options.named;

  if (isNumber(options.plural))
    ctxOptions.pluralIndex = options.plural;

  return ctxOptions;
}
const intlDefined = typeof Intl !== 'undefined';
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
  numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined',
};
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  if (!Availabilities.dateTimeFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale$1(context, options);
  const locales = localeFallbacker(
    context,

    fallbackLocale,
    locale,
  );
  if (!isString(key) || key === '')
    return new Intl.DateTimeFormat(locale, overrides).format(value);

  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = 'datetime format';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
        key,
        target: targetLocale,
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit('fallback', {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`,
        });
      }
    }
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale))
    return unresolving ? NOT_REOSLVED : key;

  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides))
    id = `${id}__${JSON.stringify(overrides)}`;

  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches)
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);

    const dateTime = matches[3] ? matches[3].trim().startsWith('T') ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    }
    catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  }
  else if (isDate(arg1)) {
    if (isNaN(arg1.getTime()))
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);

    value = arg1;
  }
  else if (isNumber(arg1)) {
    value = arg1;
  }
  else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  }
  else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key))
        overrides[key] = arg2[key];
      else
        options[key] = arg2[key];
    });
  }
  if (isString(arg3))
    options.locale = arg3;
  else if (isPlainObject(arg3))
    overrides = arg3;

  if (isPlainObject(arg4))
    overrides = arg4;

  return [options.key || '', value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id))
      continue;

    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  if (!Availabilities.numberFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale$1(context, options);
  const locales = localeFallbacker(
    context,

    fallbackLocale,
    locale,
  );
  if (!isString(key) || key === '')
    return new Intl.NumberFormat(locale, overrides).format(value);

  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = 'number format';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
        key,
        target: targetLocale,
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit('fallback', {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`,
        });
      }
    }
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale))
    return unresolving ? NOT_REOSLVED : key;

  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides))
    id = `${id}__${JSON.stringify(overrides)}`;

  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber(arg1))
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);

  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  }
  else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key))
        overrides[key] = arg2[key];
      else
        options[key] = arg2[key];
    });
  }
  if (isString(arg3))
    options.locale = arg3;
  else if (isPlainObject(arg3))
    overrides = arg3;

  if (isPlainObject(arg4))
    overrides = arg4;

  return [options.key || '', value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id))
      continue;

    context.__numberFormatters.delete(id);
  }
}
/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = '9.13.1';
const code$1 = CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = incrementer(code$1);
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: code$1,
  // 9
  NOT_SUPPORTED_PRESERVE: inc$1(),
  // 10
  NOT_SUPPORTED_FORMATTER: inc$1(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  // 14
  NOT_FOUND_PARENT_SCOPE: inc$1(),
  // 15
  IGNORE_OBJ_FLATTEN: inc$1(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: inc$1(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: inc$1(),
  // 18
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: 'Fall back to {type} \'{key}\' with root locale.',
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: 'Not supported \'preserve\'.',
  [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: 'Not supported \'formatter\'.',
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: 'Not supported \'preserveDirectiveContent\'.',
  [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: 'Not supported \'getChoiceIndex\'.',
  [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: 'Component name legacy compatible: \'{name}\' -> \'i18n\'',
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: 'Not found parent scope. use the global scope.',
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN]: 'Ignore object flatten: \'{key}\' key has an string value',
  [I18nWarnCodes.NOTICE_DROP_ALLOW_COMPOSITION]: '\'allowComposition\' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze',
  [I18nWarnCodes.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: '\'translateExistCompatible\' option will be dropped in the next major version.',
};
function getWarnMessage(code2, ...args) {
  return format$1(warnMessages[code2], ...args);
}
const code = CoreErrorCodes.__EXTEND_POINT__;
const inc = incrementer(code);
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  // 26
  NOT_INSTALLED: inc(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // 28
  // directive module errors
  REQUIRED_VALUE: inc(),
  // 29
  INVALID_VALUE: inc(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: inc(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // 37
  // for enhancement
  __EXTEND_POINT__: inc(),
  // 38
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, { messages: errorMessages, args });
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: 'Unexpected return type in composer',
  [I18nErrorCodes.INVALID_ARGUMENT]: 'Invalid argument',
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: 'Must be called at the top of a `setup` function',
  [I18nErrorCodes.NOT_INSTALLED]: 'Need to install with `app.use` function',
  [I18nErrorCodes.UNEXPECTED_ERROR]: 'Unexpected error',
  [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: 'Not available in legacy mode',
  [I18nErrorCodes.REQUIRED_VALUE]: 'Required in value: {0}',
  [I18nErrorCodes.INVALID_VALUE]: 'Invalid value',
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: 'Cannot setup vue-devtools plugin',
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: 'Need to install with `provide` function',
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: 'Not compatible legacy VueI18n.',
  [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: 'vue-i18n-bridge support Vue 2.x only',
  [I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: 'Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode',
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: 'Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly',
};
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol('__translateVNode');
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol('__datetimeParts');
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol('__numberParts');
const EnableEmitter = /* @__PURE__ */ makeSymbol('__enableEmitter');
const DisableEmitter = /* @__PURE__ */ makeSymbol('__disableEmitter');
const SetPluralRulesSymbol = makeSymbol('__setPluralRules');
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol('__injectWithOption');
const DisposeSymbol = /* @__PURE__ */ makeSymbol('__dispose');
function handleFlatJson(obj) {
  if (!isObject(obj))
    return obj;

  for (const key in obj) {
    if (!hasOwn(obj, key))
      continue;

    if (!key.includes('.')) {
      if (isObject(obj[key]))
        handleFlatJson(obj[key]);
    }
    else {
      const subKeys = key.split('.');
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj))
          currentObj[subKeys[i]] = {};

        if (!isObject(currentObj[subKeys[i]])) {
          warn(getWarnMessage(I18nWarnCodes.IGNORE_OBJ_FLATTEN, {
            key: subKeys[i],
          }));
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      if (isObject(currentObj[subKeys[lastIndex]]))
        handleFlatJson(currentObj[subKeys[lastIndex]]);
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ('locale' in custom && 'resource' in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        }
        else {
          deepCopy(resource, ret);
        }
      }
      else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key))
        handleFlatJson(ret[key]);
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages = isObject(options.messages) ? options.messages : {};
  if ('__i18nGlobal' in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal,
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      gl.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = '__INTLIFY_META__';
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
function getMetaInfo() {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
}
function createComposer(options = {}, VueI18nLegacy) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref = shallowRef;
  const translateExistCompatible = !!options.translateExistCompatible;
  {
    if (translateExistCompatible && true)
      warnOnce(getWarnMessage(I18nWarnCodes.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  }
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE,
  );
  const _fallbackLocale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value,
  );
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: 'vue' },
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    {
      ctxOptions.__v_emitter = isPlainObject(_context) ? _context.__v_emitter : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value,
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    },
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    },
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler2) {
    _postTranslation = handler2;
    _context.postTranslation = handler2;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler2) {
    if (handler2 !== null)
      _runtimeMissing = defineCoreMissingHandler(handler2);

    _missing = handler2;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== 'translate' || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if ('prerender' !== 'production' || false) {
        /* @__PURE__ */ setAdditionalMeta(/* @__PURE__ */ getMetaInfo());
      }
      if (!_isGlobal)
        _context.fallbackContext = __root ? getFallbackContext() : void 0;

      ret = fn(_context);
    }
    finally {
      if (!_isGlobal)
        _context.fallbackContext = void 0;
    }
    if (warnType !== 'translate exists' // for not `te` (e.g `t`)
      && isNumber(ret) && ret === NOT_REOSLVED || warnType === 'translate exists' && !ret) {
      const [key, arg2] = argumentParser();
      if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
          warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
            key,
            type: warnType,
          }));
        }
        {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit('fallback', {
              type: warnType,
              key,
              to: 'global',
              groupId: `${warnType}:${key}`,
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    }
    else if (successCondition(ret)) {
      return ret;
    }
    else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps(context => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3))
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);

    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString(val));
  }
  function n(...args) {
    return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString(val));
  }
  function normalize(values) {
    return values.map(val => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = val => val;
  const processor = {
    normalize,
    interpolate,
    type: 'vnode',
  };
  function translateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        }
        finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      'translate',

      root => root[TranslateVNodeSymbol](...args),
      key => [createTextNode(key)],
      val => isArray(val),
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      context => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      'number format',

      root => root[NumberPartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      val => isString(val) || isArray(val),
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      context => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      'datetime format',

      root => root[DatetimePartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      val => isString(val) || isArray(val),
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    return wrapWithDeps(() => {
      if (!key)
        return false;

      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return !translateExistCompatible ? isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved) : resolved != null;
    }, () => [key], 'translate exists', (root) => {
      return Reflect.apply(root.te, root, [key, locale2]);
    }, NOOP_RETURN_FALSE, val => isBoolean(val));
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    if (flatJson) {
      const _message = { [locale2]: message };
      for (const key in _message) {
        if (hasOwn(_message, key))
          handleFlatJson(_message[key]);
      }
      message = _message[locale2];
    }
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage2(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    const _message = { [locale2]: message };
    if (flatJson) {
      for (const key in _message) {
        if (hasOwn(_message, key))
          handleFlatJson(_message[key]);
      }
    }
    message = _message[locale2];
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage: mergeLocaleMessage2,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules,
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object],
  },
  locale: {
    type: String,
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: val => val === 'parent' || val === 'global',
    default: 'parent',
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object,
  },
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === 'default') {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current],
      ];
    }, []);
  }
  else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot)
        arg[key] = slot();

      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({

  name: 'i18n-t',
  props: assign({
    keypath: {
      type: String,
      required: true,
    },
    plural: {
      type: [Number, String],

      validator: val => isNumber(val) || !isNaN(val),
    },
  }, baseFormatProps),

  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true,
    });
    return () => {
      const keys = Object.keys(slots).filter(key => key !== '_');
      const options = {};
      if (props.locale)
        options.locale = props.locale;

      if (props.plural !== void 0)
        options.plural = isString(props.plural) ? +props.plural : props.plural;

      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  },
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale)
      options.locale = props.locale;

    if (isString(props.format)) {
      options.key = props.format;
    }
    else if (isObject(props.format)) {
      if (isString(props.format.key))
        options.key = props.format.key;

      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index2) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
        if (isVNode(node))
          node[0].key = `${part.type}-${index2}`;

        return node;
      });
    }
    else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({

  name: 'i18n-n',
  props: assign({
    value: {
      type: Number,
      required: true,
    },
    format: {
      type: [String, Object],
    },
  }, baseFormatProps),

  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true,
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (

      i18n[NumberPartsSymbol](...args)
    ));
  },
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({

  name: 'i18n-d',
  props: assign({
    value: {
      type: [Number, Date],
      required: true,
    },
    format: {
      type: [String, Object],
    },
  }, baseFormatProps),

  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true,
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (

      i18n[DatetimePartsSymbol](...args)
    ));
  },
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === 'composition') {
    return i18nInternal.__getInstance(instance) || i18n.global;
  }
  else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$)
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);

    const composer = getComposer$2(i18n, instance.$);
    if (modifiers.preserve)
      warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));

    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer,
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue),
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps,
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  }
  else if (isPlainObject(value)) {
    if (!('path' in value))
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');

    return value;
  }
  else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale))
    options.locale = locale;

  if (isNumber(choice))
    options.plural = choice;

  if (isNumber(plural))
    options.plural = plural;

  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall && useI18nComponentName) {
    warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
      name: Translation.name,
    }));
  }
  if (globalInstall) {
    [!useI18nComponentName ? Translation.name : 'i18n', 'I18nT'].forEach(name => app.component(name, Translation));
    [NumberFormat.name, 'I18nN'].forEach(name => app.component(name, NumberFormat));
    [DatetimeFormat.name, 'I18nD'].forEach(name => app.component(name, DatetimeFormat));
  }
  {
    app.directive('t', vTDirective(i18n));
  }
}
const VueDevToolsLabels = {
  [
  'vue-devtools-plugin-vue-i18n'
  /* VueDevToolsIDs.PLUGIN */
  ]: 'Vue I18n devtools',
  [
  'vue-i18n-resource-inspector'
  /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: 'I18n Resources',
  [
  'vue-i18n-timeline'
  /* VueDevToolsIDs.TIMELINE */
  ]: 'Vue I18n',
};
const VueDevToolsPlaceholders = {
  [
  'vue-i18n-resource-inspector'
  /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: 'Search for scopes ...',
};
const VueDevToolsTimelineColors = {
  [
  'vue-i18n-timeline'
  /* VueDevToolsIDs.TIMELINE */
  ]: 16764185,
};
const VUE_I18N_COMPONENT_TYPES = 'vue-i18n: composer properties';
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve2, reject) => {
    try {
      setupDevtoolsPlugin({
        id: 'vue-devtools-plugin-vue-i18n',
        label: VueDevToolsLabels[
          'vue-devtools-plugin-vue-i18n'
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: 'vue-i18n',
        homepage: 'https://vue-i18n.intlify.dev',
        logo: 'https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png',
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app,

      }, (api) => {
        devtoolsApi = api;
        api.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === 'legacy') {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer)
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
            else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: 'vue-i18n-resource-inspector',
          label: VueDevToolsLabels[
            'vue-i18n-resource-inspector'
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: 'language',
          treeFilterPlaceholder: VueDevToolsPlaceholders[
            'vue-i18n-resource-inspector'
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
        });
        api.on.getInspectorTree((payload) => {
          if (payload.app === app && payload.inspectorId === 'vue-i18n-resource-inspector')
            registerScope(payload, i18n);
        });
        const roots = /* @__PURE__ */ new Map();
        api.on.getInspectorState(async (payload) => {
          if (payload.app === app && payload.inspectorId === 'vue-i18n-resource-inspector') {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === 'global') {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            }
            else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState((payload) => {
          if (payload.app === app && payload.inspectorId === 'vue-i18n-resource-inspector')
            editScope(payload, i18n);
        });
        api.addTimelineLayer({
          id: 'vue-i18n-timeline',
          label: VueDevToolsLabels[
            'vue-i18n-timeline'
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: VueDevToolsTimelineColors[
            'vue-i18n-timeline'
            /* VueDevToolsIDs.TIMELINE */
          ],
        });
        resolve2(true);
      });
    }
    catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || 'Anonymous';
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185,
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: 'locale',
    editable: true,
    value: composer.locale.value,
  });
  instanceData.state.push({
    type,
    key: 'availableLocales',
    editable: false,
    value: composer.availableLocales,
  });
  instanceData.state.push({
    type,
    key: 'fallbackLocale',
    editable: true,
    value: composer.fallbackLocale.value,
  });
  instanceData.state.push({
    type,
    key: 'inheritLocale',
    editable: true,
    value: composer.inheritLocale,
  });
  instanceData.state.push({
    type,
    key: 'messages',
    editable: false,
    value: getLocaleMessageValue(composer.messages.value),
  });
  {
    instanceData.state.push({
      type,
      key: 'datetimeFormats',
      editable: false,
      value: composer.datetimeFormats.value,
    });
    instanceData.state.push({
      type,
      key: 'numberFormats',
      editable: false,
      value: composer.numberFormats.value,
    });
  }
}
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach((key) => {
    const v = messages[key];
    if (isFunction(v) && 'source' in v)
      value[key] = getMessageFunctionDetails(v);
    else if (isMessageAST(v) && v.loc && v.loc.source)
      value[key] = v.loc.source;
    else if (isObject(v))
      value[key] = getLocaleMessageValue(v);
    else
      value[key] = v;
  });
  return value;
}
const ESC = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;',
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : '(?)';
  return {
    _custom: {
      type: 'function',
      display: `<span>ƒ</span> ${argString}`,
    },
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: 'global',
    label: 'Global Scope',
  });
  const global2 = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === 'composition' ? instance : instance.__composer;
    if (global2 === composer)
      continue;

    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`,
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== 'global') {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === 'global') {
    return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  }
  else {
    const instance = Array.from(i18n.__instances.values()).find(item => item.id.toString() === nodeId);
    if (instance)
      return i18n.mode === 'composition' ? instance : instance.__composer;
    else
      return null;
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer)
    payload.state = makeScopeInspectState(composer);

  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = 'Locale related info';
  const localeStates = [
    {
      type: localeType,
      key: 'locale',
      editable: true,
      value: composer.locale.value,
    },
    {
      type: localeType,
      key: 'fallbackLocale',
      editable: true,
      value: composer.fallbackLocale.value,
    },
    {
      type: localeType,
      key: 'availableLocales',
      editable: false,
      value: composer.availableLocales,
    },
    {
      type: localeType,
      key: 'inheritLocale',
      editable: true,
      value: composer.inheritLocale,
    },
  ];
  state[localeType] = localeStates;
  const localeMessagesType = 'Locale messages info';
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: 'messages',
      editable: false,
      value: getLocaleMessageValue(composer.messages.value),
    },
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = 'Datetime formats info';
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: 'datetimeFormats',
        editable: false,
        value: composer.datetimeFormats.value,
      },
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = 'Datetime formats info';
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: 'numberFormats',
        editable: false,
        value: composer.numberFormats.value,
      },
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && 'groupId' in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: 'vue-i18n-timeline',
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === 'compile-error' ? 'error' : event === 'fallback' || event === 'missing' ? 'warning' : 'default',
      },
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === 'locale' && isString(payload.state.value))
      composer.locale.value = payload.state.value;
    else if (field === 'fallbackLocale' && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value)))
      composer.fallbackLocale.value = payload.state.value;
    else if (field === 'inheritLocale' && isBoolean(payload.state.value))
      composer.inheritLocale = payload.state.value;
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol('global-vue-i18n');
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol('vue-i18n');
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      // mode
      get mode() {
        return 'composition';
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (isPlainObject(options2[0])) {
          const opts = options2[0];
          i18n.__composerExtend = opts.__composerExtend;
          i18n.__vueI18nExtend = opts.__vueI18nExtend;
        }
        let globalReleaseHandler = null;
        if (__globalInjection)
          globalReleaseHandler = injectGlobalFields(app, i18n.global);

        {
          apply(app, i18n, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          globalReleaseHandler && globalReleaseHandler();
          i18n.dispose();
          unmountApp();
        };
        {
          const ret = await enableDevTools(app, i18n);
          if (!ret)
            throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);

          const emitter = createEmitter();
          {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on('*', addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance,
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null)
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);

  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__)
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);

  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === 'global') {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === 'parent') {
    let composer2 = getComposer$3(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      {
        warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
      }
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ('__i18n' in componentOptions)
      composerOptions.__i18n = componentOptions.__i18n;

    if (gl)
      composerOptions.__root = gl;

    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend)
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);

    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null)
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);

    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n)
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);

    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? '__i18n' in componentOptions ? 'local' : 'global' : !options.useScope ? 'local' : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
}
function getComposer$3(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === 'composition')
      composer = i18nInternal.__getInstance(current);

    if (composer != null)
      break;

    if (root === current)
      break;

    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null)
    return null;

  {
    return !useComponent ? target.parent : target.vnode.ctx || target.parent;
  }
}
function setupLifeCycle(i18n, target, composer) {
  let emitter = null;
  {
    onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on('*', addTimelineEvent);
      }
    }, target);
    onUnmounted(() => {
      const _composer = composer;
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off('*', addTimelineEvent);
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n.__deleteInstance(target);
      const dispose = _composer[DisposeSymbol];
      if (dispose) {
        dispose();
        delete _composer[DisposeSymbol];
      }
    }, target);
  }
}
const globalExportProps = [
  'locale',
  'fallbackLocale',
  'availableLocales',
];
const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm', 'te'];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc)
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);

    const wrap = isRef(desc.value)
      ? {
          get() {
            return desc.value.value;
          },

          set(val) {
            desc.value.value = val;
          },
        }
      : {
          get() {
            return desc.get && desc.get();
          },
        };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value)
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);

    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
{
  registerMessageCompiler(compile);
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const site$1 = {
  name: 'Nuxt Boilerplate',
};
const themes$1 = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};
const cookies$1 = {
  bar: {
    title: '🍪 Hi. This site uses cookies',
    description: 'We use cookies and similar technologies to help personalize content and offer a better experience. You can opt to customize them by clicking the customize button.',
  },
  modal: {
    'title': 'Customize',
    'description': 'We use different types of cookies to optimize your experience on our website. Click on the categories below to learn more about their purposes. You can choose the types of cookies to be allowed and can change your preferences later. Remember that disabling cookies can affect your experience.',
    'privacy-policy': 'Privacy policy',
  },
  necessary: {
    title: 'Strictly necessary cookies',
    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
  },
};
const error$1 = {
  'return': 'Go back',
  'page-not-found': 'Page not found',
};
const pages$1 = {
  index: {
    meta: {
      title: 'Home',
      description: 'Home page',
    },
    link: 'Home',
    hero: {
      title: 'Nuxt Boilerplate',
      subtitle: 'Unofficial',
      description: 'A ready to use starter kit for all kinds of projects',
    },
    features: {
      googleFonts: 'Google Fonts',
      eslint: 'ESLint',
      Typescript: 'Typescript',
      Prettier: 'Prettier',
      imageOptim: 'Image optimization',
      TailwindCSS: 'TailwindCSS',
      darkMode: 'Dark mode',
      i18n: 'Localization (i18n)',
      postcss: 'PostCSS',
      lightHouse: 'Lighthouse 100%',
      deviceDetect: 'Device detection',
      cookies: 'Cookie banner',
      Iconify: 'Iconify',
      Pinia: 'Pinia',
    },
  },
  about: {
    meta: {
      title: 'About',
      description: 'About page',
    },
    link: 'About',
    title: 'About',
    p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste atque, hic porro officiis fugit quae deserunt nobis dolorum odit dignissimos consequatur esse maiores repellat impedit. Quae dolorum id rem?',
  },
  minimal: {
    meta: {
      title: 'Minimal page (Fullscreen-layout)',
      description: 'Minimal page using Fullscreen-layout',
    },
    link: 'Minimal',
    title: 'Minimal with Fullscreen-layout',
    p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste atque, hic porro officiis fugit quae deserunt nobis dolorum odit dignissimos consequatur esse maiores repellat impedit. Quae dolorum id rem?',
  },
};
const en = {
  'locale.en': 'English',
  'locale.ar': 'Arabic',
  'locale.dir': 'ltr',
  'site': site$1,
  'themes': themes$1,
  'cookies': cookies$1,
  'error': error$1,
  'pages': pages$1,
};
const site = {
  name: 'قالب Nuxt',
};
const themes = {
  system: 'النظام',
  light: 'فاتح',
  dark: 'داكن',
};
const cookies = {
  bar: {
    title: '🍪 مرحبًا. يستخدم هذا الموقع ملفات تعريف الارتباط',
    description: 'نستخدم ملفات تعريف الارتباط وتقنيات مماثلة للمساعدة في تخصيص المحتوى وتقديم تجربة أفضل. يمكنك اختيار تخصيصها عن طريق النقر فوق زر التخصيص.',
  },
  modal: {
    'title': 'تخصيص',
    'description': 'نستخدم أنواعًا مختلفة من ملفات تعريف الارتباط لتحسين تجربتك على موقعنا على الويب. انقر على الفئات أدناه لمعرفة المزيد عن أهدافها. يمكنك اختيار أنواع ملفات تعريف الارتباط المسموح بها ويمكنك تغيير تفضيلاتك لاحقًا. تذكر أن تعطيل ملفات تعريف الارتباط قد يؤثر على تجربتك.',
    'privacy-policy': 'سياسة الخصوصية',
  },
  necessary: {
    title: 'ملفات تعريف الارتباط الضرورية',
    description: 'هذه ملفات ضرورية للعمل الصحيح لموقع الويب. بدون هذه الملفات، لن يعمل الموقع بشكل صحيح',
  },
};
const error = {
  'return': 'العودة',
  'page-not-found': 'الصفحة غير موجودة',
};
const pages = {
  index: {
    meta: {
      title: 'الصفحة الرئيسية',
      description: 'الصفحة الرئيسية',
    },
    link: 'الرئيسية',
    hero: {
      title: 'قالب Nuxt',
      subtitle: 'غير رسمي',
      description: 'مجموعة جاهزة للاستخدام لجميع أنواع المشاريع',
    },
    features: {
      googleFonts: 'خطوط جوجل',
      eslint: 'ESLint',
      Typescript: 'Typescript',
      Prettier: 'Prettier',
      imageOptim: 'تحسين الصور',
      TailwindCSS: 'TailwindCSS',
      darkMode: 'الوضع الداكن',
      i18n: 'التوطين (i18n)',
      postcss: 'PostCSS',
      lightHouse: ' نتيجة 100% على Lighthouse ',
      deviceDetect: 'اكتشاف الأجهزة',
      cookies: 'شريط ملفات تعريف الارتباط',
      Iconify: 'Iconify',
      Pinia: 'Pinia',
    },
  },
  about: {
    meta: {
      title: 'معلومات',
      description: 'صفحة المعلومات',
    },
    link: 'معلومات',
    title: 'معلومات',
    p: 'لوريم إيبسوم دولور سيت، أميت كونسيكتور أديبايسينج إليت. إيك وإيستي آتكوي، هيك بوررو أوفيسيس فوجيت كواي ديسيرونت نوبيس دولوروم أوديت ديجنيسيموس كونسيكواتور إيسه مايوريس ريبيلات إمبيديت. كواي دولوروم إيد ريم؟',
  },
  minimal: {
    meta: {
      title: 'الحد الأدنى من الصفحة (تخطيط ملء الشاشة)',
      description: 'الحد الأدنى من الصفحة باستخدام تخطيط ملء الشاشة',
    },
    link: 'الحد الأدنى',
    title: 'الحد الأدنى من الصفحة (تخطيط ملء الشاشة)',
    p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste atque, hic porro officiis fugit quae deserunt nobis dolorum odit dignissimos consequatur esse maiores repellat impedit. Quae dolorum id rem?',
  },
};
const ar = {
  'locale.en': 'English',
  'locale.ar': 'العربية',
  'locale.dir': 'rtl',
  site,
  themes,
  cookies,
  error,
  pages,
};
const localeCodes = [
  'en',
  'ar',
];
const localeLoaders = {
  en: [{ key: '../locales/en-US.json', load: () => Promise.resolve(en), cache: true }],
  ar: [{ key: '../locales/ar-AR.json', load: () => Promise.resolve(ar), cache: true }],
};
const vueI18nConfigs = [
  () => import(
    './i18n.config-BG-8oeUL.mjs'
    /* webpackChunkName: "__i18n_config_ts_bffaebcb" */
  ),
];
const normalizedLocales = [
  {
    code: 'en',
    iso: 'en-US',
    name: 'English',
    dir: 'ltr',
    files: [
      {
        path: 'locales/en-US.json',
      },
    ],
  },
  {
    code: 'ar',
    iso: 'ar-AR',
    name: 'Arabic',
    dir: 'rtl',
    files: [
      {
        path: 'locales/ar-AR.json',
      },
    ],
  },
];
const NUXT_I18N_MODULE_ID = '@nuxtjs/i18n';
const parallelPlugin = false;
const isSSG = false;
const DEFAULT_DYNAMIC_PARAMS_KEY = 'nuxtI18n';
const DEFAULT_COOKIE_KEY = 'i18n_redirected';
const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = 'nuxt-i18n-slp';
const cacheMessages = /* @__PURE__ */ new Map();
async function loadVueI18nOptions(vueI18nConfigs2, nuxt) {
  const vueI18nOptions = { messages: {} };
  for (const configFile of vueI18nConfigs2) {
    const { default: resolver } = await configFile();
    const resolved = typeof resolver === 'function' ? await nuxt.runWithContext(async () => await resolver()) : resolver;
    deepCopy(resolved, vueI18nOptions);
  }
  return vueI18nOptions;
}
function makeFallbackLocaleCodes(fallback, locales) {
  let fallbackLocales = [];
  if (isArray(fallback)) {
    fallbackLocales = fallback;
  }
  else if (isObject(fallback)) {
    const targets = [...locales, 'default'];
    for (const locale of targets) {
      if (fallback[locale])
        fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
    }
  }
  else if (isString(fallback) && locales.every(locale => locale !== fallback)) {
    fallbackLocales.push(fallback);
  }
  return fallbackLocales;
}
async function loadInitialMessages(messages, localeLoaders2, options) {
  const { defaultLocale, initialLocale, localeCodes: localeCodes2, fallbackLocale, lazy } = options;
  if (lazy && fallbackLocale) {
    const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [defaultLocale, initialLocale]);
    await Promise.all(fallbackLocales.map(locale => loadAndSetLocaleMessages(locale, localeLoaders2, messages)));
  }
  const locales = lazy ? [...(/* @__PURE__ */ new Set()).add(defaultLocale).add(initialLocale)] : localeCodes2;
  await Promise.all(locales.map(locale => loadAndSetLocaleMessages(locale, localeLoaders2, messages)));
  return messages;
}
async function loadMessage(locale, { key, load }) {
  let message = null;
  try {
    const getter = await load().then(r => r.default || r);
    if (isFunction(getter)) {
      message = await getter(locale);
    }
    else {
      message = getter;
      if (message != null && cacheMessages)
        cacheMessages.set(key, message);
    }
  }
  catch (e) {
    console.error(`Failed locale loading: ${e.message}`);
  }
  return message;
}
async function loadLocale(locale, localeLoaders2, setter) {
  const loaders = localeLoaders2[locale];
  if (loaders == null) {
    console.warn(`Could not find messages for locale code: ${locale}`);
    return;
  }
  const targetMessage = {};
  for (const loader of loaders) {
    let message = null;
    if (cacheMessages && cacheMessages.has(loader.key) && loader.cache)
      message = cacheMessages.get(loader.key);
    else
      message = await loadMessage(locale, loader);

    if (message != null)
      deepCopy(message, targetMessage);
  }
  setter(locale, targetMessage);
}
async function loadAndSetLocaleMessages(locale, localeLoaders2, messages) {
  const setter = (locale2, message) => {
    const base = messages[locale2] || {};
    deepCopy(message, base);
    messages[locale2] = base;
  };
  await loadLocale(locale, localeLoaders2, setter);
}
function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers['x-forwarded-proto'] : void 0;
  const protoCheck = typeof _xForwardedProto === 'string' ? _xForwardedProto.includes('https') : void 0;
  if (protoCheck)
    return true;

  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck)
    return true;

  if (protoCheck === void 0 && encryptedCheck === void 0)
    return void 0;

  return false;
}
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale))
      normalized.push({ code: locale });
    else
      normalized.push(locale);
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && 'global' in i18n && 'mode' in i18n;
}
function isComposer(target) {
  return target != null && !('__composer' in target) && 'locale' in target && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && '__composer' in target;
}
function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
function getComposer(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target))
    return target;
  if (isVueI18n(target))
    return target.__composer;
  return target;
}
function getLocale(i18n) {
  return unref(getI18nTarget(i18n).locale);
}
function getLocales(i18n) {
  return unref(getI18nTarget(i18n).locales);
}
function getLocaleCodes(i18n) {
  return unref(getI18nTarget(i18n).localeCodes);
}
function setLocale(i18n, locale) {
  const target = getI18nTarget(i18n);
  if (isRef(target.locale))
    target.locale.value = locale;
  else
    target.locale = locale;
}
function getRouteName(routeName) {
  if (isString(routeName))
    return routeName;
  if (isSymbol(routeName))
    return routeName.toString();
  return '(null)';
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix,
}) {
  let name = getRouteName(routeName) + (strategy === 'no_prefix' ? '' : routesNameSeparator + locale);
  if (locale === defaultLocale && strategy === 'prefix_and_default')
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;

  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl))
    return baseUrl(context);

  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index2, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find(l => l.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index2 / browserLocales.length });
      break;
    }
  }
  for (const [index2, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = locales.find(l => l.iso.split('-')[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index2 / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
const DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score)
    return b.code.length - a.code.length;

  return b.score - a.score;
}
const DefaultBrowerLocaleComparer = compareBrowserLocale;
function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales2 = [];
  for (const l of locales) {
    const { code: code2 } = l;
    const iso = l.iso || code2;
    normalizedLocales2.push({ code: code2, iso });
  }
  const matchedLocales = matcher(normalizedLocales2, browserLocales);
  if (matchedLocales.length > 1)
    matchedLocales.sort(comparer);

  return matchedLocales.length ? matchedLocales[0].code : '';
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join('|')})(?:/|$)`, 'i');
}
function split(str, index2) {
  const result = [str.slice(0, index2), str.slice(index2)];
  return result;
}
function routeToObject(route) {
  const { fullPath, query, hash, name, path, params, meta, redirectedFrom, matched } = route;
  return {
    fullPath,
    params,
    query,
    hash,
    name,
    path,
    meta,
    matched,
    redirectedFrom,
  };
}
function resolve({ router }, route, strategy, locale) {
  let _a, _b;
  if (strategy !== 'prefix')
    return router.resolve(route);

  const [rootSlash, restPath] = split(route.path, 1);
  const targetPath = `${rootSlash}${locale}${restPath === '' ? restPath : `/${restPath}`}`;
  const _route = (_b = (_a = router.options) == null ? void 0 : _a.routes) == null ? void 0 : _b.find(r => r.path === targetPath);
  if (_route == null)
    return route;

  const _resolvableRoute = assign({}, route, _route);
  _resolvableRoute.path = targetPath;
  return router.resolve(_resolvableRoute);
}
const RESOLVED_PREFIXED = /* @__PURE__ */ new Set(['prefix_and_default', 'prefix_except_default']);
function prefixable(options) {
  const { currentLocale, defaultLocale, strategy } = options;
  const isDefaultLocale = currentLocale === defaultLocale;
  return !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) // no prefix for any language
    && !(strategy === 'no_prefix');
}
const DefaultPrefixable = prefixable;
function getRouteBaseName(common, givenRoute) {
  const { routesNameSeparator } = common.runtimeConfig.public.i18n;
  const route = unref(givenRoute);
  if (route == null || !route.name)
    return;

  const name = getRouteName(route.name);
  return name.split(routesNameSeparator)[0];
}
function localePath(common, route, locale) {
  let _a;
  if (typeof route === 'string' && hasProtocol(route, { acceptRelative: true }))
    return route;

  const localizedRoute = resolveRoute(common, route, locale);
  return localizedRoute == null ? '' : ((_a = localizedRoute.redirectedFrom) == null ? void 0 : _a.fullPath) || localizedRoute.fullPath;
}
function localeRoute(common, route, locale) {
  const resolved = resolveRoute(common, route, locale);
  return resolved ?? void 0;
}
function localeLocation(common, route, locale) {
  const resolved = resolveRoute(common, route, locale);
  return resolved ?? void 0;
}
function resolveRoute(common, route, locale) {
  const { router, i18n } = common;
  const _locale = locale || getLocale(i18n);
  const { routesNameSeparator, defaultLocale, defaultLocaleRouteNameSuffix, strategy, trailingSlash } = common.runtimeConfig.public.i18n;
  const prefixable2 = extendPrefixable(common.runtimeConfig);
  let _route;
  if (isString(route)) {
    if (route[0] === '/') {
      const { pathname: path, search, hash } = parsePath(route);
      const query = parseQuery(search);
      _route = { path, query, hash };
    }
    else {
      _route = { name: route };
    }
  }
  else {
    _route = route;
  }
  let localizedRoute = assign({}, _route);
  const isRouteLocationPathRaw = val => 'path' in val && !!val.path && !('name' in val);
  if (isRouteLocationPathRaw(localizedRoute)) {
    const resolvedRoute = resolve(common, localizedRoute, strategy, _locale);
    const resolvedRouteName = getRouteBaseName(common, resolvedRoute);
    if (isString(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, {
          defaultLocale,
          strategy,
          routesNameSeparator,
          defaultLocaleRouteNameSuffix,
        }),
        // @ts-expect-error
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash,
      };
      localizedRoute.state = resolvedRoute.state;
    }
    else {
      if (prefixable2({ currentLocale: _locale, defaultLocale, strategy }))
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;

      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  }
  else {
    if (!localizedRoute.name && !('path' in localizedRoute))
      localizedRoute.name = getRouteBaseName(common, router.currentRoute.value);

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, {
      defaultLocale,
      strategy,
      routesNameSeparator,
      defaultLocaleRouteNameSuffix,
    });
  }
  try {
    const resolvedRoute = router.resolve(localizedRoute);
    if (resolvedRoute.name)
      return resolvedRoute;

    return router.resolve(route);
  }
  catch (e) {
    if (typeof e === 'object' && 'type' in e && e.type === 1)
      return null;
  }
}
const DefaultSwitchLocalePathIntercepter = path => path;
function getLocalizableMetaFromDynamicParams(common, route) {
  let _a;
  if (common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR)
    return unref(common.metaState.value);

  const meta = route.meta || {};
  return ((_a = unref(meta)) == null ? void 0 : _a[DEFAULT_DYNAMIC_PARAMS_KEY]) || {};
}
function switchLocalePath(common, locale, _route) {
  const route = _route ?? common.router.currentRoute.value;
  const name = getRouteBaseName(common, route);
  if (!name)
    return '';

  const switchLocalePathIntercepter = extendSwitchLocalePathIntercepter(common.runtimeConfig);
  const routeCopy = routeToObject(route);
  const resolvedParams = getLocalizableMetaFromDynamicParams(common, route)[locale];
  const baseRoute = { ...routeCopy, name, params: { ...routeCopy.params, ...resolvedParams } };
  const path = localePath(common, baseRoute, locale);
  return switchLocalePathIntercepter(path, locale);
}
function localeHead(common, {
  addDirAttribute = false,
  addSeoAttributes: seoAttributes = true,
  identifierAttribute: idAttribute = 'hid',
}) {
  const { defaultDirection } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const i18n = getComposer(common.i18n);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: [],
  };
  if (unref(i18n.locales) == null || unref(i18n.baseUrl) == null)
    return metaObject;

  const locale = getLocale(common.i18n);
  const locales = getLocales(common.i18n);
  const currentLocale = getNormalizedLocales(locales).find(l => l.code === locale) || {
    code: locale,
  };
  const currentIso = currentLocale.iso;
  const currentDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute)
    metaObject.htmlAttrs.dir = currentDir;

  if (seoAttributes && locale && unref(i18n.locales)) {
    if (currentIso)
      metaObject.htmlAttrs.lang = currentIso;

    metaObject.link.push(
      ...getHreflangLinks(common, unref(locales), idAttribute),
      ...getCanonicalLink(common, idAttribute, seoAttributes),
    );
    metaObject.meta.push(
      ...getOgUrl(common, idAttribute, seoAttributes),
      ...getCurrentOgLocale(currentLocale, currentIso, idAttribute),
      ...getAlternateOgLocales(unref(locales), currentIso, idAttribute),
    );
  }
  return metaObject;
}
function getBaseUrl() {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const i18n = getComposer(nuxtApp.$i18n);
  return joinURL(unref(i18n.baseUrl), nuxtApp.$config.app.baseURL);
}
function getHreflangLinks(common, locales, idAttribute) {
  const baseUrl = getBaseUrl();
  const { defaultLocale, strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const links = [];
  if (strategy === 'no_prefix')
    return links;
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of locales) {
    const localeIso = locale.iso;
    if (!localeIso) {
      console.warn('Locale ISO code is required to generate alternate link');
      continue;
    }
    const [language, region] = localeIso.split('-');
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language)))
      localeMap.set(language, locale);

    localeMap.set(localeIso, locale);
  }
  for (const [iso, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath(common, mapLocale.code);
    if (localePath2) {
      links.push({
        [idAttribute]: `i18n-alt-${iso}`,
        rel: 'alternate',
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: iso,
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath(common, defaultLocale);
    if (localePath2) {
      links.push({
        [idAttribute]: 'i18n-xd',
        rel: 'alternate',
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: 'x-default',
      });
    }
  }
  return links;
}
function getCanonicalUrl(common, baseUrl, seoAttributes) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(common, {
    ...route,
    path: void 0,
    name: getRouteBaseName(common, route),
  });
  if (!currentRoute)
    return '';
  let href = toAbsoluteUrl(currentRoute.path, baseUrl);
  const canonicalQueries = isObject(seoAttributes) && seoAttributes.canonicalQueries || [];
  const currentRouteQueryParams = currentRoute.query;
  const params = new URLSearchParams();
  for (const queryParamName of canonicalQueries) {
    if (queryParamName in currentRouteQueryParams) {
      const queryParamValue = currentRouteQueryParams[queryParamName];
      if (isArray(queryParamValue))
        queryParamValue.forEach(v => params.append(queryParamName, v || ''));
      else
        params.append(queryParamName, queryParamValue || '');
    }
  }
  const queryString = params.toString();
  if (queryString)
    href = `${href}?${queryString}`;

  return href;
}
function getCanonicalLink(common, idAttribute, seoAttributes) {
  const baseUrl = getBaseUrl();
  const href = getCanonicalUrl(common, baseUrl, seoAttributes);
  if (!href)
    return [];
  return [{ [idAttribute]: 'i18n-can', rel: 'canonical', href }];
}
function getOgUrl(common, idAttribute, seoAttributes) {
  const baseUrl = getBaseUrl();
  const href = getCanonicalUrl(common, baseUrl, seoAttributes);
  if (!href)
    return [];
  return [{ [idAttribute]: 'i18n-og-url', property: 'og:url', content: href }];
}
function getCurrentOgLocale(currentLocale, currentIso, idAttribute) {
  if (!currentLocale || !currentIso)
    return [];
  return [{ [idAttribute]: 'i18n-og', property: 'og:locale', content: hypenToUnderscore(currentIso) }];
}
function getAlternateOgLocales(locales, currentIso, idAttribute) {
  const alternateLocales = locales.filter(locale => locale.iso && locale.iso !== currentIso);
  return alternateLocales.map(locale => ({
    [idAttribute]: `i18n-og-alt-${locale.iso}`,
    property: 'og:locale:alternate',
    content: hypenToUnderscore(locale.iso),
  }));
}
function hypenToUnderscore(str) {
  return (str || '').replace(/-/g, '_');
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//))
    return urlOrPath;
  return joinURL(baseUrl, urlOrPath);
}
function setCookieLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, 'setLocaleCookie', locale);
}
function mergeLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, 'mergeLocaleMessage', locale, messages);
}
function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, 'onBeforeLanguageSwitch', oldLocale, newLocale, initial, context);
}
function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, 'onLanguageSwitched', oldLocale, newLocale);
}
function initCommonComposableOptions(i18n) {
  return {
    i18n: i18n ?? (/* @__PURE__ */ useNuxtApp()).$i18n,
    router: useRouter(),
    runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
    metaState: useState('nuxt-i18n-meta', () => ({})),
  };
}
async function loadAndSetLocale(newLocale, i18n, runtimeI18n, initial = false) {
  const { differentDomains, skipSettingLocaleOnNavigate, lazy } = runtimeI18n;
  const opts = runtimeDetectBrowserLanguage(runtimeI18n);
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const oldLocale = getLocale(i18n);
  const localeCodes2 = getLocaleCodes(i18n);
  function syncCookie(locale = oldLocale) {
    if (opts === false || !opts.useCookie)
      return;
    if (skipSettingLocaleOnNavigate)
      return;
    setCookieLocale(i18n, locale);
  }
  if (!newLocale) {
    syncCookie();
    return false;
  }
  if (!initial && differentDomains) {
    syncCookie();
    return false;
  }
  if (oldLocale === newLocale) {
    syncCookie();
    return false;
  }
  const localeOverride = await onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, nuxtApp);
  if (localeOverride && localeCodes2.includes(localeOverride)) {
    if (oldLocale === localeOverride) {
      syncCookie();
      return false;
    }
    newLocale = localeOverride;
  }
  if (lazy) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, 'fallbackLocale');
    const setter = (locale, message) => mergeLocaleMessage(i18n, locale, message);
    if (i18nFallbackLocales) {
      const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
      await Promise.all(fallbackLocales.map(locale => loadLocale(locale, localeLoaders, setter)));
    }
    await loadLocale(newLocale, localeLoaders, setter);
  }
  if (skipSettingLocaleOnNavigate)
    return false;

  syncCookie(newLocale);
  setLocale(i18n, newLocale);
  await onLanguageSwitched(i18n, oldLocale, newLocale);
  return true;
}
function detectLocale(route, routeLocaleGetter, vueI18nOptionsLocale, initialLocaleLoader, detectLocaleContext, runtimeI18n) {
  const { strategy, defaultLocale, differentDomains } = runtimeI18n;
  const _detectBrowserLanguage = runtimeDetectBrowserLanguage(runtimeI18n);
  const initialLocale = isFunction(initialLocaleLoader) ? initialLocaleLoader() : initialLocaleLoader;
  const { ssg, callType, firstAccess, localeCookie } = detectLocaleContext;
  const {
    locale: browserLocale,
    stat,
    reason,
    from,
  } = _detectBrowserLanguage ? detectBrowserLanguage(route, vueI18nOptionsLocale, detectLocaleContext, initialLocale) : DefaultDetectBrowserLanguageFromResult;
  if (reason === 'detect_ignore_on_ssg')
    return initialLocale;

  if ((from === 'navigator_or_header' || from === 'cookie' || from === 'fallback') && browserLocale)
    return browserLocale;

  let finalLocale = browserLocale;
  if (!finalLocale) {
    if (differentDomains) {
      finalLocale = getLocaleDomain(normalizedLocales, strategy, route);
    }
    else if (strategy !== 'no_prefix') {
      finalLocale = routeLocaleGetter(route);
    }
    else {
      if (!_detectBrowserLanguage)
        finalLocale = initialLocale;
    }
  }
  if (!finalLocale && _detectBrowserLanguage && _detectBrowserLanguage.useCookie)
    finalLocale = localeCookie || '';

  if (!finalLocale)
    finalLocale = defaultLocale || '';

  return finalLocale;
}
function detectRedirect({
  route,
  targetLocale,
  routeLocaleGetter,
  calledWithRouting = false,
}) {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const common = initCommonComposableOptions();
  const { strategy, differentDomains } = common.runtimeConfig.public.i18n;
  let redirectPath = '';
  const { fullPath: toFullPath } = route.to;
  if (!differentDomains && (calledWithRouting || strategy !== 'no_prefix') && routeLocaleGetter(route.to) !== targetLocale) {
    const routePath = nuxtApp.$switchLocalePath(targetLocale) || nuxtApp.$localePath(toFullPath, targetLocale);
    if (isString(routePath) && routePath && !isEqual(routePath, toFullPath) && !routePath.startsWith('//'))
      redirectPath = !(route.from && route.from.fullPath === routePath) ? routePath : '';
  }
  if ((differentDomains || isSSG) && routeLocaleGetter(route.to) !== targetLocale) {
    const routePath = switchLocalePath(common, targetLocale, route.to);
    if (isString(routePath) && routePath && !isEqual(routePath, toFullPath) && !routePath.startsWith('//'))
      redirectPath = routePath;
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject(rootRedirect) && 'path' in rootRedirect && 'statusCode' in rootRedirect;
}
const useRedirectState = () => useState(`${NUXT_I18N_MODULE_ID}:redirect`, () => '');
function _navigate(redirectPath, status) {
  return navigateTo(redirectPath, { redirectCode: status });
}
async function navigate(args, { status = 302, enableNavigate = false } = {}) {
  const { nuxtApp, i18n, locale, route } = args;
  const { rootRedirect, differentDomains, skipSettingLocaleOnNavigate } = nuxtApp.$config.public.i18n;
  let { redirectPath } = args;
  if (route.path === '/' && rootRedirect) {
    if (isString(rootRedirect)) {
      redirectPath = `/${rootRedirect}`;
    }
    else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = `/${rootRedirect.path}`;
      status = rootRedirect.statusCode;
    }
    redirectPath = nuxtApp.$localePath(redirectPath, locale);
    return _navigate(redirectPath, status);
  }
  if (!differentDomains) {
    if (redirectPath)
      return _navigate(redirectPath, status);
  }
  else {
    const state = useRedirectState();
    if (state.value && state.value !== redirectPath) {
      {
        state.value = redirectPath;
      }
    }
  }
}
function injectNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, '$i18n', getI18nTarget(i18n));
  defineGetter(nuxt, '$getRouteBaseName', wrapComposable(getRouteBaseName));
  defineGetter(nuxt, '$localePath', wrapComposable(localePath));
  defineGetter(nuxt, '$localeRoute', wrapComposable(localeRoute));
  defineGetter(nuxt, '$switchLocalePath', wrapComposable(switchLocalePath));
  defineGetter(nuxt, '$localeHead', wrapComposable(localeHead));
}
function extendPrefixable(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (opts) => {
    return DefaultPrefixable(opts) && !runtimeConfig.public.i18n.differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (path, locale) => {
    if (runtimeConfig.public.i18n.differentDomains) {
      const domain = getDomainFromLocale(locale);
      if (domain)
        return joinURL(domain, path);
      else
        return path;
    }
    else {
      return DefaultSwitchLocalePathIntercepter(path);
    }
  };
}
function extendBaseUrl() {
  return () => {
    const ctx = /* @__PURE__ */ useNuxtApp();
    const { baseUrl, defaultLocale, differentDomains } = ctx.$config.public.i18n;
    if (isFunction(baseUrl)) {
      const baseUrlResult = baseUrl(ctx);
      return baseUrlResult;
    }
    const localeCode = isFunction(defaultLocale) ? defaultLocale() : defaultLocale;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode);
      if (domain)
        return domain;
    }
    if (baseUrl)
      return baseUrl;

    return baseUrl;
  };
}
function formatMessage(message) {
  return `${NUXT_I18N_MODULE_ID} ${message}`;
}
function callVueI18nInterfaces(i18n, name, ...args) {
  const target = getI18nTarget(i18n);
  const [obj, method] = [target, target[name]];
  return Reflect.apply(method, obj, [...args]);
}
function getVueI18nPropertyValue(i18n, name) {
  const target = getI18nTarget(i18n);
  return unref(target[name]);
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function wrapComposable(fn, common = initCommonComposableOptions()) {
  return (...args) => fn(common, ...args);
}
function parseAcceptLanguage(input) {
  return input.split(',').map(tag => tag.split(';')[0]);
}
function getBrowserLocale() {
  let ret;
  {
    const header = useRequestHeaders(['accept-language']);
    const accept = header['accept-language'];
    if (accept)
      ret = findBrowserLocale(normalizedLocales, parseAcceptLanguage(accept));
  }
  return ret;
}
function getI18nCookie() {
  const detect = runtimeDetectBrowserLanguage();
  const cookieKey = detect && detect.cookieKey || DEFAULT_COOKIE_KEY;
  const date = /* @__PURE__ */ new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: detect && detect.cookieCrossOrigin ? 'none' : 'lax',
    secure: detect && detect.cookieCrossOrigin || detect && detect.cookieSecure,
  };
  if (detect && detect.cookieDomain)
    cookieOptions.domain = detect.cookieDomain;

  return useCookie(cookieKey, cookieOptions);
}
function getLocaleCookie(cookieRef, detect, defaultLocale) {
  if (detect === false || !detect.useCookie)
    return;

  const localeCode = cookieRef.value ?? void 0;
  if (localeCode == null)
    return;

  if (localeCodes.includes(localeCode))
    return localeCode;

  if (defaultLocale) {
    cookieRef.value = defaultLocale;
    return defaultLocale;
  }
  cookieRef.value = void 0;
}
function setLocaleCookie(cookieRef, locale, detect) {
  if (detect === false || !detect.useCookie)
    return;

  cookieRef.value = locale;
}
const DefaultDetectBrowserLanguageFromResult = {
  locale: '',
  stat: false,
  reason: 'unknown',
  from: 'unknown',
};
function detectBrowserLanguage(route, vueI18nOptionsLocale, detectLocaleContext, locale = '') {
  const { strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const { ssg, callType, firstAccess, localeCookie } = detectLocaleContext;
  if (!firstAccess)
    return { locale: strategy === 'no_prefix' ? locale : '', stat: false, reason: 'first_access_only' };

  const { redirectOn, alwaysRedirect, useCookie: useCookie2, fallbackLocale } = runtimeDetectBrowserLanguage();
  const path = isString(route) ? route : route.path;
  if (strategy !== 'no_prefix') {
    if (redirectOn === 'root') {
      if (path !== '/')
        return { locale: '', stat: false, reason: 'not_redirect_on_root' };
    }
    else if (redirectOn === 'no prefix') {
      if (!alwaysRedirect && path.match(getLocalesRegex(localeCodes)))
        return { locale: '', stat: false, reason: 'not_redirect_on_no_prefix' };
    }
  }
  let localeFrom = 'unknown';
  let cookieLocale;
  let matchedLocale;
  if (useCookie2) {
    matchedLocale = cookieLocale = localeCookie;
    localeFrom = 'cookie';
  }
  if (!matchedLocale) {
    matchedLocale = getBrowserLocale();
    localeFrom = 'navigator_or_header';
  }
  const finalLocale = matchedLocale || fallbackLocale;
  if (!matchedLocale && fallbackLocale)
    localeFrom = 'fallback';

  const vueI18nLocale = locale || vueI18nOptionsLocale;
  if (finalLocale && (!useCookie2 || alwaysRedirect || !cookieLocale)) {
    if (strategy === 'no_prefix') {
      return { locale: finalLocale, stat: true, from: localeFrom };
    }
    else {
      if (callType === 'setup') {
        if (finalLocale !== vueI18nLocale)
          return { locale: finalLocale, stat: true, from: localeFrom };
      }
      if (alwaysRedirect) {
        const redirectOnRoot = path === '/';
        const redirectOnAll = redirectOn === 'all';
        const redirectOnNoPrefix = redirectOn === 'no prefix' && !path.match(getLocalesRegex(localeCodes));
        if (redirectOnRoot || redirectOnAll || redirectOnNoPrefix)
          return { locale: finalLocale, stat: true, from: localeFrom };
      }
    }
  }
  if (ssg === 'ssg_setup' && finalLocale)
    return { locale: finalLocale, stat: true, from: localeFrom };

  if ((localeFrom === 'navigator_or_header' || localeFrom === 'cookie') && finalLocale)
    return { locale: finalLocale, stat: true, from: localeFrom };

  return { locale: '', stat: false, reason: 'not_found_match' };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(['x-forwarded-host', 'host']);
    let detectedHost;
    if ('x-forwarded-host' in header)
      detectedHost = header['x-forwarded-host'];
    else if ('host' in header)
      detectedHost = header.host;

    host = isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales, strategy, route) {
  let host = getHost() || '';
  if (host) {
    let matchingLocale;
    const matchingLocales = locales.filter((locale) => {
      if (locale && locale.domain) {
        let domain = locale.domain;
        if (hasProtocol(locale.domain))
          domain = locale.domain.replace(/(http|https):\/\//, '');

        return domain === host;
      }
      return false;
    });
    if (matchingLocales.length === 1) {
      matchingLocale = matchingLocales[0];
    }
    else if (matchingLocales.length > 1) {
      if (strategy === 'no_prefix') {
        console.warn(
          formatMessage(
            'Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!',
          ),
        );
        matchingLocale = matchingLocales[0];
      }
      else {
        if (route) {
          const routePath = isObject(route) ? route.path : isString(route) ? route : '';
          if (routePath && routePath !== '') {
            const matches = routePath.match(getLocalesRegex(matchingLocales.map(l => l.code)));
            if (matches && matches.length > 1)
              matchingLocale = matchingLocales.find(l => l.code === matches[1]);
          }
        }
        if (!matchingLocale)
          matchingLocale = matchingLocales.find(l => l.domainDefault);
      }
    }
    if (matchingLocale)
      return matchingLocale.code;
    else
      host = '';
  }
  return host;
}
function getDomainFromLocale(localeCode) {
  let _a, _b;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const config = runtimeConfig.public.i18n;
  const lang = normalizedLocales.find(locale => locale.code === localeCode);
  const domain = ((_b = (_a = config == null ? void 0 : config.locales) == null ? void 0 : _a[localeCode]) == null ? void 0 : _b.domain) ?? (lang == null ? void 0 : lang.domain);
  if (domain) {
    if (hasProtocol(domain, { strict: true }))
      return domain;

    let protocol;
    {
      const {
        node: { req },
      } = useRequestEvent(nuxtApp);
      protocol = req && isHTTPS(req) ? 'https:' : 'http:';
    }
    return `${protocol}//${domain}`;
  }
  console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));
}
function runtimeDetectBrowserLanguage(opts = (/* @__PURE__ */ useRuntimeConfig()).public.i18n) {
  if ((opts == null ? void 0 : opts.detectBrowserLanguage) === false)
    return false;
  return opts == null ? void 0 : opts.detectBrowserLanguage;
}
function useLocaleHead({
  addDirAttribute = false,
  addSeoAttributes = false,
  identifierAttribute = 'hid',
} = {}) {
  const common = initCommonComposableOptions();
  const metaObject = ref({
    htmlAttrs: {},
    link: [],
    meta: [],
  });
  function updateMeta() {
    metaObject.value = localeHead(common, {
      addDirAttribute,
      addSeoAttributes,
      identifierAttribute,
    });
  }
  {
    updateMeta();
  }
  return metaObject;
}
function useSwitchLocalePath() {
  return wrapComposable(switchLocalePath);
}
function extendI18n(i18n, {
  locales = [],
  localeCodes: localeCodes2 = [],
  baseUrl = '',
  hooks = {},
  context = {},
} = {}) {
  const scope = effectScope();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    const pluginOptions = isPluginOptions(options[0]) ? assign({}, options[0]) : { inject: true };
    if (pluginOptions.inject == null)
      pluginOptions.inject = true;

    const orgComposerExtend = pluginOptions.__composerExtend;
    pluginOptions.__composerExtend = (localComposer) => {
      const globalComposer2 = getComposer(i18n);
      localComposer.locales = computed(() => globalComposer2.locales.value);
      localComposer.localeCodes = computed(() => globalComposer2.localeCodes.value);
      localComposer.baseUrl = computed(() => globalComposer2.baseUrl.value);
      let orgComposerDispose;
      if (isFunction(orgComposerExtend))
        orgComposerDispose = Reflect.apply(orgComposerExtend, pluginOptions, [localComposer]);

      return () => {
        orgComposerDispose && orgComposerDispose();
      };
    };
    if (i18n.mode === 'legacy') {
      const orgVueI18nExtend = pluginOptions.__vueI18nExtend;
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendVueI18n(vueI18n, hooks.onExtendVueI18n);
        let orgVueI18nDispose;
        if (isFunction(orgVueI18nExtend))
          orgVueI18nDispose = Reflect.apply(orgVueI18nExtend, pluginOptions, [vueI18n]);

        return () => {
          orgVueI18nDispose && orgVueI18nDispose();
        };
      };
    }
    options[0] = pluginOptions;
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const globalComposer = getComposer(i18n);
    scope.run(() => {
      extendComposer(globalComposer, { locales, localeCodes: localeCodes2, baseUrl, hooks, context });
      if (i18n.mode === 'legacy' && isVueI18n(i18n.global))
        extendVueI18n(i18n.global, hooks.onExtendVueI18n);
    });
    const app = vue;
    const exported = i18n.mode === 'composition' ? app.config.globalProperties.$i18n : null;
    if (exported)
      extendExportedGlobal(exported, globalComposer, hooks.onExtendExportedGlobal);

    if (pluginOptions.inject) {
      const common = initCommonComposableOptions(i18n);
      vue.mixin({
        methods: {
          getRouteBaseName: wrapComposable(getRouteBaseName, common),
          resolveRoute: wrapComposable(resolveRoute, common),
          localePath: wrapComposable(localePath, common),
          localeRoute: wrapComposable(localeRoute, common),
          localeLocation: wrapComposable(localeLocation, common),
          switchLocalePath: wrapComposable(switchLocalePath, common),
          localeHead: wrapComposable(localeHead, common),
        },
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes: localeCodes2, baseUrl, context } = options;
  const _locales = ref(locales);
  const _localeCodes = ref(localeCodes2);
  const _baseUrl = ref('');
  composer.locales = computed(() => _locales.value);
  composer.localeCodes = computed(() => _localeCodes.value);
  composer.baseUrl = computed(() => _baseUrl.value);
  {
    _baseUrl.value = resolveBaseUrl(baseUrl, context);
  }
  if (options.hooks && options.hooks.onExtendComposer)
    options.hooks.onExtendComposer(composer);
}
function extendPropertyDescriptors(composer, exported, hook) {
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        },
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        },
      },
      baseUrl: {
        get() {
          return composer.baseUrl.value;
        },
      },
    },
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property))
      Object.defineProperty(exported, key, descriptor);
  }
}
function extendExportedGlobal(exported, g, hook) {
  extendPropertyDescriptors(g, exported, hook);
}
function extendVueI18n(vueI18n, hook) {
  const c = getComposer(vueI18n);
  extendPropertyDescriptors(c, vueI18n, hook);
}
function isPluginOptions(options) {
  return isObject(options) && ('inject' in options || '__composerExtend' in options || '__vueI18nExtend' in options);
}
function createLocaleFromRouteGetter() {
  const { routesNameSeparator, defaultLocaleRouteNameSuffix } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = getLocalesRegex(localeCodes);
  const getLocaleFromRoute = (route) => {
    if (isObject(route)) {
      if (route.name) {
        const name = isString(route.name) ? route.name : route.name.toString();
        const matches = name.match(regexpName);
        if (matches && matches.length > 1)
          return matches[1];
      }
      else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1)
          return matches[1];
      }
    }
    else if (isString(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1)
        return matches[1];
    }
    return '';
  };
  return getLocaleFromRoute;
}
const i18n_4gMi5uGCu8 = /* @__PURE__ */ defineNuxtPlugin({
  name: 'i18n:plugin',
  parallel: parallelPlugin,
  async setup(nuxt) {
    let __temp, __restore;
    const route = useRoute();
    const { vueApp: app } = nuxt;
    const nuxtContext = nuxt;
    const runtimeI18n = { ...nuxtContext.$config.public.i18n };
    runtimeI18n.baseUrl = extendBaseUrl();
    const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
    const vueI18nOptions = ([__temp, __restore] = executeAsync(() => loadVueI18nOptions(vueI18nConfigs, /* @__PURE__ */ useNuxtApp())), __temp = await __temp, __restore(), __temp);
    vueI18nOptions.messages = vueI18nOptions.messages || {};
    vueI18nOptions.fallbackLocale = vueI18nOptions.fallbackLocale ?? false;
    const getLocaleFromRoute = createLocaleFromRouteGetter();
    const getDefaultLocale = defaultLocale => defaultLocale || vueI18nOptions.locale || 'en-US';
    const localeCookie = getI18nCookie();
    let initialLocale = detectLocale(
      route,
      getLocaleFromRoute,
      vueI18nOptions.locale,
      getDefaultLocale(runtimeI18n.defaultLocale),
      {
        ssg: 'normal',
        callType: 'setup',
        firstAccess: true,
        localeCookie: getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale),
      },
      runtimeI18n,
    );
    vueI18nOptions.messages = ([__temp, __restore] = executeAsync(() => loadInitialMessages(vueI18nOptions.messages, localeLoaders, {
      localeCodes,
      initialLocale,
      lazy: runtimeI18n.lazy,
      defaultLocale: runtimeI18n.defaultLocale,
      fallbackLocale: vueI18nOptions.fallbackLocale,
    })), __temp = await __temp, __restore(), __temp);
    initialLocale = getDefaultLocale(initialLocale);
    const i18n = createI18n({ ...vueI18nOptions, locale: initialLocale });
    let notInitialSetup = true;
    const isInitialLocaleSetup = locale => initialLocale !== locale && notInitialSetup;
    extendI18n(i18n, {
      locales: runtimeI18n.configLocales,
      localeCodes,
      baseUrl: runtimeI18n.baseUrl,
      context: nuxtContext,
      hooks: {
        onExtendComposer(composer) {
          composer.strategy = runtimeI18n.strategy;
          composer.localeProperties = computed(
            () => normalizedLocales.find(l => l.code === composer.locale.value) || { code: composer.locale.value },
          );
          composer.setLocale = async (locale) => {
            const localeSetup = isInitialLocaleSetup(locale);
            const modified = await loadAndSetLocale(locale, i18n, runtimeI18n, localeSetup);
            if (modified && localeSetup)
              notInitialSetup = false;

            const redirectPath = await nuxtContext.runWithContext(
              () => detectRedirect({
                route: { to: route },
                targetLocale: locale,
                routeLocaleGetter: getLocaleFromRoute,
              }),
            );
            await nuxtContext.runWithContext(
              async () => await navigate(
                {
                  nuxtApp: nuxtContext,
                  i18n,
                  redirectPath,
                  locale,
                  route,
                },
                { enableNavigate: true },
              ),
            );
          };
          composer.loadLocaleMessages = async (locale) => {
            const setter = (locale2, message) => mergeLocaleMessage(i18n, locale2, message);
            await loadLocale(locale, localeLoaders, setter);
          };
          composer.differentDomains = runtimeI18n.differentDomains;
          composer.defaultLocale = runtimeI18n.defaultLocale;
          composer.getBrowserLocale = () => getBrowserLocale();
          composer.getLocaleCookie = () => getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale);
          composer.setLocaleCookie = locale => setLocaleCookie(localeCookie, locale, _detectBrowserLanguage);
          composer.onBeforeLanguageSwitch = (oldLocale, newLocale, initialSetup, context) => nuxt.callHook('i18n:beforeLocaleSwitch', { oldLocale, newLocale, initialSetup, context });
          composer.onLanguageSwitched = (oldLocale, newLocale) => nuxt.callHook('i18n:localeSwitched', { oldLocale, newLocale });
          composer.finalizePendingLocaleChange = async () => {
            if (!i18n.__pendingLocale)
              return;

            setLocale(i18n, i18n.__pendingLocale);
            if (i18n.__resolvePendingLocalePromise)
              await i18n.__resolvePendingLocalePromise();

            i18n.__pendingLocale = void 0;
          };
          composer.waitForPendingLocaleChange = async () => {
            if (i18n.__pendingLocale && i18n.__pendingLocalePromise)
              await i18n.__pendingLocalePromise;
          };
        },
        onExtendExportedGlobal(g) {
          return {
            strategy: {
              get() {
                return g.strategy;
              },
            },
            localeProperties: {
              get() {
                return g.localeProperties.value;
              },
            },
            setLocale: {
              get() {
                return async locale => Reflect.apply(g.setLocale, g, [locale]);
              },
            },
            differentDomains: {
              get() {
                return g.differentDomains;
              },
            },
            defaultLocale: {
              get() {
                return g.defaultLocale;
              },
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(g.getBrowserLocale, g, []);
              },
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(g.getLocaleCookie, g, []);
              },
            },
            setLocaleCookie: {
              get() {
                return locale => Reflect.apply(g.setLocaleCookie, g, [locale]);
              },
            },
            onBeforeLanguageSwitch: {
              get() {
                return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(g.onBeforeLanguageSwitch, g, [oldLocale, newLocale, initialSetup, context]);
              },
            },
            onLanguageSwitched: {
              get() {
                return (oldLocale, newLocale) => Reflect.apply(g.onLanguageSwitched, g, [oldLocale, newLocale]);
              },
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(g.finalizePendingLocaleChange, g, []);
              },
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(g.waitForPendingLocaleChange, g, []);
              },
            },
          };
        },
        onExtendVueI18n(composer) {
          return {
            strategy: {
              get() {
                return composer.strategy;
              },
            },
            localeProperties: {
              get() {
                return composer.localeProperties.value;
              },
            },
            setLocale: {
              get() {
                return async locale => Reflect.apply(composer.setLocale, composer, [locale]);
              },
            },
            loadLocaleMessages: {
              get() {
                return async locale => Reflect.apply(composer.loadLocaleMessages, composer, [locale]);
              },
            },
            differentDomains: {
              get() {
                return composer.differentDomains;
              },
            },
            defaultLocale: {
              get() {
                return composer.defaultLocale;
              },
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(composer.getBrowserLocale, composer, []);
              },
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(composer.getLocaleCookie, composer, []);
              },
            },
            setLocaleCookie: {
              get() {
                return locale => Reflect.apply(composer.setLocaleCookie, composer, [locale]);
              },
            },
            onBeforeLanguageSwitch: {
              get() {
                return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(composer.onBeforeLanguageSwitch, composer, [
                  oldLocale,
                  newLocale,
                  initialSetup,
                  context,
                ]);
              },
            },
            onLanguageSwitched: {
              get() {
                return (oldLocale, newLocale) => Reflect.apply(composer.onLanguageSwitched, composer, [oldLocale, newLocale]);
              },
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(composer.finalizePendingLocaleChange, composer, []);
              },
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(composer.waitForPendingLocaleChange, composer, []);
              },
            },
          };
        },
      },
    });
    const pluginOptions = {
      __composerExtend: (c) => {
        const g = getComposer(i18n);
        c.strategy = g.strategy;
        c.localeProperties = computed(() => g.localeProperties.value);
        c.setLocale = g.setLocale;
        c.differentDomains = g.differentDomains;
        c.getBrowserLocale = g.getBrowserLocale;
        c.getLocaleCookie = g.getLocaleCookie;
        c.setLocaleCookie = g.setLocaleCookie;
        c.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch;
        c.onLanguageSwitched = g.onLanguageSwitched;
        c.finalizePendingLocaleChange = g.finalizePendingLocaleChange;
        c.waitForPendingLocaleChange = g.waitForPendingLocaleChange;
        return () => {
        };
      },
    };
    app.use(i18n, pluginOptions);
    injectNuxtHelpers(nuxtContext, i18n);
    if (runtimeI18n.experimental.switchLocalePathLinkSSR === true) {
      const switchLocalePath2 = useSwitchLocalePath();
      const switchLocalePathLinkWrapperExpr = new RegExp(
        [
          `<!--${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-\\[(\\w+)\\]-->`,
          '.+?',
          `<!--/${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-->`,
        ].join(''),
        'g',
      );
      nuxt.hook('app:rendered', (ctx) => {
        let _a;
        if (((_a = ctx.renderResult) == null ? void 0 : _a.html) == null)
          return;
        ctx.renderResult.html = ctx.renderResult.html.replaceAll(
          switchLocalePathLinkWrapperExpr,
          (match, p1) => match.replace(/href="([^"]+)"/, `href="${switchLocalePath2(p1 ?? '')}"`),
        );
      });
    }
    let routeChangeCount = 0;
    addRouteMiddleware(
      'locale-changing',

      /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
        let __temp2, __restore2;
        const locale = detectLocale(
          to,
          getLocaleFromRoute,
          vueI18nOptions.locale,
          () => {
            return getLocale(i18n) || getDefaultLocale(runtimeI18n.defaultLocale);
          },
          {
            ssg: 'normal',
            callType: 'routing',
            firstAccess: routeChangeCount === 0,
            localeCookie: getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale),
          },
          runtimeI18n,
        );
        const localeSetup = isInitialLocaleSetup(locale);
        const modified = ([__temp2, __restore2] = executeAsync(() => loadAndSetLocale(locale, i18n, runtimeI18n, localeSetup)), __temp2 = await __temp2, __restore2(), __temp2);
        if (modified && localeSetup)
          notInitialSetup = false;

        const redirectPath = ([__temp2, __restore2] = executeAsync(() => nuxtContext.runWithContext(
          () => detectRedirect({
            route: { to, from },
            targetLocale: locale,
            routeLocaleGetter: runtimeI18n.strategy === 'no_prefix' ? () => locale : getLocaleFromRoute,
            calledWithRouting: true,
          }),
        )), __temp2 = await __temp2, __restore2(), __temp2);
        routeChangeCount++;
        return [__temp2, __restore2] = executeAsync(() => nuxtContext.runWithContext(
          async () => navigate({ nuxtApp: nuxtContext, i18n, redirectPath, locale, route: to }),
        )), __temp2 = await __temp2, __restore2(), __temp2;
      }),
      { global: true },
    );
  },
});
function _createForOfIteratorHelper$1(o, allowArrayLike) {
  let it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator'];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$3$1(o)) || allowArrayLike) {
      if (it)
        o = it;
      let i = 0;
      const F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }
  let normalCompletion = true; let didErr = false; let err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    const step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    }
    finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray$3(arr) {
  return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$3$1(arr) || _nonIterableSpread$3();
}
function _nonIterableSpread$3() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _iterableToArray$3(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$3$1(arr);
}
function _typeof$3$1(o) {
  '@babel/helpers - typeof';
  return _typeof$3$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$3$1(o);
}
function _slicedToArray$1$1(arr, i) {
  return _arrayWithHoles$1$1(arr) || _iterableToArrayLimit$1$1(arr, i) || _unsupportedIterableToArray$3$1(arr, i) || _nonIterableRest$1$1();
}
function _nonIterableRest$1$1() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray$3$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray$3$1(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3$1(o, minLen);
}
function _arrayLikeToArray$3$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$1$1(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator'];
  if (t != null) {
    let e; let n; let i; let u; const a = []; let f = true; let o = false;
    try {
      if (i = (t = t.call(r)).next, l === 0)
        ;
      else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    }
    catch (r2) {
      o = true, n = r2;
    }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      }
      finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$1$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
const DomHandler = {
  innerWidth: function innerWidth(el) {
    if (el) {
      let width2 = el.offsetWidth;
      const style = getComputedStyle(el);
      width2 += Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight);
      return width2;
    }
    return 0;
  },
  width: function width(el) {
    if (el) {
      let width2 = el.offsetWidth;
      const style = getComputedStyle(el);
      width2 -= Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight);
      return width2;
    }
    return 0;
  },
  getWindowScrollTop: function getWindowScrollTop() {
    const doc = (void 0).documentElement;
    return ((void 0).pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft: function getWindowScrollLeft() {
    const doc = (void 0).documentElement;
    return ((void 0).pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth: function getOuterWidth(el, margin) {
    if (el) {
      let width2 = el.offsetWidth;
      if (margin) {
        const style = getComputedStyle(el);
        width2 += Number.parseFloat(style.marginLeft) + Number.parseFloat(style.marginRight);
      }
      return width2;
    }
    return 0;
  },
  getOuterHeight: function getOuterHeight(el, margin) {
    if (el) {
      let height = el.offsetHeight;
      if (margin) {
        const style = getComputedStyle(el);
        height += Number.parseFloat(style.marginTop) + Number.parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight: function getClientHeight(el, margin) {
    if (el) {
      let height = el.clientHeight;
      if (margin) {
        const style = getComputedStyle(el);
        height += Number.parseFloat(style.marginTop) + Number.parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport: function getViewport() {
    const win = void 0; const d = void 0; const e = d.documentElement; const g = d.getElementsByTagName('body')[0]; const w = win.innerWidth || e.clientWidth || g.clientWidth; const h2 = win.innerHeight || e.clientHeight || g.clientHeight;
    return {
      width: w,
      height: h2,
    };
  },
  getOffset: function getOffset(el) {
    if (el) {
      const rect = el.getBoundingClientRect();
      return {
        top: rect.top + ((void 0).pageYOffset || (void 0).documentElement.scrollTop || (void 0).body.scrollTop || 0),
        left: rect.left + ((void 0).pageXOffset || (void 0).documentElement.scrollLeft || (void 0).body.scrollLeft || 0),
      };
    }
    return {
      top: 'auto',
      left: 'auto',
    };
  },
  index: function index(element) {
    if (element) {
      let _this$getParentNode;
      const children = (_this$getParentNode = this.getParentNode(element)) === null || _this$getParentNode === void 0 ? void 0 : _this$getParentNode.childNodes;
      let num = 0;
      for (let i = 0; i < children.length; i++) {
        if (children[i] === element)
          return num;
        if (children[i].nodeType === 1)
          num++;
      }
    }
    return -1;
  },
  addMultipleClasses: function addMultipleClasses(element, classNames) {
    const _this = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => {
        return cNames.split(' ').forEach((className) => {
          return _this.addClass(element, className);
        });
      });
    }
  },
  removeMultipleClasses: function removeMultipleClasses(element, classNames) {
    const _this2 = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => {
        return cNames.split(' ').forEach((className) => {
          return _this2.removeClass(element, className);
        });
      });
    }
  },
  addClass: function addClass(element, className) {
    if (element && className && !this.hasClass(element, className)) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += ` ${className}`;
    }
  },
  removeClass: function removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
    }
  },
  hasClass: function hasClass(element, className) {
    if (element) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp(`(^| )${className}( |$)`, 'gi').test(element.className);
    }
    return false;
  },
  addStyles: function addStyles(element) {
    const styles = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (element) {
      Object.entries(styles).forEach((_ref) => {
        const _ref2 = _slicedToArray$1$1(_ref, 2); const key = _ref2[0]; const value = _ref2[1];
        return element.style[key] = value;
      });
    }
  },
  find: function find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle: function findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  createElement: function createElement(type) {
    const attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (type) {
      const element = (void 0).createElement(type);
      this.setAttributes(element, attributes);
      for (var _len = arguments.length, children = Array.from({ length: _len > 2 ? _len - 2 : 0 }), _key = 2; _key < _len; _key++)
        children[_key - 2] = arguments[_key];

      element.append.apply(element, children);
      return element;
    }
    return void 0;
  },
  setAttribute: function setAttribute(element) {
    const attribute = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const value = arguments.length > 2 ? arguments[2] : void 0;
    if (this.isElement(element) && value !== null && value !== void 0)
      element.setAttribute(attribute, value);
  },
  setAttributes: function setAttributes(element) {
    const _this3 = this;
    const attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.isElement(element)) {
      const computedStyles = function computedStyles2(rule, value) {
        let _element$$attrs, _element$$attrs2;
        const styles = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
        return [value].flat().reduce((cv, v) => {
          if (v !== null && v !== void 0) {
            const type = _typeof$3$1(v);
            if (type === 'string' || type === 'number') {
              cv.push(v);
            }
            else if (type === 'object') {
              const _cv = Array.isArray(v)
                ? computedStyles2(rule, v)
                : Object.entries(v).map((_ref3) => {
                  const _ref4 = _slicedToArray$1$1(_ref3, 2); const _k = _ref4[0]; const _v = _ref4[1];
                  return rule === 'style' && (!!_v || _v === 0) ? ''.concat(_k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), ':').concat(_v) : _v ? _k : void 0;
                });
              cv = _cv.length
                ? cv.concat(_cv.filter((c) => {
                  return !!c;
                }))
                : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach((_ref5) => {
        const _ref6 = _slicedToArray$1$1(_ref5, 2); const key = _ref6[0]; let value = _ref6[1];
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          }
          else if (key === 'p-bind') {
            _this3.setAttributes(element, value);
          }
          else {
            value = key === 'class' ? _toConsumableArray$3(new Set(computedStyles('class', value))).join(' ').trim() : key === 'style' ? computedStyles('style', value).join(';').trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  },
  getAttribute: function getAttribute(element, name) {
    if (this.isElement(element)) {
      const value = element.getAttribute(name);
      if (!isNaN(value))
        return +value;

      if (value === 'true' || value === 'false')
        return value === 'true';

      return value;
    }
    return void 0;
  },
  isAttributeEquals: function isAttributeEquals(element, name, value) {
    return this.isElement(element) ? this.getAttribute(element, name) === value : false;
  },
  isAttributeNotEquals: function isAttributeNotEquals(element, name, value) {
    return !this.isAttributeEquals(element, name, value);
  },
  getHeight: function getHeight(el) {
    if (el) {
      let height = el.offsetHeight;
      const style = getComputedStyle(el);
      height -= Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom) + Number.parseFloat(style.borderTopWidth) + Number.parseFloat(style.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth: function getWidth(el) {
    if (el) {
      let width2 = el.offsetWidth;
      const style = getComputedStyle(el);
      width2 -= Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight) + Number.parseFloat(style.borderLeftWidth) + Number.parseFloat(style.borderRightWidth);
      return width2;
    }
    return 0;
  },
  absolutePosition: function absolutePosition(element, target) {
    const gutter = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (element) {
      const elementDimensions = element.offsetParent
        ? {
            width: element.offsetWidth,
            height: element.offsetHeight,
          }
        : this.getHiddenElementDimensions(element);
      const elementOuterHeight = elementDimensions.height;
      const elementOuterWidth = elementDimensions.width;
      const targetOuterHeight = target.offsetHeight;
      const targetOuterWidth = target.offsetWidth;
      const targetOffset = target.getBoundingClientRect();
      const windowScrollTop = this.getWindowScrollTop();
      const windowScrollLeft = this.getWindowScrollLeft();
      const viewport = this.getViewport();
      let top; let left; let origin = 'top';
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        origin = 'bottom';
        if (top < 0)
          top = windowScrollTop;
      }
      else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
      }
      if (targetOffset.left + elementOuterWidth > viewport.width)
        left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
      else
        left = targetOffset.left + windowScrollLeft;
      element.style.top = `${top}px`;
      element.style.left = `${left}px`;
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  relativePosition: function relativePosition(element, target) {
    const gutter = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (element) {
      const elementDimensions = element.offsetParent
        ? {
            width: element.offsetWidth,
            height: element.offsetHeight,
          }
        : this.getHiddenElementDimensions(element);
      const targetHeight = target.offsetHeight;
      const targetOffset = target.getBoundingClientRect();
      const viewport = this.getViewport();
      let top; let left; let origin = 'top';
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        origin = 'bottom';
        if (targetOffset.top + top < 0)
          top = -1 * targetOffset.top;
      }
      else {
        top = targetHeight;
      }
      if (elementDimensions.width > viewport.width)
        left = targetOffset.left * -1;
      else if (targetOffset.left + elementDimensions.width > viewport.width)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      else
        left = 0;

      element.style.top = `${top}px`;
      element.style.left = `${left}px`;
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  nestedPosition: function nestedPosition(element, level) {
    if (element) {
      const parentItem = element.parentElement;
      const elementOffset = this.getOffset(parentItem);
      const viewport = this.getViewport();
      const sublistWidth = element.offsetParent ? element.offsetWidth : this.getHiddenElementOuterWidth(element);
      const itemOuterWidth = this.getOuterWidth(parentItem.children[0]);
      let left;
      if (Number.parseInt(elementOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - this.calculateScrollbarWidth()) {
        if (Number.parseInt(elementOffset.left, 10) < sublistWidth) {
          if (level % 2 === 1)
            left = Number.parseInt(elementOffset.left, 10) ? `-${Number.parseInt(elementOffset.left, 10)}px` : '100%';
          else if (level % 2 === 0)
            left = `${viewport.width - sublistWidth - this.calculateScrollbarWidth()}px`;
        }
        else {
          left = '-100%';
        }
      }
      else {
        left = '100%';
      }
      element.style.top = '0px';
      element.style.left = left;
    }
  },
  getParentNode: function getParentNode(element) {
    let parent = element === null || element === void 0 ? void 0 : element.parentNode;
    if (parent && parent instanceof ShadowRoot && parent.host)
      parent = parent.host;

    return parent;
  },
  getParents: function getParents(element) {
    const parents = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    const parent = this.getParentNode(element);
    return parent === null ? parents : this.getParents(parent, parents.concat([parent]));
  },
  getScrollableParents: function getScrollableParents(element) {
    const scrollableParents = [];
    if (element) {
      const parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = function overflowCheck2(node) {
        try {
          const styleDeclaration = (void 0).getComputedStyle(node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
        }
        catch (err) {
          return false;
        }
      };
      const _iterator = _createForOfIteratorHelper$1(parents); let _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const parent = _step.value;
          const scrollSelectors = parent.nodeType === 1 && parent.dataset.scrollselectors;
          if (scrollSelectors) {
            const selectors = scrollSelectors.split(',');
            const _iterator2 = _createForOfIteratorHelper$1(selectors); var _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                const selector = _step2.value;
                const el = this.findSingle(parent, selector);
                if (el && overflowCheck(el))
                  scrollableParents.push(el);
              }
            }
            catch (err) {
              _iterator2.e(err);
            }
            finally {
              _iterator2.f();
            }
          }
          if (parent.nodeType !== 9 && overflowCheck(parent))
            scrollableParents.push(parent);
        }
      }
      catch (err) {
        _iterator.e(err);
      }
      finally {
        _iterator.f();
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      const elementHeight = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      const elementWidth = element.offsetWidth;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions: function getHiddenElementDimensions(element) {
    if (element) {
      const dimensions = {};
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return dimensions;
    }
    return 0;
  },
  fadeIn: function fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      let last = +new Date();
      let opacity = 0;
      const tick = function tick2() {
        opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();
        if (+opacity < 1)
          (void 0).requestAnimationFrame && requestAnimationFrame(tick2) || setTimeout(tick2, 16);
      };
      tick();
    }
  },
  fadeOut: function fadeOut(element, ms) {
    if (element) {
      let opacity = 1; const interval = 50; const duration = ms; const gap = interval / duration;
      var fading = setInterval(() => {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent: function getUserAgent() {
    return (void 0).userAgent;
  },
  appendChild: function appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.elElement)
      target.elElement.appendChild(element);
    else
      throw new Error(`Cannot append ${target} to ${element}`);
  },
  isElement: function isElement(obj) {
    return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof$3$1(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && _typeof$3$1(obj) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  },
  scrollInView: function scrollInView(container, item) {
    const borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    const borderTop = borderTopValue ? Number.parseFloat(borderTopValue) : 0;
    const paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    const paddingTop = paddingTopValue ? Number.parseFloat(paddingTopValue) : 0;
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const offset = itemRect.top + (void 0).body.scrollTop - (containerRect.top + (void 0).body.scrollTop) - borderTop - paddingTop;
    const scroll = container.scrollTop;
    const elementHeight = container.clientHeight;
    const itemHeight = this.getOuterHeight(item);
    if (offset < 0)
      container.scrollTop = scroll + offset;
    else if (offset + itemHeight > elementHeight)
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
  },
  clearSelection: function clearSelection() {
    if ((void 0).getSelection) {
      if ((void 0).getSelection().empty)
        (void 0).getSelection().empty();
      else if ((void 0).getSelection().removeAllRanges && (void 0).getSelection().rangeCount > 0 && (void 0).getSelection().getRangeAt(0).getClientRects().length > 0)
        (void 0).getSelection().removeAllRanges();
    }
    else if ((void 0).selection && (void 0).selection.empty) {
      try {
        (void 0).selection.empty();
      }
      catch (error2) {
      }
    }
  },
  getSelection: function getSelection() {
    if ((void 0).getSelection)
      return (void 0).getSelection().toString();
    else if ((void 0).getSelection)
      return (void 0).getSelection().toString();
    else if ((void 0).selection)
      return (void 0).selection.createRange().text;
    return null;
  },
  calculateScrollbarWidth: function calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    const scrollDiv = (void 0).createElement('div');
    this.addStyles(scrollDiv, {
      width: '100px',
      height: '100px',
      overflow: 'scroll',
      position: 'absolute',
      top: '-9999px',
    });
    (void 0).body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    (void 0).body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  calculateBodyScrollbarWidth: function calculateBodyScrollbarWidth() {
    return (void 0).innerWidth - (void 0).documentElement.offsetWidth;
  },
  getBrowser: function getBrowser() {
    if (!this.browser) {
      const matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser.version = matched.version;
      }
      if (this.browser.chrome)
        this.browser.webkit = true;
      else if (this.browser.webkit)
        this.browser.safari = true;
    }
    return this.browser;
  },
  resolveUserAgent: function resolveUserAgent() {
    const ua = (void 0).userAgent.toLowerCase();
    const match = /(chrome) ([\w.]+)/.exec(ua) || /(webkit) ([\w.]+)/.exec(ua) || /(opera)(?:.*version)? ([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || !ua.includes('compatible') && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];
    return {
      browser: match[1] || '',
      version: match[2] || '0',
    };
  },
  isVisible: function isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod: function invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist: function isExist(element) {
    return !!(element !== null && typeof element !== 'undefined' && element.nodeName && this.getParentNode(element));
  },
  isClient: function isClient() {
    return false;
  },
  focus: function focus(el, options) {
    el && (void 0).activeElement !== el && el.focus(options);
  },
  isFocusableElement: function isFocusableElement(element) {
    const selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return this.isElement(element) ? element.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector)) : false;
  },
  getFocusableElements: function getFocusableElements(element) {
    const selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const focusableElements = this.find(element, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector));
    const visibleFocusableElements = [];
    const _iterator3 = _createForOfIteratorHelper$1(focusableElements); let _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        const focusableElement = _step3.value;
        if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden')
          visibleFocusableElements.push(focusableElement);
      }
    }
    catch (err) {
      _iterator3.e(err);
    }
    finally {
      _iterator3.f();
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement: function getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement: function getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement: function getNextFocusableElement(container, element, selector) {
    const focusableElements = this.getFocusableElements(container, selector);
    const index2 = focusableElements.length > 0
      ? focusableElements.findIndex((el) => {
        return el === element;
      })
      : -1;
    const nextIndex = index2 > -1 && focusableElements.length >= index2 + 1 ? index2 + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  getPreviousElementSibling: function getPreviousElementSibling(element, selector) {
    let previousElement = element.previousElementSibling;
    while (previousElement) {
      if (previousElement.matches(selector))
        return previousElement;
      else
        previousElement = previousElement.previousElementSibling;
    }
    return null;
  },
  getNextElementSibling: function getNextElementSibling(element, selector) {
    let nextElement = element.nextElementSibling;
    while (nextElement) {
      if (nextElement.matches(selector))
        return nextElement;
      else
        nextElement = nextElement.nextElementSibling;
    }
    return null;
  },
  isClickable: function isClickable(element) {
    if (element) {
      const targetNode = element.nodeName;
      const parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === 'INPUT' || targetNode === 'TEXTAREA' || targetNode === 'BUTTON' || targetNode === 'A' || parentNode === 'INPUT' || parentNode === 'TEXTAREA' || parentNode === 'BUTTON' || parentNode === 'A' || !!element.closest('.p-button, .p-checkbox, .p-radiobutton');
    }
    return false;
  },
  applyStyle: function applyStyle(element, style) {
    if (typeof style === 'string') {
      element.style.cssText = style;
    }
    else {
      for (const prop in style)
        element.style[prop] = style[prop];
    }
  },
  isIOS: function isIOS() {
    return /iPad|iPhone|iPod/.test((void 0).userAgent) && !(void 0).MSStream;
  },
  isAndroid: function isAndroid() {
    return /(android)/i.test((void 0).userAgent);
  },
  isTouchDevice: function isTouchDevice() {
    return 'ontouchstart' in void 0 || (void 0).maxTouchPoints > 0 || (void 0).msMaxTouchPoints > 0;
  },
  hasCSSAnimation: function hasCSSAnimation(element) {
    if (element) {
      const style = getComputedStyle(element);
      const animationDuration = Number.parseFloat(style.getPropertyValue('animation-duration') || '0');
      return animationDuration > 0;
    }
    return false;
  },
  hasCSSTransition: function hasCSSTransition(element) {
    if (element) {
      const style = getComputedStyle(element);
      const transitionDuration = Number.parseFloat(style.getPropertyValue('transition-duration') || '0');
      return transitionDuration > 0;
    }
    return false;
  },
  exportCSV: function exportCSV(csv, filename) {
    const blob = new Blob([csv], {
      type: 'application/csv;charset=utf-8;',
    });
    if ((void 0).navigator.msSaveOrOpenBlob) {
      (void 0).msSaveOrOpenBlob(blob, `${filename}.csv`);
    }
    else {
      const link = (void 0).createElement('a');
      if (link.download !== void 0) {
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', `${filename}.csv`);
        link.style.display = 'none';
        (void 0).body.appendChild(link);
        link.click();
        (void 0).body.removeChild(link);
      }
      else {
        csv = `data:text/csv;charset=utf-8,${csv}`;
        (void 0).open(encodeURI(csv));
      }
    }
  },
  blockBodyScroll: function blockBodyScroll() {
    const className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'p-overflow-hidden';
    (void 0).body.style.setProperty('--scrollbar-width', `${this.calculateBodyScrollbarWidth()}px`);
    this.addClass((void 0).body, className);
  },
  unblockBodyScroll: function unblockBodyScroll() {
    const className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'p-overflow-hidden';
    (void 0).body.style.removeProperty('--scrollbar-width');
    this.removeClass((void 0).body, className);
  },
};
function _typeof$2$1(o) {
  '@babel/helpers - typeof';
  return _typeof$2$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$2$1(o);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$1(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1$1(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _toPropertyKey$1$1(t) {
  const i = _toPrimitive$1$1(t, 'string');
  return _typeof$2$1(i) == 'symbol' ? i : String(i);
}
function _toPrimitive$1$1(t, r) {
  if (_typeof$2$1(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r);
    if (_typeof$2$1(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
const ConnectedOverlayScrollHandler = /* @__PURE__ */ (function () {
  function ConnectedOverlayScrollHandler2(element) {
    const listener = arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : function () {
      };
    _classCallCheck$1(this, ConnectedOverlayScrollHandler2);
    this.element = element;
    this.listener = listener;
  }
  _createClass$1(ConnectedOverlayScrollHandler2, [{
    key: 'bindScrollListener',
    value: function bindScrollListener2() {
      this.scrollableParents = DomHandler.getScrollableParents(this.element);
      for (let i = 0; i < this.scrollableParents.length; i++)
        this.scrollableParents[i].addEventListener('scroll', this.listener);
    },
  }, {
    key: 'unbindScrollListener',
    value: function unbindScrollListener2() {
      if (this.scrollableParents) {
        for (let i = 0; i < this.scrollableParents.length; i++)
          this.scrollableParents[i].removeEventListener('scroll', this.listener);
      }
    },
  }, {
    key: 'destroy',
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    },
  }]);
  return ConnectedOverlayScrollHandler2;
}());
function _slicedToArray$4(arr, i) {
  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$2$1(arr, i) || _nonIterableRest$4();
}
function _nonIterableRest$4() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _iterableToArrayLimit$4(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator'];
  if (t != null) {
    let e; let n; let i; let u; const a = []; let f = true; let o = false;
    try {
      if (i = (t = t.call(r)).next, l === 0)
        ;
      else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    }
    catch (r2) {
      o = true, n = r2;
    }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      }
      finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2$1(arr) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _iterableToArray$2(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2$1(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  let it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator'];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2$1(o)) || allowArrayLike) {
      if (it)
        o = it;
      let i = 0;
      const F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }
  let normalCompletion = true; let didErr = false; let err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    const step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    }
    finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$2$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray$2$1(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2$1(o, minLen);
}
function _arrayLikeToArray$2$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _typeof$1$1(o) {
  '@babel/helpers - typeof';
  return _typeof$1$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$1$1(o);
}
const ObjectUtils = {
  equals: function equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.deepEquals(obj1, obj2);
  },
  deepEquals: function deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && _typeof$1$1(a) == 'object' && _typeof$1$1(b) == 'object') {
      const arrA = Array.isArray(a); const arrB = Array.isArray(b); let i; let length; let key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0;) {
          if (!this.deepEquals(a[i], b[i]))
            return false;
        }
        return true;
      }
      if (arrA != arrB)
        return false;
      const dateA = a instanceof Date; const dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      const regexpA = a instanceof RegExp; const regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      const keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0;) {
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      }
      for (i = length; i-- !== 0;) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData: function resolveFieldData(data, field) {
    if (!data || !field)
      return null;

    try {
      const value = data[field];
      if (this.isNotEmpty(value))
        return value;
    }
    catch (_unused) {
    }
    if (Object.keys(data).length) {
      if (this.isFunction(field)) {
        return field(data);
      }
      else if (!field.includes('.')) {
        return data[field];
      }
      else {
        const fields = field.split('.');
        let _value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (_value == null)
            return null;

          _value = _value[fields[i]];
        }
        return _value;
      }
    }
    return null;
  },
  getItemValue: function getItemValue(obj) {
    for (var _len = arguments.length, params = Array.from({ length: _len > 1 ? _len - 1 : 0 }), _key = 1; _key < _len; _key++)
      params[_key - 1] = arguments[_key];

    return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
  },
  filter: function filter(value, fields, filterValue) {
    const filteredItems = [];
    if (value) {
      const _iterator = _createForOfIteratorHelper(value); let _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const item = _step.value;
          const _iterator2 = _createForOfIteratorHelper(fields); var _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              const field = _step2.value;
              if (String(this.resolveFieldData(item, field)).toLowerCase().includes(filterValue.toLowerCase())) {
                filteredItems.push(item);
                break;
              }
            }
          }
          catch (err) {
            _iterator2.e(err);
          }
          finally {
            _iterator2.f();
          }
        }
      }
      catch (err) {
        _iterator.e(err);
      }
      finally {
        _iterator.f();
      }
    }
    return filteredItems;
  },
  reorderArray: function reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList: function findIndexInList(value, list) {
    let index2 = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index2 = i;
          break;
        }
      }
    }
    return index2;
  },
  contains: function contains(value, list) {
    if (value != null && list && list.length) {
      const _iterator3 = _createForOfIteratorHelper(list); let _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          const val = _step3.value;
          if (this.equals(value, val))
            return true;
        }
      }
      catch (err) {
        _iterator3.e(err);
      }
      finally {
        _iterator3.f();
      }
    }
    return false;
  },
  insertIntoOrderedArray: function insertIntoOrderedArray(item, index2, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        const currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index2) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected)
        arr.push(item);
    }
    else {
      arr.push(item);
    }
  },
  removeAccents: function removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1)
      str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/\xC6/g, 'AE').replace(/\xC7/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/\xD0/g, 'D').replace(/\xD1/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/\xDD/g, 'Y').replace(/\xDE/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/\xE6/g, 'ae').replace(/\xE7/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/\xF1/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/\xFE/g, 'p').replace(/[\xFD\xFF]/g, 'y');

    return str;
  },
  getVNodeProp: function getVNodeProp(vnode, prop) {
    if (vnode) {
      const props = vnode.props;
      if (props) {
        const kebabProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;
        return vnode.type.extends.props[prop].type === Boolean && props[propName] === '' ? true : props[propName];
      }
    }
    return null;
  },
  toFlatCase: function toFlatCase(str) {
    return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
  },
  toKebabCase: function toKebabCase(str) {
    return this.isString(str)
      ? str.replace(/(_)/g, '-').replace(/[A-Z]/g, (c, i) => {
        return i === 0 ? c : `-${c.toLowerCase()}`;
      }).toLowerCase()
      : str;
  },
  toCapitalCase: function toCapitalCase(str) {
    return this.isString(str, {
      empty: false,
    })
      ? str[0].toUpperCase() + str.slice(1)
      : str;
  },
  isEmpty: function isEmpty(value) {
    return value === null || value === void 0 || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$1$1(value) === 'object' && Object.keys(value).length === 0;
  },
  isNotEmpty: function isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isFunction: function isFunction2(value) {
    return !!(value && value.constructor && value.call && value.apply);
  },
  isObject: function isObject2(value) {
    const empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
  },
  isDate: function isDate2(value) {
    return value instanceof Date && value.constructor === Date;
  },
  isArray: function isArray2(value) {
    const empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Array.isArray(value) && (empty || value.length !== 0);
  },
  isString: function isString2(value) {
    const empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return typeof value === 'string' && (empty || value !== '');
  },
  isPrintableCharacter: function isPrintableCharacter() {
    const _char = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast: function findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      }
      catch (_unused2) {
        item = _toConsumableArray$2(arr).reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex: function findLastIndex(arr, callback) {
    let index2 = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index2 = arr.findLastIndex(callback);
      }
      catch (_unused3) {
        index2 = arr.lastIndexOf(_toConsumableArray$2(arr).reverse().find(callback));
      }
    }
    return index2;
  },
  sort: function sort(value1, value2) {
    const order = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    const comparator = arguments.length > 3 ? arguments[3] : void 0;
    const nullSortOrder = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1;
    const result = this.compare(value1, value2, comparator, order);
    let finalSortOrder = order;
    if (this.isEmpty(value1) || this.isEmpty(value2))
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;

    return finalSortOrder * result;
  },
  compare: function compare(value1, value2, comparator) {
    const order = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === 'string' && typeof value2 === 'string')
      result = comparator(value1, value2);
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  },
  localeComparator: function localeComparator() {
    return new Intl.Collator(void 0, {
      numeric: true,
    }).compare;
  },
  nestedKeys: function nestedKeys() {
    const _this = this;
    const obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const parentKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return Object.entries(obj).reduce((o, _ref) => {
      const _ref2 = _slicedToArray$4(_ref, 2); const key = _ref2[0]; const value = _ref2[1];
      const currentKey = parentKey ? ''.concat(parentKey, '.').concat(key) : key;
      _this.isObject(value) ? o = o.concat(_this.nestedKeys(value, currentKey)) : o.push(currentKey);
      return o;
    }, []);
  },
  stringify: function stringify(value) {
    const _this2 = this;
    const indent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    const currentIndent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const currentIndentStr = ' '.repeat(currentIndent);
    const nextIndentStr = ' '.repeat(currentIndent + indent);
    if (this.isArray(value)) {
      return `[${value.map((v) => {
        return _this2.stringify(v, indent, currentIndent + indent);
      }).join(', ')}]`;
    }
    else if (this.isDate(value)) {
      return value.toISOString();
    }
    else if (this.isFunction(value)) {
      return value.toString();
    }
    else if (this.isObject(value)) {
      return `{\n${Object.entries(value).map((_ref3) => {
        const _ref4 = _slicedToArray$4(_ref3, 2); const k = _ref4[0]; const v = _ref4[1];
        return ''.concat(nextIndentStr).concat(k, ': ').concat(_this2.stringify(v, indent, currentIndent + indent));
      }).join(',\n')}${'\n'.concat(currentIndentStr)}}`;
    }
    else {
      return JSON.stringify(value);
    }
  },
};
let lastId = 0;
function UniqueComponentId() {
  const prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'pv_id_';
  lastId++;
  return ''.concat(prefix).concat(lastId);
}
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray$5(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$5(o, minLen);
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$5(arr);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function handler() {
  let zIndexes = [];
  const generateZIndex = function generateZIndex2(key, autoZIndex) {
    const baseZIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999;
    const lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key,
      value: newZIndex,
    });
    return newZIndex;
  };
  const revertZIndex = function revertZIndex2(zIndex) {
    zIndexes = zIndexes.filter((obj) => {
      return obj.value !== zIndex;
    });
  };
  const getCurrentZIndex = function getCurrentZIndex2(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value;
  };
  var getLastZIndex = function getLastZIndex2(key, autoZIndex) {
    const baseZIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return _toConsumableArray$1(zIndexes).reverse().find((obj) => {
      return true;
    }) || {
      key,
      value: baseZIndex,
    };
  };
  const getZIndex = function getZIndex2(el) {
    return el ? Number.parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: function set2(key, el, baseZIndex) {
      if (el)
        el.style.zIndex = String(generateZIndex(key, true, baseZIndex));
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = '';
      }
    },
    getCurrent: function getCurrent(key) {
      return getCurrentZIndex(key, true);
    },
  };
}
const ZIndexUtils = handler();
const FilterMatchMode = {
  STARTS_WITH: 'startsWith',
  CONTAINS: 'contains',
  NOT_CONTAINS: 'notContains',
  ENDS_WITH: 'endsWith',
  EQUALS: 'equals',
  NOT_EQUALS: 'notEquals',
  IN: 'in',
  LESS_THAN: 'lt',
  LESS_THAN_OR_EQUAL_TO: 'lte',
  GREATER_THAN: 'gt',
  GREATER_THAN_OR_EQUAL_TO: 'gte',
  BETWEEN: 'between',
  DATE_IS: 'dateIs',
  DATE_IS_NOT: 'dateIsNot',
  DATE_BEFORE: 'dateBefore',
  DATE_AFTER: 'dateAfter',
};
function _typeof$7(o) {
  '@babel/helpers - typeof';
  return _typeof$7 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$7(o);
}
function ownKeys$6(e, r) {
  const t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$6(Object(t), true).forEach((r2) => {
        _defineProperty$6(e, r2, t[r2]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$6(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
  }
  return e;
}
function _defineProperty$6(obj, key, value) {
  key = _toPropertyKey$6(key);
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  else
    obj[key] = value;

  return obj;
}
function _toPropertyKey$6(t) {
  const i = _toPrimitive$6(t, 'string');
  return _typeof$7(i) == 'symbol' ? i : String(i);
}
function _toPrimitive$6(t, r) {
  if (_typeof$7(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r || 'default');
    if (_typeof$7(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
const defaultOptions = {
  ripple: false,
  inputStyle: null,
  locale: {
    startsWith: 'Starts with',
    contains: 'Contains',
    notContains: 'Not contains',
    endsWith: 'Ends with',
    equals: 'Equals',
    notEquals: 'Not equals',
    noFilter: 'No Filter',
    lt: 'Less than',
    lte: 'Less than or equal to',
    gt: 'Greater than',
    gte: 'Greater than or equal to',
    dateIs: 'Date is',
    dateIsNot: 'Date is not',
    dateBefore: 'Date is before',
    dateAfter: 'Date is after',
    clear: 'Clear',
    apply: 'Apply',
    matchAll: 'Match All',
    matchAny: 'Match Any',
    addRule: 'Add Rule',
    removeRule: 'Remove Rule',
    accept: 'Yes',
    reject: 'No',
    choose: 'Choose',
    upload: 'Upload',
    cancel: 'Cancel',
    completed: 'Completed',
    pending: 'Pending',
    fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    chooseYear: 'Choose Year',
    chooseMonth: 'Choose Month',
    chooseDate: 'Choose Date',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    prevMonth: 'Previous Month',
    nextMonth: 'Next Month',
    prevHour: 'Previous Hour',
    nextHour: 'Next Hour',
    prevMinute: 'Previous Minute',
    nextMinute: 'Next Minute',
    prevSecond: 'Previous Second',
    nextSecond: 'Next Second',
    am: 'am',
    pm: 'pm',
    today: 'Today',
    weekHeader: 'Wk',
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: 'mm/dd/yy',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    passwordPrompt: 'Enter a password',
    emptyFilterMessage: 'No results found',
    // @deprecated Use 'emptySearchMessage' option instead.
    searchMessage: '{0} results are available',
    selectionMessage: '{0} items selected',
    emptySelectionMessage: 'No selected item',
    emptySearchMessage: 'No results found',
    emptyMessage: 'No available options',
    aria: {
      trueLabel: 'True',
      falseLabel: 'False',
      nullLabel: 'Not Selected',
      star: '1 star',
      stars: '{star} stars',
      selectAll: 'All items selected',
      unselectAll: 'All items unselected',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      navigation: 'Navigation',
      scrollTop: 'Scroll Top',
      moveTop: 'Move Top',
      moveUp: 'Move Up',
      moveDown: 'Move Down',
      moveBottom: 'Move Bottom',
      moveToTarget: 'Move to Target',
      moveToSource: 'Move to Source',
      moveAllToTarget: 'Move All to Target',
      moveAllToSource: 'Move All to Source',
      pageLabel: 'Page {page}',
      firstPageLabel: 'First Page',
      lastPageLabel: 'Last Page',
      nextPageLabel: 'Next Page',
      prevPageLabel: 'Previous Page',
      rowsPerPageLabel: 'Rows per page',
      jumpToPageDropdownLabel: 'Jump to Page Dropdown',
      jumpToPageInputLabel: 'Jump to Page Input',
      selectRow: 'Row Selected',
      unselectRow: 'Row Unselected',
      expandRow: 'Row Expanded',
      collapseRow: 'Row Collapsed',
      showFilterMenu: 'Show Filter Menu',
      hideFilterMenu: 'Hide Filter Menu',
      filterOperator: 'Filter Operator',
      filterConstraint: 'Filter Constraint',
      editRow: 'Row Edit',
      saveEdit: 'Save Edit',
      cancelEdit: 'Cancel Edit',
      listView: 'List View',
      gridView: 'Grid View',
      slide: 'Slide',
      slideNumber: '{slideNumber}',
      zoomImage: 'Zoom Image',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      rotateRight: 'Rotate Right',
      rotateLeft: 'Rotate Left',
      listLabel: 'Option List',
    },
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER],
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100,
  },
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false,
  },
  unstyled: false,
  csp: {
    nonce: void 0,
  },
};
const PrimeVueSymbol = Symbol();
function switchTheme(currentTheme, newTheme, linkElementId, callback) {
  if (currentTheme !== newTheme) {
    const linkElement = (void 0).getElementById(linkElementId);
    const cloneLinkElement = linkElement.cloneNode(true);
    const newThemeUrl = linkElement.getAttribute('href').replace(currentTheme, newTheme);
    cloneLinkElement.setAttribute('id', `${linkElementId}-clone`);
    cloneLinkElement.setAttribute('href', newThemeUrl);
    cloneLinkElement.addEventListener('load', () => {
      linkElement.remove();
      cloneLinkElement.setAttribute('id', linkElementId);
      if (callback)
        callback();
    });
    linkElement.parentNode && linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
  }
}
const PrimeVue = {
  install: function install(app, options) {
    const configOptions = options ? _objectSpread$6(_objectSpread$6({}, defaultOptions), options) : _objectSpread$6({}, defaultOptions);
    const PrimeVue2 = {
      config: reactive(configOptions),
      changeTheme: switchTheme,
    };
    app.config.globalProperties.$primevue = PrimeVue2;
    app.provide(PrimeVueSymbol, PrimeVue2);
  },
};
function _typeof$6(o) {
  '@babel/helpers - typeof';
  return _typeof$6 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$6(o);
}
function ownKeys$5(e, r) {
  const t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$5(Object(t), true).forEach((r2) => {
        _defineProperty$5(e, r2, t[r2]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$5(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
  }
  return e;
}
function _defineProperty$5(obj, key, value) {
  key = _toPropertyKey$5(key);
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  else
    obj[key] = value;

  return obj;
}
function _toPropertyKey$5(t) {
  const i = _toPrimitive$5(t, 'string');
  return _typeof$6(i) == 'symbol' ? i : String(i);
}
function _toPrimitive$5(t, r) {
  if (_typeof$6(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r || 'default');
    if (_typeof$6(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
function tryOnMounted(fn) {
  const sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
let _id = 0;
function useStyle(css2) {
  const options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const isLoaded = ref(false);
  const cssRef = ref(css2);
  const styleRef = ref(null);
  const defaultDocument = DomHandler.isClient() ? (void 0).document : void 0;
  const _options$document = options.document; const document = _options$document === void 0 ? defaultDocument : _options$document; const _options$immediate = options.immediate; const immediate = _options$immediate === void 0 ? true : _options$immediate; const _options$manual = options.manual; const manual = _options$manual === void 0 ? false : _options$manual; const _options$name = options.name; const name = _options$name === void 0 ? 'style_'.concat(++_id) : _options$name; const _options$id = options.id; const id = _options$id === void 0 ? void 0 : _options$id; const _options$media = options.media; const media = _options$media === void 0 ? void 0 : _options$media; const _options$nonce = options.nonce; const nonce = _options$nonce === void 0 ? void 0 : _options$nonce; const _options$props = options.props; const props = _options$props === void 0 ? {} : _options$props;
  let stop = function stop2() {
  };
  const load = function load2(_css) {
    const _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document)
      return;
    const _styleProps = _objectSpread$5(_objectSpread$5({}, props), _props);
    const _name = _styleProps.name || name; const _id2 = _styleProps.id || id; const _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document.getElementById(_id2) || document.createElement('style');
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css2;
      DomHandler.setAttributes(styleRef.value, {
        type: 'text/css',
        id: _id2,
        media,
        nonce: _nonce,
      });
      document.head.appendChild(styleRef.value);
      DomHandler.setAttribute(styleRef.value, 'data-primevue-style-id', name);
      DomHandler.setAttributes(styleRef.value, _styleProps);
    }
    if (isLoaded.value)
      return;
    stop = watch(cssRef, (value) => {
      styleRef.value.textContent = value;
    }, {
      immediate: true,
    });
    isLoaded.value = true;
  };
  const unload = function unload2() {
    if (!document || !isLoaded.value)
      return;
    stop();
    DomHandler.isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  return {
    id,
    name,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded),
  };
}
function _typeof$5(o) {
  '@babel/helpers - typeof';
  return _typeof$5 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$5(o);
}
function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$3();
}
function _nonIterableRest$3() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray$4(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$4(o, minLen);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$3(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator'];
  if (t != null) {
    let e; let n; let i; let u; const a = []; let f = true; let o = false;
    try {
      if (i = (t = t.call(r)).next, l === 0)
        ;
      else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    }
    catch (r2) {
      o = true, n = r2;
    }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      }
      finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys$4(e, r) {
  const t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$4(Object(t), true).forEach((r2) => {
        _defineProperty$4(e, r2, t[r2]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$4(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
  }
  return e;
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key);
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  else
    obj[key] = value;

  return obj;
}
function _toPropertyKey$4(t) {
  const i = _toPrimitive$4(t, 'string');
  return _typeof$5(i) == 'symbol' ? i : String(i);
}
function _toPrimitive$4(t, r) {
  if (_typeof$5(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r || 'default');
    if (_typeof$5(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
const css$1 = '\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n';
const classes$3 = {};
const inlineStyles = {};
const BaseStyle = {
  name: 'base',
  css: css$1,
  classes: classes$3,
  inlineStyles,
  loadStyle: function loadStyle() {
    const options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.css
      ? useStyle(this.css, _objectSpread$4({
        name: this.name,
      }, options))
      : {};
  },
  getStyleSheet: function getStyleSheet() {
    const extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    const props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      const _props = Object.entries(props).reduce((acc, _ref) => {
        const _ref2 = _slicedToArray$3(_ref, 2); const k = _ref2[0]; const v = _ref2[1];
        return acc.push(''.concat(k, '="').concat(v, '"')) && acc;
      }, []).join(' ');
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, '>').concat(this.css).concat(extendedCSS, '</style>');
    }
    return '';
  },
  extend: function extend(style) {
    return _objectSpread$4(_objectSpread$4({}, this), {}, {
      css: void 0,
    }, style);
  },
};
const classes$2 = {
  root: 'p-badge p-component',
};
const BadgeDirectiveStyle = BaseStyle.extend({
  name: 'badge',
  classes: classes$2,
});
function _typeof$4(o) {
  '@babel/helpers - typeof';
  return _typeof$4 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$4(o);
}
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray$3(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$2(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator'];
  if (t != null) {
    let e; let n; let i; let u; const a = []; let f = true; let o = false;
    try {
      if (i = (t = t.call(r)).next, l === 0)
        ;
      else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    }
    catch (r2) {
      o = true, n = r2;
    }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      }
      finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys$3(e, r) {
  const t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$3(Object(t), true).forEach((r2) => {
        _defineProperty$3(e, r2, t[r2]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$3(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
  }
  return e;
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  else
    obj[key] = value;

  return obj;
}
function _toPropertyKey$3(t) {
  const i = _toPrimitive$3(t, 'string');
  return _typeof$4(i) == 'symbol' ? i : String(i);
}
function _toPrimitive$3(t, r) {
  if (_typeof$4(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r || 'default');
    if (_typeof$4(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
var BaseDirective = {
  _getMeta: function _getMeta() {
    return [ObjectUtils.isObject(arguments.length <= 0 ? void 0 : arguments[0]) ? void 0 : arguments.length <= 0 ? void 0 : arguments[0], ObjectUtils.getItemValue(ObjectUtils.isObject(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function _getConfig(binding, vnode) {
    let _ref, _binding$instance, _vnode$ctx;
    return (_ref = (binding === null || binding === void 0 || (_binding$instance = binding.instance) === null || _binding$instance === void 0 ? void 0 : _binding$instance.$primevue) || (vnode === null || vnode === void 0 || (_vnode$ctx = vnode.ctx) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.appContext) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.config) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.globalProperties) === null || _vnode$ctx === void 0 ? void 0 : _vnode$ctx.$primevue)) === null || _ref === void 0 ? void 0 : _ref.config;
  },
  _getOptionValue: function _getOptionValue(options) {
    const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const fKeys = ObjectUtils.toFlatCase(key).split('.');
    const fKey = fKeys.shift();
    return fKey
      ? ObjectUtils.isObject(options)
        ? BaseDirective._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find((k) => {
          return ObjectUtils.toFlatCase(k) === fKey;
        }) || ''], params), fKeys.join('.'), params)
        : void 0
      : ObjectUtils.getItemValue(options, params);
  },
  _getPTValue: function _getPTValue() {
    let _instance$binding, _instance$$config;
    const instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const obj = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
    const params = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const searchInDefaultPT = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    const getValue = function getValue2() {
      const value = BaseDirective._getOptionValue.apply(BaseDirective, arguments);
      return ObjectUtils.isString(value) || ObjectUtils.isArray(value)
        ? {
            class: value,
          }
        : value;
    };
    const _ref2 = ((_instance$binding = instance.binding) === null || _instance$binding === void 0 || (_instance$binding = _instance$binding.value) === null || _instance$binding === void 0 ? void 0 : _instance$binding.ptOptions) || ((_instance$$config = instance.$config) === null || _instance$$config === void 0 ? void 0 : _instance$$config.ptOptions) || {}; const _ref2$mergeSections = _ref2.mergeSections; const mergeSections = _ref2$mergeSections === void 0 ? true : _ref2$mergeSections; const _ref2$mergeProps = _ref2.mergeProps; const useMergeProps = _ref2$mergeProps === void 0 ? false : _ref2$mergeProps;
    const global2 = searchInDefaultPT ? BaseDirective._useDefaultPT(instance, instance.defaultPT(), getValue, key, params) : void 0;
    const self2 = BaseDirective._usePT(instance, BaseDirective._getPT(obj, instance.$name), getValue, key, _objectSpread$3(_objectSpread$3({}, params), {}, {
      global: global2 || {},
    }));
    const datasets = BaseDirective._getPTDatasets(instance, key);
    return mergeSections || !mergeSections && self2 ? useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, global2, self2, datasets) : _objectSpread$3(_objectSpread$3(_objectSpread$3({}, global2), self2), datasets) : _objectSpread$3(_objectSpread$3({}, self2), datasets);
  },
  _getPTDatasets: function _getPTDatasets() {
    const instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const datasetPrefix = 'data-pc-';
    return _objectSpread$3(_objectSpread$3({}, key === 'root' && _defineProperty$3({}, ''.concat(datasetPrefix, 'name'), ObjectUtils.toFlatCase(instance.$name))), {}, _defineProperty$3({}, ''.concat(datasetPrefix, 'section'), ObjectUtils.toFlatCase(key)));
  },
  _getPT: function _getPT(pt) {
    const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const callback = arguments.length > 2 ? arguments[2] : void 0;
    const getValue = function getValue2(value) {
      let _computedValue$_key;
      const computedValue = callback ? callback(value) : value;
      const _key = ObjectUtils.toFlatCase(key);
      return (_computedValue$_key = computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _computedValue$_key !== void 0 ? _computedValue$_key : computedValue;
    };
    return pt !== null && pt !== void 0 && pt.hasOwnProperty('_usept')
      ? {
          _usept: pt._usept,
          originalValue: getValue(pt.originalValue),
          value: getValue(pt.value),
        }
      : getValue(pt);
  },
  _usePT: function _usePT() {
    const instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const pt = arguments.length > 1 ? arguments[1] : void 0;
    const callback = arguments.length > 2 ? arguments[2] : void 0;
    const key = arguments.length > 3 ? arguments[3] : void 0;
    const params = arguments.length > 4 ? arguments[4] : void 0;
    const fn = function fn2(value2) {
      return callback(value2, key, params);
    };
    if (pt !== null && pt !== void 0 && pt.hasOwnProperty('_usept')) {
      let _instance$$config2;
      const _ref4 = pt._usept || ((_instance$$config2 = instance.$config) === null || _instance$$config2 === void 0 ? void 0 : _instance$$config2.ptOptions) || {}; const _ref4$mergeSections = _ref4.mergeSections; const mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections; const _ref4$mergeProps = _ref4.mergeProps; const useMergeProps = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps;
      const originalValue = fn(pt.originalValue);
      const value = fn(pt.value);
      if (originalValue === void 0 && value === void 0)
        return void 0;
      else if (ObjectUtils.isString(value))
        return value;
      else if (ObjectUtils.isString(originalValue))
        return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, originalValue, value) : _objectSpread$3(_objectSpread$3({}, originalValue), value) : value;
    }
    return fn(pt);
  },
  _useDefaultPT: function _useDefaultPT() {
    const instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const defaultPT = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const callback = arguments.length > 2 ? arguments[2] : void 0;
    const key = arguments.length > 3 ? arguments[3] : void 0;
    const params = arguments.length > 4 ? arguments[4] : void 0;
    return BaseDirective._usePT(instance, defaultPT, callback, key, params);
  },
  _hook: function _hook(directiveName, hookName, el, binding, vnode, prevVnode) {
    let _binding$value, _config$pt;
    const name = 'on'.concat(ObjectUtils.toCapitalCase(hookName));
    const config = BaseDirective._getConfig(binding, vnode);
    const instance = el === null || el === void 0 ? void 0 : el.$instance;
    const selfHook = BaseDirective._usePT(instance, BaseDirective._getPT(binding === null || binding === void 0 || (_binding$value = binding.value) === null || _binding$value === void 0 ? void 0 : _binding$value.pt, directiveName), BaseDirective._getOptionValue, 'hooks.'.concat(name));
    const defaultHook = BaseDirective._useDefaultPT(instance, config === null || config === void 0 || (_config$pt = config.pt) === null || _config$pt === void 0 || (_config$pt = _config$pt.directives) === null || _config$pt === void 0 ? void 0 : _config$pt[directiveName], BaseDirective._getOptionValue, 'hooks.'.concat(name));
    const options = {
      el,
      binding,
      vnode,
      prevVnode,
    };
    selfHook === null || selfHook === void 0 || selfHook(instance, options);
    defaultHook === null || defaultHook === void 0 || defaultHook(instance, options);
  },
  _mergeProps: function _mergeProps() {
    const fn = arguments.length > 1 ? arguments[1] : void 0;
    for (var _len = arguments.length, args = Array.from({ length: _len > 2 ? _len - 2 : 0 }), _key2 = 2; _key2 < _len; _key2++)
      args[_key2 - 2] = arguments[_key2];

    return ObjectUtils.isFunction(fn) ? fn.apply(void 0, args) : mergeProps.apply(void 0, args);
  },
  _extend: function _extend(name) {
    const options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const handleHook = function handleHook2(hook, el, binding, vnode, prevVnode) {
      let _el$$instance$hook, _el$$instance7;
      el._$instances = el._$instances || {};
      const config = BaseDirective._getConfig(binding, vnode);
      const $prevInstance = el._$instances[name] || {};
      const $options = ObjectUtils.isEmpty($prevInstance) ? _objectSpread$3(_objectSpread$3({}, options), options === null || options === void 0 ? void 0 : options.methods) : {};
      el._$instances[name] = _objectSpread$3(_objectSpread$3({}, $prevInstance), {}, {
        /* new instance variables to pass in directive methods */
        $name: name,
        $host: el,
        $binding: binding,
        $modifiers: binding === null || binding === void 0 ? void 0 : binding.modifiers,
        $value: binding === null || binding === void 0 ? void 0 : binding.value,
        $el: $prevInstance.$el || el || void 0,
        $style: _objectSpread$3({
          classes: void 0,
          inlineStyles: void 0,
          loadStyle: function loadStyle2() {
          },
        }, options === null || options === void 0 ? void 0 : options.style),
        $config: config,
        /* computed instance variables */
        defaultPT: function defaultPT() {
          return BaseDirective._getPT(config === null || config === void 0 ? void 0 : config.pt, void 0, (value) => {
            let _value$directives;
            return value === null || value === void 0 || (_value$directives = value.directives) === null || _value$directives === void 0 ? void 0 : _value$directives[name];
          });
        },
        isUnstyled: function isUnstyled() {
          let _el$$instance, _el$$instance2;
          return ((_el$$instance = el.$instance) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.$binding) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.value) === null || _el$$instance === void 0 ? void 0 : _el$$instance.unstyled) !== void 0 ? (_el$$instance2 = el.$instance) === null || _el$$instance2 === void 0 || (_el$$instance2 = _el$$instance2.$binding) === null || _el$$instance2 === void 0 || (_el$$instance2 = _el$$instance2.value) === null || _el$$instance2 === void 0 ? void 0 : _el$$instance2.unstyled : config === null || config === void 0 ? void 0 : config.unstyled;
        },
        /* instance's methods */
        ptm: function ptm() {
          let _el$$instance3;
          const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          const params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return BaseDirective._getPTValue(el.$instance, (_el$$instance3 = el.$instance) === null || _el$$instance3 === void 0 || (_el$$instance3 = _el$$instance3.$binding) === null || _el$$instance3 === void 0 || (_el$$instance3 = _el$$instance3.value) === null || _el$$instance3 === void 0 ? void 0 : _el$$instance3.pt, key, _objectSpread$3({}, params));
        },
        ptmo: function ptmo() {
          const obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
          const params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return BaseDirective._getPTValue(el.$instance, obj, key, params, false);
        },
        cx: function cx() {
          let _el$$instance4, _el$$instance5;
          const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          const params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return !((_el$$instance4 = el.$instance) !== null && _el$$instance4 !== void 0 && _el$$instance4.isUnstyled()) ? BaseDirective._getOptionValue((_el$$instance5 = el.$instance) === null || _el$$instance5 === void 0 || (_el$$instance5 = _el$$instance5.$style) === null || _el$$instance5 === void 0 ? void 0 : _el$$instance5.classes, key, _objectSpread$3({}, params)) : void 0;
        },
        sx: function sx() {
          let _el$$instance6;
          const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          const when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          const params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return when ? BaseDirective._getOptionValue((_el$$instance6 = el.$instance) === null || _el$$instance6 === void 0 || (_el$$instance6 = _el$$instance6.$style) === null || _el$$instance6 === void 0 ? void 0 : _el$$instance6.inlineStyles, key, _objectSpread$3({}, params)) : void 0;
        },
      }, $options);
      el.$instance = el._$instances[name];
      (_el$$instance$hook = (_el$$instance7 = el.$instance)[hook]) === null || _el$$instance$hook === void 0 || _el$$instance$hook.call(_el$$instance7, el, binding, vnode, prevVnode);
      el['$'.concat(name)] = el.$instance;
      BaseDirective._hook(name, hook, el, binding, vnode, prevVnode);
    };
    return {
      created: function created2(el, binding, vnode, prevVnode) {
        handleHook('created', el, binding, vnode, prevVnode);
      },
      beforeMount: function beforeMount2(el, binding, vnode, prevVnode) {
        let _config$csp, _el$$instance8, _el$$instance9, _config$csp2;
        const config = BaseDirective._getConfig(binding, vnode);
        BaseStyle.loadStyle({
          nonce: config === null || config === void 0 || (_config$csp = config.csp) === null || _config$csp === void 0 ? void 0 : _config$csp.nonce,
        });
        !((_el$$instance8 = el.$instance) !== null && _el$$instance8 !== void 0 && _el$$instance8.isUnstyled()) && ((_el$$instance9 = el.$instance) === null || _el$$instance9 === void 0 || (_el$$instance9 = _el$$instance9.$style) === null || _el$$instance9 === void 0
          ? void 0
          : _el$$instance9.loadStyle({
            nonce: config === null || config === void 0 || (_config$csp2 = config.csp) === null || _config$csp2 === void 0 ? void 0 : _config$csp2.nonce,
          }));
        handleHook('beforeMount', el, binding, vnode, prevVnode);
      },
      mounted: function mounted6(el, binding, vnode, prevVnode) {
        let _config$csp3, _el$$instance10, _el$$instance11, _config$csp4;
        const config = BaseDirective._getConfig(binding, vnode);
        BaseStyle.loadStyle({
          nonce: config === null || config === void 0 || (_config$csp3 = config.csp) === null || _config$csp3 === void 0 ? void 0 : _config$csp3.nonce,
        });
        !((_el$$instance10 = el.$instance) !== null && _el$$instance10 !== void 0 && _el$$instance10.isUnstyled()) && ((_el$$instance11 = el.$instance) === null || _el$$instance11 === void 0 || (_el$$instance11 = _el$$instance11.$style) === null || _el$$instance11 === void 0
          ? void 0
          : _el$$instance11.loadStyle({
            nonce: config === null || config === void 0 || (_config$csp4 = config.csp) === null || _config$csp4 === void 0 ? void 0 : _config$csp4.nonce,
          }));
        handleHook('mounted', el, binding, vnode, prevVnode);
      },
      beforeUpdate: function beforeUpdate(el, binding, vnode, prevVnode) {
        handleHook('beforeUpdate', el, binding, vnode, prevVnode);
      },
      updated: function updated4(el, binding, vnode, prevVnode) {
        handleHook('updated', el, binding, vnode, prevVnode);
      },
      beforeUnmount: function beforeUnmount(el, binding, vnode, prevVnode) {
        handleHook('beforeUnmount', el, binding, vnode, prevVnode);
      },
      unmounted: function unmounted6(el, binding, vnode, prevVnode) {
        handleHook('unmounted', el, binding, vnode, prevVnode);
      },
    };
  },
  extend: function extend2() {
    const _BaseDirective$_getMe = BaseDirective._getMeta.apply(BaseDirective, arguments); const _BaseDirective$_getMe2 = _slicedToArray$2(_BaseDirective$_getMe, 2); const name = _BaseDirective$_getMe2[0]; const options = _BaseDirective$_getMe2[1];
    return _objectSpread$3({
      extend: function extend3() {
        const _BaseDirective$_getMe3 = BaseDirective._getMeta.apply(BaseDirective, arguments); const _BaseDirective$_getMe4 = _slicedToArray$2(_BaseDirective$_getMe3, 2); const _name = _BaseDirective$_getMe4[0]; const _options = _BaseDirective$_getMe4[1];
        return BaseDirective.extend(_name, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), options === null || options === void 0 ? void 0 : options.methods), _options));
      },
    }, BaseDirective._extend(name, options));
  },
};
const BaseBadgeDirective = BaseDirective.extend({
  style: BadgeDirectiveStyle,
});
function _typeof$3(o) {
  '@babel/helpers - typeof';
  return _typeof$3 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$3(o);
}
function ownKeys$2(e, r) {
  const t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$2(Object(t), true).forEach((r2) => {
        _defineProperty$2(e, r2, t[r2]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$2(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
  }
  return e;
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  else
    obj[key] = value;

  return obj;
}
function _toPropertyKey$2(t) {
  const i = _toPrimitive$2(t, 'string');
  return _typeof$3(i) == 'symbol' ? i : String(i);
}
function _toPrimitive$2(t, r) {
  if (_typeof$3(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r || 'default');
    if (_typeof$3(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
const BadgeDirective = BaseBadgeDirective.extend('badge', {
  mounted: function mounted(el, binding) {
    const id = `${UniqueComponentId()}_badge`;
    const badge = DomHandler.createElement('span', {
      id,
      'class': !this.isUnstyled() && this.cx('root'),
      'p-bind': this.ptm('root', {
        context: _objectSpread$2(_objectSpread$2({}, binding.modifiers), {}, {
          nogutter: String(binding.value).length === 1,
          dot: binding.value == null,
        }),
      }),
    });
    el.$_pbadgeId = badge.getAttribute('id');
    for (const modifier in binding.modifiers)
      !this.isUnstyled() && DomHandler.addClass(badge, `p-badge-${modifier}`);

    if (binding.value != null) {
      if (_typeof$3(binding.value) === 'object')
        el.$_badgeValue = binding.value.value;
      else
        el.$_badgeValue = binding.value;
      badge.appendChild((void 0).createTextNode(el.$_badgeValue));
      if (String(el.$_badgeValue).length === 1 && !this.isUnstyled())
        !this.isUnstyled() && DomHandler.addClass(badge, 'p-badge-no-gutter');
    }
    else {
      !this.isUnstyled() && DomHandler.addClass(badge, 'p-badge-dot');
    }
    el.setAttribute('data-pd-badge', true);
    !this.isUnstyled() && DomHandler.addClass(el, 'p-overlay-badge');
    el.setAttribute('data-p-overlay-badge', 'true');
    el.appendChild(badge);
    this.$el = badge;
  },
  updated: function updated(el, binding) {
    !this.isUnstyled() && DomHandler.addClass(el, 'p-overlay-badge');
    el.setAttribute('data-p-overlay-badge', 'true');
    if (binding.oldValue !== binding.value) {
      const badge = (void 0).getElementById(el.$_pbadgeId);
      if (_typeof$3(binding.value) === 'object')
        el.$_badgeValue = binding.value.value;
      else
        el.$_badgeValue = binding.value;
      if (!this.isUnstyled()) {
        if (el.$_badgeValue) {
          if (DomHandler.hasClass(badge, 'p-badge-dot'))
            DomHandler.removeClass(badge, 'p-badge-dot');
          if (el.$_badgeValue.length === 1)
            DomHandler.addClass(badge, 'p-badge-no-gutter');
          else
            DomHandler.removeClass(badge, 'p-badge-no-gutter');
        }
        else if (!el.$_badgeValue && !DomHandler.hasClass(badge, 'p-badge-dot')) {
          DomHandler.addClass(badge, 'p-badge-dot');
        }
      }
      badge.innerHTML = '';
      badge.appendChild((void 0).createTextNode(el.$_badgeValue));
    }
  },
});
const classes$1 = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text',
};
const TooltipStyle = BaseStyle.extend({
  name: 'tooltip',
  classes: classes$1,
});
const BaseTooltip = BaseDirective.extend({
  style: TooltipStyle,
});
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray$2(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$1(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator'];
  if (t != null) {
    let e; let n; let i; let u; const a = []; let f = true; let o = false;
    try {
      if (i = (t = t.call(r)).next, l === 0)
        ;
      else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    }
    catch (r2) {
      o = true, n = r2;
    }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      }
      finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _typeof$2(o) {
  '@babel/helpers - typeof';
  return _typeof$2 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$2(o);
}
const Tooltip = BaseTooltip.extend('tooltip', {
  beforeMount: function beforeMount(el, options) {
    let _options$instance$$pr;
    const target = this.getTarget(el);
    target.$_ptooltipModifiers = this.getModifiers(options);
    if (!options.value) { return; }
    else if (typeof options.value === 'string') {
      target.$_ptooltipValue = options.value;
      target.$_ptooltipDisabled = false;
      target.$_ptooltipEscape = true;
      target.$_ptooltipClass = null;
      target.$_ptooltipFitContent = true;
      target.$_ptooltipIdAttr = `${UniqueComponentId()}_tooltip`;
      target.$_ptooltipShowDelay = 0;
      target.$_ptooltipHideDelay = 0;
      target.$_ptooltipAutoHide = true;
    }
    else if (_typeof$2(options.value) === 'object' && options.value) {
      if (ObjectUtils.isEmpty(options.value.value) || options.value.value.trim() === '') { return; }
      else {
        target.$_ptooltipValue = options.value.value;
        target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
        target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : true;
        target.$_ptooltipClass = options.value.class || '';
        target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
        target.$_ptooltipIdAttr = options.value.id || `${UniqueComponentId()}_tooltip`;
        target.$_ptooltipShowDelay = options.value.showDelay || 0;
        target.$_ptooltipHideDelay = options.value.hideDelay || 0;
        target.$_ptooltipAutoHide = !!options.value.autoHide === options.value.autoHide ? options.value.autoHide : true;
      }
    }
    target.$_ptooltipZIndex = (_options$instance$$pr = options.instance.$primevue) === null || _options$instance$$pr === void 0 || (_options$instance$$pr = _options$instance$$pr.config) === null || _options$instance$$pr === void 0 || (_options$instance$$pr = _options$instance$$pr.zIndex) === null || _options$instance$$pr === void 0 ? void 0 : _options$instance$$pr.tooltip;
    this.bindEvents(target, options);
    el.setAttribute('data-pd-tooltip', true);
  },
  updated: function updated2(el, options) {
    const target = this.getTarget(el);
    target.$_ptooltipModifiers = this.getModifiers(options);
    this.unbindEvents(target);
    if (!options.value)
      return;

    if (typeof options.value === 'string') {
      target.$_ptooltipValue = options.value;
      target.$_ptooltipDisabled = false;
      target.$_ptooltipEscape = true;
      target.$_ptooltipClass = null;
      target.$_ptooltipIdAttr = target.$_ptooltipIdAttr || `${UniqueComponentId()}_tooltip`;
      target.$_ptooltipShowDelay = 0;
      target.$_ptooltipHideDelay = 0;
      target.$_ptooltipAutoHide = true;
      this.bindEvents(target, options);
    }
    else if (_typeof$2(options.value) === 'object' && options.value) {
      if (ObjectUtils.isEmpty(options.value.value) || options.value.value.trim() === '') {
        this.unbindEvents(target, options);
      }
      else {
        target.$_ptooltipValue = options.value.value;
        target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
        target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : true;
        target.$_ptooltipClass = options.value.class || '';
        target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
        target.$_ptooltipIdAttr = options.value.id || target.$_ptooltipIdAttr || `${UniqueComponentId()}_tooltip`;
        target.$_ptooltipShowDelay = options.value.showDelay || 0;
        target.$_ptooltipHideDelay = options.value.hideDelay || 0;
        target.$_ptooltipAutoHide = !!options.value.autoHide === options.value.autoHide ? options.value.autoHide : true;
        this.bindEvents(target, options);
      }
    }
  },
  unmounted: function unmounted(el, options) {
    const target = this.getTarget(el);
    this.remove(target);
    this.unbindEvents(target, options);
    if (target.$_ptooltipScrollHandler) {
      target.$_ptooltipScrollHandler.destroy();
      target.$_ptooltipScrollHandler = null;
    }
  },
  timer: void 0,
  methods: {
    bindEvents: function bindEvents(el, options) {
      const _this = this;
      const modifiers = el.$_ptooltipModifiers;
      if (modifiers.focus) {
        el.$_focusevent = function (event) {
          return _this.onFocus(event, options);
        };
        el.addEventListener('focus', el.$_focusevent);
        el.addEventListener('blur', this.onBlur.bind(this));
      }
      else {
        el.$_mouseenterevent = function (event) {
          return _this.onMouseEnter(event, options);
        };
        el.addEventListener('mouseenter', el.$_mouseenterevent);
        el.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        el.addEventListener('click', this.onClick.bind(this));
      }
      el.addEventListener('keydown', this.onKeydown.bind(this));
    },
    unbindEvents: function unbindEvents(el) {
      const modifiers = el.$_ptooltipModifiers;
      if (modifiers.focus) {
        el.removeEventListener('focus', el.$_focusevent);
        el.$_focusevent = null;
        el.removeEventListener('blur', this.onBlur.bind(this));
      }
      else {
        el.removeEventListener('mouseenter', el.$_mouseenterevent);
        el.$_mouseenterevent = null;
        el.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
        el.removeEventListener('click', this.onClick.bind(this));
      }
      el.removeEventListener('keydown', this.onKeydown.bind(this));
    },
    bindScrollListener: function bindScrollListener(el) {
      const _this2 = this;
      if (!el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler = new ConnectedOverlayScrollHandler(el, () => {
          _this2.hide(el);
        });
      }
      el.$_ptooltipScrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener(el) {
      if (el.$_ptooltipScrollHandler)
        el.$_ptooltipScrollHandler.unbindScrollListener();
    },
    onMouseEnter: function onMouseEnter(event, options) {
      const el = event.currentTarget;
      const showDelay = el.$_ptooltipShowDelay;
      this.show(el, options, showDelay);
    },
    onMouseLeave: function onMouseLeave(event) {
      const el = event.currentTarget;
      const hideDelay = el.$_ptooltipHideDelay;
      const autoHide = el.$_ptooltipAutoHide;
      if (!autoHide) {
        const valid = DomHandler.getAttribute(event.target, 'data-pc-name') === 'tooltip' || DomHandler.getAttribute(event.target, 'data-pc-section') === 'arrow' || DomHandler.getAttribute(event.target, 'data-pc-section') === 'text' || DomHandler.getAttribute(event.relatedTarget, 'data-pc-name') === 'tooltip' || DomHandler.getAttribute(event.relatedTarget, 'data-pc-section') === 'arrow' || DomHandler.getAttribute(event.relatedTarget, 'data-pc-section') === 'text';
        !valid && this.hide(el, hideDelay);
      }
      else {
        this.hide(el, hideDelay);
      }
    },
    onFocus: function onFocus(event, options) {
      const el = event.currentTarget;
      const showDelay = el.$_ptooltipShowDelay;
      this.show(el, options, showDelay);
    },
    onBlur: function onBlur(event) {
      const el = event.currentTarget;
      const hideDelay = el.$_ptooltipHideDelay;
      this.hide(el, hideDelay);
    },
    onClick: function onClick(event) {
      const el = event.currentTarget;
      const hideDelay = el.$_ptooltipHideDelay;
      this.hide(el, hideDelay);
    },
    onKeydown: function onKeydown(event) {
      const el = event.currentTarget;
      const hideDelay = el.$_ptooltipHideDelay;
      event.code === 'Escape' && this.hide(event.currentTarget, hideDelay);
    },
    tooltipActions: function tooltipActions(el, options) {
      if (el.$_ptooltipDisabled || !DomHandler.isExist(el))
        return;

      const tooltipElement = this.create(el, options);
      this.align(el);
      !this.isUnstyled() && DomHandler.fadeIn(tooltipElement, 250);
      const $this = this;
      (void 0).addEventListener('resize', function onWindowResize() {
        if (!DomHandler.isTouchDevice())
          $this.hide(el);

        (void 0).removeEventListener('resize', onWindowResize);
      });
      tooltipElement.addEventListener('mouseleave', function onTooltipLeave() {
        $this.hide(el);
        tooltipElement.removeEventListener('mouseleave', onTooltipLeave);
      });
      this.bindScrollListener(el);
      ZIndexUtils.set('tooltip', tooltipElement, el.$_ptooltipZIndex);
    },
    show: function show(el, options, showDelay) {
      const _this3 = this;
      if (showDelay !== void 0) {
        this.timer = setTimeout(() => {
          return _this3.tooltipActions(el, options);
        }, showDelay);
      }
      else {
        this.tooltipActions(el, options);
      }
    },
    tooltipRemoval: function tooltipRemoval(el) {
      this.remove(el);
      this.unbindScrollListener(el);
    },
    hide: function hide(el, hideDelay) {
      const _this4 = this;
      clearTimeout(this.timer);
      if (hideDelay !== void 0) {
        setTimeout(() => {
          return _this4.tooltipRemoval(el);
        }, hideDelay);
      }
      else {
        this.tooltipRemoval(el);
      }
    },
    getTooltipElement: function getTooltipElement(el) {
      return (void 0).getElementById(el.$_ptooltipId);
    },
    create: function create(el) {
      const modifiers = el.$_ptooltipModifiers;
      const tooltipArrow = DomHandler.createElement('div', {
        'class': !this.isUnstyled() && this.cx('arrow'),
        'p-bind': this.ptm('arrow', {
          context: modifiers,
        }),
      });
      const tooltipText = DomHandler.createElement('div', {
        'class': !this.isUnstyled() && this.cx('text'),
        'p-bind': this.ptm('text', {
          context: modifiers,
        }),
      });
      if (!el.$_ptooltipEscape) {
        tooltipText.innerHTML = el.$_ptooltipValue;
      }
      else {
        tooltipText.innerHTML = '';
        tooltipText.appendChild((void 0).createTextNode(el.$_ptooltipValue));
      }
      const container = DomHandler.createElement('div', {
        'id': el.$_ptooltipIdAttr,
        'role': 'tooltip',
        'style': {
          display: 'inline-block',
          width: el.$_ptooltipFitContent ? 'fit-content' : void 0,
          pointerEvents: !this.isUnstyled() && el.$_ptooltipAutoHide && 'none',
        },
        'class': [!this.isUnstyled() && this.cx('root'), el.$_ptooltipClass],
        'p-bind': this.ptm('root', {
          context: modifiers,
        }),
      }, tooltipArrow, tooltipText);
      (void 0).body.appendChild(container);
      el.$_ptooltipId = container.id;
      this.$el = container;
      return container;
    },
    remove: function remove(el) {
      if (el) {
        const tooltipElement = this.getTooltipElement(el);
        if (tooltipElement && tooltipElement.parentElement) {
          ZIndexUtils.clear(tooltipElement);
          (void 0).body.removeChild(tooltipElement);
        }
        el.$_ptooltipId = null;
      }
    },
    align: function align(el) {
      const modifiers = el.$_ptooltipModifiers;
      if (modifiers.top) {
        this.alignTop(el);
        if (this.isOutOfBounds(el)) {
          this.alignBottom(el);
          if (this.isOutOfBounds(el))
            this.alignTop(el);
        }
      }
      else if (modifiers.left) {
        this.alignLeft(el);
        if (this.isOutOfBounds(el)) {
          this.alignRight(el);
          if (this.isOutOfBounds(el)) {
            this.alignTop(el);
            if (this.isOutOfBounds(el)) {
              this.alignBottom(el);
              if (this.isOutOfBounds(el))
                this.alignLeft(el);
            }
          }
        }
      }
      else if (modifiers.bottom) {
        this.alignBottom(el);
        if (this.isOutOfBounds(el)) {
          this.alignTop(el);
          if (this.isOutOfBounds(el))
            this.alignBottom(el);
        }
      }
      else {
        this.alignRight(el);
        if (this.isOutOfBounds(el)) {
          this.alignLeft(el);
          if (this.isOutOfBounds(el)) {
            this.alignTop(el);
            if (this.isOutOfBounds(el)) {
              this.alignBottom(el);
              if (this.isOutOfBounds(el))
                this.alignRight(el);
            }
          }
        }
      }
    },
    getHostOffset: function getHostOffset(el) {
      const offset = el.getBoundingClientRect();
      const targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      const targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop,
      };
    },
    alignRight: function alignRight(el) {
      this.preAlign(el, 'right');
      const tooltipElement = this.getTooltipElement(el);
      const hostOffset = this.getHostOffset(el);
      const left = hostOffset.left + DomHandler.getOuterWidth(el);
      const top = hostOffset.top + (DomHandler.getOuterHeight(el) - DomHandler.getOuterHeight(tooltipElement)) / 2;
      tooltipElement.style.left = `${left}px`;
      tooltipElement.style.top = `${top}px`;
    },
    alignLeft: function alignLeft(el) {
      this.preAlign(el, 'left');
      const tooltipElement = this.getTooltipElement(el);
      const hostOffset = this.getHostOffset(el);
      const left = hostOffset.left - DomHandler.getOuterWidth(tooltipElement);
      const top = hostOffset.top + (DomHandler.getOuterHeight(el) - DomHandler.getOuterHeight(tooltipElement)) / 2;
      tooltipElement.style.left = `${left}px`;
      tooltipElement.style.top = `${top}px`;
    },
    alignTop: function alignTop(el) {
      this.preAlign(el, 'top');
      const tooltipElement = this.getTooltipElement(el);
      const hostOffset = this.getHostOffset(el);
      const left = hostOffset.left + (DomHandler.getOuterWidth(el) - DomHandler.getOuterWidth(tooltipElement)) / 2;
      const top = hostOffset.top - DomHandler.getOuterHeight(tooltipElement);
      tooltipElement.style.left = `${left}px`;
      tooltipElement.style.top = `${top}px`;
    },
    alignBottom: function alignBottom(el) {
      this.preAlign(el, 'bottom');
      const tooltipElement = this.getTooltipElement(el);
      const hostOffset = this.getHostOffset(el);
      const left = hostOffset.left + (DomHandler.getOuterWidth(el) - DomHandler.getOuterWidth(tooltipElement)) / 2;
      const top = hostOffset.top + DomHandler.getOuterHeight(el);
      tooltipElement.style.left = `${left}px`;
      tooltipElement.style.top = `${top}px`;
    },
    preAlign: function preAlign(el, position) {
      const tooltipElement = this.getTooltipElement(el);
      tooltipElement.style.left = '-999px';
      tooltipElement.style.top = '-999px';
      DomHandler.removeClass(tooltipElement, 'p-tooltip-'.concat(tooltipElement.$_ptooltipPosition));
      !this.isUnstyled() && DomHandler.addClass(tooltipElement, 'p-tooltip-'.concat(position));
      tooltipElement.$_ptooltipPosition = position;
      tooltipElement.setAttribute('data-p-position', position);
      const arrowElement = DomHandler.findSingle(tooltipElement, '[data-pc-section="arrow"]');
      arrowElement.style.top = position === 'bottom' ? '0' : position === 'right' || position === 'left' || position !== 'right' && position !== 'left' && position !== 'top' && position !== 'bottom' ? '50%' : null;
      arrowElement.style.bottom = position === 'top' ? '0' : null;
      arrowElement.style.left = position === 'right' || position !== 'right' && position !== 'left' && position !== 'top' && position !== 'bottom' ? '0' : position === 'top' || position === 'bottom' ? '50%' : null;
      arrowElement.style.right = position === 'left' ? '0' : null;
    },
    isOutOfBounds: function isOutOfBounds(el) {
      const tooltipElement = this.getTooltipElement(el);
      const offset = tooltipElement.getBoundingClientRect();
      const targetTop = offset.top;
      const targetLeft = offset.left;
      const width2 = DomHandler.getOuterWidth(tooltipElement);
      const height = DomHandler.getOuterHeight(tooltipElement);
      const viewport = DomHandler.getViewport();
      return targetLeft + width2 > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
    },
    getTarget: function getTarget(el) {
      return DomHandler.hasClass(el, 'p-inputwrapper') ? DomHandler.findSingle(el, 'input') : el;
    },
    getModifiers: function getModifiers(options) {
      if (options.modifiers && Object.keys(options.modifiers).length)
        return options.modifiers;

      if (options.arg && _typeof$2(options.arg) === 'object') {
        return Object.entries(options.arg).reduce((acc, _ref) => {
          const _ref2 = _slicedToArray$1(_ref, 2); const key = _ref2[0]; const val = _ref2[1];
          if (key === 'event' || key === 'position')
            acc[val] = true;
          return acc;
        }, {});
      }
      return {};
    },
  },
});
const classes = {
  root: 'p-ink',
};
const RippleStyle = BaseStyle.extend({
  name: 'ripple',
  classes,
});
const BaseRipple = BaseDirective.extend({
  style: RippleStyle,
});
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray$1(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
const Ripple = BaseRipple.extend('ripple', {
  mounted: function mounted2(el) {
    let _el$$instance;
    const config = el === null || el === void 0 || (_el$$instance = el.$instance) === null || _el$$instance === void 0 ? void 0 : _el$$instance.$config;
    if (config && config.ripple) {
      this.create(el);
      this.bindEvents(el);
      el.setAttribute('data-pd-ripple', true);
    }
  },
  unmounted: function unmounted2(el) {
    this.remove(el);
  },
  timeout: void 0,
  methods: {
    bindEvents: function bindEvents2(el) {
      el.addEventListener('mousedown', this.onMouseDown.bind(this));
    },
    unbindEvents: function unbindEvents2(el) {
      el.removeEventListener('mousedown', this.onMouseDown.bind(this));
    },
    create: function create2(el) {
      const ink = DomHandler.createElement('span', {
        'role': 'presentation',
        'aria-hidden': true,
        'data-p-ink': true,
        'data-p-ink-active': false,
        'class': !this.isUnstyled() && this.cx('root'),
        'onAnimationEnd': this.onAnimationEnd.bind(this),
        'p-bind': this.ptm('root'),
      });
      el.appendChild(ink);
      this.$el = ink;
    },
    remove: function remove2(el) {
      const ink = this.getInk(el);
      if (ink) {
        this.unbindEvents(el);
        ink.removeEventListener('animationend', this.onAnimationEnd);
        ink.remove();
      }
    },
    onMouseDown: function onMouseDown(event) {
      const _this = this;
      const target = event.currentTarget;
      const ink = this.getInk(target);
      if (!ink || getComputedStyle(ink, null).display === 'none')
        return;

      !this.isUnstyled() && DomHandler.removeClass(ink, 'p-ink-active');
      ink.setAttribute('data-p-ink-active', 'false');
      if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
        const d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));
        ink.style.height = `${d}px`;
        ink.style.width = `${d}px`;
      }
      const offset = DomHandler.getOffset(target);
      const x = event.pageX - offset.left + (void 0).body.scrollTop - DomHandler.getWidth(ink) / 2;
      const y = event.pageY - offset.top + (void 0).body.scrollLeft - DomHandler.getHeight(ink) / 2;
      ink.style.top = `${y}px`;
      ink.style.left = `${x}px`;
      !this.isUnstyled() && DomHandler.addClass(ink, 'p-ink-active');
      ink.setAttribute('data-p-ink-active', 'true');
      this.timeout = setTimeout(() => {
        if (ink) {
          !_this.isUnstyled() && DomHandler.removeClass(ink, 'p-ink-active');
          ink.setAttribute('data-p-ink-active', 'false');
        }
      }, 401);
    },
    onAnimationEnd: function onAnimationEnd(event) {
      if (this.timeout)
        clearTimeout(this.timeout);

      !this.isUnstyled() && DomHandler.removeClass(event.currentTarget, 'p-ink-active');
      event.currentTarget.setAttribute('data-p-ink-active', 'false');
    },
    getInk: function getInk(el) {
      return el && el.children
        ? _toConsumableArray(el.children).find((child) => {
          return DomHandler.getAttribute(child, 'data-pc-name') === 'ripple';
        })
        : void 0;
    },
  },
});
const BaseStyleClass = BaseDirective.extend({});
const StyleClass = BaseStyleClass.extend('styleclass', {
  mounted: function mounted3(el, binding) {
    el.setAttribute('data-pd-styleclass', true);
    this.bind(el, binding);
  },
  unmounted: function unmounted3(el) {
    this.unbind(el);
  },
  methods: {
    bind: function bind(el, binding) {
      const _this = this;
      const target = this.resolveTarget(el, binding);
      this.$el = target;
      el.$_pstyleclass_clicklistener = function () {
        if (binding.value.toggleClass) {
          if (DomHandler.hasClass(target, binding.value.toggleClass))
            DomHandler.removeClass(target, binding.value.toggleClass);
          else
            DomHandler.addClass(target, binding.value.toggleClass);
        }
        else {
          if (target.offsetParent === null)
            _this.enter(target, el, binding);
          else
            _this.leave(target, binding);
        }
      };
      el.addEventListener('click', el.$_pstyleclass_clicklistener);
    },
    unbind: function unbind(el) {
      if (el.$_pstyleclass_clicklistener) {
        el.removeEventListener('click', el.$_pstyleclass_clicklistener);
        el.$_pstyleclass_clicklistener = null;
      }
      this.unbindDocumentListener(el);
    },
    enter: function enter(target, el, binding) {
      if (binding.value.enterActiveClass) {
        if (!target.$_pstyleclass_animating) {
          target.$_pstyleclass_animating = true;
          if (binding.value.enterActiveClass === 'slidedown') {
            target.style.height = '0px';
            DomHandler.removeClass(target, 'hidden');
            target.style.maxHeight = `${target.scrollHeight}px`;
            DomHandler.addClass(target, 'hidden');
            target.style.height = '';
          }
          DomHandler.addClass(target, binding.value.enterActiveClass);
          if (binding.value.enterClass)
            DomHandler.removeClass(target, binding.value.enterClass);

          if (binding.value.enterFromClass)
            DomHandler.removeClass(target, binding.value.enterFromClass);

          target.$p_styleclass_enterlistener = function () {
            DomHandler.removeClass(target, binding.value.enterActiveClass);
            if (binding.value.enterToClass)
              DomHandler.addClass(target, binding.value.enterToClass);

            target.removeEventListener('animationend', target.$p_styleclass_enterlistener);
            if (binding.value.enterActiveClass === 'slidedown')
              target.style.maxHeight = '';

            target.$_pstyleclass_animating = false;
          };
          target.addEventListener('animationend', target.$p_styleclass_enterlistener);
        }
      }
      else {
        if (binding.value.enterClass)
          DomHandler.removeClass(target, binding.value.enterClass);

        if (binding.value.enterFromClass)
          DomHandler.removeClass(target, binding.value.enterFromClass);

        if (binding.value.enterToClass)
          DomHandler.addClass(target, binding.value.enterToClass);
      }
      if (binding.value.hideOnOutsideClick)
        this.bindDocumentListener(target, el, binding);
    },
    leave: function leave(target, binding) {
      if (binding.value.leaveActiveClass) {
        if (!target.$_pstyleclass_animating) {
          target.$_pstyleclass_animating = true;
          DomHandler.addClass(target, binding.value.leaveActiveClass);
          if (binding.value.leaveClass)
            DomHandler.removeClass(target, binding.value.leaveClass);

          if (binding.value.leaveFromClass)
            DomHandler.removeClass(target, binding.value.leaveFromClass);

          target.$p_styleclass_leavelistener = function () {
            DomHandler.removeClass(target, binding.value.leaveActiveClass);
            if (binding.value.leaveToClass)
              DomHandler.addClass(target, binding.value.leaveToClass);

            target.removeEventListener('animationend', target.$p_styleclass_leavelistener);
            target.$_pstyleclass_animating = false;
          };
          target.addEventListener('animationend', target.$p_styleclass_leavelistener);
        }
      }
      else {
        if (binding.value.leaveClass)
          DomHandler.removeClass(target, binding.value.leaveClass);

        if (binding.value.leaveFromClass)
          DomHandler.removeClass(target, binding.value.leaveFromClass);

        if (binding.value.leaveToClass)
          DomHandler.addClass(target, binding.value.leaveToClass);
      }
      if (binding.value.hideOnOutsideClick)
        this.unbindDocumentListener(target);
    },
    resolveTarget: function resolveTarget(el, binding) {
      switch (binding.value.selector) {
        case '@next':
          return el.nextElementSibling;
        case '@prev':
          return el.previousElementSibling;
        case '@parent':
          return el.parentElement;
        case '@grandparent':
          return el.parentElement.parentElement;
        default:
          return (void 0).querySelector(binding.value.selector);
      }
    },
    bindDocumentListener: function bindDocumentListener(target, el, binding) {
      const _this2 = this;
      if (!target.$p_styleclass_documentlistener) {
        target.$p_styleclass_documentlistener = function (event) {
          if (!_this2.isVisible(target) || getComputedStyle(target).getPropertyValue('position') === 'static')
            _this2.unbindDocumentListener(target);
          else if (_this2.isOutsideClick(event, target, el))
            _this2.leave(target, binding);
        };
        target.ownerDocument.addEventListener('click', target.$p_styleclass_documentlistener);
      }
    },
    unbindDocumentListener: function unbindDocumentListener(target) {
      if (target.$p_styleclass_documentlistener) {
        target.ownerDocument.removeEventListener('click', target.$p_styleclass_documentlistener);
        target.$p_styleclass_documentlistener = null;
      }
    },
    isVisible: function isVisible2(target) {
      return target.offsetParent !== null;
    },
    isOutsideClick: function isOutsideClick(event, target, el) {
      return !el.isSameNode(event.target) && !el.contains(event.target) && !target.contains(event.target);
    },
  },
});
const FocusTrapStyle = {};
const BaseFocusTrap = BaseDirective.extend({
  style: FocusTrapStyle,
});
function _typeof$1(o) {
  '@babel/helpers - typeof';
  return _typeof$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  const t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$1(Object(t), true).forEach((r2) => {
        _defineProperty$1(e, r2, t[r2]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$1(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  else
    obj[key] = value;

  return obj;
}
function _toPropertyKey$1(t) {
  const i = _toPrimitive$1(t, 'string');
  return _typeof$1(i) == 'symbol' ? i : String(i);
}
function _toPrimitive$1(t, r) {
  if (_typeof$1(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r || 'default');
    if (_typeof$1(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
const FocusTrap = BaseFocusTrap.extend('focustrap', {
  mounted: function mounted4(el, binding) {
    const _ref = binding.value || {}; const disabled = _ref.disabled;
    if (!disabled) {
      this.createHiddenFocusableElements(el, binding);
      this.bind(el, binding);
      this.autoElementFocus(el, binding);
    }
    el.setAttribute('data-pd-focustrap', true);
    this.$el = el;
  },
  updated: function updated3(el, binding) {
    const _ref2 = binding.value || {}; const disabled = _ref2.disabled;
    disabled && this.unbind(el);
  },
  unmounted: function unmounted4(el) {
    this.unbind(el);
  },
  methods: {
    getComputedSelector: function getComputedSelector(selector) {
      return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(selector !== null && selector !== void 0 ? selector : '');
    },
    bind: function bind2(el, binding) {
      const _this = this;
      const _ref3 = binding.value || {}; const onFocusIn = _ref3.onFocusIn; const onFocusOut = _ref3.onFocusOut;
      el.$_pfocustrap_mutationobserver = new MutationObserver((mutationList) => {
        mutationList.forEach((mutation) => {
          if (mutation.type === 'childList' && !el.contains((void 0).activeElement)) {
            const findNextFocusableElement = function findNextFocusableElement2(_el) {
              const focusableElement = DomHandler.isFocusableElement(_el) ? DomHandler.isFocusableElement(_el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) ? _el : DomHandler.getFirstFocusableElement(el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) : DomHandler.getFirstFocusableElement(_el);
              return ObjectUtils.isNotEmpty(focusableElement) ? focusableElement : _el.nextSibling && findNextFocusableElement2(_el.nextSibling);
            };
            DomHandler.focus(findNextFocusableElement(mutation.nextSibling));
          }
        });
      });
      el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_mutationobserver.observe(el, {
        childList: true,
      });
      el.$_pfocustrap_focusinlistener = function (event) {
        return onFocusIn && onFocusIn(event);
      };
      el.$_pfocustrap_focusoutlistener = function (event) {
        return onFocusOut && onFocusOut(event);
      };
      el.addEventListener('focusin', el.$_pfocustrap_focusinlistener);
      el.addEventListener('focusout', el.$_pfocustrap_focusoutlistener);
    },
    unbind: function unbind2(el) {
      el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_focusinlistener && el.removeEventListener('focusin', el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
      el.$_pfocustrap_focusoutlistener && el.removeEventListener('focusout', el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
    },
    autoFocus: function autoFocus(options) {
      this.autoElementFocus(this.$el, {
        value: _objectSpread$1(_objectSpread$1({}, options), {}, {
          autoFocus: true,
        }),
      });
    },
    autoElementFocus: function autoElementFocus(el, binding) {
      const _ref4 = binding.value || {}; const _ref4$autoFocusSelect = _ref4.autoFocusSelector; const autoFocusSelector = _ref4$autoFocusSelect === void 0 ? '' : _ref4$autoFocusSelect; const _ref4$firstFocusableS = _ref4.firstFocusableSelector; const firstFocusableSelector = _ref4$firstFocusableS === void 0 ? '' : _ref4$firstFocusableS; const _ref4$autoFocus = _ref4.autoFocus; const autoFocus2 = _ref4$autoFocus === void 0 ? false : _ref4$autoFocus;
      let focusableElement = DomHandler.getFirstFocusableElement(el, '[autofocus]'.concat(this.getComputedSelector(autoFocusSelector)));
      autoFocus2 && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(el, this.getComputedSelector(firstFocusableSelector)));
      DomHandler.focus(focusableElement);
    },
    onFirstHiddenElementFocus: function onFirstHiddenElementFocus(event) {
      let _this$$el;
      const currentTarget = event.currentTarget; const relatedTarget = event.relatedTarget;
      const focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement || !((_this$$el = this.$el) !== null && _this$$el !== void 0 && _this$$el.contains(relatedTarget)) ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
      DomHandler.focus(focusableElement);
    },
    onLastHiddenElementFocus: function onLastHiddenElementFocus(event) {
      let _this$$el2;
      const currentTarget = event.currentTarget; const relatedTarget = event.relatedTarget;
      const focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement || !((_this$$el2 = this.$el) !== null && _this$$el2 !== void 0 && _this$$el2.contains(relatedTarget)) ? DomHandler.getLastFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
      DomHandler.focus(focusableElement);
    },
    createHiddenFocusableElements: function createHiddenFocusableElements(el, binding) {
      const _this2 = this;
      const _ref5 = binding.value || {}; const _ref5$tabIndex = _ref5.tabIndex; const tabIndex = _ref5$tabIndex === void 0 ? 0 : _ref5$tabIndex; const _ref5$firstFocusableS = _ref5.firstFocusableSelector; const firstFocusableSelector = _ref5$firstFocusableS === void 0 ? '' : _ref5$firstFocusableS; const _ref5$lastFocusableSe = _ref5.lastFocusableSelector; const lastFocusableSelector = _ref5$lastFocusableSe === void 0 ? '' : _ref5$lastFocusableSe;
      const createFocusableElement = function createFocusableElement2(onFocus2) {
        return DomHandler.createElement('span', {
          'class': 'p-hidden-accessible p-hidden-focusable',
          tabIndex,
          'role': 'presentation',
          'aria-hidden': true,
          'data-p-hidden-accessible': true,
          'data-p-hidden-focusable': true,
          'onFocus': onFocus2 === null || onFocus2 === void 0 ? void 0 : onFocus2.bind(_this2),
        });
      };
      const firstFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
      const lastFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
      firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
      firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
      firstFocusableElement.setAttribute('data-pc-section', 'firstfocusableelement');
      lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
      lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
      lastFocusableElement.setAttribute('data-pc-section', 'lastfocusableelement');
      el.prepend(firstFocusableElement);
      el.append(lastFocusableElement);
    },
  },
});
const BaseAnimateOnScroll = BaseDirective.extend({});
function _typeof(o) {
  '@babel/helpers - typeof';
  return _typeof = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2;
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2;
    }, _typeof(o);
}
function ownKeys(e, r) {
  const t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), true).forEach((r2) => {
        _defineProperty(e, r2, t[r2]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  else
    obj[key] = value;

  return obj;
}
function _toPropertyKey(t) {
  const i = _toPrimitive(t, 'string');
  return _typeof(i) == 'symbol' ? i : String(i);
}
function _toPrimitive(t, r) {
  if (_typeof(t) != 'object' || !t)
    return t;
  const e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    const i = e.call(t, r || 'default');
    if (_typeof(i) != 'object')
      return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === 'string')
    return _arrayLikeToArray(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor)
    n = o.constructor.name;
  if (n === 'Map' || n === 'Set')
    return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator'];
  if (t != null) {
    let e; let n; let i; let u; const a = []; let f = true; let o = false;
    try {
      if (i = (t = t.call(r)).next, l === 0)
        ;
      else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    }
    catch (r2) {
      o = true, n = r2;
    }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      }
      finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
const AnimateOnScroll = BaseAnimateOnScroll.extend('animateonscroll', {
  created: function created() {
    this.$value = this.$value || {};
    this.$el.style.opacity = this.$value.enterClass ? '0' : '';
  },
  mounted: function mounted5() {
    this.$el.setAttribute('data-pd-animateonscroll', true);
    this.bindIntersectionObserver();
  },
  unmounted: function unmounted5() {
    this.unbindAnimationEvents();
    this.unbindIntersectionObserver();
  },
  observer: void 0,
  resetObserver: void 0,
  isObserverActive: false,
  animationState: void 0,
  animationEndListener: void 0,
  methods: {
    bindAnimationEvents: function bindAnimationEvents() {
      const _this = this;
      if (!this.animationEndListener) {
        this.animationEndListener = function () {
          DomHandler.removeMultipleClasses(_this.$el, [_this.$value.enterClass, _this.$value.leaveClass]);
          !_this.$modifiers.once && _this.resetObserver.observe(_this.$el);
          _this.unbindAnimationEvents();
        };
        this.$el.addEventListener('animationend', this.animationEndListener);
      }
    },
    bindIntersectionObserver: function bindIntersectionObserver() {
      const _this2 = this;
      const _this$$value = this.$value; const root = _this$$value.root; const rootMargin = _this$$value.rootMargin; const _this$$value$threshol = _this$$value.threshold; const threshold = _this$$value$threshol === void 0 ? 0.5 : _this$$value$threshol;
      const options = {
        root,
        rootMargin,
        threshold,
      };
      this.observer = new IntersectionObserver((_ref) => {
        const _ref2 = _slicedToArray(_ref, 1); const entry2 = _ref2[0];
        if (_this2.isObserverActive) {
          if (entry2.boundingClientRect.top > 0)
            entry2.isIntersecting ? _this2.enter() : _this2.leave();
        }
        else if (entry2.isIntersecting) {
          _this2.enter();
        }
        _this2.isObserverActive = true;
      }, options);
      setTimeout(() => {
        return _this2.observer.observe(_this2.$el);
      }, 0);
      this.resetObserver = new IntersectionObserver((_ref3) => {
        const _ref4 = _slicedToArray(_ref3, 1); const entry2 = _ref4[0];
        if (entry2.boundingClientRect.top > 0 && !entry2.isIntersecting) {
          _this2.$el.style.opacity = _this2.$value.enterClass ? '0' : '';
          DomHandler.removeMultipleClasses(_this2.$el, [_this2.$value.enterClass, _this2.$value.leaveClass]);
          _this2.resetObserver.unobserve(_this2.$el);
        }
        _this2.animationState = void 0;
      }, _objectSpread(_objectSpread({}, options), {}, {
        threshold: 0,
      }));
    },
    enter: function enter2() {
      if (this.animationState !== 'enter' && this.$value.enterClass) {
        this.$el.style.opacity = '';
        DomHandler.removeMultipleClasses(this.$el, this.$value.leaveClass);
        DomHandler.addMultipleClasses(this.$el, this.$value.enterClass);
        this.$modifiers.once && this.unbindIntersectionObserver(this.$el);
        this.bindAnimationEvents();
        this.animationState = 'enter';
      }
    },
    leave: function leave2() {
      if (this.animationState !== 'leave' && this.$value.leaveClass) {
        this.$el.style.opacity = this.$value.enterClass ? '0' : '';
        DomHandler.removeMultipleClasses(this.$el, this.$value.enterClass);
        DomHandler.addMultipleClasses(this.$el, this.$value.leaveClass);
        this.bindAnimationEvents();
        this.animationState = 'leave';
      }
    },
    unbindAnimationEvents: function unbindAnimationEvents() {
      if (this.animationEndListener) {
        this.$el.removeEventListener('animationend', this.animationEndListener);
        this.animationEndListener = void 0;
      }
    },
    unbindIntersectionObserver: function unbindIntersectionObserver() {
      let _this$observer, _this$resetObserver;
      (_this$observer = this.observer) === null || _this$observer === void 0 || _this$observer.unobserve(this.$el);
      (_this$resetObserver = this.resetObserver) === null || _this$resetObserver === void 0 || _this$resetObserver.unobserve(this.$el);
      this.isObserverActive = false;
    },
  },
});
const primevue_plugin_OjIYEbjTZV = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  let _a;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const config = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.primevue) ?? {};
  const { usePrimeVue = true, options = {} } = config;
  const pt = {};
  usePrimeVue && vueApp.use(PrimeVue, { ...options, ...pt });
  vueApp.directive('badge', BadgeDirective);
  vueApp.directive('tooltip', Tooltip);
  vueApp.directive('ripple', Ripple);
  vueApp.directive('styleclass', StyleClass);
  vueApp.directive('focustrap', FocusTrap);
  vueApp.directive('animateonscroll', AnimateOnScroll);
});
const preference = 'system';
const plugin_server_CE7SCTVGzG = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  let _a;
  const colorMode = ((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext)
    ? ref({})
    : useState('color-mode', () => reactive({
      preference,
      value: preference,
      unknown: true,
      forced: false,
    })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== 'system') {
      colorMode.value = htmlAttrs['data-color-mode-forced'] = forcedColorMode;
      colorMode.forced = true;
    }
    else if (forcedColorMode === 'system') {
      console.warn('You cannot force the colorMode to system at the page level.');
    }
  });
  nuxtApp.provide('colorMode', colorMode);
});
const unocss_l9LUSjs6VK = /* @__PURE__ */ defineNuxtPlugin(() => {
});
const css = '';
const font_fallback_inlining_plugin_server_o6CRfa2k9u = /* @__PURE__ */ defineNuxtPlugin(() => {
  useHead({
    style: [{
      innerHTML: `${css} `,
    }],
  });
});
const i18n_sVHQBgnb3t = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$i18n.onBeforeLanguageSwitch = (_oldLocale, _newLocale, _isInitialSetup, nuxtApp2) => {
  };
  nuxtApp.$i18n.onLanguageSwitched = (_oldLocale, _newLocale) => {
    (void 0).querySelector('html').setAttribute('dir', nuxtApp.$i18n.localeProperties.value.dir);
  };
});
const defaultSwalOptions = {
  position: 'center',
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong! Try again',
  showConfirmButton: true,
  showCancelButton: true,
  showDenyButton: true,
  allowOutsideClick: false,
  allowEscapeKey: false,
  showLoaderOnConfirm: true,
  showCloseButton: true,
  buttonsStyling: true,
  confirmButtonColor: 'var(--swal-confirm-btn-color)',
  cancelButtonColor: 'var(--swal-cancel-btn-color)',
  denyButtonColor: 'var(--swal-deny-btn-color)',
  background: 'var(--swal-bg)',
  color: 'var(--swal-text-color)',
  // customClass: {
  //   confirmButton: 'btn-primary',
  //   denyButton: 'btn-light',
  //   cancelButton: 'btn-light',
  // },
  confirmButtonText: 'OK',
};
function useSweetAlert(options, confirmCallback, dismissedCallback, deniedCallback) {
  const preConfirm = () => {
    return new Promise((resolve2) => {
      setTimeout(() => {
        resolve2();
      }, 500);
    });
  };
  Swal.fire(Object.assign({}, defaultSwalOptions, options, {
    preConfirm,
  })).then((result) => {
    if (result.isConfirmed && confirmCallback)
      confirmCallback();
    else if (result.isDismissed && dismissedCallback)
      dismissedCallback();
    else if (result.isDenied && deniedCallback)
      deniedCallback();
  });
}
const sweetAlert_hcK8S2RO6y = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('swal', Swal);
  nuxtApp.provide('useSweetAlert', useSweetAlert);
});
const plugins = [
  unhead_pa5VDruYua,
  plugin$1,
  plugin,
  revive_payload_server_h2ecFZgka5,
  components_plugin_gDA1dPA3uF,
  plugin_server_cn5LiYP7bQ,
  plugin_OggO9PRE1S,
  i18n_4gMi5uGCu8,
  primevue_plugin_OjIYEbjTZV,
  plugin_server_CE7SCTVGzG,
  unocss_l9LUSjs6VK,
  font_fallback_inlining_plugin_server_o6CRfa2k9u,
  i18n_sVHQBgnb3t,
  sweetAlert_hcK8S2RO6y,
];
const layouts = {
  default: () => import('./default-C3s4TwZ5.mjs').then(m => m.default || m),
  home: () => import('./home-BeiKsV5B.mjs').then(m => m.default || m),
  internal: () => import('./internal-C5Ftbcs-.mjs').then(m => m.default || m),
  admin: () => import('./admin-DzqVjNYH.mjs').then(m => m.default || m),
  auth: () => import('./auth-C7x7rz02.mjs').then(m => m.default || m),
};
const LayoutLoader = defineComponent({
  name: 'LayoutLoader',
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object,
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then(r => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  },
});
const __nuxt_component_0 = defineComponent({
  name: 'NuxtLayout',
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null,
    },
    fallback: {
      type: [String, Object],
      default: null,
    },
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? 'default';
      if (layout2 && !(layout2 in layouts)) {
        if (layout2 !== 'default')
          console.warn(`Invalid layout \`${layout2}\` selected.`);

        if (props.fallback)
          layout2 = unref(props.fallback);
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    {
      nuxtApp._isNuxtLayoutUsed = true;
    }
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps,
            },
            context.slots,
          ),
        }),
      }).default();
    };
  },
});
const LayoutProvider = defineComponent({
  name: 'NuxtLayoutProvider',
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean],
    },
    layoutProps: {
      type: Object,
    },
    hasTransition: {
      type: Boolean,
    },
    shouldProvide: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: route => name === (route.meta.layout ?? 'default'),
      });
    }
    return () => {
      let _a, _b;
      if (!name || typeof name === 'string' && !(name in layouts))
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);

      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots,
      );
    };
  },
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true,
    },
    route: {
      type: Object,
      required: true,
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean,
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  },
});
const __nuxt_component_1 = defineComponent({
  name: 'NuxtPage',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
    },
    transition: {
      type: [Boolean, Object],
      default: void 0,
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0,
    },
    route: {
      type: Object,
    },
    pageKey: {
      type: [Function, String],
      default: null,
    },
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev)
          nuxtApp.callHook('page:loading:start');
      });
    }
    {
      nuxtApp._isNuxtPageUsed = true;
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key)
            nuxtApp.callHook('page:loading:end');

          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook('page:transition:finish', routeProps.Component);
            } },
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook('page:start', routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook('page:finish', routeProps.Component).then(() => nuxtApp.callHook('page:loading:end')).finally(done));
                },
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef,
                  });
                  return providerVNode;
                },
              }),
            ),
          ).default();
          return vnode;
        },
      });
    };
  },
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map(prop => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0,
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork)
    return false;

  const index2 = newRoute.matched.findIndex((m) => {
    let _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index2 < newRoute.matched.length - 1;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: 'app',
  __ssrInlineRender: true,
  setup(__props) {
    const {
      locale,
      t,
    } = useI18n();
    useHead({
      htmlAttrs: {
        lang: locale,
      },
      titleTemplate(title) {
        return title ? `${title} - ${t('site.name')}` : `${t('site.name')}`;
      },
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GridCols = resolveComponent('GridCols');
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push('<!--[-->');
      _push(ssrRenderComponent(_component_GridCols, null, null, _parent));
      _push('<!-- <VitePwaManifest /> --><!-- <CookieBanner /> -->');
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          else
            return [createVNode(_component_NuxtPage)];
        }),
        _: 1,
        /* STABLE */
      }, _parent));
      _push('<!--]-->');
    };
  },
});
function _export_sfc(sfc, props) {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props)
    target[key] = val;

  return target;
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('app.vue');
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/app.vue']]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: 'error',
  __ssrInlineRender: true,
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: 'h-screen bg-slate-100 p-20 text-slate-900 dark:bg-slate-900 dark:text-white',
      }, _attrs))}><div class="mx-auto w-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800"><div class="relative flex flex-col justify-center gap-y-4 sm:h-40 sm:gap-y-5"><p class="mb-[-1em] font-semibold text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.error.statusCode)}</p><h1 class="text-xl font-medium">`);
      if (_ctx.error.statusCode === 404)
        _push(`<!--[-->${ssrInterpolate(_ctx.$t('error.page-not-found'))}<!--]-->`);
      else
        _push(`<!--[-->${ssrInterpolate(_ctx.error.message)}<!--]-->`);

      _push(`</h1><button type="button" class="mx-auto mt-3 w-[10rem] rounded-lg border border-slate-200 bg-gray-50 p-4 py-2.5 text-gray-700 hover:cursor-pointer hover:border-slate-200 hover:bg-slate-100 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">${ssrInterpolate(_ctx.$t('error.return'))}</button></div></div></div>`);
    };
  },
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('error.vue');
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/error.vue']]);
const _sfc_main = {
  __name: 'nuxt-root',
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');
    if (results && results.some(i => i && 'then' in i))
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.');

    const error2 = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error2))
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error2) }, null, _parent));
          else if (unref(islandContext))
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          else if (unref(SingleRenderer))
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          else
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
        },
        _: 1,
        /* STABLE */
      });
    };
  },
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12.12_@unocss+reset_h7mcoc2ebmazgsca6qpbz5rcxi/node_modules/nuxt/dist/app/components/nuxt-root.vue');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12.12_@unocss+reset_h7mcoc2ebmazgsca6qpbz5rcxi/node_modules/nuxt/dist/app/components/nuxt-root.vue']]);
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook('app:created', vueApp);
    }
    catch (error2) {
      await nuxt.hooks.callHook('app:error', error2);
      nuxt.payload.error = nuxt.payload.error || createError(error2);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse)
      throw new Error('skipping render');

    return vueApp;
  };
}
const entry$1 = ssrContext => entry(ssrContext);

export { withoutTrailingSlash as A, BaseStyle as B, DomHandler as D, ObjectUtils as O, Ripple as R, UniqueComponentId as U, ZIndexUtils as Z, _export_sfc as _, useNuxtApp as a, useRouter as b, useRoute as c, __nuxt_component_0$1 as d, entry$1 as default, defineNuxtRouteMiddleware as e, useAppConfig as f, en as g, ar as h, useRequestEvent as i, hasProtocol as j, joinURL as k, encodeParam as l, encodePath as m, useRuntimeConfig as n, useLocaleHead as o, parseURL as p, useStyle as q, useState as r, useI18n as s, useCookie as t, useHead as u, defineStore as v, withLeadingSlash as w, parseQuery as x, navigateTo as y, withTrailingSlash as z };
// # sourceMappingURL=server.mjs.map
