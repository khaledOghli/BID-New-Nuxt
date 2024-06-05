import { defineComponent, mergeProps, renderSlot, useSSRContext, withCtx } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: 'CardHeader',
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false,
    },
    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        class: 'border-b px-4 py-3 text-lg font-semibold text-gray-700',
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, 'default', {}, () => {
        _push(`${ssrInterpolate(_ctx.title)}`);
      }, _push, _parent);
      _push('</h3>');
    };
  },
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('UI/components/Card/CardHeader.vue');
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/UI/components/Card/CardHeader.vue']]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: 'CardBody',
  __ssrInlineRender: true,
  props: {
    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: 'px-4 py-3 text-gray-600',
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent);
      _push('</div>');
    };
  },
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('UI/components/Card/CardBody.vue');
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/UI/components/Card/CardBody.vue']]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: 'CardFooter',
  __ssrInlineRender: true,
  props: {
    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: 'px-4 pb-3 text-gray-600',
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent);
      _push('</div>');
    };
  },
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('UI/components/Card/CardFooter.vue');
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/UI/components/Card/CardFooter.vue']]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'Card',
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: false,
    },
    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({
        wrapper: 'border border-gray-200 rounded-lg bg-white',
        header: '',
        body: '',
        footer: '',
      }),
    },
    hideHeader: {
      type: Boolean,
      required: false,
    },
    hideFooter: {
      type: Boolean,
      required: false,
    },
    headerClass: {
      type: String,
      required: false,
    },
    bodyClass: {
      type: String,
      required: false,
    },
    footerClass: {
      type: String,
      required: false,
    },
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCardHeader = __nuxt_component_0;
      const _component_VCardBody = __nuxt_component_1$1;
      const _component_VCardFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.classes.wrapper,
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, 'headerWrapper', {
        title: _ctx.title,
        bordered: _ctx.bordered,
        classes: [_ctx.classes.header, _ctx.headerClass],
        hideHeader: _ctx.hideHeader,
      }, () => {
        if (!_ctx.hideHeader) {
          _push(ssrRenderComponent(_component_VCardHeader, {
            title: _ctx.title,
            bordered: _ctx.bordered,
            class: [_ctx.classes.header, _ctx.headerClass],
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2)
                ssrRenderSlot(_ctx.$slots, 'header', {}, null, _push2, _parent2, _scopeId);
              else
                return [renderSlot(_ctx.$slots, 'header')];
            }),
            _: 3,
            /* FORWARDED */
          }, _parent));
        }
        else {
          _push('<!---->');
        }
      }, _push, _parent);
      _push(ssrRenderComponent(_component_VCardBody, {
        class: [_ctx.classes.body, _ctx.bodyClass],
        bordered: _ctx.bordered,
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, 'default', {
              classes: [_ctx.classes.body, _ctx.bodyClass],
              bordered: _ctx.bordered,
            }, null, _push2, _parent2, _scopeId);
          }
          else {
            return [renderSlot(_ctx.$slots, 'default', {
              classes: [_ctx.classes.body, _ctx.bodyClass],
              bordered: _ctx.bordered,
            })];
          }
        }),
        _: 3,
        /* FORWARDED */
      }, _parent));
      ssrRenderSlot(_ctx.$slots, 'footerWrapper', {
        classes: [_ctx.classes.footer, _ctx.footerClass],
        bordered: _ctx.bordered,
        hideFooter: _ctx.hideFooter,
      }, () => {
        if (!_ctx.hideFooter) {
          _push(ssrRenderComponent(_component_VCardFooter, {
            class: [_ctx.classes.footer, _ctx.footerClass],
            bordered: _ctx.bordered,
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2)
                ssrRenderSlot(_ctx.$slots, 'footer', {}, null, _push2, _parent2, _scopeId);
              else
                return [renderSlot(_ctx.$slots, 'footer')];
            }),
            _: 3,
            /* FORWARDED */
          }, _parent));
        }
        else {
          _push('<!---->');
        }
      }, _push, _parent);
      _push('</div>');
    };
  },
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('UI/components/Card/Card.vue');
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [['__file', '/Users/khaledoghli/Work/BID-New-Nuxt/UI/components/Card/Card.vue']]);

export { __nuxt_component_1 as _ };
// # sourceMappingURL=Card-BzdzGKPV.mjs.map
