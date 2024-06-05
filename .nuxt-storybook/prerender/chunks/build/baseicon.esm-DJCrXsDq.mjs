import { mergeProps } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs'
import { B as BaseStyle, O as ObjectUtils, q as useStyle } from './server.mjs'

function _typeof$1(o) {
  '@babel/helpers - typeof'
  return _typeof$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2
    }, _typeof$1(o)
}
function ownKeys$1(e, r) {
  const t = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e)
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable
    })), t.push.apply(t, o)
  }
  return t
}
function _objectSpread$1(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {}
    r % 2
      ? ownKeys$1(Object(t), true).forEach((r2) => {
        _defineProperty$1(e, r2, t[r2])
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$1(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2))
        })
  }
  return e
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key)
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true })
  else
    obj[key] = value

  return obj
}
function _toPropertyKey$1(t) {
  const i = _toPrimitive$1(t, 'string')
  return _typeof$1(i) == 'symbol' ? i : String(i)
}
function _toPrimitive$1(t, r) {
  if (_typeof$1(t) != 'object' || !t)
    return t
  const e = t[Symbol.toPrimitive]
  if (void 0 !== e) {
    const i = e.call(t, r || 'default')
    if (_typeof$1(i) != 'object')
      return i
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (r === 'string' ? String : Number)(t)
}
const BaseComponentStyle = BaseStyle.extend({
  name: 'common',
  loadGlobalStyle: function loadGlobalStyle(globalCSS) {
    const options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return useStyle(globalCSS, _objectSpread$1({
      name: 'global',
    }, options))
  },
})
function _typeof$2(o) {
  '@babel/helpers - typeof'
  return _typeof$2 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2
    }, _typeof$2(o)
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest()
}
function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter)
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return
  if (typeof o === 'string')
    return _arrayLikeToArray(o, minLen)
  let n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor)
    n = o.constructor.name
  if (n === 'Map' || n === 'Set')
    return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i]
  return arr2
}
function _iterableToArrayLimit(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator']
  if (t != null) {
    let e; let n; let i; let u; const a = []; let f = true; let o = false
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return
        f = false
      }
      else {
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
      }
    }
    catch (r2) {
      o = true, n = r2
    }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return
      }
      finally {
        if (o)
          throw n
      }
    }
    return a
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr
}
function ownKeys$2(e, r) {
  const t = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e)
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable
    })), t.push.apply(t, o)
  }
  return t
}
function _objectSpread$2(e) {
  for (let r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {}
    r % 2
      ? ownKeys$2(Object(t), true).forEach((r2) => {
        _defineProperty$2(e, r2, t[r2])
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys$2(Object(t)).forEach((r2) => {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2))
        })
  }
  return e
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key)
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true })
  else
    obj[key] = value

  return obj
}
function _toPropertyKey$2(t) {
  const i = _toPrimitive$2(t, 'string')
  return _typeof$2(i) == 'symbol' ? i : String(i)
}
function _toPrimitive$2(t, r) {
  if (_typeof$2(t) != 'object' || !t)
    return t
  const e = t[Symbol.toPrimitive]
  if (void 0 !== e) {
    const i = e.call(t, r || 'default')
    if (_typeof$2(i) != 'object')
      return i
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (r === 'string' ? String : Number)(t)
}
const script$1 = {
  name: 'BaseComponent',
  props: {
    pt: {
      type: Object,
      default: void 0,
    },
    ptOptions: {
      type: Object,
      default: void 0,
    },
    unstyled: {
      type: Boolean,
      default: void 0,
    },
  },
  inject: {
    $parentInstance: {
      default: void 0,
    },
  },
  watch: {
    isUnstyled: {
      immediate: true,
      handler: function handler(newValue) {
        if (!newValue) {
          let _this$$config, _this$$config2
          BaseComponentStyle.loadStyle({
            nonce: (_this$$config = this.$config) === null || _this$$config === void 0 || (_this$$config = _this$$config.csp) === null || _this$$config === void 0 ? void 0 : _this$$config.nonce,
          })
          this.$options.style && this.$style.loadStyle({
            nonce: (_this$$config2 = this.$config) === null || _this$$config2 === void 0 || (_this$$config2 = _this$$config2.csp) === null || _this$$config2 === void 0 ? void 0 : _this$$config2.nonce,
          })
        }
      },
    },
  },
  beforeCreate: function beforeCreate() {
    let _this$pt, _this$pt2, _this$pt3, _ref, _ref$onBeforeCreate, _this$$config3, _this$$primevue, _this$$primevue2, _this$$primevue3, _ref2, _ref2$onBeforeCreate
    const _usept = (_this$pt = this.pt) === null || _this$pt === void 0 ? void 0 : _this$pt._usept
    const originalValue = _usept ? (_this$pt2 = this.pt) === null || _this$pt2 === void 0 || (_this$pt2 = _this$pt2.originalValue) === null || _this$pt2 === void 0 ? void 0 : _this$pt2[this.$.type.name] : void 0
    const value = _usept ? (_this$pt3 = this.pt) === null || _this$pt3 === void 0 || (_this$pt3 = _this$pt3.value) === null || _this$pt3 === void 0 ? void 0 : _this$pt3[this.$.type.name] : this.pt;
    (_ref = value || originalValue) === null || _ref === void 0 || (_ref = _ref.hooks) === null || _ref === void 0 || (_ref$onBeforeCreate = _ref.onBeforeCreate) === null || _ref$onBeforeCreate === void 0 || _ref$onBeforeCreate.call(_ref)
    const _useptInConfig = (_this$$config3 = this.$config) === null || _this$$config3 === void 0 || (_this$$config3 = _this$$config3.pt) === null || _this$$config3 === void 0 ? void 0 : _this$$config3._usept
    const originalValueInConfig = _useptInConfig ? (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.pt) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.originalValue : void 0
    const valueInConfig = _useptInConfig ? (_this$$primevue2 = this.$primevue) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.config) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.pt) === null || _this$$primevue2 === void 0 ? void 0 : _this$$primevue2.value : (_this$$primevue3 = this.$primevue) === null || _this$$primevue3 === void 0 || (_this$$primevue3 = _this$$primevue3.config) === null || _this$$primevue3 === void 0 ? void 0 : _this$$primevue3.pt;
    (_ref2 = valueInConfig || originalValueInConfig) === null || _ref2 === void 0 || (_ref2 = _ref2[this.$.type.name]) === null || _ref2 === void 0 || (_ref2 = _ref2.hooks) === null || _ref2 === void 0 || (_ref2$onBeforeCreate = _ref2.onBeforeCreate) === null || _ref2$onBeforeCreate === void 0 || _ref2$onBeforeCreate.call(_ref2)
  },
  created: function created() {
    this._hook('onCreated')
  },
  beforeMount: function beforeMount() {
    let _this$$config4
    BaseStyle.loadStyle({
      nonce: (_this$$config4 = this.$config) === null || _this$$config4 === void 0 || (_this$$config4 = _this$$config4.csp) === null || _this$$config4 === void 0 ? void 0 : _this$$config4.nonce,
    })
    this._loadGlobalStyles()
    this._hook('onBeforeMount')
  },
  mounted: function mounted() {
    this._hook('onMounted')
  },
  beforeUpdate: function beforeUpdate() {
    this._hook('onBeforeUpdate')
  },
  updated: function updated() {
    this._hook('onUpdated')
  },
  beforeUnmount: function beforeUnmount() {
    this._hook('onBeforeUnmount')
  },
  unmounted: function unmounted() {
    this._hook('onUnmounted')
  },
  methods: {
    _hook: function _hook(hookName) {
      if (!this.$options.hostName) {
        const selfHook = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, 'hooks.'.concat(hookName))
        const defaultHook = this._useDefaultPT(this._getOptionValue, 'hooks.'.concat(hookName))
        selfHook === null || selfHook === void 0 || selfHook()
        defaultHook === null || defaultHook === void 0 || defaultHook()
      }
    },
    _mergeProps: function _mergeProps(fn) {
      for (var _len = arguments.length, args = Array.from({ length: _len > 1 ? _len - 1 : 0 }), _key2 = 1; _key2 < _len; _key2++)
        args[_key2 - 1] = arguments[_key2]

      return ObjectUtils.isFunction(fn) ? fn.apply(void 0, args) : mergeProps.apply(void 0, args)
    },
    _loadGlobalStyles: function _loadGlobalStyles() {
      let _this$$config5
      const globalCSS = this._useGlobalPT(this._getOptionValue, 'global.css', this.$params)
      ObjectUtils.isNotEmpty(globalCSS) && BaseComponentStyle.loadGlobalStyle(globalCSS, {
        nonce: (_this$$config5 = this.$config) === null || _this$$config5 === void 0 || (_this$$config5 = _this$$config5.csp) === null || _this$$config5 === void 0 ? void 0 : _this$$config5.nonce,
      })
    },
    _getHostInstance: function _getHostInstance(instance) {
      return instance ? this.$options.hostName ? instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0
    },
    _getPropValue: function _getPropValue(name) {
      let _this$_getHostInstanc
      return this[name] || ((_this$_getHostInstanc = this._getHostInstance(this)) === null || _this$_getHostInstanc === void 0 ? void 0 : _this$_getHostInstanc[name])
    },
    _getOptionValue: function _getOptionValue(options) {
      const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
      const params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      const fKeys = ObjectUtils.toFlatCase(key).split('.')
      const fKey = fKeys.shift()
      return fKey
        ? ObjectUtils.isObject(options)
          ? this._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find((k) => {
            return ObjectUtils.toFlatCase(k) === fKey
          }) || ''], params), fKeys.join('.'), params)
          : void 0
        : ObjectUtils.getItemValue(options, params)
    },
    _getPTValue: function _getPTValue() {
      let _this$$config6
      const obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
      const params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      const searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true
      const searchOut = /./.test(key) && !!params[key.split('.')[0]]
      const _ref3 = this._getPropValue('ptOptions') || ((_this$$config6 = this.$config) === null || _this$$config6 === void 0 ? void 0 : _this$$config6.ptOptions) || {}; const _ref3$mergeSections = _ref3.mergeSections; const mergeSections = _ref3$mergeSections === void 0 ? true : _ref3$mergeSections; const _ref3$mergeProps = _ref3.mergeProps; const useMergeProps = _ref3$mergeProps === void 0 ? false : _ref3$mergeProps
      const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0
      const self = searchOut
        ? void 0
        : this._getPTSelf(obj, this._getPTClassValue, key, _objectSpread$2(_objectSpread$2({}, params), {}, {
          global: global || {},
        }))
      const datasets = this._getPTDatasets(key)
      return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : _objectSpread$2(_objectSpread$2(_objectSpread$2({}, global), self), datasets) : _objectSpread$2(_objectSpread$2({}, self), datasets)
    },
    _getPTSelf: function _getPTSelf() {
      const obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      for (var _len2 = arguments.length, args = Array.from({ length: _len2 > 1 ? _len2 - 1 : 0 }), _key3 = 1; _key3 < _len2; _key3++)
        args[_key3 - 1] = arguments[_key3]

      return mergeProps(
        this._usePT.apply(this, [this._getPT(obj, this.$name)].concat(args)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(args)),
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      )
    },
    _getPTDatasets: function _getPTDatasets() {
      let _this$pt4, _this$pt5
      const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
      const datasetPrefix = 'data-pc-'
      const isExtended = key === 'root' && ObjectUtils.isNotEmpty((_this$pt4 = this.pt) === null || _this$pt4 === void 0 ? void 0 : _this$pt4['data-pc-section'])
      return key !== 'transition' && _objectSpread$2(_objectSpread$2({}, key === 'root' && _objectSpread$2(_defineProperty$2({}, ''.concat(datasetPrefix, 'name'), ObjectUtils.toFlatCase(isExtended ? (_this$pt5 = this.pt) === null || _this$pt5 === void 0 ? void 0 : _this$pt5['data-pc-section'] : this.$.type.name)), isExtended && _defineProperty$2({}, ''.concat(datasetPrefix, 'extend'), ObjectUtils.toFlatCase(this.$.type.name)))), {}, _defineProperty$2({}, ''.concat(datasetPrefix, 'section'), ObjectUtils.toFlatCase(key)))
    },
    _getPTClassValue: function _getPTClassValue() {
      const value = this._getOptionValue.apply(this, arguments)
      return ObjectUtils.isString(value) || ObjectUtils.isArray(value)
        ? {
            class: value,
          }
        : value
    },
    _getPT: function _getPT(pt) {
      const _this = this
      const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
      const callback = arguments.length > 2 ? arguments[2] : void 0
      const getValue = function getValue2(value) {
        let _ref5
        const checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false
        const computedValue = callback ? callback(value) : value
        const _key = ObjectUtils.toFlatCase(key)
        const _cKey = ObjectUtils.toFlatCase(_this.$name)
        return (_ref5 = checkSameKey ? _key !== _cKey ? computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key] : void 0 : computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _ref5 !== void 0 ? _ref5 : computedValue
      }
      return pt !== null && pt !== void 0 && pt.hasOwnProperty('_usept')
        ? {
            _usept: pt._usept,
            originalValue: getValue(pt.originalValue),
            value: getValue(pt.value),
          }
        : getValue(pt, true)
    },
    _usePT: function _usePT(pt, callback, key, params) {
      const fn = function fn2(value2) {
        return callback(value2, key, params)
      }
      if (pt !== null && pt !== void 0 && pt.hasOwnProperty('_usept')) {
        let _this$$config7
        const _ref6 = pt._usept || ((_this$$config7 = this.$config) === null || _this$$config7 === void 0 ? void 0 : _this$$config7.ptOptions) || {}; const _ref6$mergeSections = _ref6.mergeSections; const mergeSections = _ref6$mergeSections === void 0 ? true : _ref6$mergeSections; const _ref6$mergeProps = _ref6.mergeProps; const useMergeProps = _ref6$mergeProps === void 0 ? false : _ref6$mergeProps
        const originalValue = fn(pt.originalValue)
        const value = fn(pt.value)
        if (originalValue === void 0 && value === void 0)
          return void 0
        else if (ObjectUtils.isString(value))
          return value
        else if (ObjectUtils.isString(originalValue))
          return originalValue
        return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : _objectSpread$2(_objectSpread$2({}, originalValue), value) : value
      }
      return fn(pt)
    },
    _useGlobalPT: function _useGlobalPT(callback, key, params) {
      return this._usePT(this.globalPT, callback, key, params)
    },
    _useDefaultPT: function _useDefaultPT(callback, key, params) {
      return this._usePT(this.defaultPT, callback, key, params)
    },
    ptm: function ptm() {
      const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
      const params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      return this._getPTValue(this.pt, key, _objectSpread$2(_objectSpread$2({}, this.$params), params))
    },
    ptmi: function ptmi() {
      const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
      const params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      return mergeProps(this.$_attrsNoPT, this.ptm(key, params))
    },
    ptmo: function ptmo() {
      const obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      const key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
      const params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      return this._getPTValue(obj, key, _objectSpread$2({
        instance: this,
      }, params), false)
    },
    cx: function cx() {
      const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
      const params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      return !this.isUnstyled ? this._getOptionValue(this.$style.classes, key, _objectSpread$2(_objectSpread$2({}, this.$params), params)) : void 0
    },
    sx: function sx() {
      const key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
      const when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true
      const params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      if (when) {
        const self = this._getOptionValue(this.$style.inlineStyles, key, _objectSpread$2(_objectSpread$2({}, this.$params), params))
        const base = this._getOptionValue(BaseComponentStyle.inlineStyles, key, _objectSpread$2(_objectSpread$2({}, this.$params), params))
        return [base, self]
      }
      return void 0
    },
  },
  computed: {
    globalPT: function globalPT() {
      let _this$$config8; const _this2 = this
      return this._getPT((_this$$config8 = this.$config) === null || _this$$config8 === void 0 ? void 0 : _this$$config8.pt, void 0, (value) => {
        return ObjectUtils.getItemValue(value, {
          instance: _this2,
        })
      })
    },
    defaultPT: function defaultPT() {
      let _this$$config9; const _this3 = this
      return this._getPT((_this$$config9 = this.$config) === null || _this$$config9 === void 0 ? void 0 : _this$$config9.pt, void 0, (value) => {
        return _this3._getOptionValue(value, _this3.$name, _objectSpread$2({}, _this3.$params)) || ObjectUtils.getItemValue(value, _objectSpread$2({}, _this3.$params))
      })
    },
    isUnstyled: function isUnstyled() {
      let _this$$config10
      return this.unstyled !== void 0 ? this.unstyled : (_this$$config10 = this.$config) === null || _this$$config10 === void 0 ? void 0 : _this$$config10.unstyled
    },
    $params: function $params() {
      const parentInstance = this._getHostInstance(this) || this.$parent
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: parentInstance,
          props: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$props,
          state: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$data,
          attrs: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$attrs,
        },
        /* @deprecated since v3.43.0. Use the `parent.instance` instead of the `parentInstance`. */
        parentInstance,
      }
    },
    $style: function $style() {
      return _objectSpread$2(_objectSpread$2({
        classes: void 0,
        inlineStyles: void 0,
        loadStyle: function loadStyle() {
        },
        loadCustomStyle: function loadCustomStyle() {
        },
      }, (this._getHostInstance(this) || {}).$style), this.$options.style)
    },
    $config: function $config() {
      let _this$$primevue4
      return (_this$$primevue4 = this.$primevue) === null || _this$$primevue4 === void 0 ? void 0 : _this$$primevue4.config
    },
    $name: function $name() {
      return this.$options.hostName || this.$.type.name
    },
    $_attrsPT: function $_attrsPT() {
      return Object.entries(this.$attrs || {}).filter((_ref7) => {
        const _ref8 = _slicedToArray(_ref7, 1); const key = _ref8[0]
        return key === null || key === void 0 ? void 0 : key.startsWith('pt:')
      }).reduce((result, _ref9) => {
        const _ref10 = _slicedToArray(_ref9, 2); const key = _ref10[0]; const value = _ref10[1]
        const _key$split = key.split(':'); const _key$split2 = _toArray(_key$split); const rest = _key$split2.slice(1)
        rest === null || rest === void 0 || rest.reduce((currentObj, nestedKey, index, array) => {
          !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {})
          return currentObj[nestedKey]
        }, result)
        return result
      }, {})
    },
    $_attrsNoPT: function $_attrsNoPT() {
      return Object.entries(this.$attrs || {}).filter((_ref11) => {
        const _ref12 = _slicedToArray(_ref11, 1); const key = _ref12[0]
        return !(key !== null && key !== void 0 && key.startsWith('pt:'))
      }).reduce((acc, _ref13) => {
        const _ref14 = _slicedToArray(_ref13, 2); const key = _ref14[0]; const value = _ref14[1]
        acc[key] = value
        return acc
      }, {})
    },
  },
}
const css = '\n.p-icon {\n    display: inline-block;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n'
const BaseIconStyle = BaseStyle.extend({
  name: 'baseicon',
  css,
})
function _typeof(o) {
  '@babel/helpers - typeof'
  return _typeof = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (o2) {
      return typeof o2
    }
    : function (o2) {
      return o2 && typeof Symbol == 'function' && o2.constructor === Symbol && o2 !== Symbol.prototype ? 'symbol' : typeof o2
    }, _typeof(o)
}
function ownKeys(e, r) {
  const t = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    let o = Object.getOwnPropertySymbols(e)
    r && (o = o.filter((r2) => {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable
    })), t.push.apply(t, o)
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
  if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true })
  else
    obj[key] = value

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
const script = {
  name: 'BaseIcon',
  extends: script$1,
  props: {
    label: {
      type: String,
      default: void 0,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  style: BaseIconStyle,
  methods: {
    pti: function pti() {
      const isLabelEmpty = ObjectUtils.isEmpty(this.label)
      return _objectSpread(_objectSpread({}, !this.isUnstyled && {
        class: ['p-icon', {
          'p-icon-spin': this.spin,
        }],
      }), {}, {
        'role': !isLabelEmpty ? 'img' : void 0,
        'aria-label': !isLabelEmpty ? this.label : void 0,
        'aria-hidden': isLabelEmpty,
      })
    },
  },
}

export { script$1 as a, script as s }
// # sourceMappingURL=baseicon.esm-DJCrXsDq.mjs.map
