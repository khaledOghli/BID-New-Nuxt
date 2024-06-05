import { computed, defineComponent, h, ref, resolveComponent } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { useRouter as useRouter$1 } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue-router@4.3.2_vue@3.4.27_typescript@5.4.5_/node_modules/vue-router/dist/vue-router.node.mjs';
import { j as hasProtocol, y as navigateTo, x as parseQuery, p as parseURL, b as useRouter, z as withTrailingSlash, A as withoutTrailingSlash } from './server.mjs';

const firstNonUndefined = (...args) => args.find(arg => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = 'noopener noreferrer';
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || 'NuxtLink';
  const checkPropConflicts = (props, main, sub) => {
    if (props[main] !== void 0 && props[sub] !== void 0)
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
  };
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== 'append' && options.trailingSlash !== 'remove')
      return to;
    const normalizeTrailingSlash = options.trailingSlash === 'append' ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === 'string')
      return normalizeTrailingSlash(to, true);
    const path = 'path' in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true),
    };
  };
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false,
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false,
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false,
      },
      rel: {
        type: String,
        default: void 0,
        required: false,
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false,
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false,
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false,
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false,
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false,
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false,
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false,
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false,
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false,
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false,
      },
    },
    setup(props, { slots }) {
      const router = useRouter() ?? useRouter$1();
      const to = computed(() => {
        checkPropConflicts(props, 'to', 'href');
        const path = props.to || props.href || '';
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external)
          return true;
        if (props.target && props.target !== '_self')
          return true;
        if (typeof to.value === 'object')
          return false;
        return to.value === '' || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        let _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom,
          };
          if (!props.custom) {
            if (prefetched.value)
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent('RouterLink'),
            routerLinkProps,
            slots.default,
          );
        }
        const href = typeof to.value === 'object' ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, 'noRel', 'rel');
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : '') || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default)
            return null;
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href)
                return void 0;
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href,
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false,
          });
        }
        return h('a', {
          ref: el,
          href,
          rel,
          target,
        }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    },
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink({ componentName: 'NuxtLink' });

export { __nuxt_component_0 as _ };
// # sourceMappingURL=nuxt-link-CLfuIrY3.mjs.map
