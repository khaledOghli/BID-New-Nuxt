import { createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, isRef, mergeProps, openBlock, ref, renderSlot, resolveComponent, toDisplayString, toRefs, unref, useSSRContext, watch, withCtx } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs'
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs'
import { _ as __nuxt_component_0$2 } from './nuxt-link-CLfuIrY3.mjs'
import __nuxt_component_0$3 from './Icon-9dJGgVH4.mjs'
import { _ as _export_sfc, u as useHead, s as useI18n, b as useRouter, r as useState } from './server.mjs'
import { u as useAuthStore } from './auth-se_92EcM.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-router@4.3.2_vue@3.4.27_typescript@5.4.5_/node_modules/vue-router/dist/vue-router.node.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@iconify+vue@4.1.2_vue@3.4.27_typescript@5.4.5_/node_modules/@iconify/vue/dist/offline.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@iconify+vue@4.1.2_vue@3.4.27_typescript@5.4.5_/node_modules/@iconify/vue/dist/iconify.mjs'
import './index-Cj2Bc71W.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs'
import '../_/renderer.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/@unhead+ssr@1.9.11/node_modules/@unhead/ssr/dist/index.mjs'
import '../runtime.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs'
import 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs'
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: 'SidebarLink',
  __ssrInlineRender: true,
  props: {
    icon: {
      type: null,
      required: false,
    },
    appendIcon: {
      type: null,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    child: {
      type: Boolean,
      required: false,
    },
    parent: {
      type: Boolean,
      required: false,
    },
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2
      const _component_Icon = __nuxt_component_0$3
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: 'flex w-full items-center gap-2 rounded px-4 py-2 transition duration-300 hover:bg-indigo-500 hover:text-white',
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.child) {
              _push2(`<div class="w-5"${_scopeId}></div>`)
            }
            else if (_ctx.icon) {
              _push2(ssrRenderComponent(_component_Icon, {
                class: 'h-5 w-5',
                name: _ctx.icon,
              }, null, _parent2, _scopeId))
            }
            else {
              _push2('<!---->')
            }
            _push2(`<span class="flex-grow"${_scopeId}>`)
            ssrRenderSlot(_ctx.$slots, 'default', {}, () => {
              _push2(`${ssrInterpolate(_ctx.text)}`)
            }, _push2, _parent2, _scopeId)
            _push2('</span>')
            if (_ctx.parent) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: 'ri:arrow-right-s-line',
                class: 'h-5 w-5',
              }, null, _parent2, _scopeId))
            }
            else if (_ctx.appendIcon) {
              _push2(`<div class="${ssrRenderClass([_ctx.appendIcon, 'h-5 w-5'])}"${_scopeId}></div>`)
            }
            else {
              _push2('<!---->')
            }
          }
          else {
            return [_ctx.child
              ? (openBlock(), createBlock('div', {
                  key: 0,
                  class: 'w-5',
                }))
              : _ctx.icon
                ? (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    class: 'h-5 w-5',
                    name: _ctx.icon,
                  }, null, 8, ['name']))
                : createCommentVNode('v-if', true), createVNode('span', {
              class: 'flex-grow',
            }, [renderSlot(_ctx.$slots, 'default', {}, () => [createTextVNode(
              toDisplayString(_ctx.text),
              1,
              /* TEXT */
            )])]), _ctx.parent ? (openBlock(), createBlock(_component_Icon, {
              key: 2,
              name: 'ri:arrow-right-s-line',
              class: 'h-5 w-5',
            })) : _ctx.appendIcon ? (openBlock(), createBlock(
              'div',
              {
                key: 3,
                class: ['h-5 w-5', _ctx.appendIcon],
              },
              null,
              2,
              /* CLASS */
            )) : createCommentVNode('v-if', true)]
          }
        }),
        _: 3,
        /* FORWARDED */
      }, _parent))
    }
  },
})
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('apps/dashboard/components/admin/SidebarLink.vue')
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/apps/dashboard/components/admin/SidebarLink.vue']])
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: 'SidebarItem',
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  setup(__props) {
    const isOpen = ref(false)
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminSidebarLink = __nuxt_component_0$1
      _push(`<li${ssrRenderAttrs(_attrs)}>`)
      _push(ssrRenderComponent(_component_AdminSidebarLink, mergeProps(_ctx.menu, {
        parent: !!_ctx.menu.children,
        onClick: $event => isOpen.value = !unref(isOpen),
      }), null, _parent))
      if (_ctx.menu.children) {
        _push(`<ul class="${ssrRenderClass(unref(isOpen) ? 'block' : 'hidden')}"><!--[-->`)
        ssrRenderList(_ctx.menu.children, (child) => {
          _push('<li>')
          _push(ssrRenderComponent(_component_AdminSidebarLink, mergeProps({
            ref_for: true,
          }, child, {
            child: '',
          }), null, _parent))
          _push('</li>')
        })
        _push('<!--]--></ul>')
      }
      else {
        _push('<!---->')
      }
      _push('</li>')
    }
  },
})
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('apps/dashboard/components/admin/SidebarItem.vue')
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/apps/dashboard/components/admin/SidebarItem.vue']])
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: 'Sidebar',
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(__props, {
    emit: __emit,
  }) {
    const props = __props
    const emit = __emit
    const {
      modelValue,
    } = toRefs(props)
    const isOpen = ref(props.modelValue)
    watch(modelValue, (val) => {
      isOpen.value = val
    }, {
      immediate: true,
    })
    watch(isOpen, (val) => {
      emit('update:modelValue', val)
    })
    const menus = ref([{
      icon: 'ri:dashboard-line',
      text: 'Dashboard',
      to: '/',
    }, {
      text: 'Components',
      icon: 'ic:round-settings-input-component',
      children: [{
        text: 'Autocomplete',
        to: '/components/autocomplete',
      }],
    }, {
      text: 'Pages',
      icon: 'ri:flag-line',
      children: [{
        text: 'Login',
        to: '/auth/login',
      }, {
        text: 'Register',
        to: '/auth/register',
      }, {
        text: 'Forgot Password',
        to: '/auth/forgot-password',
      }, {
        text: 'Reset Password',
        to: '/auth/reset-password',
      }, {
        text: 'Counter',
        to: '/counter',
      }, {
        text: 'Content',
        to: '/content',
      }, {
        text: 'Blog',
        to: '/blog',
      }],
    }])
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VModalBackdrop = resolveComponent('VModalBackdrop')
      const _component_NuxtLink = __nuxt_component_0$2
      const _component_AdminSidebarItem = __nuxt_component_1$1
      _push('<!--[-->')
      if (unref(isOpen)) {
        _push(ssrRenderComponent(_component_VModalBackdrop, {
          onClick: $event => isOpen.value = false,
        }, null, _parent))
      }
      else {
        _push('<!---->')
      }
      _push(`<aside class="${ssrRenderClass([unref(isOpen) ? 'translate-x-0' : '-translate-x-full', 'fixed top-0 z-10 h-screen w-10/12 transform flex-col border-r border-gray-200 bg-white px-2 pb-2 transition-all duration-300 sm:sticky sm:w-[300px] sm:transform-none'])}"><!-- nav header --><div class="-mx-2 flex items-center justify-between gap-2 border-b border-gray-200 px-4 sm:border-none">`)
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: '/',
        class: 'flex w-full items-center justify-between gap-2 py-5 text-lg font-bold text-indigo-500 sm:justify-center',
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center gap-2"${_scopeId}>${ssrInterpolate(_ctx.$t('app_name'))}</div>`)
          }
          else {
            return [createVNode(
              'div',
              {
                class: 'flex items-center justify-center gap-2',
              },
              toDisplayString(_ctx.$t('app_name')),
              1,
              /* TEXT */
            )]
          }
        }),
        _: 1,
        /* STABLE */
      }, _parent))
      _push('<button class="text i-ri-close-line inline h-6 w-6 sm:hidden"></button></div><!-- menu --><ul class="flex-grow"><!--[-->')
      ssrRenderList(unref(menus), (menu) => {
        _push(ssrRenderComponent(_component_AdminSidebarItem, {
          key: menu.text,
          menu,
        }, null, _parent))
      })
      _push('<!--]--></ul></aside><!--]-->')
    }
  },
})
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('apps/dashboard/components/admin/Sidebar.vue')
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/apps/dashboard/components/admin/Sidebar.vue']])
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: 'Header',
  __ssrInlineRender: true,
  emits: ['menu:click'],
  setup(__props) {
    const auth = useAuthStore()
    const router = useRouter()
    function logout() {
      auth.logout()
      router.push('/auth/login')
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3
      const _component_VDropdown = resolveComponent('VDropdown')
      const _component_VDropdownButton = resolveComponent('VDropdownButton')
      const _component_VDropdownItem = resolveComponent('VDropdownItem')
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: 'border-b border-gray-200 bg-white',
      }, _attrs))}><div class="flex items-center justify-between gap-2 py-3 pl-3 pr-6"><button class="inline flex-shrink-0 rounded px-4 py-2 sm:hidden">`)
      _push(ssrRenderComponent(_component_Icon, {
        name: 'ri:menu-line',
        class: 'h-5 w-5',
      }, null, _parent))
      _push('</button><div class="relative sm:w-3/12">')
      _push(ssrRenderComponent(_component_Icon, {
        name: 'ri-search-line',
        class: 'absolute left-3 top-2.5 h-5 w-5 text-gray-400',
      }, null, _parent))
      _push('<input type="search" placeholder="Search" class="w-full appearance-none rounded-lg border-none py-2 pl-10 focus:border-none focus:outline-none focus:ring-0"></div>')
      _push(ssrRenderComponent(_component_VDropdown, {
        right: '',
      }, {
        activator: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VDropdownButton, {
              as: 'button',
              type: 'button',
              class: 'rounded px-2 py-2 text-gray-600 hover:bg-gray-200 hover:text-indigo-500',
            }, {
              default: withCtx(({
                open,
              }, _push3, _parent3, _scopeId2) => {
                let _a, _b
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([[open ? 'text-indigo-500' : ''], 'flex items-center gap-2'])}"${_scopeId2}>`)
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: 'ri:user-line',
                    class: 'h-5 w-5',
                  }, null, _parent3, _scopeId2))
                  _push3(`<span class="hidden sm:inline"${_scopeId2}>${ssrInterpolate((_a = unref(auth).user) == null ? void 0 : _a.name)}</span>`)
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: 'ri:arrow-down-s-line',
                    class: 'i-ri-arrow-down-s-line h-5 w-5',
                  }, null, _parent3, _scopeId2))
                  _push3('</span>')
                }
                else {
                  return [createVNode(
                    'span',
                    {
                      class: [[open ? 'text-indigo-500' : ''], 'flex items-center gap-2'],
                    },
                    [createVNode(_component_Icon, {
                      name: 'ri:user-line',
                      class: 'h-5 w-5',
                    }), createVNode(
                      'span',
                      {
                        class: 'hidden sm:inline',
                      },
                      toDisplayString((_b = unref(auth).user) == null ? void 0 : _b.name),
                      1,
                      /* TEXT */
                    ), createVNode(_component_Icon, {
                      name: 'ri:arrow-down-s-line',
                      class: 'i-ri-arrow-down-s-line h-5 w-5',
                    })],
                    2,
                    /* CLASS */
                  )]
                }
              }),
              _: 1,
              /* STABLE */
            }, _parent2, _scopeId))
          }
          else {
            return [createVNode(_component_VDropdownButton, {
              as: 'button',
              type: 'button',
              class: 'rounded px-2 py-2 text-gray-600 hover:bg-gray-200 hover:text-indigo-500',
            }, {
              default: withCtx(({
                open,
              }) => {
                let _a
                return [createVNode(
                  'span',
                  {
                    class: [[open ? 'text-indigo-500' : ''], 'flex items-center gap-2'],
                  },
                  [createVNode(_component_Icon, {
                    name: 'ri:user-line',
                    class: 'h-5 w-5',
                  }), createVNode(
                    'span',
                    {
                      class: 'hidden sm:inline',
                    },
                    toDisplayString((_a = unref(auth).user) == null ? void 0 : _a.name),
                    1,
                    /* TEXT */
                  ), createVNode(_component_Icon, {
                    name: 'ri:arrow-down-s-line',
                    class: 'i-ri-arrow-down-s-line h-5 w-5',
                  })],
                  2,
                  /* CLASS */
                )]
              }),
              _: 1,
              /* STABLE */
            })]
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VDropdownItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  _push3('Profile')
                else
                  return [createTextVNode('Profile')]
              }),
              _: 1,
              /* STABLE */
            }, _parent2, _scopeId))
            _push2(ssrRenderComponent(_component_VDropdownItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  _push3('Setting')
                else
                  return [createTextVNode('Setting')]
              }),
              _: 1,
              /* STABLE */
            }, _parent2, _scopeId))
            _push2(ssrRenderComponent(_component_VDropdownItem, {
              divider: '',
            }, null, _parent2, _scopeId))
            _push2(ssrRenderComponent(_component_VDropdownItem, {
              onClick: logout,
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  _push3(' Logout ')
                else
                  return [createTextVNode(' Logout ')]
              }),
              _: 1,
              /* STABLE */
            }, _parent2, _scopeId))
          }
          else {
            return [createVNode(_component_VDropdownItem, null, {
              default: withCtx(() => [createTextVNode('Profile')]),
              _: 1,
              /* STABLE */
            }), createVNode(_component_VDropdownItem, null, {
              default: withCtx(() => [createTextVNode('Setting')]),
              _: 1,
              /* STABLE */
            }), createVNode(_component_VDropdownItem, {
              divider: '',
            }), createVNode(_component_VDropdownItem, {
              onClick: logout,
            }, {
              default: withCtx(() => [createTextVNode(' Logout ')]),
              _: 1,
              /* STABLE */
            })]
          }
        }),
        _: 1,
        /* STABLE */
      }, _parent))
      _push('</div></header>')
    }
  },
})
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('apps/dashboard/components/admin/Header.vue')
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/apps/dashboard/components/admin/Header.vue']])
const useAdminSidebar = () => useState('sidebar', () => false)
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'admin',
  __ssrInlineRender: true,
  setup(__props) {
    const {
      t,
    } = useI18n()
    useHead({
      title: t('app_name'),
    })
    const sidebar = useAdminSidebar()
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminSidebar = __nuxt_component_0
      const _component_AdminHeader = __nuxt_component_1
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: 'flex flex-col sm:flex-row',
      }, _attrs))}>`)
      _push(ssrRenderComponent(_component_AdminSidebar, {
        'modelValue': unref(sidebar),
        'onUpdate:modelValue': $event => isRef(sidebar) ? sidebar.value = $event : null,
      }, null, _parent))
      _push('<div class="w-full flex-grow">')
      _push(ssrRenderComponent(_component_AdminHeader, {
        'onMenu:click': $event => sidebar.value = true,
      }, null, _parent))
      _push('<!-- main content --><div class="px-6 py-6">')
      ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent)
      _push('</div></div></main>')
    }
  },
})
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('apps/dashboard/layouts/admin.vue')
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/apps/dashboard/layouts/admin.vue']])

export { admin as default }
// # sourceMappingURL=admin-DzqVjNYH.mjs.map
