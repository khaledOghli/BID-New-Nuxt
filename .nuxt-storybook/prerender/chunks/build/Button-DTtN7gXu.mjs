import { useSSRContext, defineComponent, computed, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrRenderVNode, ssrRenderSlot } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: "light"
    },
    rounded: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "primary",
      validator: (v) => ["primary", "tertiary", "ghost"].includes(v)
    },
    block: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md",
      validator: (v) => ["sm", "md", "lg"].includes(v)
    },
    shadow: {
      type: [Boolean, String],
      default: false,
      validator: (v) => [true, false, "sm", "md", "lg", "xl"].includes(v)
    }
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.to ? "nuxt-link" : props.href ? "a" : "button");
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        to: __props.to,
        href: __props.href,
        type: __props.type
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "default")];
          }
        }),
        _: 3
        /* FORWARDED */
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("UI/components/Button/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/khaledoghli/Work/BID-New-Nuxt/UI/components/Button/Button.vue"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Button-DTtN7gXu.mjs.map
