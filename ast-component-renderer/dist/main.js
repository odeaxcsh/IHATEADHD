"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ASTComponentRenderer
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/registry.ts
var InMemoryRegistry = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  register(entry) {
    this.map.set(entry.type, entry.renderer);
  }
  get(type) {
    return this.map.get(type);
  }
  listTypes() {
    return [...this.map.keys()];
  }
};

// src/renderers/svelte.ts
var SvelteRenderer = class {
  constructor(SvelteComponent2, defaultProps = {}, mountPolicy = "append-inside-block") {
    this.SvelteComponent = SvelteComponent2;
    this.defaultProps = defaultProps;
    this.mountPolicy = mountPolicy;
  }
  render(node, mountTarget, rc) {
    const app = new this.SvelteComponent({
      target: mountTarget,
      props: { node, filePath: rc.filePath, app: rc.app, plugin: rc.plugin, ...this.defaultProps }
    });
    return mountTarget;
  }
};

// src/mount.ts
var VERBOSE = true;
var tag = (m) => `[ACR:mount] ${m}`;
var dbg = (...a) => VERBOSE && console.debug(...a);
function pickAnchorByLinesInScope(scopeEl, ctx, node) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const sLine = ((_c = (_b = (_a = node == null ? void 0 : node.position) == null ? void 0 : _a.start) == null ? void 0 : _b.line) != null ? _c : 1) - 1;
  const eLine = ((_f = (_e = (_d = node == null ? void 0 : node.position) == null ? void 0 : _d.end) == null ? void 0 : _e.line) != null ? _f : sLine + 1) - 1;
  dbg(tag(`pickAnchor scope=${scopeEl.tagName}.${scopeEl.className} node=${sLine}-${eLine}`));
  const candidates = [scopeEl];
  candidates.push(
    ...scopeEl.querySelectorAll([
      "li.task-list-item",
      "li",
      "p",
      "blockquote",
      "h1,h2,h3,h4,h5,h6",
      "table",
      "thead",
      "tbody",
      "tr",
      "td",
      "th",
      "pre",
      "code",
      "div"
    ].join(","))
  );
  let best = null;
  let considered = 0;
  for (const el of candidates) {
    const sec = ctx.getSectionInfo(el);
    if (!sec) continue;
    considered++;
    const inside = !(sLine < sec.lineStart || eLine > sec.lineEnd);
    const span = sec.lineEnd - sec.lineStart;
    dbg(tag(`cand ${el.tagName}.${el.className} sec=L${sec.lineStart}\u2013L${sec.lineEnd} inside=${inside} span=${span}`));
    if (!inside) continue;
    if (!best || span < best.span) best = { el, span };
  }
  dbg(tag(`candidates considered=${considered} chosen=${((_g = best == null ? void 0 : best.el) == null ? void 0 : _g.tagName) || "none"}`), (best == null ? void 0 : best.el) || null);
  return (_h = best == null ? void 0 : best.el) != null ? _h : null;
}
function placeMount(policy, anchor) {
  var _a, _b, _c;
  const host = document.createElement("div");
  if (policy === "before-anchor") (_a = anchor.parentElement) == null ? void 0 : _a.insertBefore(host, anchor);
  else if (policy === "after-anchor") (_b = anchor.parentElement) == null ? void 0 : _b.insertBefore(host, anchor.nextSibling);
  else if (policy === "append-inside-li") ((_c = anchor.closest("li")) != null ? _c : anchor).appendChild(host);
  else anchor.appendChild(host);
  return host;
}
function nodeId(node) {
  var _a, _b, _c, _d, _e, _f, _g;
  const t = (_a = node == null ? void 0 : node.type) != null ? _a : "node";
  const s = (_d = (_c = (_b = node == null ? void 0 : node.position) == null ? void 0 : _b.start) == null ? void 0 : _c.offset) != null ? _d : -1;
  const e = (_g = (_f = (_e = node == null ? void 0 : node.position) == null ? void 0 : _e.end) == null ? void 0 : _f.offset) != null ? _g : -1;
  return `${t}:${s}-${e}`;
}

// node_modules/svelte/src/runtime/internal/utils.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

// node_modules/svelte/src/runtime/internal/globals.js
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

// node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
var ResizeObserverSingleton = class _ResizeObserverSingleton {
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    /**
     * @private
     * @readonly
     * @type {WeakMap<Element, import('./private.js').Listener>}
     */
    __publicField(this, "_listeners", "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0);
    /**
     * @private
     * @type {ResizeObserver}
     */
    __publicField(this, "_observer");
    /** @type {ResizeObserverOptions} */
    __publicField(this, "options");
    this.options = options;
  }
  /**
   * @param {Element} element
   * @param {import('./private.js').Listener} listener
   * @returns {() => void}
   */
  observe(element2, listener) {
    this._listeners.set(element2, listener);
    this._getObserver().observe(element2, this.options);
    return () => {
      this._listeners.delete(element2);
      this._observer.unobserve(element2);
    };
  }
  /**
   * @private
   */
  _getObserver() {
    var _a;
    return (_a = this._observer) != null ? _a : this._observer = new ResizeObserver((entries) => {
      var _a2;
      for (const entry of entries) {
        _ResizeObserverSingleton.entries.set(entry.target, entry);
        (_a2 = this._listeners.get(entry.target)) == null ? void 0 : _a2(entry);
      }
    });
  }
};
ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

// node_modules/svelte/src/runtime/internal/dom.js
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node) return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && /** @type {ShadowRoot} */
  root.host) {
    return (
      /** @type {ShadowRoot} */
      root
    );
  }
  return node.ownerDocument;
}
function append_stylesheet(node, style) {
  append(
    /** @type {Document} */
    node.head || node,
    style
  );
  return style.sheet;
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach(
    /** @param {Element} node */
    (node) => {
      result[node.slot || "default"] = true;
    }
  );
  return result;
}

// node_modules/svelte/src/runtime/internal/lifecycle.js
var current_component;
function set_current_component(component) {
  current_component = component;
}

// node_modules/svelte/src/runtime/internal/scheduler.js
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}

// node_modules/svelte/src/runtime/internal/transitions.js
var outroing = /* @__PURE__ */ new Set();
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

// node_modules/svelte/src/shared/boolean_attributes.js
var _boolean_attributes = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
);
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

// node_modules/svelte/src/runtime/internal/Component.js
function mount_component(component, target, anchor) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
    if (component.$$.on_destroy) {
      component.$$.on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles2 = null, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, Function[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<Function, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
      if (this.$$l[type]) {
        const idx = this.$$l[type].indexOf(listener);
        if (idx >= 0) {
          this.$$l[type].splice(idx, 1);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return () => {
            let node;
            const obj = {
              c: function create() {
                node = element("slot");
                if (name !== "default") {
                  attr(node, "name", name);
                }
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function mount(target, anchor) {
                insert(target, node, anchor);
              },
              d: function destroy(detaching) {
                if (detaching) {
                  detach(node);
                }
              }
            };
            return obj;
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            $$slots[name] = [create_slot(name)];
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key in this.$$p_d) {
          if (!(key in this.$$d) && this[key] !== void 0) {
            this.$$d[key] = this[key];
            delete this[key];
          }
        }
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$scope: {
              ctx: []
            }
          }
        });
        const reflect_attributes = () => {
          this.$$r = true;
          for (const key in this.$$p_d) {
            this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
            if (this.$$p_d[key].reflect) {
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(reflect_attributes);
        reflect_attributes();
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    attributeChangedCallback(attr2, _oldValue, newValue) {
      var _a;
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      (_a = this.$$c) == null ? void 0 : _a.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$c = void 0;
        }
      });
    }
    $$g_p(attribute_name) {
      return Object.keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop, value, props_definition, transform) {
  var _a;
  const type = (_a = props_definition[prop]) == null ? void 0 : _a.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
var SvelteComponent = class {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(props) {
    if (this.$$set && !is_empty(props)) {
      this.$$.skip_bound = true;
      this.$$set(props);
      this.$$.skip_bound = false;
    }
  }
};

// node_modules/svelte/src/shared/version.js
var PUBLIC_VERSION = "4";

// node_modules/svelte/src/runtime/internal/disclose-version/index.js
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);

// src/components/comment.svelte
function add_css(target) {
  append_styles(target, "svelte-z1793f", ".acr-comment.svelte-z1793f{display:block;flex-basis:100%;margin:.25rem 0 0 1.6rem;font-size:.85rem;line-height:1.35;color:var(--text-muted);font-style:italic}.acr-icon.svelte-z1793f{margin-right:.35rem;opacity:.8}");
}
function create_fragment(ctx) {
  let span2;
  let span0;
  let t1;
  let span1;
  return {
    c() {
      span2 = element("span");
      span0 = element("span");
      span0.textContent = `${/*icon*/
      ctx[1]}`;
      t1 = space();
      span1 = element("span");
      span1.textContent = `${/*text*/
      ctx[0]}`;
      attr(span0, "class", "acr-icon svelte-z1793f");
      attr(span0, "aria-hidden", "true");
      attr(span1, "class", "acr-text");
      attr(span2, "class", "acr-comment svelte-z1793f");
      attr(span2, "title", "Comment");
    },
    m(target, anchor) {
      insert(target, span2, anchor);
      append(span2, span0);
      append(span2, t1);
      append(span2, span1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(span2);
      }
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  var _a, _b, _c;
  let { node } = $$props;
  let { filePath } = $$props;
  let { app } = $$props;
  let { plugin } = $$props;
  const text2 = ((_a = node == null ? void 0 : node.children) != null ? _a : []).map((c) => typeof (c == null ? void 0 : c.value) === "string" ? c.value : "").join("").trim();
  const icon = (_c = (_b = node == null ? void 0 : node.props) == null ? void 0 : _b.icon) != null ? _c : "\u{1F4AC}";
  $$self.$$set = ($$props2) => {
    if ("node" in $$props2) $$invalidate(2, node = $$props2.node);
    if ("filePath" in $$props2) $$invalidate(3, filePath = $$props2.filePath);
    if ("app" in $$props2) $$invalidate(4, app = $$props2.app);
    if ("plugin" in $$props2) $$invalidate(5, plugin = $$props2.plugin);
  };
  return [text2, icon, node, filePath, app, plugin];
}
var Comment = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { node: 2, filePath: 3, app: 4, plugin: 5 }, add_css);
  }
};
var comment_default = Comment;

// src/main.ts
var VERBOSE2 = true;
var tag2 = (m) => `[ACR] ${m}`;
var dbg2 = (...a) => VERBOSE2 && console.debug(...a);
var info = (...a) => VERBOSE2 && console.info(...a);
var warn = (...a) => console.warn(...a);
var err = (...a) => console.error(...a);
function posLines(n) {
  var _a, _b, _c, _d;
  const s = (_b = (_a = n == null ? void 0 : n.position) == null ? void 0 : _a.start) == null ? void 0 : _b.line, e = (_d = (_c = n == null ? void 0 : n.position) == null ? void 0 : _c.end) == null ? void 0 : _d.line;
  return `L${s != null ? s : "?"}\u2013L${e != null ? e : "?"}`;
}
function secLineRange(ctx, el) {
  if (!el) return "(no section)";
  const sec = ctx.getSectionInfo(el);
  return sec ? `L${sec.lineStart}\u2013L${sec.lineEnd}` : "(no section)";
}
function cssEscape(s) {
  const C = window.CSS;
  return C && typeof C.escape === "function" ? C.escape(s) : s.replace(/["\\#.;?*+~^$[\]()=>|/]/g, "\\$&");
}
var ASTComponentRenderer = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.registry = new InMemoryRegistry();
  }
  async onload() {
    info(tag2("onload"));
    const ast = this.app.plugins.getPlugin("obsidian-ast");
    if (!ast || !ast.api) {
      new import_obsidian.Notice("ASTComponentRenderer: obsidian-ast not found/enabled", 6e3);
      warn(tag2("obsidian-ast missing: mounting will be skipped"));
    }
    this.registry.register({ type: "comment", renderer: new SvelteRenderer(comment_default, {}, "append-inside-li") });
    info(tag2(`registered types: ${this.registry.listTypes().join(", ") || "(none)"}`));
    this.registerMarkdownPostProcessor(async (root, ctx) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const filePath = ctx.sourcePath;
      const astApi = (_a = this.app.plugins.getPlugin("obsidian-ast")) == null ? void 0 : _a.api;
      info(tag2(`pp start for file=${filePath}`), root);
      if (!astApi) {
        warn(tag2("no ast.api; abort pp"));
        return;
      }
      const types = this.registry.listTypes();
      info(tag2(`types to render: ${types.join(", ") || "(none)"}`));
      if (!types.length) return;
      const viewEl = (_b = root.closest(".markdown-reading-view, .markdown-preview-view")) != null ? _b : root;
      info(tag2(`view scope section: ${secLineRange(ctx, viewEl)}`));
      const allNodes = [];
      for (const t of types) {
        try {
          const nodes = await astApi.ast(filePath).select(t).toArray();
          info(tag2(`AST query '${t}' -> ${nodes.length} node(s)`), nodes.map((n) => ({ type: n.type, lines: posLines(n) })));
          allNodes.push(...nodes);
        } catch (e) {
          warn(tag2(`ast query failed for type=${t}`), e);
        }
      }
      info(tag2(`total renderable nodes: ${allNodes.length}`));
      if (!allNodes.length) return;
      for (const node of allNodes) {
        const type = node == null ? void 0 : node.type;
        const id = nodeId(node);
        const hasPos = !!(((_c = node == null ? void 0 : node.position) == null ? void 0 : _c.start) && ((_d = node == null ? void 0 : node.position) == null ? void 0 : _d.end));
        info(tag2(`node ${type} id=${id} ${posLines(node)}`), node);
        if (!hasPos) {
          warn(tag2(`skip: no position for id=${id}`));
          continue;
        }
        const dup = viewEl.querySelector(`[data-acr-node="${cssEscape(id)}"]`);
        if (dup) {
          dbg2(tag2(`skip: already mounted id=${id}`));
          continue;
        }
        const renderer = this.registry.get(type);
        if (!renderer) {
          dbg2(tag2(`skip: no renderer for type=${type}`));
          continue;
        }
        const rc = { app: this.app, plugin: this, filePath, ctx };
        const anchor = (_f = (_e = renderer.pickAnchor) == null ? void 0 : _e.call(renderer, node, viewEl, rc)) != null ? _f : pickAnchorByLinesInScope(viewEl, ctx, node);
        const sec = (el) => el ? ctx.getSectionInfo(el) : null;
        info(tag2(`anchor for ${id} -> ${(anchor == null ? void 0 : anchor.tagName) || "null"} ${sec(anchor) ? `L${sec(anchor).lineStart}\u2013L${sec(anchor).lineEnd}` : ""}`), anchor);
        if (!anchor) {
          warn(tag2(`skip: no anchor for id=${id}`));
          continue;
        }
        const policy = (_g = renderer.mountPolicy) != null ? _g : "append-inside-block";
        info(tag2(`placeMount policy=${policy} id=${id}`));
        const host = placeMount(policy, anchor);
        host.setAttribute("data-acr-node", id);
        try {
          info(tag2(`render start id=${id}`));
          await renderer.render(node, host, rc);
          info(tag2(`render ok id=${id}`));
        } catch (e) {
          err(tag2(`render error id=${id}`), e);
          host.remove();
        }
      }
      info(tag2("pp end"));
    });
  }
};
