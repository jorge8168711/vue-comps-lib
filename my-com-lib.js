import { defineComponent as s, openBlock as c, createElementBlock as a, toDisplayString as p } from "vue";
const r = { class: "btn-cta" }, u = /* @__PURE__ */ s({
  __name: "Button",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (c(), a("button", r, p(e.text), 1));
  }
});
const l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, _] of e)
    o[n] = _;
  return o;
}, i = /* @__PURE__ */ l(u, [["__scopeId", "data-v-1fb57e84"]]), m = {
  install: (t) => {
    t.component("Button", i);
  }
};
export {
  i as Button,
  m as default
};
