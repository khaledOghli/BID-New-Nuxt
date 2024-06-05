import {
  Fragment,
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode,
  createSlots,
  createVNode,
  defineComponent,
  guardReactiveProps,
  h,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useSSRContext,
  withCtx,
  withDirectives,
} from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs'
import { defu } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs'
import { appendHeader } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs'
import {
  ssrGetDirectiveProps,
  ssrInterpolate,
  ssrRenderAttrs,
  ssrRenderClass,
  ssrRenderComponent,
  ssrRenderSlot,
} from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs'
import {
  B as BaseStyle,
  D as DomHandler,
  O as ObjectUtils,
  R as Ripple,
  U as UniqueComponentId,
  Z as ZIndexUtils,
  _ as _export_sfc,
  l as encodeParam,
  m as encodePath,
  j as hasProtocol,
  k as joinURL,
  p as parseURL,
  u as useHead,
  o as useLocaleHead,
  a as useNuxtApp,
  i as useRequestEvent,
  n as useRuntimeConfig,
  w as withLeadingSlash,
} from './server.mjs'
import { _ as __nuxt_component_0$1 } from './nuxt-link-CLfuIrY3.mjs'
import { a as script$1$1, s as script$6 } from './baseicon.esm-DJCrXsDq.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-router@4.3.2_vue@3.4.27_typescript@5.4.5_/node_modules/vue-router/dist/vue-router.node.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs'
import '../_/renderer.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@unhead+ssr@1.9.11/node_modules/@unhead/ssr/dist/index.mjs'
import '../runtime.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/cheerio@1.0.0-rc.12/node_modules/cheerio/lib/esm/slim.js'
import 'node:crypto'
import 'node:fs'
import 'node:url'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/xss@1.0.15/node_modules/xss/lib/index.js'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ipx@2.1.0_ioredis@5.4.1/node_modules/ipx/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unhead@1.9.11/node_modules/unhead/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@unhead+shared@1.9.11/node_modules/@unhead/shared/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-devtools-stub@0.1.0/node_modules/vue-devtools-stub/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/cookie-es@1.1.0/node_modules/cookie-es/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/sweetalert2@11.11.0/node_modules/sweetalert2/dist/sweetalert2.all.js'

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error(`Failed to get image meta for ${url}`, `${err}`)
    return {
      width: 0,
      height: 0,
      ratio: 0,
    }
  })
  return meta
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import(
      'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/image-meta@0.2.0/node_modules/image-meta/dist/index.mjs'
    ).then(r => r.imageMeta)
    const data2 = await fetch(url).then(res => res.buffer())
    const metadata = imageMeta2(data2)
    if (!metadata)
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`)

    const { width, height } = metadata
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0,
    }
    return meta
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue
  }
}
function createOperationsGenerator({ formatter, keyMap, joinWith = '/', valueMap } = {}) {
  if (!formatter)
    formatter = (key, value) => `${key}=${value}`

  if (keyMap && typeof keyMap !== 'function')
    keyMap = createMapper(keyMap)

  const map = valueMap || {}
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== 'function')
      map[valueKey] = createMapper(map[valueKey])
  })
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        const mapper = map[key]
        if (typeof mapper === 'function')
          value = mapper(modifiers[key])

        key = typeof keyMap === 'function' ? keyMap(key) : key
        return formatter(key, value)
      })
    return operations.join(joinWith)
  }
}
function parseSize(input = '') {
  if (typeof input === 'number')
    return input

  if (typeof input === 'string') {
    if (input.replace('px', '').match(/^\d+$/g))
      return Number.parseInt(input, 10)
  }
}
function parseDensities(input = '') {
  if (input === void 0 || !input.length)
    return []

  const densities = /* @__PURE__ */ new Set()
  for (const density of input.split(' ')) {
    const d = Number.parseInt(density.replace('x', ''))
    if (d)
      densities.add(d)
  }
  return Array.from(densities)
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error(
      '`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)',
    )
  }
  if (Array.from(densities).some(d => d > 2)) {
    const _densities = densities
    if (!_densities._warned) {
      console.warn(
        '[nuxt] [image] Density values above `2` are not recommended. See https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio.',
      )
    }
    _densities._warned = true
  }
}
function parseSizes(input) {
  const sizes = {}
  if (typeof input === 'string') {
    for (const entry of input.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(':')
      if (s.length !== 2)
        sizes['1px'] = s[0].trim()
      else
        sizes[s[0].trim()] = s[1].trim()
    }
  }
  else {
    Object.assign(sizes, input)
  }
  return sizes
}
function prerenderStaticImages(src = '', srcset = '') {
  const paths = [src, ...srcset.split(', ').map(s => s.trim().split(' ')[0].trim())].filter(
    s => s && s.includes('/_ipx/'),
  )
  if (!paths.length)
    return

  appendHeader(
    useRequestEvent(),
    'x-nitro-prerender',
    paths.map(p => encodeURIComponent(p)).join(', '),
  )
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions,
  }
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options)
    {
      prerenderStaticImages(image.url)
    }
    return image
  }
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {}),
    }).url
  }
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) =>
      $img(source, modifiers, { ...globalOptions.presets[presetName], ...options })
  }
  $img.options = globalOptions
  $img.getImage = getImage2
  $img.getMeta = (input, options) => getMeta(ctx, input, options)
  $img.getSizes = (input, options) => getSizes(ctx, input, options)
  ctx.$img = $img
  return $img
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options })
  if (typeof image.getMeta === 'function')
    return await image.getMeta()
  else
    return await imageMeta(ctx, image.url)
}
function resolveImage(ctx, input, options) {
  let _a, _b
  if (input && typeof input !== 'string') {
    throw new TypeError(
      `input must be a string (received ${typeof input}: ${JSON.stringify(input)})`,
    )
  }
  if (!input || input.startsWith('data:')) {
    return {
      url: input,
    }
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider)
  const preset = getPreset(ctx, options.preset)
  input = hasProtocol(input) ? input : withLeadingSlash(input)
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base))
        input = joinURL(ctx.options.alias[base], input.substr(base.length))
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host
    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input,
      }
    }
  }
  const _options = defu(options, preset, defaults)
  _options.modifiers = { ..._options.modifiers }
  const expectedFormat = _options.modifiers.format
  if ((_a = _options.modifiers) == null ? void 0 : _a.width)
    _options.modifiers.width = parseSize(_options.modifiers.width)

  if ((_b = _options.modifiers) == null ? void 0 : _b.height)
    _options.modifiers.height = parseSize(_options.modifiers.height)

  const image = provider.getImage(input, _options, ctx)
  image.format = image.format || expectedFormat || ''
  return image
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name]
  if (!provider)
    throw new Error(`Unknown provider: ${name}`)

  return provider
}
function getPreset(ctx, name) {
  if (!name)
    return {}

  if (!ctx.options.presets[name])
    throw new Error(`Unknown preset: ${name}`)

  return ctx.options.presets[name]
}
function getSizes(ctx, input, opts) {
  let _a, _b, _c, _d, _e
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width)
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height)
  const sizes = parseSizes(opts.sizes)
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim())
    ? parseDensities(opts.densities.trim())
    : ctx.options.densities
  checkDensities(densities)
  const hwRatio = width && height ? height / width : 0
  const sizeVariants = []
  const srcsetVariants = []
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx)
      if (variant === void 0)
        continue

      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`,
      })
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density),
        })
      }
    }
    finaliseSizeVariants(sizeVariants)
  }
  else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0]
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx)
      if (variant === void 0) {
        variant = {
          size: '',
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height,
        }
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density),
      })
    }
  }
  finaliseSrcsetVariants(srcsetVariants)
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1]
  const sizesVal = sizeVariants.length
    ? sizeVariants.map(v => `${v.media ? `${v.media} ` : ''}${v.size}`).join(', ')
    : void 0
  const suffix = sizesVal ? 'w' : 'x'
  const srcsetVal = srcsetVariants.map(v => `${v.src} ${v.width}${suffix}`).join(', ')
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src,
  }
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth
    = (ctx.options.screens && ctx.options.screens[key]) || Number.parseInt(key)
  const isFluid = size.endsWith('vw')
  if (!isFluid && /^\d+$/.test(size))
    size = `${size}px`

  if (!isFluid && !size.endsWith('px'))
    return void 0

  let _cWidth = Number.parseInt(size)
  if (!screenMaxWidth || !_cWidth)
    return void 0

  if (isFluid)
    _cWidth = Math.round((_cWidth / 100) * screenMaxWidth)

  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight,
  }
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0,
    },
    opts,
  )
}
function finaliseSizeVariants(sizeVariants) {
  let _a
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth)
  let previousMedia = null
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i]
    if (sizeVariant.media === previousMedia)
      sizeVariants.splice(i, 1)

    previousMedia = sizeVariant.media
  }
  for (let i = 0; i < sizeVariants.length; i++)
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || ''
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width)
  let previousWidth = null
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i]
    if (sizeVariant.width === previousWidth)
      srcsetVariants.splice(i, 1)

    previousWidth = sizeVariant.width
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: 'f',
    fit: 'fit',
    width: 'w',
    height: 'h',
    resize: 's',
    quality: 'q',
    background: 'b',
  },
  joinWith: '&',
  formatter: (key, val) => `${encodeParam(key)}_${encodeParam(val)}`,
})
function getImage(src, { modifiers = {}, baseURL } = {}, ctx) {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`
    delete modifiers.width
    delete modifiers.height
  }
  const params = operationsGenerator(modifiers) || '_'
  if (!baseURL)
    baseURL = joinURL(ctx.options.nuxt.baseURL, '/_ipx')

  return {
    url: joinURL(baseURL, params, encodePath(src)),
  }
}
const validateDomains = true
const supportsAlias = true
const ipxRuntime$XjtYOzrVuX = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains,
})
const imageOptions = {
  screens: {
    'xs': 320,
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    'xxl': 1536,
    '2xl': 1536,
  },
  presets: {},
  provider: 'ipx',
  domains: [],
  alias: {},
  densities: [1, 2],
  format: ['png', 'jpeg', 'webp', 'webp'],
  quality: 80,
}
imageOptions.providers = {
  ipx: { provider: ipxRuntime$XjtYOzrVuX, defaults: {} },
}
function useImage() {
  const config = useRuntimeConfig()
  const nuxtApp = useNuxtApp()
  return (
    nuxtApp.$img
    || nuxtApp._img
    || (nuxtApp._img = createImage({
      ...imageOptions,
      nuxt: {
        baseURL: config.app.baseURL,
      },
    }))
  )
}
function markFeatureUsage(featureName) {
  let _a;
  (_a = performance == null ? void 0 : performance.mark) == null
    ? void 0
    : _a.call(performance, 'mark_feature_usage', {
      detail: {
        feature: featureName,
      },
    })
}
const baseImageProps = {
  // input source
  src: { type: String, default: void 0 },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: {
    type: [Boolean, Object],
    default: void 0,
  },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: val => ['lazy', 'eager'].includes(val),
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: val => ['anonymous', 'use-credentials', '', true, false].includes(val),
  },
  decoding: {
    type: String,
    default: void 0,
    validator: val => ['async', 'auto', 'sync'].includes(val),
  },
  // csp
  nonce: { type: [String], default: void 0 },
}
function useBaseImage(props) {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset,
    }
  })
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? 'anonymous' : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce,
    }
  })
  const $img = useImage()
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit,
    }
  })
  return {
    options,
    attrs,
    modifiers,
  }
}
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  placeholderClass: { type: String, default: void 0 },
}
const __nuxt_component_1 = defineComponent({
  name: 'NuxtImg',
  props: imgProps,
  emits: ['load', 'error'],
  setup: (props, ctx) => {
    const $img = useImage()
    const _base = useBaseImage(props)
    const placeholderLoaded = ref(false)
    const imgEl = ref()
    const sizes = computed(() =>
      $img.getSizes(props.src, {
        ..._base.options.value,
        sizes: props.sizes,
        densities: props.densities,
        modifiers: {
          ..._base.modifiers.value,
          width: parseSize(props.width),
          height: parseSize(props.height),
        },
      }),
    )
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, 'data-nuxt-img': '' }
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes
        attrs2.srcset = sizes.value.srcset
      }
      return attrs2
    })
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder
      if (placeholder2 === '')
        placeholder2 = true

      if (!placeholder2 || placeholderLoaded.value)
        return false

      if (typeof placeholder2 === 'string')
        return placeholder2

      const size = Array.isArray(placeholder2)
        ? placeholder2
        : typeof placeholder2 === 'number'
          ? [placeholder2, placeholder2]
          : [10, 10]
      return $img(
        props.src,
        {
          ..._base.modifiers.value,
          width: size[0],
          height: size[1],
          quality: size[2] || 50,
          blur: size[3] || 3,
        },
        _base.options.value,
      )
    })
    const mainSrc = computed(() =>
      props.sizes
        ? sizes.value.src
        : $img(props.src, _base.modifiers.value, _base.options.value),
    )
    const src = computed(() => (placeholder.value ? placeholder.value : mainSrc.value))
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every(v => v)
      useHead({
        link: [
          {
            rel: 'preload',
            as: 'image',
            nonce: props.nonce,
            ...(!isResponsive
              ? { href: src.value }
              : {
                  href: sizes.value.src,
                  imagesizes: sizes.value.sizes,
                  imagesrcset: sizes.value.srcset,
                }),
            ...(typeof props.preload !== 'boolean' && props.preload.fetchPriority
              ? { fetchpriority: props.preload.fetchPriority }
              : {}),
          },
        ],
      })
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset)
    }
    const nuxtApp = useNuxtApp()
    const initialLoad = nuxtApp.isHydrating
    onMounted(() => {
      if (placeholder.value) {
        const img = new Image()
        img.src = mainSrc.value
        if (props.sizes) {
          img.sizes = sizes.value.sizes || ''
          img.srcset = sizes.value.srcset
        }
        img.onload = (event) => {
          placeholderLoaded.value = true
          ctx.emit('load', event)
        }
        markFeatureUsage('nuxt-image')
        return
      }
      if (!imgEl.value)
        return

      if (imgEl.value.complete && initialLoad) {
        if (imgEl.value.getAttribute('data-error'))
          ctx.emit('error', new Event('error'))
        else
          ctx.emit('load', new Event('load'))
      }
      imgEl.value.onload = (event) => {
        ctx.emit('load', event)
      }
      imgEl.value.onerror = (event) => {
        ctx.emit('error', event)
      }
    })
    return () =>
      h('img', {
        ref: imgEl,
        ...{ onerror: 'this.setAttribute(\'data-error\', 1)' },
        ...attrs.value,
        ...ctx.attrs,
        class:
          props.placeholder && !placeholderLoaded.value ? [props.placeholderClass] : void 0,
        src: src.value,
      })
  },
})
const script$5 = {
  name: 'BarsIcon',
  extends: script$6,
}
const _hoisted_1$4 = /* @__PURE__ */ createElementVNode(
  'path',
  {
    'fill-rule': 'evenodd',
    'clip-rule': 'evenodd',
    'd': 'M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z',
    'fill': 'currentColor',
  },
  null,
  -1,
)
const _hoisted_2$3 = [_hoisted_1$4]
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      mergeProps(
        {
          width: '14',
          height: '14',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        _ctx.pti(),
      ),
      _hoisted_2$3,
      16,
    )
  )
}
script$5.render = render$4
const inlineStyles = {
  submenu: function submenu(_ref) {
    const instance = _ref.instance
    const processedItem = _ref.processedItem
    return {
      display: instance.isItemActive(processedItem) ? 'block' : 'none',
    }
  },
}
const classes = {
  root: function root(_ref2) {
    const instance = _ref2.instance
    return [
      'p-menubar p-component',
      {
        'p-menubar-mobile': instance.queryMatches,
        'p-menubar-mobile-active': instance.mobileActive,
      },
    ]
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  menu: 'p-menubar-root-list',
  menuitem: function menuitem(_ref3) {
    const instance = _ref3.instance
    const processedItem = _ref3.processedItem
    return [
      'p-menuitem',
      {
        'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
        'p-focus': instance.isItemFocused(processedItem),
        'p-disabled': instance.isItemDisabled(processedItem),
      },
    ]
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator',
  end: 'p-menubar-end',
}
const MenubarStyle = BaseStyle.extend({
  name: 'menubar',
  classes,
  inlineStyles,
})
const script$4 = {
  name: 'AngleDownIcon',
  extends: script$6,
}
const _hoisted_1$3 = /* @__PURE__ */ createElementVNode(
  'path',
  {
    d: 'M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z',
    fill: 'currentColor',
  },
  null,
  -1,
)
const _hoisted_2$2 = [_hoisted_1$3]
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      mergeProps(
        {
          width: '14',
          height: '14',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        _ctx.pti(),
      ),
      _hoisted_2$2,
      16,
    )
  )
}
script$4.render = render$3
const script$3 = {
  name: 'AngleRightIcon',
  extends: script$6,
}
const _hoisted_1$2 = /* @__PURE__ */ createElementVNode(
  'path',
  {
    d: 'M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z',
    fill: 'currentColor',
  },
  null,
  -1,
)
const _hoisted_2$1 = [_hoisted_1$2]
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      'svg',
      mergeProps(
        {
          width: '14',
          height: '14',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        _ctx.pti(),
      ),
      _hoisted_2$1,
      16,
    )
  )
}
script$3.render = render$2
const script$2 = {
  name: 'BaseMenubar',
  extends: script$1$1,
  props: {
    model: {
      type: Array,
      default: null,
    },
    buttonProps: {
      type: null,
      default: null,
    },
    breakpoint: {
      type: String,
      default: '960px',
    },
    ariaLabelledby: {
      type: String,
      default: null,
    },
    ariaLabel: {
      type: String,
      default: null,
    },
  },
  style: MenubarStyle,
  provide: function provide() {
    return {
      $parentInstance: this,
    }
  },
}
const script$1 = {
  name: 'MenubarSub',
  hostName: 'Menubar',
  extends: script$1$1,
  emits: ['item-mouseenter', 'item-click', 'item-mousemove'],
  props: {
    items: {
      type: Array,
      default: null,
    },
    root: {
      type: Boolean,
      default: false,
    },
    popup: {
      type: Boolean,
      default: false,
    },
    mobileActive: {
      type: Boolean,
      default: false,
    },
    templates: {
      type: Object,
      default: null,
    },
    level: {
      type: Number,
      default: 0,
    },
    menuId: {
      type: String,
      default: null,
    },
    focusedItemId: {
      type: String,
      default: null,
    },
    activeItemPath: {
      type: Object,
      default: null,
    },
  },
  list: null,
  methods: {
    getItemId: function getItemId(processedItem) {
      return ''.concat(this.menuId, '_').concat(processedItem.key)
    },
    getItemKey: function getItemKey(processedItem) {
      return this.getItemId(processedItem)
    },
    getItemProp: function getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item
        ? ObjectUtils.getItemValue(processedItem.item[name], params)
        : void 0
    },
    getItemLabel: function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label')
    },
    getItemLabelId: function getItemLabelId(processedItem) {
      return ''.concat(this.menuId, '_').concat(processedItem.key, '_label')
    },
    getPTOptions: function getPTOptions(processedItem, index, key) {
      return this.ptm(key, {
        context: {
          item: processedItem,
          index,
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem),
          disabled: this.isItemDisabled(processedItem),
          level: this.level,
        },
      })
    },
    isItemActive: function isItemActive(processedItem) {
      return this.activeItemPath.some((path) => {
        return path.key === processedItem.key
      })
    },
    isItemVisible: function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false
    },
    isItemDisabled: function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled')
    },
    isItemFocused: function isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem)
    },
    isItemGroup: function isItemGroup(processedItem) {
      return ObjectUtils.isNotEmpty(processedItem.items)
    },
    onItemClick: function onItemClick(event, processedItem) {
      this.getItemProp(processedItem, 'command', {
        originalEvent: event,
        item: processedItem.item,
      })
      this.$emit('item-click', {
        originalEvent: event,
        processedItem,
        isFocus: true,
      })
    },
    onItemMouseEnter: function onItemMouseEnter(event, processedItem) {
      this.$emit('item-mouseenter', {
        originalEvent: event,
        processedItem,
      })
    },
    onItemMouseMove: function onItemMouseMove(event, processedItem) {
      this.$emit('item-mousemove', {
        originalEvent: event,
        processedItem,
      })
    },
    getAriaSetSize: function getAriaSetSize() {
      const _this = this
      return this.items.filter((processedItem) => {
        return (
          _this.isItemVisible(processedItem) && !_this.getItemProp(processedItem, 'separator')
        )
      }).length
    },
    getAriaPosInset: function getAriaPosInset(index) {
      const _this2 = this
      return (
        index
        - this.items.slice(0, index).filter((processedItem) => {
          return (
            _this2.isItemVisible(processedItem)
            && _this2.getItemProp(processedItem, 'separator')
          )
        }).length
        + 1
      )
    },
    getMenuItemProps: function getMenuItemProps(processedItem, index) {
      return {
        action: mergeProps(
          {
            'class': this.cx('action'),
            'tabindex': -1,
            'aria-hidden': true,
          },
          this.getPTOptions(processedItem, index, 'action'),
        ),
        icon: mergeProps(
          {
            class: [this.cx('icon'), this.getItemProp(processedItem, 'icon')],
          },
          this.getPTOptions(processedItem, index, 'icon'),
        ),
        label: mergeProps(
          {
            class: this.cx('label'),
          },
          this.getPTOptions(processedItem, index, 'label'),
        ),
        submenuicon: mergeProps(
          {
            class: this.cx('submenuIcon'),
          },
          this.getPTOptions(processedItem, index, 'submenuIcon'),
        ),
      }
    },
  },
  components: {
    AngleRightIcon: script$3,
    AngleDownIcon: script$4,
  },
  directives: {
    ripple: Ripple,
  },
}
const _hoisted_1$1 = [
  'id',
  'aria-label',
  'aria-disabled',
  'aria-expanded',
  'aria-haspopup',
  'aria-level',
  'aria-setsize',
  'aria-posinset',
  'data-p-highlight',
  'data-p-focused',
  'data-p-disabled',
]
const _hoisted_2 = ['onClick', 'onMouseenter', 'onMousemove']
const _hoisted_3 = ['href', 'target']
const _hoisted_4 = ['id']
const _hoisted_5 = ['id']
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenubarSub = resolveComponent('MenubarSub', true)
  const _directive_ripple = resolveDirective('ripple')
  return (
    openBlock(),
    createElementBlock(
      'ul',
      mergeProps(
        {
          class: $props.level === 0 ? _ctx.cx('menu') : _ctx.cx('submenu'),
        },
        $props.level === 0 ? _ctx.ptm('menu') : _ctx.ptm('submenu'),
      ),
      [
        (openBlock(true),
        createElementBlock(
          Fragment,
          null,
          renderList($props.items, (processedItem, index) => {
            return (
              openBlock(),
              createElementBlock(
                Fragment,
                {
                  key: $options.getItemKey(processedItem),
                },
                [
                  $options.isItemVisible(processedItem)
                  && !$options.getItemProp(processedItem, 'separator')
                    ? (openBlock(),
                      createElementBlock(
                        'li',
                        mergeProps(
                          {
                            'key': 0,
                            'id': $options.getItemId(processedItem),
                            'style': $options.getItemProp(processedItem, 'style'),
                            'class': [
                              _ctx.cx('menuitem', {
                                processedItem,
                              }),
                              $options.getItemProp(processedItem, 'class'),
                            ],
                            'role': 'menuitem',
                            'aria-label': $options.getItemLabel(processedItem),
                            'aria-disabled': $options.isItemDisabled(processedItem) || void 0,
                            'aria-expanded': $options.isItemGroup(processedItem)
                              ? $options.isItemActive(processedItem)
                              : void 0,
                            'aria-haspopup':
                              $options.isItemGroup(processedItem)
                              && !$options.getItemProp(processedItem, 'to')
                                ? 'menu'
                                : void 0,
                            'aria-level': $props.level + 1,
                            'aria-setsize': $options.getAriaSetSize(),
                            'aria-posinset': $options.getAriaPosInset(index),
                          },
                          $options.getPTOptions(processedItem, index, 'menuitem'),
                          {
                            'data-p-highlight': $options.isItemActive(processedItem),
                            'data-p-focused': $options.isItemFocused(processedItem),
                            'data-p-disabled': $options.isItemDisabled(processedItem),
                          },
                        ),
                        [
                          createElementVNode(
                            'div',
                            mergeProps(
                              {
                                class: _ctx.cx('content'),
                                onClick: function onClick($event) {
                                  return $options.onItemClick($event, processedItem)
                                },
                                onMouseenter: function onMouseenter($event) {
                                  return $options.onItemMouseEnter($event, processedItem)
                                },
                                onMousemove: function onMousemove($event) {
                                  return $options.onItemMouseMove($event, processedItem)
                                },
                              },
                              $options.getPTOptions(processedItem, index, 'content'),
                            ),
                            [
                              !$props.templates.item
                                ? withDirectives(
                                  (openBlock(),
                                  createElementBlock(
                                    'a',
                                    mergeProps(
                                      {
                                        'key': 0,
                                        'href': $options.getItemProp(processedItem, 'url'),
                                        'class': _ctx.cx('action'),
                                        'target': $options.getItemProp(
                                          processedItem,
                                          'target',
                                        ),
                                        'tabindex': '-1',
                                        'aria-hidden': 'true',
                                      },
                                      $options.getPTOptions(processedItem, index, 'action'),
                                    ),
                                    [
                                      $props.templates.itemicon
                                        ? (openBlock(),
                                          createBlock(
                                            resolveDynamicComponent(
                                              $props.templates.itemicon,
                                            ),
                                            {
                                              key: 0,
                                              item: processedItem.item,
                                              class: normalizeClass(_ctx.cx('icon')),
                                            },
                                            null,
                                            8,
                                            ['item', 'class'],
                                          ))
                                        : $options.getItemProp(processedItem, 'icon')
                                          ? (openBlock(),
                                            createElementBlock(
                                              'span',
                                              mergeProps(
                                                {
                                                  key: 1,
                                                  class: [
                                                    _ctx.cx('icon'),
                                                    $options.getItemProp(
                                                      processedItem,
                                                      'icon',
                                                    ),
                                                  ],
                                                },
                                                $options.getPTOptions(
                                                  processedItem,
                                                  index,
                                                  'icon',
                                                ),
                                              ),
                                              null,
                                              16,
                                            ))
                                          : createCommentVNode('', true),
                                      createElementVNode(
                                        'span',
                                        mergeProps(
                                          {
                                            id: $options.getItemLabelId(processedItem),
                                            class: _ctx.cx('label'),
                                          },
                                          $options.getPTOptions(
                                            processedItem,
                                            index,
                                            'label',
                                          ),
                                        ),
                                        toDisplayString(
                                          $options.getItemLabel(processedItem),
                                        ),
                                        17,
                                        _hoisted_4,
                                      ),
                                      $options.getItemProp(processedItem, 'items')
                                        ? (openBlock(),
                                          createElementBlock(
                                            Fragment,
                                            {
                                              key: 2,
                                            },
                                            [
                                              $props.templates.submenuicon
                                                ? (openBlock(),
                                                  createBlock(
                                                    resolveDynamicComponent(
                                                      $props.templates.submenuicon,
                                                    ),
                                                    {
                                                      key: 0,
                                                      root: $props.root,
                                                      active:
                                                          $options.isItemActive(processedItem),
                                                      class: normalizeClass(
                                                        _ctx.cx('submenuIcon'),
                                                      ),
                                                    },
                                                    null,
                                                    8,
                                                    ['root', 'active', 'class'],
                                                  ))
                                                : (openBlock(),
                                                  createBlock(
                                                    resolveDynamicComponent(
                                                      $props.root
                                                        ? 'AngleDownIcon'
                                                        : 'AngleRightIcon',
                                                    ),
                                                    mergeProps(
                                                      {
                                                        key: 1,
                                                        class: _ctx.cx('submenuIcon'),
                                                      },
                                                      $options.getPTOptions(
                                                        processedItem,
                                                        index,
                                                        'submenuIcon',
                                                      ),
                                                    ),
                                                    null,
                                                    16,
                                                    ['class'],
                                                  )),
                                            ],
                                            64,
                                          ))
                                        : createCommentVNode('', true),
                                    ],
                                    16,
                                    _hoisted_3,
                                  )), [[_directive_ripple]])
                                : (openBlock(),
                                  createBlock(
                                    resolveDynamicComponent($props.templates.item),
                                    {
                                      key: 1,
                                      item: processedItem.item,
                                      root: $props.root,
                                      hasSubmenu: $options.getItemProp(processedItem, 'items'),
                                      label: $options.getItemLabel(processedItem),
                                      props: $options.getMenuItemProps(processedItem, index),
                                    },
                                    null,
                                    8,
                                    ['item', 'root', 'hasSubmenu', 'label', 'props'],
                                  )),
                            ],
                            16,
                            _hoisted_2,
                          ),
                          $options.isItemVisible(processedItem)
                          && $options.isItemGroup(processedItem)
                            ? (openBlock(),
                              createBlock(
                                _component_MenubarSub,
                                {
                                  'key': 0,
                                  'menuId': $props.menuId,
                                  'role': 'menu',
                                  'style': normalizeStyle(
                                    _ctx.sx('submenu', true, {
                                      processedItem,
                                    }),
                                  ),
                                  'focusedItemId': $props.focusedItemId,
                                  'items': processedItem.items,
                                  'mobileActive': $props.mobileActive,
                                  'activeItemPath': $props.activeItemPath,
                                  'templates': $props.templates,
                                  'level': $props.level + 1,
                                  'aria-labelledby': $options.getItemLabelId(processedItem),
                                  'pt': _ctx.pt,
                                  'unstyled': _ctx.unstyled,
                                  'onItemClick':
                                    _cache[0]
                                    || (_cache[0] = function ($event) {
                                      return _ctx.$emit('item-click', $event)
                                    }),
                                  'onItemMouseenter':
                                    _cache[1]
                                    || (_cache[1] = function ($event) {
                                      return _ctx.$emit('item-mouseenter', $event)
                                    }),
                                  'onItemMousemove':
                                    _cache[2]
                                    || (_cache[2] = function ($event) {
                                      return _ctx.$emit('item-mousemove', $event)
                                    }),
                                },
                                null,
                                8,
                                [
                                  'menuId',
                                  'style',
                                  'focusedItemId',
                                  'items',
                                  'mobileActive',
                                  'activeItemPath',
                                  'templates',
                                  'level',
                                  'aria-labelledby',
                                  'pt',
                                  'unstyled',
                                ],
                              ))
                            : createCommentVNode('', true),
                        ],
                        16,
                        _hoisted_1$1,
                      ))
                    : createCommentVNode('', true),
                  $options.isItemVisible(processedItem)
                  && $options.getItemProp(processedItem, 'separator')
                    ? (openBlock(),
                      createElementBlock(
                        'li',
                        mergeProps(
                          {
                            key: 1,
                            id: $options.getItemId(processedItem),
                            class: [
                              _ctx.cx('separator'),
                              $options.getItemProp(processedItem, 'class'),
                            ],
                            style: $options.getItemProp(processedItem, 'style'),
                            role: 'separator',
                          },
                          _ctx.ptm('separator'),
                        ),
                        null,
                        16,
                        _hoisted_5,
                      ))
                    : createCommentVNode('', true),
                ],
                64,
              )
            )
          }),
          128,
        )),
      ],
      16,
    )
  )
}
script$1.render = render$1
const script = {
  name: 'Menubar',
  extends: script$2,
  inheritAttrs: false,
  emits: ['focus', 'blur'],
  matchMediaListener: null,
  data: function data() {
    return {
      id: this.$attrs.id,
      mobileActive: false,
      focused: false,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: '',
      },
      activeItemPath: [],
      dirty: false,
      query: null,
      queryMatches: false,
    }
  },
  watch: {
    '$attrs.id': function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId()
    },
    'activeItemPath': function activeItemPath(newPath) {
      if (ObjectUtils.isNotEmpty(newPath)) {
        this.bindOutsideClickListener()
        this.bindResizeListener()
      }
      else {
        this.unbindOutsideClickListener()
        this.unbindResizeListener()
      }
    },
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId()
    this.bindMatchMediaListener()
  },
  beforeUnmount: function beforeUnmount() {
    this.mobileActive = false
    this.unbindOutsideClickListener()
    this.unbindResizeListener()
    this.unbindMatchMediaListener()
    if (this.container)
      ZIndexUtils.clear(this.container)

    this.container = null
  },
  methods: {
    getItemProp: function getItemProp2(item, name) {
      return item ? ObjectUtils.getItemValue(item[name]) : void 0
    },
    getItemLabel: function getItemLabel2(item) {
      return this.getItemProp(item, 'label')
    },
    isItemDisabled: function isItemDisabled2(item) {
      return this.getItemProp(item, 'disabled')
    },
    isItemVisible: function isItemVisible2(item) {
      return this.getItemProp(item, 'visible') !== false
    },
    isItemGroup: function isItemGroup2(item) {
      return ObjectUtils.isNotEmpty(this.getItemProp(item, 'items'))
    },
    isItemSeparator: function isItemSeparator(item) {
      return this.getItemProp(item, 'separator')
    },
    getProccessedItemLabel: function getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : void 0
    },
    isProccessedItemGroup: function isProccessedItemGroup(processedItem) {
      return processedItem && ObjectUtils.isNotEmpty(processedItem.items)
    },
    toggle: function toggle(event) {
      const _this = this
      if (this.mobileActive) {
        this.mobileActive = false
        ZIndexUtils.clear(this.menubar)
        this.hide()
      }
      else {
        this.mobileActive = true
        ZIndexUtils.set('menu', this.menubar, this.$primevue.config.zIndex.menu)
        setTimeout(() => {
          _this.show()
        }, 1)
      }
      this.bindOutsideClickListener()
      event.preventDefault()
    },
    show: function show() {
      DomHandler.focus(this.menubar)
    },
    hide: function hide(event, isFocus) {
      const _this2 = this
      if (this.mobileActive) {
        this.mobileActive = false
        setTimeout(() => {
          DomHandler.focus(_this2.$refs.menubutton)
        }, 0)
      }
      this.activeItemPath = []
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: '',
      }
      isFocus && DomHandler.focus(this.menubar)
      this.dirty = false
    },
    onFocus: function onFocus(event) {
      this.focused = true
      if (!this.popup) {
        this.focusedItemInfo
          = this.focusedItemInfo.index !== -1
            ? this.focusedItemInfo
            : {
                index: this.findFirstFocusedItemIndex(),
                level: 0,
                parentKey: '',
              }
      }
      this.$emit('focus', event)
    },
    onBlur: function onBlur(event) {
      this.focused = false
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: '',
      }
      this.searchValue = ''
      this.dirty = false
      this.$emit('blur', event)
    },
    onKeyDown: function onKeyDown(event) {
      const metaKey = event.metaKey || event.ctrlKey
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event)
          break
        case 'ArrowUp':
          this.onArrowUpKey(event)
          break
        case 'ArrowLeft':
          this.onArrowLeftKey(event)
          break
        case 'ArrowRight':
          this.onArrowRightKey(event)
          break
        case 'Home':
          this.onHomeKey(event)
          break
        case 'End':
          this.onEndKey(event)
          break
        case 'Space':
          this.onSpaceKey(event)
          break
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event)
          break
        case 'Escape':
          this.onEscapeKey(event)
          break
        case 'Tab':
          this.onTabKey(event)
          break
        case 'PageDown':
        case 'PageUp':
        case 'Backspace':
        case 'ShiftLeft':
        case 'ShiftRight':
          break
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key))
            this.searchItems(event, event.key)

          break
      }
    },
    onItemChange: function onItemChange(event) {
      const processedItem = event.processedItem
      const isFocus = event.isFocus
      if (ObjectUtils.isEmpty(processedItem))
        return
      const index = processedItem.index
      const key = processedItem.key
      const level = processedItem.level
      const parentKey = processedItem.parentKey
      const items = processedItem.items
      const grouped = ObjectUtils.isNotEmpty(items)
      const activeItemPath2 = this.activeItemPath.filter((p) => {
        return p.parentKey !== parentKey && p.parentKey !== key
      })
      grouped && activeItemPath2.push(processedItem)
      this.focusedItemInfo = {
        index,
        level,
        parentKey,
      }
      this.activeItemPath = activeItemPath2
      grouped && (this.dirty = true)
      isFocus && DomHandler.focus(this.menubar)
    },
    onItemClick: function onItemClick2(event) {
      const originalEvent = event.originalEvent
      const processedItem = event.processedItem
      const grouped = this.isProccessedItemGroup(processedItem)
      const root2 = ObjectUtils.isEmpty(processedItem.parent)
      const selected = this.isSelected(processedItem)
      if (selected) {
        const index = processedItem.index
        const key = processedItem.key
        const level = processedItem.level
        const parentKey = processedItem.parentKey
        this.activeItemPath = this.activeItemPath.filter((p) => {
          return key !== p.key && key.startsWith(p.key)
        })
        this.focusedItemInfo = {
          index,
          level,
          parentKey,
        }
        this.dirty = !root2
        DomHandler.focus(this.menubar)
      }
      else {
        if (grouped) {
          this.onItemChange(event)
        }
        else {
          const rootProcessedItem = root2
            ? processedItem
            : this.activeItemPath.find((p) => {
              return p.parentKey === ''
            })
          this.hide(originalEvent)
          this.changeFocusedItemIndex(
            originalEvent,
            rootProcessedItem ? rootProcessedItem.index : -1,
          )
          this.mobileActive = false
          DomHandler.focus(this.menubar)
        }
      }
    },
    onItemMouseEnter: function onItemMouseEnter2(event) {
      if (!this.mobileActive && this.dirty)
        this.onItemChange(event)
    },
    onItemMouseMove: function onItemMouseMove2(event) {
      if (this.focused)
        this.changeFocusedItemIndex(event, event.processedItem.index)
    },
    menuButtonClick: function menuButtonClick(event) {
      this.toggle(event)
    },
    menuButtonKeydown: function menuButtonKeydown(event) {
      (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space')
      && this.menuButtonClick(event)
    },
    onArrowDownKey: function onArrowDownKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo.index]
      const root2 = processedItem ? ObjectUtils.isEmpty(processedItem.parent) : null
      if (root2) {
        const grouped = this.isProccessedItemGroup(processedItem)
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem,
          })
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key,
          }
          this.onArrowRightKey(event)
        }
      }
      else {
        const itemIndex
          = this.focusedItemInfo.index !== -1
            ? this.findNextItemIndex(this.focusedItemInfo.index)
            : this.findFirstFocusedItemIndex()
        this.changeFocusedItemIndex(event, itemIndex)
      }
      event.preventDefault()
    },
    onArrowUpKey: function onArrowUpKey(event) {
      const _this3 = this
      const processedItem = this.visibleItems[this.focusedItemInfo.index]
      const root2 = ObjectUtils.isEmpty(processedItem.parent)
      if (root2) {
        const grouped = this.isProccessedItemGroup(processedItem)
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem,
          })
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key,
          }
          const itemIndex = this.findLastItemIndex()
          this.changeFocusedItemIndex(event, itemIndex)
        }
      }
      else {
        const parentItem = this.activeItemPath.find((p) => {
          return p.key === processedItem.parentKey
        })
        if (this.focusedItemInfo.index === 0) {
          this.focusedItemInfo = {
            index: -1,
            parentKey: parentItem ? parentItem.parentKey : '',
          }
          this.searchValue = ''
          this.onArrowLeftKey(event)
          this.activeItemPath = this.activeItemPath.filter((p) => {
            return p.parentKey !== _this3.focusedItemInfo.parentKey
          })
        }
        else {
          const _itemIndex
            = this.focusedItemInfo.index !== -1
              ? this.findPrevItemIndex(this.focusedItemInfo.index)
              : this.findLastFocusedItemIndex()
          this.changeFocusedItemIndex(event, _itemIndex)
        }
      }
      event.preventDefault()
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      const _this4 = this
      const processedItem = this.visibleItems[this.focusedItemInfo.index]
      const parentItem = processedItem
        ? this.activeItemPath.find((p) => {
          return p.key === processedItem.parentKey
        })
        : null
      if (parentItem) {
        this.onItemChange({
          originalEvent: event,
          processedItem: parentItem,
        })
        this.activeItemPath = this.activeItemPath.filter((p) => {
          return p.parentKey !== _this4.focusedItemInfo.parentKey
        })
        event.preventDefault()
      }
      else {
        const itemIndex
          = this.focusedItemInfo.index !== -1
            ? this.findPrevItemIndex(this.focusedItemInfo.index)
            : this.findLastFocusedItemIndex()
        this.changeFocusedItemIndex(event, itemIndex)
        event.preventDefault()
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo.index]
      const parentItem = processedItem
        ? this.activeItemPath.find((p) => {
          return p.key === processedItem.parentKey
        })
        : null
      if (parentItem) {
        const grouped = this.isProccessedItemGroup(processedItem)
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem,
          })
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key,
          }
          this.onArrowDownKey(event)
        }
      }
      else {
        const itemIndex
          = this.focusedItemInfo.index !== -1
            ? this.findNextItemIndex(this.focusedItemInfo.index)
            : this.findFirstFocusedItemIndex()
        this.changeFocusedItemIndex(event, itemIndex)
        event.preventDefault()
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex())
      event.preventDefault()
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex())
      event.preventDefault()
    },
    onEnterKey: function onEnterKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        const element = DomHandler.findSingle(
          this.menubar,
          'li[id="'.concat(''.concat(this.focusedItemId), '"]'),
        )
        const anchorElement
          = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]')
        anchorElement ? anchorElement.click() : element && element.click()
        const processedItem = this.visibleItems[this.focusedItemInfo.index]
        const grouped = this.isProccessedItemGroup(processedItem)
        !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex())
      }
      event.preventDefault()
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event)
    },
    onEscapeKey: function onEscapeKey(event) {
      if (this.focusedItemInfo.level !== 0) {
        const _focusedItemInfo = this.focusedItemInfo
        this.hide(event, false)
        this.focusedItemInfo = {
          index: Number(_focusedItemInfo.parentKey.split('_')[0]),
          level: 0,
          parentKey: '',
        }
      }
      event.preventDefault()
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo.index]
        const grouped = this.isProccessedItemGroup(processedItem)
        !grouped
        && this.onItemChange({
          originalEvent: event,
          processedItem,
        })
      }
      this.hide()
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      const _this5 = this
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          const isOutsideContainer
            = _this5.container && !_this5.container.contains(event.target)
          const isOutsideTarget = !(
            _this5.target
            && (_this5.target === event.target || _this5.target.contains(event.target))
          )
          if (isOutsideContainer && isOutsideTarget)
            _this5.hide()
        };
        (void 0).addEventListener('click', this.outsideClickListener)
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener('click', this.outsideClickListener)
        this.outsideClickListener = null
      }
    },
    bindResizeListener: function bindResizeListener() {
      const _this6 = this
      if (!this.resizeListener) {
        this.resizeListener = function (event) {
          if (!DomHandler.isTouchDevice())
            _this6.hide(event, true)

          _this6.mobileActive = false
        };
        (void 0).addEventListener('resize', this.resizeListener)
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener('resize', this.resizeListener)
        this.resizeListener = null
      }
    },
    bindMatchMediaListener: function bindMatchMediaListener() {
      const _this7 = this
      if (!this.matchMediaListener) {
        const query = matchMedia('(max-width: '.concat(this.breakpoint, ')'))
        this.query = query
        this.queryMatches = query.matches
        this.matchMediaListener = function () {
          _this7.queryMatches = query.matches
          _this7.mobileActive = false
        }
        this.query.addEventListener('change', this.matchMediaListener)
      }
    },
    unbindMatchMediaListener: function unbindMatchMediaListener() {
      if (this.matchMediaListener) {
        this.query.removeEventListener('change', this.matchMediaListener)
        this.matchMediaListener = null
      }
    },
    isItemMatched: function isItemMatched(processedItem) {
      let _this$getProccessedIt
      return (
        this.isValidItem(processedItem)
        && ((_this$getProccessedIt = this.getProccessedItemLabel(processedItem)) === null
        || _this$getProccessedIt === void 0
          ? void 0
          : _this$getProccessedIt
            .toLocaleLowerCase()
            .startsWith(this.searchValue.toLocaleLowerCase()))
      )
    },
    isValidItem: function isValidItem(processedItem) {
      return (
        !!processedItem
        && !this.isItemDisabled(processedItem.item)
        && !this.isItemSeparator(processedItem.item)
        && this.isItemVisible(processedItem.item)
      )
    },
    isValidSelectedItem: function isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem)
    },
    isSelected: function isSelected(processedItem) {
      return this.activeItemPath.some((p) => {
        return p.key === processedItem.key
      })
    },
    findFirstItemIndex: function findFirstItemIndex() {
      const _this8 = this
      return this.visibleItems.findIndex((processedItem) => {
        return _this8.isValidItem(processedItem)
      })
    },
    findLastItemIndex: function findLastItemIndex() {
      const _this9 = this
      return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => {
        return _this9.isValidItem(processedItem)
      })
    },
    findNextItemIndex: function findNextItemIndex(index) {
      const _this10 = this
      const matchedItemIndex
        = index < this.visibleItems.length - 1
          ? this.visibleItems.slice(index + 1).findIndex((processedItem) => {
            return _this10.isValidItem(processedItem)
          })
          : -1
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index
    },
    findPrevItemIndex: function findPrevItemIndex(index) {
      const _this11 = this
      const matchedItemIndex
        = index > 0
          ? ObjectUtils.findLastIndex(
            this.visibleItems.slice(0, index),
            (processedItem) => {
              return _this11.isValidItem(processedItem)
            },
          )
          : -1
      return matchedItemIndex > -1 ? matchedItemIndex : index
    },
    findSelectedItemIndex: function findSelectedItemIndex() {
      const _this12 = this
      return this.visibleItems.findIndex((processedItem) => {
        return _this12.isValidSelectedItem(processedItem)
      })
    },
    findFirstFocusedItemIndex: function findFirstFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex()
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex
    },
    findLastFocusedItemIndex: function findLastFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex()
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex
    },
    searchItems: function searchItems(event, _char) {
      const _this13 = this
      this.searchValue = (this.searchValue || '') + _char
      let itemIndex = -1
      let matched = false
      if (this.focusedItemInfo.index !== -1) {
        itemIndex = this.visibleItems
          .slice(this.focusedItemInfo.index)
          .findIndex((processedItem) => {
            return _this13.isItemMatched(processedItem)
          })
        itemIndex
          = itemIndex === -1
            ? this.visibleItems
              .slice(0, this.focusedItemInfo.index)
              .findIndex((processedItem) => {
                return _this13.isItemMatched(processedItem)
              })
            : itemIndex + this.focusedItemInfo.index
      }
      else {
        itemIndex = this.visibleItems.findIndex((processedItem) => {
          return _this13.isItemMatched(processedItem)
        })
      }
      if (itemIndex !== -1)
        matched = true

      if (itemIndex === -1 && this.focusedItemInfo.index === -1)
        itemIndex = this.findFirstFocusedItemIndex()

      if (itemIndex !== -1)
        this.changeFocusedItemIndex(event, itemIndex)

      if (this.searchTimeout)
        clearTimeout(this.searchTimeout)

      this.searchTimeout = setTimeout(() => {
        _this13.searchValue = ''
        _this13.searchTimeout = null
      }, 500)
      return matched
    },
    changeFocusedItemIndex: function changeFocusedItemIndex(event, index) {
      if (this.focusedItemInfo.index !== index) {
        this.focusedItemInfo.index = index
        this.scrollInView()
      }
    },
    scrollInView: function scrollInView() {
      const index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1
      const id = index !== -1 ? ''.concat(this.id, '_').concat(index) : this.focusedItemId
      const element = DomHandler.findSingle(this.menubar, 'li[id="'.concat(id, '"]'))
      if (element) {
        element.scrollIntoView
        && element.scrollIntoView({
          block: 'nearest',
          inline: 'start',
        })
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      const _this14 = this
      const level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      const parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      const parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ''
      const processedItems2 = []
      items
      && items.forEach((item, index) => {
        const key = (parentKey !== '' ? `${parentKey}_` : '') + index
        const newItem = {
          item,
          index,
          level,
          key,
          parent,
          parentKey,
        }
        newItem.items = _this14.createProcessedItems(item.items, level + 1, newItem, key)
        processedItems2.push(newItem)
      })
      return processedItems2
    },
    containerRef: function containerRef(el) {
      this.container = el
    },
    menubarRef: function menubarRef(el) {
      this.menubar = el ? el.$el : void 0
    },
  },
  computed: {
    processedItems: function processedItems() {
      return this.createProcessedItems(this.model || [])
    },
    visibleItems: function visibleItems() {
      const _this15 = this
      const processedItem = this.activeItemPath.find((p) => {
        return p.key === _this15.focusedItemInfo.parentKey
      })
      return processedItem ? processedItem.items : this.processedItems
    },
    focusedItemId: function focusedItemId() {
      return this.focusedItemInfo.index !== -1
        ? ''
          .concat(this.id)
          .concat(
            ObjectUtils.isNotEmpty(this.focusedItemInfo.parentKey)
              ? `_${this.focusedItemInfo.parentKey}`
              : '',
            '_',
          )
          .concat(this.focusedItemInfo.index)
        : null
    },
  },
  components: {
    MenubarSub: script$1,
    BarsIcon: script$5,
  },
}
function _typeof(o) {
  '@babel/helpers - typeof'
  return (
    (_typeof
      = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (o2) {
          return typeof o2
        }
        : function (o2) {
          return o2
            && typeof Symbol == 'function'
            && o2.constructor === Symbol
            && o2 !== Symbol.prototype
            ? 'symbol'
            : typeof o2
        }),
    _typeof(o)
  )
}
function ownKeys(e, r) {
  const t = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e)
    r
    && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable
    })),
    t.push.apply(t, o)
  }
  return t
}
function _objectSpread(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {}
    r % 2
      ? ownKeys(Object(t), true).forEach((r2) => {
        _defineProperty(e, r2, t[r2])
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2))
        })
  }
  return e
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key)
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  }
  else {
    obj[key] = value
  }
  return obj
}
function _toPropertyKey(t) {
  const i = _toPrimitive(t, 'string')
  return _typeof(i) == 'symbol' ? i : String(i)
}
function _toPrimitive(t, r) {
  if (_typeof(t) != 'object' || !t)
    return t
  const e = t[Symbol.toPrimitive]
  if (void 0 !== e) {
    const i = e.call(t, r || 'default')
    if (_typeof(i) != 'object')
      return i
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (r === 'string' ? String : Number)(t)
}
const _hoisted_1 = ['aria-haspopup', 'aria-expanded', 'aria-controls', 'aria-label']
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BarsIcon = resolveComponent('BarsIcon')
  const _component_MenubarSub = resolveComponent('MenubarSub')
  return (
    openBlock(),
    createElementBlock(
      'div',
      mergeProps(
        {
          ref: $options.containerRef,
          class: _ctx.cx('root'),
        },
        _ctx.ptmi('root'),
      ),
      [
        _ctx.$slots.start
          ? (openBlock(),
            createElementBlock(
              'div',
              mergeProps(
                {
                  key: 0,
                  class: _ctx.cx('start'),
                },
                _ctx.ptm('start'),
              ),
              [renderSlot(_ctx.$slots, 'start')],
              16,
            ))
          : createCommentVNode('', true),
        renderSlot(
          _ctx.$slots,
          'menubutton',
          {
            id: $data.id,
            class: normalizeClass(_ctx.cx('button')),
            toggleCallback: function toggleCallback(event) {
              return $options.menuButtonClick(event)
            },
          },
          () => {
            let _ctx$$primevue$config
            return [
              _ctx.model && _ctx.model.length > 0
                ? (openBlock(),
                  createElementBlock(
                    'a',
                    mergeProps(
                      {
                        'key': 0,
                        'ref': 'menubutton',
                        'role': 'button',
                        'tabindex': '0',
                        'class': _ctx.cx('button'),
                        'aria-haspopup':
                          !!(_ctx.model.length && _ctx.model.length > 0),
                        'aria-expanded': $data.mobileActive,
                        'aria-controls': $data.id,
                        'aria-label':
                          (_ctx$$primevue$config = _ctx.$primevue.config.locale.aria)
                          === null || _ctx$$primevue$config === void 0
                            ? void 0
                            : _ctx$$primevue$config.navigation,
                        'onClick':
                          _cache[0]
                          || (_cache[0] = function ($event) {
                            return $options.menuButtonClick($event)
                          }),
                        'onKeydown':
                          _cache[1]
                          || (_cache[1] = function ($event) {
                            return $options.menuButtonKeydown($event)
                          }),
                      },
                      _objectSpread(_objectSpread({}, _ctx.buttonProps), _ctx.ptm('button')),
                    ),
                    [
                      renderSlot(_ctx.$slots, 'menubuttonicon', {}, () => {
                        return [
                          createVNode(
                            _component_BarsIcon,
                            normalizeProps(guardReactiveProps(_ctx.ptm('menubuttonicon'))),
                            null,
                            16,
                          ),
                        ]
                      }),
                    ],
                    16,
                    _hoisted_1,
                  ))
                : createCommentVNode('', true),
            ]
          },
        ),
        createVNode(
          _component_MenubarSub,
          {
            'ref': $options.menubarRef,
            'id': $data.id,
            'role': 'menubar',
            'items': $options.processedItems,
            'templates': _ctx.$slots,
            'root': true,
            'mobileActive': $data.mobileActive,
            'tabindex': '0',
            'aria-activedescendant': $data.focused ? $options.focusedItemId : void 0,
            'menuId': $data.id,
            'focusedItemId': $data.focused ? $options.focusedItemId : void 0,
            'activeItemPath': $data.activeItemPath,
            'level': 0,
            'aria-labelledby': _ctx.ariaLabelledby,
            'aria-label': _ctx.ariaLabel,
            'pt': _ctx.pt,
            'unstyled': _ctx.unstyled,
            'onFocus': $options.onFocus,
            'onBlur': $options.onBlur,
            'onKeydown': $options.onKeyDown,
            'onItemClick': $options.onItemClick,
            'onItemMouseenter': $options.onItemMouseEnter,
            'onItemMousemove': $options.onItemMouseMove,
          },
          null,
          8,
          [
            'id',
            'items',
            'templates',
            'mobileActive',
            'aria-activedescendant',
            'menuId',
            'focusedItemId',
            'activeItemPath',
            'aria-labelledby',
            'aria-label',
            'pt',
            'unstyled',
            'onFocus',
            'onBlur',
            'onKeydown',
            'onItemClick',
            'onItemMouseenter',
            'onItemMousemove',
          ],
        ),
        _ctx.$slots.end
          ? (openBlock(),
            createElementBlock(
              'div',
              mergeProps(
                {
                  key: 1,
                  class: _ctx.cx('end'),
                },
                _ctx.ptm('end'),
              ),
              [renderSlot(_ctx.$slots, 'end')],
              16,
            ))
          : createCommentVNode('', true),
      ],
      16,
    )
  )
}
script.render = render
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: 'index',
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          label: 'Test',
          icon: 'pi pi-home',
        },
      ],
    },
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            {
              class: 'bg-light-200 dark:bg-slate-900',
            },
            _attrs,
          ),
        )} data-v-211d9b93>`,
      )
      _push(
        ssrRenderComponent(
          unref(script),
          {
            class: 'main_menubar',
            model: _ctx.items,
          },
          createSlots(
            {
              _: 2,
              /* DYNAMIC */
            },
            [
              _ctx.$slots.start
                ? {
                    name: 'start',
                    fn: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        ssrRenderSlot(
                          _ctx.$slots,
                          'start',
                          {},
                          null,
                          _push2,
                          _parent2,
                          _scopeId,
                        )
                      }
                      else {
                        return [renderSlot(_ctx.$slots, 'start', {}, void 0, true)]
                      }
                    }),
                    key: '0',
                  }
                : void 0,
              _ctx.$slots.item
                ? {
                    name: 'item',
                    fn: withCtx(
                      (
                        { item, props, hasSubmenu, root: root2 },
                        _push2,
                        _parent2,
                        _scopeId,
                      ) => {
                        if (_push2) {
                          ssrRenderSlot(
                            _ctx.$slots,
                            'item',
                            {
                              item,
                              props,
                              hasSubmenu,
                              root: root2,
                            },
                            null,
                            _push2,
                            _parent2,
                            _scopeId,
                          )
                        }
                        else {
                          return [
                            renderSlot(
                              _ctx.$slots,
                              'item',
                              {
                                item,
                                props,
                                hasSubmenu,
                                root: root2,
                              },
                              void 0,
                              true,
                            ),
                          ]
                        }
                      },
                    ),
                    key: '1',
                  }
                : void 0,
              _ctx.$slots.end
                ? {
                    name: 'end',
                    fn: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        ssrRenderSlot(
                          _ctx.$slots,
                          'end',
                          {},
                          null,
                          _push2,
                          _parent2,
                          _scopeId,
                        )
                      }
                      else {
                        return [renderSlot(_ctx.$slots, 'end', {}, void 0, true)]
                      }
                    }),
                    key: '2',
                  }
                : void 0,
            ],
          ),
          _parent,
        ),
      )
      _push('</div>')
    }
  },
})
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'UI/components/MenuBar/index.vue',
  )
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [
  ['__scopeId', 'data-v-211d9b93'],
  ['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/UI/components/MenuBar/index.vue'],
])
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: 'SubMenu',
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '\u2318+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '\u2318+B',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '\u2318+U',
          },
          {
            separator: true,
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: 2,
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: 3,
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: 3,
      },
    ])
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VMenuBar = __nuxt_component_0
      const _component_ThemeSwitcher = resolveComponent('ThemeSwitcher')
      const _component_LangSwitcher = resolveComponent('LangSwitcher')
      const _directive_ripple = resolveDirective('ripple')
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            {
              class: 'bg-light-200 dark:bg-slate-900',
            },
            _attrs,
          ),
        )}>`,
      )
      _push(
        ssrRenderComponent(
          _component_VMenuBar,
          {
            items: unref(items),
          },
          {
            start: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(
                  `<svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-2rem"${_scopeId}><path d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z" fill="var(--primary-color)"${_scopeId}></path><path d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z" fill="var(--text-color)"${_scopeId}></path></svg>`,
                )
              }
              else {
                return [
                  (openBlock(),
                  createBlock(
                    'svg',
                    {
                      width: '35',
                      height: '40',
                      viewBox: '0 0 35 40',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      class: 'h-2rem',
                    },
                    [
                      createVNode('path', {
                        d: 'M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z',
                        fill: 'var(--primary-color)',
                      }),
                      createVNode('path', {
                        d: 'M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z',
                        fill: 'var(--text-color)',
                      }),
                    ],
                  )),
                ]
              }
            }),
            item: withCtx(
              ({ item, props, hasSubmenu, root: root2 }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(
                    `<a${ssrRenderAttrs(
                      mergeProps(
                        {
                          class: 'align-items-center flex',
                        },
                        props.action,
                        ssrGetDirectiveProps(_ctx, _directive_ripple),
                      ),
                    )}${_scopeId}><span${_scopeId}>${ssrInterpolate(item.label)}</span>`,
                  )
                  if (item.shortcut) {
                    _push2(
                      `<span class="border-1 surface-border border-round surface-100 ml-auto p-1 text-xs"${_scopeId}>${ssrInterpolate(item.shortcut)}</span>`,
                    )
                  }
                  else {
                    _push2('<!---->')
                  }
                  if (hasSubmenu) {
                    _push2(
                      `<i class="${ssrRenderClass([
                        'pi pi-angle-down',
                        {
                          'pi-angle-down ml-2': root2,
                          'pi-angle-right ml-auto': !root2,
                        },
                      ])}"${_scopeId}></i>`,
                    )
                  }
                  else {
                    _push2('<!---->')
                  }
                  _push2('</a>')
                }
                else {
                  return [
                    withDirectives(
                      (openBlock(),
                      createBlock(
                        'a',
                        mergeProps(
                          {
                            class: 'align-items-center flex',
                          },
                          props.action,
                        ),
                        [
                          createVNode(
                            'span',
                            null,
                            toDisplayString(item.label),
                            1,
                            /* TEXT */
                          ),
                          item.shortcut
                            ? (openBlock(),
                              createBlock(
                                'span',
                                {
                                  key: 0,
                                  class:
                                    'border-1 surface-border border-round surface-100 ml-auto p-1 text-xs',
                                },
                                toDisplayString(item.shortcut),
                                1,
                                /* TEXT */
                              ))
                            : createCommentVNode('v-if', true),
                          hasSubmenu
                            ? (openBlock(),
                              createBlock(
                                'i',
                                {
                                  key: 1,
                                  class: [
                                    'pi pi-angle-down',
                                    {
                                      'pi-angle-down ml-2': root2,
                                      'pi-angle-right ml-auto': !root2,
                                    },
                                  ],
                                },
                                null,
                                2,
                                /* CLASS */
                              ))
                            : createCommentVNode('v-if', true),
                        ],
                        16,
                        /* FULL_PROPS */
                      )), [[_directive_ripple]]),
                  ]
                }
              },
            ),
            end: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(
                  `<div class="align-items-center flex gap-2"${_scopeId}><div class="flex flex-col space-x-3 space-y-4 sm:flex-row sm:space-y-0 rtl:space-x-reverse"${_scopeId}>`,
                )
                _push2(
                  ssrRenderComponent(_component_ThemeSwitcher, null, null, _parent2, _scopeId),
                )
                _push2(
                  ssrRenderComponent(_component_LangSwitcher, null, null, _parent2, _scopeId),
                )
                _push2('</div></div>')
              }
              else {
                return [
                  createVNode(
                    'div',
                    {
                      class: 'align-items-center flex gap-2',
                    },
                    [
                      createVNode(
                        'div',
                        {
                          class:
                            'flex flex-col space-x-3 space-y-4 sm:flex-row sm:space-y-0 rtl:space-x-reverse',
                        },
                        [
                          createVNode(_component_ThemeSwitcher),
                          createVNode(_component_LangSwitcher),
                        ],
                      ),
                    ],
                  ),
                ]
              }
            }),
            _: 1,
            /* STABLE */
          },
          _parent,
        ),
      )
      _push('</div>')
    }
  },
})
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/layout/SubMenu.vue',
  )
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
  ['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/components/layout/SubMenu.vue'],
])
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'default',
  __ssrInlineRender: true,
  setup(__props) {
    useLocaleHead({
      addDirAttribute: true,
      identifierAttribute: 'id',
      addSeoAttributes: true,
    })
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1
      const _component_NuxtImg = __nuxt_component_1
      const _component_Layout_SubMenu = __nuxt_component_2
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            {
              class: 'card-bg main_container min-h-screen',
            },
            _attrs,
          ),
        )}><header class="mb-5"><div class="container mx-auto px-1"><nav class="flex flex-row justify-between pb-5 pt-10">`,
      )
      _push(
        ssrRenderComponent(
          _component_NuxtLink,
          {
            'to': '/',
            'aria-label': 'Home',
            'class': 'min-w-fit',
          },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(
                  ssrRenderComponent(
                    _component_NuxtImg,
                    {
                      class: 'h-6 sm:ml-3 lg:ml-0 dark:hidden',
                      src: 'nuxt/full-logo-green-dark.svg',
                      densities: 'x1 x2',
                      alt: 'nuxt-logo',
                      style: {
                        height: '24px',
                        width: '99px',
                      },
                    },
                    null,
                    _parent2,
                    _scopeId,
                  ),
                )
                _push2(
                  ssrRenderComponent(
                    _component_NuxtImg,
                    {
                      class: 'hidden h-6 dark:block',
                      src: 'nuxt/full-logo-green-light.svg',
                      densities: 'x1 x2',
                      alt: 'nuxt-logo',
                      style: {
                        height: '24px',
                        width: '99px',
                      },
                    },
                    null,
                    _parent2,
                    _scopeId,
                  ),
                )
              }
              else {
                return [
                  createVNode(_component_NuxtImg, {
                    class: 'h-6 sm:ml-3 lg:ml-0 dark:hidden',
                    src: 'nuxt/full-logo-green-dark.svg',
                    densities: 'x1 x2',
                    alt: 'nuxt-logo',
                    style: {
                      height: '24px',
                      width: '99px',
                    },
                  }),
                  createVNode(_component_NuxtImg, {
                    class: 'hidden h-6 dark:block',
                    src: 'nuxt/full-logo-green-light.svg',
                    densities: 'x1 x2',
                    alt: 'nuxt-logo',
                    style: {
                      height: '24px',
                      width: '99px',
                    },
                  }),
                ]
              }
            }),
            _: 1,
            /* STABLE */
          },
          _parent,
        ),
      )
      _push('</nav></div>')
      _push(ssrRenderComponent(_component_Layout_SubMenu, null, null, _parent))
      _push(
        '</header><div class="main_content container mx-auto px-1"><div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-slate-800">',
      )
      ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent)
      _push(
        `</div></div><footer class="sticky_footer py-20 text-center text-sm text-gray-600 dark:bg-slate-900"><div class="container mx-auto max-w-screen-lg px-8"><p> \xA9 ${ssrInterpolate(/* @__PURE__ */ new Date().getFullYear())} - ${ssrInterpolate(_ctx.$t('site.name'))}</p></div></footer></div>`,
      )
    }
  },
})
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'layouts/default.vue',
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/layouts/default.vue'],
])

export { _default as default }
// # sourceMappingURL=default-C3s4TwZ5.mjs.map
