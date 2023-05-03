import { computed as z, toRefs as zt, openBlock as u, createElementBlock as m, normalizeStyle as D, unref as x, createElementVNode as b, withDirectives as K, normalizeClass as T, createBlock as Z, createCommentVNode as I, Fragment as ae, createTextVNode as Ae, toDisplayString as N, renderSlot as B, ref as $, onMounted as ne, nextTick as we, watch as re, withKeys as Ve, provide as le, onBeforeUnmount as ht, defineComponent as St, h as Et, renderList as de, getCurrentInstance as At, inject as me, onUnmounted as be, createVNode as O, Transition as ce, withCtx as P, vShow as te, resolveComponent as ee, resolveDirective as Ct, reactive as Lt, normalizeProps as De, guardReactiveProps as Fe, withModifiers as yt, render as he } from "vue";
const Ie = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of s)
    n[o] = a;
  return n;
}, Bt = ["xlink:href"], Mt = {
  props: {
    name: {
      type: String,
      default: "add"
    },
    size: {
      type: String,
      default: "14px"
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const s = e, n = z(() => {
      const { size: o, color: a } = zt(s), l = {};
      return o && (l.fontSize = o.value), a && (l.color = a.value), l;
    });
    return (o, a) => (u(), m("svg", {
      class: "am-icon",
      "aria-hidden": "true",
      style: D(x(n))
    }, [
      b("use", {
        "xlink:href": "#" + e.name
      }, null, 8, Bt)
    ], 4));
  }
}, ie = /* @__PURE__ */ Ie(Mt, [["__scopeId", "data-v-25ad101c"]]), gt = {
  mounted(e, s) {
    setTimeout(() => {
      const o = window.getComputedStyle(e, null).transitionDuration.match(/[0-9\.]+(?=s)/g);
      if (!o)
        return !1;
      const a = o.reduce((f, g) => (f = parseFloat(f), g = parseFloat(g), f > g ? f : g)) * 1e3;
      let l = !0, r = !1, d = !0;
      e.addEventListener("mousedown", () => {
        d && (e.classList.add(s.value), d = !1, l = !1, r = !1, setTimeout(() => {
          r = !0, c();
        }, a));
      }), e.addEventListener("mouseleave", () => {
        l = !0, c();
      }), e.addEventListener("mouseup", () => {
        l = !0, c();
      });
      const c = () => {
        l && r && (e.classList.remove(s.value), setTimeout(() => {
          d = !0;
        }, a));
      };
    }, 0);
  }
};
const It = {
  key: 1,
  class: "am-button__content"
}, ve = {
  props: {
    type: {
      type: String,
      default: "default"
    },
    // 模式
    mode: {
      type: String,
      default: "default"
      // default primary plain text primary-text
    },
    // 尺寸
    size: {
      type: String,
      default: "medium"
      // large 40px medium 32px small 24px mini 14px
    },
    // 形状
    sharp: {
      type: String,
      default: "rectangle"
      // rectangle 长方形 round 圆角 circle 圆形 square 正方形
    },
    // 场景
    scene: {
      type: String,
      default: "light"
      // light dark
    },
    // 功用
    function: {
      type: String,
      default: ""
      // confirm 确认 cancel 取消
    },
    // 选中
    selected: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // 添加图标
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "14px"
    },
    iconPosition: {
      type: String,
      default: "front"
      // 有front和back
    },
    // 加载中
    loading: {
      type: Boolean,
      default: !1
    },
    loadingText: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const n = e, o = gt, a = z(() => ({
      "is-disabled": n.disabled,
      "is-selected": n.selected,
      "is-loading": n.loading,
      [`is-${n.mode}`]: n.mode,
      [`is-${n.size}`]: n.size,
      [`is-${n.sharp}`]: n.sharp,
      [`is-${n.scene}`]: n.scene,
      [`is-${n.function}`]: n.function
    })), l = z(() => ({
      [`is-${n.iconPosition}`]: n.iconPosition
    })), r = (d) => {
      if (n.disabled || n.loading) {
        d.preventDefault();
        return;
      }
      s("click", d);
    };
    return (d, c) => K((u(), m("div", {
      class: T(["am-button", x(a)]),
      onClick: r
    }, [
      e.icon ? (u(), Z(ie, {
        key: 0,
        class: T(x(l)),
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "name", "size"])) : I("", !0),
      d.$slots.default ? (u(), m("div", It, [
        e.loading && e.loadingText ? (u(), m(ae, { key: 0 }, [
          Ae(N(e.loadingText), 1)
        ], 64)) : B(d.$slots, "default", { key: 1 })
      ])) : I("", !0)
    ], 2)), [
      [x(o), "is-down"]
    ]);
  }
};
var ue, ze, _e = typeof Map == "function" ? /* @__PURE__ */ new Map() : (ue = [], ze = [], { has: function(e) {
  return ue.indexOf(e) > -1;
}, get: function(e) {
  return ze[ue.indexOf(e)];
}, set: function(e, s) {
  ue.indexOf(e) === -1 && (ue.push(e), ze.push(s));
}, delete: function(e) {
  var s = ue.indexOf(e);
  s > -1 && (ue.splice(s, 1), ze.splice(s, 1));
} }), _t = function(e) {
  return new Event(e, { bubbles: !0 });
};
try {
  new Event("test");
} catch {
  _t = function(s) {
    var n = document.createEvent("Event");
    return n.initEvent(s, !0, !1), n;
  };
}
function Tt(e) {
  var s = _e.get(e);
  s && s.destroy();
}
function Nt(e) {
  var s = _e.get(e);
  s && s.update();
}
var ge = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((ge = function(e) {
  return e;
}).destroy = function(e) {
  return e;
}, ge.update = function(e) {
  return e;
}) : ((ge = function(e, s) {
  return e && Array.prototype.forEach.call(e.length ? e : [e], function(n) {
    return function(o) {
      if (o && o.nodeName && o.nodeName === "TEXTAREA" && !_e.has(o)) {
        var a, l = null, r = null, d = null, c = function() {
          o.clientWidth !== r && y();
        }, f = function(E) {
          window.removeEventListener("resize", c, !1), o.removeEventListener("input", y, !1), o.removeEventListener("keyup", y, !1), o.removeEventListener("autosize:destroy", f, !1), o.removeEventListener("autosize:update", y, !1), Object.keys(E).forEach(function(p) {
            o.style[p] = E[p];
          }), _e.delete(o);
        }.bind(o, { height: o.style.height, resize: o.style.resize, overflowY: o.style.overflowY, overflowX: o.style.overflowX, wordWrap: o.style.wordWrap });
        o.addEventListener("autosize:destroy", f, !1), "onpropertychange" in o && "oninput" in o && o.addEventListener("keyup", y, !1), window.addEventListener("resize", c, !1), o.addEventListener("input", y, !1), o.addEventListener("autosize:update", y, !1), o.style.overflowX = "hidden", o.style.wordWrap = "break-word", _e.set(o, { destroy: f, update: y }), (a = window.getComputedStyle(o, null)).resize === "vertical" ? o.style.resize = "none" : a.resize === "both" && (o.style.resize = "horizontal"), l = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(l) && (l = 0), y();
      }
      function g(E) {
        var p = o.style.width;
        o.style.width = "0px", o.style.width = p, o.style.overflowY = E;
      }
      function _() {
        if (o.scrollHeight !== 0) {
          var E = function(p) {
            for (var k = []; p && p.parentNode && p.parentNode instanceof Element; )
              p.parentNode.scrollTop && (p.parentNode.style.scrollBehavior = "auto", k.push([p.parentNode, p.parentNode.scrollTop])), p = p.parentNode;
            return function() {
              return k.forEach(function(w) {
                var S = w[0];
                S.scrollTop = w[1], S.style.scrollBehavior = null;
              });
            };
          }(o);
          o.style.height = "", o.style.height = o.scrollHeight + l + "px", r = o.clientWidth, E();
        }
      }
      function y() {
        _();
        var E = Math.round(parseFloat(o.style.height)), p = window.getComputedStyle(o, null), k = p.boxSizing === "content-box" ? Math.round(parseFloat(p.height)) : o.offsetHeight;
        if (k < E ? p.overflowY === "hidden" && (g("scroll"), _(), k = p.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(o, null).height)) : o.offsetHeight) : p.overflowY !== "hidden" && (g("hidden"), _(), k = p.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(o, null).height)) : o.offsetHeight), d !== k) {
          d = k;
          var w = _t("autosize:resized");
          try {
            o.dispatchEvent(w);
          } catch {
          }
        }
      }
    }(n);
  }), e;
}).destroy = function(e) {
  return e && Array.prototype.forEach.call(e.length ? e : [e], Tt), e;
}, ge.update = function(e) {
  return e && Array.prototype.forEach.call(e.length ? e : [e], Nt), e;
});
var Le = ge;
const Ot = { class: "am-input__inner" }, Vt = {
  key: 0,
  class: "am-input__prefix"
}, Dt = ["readonly", "placeholder", "value", "autocomplete", "onKeyup"], Ft = ["readonly", "type", "value", "placeholder", "autocomplete", "onKeyup"], Pt = {
  key: 3,
  class: "am-input__suffix"
}, Pe = {
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: "请输入"
    },
    type: String,
    autosize: {
      type: Boolean,
      default: !0
    },
    scene: {
      type: String,
      default: "light"
      // light dark
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: Boolean,
      default: !1
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    }
  },
  emits: [
    "update:value",
    "input",
    "change",
    "focus",
    "blur",
    "enter"
  ],
  setup(e, { emit: s }) {
    const n = e, o = (_) => {
      s("update:value", _.target.value), s("input", _);
    }, a = (_) => {
      s("change", _);
    }, l = $(!1), r = (_) => {
      l.value = !0;
    }, d = (_) => {
      l.value = !1, s("blur", _);
    }, c = (_) => {
      s("enter", _);
    }, f = $(null), g = () => {
      n.type === "textarea" && (n.autosize ? (Le(f.value), Le.update(f.value)) : Le.destroy(f.value));
    };
    return ne(async () => {
      await we(), g(), f.value && !f.value.changeValue && (f.value.changeValue = async (_) => {
        o({
          target: {
            value: _
          }
        }), a(), await we(), g();
      });
    }), re(
      () => n.autosize,
      () => {
        g();
      }
    ), re(() => n.value, () => {
      g();
    }), (_, y) => (u(), m("div", {
      class: T(["am-input", {
        "is-focus": l.value,
        [`is-${e.scene}`]: e.scene
      }])
    }, [
      b("label", Ot, [
        e.prefix ? (u(), m("div", Vt, N(e.prefix), 1)) : I("", !0),
        e.type === "textarea" ? (u(), m("textarea", {
          key: 1,
          readonly: e.readonly,
          ref_key: "textareaEl",
          ref: f,
          spellcheck: "false",
          placeholder: e.placeholder,
          value: e.value,
          autocomplete: e.autocomplete,
          onInput: o,
          onFocus: r,
          onBlur: d,
          onChange: a,
          onEnter: c,
          onKeyup: Ve(c, ["enter"])
        }, null, 40, Dt)) : (u(), m("input", {
          key: 2,
          readonly: e.readonly,
          spellcheck: "false",
          type: e.type,
          value: e.value,
          placeholder: e.placeholder,
          autocomplete: e.autocomplete,
          onInput: o,
          onFocus: r,
          onBlur: d,
          onChange: a,
          onEnter: c,
          onKeyup: Ve(c, ["enter"])
        }, null, 40, Ft)),
        e.suffix ? (u(), m("div", Pt, N(e.suffix), 1)) : I("", !0)
      ])
    ], 2));
  }
};
function wt(e) {
  const s = [window];
  let n = e, o = !1;
  for (; !o; ) {
    n = n.parentElement;
    const a = window.getComputedStyle(n, null);
    (a.overflow === "scroll" || a.overflow === "auto" || a.overflowY === "scroll" || a.overflowY === "auto" || a.overflowX === "scroll" || a.overflowX === "auto") && s.push(n), n === document.body && (o = !0);
  }
  return s;
}
function Te(e, s) {
  const n = new ResizeObserver(() => {
    s();
  });
  return n.observe(e), n;
}
function Ne(e, s) {
  s.unobserve(e);
}
function Rt(e) {
  const n = window.getComputedStyle(e, null).width, o = e.cloneNode(!0);
  o.style.cssText = `
        z-index: -999;
        position: fixed;
        top: 0;
        left: 0;
        width: ${n};
        width: max-content;
        visibility: hidden;`, e.parentNode.append(o);
  const a = window.getComputedStyle(o, null), l = {
    height: window.parseFloat(a.height),
    width: window.parseFloat(a.width)
  };
  return o.remove(), l;
}
const Ht = { class: "am-table" }, Wt = { style: { display: "none" } }, jt = {
  key: 1,
  class: "am-table__th-cell"
}, qt = ["onClick"], Zt = ["onClick"], Gt = {
  key: 1,
  class: "am-table__td-cell"
}, Re = {
  props: {
    // 表格数据
    data: null,
    // 高度
    height: {
      type: String
    },
    // 对齐方式
    align: {
      type: String,
      default: "left"
      // left center right
    },
    // 行类
    rowClass: {
      type: Function,
      default: () => {
      }
    },
    // 表头样式
    hdStyle: {
      type: Object,
      default: () => {
      }
    },
    // 表体样式
    bdStyle: {
      type: Object,
      default: () => {
      }
    }
    // watch dom
  },
  emits: ["row-click", "cell-click"],
  setup(e, { emit: s }) {
    const n = e, o = $([]);
    le("tableColumnData", o);
    const a = z(() => ({
      "max-height": n.height ? `${n.height}` : "",
      "overflow-y": n.height ? "auto" : "",
      "overflow-x": "hidden",
      ...n.bdStyle
    })), l = $(0), r = $(null), d = async () => {
      r.value && (await we(), l.value = Math.max(r.value.offsetWidth - r.value.firstChild.offsetWidth - 2, 0));
    };
    let c;
    ne(() => {
      d(), c = Te(r.value.firstChild, d);
    }), ht(() => {
      Ne(r.value, c);
    });
    const f = (y) => {
      s("row-click", y);
    }, g = (y, E) => {
      s("cell-click", y, E);
    }, _ = St({
      name: "Cell",
      props: {
        slotFun: null,
        data: null
      },
      render() {
        return Et(
          "div",
          {
            attrs: {
              class: "cell"
            }
          },
          this.slotFun(this.data)
        );
      }
    });
    return (y, E) => (u(), m("div", Ht, [
      b("div", Wt, [
        B(y.$slots, "default")
      ]),
      b("div", {
        class: "am-table__hd",
        style: D(e.hdStyle)
      }, [
        b("table", null, [
          b("thead", null, [
            b("tr", null, [
              (u(!0), m(ae, null, de(o.value, (p, k) => (u(), m("th", {
                key: k,
                style: D({
                  width: p.props.width
                })
              }, [
                p.slots.th ? (u(), Z(x(_), {
                  key: 0,
                  "slot-fun": p.slots.th
                }, null, 8, ["slot-fun"])) : (u(), m("div", jt, N(p.props.label), 1))
              ], 4))), 128)),
              b("th", {
                class: "am-table__th-scroll-bar",
                style: D({
                  width: `${l.value}px`
                })
              }, null, 4)
            ])
          ])
        ])
      ], 4),
      b("div", {
        class: "am-table__bd",
        style: D(x(a)),
        ref_key: "bd",
        ref: r
      }, [
        b("table", null, [
          b("colgroup", null, [
            (u(!0), m(ae, null, de(o.value, (p, k) => (u(), m("col", {
              key: k,
              style: D({
                width: p.props.width
              })
            }, null, 4))), 128))
          ]),
          b("tbody", null, [
            (u(!0), m(ae, null, de(e.data, (p, k) => (u(), m("tr", {
              key: k,
              class: T(e.rowClass(p, k)),
              onClick: (w) => f(p)
            }, [
              (u(!0), m(ae, null, de(o.value, (w, S) => (u(), m("td", {
                key: S,
                onClick: (J) => g(p, w)
              }, [
                w.slots.default ? (u(), Z(x(_), {
                  key: 0,
                  "slot-fun": w.slots.default,
                  data: p
                }, null, 8, ["slot-fun", "data"])) : (u(), m("div", Gt, N(p[w.props.prop]), 1))
              ], 8, Zt))), 128))
            ], 10, qt))), 128))
          ])
        ])
      ], 4)
    ]));
  }
};
let Ut = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((s, n) => (n &= 63, n < 36 ? s += n.toString(36) : n < 62 ? s += (n - 26).toString(36).toUpperCase() : n > 62 ? s += "-" : s += "_", s), "");
const Yt = { class: "am-table-column" }, He = {
  props: {
    // 表头名称
    label: {
      type: String,
      default: "表头"
    },
    // 字段属性名称
    prop: {
      type: String,
      default: ""
    },
    // 宽度
    width: {
      type: String
    },
    // 类型
    type: {
      type: String
    },
    // 排序
    sort: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const s = At(), n = me("tableColumnData"), o = Ut();
    return n.value.push({
      props: s.props,
      slots: s.slots,
      id: o
    }), be(() => {
      const a = n.value.findIndex((l) => l.id === o);
      a >= 0 && n.value.splice(a, 1);
    }), (a, l) => (u(), m("div", Yt, [
      B(a.$slots, "th"),
      B(a.$slots, "default")
    ]));
  }
};
class Xt {
  constructor() {
    this.zIndex = 2e3;
  }
  getZIndex() {
    return this.zIndex += 1, this.zIndex;
  }
}
const pe = new Xt();
const Kt = { class: "am-popover" }, We = {
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    xDirection: {
      type: String,
      default: "left"
    },
    yDirection: {
      type: String,
      default: "auto"
    },
    // ap宽
    width: {
      type: Number
    },
    // ap高
    height: {
      type: Number
    },
    // ap保留宽度
    apWidthFollowFather: {
      type: Boolean,
      default: !0
    },
    popoverBoxClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:show", "after-hide", "after-enter"],
  setup(e, { emit: s }) {
    const n = e, o = $(null), a = $(null);
    let l = null;
    ne(() => {
      l = a.value, document.body.appendChild(a.value);
    }), be(() => {
      l && l.remove();
    });
    const r = $(!1), d = $(!1), c = $([]), f = $(null), g = $(), _ = $(), y = $(), E = $(), p = $("top"), k = $(), w = $(pe.getZIndex());
    re(
      () => n.show,
      () => {
        n.show ? (w.value = pe.getZIndex(), r.value = !0, J(), setTimeout(() => {
          d.value = !0;
        }, 0)) : (d.value = !1, Q());
      }
    );
    const S = async () => {
      await we();
      const A = Rt(f.value), H = o.value.getBoundingClientRect(), {
        left: U,
        top: j,
        width: Y,
        height: F
      } = H, { apWidthFollowFather: fe } = n, X = window.innerHeight - j - F;
      g.value = n.width || `${A.width < Y && fe ? Y : A.width}`, _.value = n.height || `${A.height}`;
      const xe = U, Ce = U - g.value + Y;
      n.xDirection === "left" ? y.value = xe : n.xDirection === "right" && (y.value = Ce);
      const ke = j - _.value - 6, $e = j + F + 6;
      n.yDirection === "top" ? E.value = ke : n.yDirection === "bottom" ? E.value = $e : n.yDirection === "auto" && (X < _.value && j > _.value ? (E.value = ke, p.value = "bottom") : (E.value = $e, p.value = "top"));
    }, J = () => {
      S(), c.value = wt(o.value), c.value.forEach((A) => {
        A.addEventListener("scroll", S);
      }), window.addEventListener("resize", S), k.value = Te(o.value, S);
    }, Q = () => {
      c.value.forEach((A) => {
        A.removeEventListener("scroll", S);
      }), window.removeEventListener("resize", S), Ne(o.value, k.value);
    }, G = z(() => {
      const A = {};
      return A.transform = `translate(${y.value}px, ${E.value}px)`, A.zIndex = w.value + 1, A;
    }), W = z(() => {
      const A = {};
      return A.width = `${g.value}px`, A.transformOrigin = p.value, n.height && (A.height = `${_.value}px`), A;
    }), oe = () => {
      r.value = !1, s("after-hide");
    }, R = () => {
      s("after-enter");
    };
    return (A, H) => (u(), m("div", Kt, [
      b("div", {
        class: "am-popover__trigger",
        ref_key: "linkEl",
        ref: o
      }, [
        B(A.$slots, "trigger")
      ], 512),
      K(b("div", {
        ref_key: "ap",
        ref: a,
        class: T(["am-popover__box", e.popoverBoxClass]),
        style: D(x(G))
      }, [
        O(ce, {
          name: "am-popover-pop-anime",
          onAfterLeave: oe,
          onAfterEnter: R
        }, {
          default: P(() => [
            K(b("div", {
              class: "am-popover__box-pop",
              ref_key: "popEl",
              ref: f,
              style: D(x(W))
            }, [
              B(A.$slots, "default")
            ], 4), [
              [te, d.value]
            ])
          ]),
          _: 3
        })
      ], 6), [
        [te, r.value]
      ])
    ]));
  }
};
const Jt = ["onClick"], je = {
  props: {
    tabs: {
      type: Array,
      default: () => [
        {
          value: "",
          label: ""
        }
      ]
    },
    value: null,
    mode: {
      type: String,
      default: "default"
      // default 默认 line 线型  
    },
    // 场景
    scene: {
      type: String,
      default: "light"
      // light dark
    }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: s }) {
    const n = e, o = (a) => {
      a.value !== n.value && (s("update:value", a.value), s("change", a.value));
    };
    return (a, l) => (u(), m("div", {
      class: T(["am-tab", {
        [`is-${e.mode}`]: e.mode,
        [`is-${e.scene}`]: e.scene
      }])
    }, [
      (u(!0), m(ae, null, de(e.tabs, (r, d) => (u(), m("div", {
        class: T([{
          "is-active": r.value === e.value
        }, "am-tab__item"]),
        key: d,
        onClick: (c) => o(r)
      }, [
        b("span", null, N(r.label), 1)
      ], 10, Jt))), 128))
    ], 2));
  }
};
const Qt = { class: "am-dropdown__trigger-icon" }, Be = {
  props: {
    // 触发器模式
    triggerMode: {
      type: String,
      default: "default"
      // default 默认 none 无
    },
    scene: {
      type: String,
      default: "light"
      // light dark
    },
    popoverBoxClass: {
      type: String,
      default: ""
    },
    xDirection: {
      type: String,
      default: "left"
    },
    yDirection: {
      type: String,
      default: "auto"
    }
  },
  setup(e, { expose: s }) {
    const n = e, o = $(!1), a = $(!1), l = z(() => o.value), r = z(() => ({
      "is-focus": l.value,
      [`is-${n.scene}`]: n.scene
    })), d = z(() => ({
      [`is-${n.triggerMode}`]: !0
    })), c = () => {
      o.value = !o.value;
    };
    let f;
    const g = () => {
      a.value || (f = setTimeout(() => {
        o.value = !1;
      }, 16));
    }, _ = () => {
      f && (clearTimeout(f), f = null), o.value = !0;
    };
    return s({
      hideDropdown: () => {
        f = setTimeout(() => {
          o.value = !1;
        }, 16);
      },
      lock: () => {
        a.value = !0;
      },
      unlock: () => {
        a.value = !1;
      }
    }), (k, w) => {
      const S = ee("AmIcon"), J = ee("AmPopover"), Q = Ct("clickoutside");
      return K((u(), m("div", {
        class: T(["am-dropdown", x(r)])
      }, [
        O(J, {
          "popover-box-class": `am-dropdown__popover is-${e.scene} ${e.popoverBoxClass}`,
          show: o.value,
          "onUpdate:show": w[0] || (w[0] = (G) => o.value = G),
          "x-direction": e.xDirection,
          "y-direction": e.yDirection
        }, {
          trigger: P(() => [
            b("div", {
              class: T(["am-dropdown__trigger", x(d)]),
              onClick: c
            }, [
              B(k.$slots, "trigger"),
              b("div", Qt, [
                O(S, {
                  name: "caret-down",
                  size: "16px"
                })
              ])
            ], 2)
          ]),
          default: P(() => [
            b("div", {
              class: "am-dropdown__popover-inner",
              onClick: _
            }, [
              B(k.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["popover-box-class", "show", "x-direction", "y-direction"])
      ], 2)), [
        [Q, g]
      ]);
    };
  }
};
const e3 = {
  key: 0,
  class: "am-select__placeholder"
}, t3 = {
  key: 2,
  class: "am-select__content am-select__content-alone"
}, n3 = {
  key: 3,
  class: "am-select__content am-select__content-multiple"
}, qe = {
  props: {
    // 多选
    multiple: {
      type: Boolean,
      default: !1
    },
    // 默认文字
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 所选值
    value: null,
    scene: {
      type: String,
      default: "light"
      // light dark
    }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: s }) {
    const n = e, o = $(null), a = Lt([]);
    le("options", a), me("dropdownShow");
    const l = z(() => ({
      [`is-${n.scene}`]: n.scene
    })), r = z(() => {
      if (n.multiple) {
        const d = a.filter((c) => n.value.includes(c.value));
        return console.log("# arr", d), d;
      }
      return a.find((d) => d.value === n.value);
    });
    return le(
      "selectedItemValue",
      z(() => n.value)
    ), le(
      "selectedItem",
      r
    ), le("setValue", (d) => {
      if (n.multiple) {
        const c = n.value ? n.value : [], f = c.findIndex((g) => g === d.value);
        f > -1 ? c.splice(f, 1) : c.push(d.value), s("update:value", c), s("change", c);
      } else {
        if (d.value === n.value)
          return;
        s("update:value", d.value), s("change", d.value), o.value.hideDropdown();
      }
    }), (d, c) => {
      const f = ee("AmTag");
      return u(), m("div", {
        class: T(["am-select", x(l)])
      }, [
        O(Be, {
          scene: e.scene,
          "popover-box-class": "am-select__popover",
          ref_key: "dropdownCm",
          ref: o
        }, {
          trigger: P(() => [
            !x(r) || e.multiple && !x(r).length ? (u(), m("p", e3, N(e.placeholder), 1)) : I("", !0),
            d.$slots.selected ? B(d.$slots, "selected", {
              key: 1,
              selectedItem: x(r)
            }) : e.multiple ? (u(), m("div", n3, [
              (u(!0), m(ae, null, de(x(r), (g) => (u(), Z(f, {
                key: g.value,
                size: "small"
              }, {
                default: P(() => [
                  Ae(N(g.label), 1)
                ]),
                _: 2
              }, 1024))), 128))
            ])) : (u(), m("div", t3, N(x(r) ? x(r).label : ""), 1))
          ]),
          default: P(() => [
            B(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["scene"])
      ], 2);
    };
  }
}, Ze = {
  props: {
    // 选项内容，必须包括 value 和 label
    item: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const s = e, n = me("options"), o = me("selectedItemValue");
    re(
      () => s.item,
      () => {
        const c = n.findIndex((f) => f.value === s.item.value);
        c >= 0 ? n.splice(c, 1, s.item) : n.push(s.item);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const a = z(() => Array.isArray(o.value) ? o.value.includes(s.item.value) : o.value === s.item.value), l = z(() => ({
      "is-selected": a.value
    })), r = me("setValue"), d = () => {
      r(s.item);
    };
    return (c, f) => {
      const g = ee("AmIcon");
      return u(), m("div", {
        class: T(["am-option", x(l)]),
        onClick: d
      }, [
        B(c.$slots, "default"),
        x(a) ? (u(), Z(g, {
          key: 0,
          class: "am-option__check",
          name: "check-2",
          size: "20px"
        })) : I("", !0)
      ], 2);
    };
  }
};
const o3 = {
  key: 1,
  class: "am-tooltip__tip-span"
}, Ge = {
  props: {
    content: String,
    // 触发方式
    trigger: {
      type: String,
      default: "hover"
      // 悬停 点击
    },
    // 气泡位置
    direction: {
      type: String,
      default: "top"
      // left\top\right\bottom\bottomRight
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 模式
    mode: {
      type: String,
      default: ""
    },
    // tooltip类
    tooltipClass: {
      type: String,
      default: ""
    },
    width: Number,
    height: Number,
    margin: {
      type: String,
      default: ""
    },
    // 风格
    scene: {
      type: String,
      default: "light"
      // light dark
    }
  },
  setup(e) {
    const s = e, n = $(null);
    let o = null;
    const a = $(!1), l = $(null), r = $(!1), d = $([]);
    let c = null;
    const f = $(pe.getZIndex()), g = $(0), _ = $(0), y = $(0), E = $(0), p = z(() => s.direction.toLowerCase().match(/left|right|bottom|top/g)), k = z(() => p.value[0] === "left" ? "calc(-100% - 0px)" : p.value[0] === "right" ? "0px" : p.value[0] === "top" || p.value[0] === "bottom" ? p.value[1] === "left" ? "0" : p.value[1] === "right" ? "-100%" : "-50%" : "0"), w = z(() => p.value[0] === "top" ? "calc(-100% - 0px)" : p.value[0] === "bottom" ? "0px" : p.value[0] === "left" || p.value[0] === "right" ? p.value[1] === "top" ? "0" : p.value[1] === "bottom" ? "-100%" : "-50%" : "0"), S = z(() => ({
      transform: `translate(${g.value}px,${_.value}px)`,
      zIndex: f.value
    })), J = () => {
      o || (document.body.appendChild(n.value), o = n.value);
    };
    be(() => {
      o && o.remove(), A();
    });
    const Q = async () => {
      s.disabled || s.trigger === "hover" && (a.value = !0, await we(), J(), r.value = !0);
    }, G = () => {
      s.trigger === "hover" && (r.value = !1);
    }, W = async () => {
      if (!l.value)
        return;
      const H = l.value.getBoundingClientRect(), { width: U, height: j } = H;
      let { left: Y, top: F } = H;
      y.value = U, E.value = j;
      const fe = p.value[0], X = p.value[1];
      switch (fe) {
        case "left":
          if (X === "top")
            break;
          X === "bottom" ? F += j : F += 0.5 * j;
          break;
        case "right":
          if (Y += U, X === "top")
            break;
          X === "bottom" ? F += j : F += 0.5 * j;
          break;
        case "top":
          if (X === "left")
            break;
          X === "right" ? Y += U : Y += 0.5 * U;
          break;
        case "bottom":
          if (F += j, X === "left")
            break;
          X === "right" ? Y += U : Y += 0.5 * U;
          break;
      }
      g.value = Y, _.value = F;
    }, oe = async () => {
    }, R = () => {
      W(), d.value = wt(l.value), d.value.forEach((H) => {
        H.addEventListener("scroll", W);
      }), window.addEventListener("resize", W), c = Te(l.value, () => {
        l.value ? W() : o.remove();
      });
    }, A = () => {
      d.value.forEach((H) => {
        H.removeEventListener("scroll", W);
      }), window.removeEventListener("resize", W), l.value && c && Ne(l.value, c);
    };
    return re(
      () => r.value,
      () => {
        r.value ? (f.value = pe.getZIndex(), R()) : A();
      }
    ), (H, U) => (u(), m("div", {
      class: "am-tooltip",
      ref_key: "triggerEl",
      ref: l,
      onMouseenter: Q,
      onMouseleave: G
    }, [
      B(H.$slots, "default"),
      a.value ? (u(), m("div", {
        key: 0,
        class: T(["am-tooltip__tip", {
          [`is-${e.scene}`]: !0
        }]),
        ref_key: "tipEl",
        ref: n,
        style: D(x(S))
      }, [
        O(ce, {
          name: "am-tooltip-in",
          onAfterLeave: oe
        }, {
          default: P(() => [
            K(b("div", {
              class: "am-tooltip__tip-inner",
              style: D(`transform: translate(${x(k)},${x(w)});padding: ${e.margin}`)
            }, [
              H.$slots.tip ? B(H.$slots, "tip", { key: 0 }) : (u(), m("span", o3, N(e.content), 1))
            ], 4), [
              [te, r.value]
            ])
          ]),
          _: 3
        })
      ], 6)) : I("", !0)
    ], 544));
  }
};
const s3 = { key: 0 }, a3 = {
  key: 2,
  class: "am-divider__line"
}, Ue = {
  props: {
    content: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "14px"
    },
    margin: {
      type: String,
      default: "0 4px"
    },
    icon: {
      type: String
    },
    showLine: {
      type: Boolean,
      default: !1
    },
    scene: {
      type: String,
      default: "light"
    }
  },
  setup(e) {
    return (s, n) => {
      const o = ee("AmIcon");
      return u(), m("div", {
        class: T(["am-divider", {
          [`is-${e.scene}`]: e.scene
        }]),
        style: D("margin:" + e.margin + ";font-size:" + e.size + ";")
      }, [
        e.content ? (u(), m("span", s3, N(e.content), 1)) : e.icon ? (u(), Z(o, {
          key: 1,
          name: e.icon,
          size: e.size
        }, null, 8, ["name", "size"])) : e.showLine ? (u(), m("i", a3)) : I("", !0)
      ], 6);
    };
  }
}, se = /* @__PURE__ */ new Map();
let bt;
document.addEventListener("mousedown", (e) => bt = e, !1);
document.addEventListener(
  "mouseup",
  (e) => {
    for (const s of se.values())
      for (const { documentHandler: n } of s)
        n(e, bt);
  },
  !1
);
function Ye(e, s) {
  let n = [];
  return Array.isArray(s.arg) ? n = s.arg : s.arg instanceof HTMLElement && n.push(s.arg), function(o, a) {
    const l = s.instance.popperRef, r = o.target, d = a == null ? void 0 : a.target, c = !s || !s.instance, f = !r || !d, g = e.contains(r) || e.contains(d), _ = e === r, y = n.length && n.some(
      (p) => p == null ? void 0 : p.contains(r)
    ) || n.length && n.includes(d), E = l && (l.contains(r) || l.contains(d));
    c || f || g || _ || y || E || s.value(o, a);
  };
}
const l3 = {
  beforeMount(e, s) {
    se.has(e) || se.set(e, []), se.get(e).push({
      documentHandler: Ye(e, s),
      bindingFn: s.value
    });
  },
  updated(e, s) {
    se.has(e) || se.set(e, []);
    const n = se.get(e), o = n.findIndex(
      (l) => l.bindingFn === s.oldValue
    ), a = {
      documentHandler: Ye(e, s),
      bindingFn: s.value
    };
    o >= 0 ? n.splice(o, 1, a) : n.push(a);
  },
  unmounted(e) {
    se.delete(e);
  }
};
const i3 = { class: "am-popup__inner" }, r3 = {
  key: 0,
  class: "am-popup__hd"
}, c3 = {
  key: 0,
  class: "am-popup__title"
}, u3 = { class: "am-popup__bd" }, d3 = {
  key: 1,
  class: "am-popup__ft"
}, Me = {
  props: {
    popupClass: {
      type: String,
      default: ""
    },
    // 显示
    show: {
      type: Boolean,
      default: !0
    },
    // 遮掩层
    mask: {
      type: Boolean,
      default: !1
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 关闭按钮
    showCloseBtn: {
      type: Boolean,
      default: !0
    },
    // 宽度
    width: {
      type: String,
      default: ""
    },
    // 高度
    height: {
      type: String,
      default: ""
    },
    // 点击mask关闭
    maskClose: {
      type: Boolean,
      default: !0
    },
    // 场景
    scene: {
      type: String,
      default: "light"
      // light dark
    }
  },
  emits: ["update:show", "after-leave"],
  setup(e, { emit: s }) {
    const n = e, o = $(pe.getZIndex()), a = z(() => ({
      width: n.width,
      height: n.height,
      zIndex: o.value
    }));
    re(
      () => n.show,
      () => {
        n.show && (o.value = pe.getZIndex());
      }
    );
    const l = $(null);
    let r = null;
    ne(() => {
      r = l.value, document.body.appendChild(l.value);
    }), be(() => {
      r && r.remove();
    });
    const d = () => {
      s("update:show", !1);
    }, c = () => {
      s("after-leave", this);
    }, f = () => {
      n.maskClose && d();
    };
    return (g, _) => (u(), m("div", {
      class: T(["am-popup", {
        [`is-${e.scene}`]: e.scene
      }]),
      ref_key: "pop",
      ref: l
    }, [
      O(ce, { name: "mask-anime" }, {
        default: P(() => [
          K(b("div", {
            class: "am-popup__mask",
            style: D("z-index:" + o.value)
          }, null, 4), [
            [te, e.show]
          ])
        ]),
        _: 1
      }),
      O(ce, {
        name: "popup-anime",
        onAfterLeave: c
      }, {
        default: P(() => [
          K(b("div", {
            class: T(["am-popup__popup", e.popupClass]),
            style: D(x(a))
          }, [
            b("div", i3, [
              g.$slots.hd || e.title ? (u(), m("div", r3, [
                e.title ? (u(), m("div", c3, N(e.title), 1)) : I("", !0),
                B(g.$slots, "hd"),
                e.showCloseBtn ? (u(), Z(ve, {
                  key: 1,
                  mode: "text",
                  icon: "close",
                  "icon-size": "16px",
                  scene: e.scene,
                  size: "small",
                  class: "am-popup__close",
                  onClick: d
                }, null, 8, ["scene"])) : I("", !0)
              ])) : I("", !0),
              b("div", u3, [
                B(g.$slots, "default")
              ]),
              g.$slots.ft ? (u(), m("div", d3, [
                B(g.$slots, "ft")
              ])) : I("", !0)
            ]),
            b("div", {
              class: "am-popup__cancel-part",
              onClick: f
            })
          ], 6), [
            [te, e.show]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
};
const m3 = ["aria-valuenow"], p3 = {
  key: 0,
  class: "am-progress-bar"
}, f3 = {
  key: 0,
  class: "am-progress-bar__innerText"
}, v3 = { viewBox: "0 0 100 100" }, h3 = ["d", "stroke-width"], y3 = ["d", "stroke", "stroke-linecap", "stroke-width"], g3 = { key: 0 }, Xe = {
  props: {
    type: {
      type: String,
      default: "line"
    },
    percentage: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: "",
      values: ["", "success", "exception", "warning"]
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    duration: {
      type: Number,
      default: 3
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeLinecap: {
      type: String,
      default: "round"
    },
    textInside: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: !0
    },
    color: {
      type: null,
      default: "#111111"
    },
    format: {
      type: Function,
      default: (e) => `${e}%`
    }
  },
  setup(e) {
    const s = e, n = (w) => {
      var oe;
      const { color: S } = s;
      if (typeof S == "function")
        return S(w);
      if (typeof S == "string")
        return S;
      const J = 100 / S.length, G = S.map((R, A) => typeof R == "string" ? {
        color: R,
        percentage: (A + 1) * J
      } : R).sort((R, A) => R.percentage - A.percentage), W = Object.values(G);
      for (let R = 0; R < W.length; R += 1) {
        const A = W[R];
        if (A.percentage > w)
          return A.color;
      }
      return (oe = G[G.length - 1]) == null ? void 0 : oe.color;
    }, o = z(() => ({
      width: `${s.percentage}%`,
      animationDuration: `${s.duration}s`,
      backgroundColor: n(s.percentage)
    })), a = z(() => (s.strokeWidth / s.width * 100).toFixed(1)), l = z(() => s.type === "circle" || s.type === "dashboard" ? parseInt(`${50 - parseFloat(a.value) / 2}`, 10) : 0), r = z(() => {
      const w = l.value, S = s.type === "dashboard";
      return `
        M 50 50
        m 0 ${S ? "" : "-"}${w}
        a ${w} ${w} 0 1 1 0 ${S ? "-" : ""}${w * 2}
        a ${w} ${w} 0 1 1 0 ${S ? "" : "-"}${w * 2}
        `;
    }), d = z(() => 2 * Math.PI * l.value), c = z(() => s.type === "dashboard" ? 0.75 : 1), f = z(() => `${-1 * d.value * (1 - c.value) / 2}px`), g = z(
      () => ({
        strokeDasharray: `${d.value * c.value}px, ${d.value}px`,
        strokeDashoffset: f.value
      })
    ), _ = z(
      () => ({
        strokeDasharray: `${d.value * c.value * (s.percentage / 100)}px, ${d.value}px`,
        strokeDashoffset: f.value,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
      })
    ), y = z(() => {
      let w;
      if (s.color)
        w = n(s.percentage);
      else
        switch (s.status) {
          case "success":
            w = "#13ce66";
            break;
          case "exception":
            w = "#ff4949";
            break;
          case "warning":
            w = "#e6a23c";
            break;
          default:
            w = "#20a0ff";
        }
      return w;
    }), E = z(() => s.type === "line" ? 12 + s.strokeWidth * 0.4 : s.width * 0.111111 + 2), p = z(() => s.format(s.percentage)), k = z(() => ({
      percentage: s.percentage
    }));
    return (w, S) => (u(), m("div", {
      class: T(["am-progress", [
        `am-progress--${e.type}`,
        e.status ? `is-${e.status}` : "",
        {
          "am-progress--without-text": !e.showText,
          "am-progress--text-inside": e.textInside
        }
      ]]),
      role: "progressbar",
      "aria-valuenow": e.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      e.type === "line" ? (u(), m("div", p3, [
        b("div", {
          class: "am-progress-bar__outer",
          style: D({ height: `${e.strokeWidth}px` })
        }, [
          b("div", {
            class: T([
              "am-progress-bar__inner",
              { "am-progress-bar__inner--indeterminate": e.indeterminate }
            ]),
            style: D(x(o))
          }, [
            (e.showText || w.$slots.default) && e.textInside ? (u(), m("div", f3, [
              B(w.$slots, "default", De(Fe(x(k))), () => [
                b("span", null, N(x(p)), 1)
              ])
            ])) : I("", !0)
          ], 6)
        ], 4)
      ])) : (u(), m("div", {
        key: 1,
        class: "am-progress-circle",
        style: D({ height: `${e.width}px`, width: `${e.width}px` })
      }, [
        (u(), m("svg", v3, [
          b("path", {
            class: "am-progress-circle__track",
            d: x(r),
            stroke: "#e5e9f2",
            "stroke-width": x(a),
            fill: "none",
            style: D(x(g))
          }, null, 12, h3),
          b("path", {
            class: "am-progress-circle__path",
            d: x(r),
            stroke: x(y),
            fill: "none",
            "stroke-linecap": e.strokeLinecap,
            "stroke-width": e.percentage ? x(a) : 0,
            style: D(x(_))
          }, null, 12, y3)
        ]))
      ], 4)),
      (e.showText || w.$slots.default) && !e.textInside ? (u(), m("div", {
        key: 2,
        class: "am-progress__text",
        style: D({ fontSize: `${x(E)}px` })
      }, [
        B(w.$slots, "default", De(Fe(x(k))), () => [
          e.status ? I("", !0) : (u(), m("span", g3, N(x(p)), 1))
        ])
      ], 4)) : I("", !0)
    ], 10, m3));
  }
};
const _3 = ["onClick"], w3 = { class: "am-checkbox__box" }, b3 = {
  key: 0,
  class: "am-checkbox__text"
}, Ke = {
  props: {
    // 所选值（布尔或数组）
    value: {
      type: [Boolean, Array]
    },
    // 不可选
    disabled: {
      type: Boolean,
      default: !1
    },
    // 值
    label: null
  },
  emits: [
    "update:value",
    "input",
    "change",
    "focus",
    "blur",
    "enter"
  ],
  setup(e, { emit: s }) {
    const n = e, o = z(() => Array.isArray(n.value) ? n.value.find((l) => l === n.label) : n.label ? n.value === n.label : n.value), a = () => {
      if (Array.isArray(n.value)) {
        let l = -1;
        const r = JSON.parse(JSON.stringify(n.value));
        r.forEach((d, c) => {
          d === n.label && (l = c);
        }), l >= 0 ? r.splice(l, 1) : r.push(n.label), s("update:value", r), s("change", r);
      } else
        n.label ? (s("update:value", n.label), s("change", n.label)) : (s("update:value", !n.value), s("change", n.value));
    };
    return (l, r) => (u(), m("div", {
      class: T(["am-checkbox", {
        ["is-active"]: x(o)
      }]),
      onClick: yt(a, ["stop"])
    }, [
      b("div", w3, [
        O(ce, { name: "am-checkbox-anime" }, {
          default: P(() => [
            K(O(ie, {
              name: "check-2",
              size: "18px",
              color: "#fff"
            }, null, 512), [
              [te, x(o)]
            ])
          ]),
          _: 1
        })
      ]),
      l.$slots.default ? (u(), m("div", b3, [
        B(l.$slots, "default")
      ])) : I("", !0)
    ], 10, _3));
  }
};
const x3 = {}, k3 = { class: "am-menu" };
function $3(e, s) {
  return u(), m("div", k3, [
    B(e.$slots, "default")
  ]);
}
const Je = /* @__PURE__ */ Ie(x3, [["render", $3]]);
const z3 = { class: "am-menu-item" }, S3 = { class: "am-menu-item__text" }, E3 = {
  key: 1,
  class: "am-menu-item__children"
}, Qe = {
  props: {
    icon: {
      type: String,
      default: ""
    },
    open: {
      type: String,
      default: !1
    }
  },
  setup(e) {
    const s = e, n = me("level");
    n === void 0 ? le("level", 1) : le("level", n + 1), console.log(n, "level");
    const o = z(() => ({
      paddingLeft: (n + 1) * 16 + "px"
    })), a = $(s.open), l = () => {
      a.value = !a.value;
    };
    return (r, d) => {
      const c = ee("AmIcon");
      return u(), m("div", z3, [
        r.$slots.default ? (u(), m("div", {
          key: 0,
          class: "am-menu-item__content",
          style: D(x(o)),
          onClick: l
        }, [
          e.icon ? (u(), Z(c, {
            key: 0,
            class: "am-menu-item__icon",
            name: e.icon,
            size: "18px"
          }, null, 8, ["name"])) : I("", !0),
          b("div", S3, [
            B(r.$slots, "default")
          ]),
          r.$slots.children ? (u(), Z(c, {
            key: 1,
            class: "am-menu-item__down",
            name: "down",
            size: "18px"
          })) : I("", !0)
        ], 4)) : I("", !0),
        r.$slots.children ? K((u(), m("div", E3, [
          B(r.$slots, "children")
        ], 512)), [
          [te, a.value]
        ]) : I("", !0)
      ]);
    };
  }
};
const A3 = { class: "am-pagination" }, C3 = { key: 1 }, et = {
  props: {
    // 总数
    total: {
      type: Number,
      default: 0
    },
    // 当前页码
    current: {
      type: Number,
      default: 1
    },
    // 显示的分页个数
    pagerCount: {
      type: Number,
      default: 7
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 20
    },
    pageSizeOptions: {
      type: Array,
      default: () => [20, 40, 60]
    },
    // 显示分页数量
    showPageSize: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:current", "update:pageSize", "click-pager", "click-prev", "click-next"],
  setup(e, { emit: s }) {
    const n = e, o = z(() => {
      const { pagerCount: c } = n, f = Number(n.current), g = (c - 1) / 2, _ = Math.ceil(n.total / n.pageSize);
      let y = !1, E = !1;
      _ > c && (f > c - g && (y = !0), f < _ - g && (E = !0));
      let p = [1];
      if (y && !E) {
        p.push("prev");
        const k = _ - (c - 3);
        for (let w = k; w < _; w += 1)
          p.push(w);
      } else if (!y && E) {
        for (let k = 1; k <= c - 3; k += 1)
          p.push(k + 1);
        p.push("next");
      } else if (y && E) {
        p.push("prev");
        const k = Math.ceil((c - 5) / 2), w = Math.floor((c - 5) / 2);
        for (let S = f - k; S <= f + w; S += 1)
          p.push(S);
        p.push("next");
      } else
        for (let k = 2; k < _; k += 1)
          p.push(k);
      return _ && p.push(_), p = Array.from(new Set(p)), p;
    }), a = z(() => Math.ceil(n.total / n.pageSize)), l = (c) => {
      let { current: f } = n;
      c === "prev" ? f -= Math.floor(n.pagerCount / 2) : c === "next" ? f += Math.floor(n.pagerCount / 2) : f = c, s("update:current", f), s("click-pager", c, f);
    }, r = () => {
      const c = n.current - 1;
      s("update:current", c), s("click-prev");
    }, d = () => {
      const c = n.current + 1;
      s("update:current", c), s("click-next");
    };
    return (c, f) => {
      const g = ee("AmButton"), _ = ee("AmIcon");
      return u(), m("div", A3, [
        O(g, {
          class: "am-pagination__left",
          shape: "square",
          icon: "caret-left",
          "icon-size": "16px",
          disabled: e.current <= 1,
          onClick: r
        }, null, 8, ["disabled"]),
        (u(!0), m(ae, null, de(x(o), (y, E) => (u(), Z(g, {
          mode: y !== e.current ? "default" : "primary",
          class: T(["am-pagination__number", y === e.current ? "is-active" : ""]),
          key: E,
          onClick: (p) => l(y)
        }, {
          default: P(() => [
            y == "prev" || y === "next" ? (u(), Z(_, {
              key: 0,
              name: "ellipsis",
              size: "18px"
            })) : (u(), m("span", C3, N(y), 1))
          ]),
          _: 2
        }, 1032, ["mode", "class", "onClick"]))), 128)),
        O(g, {
          class: "am-pagination__right",
          shape: "square",
          icon: "caret-right",
          "icon-size": "16px",
          disabled: e.current >= x(a),
          onClick: d
        }, null, 8, ["disabled"])
      ]);
    };
  }
};
const L3 = { class: "am-logo" }, B3 = {
  key: 0,
  src: "//cos.sankki.com/c/20230502233419/logo-light-all.svg"
}, M3 = {
  key: 1,
  src: "//cos.sankki.com/c/20230502233458/logo-dark-all.svg"
}, I3 = {
  key: 2,
  src: "//cos.sankki.com/c/20230502233526/logo-light-icon.svg"
}, T3 = {
  key: 3,
  src: "//cos.sankki.com/c/20230502233550/logo-dark-icon.svg"
}, N3 = {
  key: 4,
  src: "//cos.sankki.com/c/20230502233615/logo-light-black.svg"
}, tt = {
  props: {
    mode: {
      type: String,
      default: "light-all"
      // light-all dark-all light-icon dark-icon black
    }
  },
  setup(e) {
    return (s, n) => (u(), m("div", L3, [
      e.mode === "light-all" ? (u(), m("img", B3)) : e.mode === "dark-all" ? (u(), m("img", M3)) : e.mode === "light-icon" ? (u(), m("img", I3)) : e.mode === "dark-icon" ? (u(), m("img", T3)) : e.mode === "black" ? (u(), m("img", N3)) : I("", !0)
    ]));
  }
};
const O3 = { class: "am-form" }, nt = {
  props: {
    labelWidth: {
      type: String,
      default: "80px"
    },
    position: {
      type: String,
      default: "left"
    },
    scene: {
      type: String,
      default: "light"
      // light dark
    }
  },
  setup(e) {
    return le("form", {
      props: e
    }), (n, o) => (u(), m("div", O3, [
      B(n.$slots, "default")
    ]));
  }
};
const V3 = { class: "am-form-item__bd" }, ot = {
  props: {
    label: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const s = e, n = me("form"), o = z(() => ({
      [`is-${s.position || n.props.labelWidth}`]: !0,
      "is-required": s.required,
      [`is-${n.props.scene}`]: n.props.scene
    })), a = z(() => ({
      width: (s.position || n.props.labelWidth) !== "top" ? `${s.labelWidth || n.props.labelWidth}` : "100%"
    }));
    return (l, r) => (u(), m("div", {
      class: T(["am-form-item", x(o)])
    }, [
      b("div", {
        class: "am-form-item__hd",
        style: D(x(a))
      }, [
        b("span", null, N(e.label), 1)
      ], 4),
      b("div", V3, [
        B(l.$slots, "default")
      ])
    ], 2));
  }
};
const D3 = { class: "am-avatar" }, F3 = ["src"], P3 = {
  key: 0,
  class: "am-avatar__name"
}, st = {
  props: {
    url: String,
    name: String,
    avatarSize: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    return (s, n) => (u(), m("div", D3, [
      b("div", {
        class: T(["am-avatar__avatar", {
          [`is-${e.avatarSize}`]: !0
        }])
      }, [
        e.url ? (u(), m("img", {
          key: 0,
          src: e.url
        }, null, 8, F3)) : (u(), Z(ie, {
          key: 1,
          name: "account-fill",
          size: "18px"
        }))
      ], 2),
      e.name ? (u(), m("div", P3, N(e.name), 1)) : I("", !0)
    ]));
  }
};
const R3 = {}, H3 = { class: "am-list" };
function W3(e, s) {
  return u(), m("div", H3, [
    B(e.$slots, "default")
  ]);
}
const at = /* @__PURE__ */ Ie(R3, [["render", W3]]);
const lt = {
  props: {
    // 选中
    selected: {
      type: Boolean
    }
  },
  setup(e) {
    return (s, n) => (u(), m("div", {
      class: T(["am-list-item", {
        "is-selected": e.selected
      }])
    }, [
      B(s.$slots, "default")
    ], 2));
  }
};
const j3 = {
  key: 0,
  class: "am-list-status__loading"
}, q3 = {
  key: 1,
  class: "am-list-status__empty"
}, Z3 = {
  key: 2,
  class: "am-list-status__error"
}, G3 = {
  key: 3,
  class: "am-list-status__end"
}, U3 = {
  key: 4,
  class: "am-list-status__error"
}, it = {
  props: {
    options: {
      type: Object,
      default: () => {
      }
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isEnd: {
      type: Boolean,
      default: !1
    },
    isEmpty: {
      type: Boolean,
      default: !1
    },
    isError: {
      type: Boolean,
      default: !1
    },
    isBlank: {
      type: Boolean,
      default: !1
    },
    endText: {
      type: String,
      default: "到底了"
    },
    loadingText: {
      type: String,
      default: "加载中"
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    errorText: {
      type: String,
      default: "加载错误"
    },
    blankText: {
      type: String,
      default: "点击加载更多"
    }
  },
  emits: ["intersect", "retry"],
  setup(e, { emit: s }) {
    const n = e, o = $(null);
    let a = null;
    const l = () => {
      a = new IntersectionObserver(([c]) => {
        c && c.isIntersecting && s("intersect");
      }, n.options), a.observe(o.value);
    }, r = () => {
      s("retry");
    }, d = () => {
      s("intersect");
    };
    return ne(() => {
      l();
    }), be(() => {
      a.disconnect();
    }), (c, f) => {
      const g = ee("AmIcon");
      return u(), m("div", {
        class: "am-list-status",
        ref_key: "observerEl",
        ref: o
      }, [
        e.isLoading ? (u(), m("div", j3, [
          O(g, {
            name: "loading1",
            size: "18px",
            color: "#aaa"
          }),
          b("span", null, N(e.loadingText), 1)
        ])) : e.isEmpty ? (u(), m("div", q3, [
          O(g, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          b("span", null, N(e.emptyText), 1)
        ])) : e.isError ? (u(), m("div", Z3, [
          O(g, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          b("span", null, N(e.errorText), 1),
          b("a", { onClick: r }, "重试")
        ])) : e.isEnd && e.endText ? (u(), m("div", G3, [
          O(g, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          b("span", null, N(e.endText), 1)
        ])) : e.isBlank ? (u(), m("div", U3, [
          b("a", {
            style: { margin: "0" },
            onClick: d
          }, N(e.blankText), 1)
        ])) : I("", !0)
      ], 512);
    };
  }
};
var Y3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function X3(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt = { exports: {} };
(function(e, s) {
  (function(n, o) {
    e.exports = o();
  })(Y3, function() {
    function n(t, i) {
      var v = void 0;
      return function() {
        v && clearTimeout(v), v = setTimeout(t, i);
      };
    }
    function o(t, i) {
      for (var v = t.length, h = v, M = []; v--; )
        M.push(i(t[h - v - 1]));
      return M;
    }
    function a(t, i) {
      var v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      if (window.Promise)
        return R(t, i, v);
      t.recalculate(!0, !0);
    }
    function l(t) {
      for (var i = t.options, v = t.responsiveOptions, h = t.keys, M = t.docWidth, C = void 0, L = 0; L < h.length; L++) {
        var V = parseInt(h[L], 10);
        M >= V && (C = i.breakAt[V], fe(C, v));
      }
      return v;
    }
    function r(t) {
      for (var i = t.options, v = t.responsiveOptions, h = t.keys, M = t.docWidth, C = void 0, L = h.length - 1; L >= 0; L--) {
        var V = parseInt(h[L], 10);
        M <= V && (C = i.breakAt[V], fe(C, v));
      }
      return v;
    }
    function d(t) {
      var i = t.useContainerForBreakpoints ? t.container.clientWidth : window.innerWidth, v = { columns: t.columns };
      F(t.margin) ? v.margin = { x: t.margin.x, y: t.margin.y } : v.margin = { x: t.margin, y: t.margin };
      var h = Object.keys(t.breakAt);
      return t.mobileFirst ? l({ options: t, responsiveOptions: v, keys: h, docWidth: i }) : r({ options: t, responsiveOptions: v, keys: h, docWidth: i });
    }
    function c(t) {
      return d(t).columns;
    }
    function f(t) {
      return d(t).margin;
    }
    function g(t) {
      var i = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], v = c(t), h = f(t).x, M = 100 / v;
      if (!i)
        return M;
      if (v === 1)
        return "100%";
      var C = "px";
      if (typeof h == "string") {
        var L = parseFloat(h);
        C = h.replace(L, ""), h = L;
      }
      return h = (v - 1) * h / v, C === "%" ? M - h + "%" : "calc(" + M + "% - " + h + C + ")";
    }
    function _(t, i) {
      var v = c(t.options), h = 0, M = void 0, C = void 0;
      if (++i === 1)
        return 0;
      C = f(t.options).x;
      var L = "px";
      if (typeof C == "string") {
        var V = parseFloat(C, 10);
        L = C.replace(V, ""), C = V;
      }
      return M = (C - (v - 1) * C / v) * (i - 1), h += g(t.options, !1) * (i - 1), L === "%" ? h + M + "%" : "calc(" + h + "% + " + M + L + ")";
    }
    function y(t) {
      var i = 0, v = t.container, h = t.rows;
      w(h, function(M) {
        i = M > i ? M : i;
      }), v.style.height = i + "px";
    }
    function E(t, i) {
      var v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], h = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], M = c(t.options), C = f(t.options).y;
      xe(t, M, v), w(i, function(L) {
        var V = 0, ye = parseInt(L.offsetHeight, 10);
        isNaN(ye) || (t.rows.forEach(function(kt, $t) {
          kt < t.rows[V] && (V = $t);
        }), L.style.position = "absolute", L.style.top = t.rows[V] + "px", L.style.left = "" + t.cols[V], t.rows[V] += isNaN(ye) ? 0 : ye + C, h && (L.dataset.macyComplete = 1));
      }), h && (t.tmpRows = null), y(t);
    }
    function p(t, i) {
      var v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], h = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], M = c(t.options), C = f(t.options).y;
      xe(t, M, v), w(i, function(L) {
        t.lastcol === M && (t.lastcol = 0);
        var V = X(L, "height");
        V = parseInt(L.offsetHeight, 10), isNaN(V) || (L.style.position = "absolute", L.style.top = t.rows[t.lastcol] + "px", L.style.left = "" + t.cols[t.lastcol], t.rows[t.lastcol] += isNaN(V) ? 0 : V + C, t.lastcol += 1, h && (L.dataset.macyComplete = 1));
      }), h && (t.tmpRows = null), y(t);
    }
    var k = function t(i, v) {
      if (!(this instanceof t))
        return new t(i, v);
      if (i && i.nodeName)
        return i;
      if (i = i.replace(/^\s*/, "").replace(/\s*$/, ""), v)
        return this.byCss(i, v);
      for (var h in this.selectors)
        if (v = h.split("/"), new RegExp(v[1], v[2]).test(i))
          return this.selectors[h](i);
      return this.byCss(i);
    };
    k.prototype.byCss = function(t, i) {
      return (i || document).querySelectorAll(t);
    }, k.prototype.selectors = {}, k.prototype.selectors[/^\.[\w\-]+$/] = function(t) {
      return document.getElementsByClassName(t.substring(1));
    }, k.prototype.selectors[/^\w+$/] = function(t) {
      return document.getElementsByTagName(t);
    }, k.prototype.selectors[/^\#[\w\-]+$/] = function(t) {
      return document.getElementById(t.substring(1));
    };
    var w = function(t, i) {
      for (var v = t.length, h = v; v--; )
        i(t[h - v - 1]);
    }, S = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.running = !1, this.events = [], this.add(t);
    };
    S.prototype.run = function() {
      if (!this.running && this.events.length > 0) {
        var t = this.events.shift();
        this.running = !0, t(), this.running = !1, this.run();
      }
    }, S.prototype.add = function() {
      var t = this, i = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return !!i && (Array.isArray(i) ? w(i, function(v) {
        return t.add(v);
      }) : (this.events.push(i), void this.run()));
    }, S.prototype.clear = function() {
      this.events = [];
    };
    var J = function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.instance = t, this.data = i, this;
    }, Q = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.events = {}, this.instance = t;
    };
    Q.prototype.on = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      return !(!t || !i) && (Array.isArray(this.events[t]) || (this.events[t] = []), this.events[t].push(i));
    }, Q.prototype.emit = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!t || !Array.isArray(this.events[t]))
        return !1;
      var v = new J(this.instance, i);
      w(this.events[t], function(h) {
        return h(v);
      });
    };
    var G = function(t) {
      return !("naturalHeight" in t && t.naturalHeight + t.naturalWidth === 0) || t.width + t.height !== 0;
    }, W = function(t, i) {
      var v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return new Promise(function(h, M) {
        if (i.complete)
          return G(i) ? h(i) : M(i);
        i.addEventListener("load", function() {
          return G(i) ? h(i) : M(i);
        }), i.addEventListener("error", function() {
          return M(i);
        });
      }).then(function(h) {
        v && t.emit(t.constants.EVENT_IMAGE_LOAD, { img: h });
      }).catch(function(h) {
        return t.emit(t.constants.EVENT_IMAGE_ERROR, { img: h });
      });
    }, oe = function(t, i) {
      var v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return o(i, function(h) {
        return W(t, h, v);
      });
    }, R = function(t, i) {
      var v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return Promise.all(oe(t, i, v)).then(function() {
        t.emit(t.constants.EVENT_IMAGE_COMPLETE);
      });
    }, A = function(t) {
      return n(function() {
        t.emit(t.constants.EVENT_RESIZE), t.queue.add(function() {
          return t.recalculate(!0, !0);
        });
      }, 100);
    }, H = function(t) {
      if (t.container = k(t.options.container), t.container instanceof k || !t.container)
        return !!t.options.debug && console.error("Error: Container not found");
      t.container.length && (t.container = t.container[0]), t.options.container = t.container, t.container.style.position = "relative";
    }, U = function(t) {
      t.queue = new S(), t.events = new Q(t), t.rows = [], t.resizer = A(t);
    }, j = function(t) {
      var i = k("img", t.container);
      window.addEventListener("resize", t.resizer), t.on(t.constants.EVENT_IMAGE_LOAD, function() {
        return t.recalculate(!1, !1);
      }), t.on(t.constants.EVENT_IMAGE_COMPLETE, function() {
        return t.recalculate(!0, !0);
      }), t.options.useOwnImageLoader || a(t, i, !t.options.waitForImages), t.emit(t.constants.EVENT_INITIALIZED);
    }, Y = function(t) {
      H(t), U(t), j(t);
    }, F = function(t) {
      return t === Object(t) && Object.prototype.toString.call(t) !== "[object Array]";
    }, fe = function(t, i) {
      F(t) || (i.columns = t), F(t) && t.columns && (i.columns = t.columns), F(t) && t.margin && !F(t.margin) && (i.margin = { x: t.margin, y: t.margin }), F(t) && t.margin && F(t.margin) && t.margin.x && (i.margin.x = t.margin.x), F(t) && t.margin && F(t.margin) && t.margin.y && (i.margin.y = t.margin.y);
    }, X = function(t, i) {
      return window.getComputedStyle(t, null).getPropertyValue(i);
    }, xe = function(t, i) {
      var v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      if (t.lastcol || (t.lastcol = 0), t.rows.length < 1 && (v = !0), v) {
        t.rows = [], t.cols = [], t.lastcol = 0;
        for (var h = i - 1; h >= 0; h--)
          t.rows[h] = 0, t.cols[h] = _(t, h);
      } else if (t.tmpRows) {
        t.rows = [];
        for (var h = i - 1; h >= 0; h--)
          t.rows[h] = t.tmpRows[h];
      } else {
        t.tmpRows = [];
        for (var h = i - 1; h >= 0; h--)
          t.tmpRows[h] = t.rows[h];
      }
    }, Ce = function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], v = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], h = i ? t.container.children : k(':scope > *:not([data-macy-complete="1"])', t.container);
      h = Array.from(h).filter(function(C) {
        return C.offsetParent !== null;
      });
      var M = g(t.options);
      return w(h, function(C) {
        i && (C.dataset.macyComplete = 0), C.style.width = M;
      }), t.options.trueOrder ? (p(t, h, i, v), t.emit(t.constants.EVENT_RECALCULATED)) : (E(t, h, i, v), t.emit(t.constants.EVENT_RECALCULATED));
    }, ke = function() {
      return !!window.Promise;
    }, $e = Object.assign || function(t) {
      for (var i = 1; i < arguments.length; i++) {
        var v = arguments[i];
        for (var h in v)
          Object.prototype.hasOwnProperty.call(v, h) && (t[h] = v[h]);
      }
      return t;
    };
    Array.from || (Array.from = function(t) {
      for (var i = 0, v = []; i < t.length; )
        v.push(t[i++]);
      return v;
    });
    var Oe = { columns: 4, margin: 2, trueOrder: !1, waitForImages: !1, useImageLoader: !0, breakAt: {}, useOwnImageLoader: !1, onInit: !1, cancelLegacy: !1, useContainerForBreakpoints: !1 };
    (function() {
      try {
        document.createElement("a").querySelector(":scope *");
      } catch {
        (function() {
          function i(C) {
            return function(L) {
              if (L && v.test(L)) {
                var V = this.getAttribute("id");
                V || (this.id = "q" + Math.floor(9e6 * Math.random()) + 1e6), arguments[0] = L.replace(v, "#" + this.id);
                var ye = C.apply(this, arguments);
                return V === null ? this.removeAttribute("id") : V || (this.id = V), ye;
              }
              return C.apply(this, arguments);
            };
          }
          var v = /:scope\b/gi, h = i(Element.prototype.querySelector);
          Element.prototype.querySelector = function(C) {
            return h.apply(this, arguments);
          };
          var M = i(Element.prototype.querySelectorAll);
          Element.prototype.querySelectorAll = function(C) {
            return M.apply(this, arguments);
          };
        })();
      }
    })();
    var q = function t() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Oe;
      if (!(this instanceof t))
        return new t(i);
      this.options = {}, $e(this.options, Oe, i), this.options.cancelLegacy && !ke() || Y(this);
    };
    return q.init = function(t) {
      return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new q(t);
    }, q.prototype.recalculateOnImageLoad = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return a(this, k("img", this.container), !t);
    }, q.prototype.runOnImageLoad = function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], v = k("img", this.container);
      return this.on(this.constants.EVENT_IMAGE_COMPLETE, t), i && this.on(this.constants.EVENT_IMAGE_LOAD, t), a(this, v, i);
    }, q.prototype.recalculate = function() {
      var t = this, i = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], v = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      return v && this.queue.clear(), this.queue.add(function() {
        return Ce(t, i, v);
      });
    }, q.prototype.remove = function() {
      window.removeEventListener("resize", this.resizer), w(this.container.children, function(t) {
        t.removeAttribute("data-macy-complete"), t.removeAttribute("style");
      }), this.container.removeAttribute("style");
    }, q.prototype.reInit = function() {
      this.recalculate(!0, !0), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), this.container.style.position = "relative";
    }, q.prototype.on = function(t, i) {
      this.events.on(t, i);
    }, q.prototype.emit = function(t, i) {
      this.events.emit(t, i);
    }, q.constants = { EVENT_INITIALIZED: "macy.initialized", EVENT_RECALCULATED: "macy.recalculated", EVENT_IMAGE_LOAD: "macy.image.load", EVENT_IMAGE_ERROR: "macy.image.error", EVENT_IMAGE_COMPLETE: "macy.images.complete", EVENT_RESIZE: "macy.resize" }, q.prototype.constants = q.constants, q;
  });
})(xt);
var K3 = xt.exports;
const J3 = /* @__PURE__ */ X3(K3);
const rt = {
  props: {
    config: {
      type: Object,
      default: () => {
      }
    },
    // 当changeKey变化时，重新计算位置
    changeKey: {
      type: null
    }
  },
  setup(e) {
    const s = e, n = $(null), o = $(`m-waterfall-box${Math.floor(Math.random() * 9999)}`), a = () => {
      n.value && n.value.recalculate(!0);
    }, l = async () => {
      n.value = new J3({
        container: `.${o.value}`,
        trueOrder: !1,
        useOwnImageLoader: !1,
        debug: !0,
        margin: {
          x: 16,
          y: 16
        },
        breakAt: {
          1e4: 6,
          1900: 5,
          1700: 4,
          1500: 4,
          1300: 3
        },
        ...s.config
      }), window.addEventListener("resize", a);
    };
    return ht(() => {
      window.removeEventListener("reszie", a);
    }), ne(() => {
      l();
    }), re(() => s.changeKey, () => {
      l();
    }), (r, d) => (u(), m("div", {
      ref: "wb",
      class: T(["am-waterfall", o.value])
    }, [
      B(r.$slots, "default")
    ], 2));
  }
};
const Q3 = /* @__PURE__ */ b("div", { class: "am-switch__switch" }, [
  /* @__PURE__ */ b("i")
], -1), e6 = {
  key: 0,
  class: "am-switch__text"
}, ct = {
  props: {
    value: {
      type: Boolean,
      default: !1
    },
    scene: {
      type: String,
      default: "light"
      // light dark
    },
    size: {
      type: String,
      default: "medium"
      // medium 20px small 14px
    }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: s }) {
    const n = e, o = () => {
      s("update:value", !n.value), s("change", n.value);
    };
    return (a, l) => (u(), m("div", {
      class: T(["am-switch", {
        ["is-active"]: e.value,
        [`is-${e.scene}`]: e.scene,
        [`is-${e.size}`]: e.size
      }]),
      onClick: o
    }, [
      Q3,
      a.$slots.default ? (u(), m("div", e6, [
        B(a.$slots, "default")
      ])) : I("", !0)
    ], 2));
  }
};
const t6 = ["onClick"], n6 = { class: "am-radio__box" }, o6 = {
  key: 0,
  class: "am-radio__text"
}, ut = {
  props: {
    // 所选值（布尔或数组）
    value: {
      type: null
    },
    // 不可选
    disabled: {
      type: Boolean,
      default: !1
    },
    // 值
    label: null,
    // 场景
    scene: {
      type: String,
      default: "light"
      // light dark
    }
  },
  emits: [
    "update:value",
    "input",
    "change",
    "focus",
    "blur",
    "enter"
  ],
  setup(e, { emit: s }) {
    const n = e, o = z(() => n.label !== void 0 ? n.value === n.label : n.value), a = () => {
      n.label !== void 0 ? (s("update:value", n.label), s("change", n.label)) : (s("update:value", !n.value), s("change", n.value));
    };
    return (l, r) => (u(), m("div", {
      class: T(["am-radio", {
        ["is-active"]: x(o),
        [`is-${e.scene}`]: e.scene
      }]),
      onClick: yt(a, ["stop"])
    }, [
      b("div", n6, [
        O(ce, { name: "am-radio-anime" }, {
          default: P(() => [
            K(O(ie, {
              name: "check-2",
              size: "18px",
              color: "#fff"
            }, null, 512), [
              [te, x(o)]
            ])
          ]),
          _: 1
        })
      ]),
      l.$slots.default ? (u(), m("div", o6, [
        B(l.$slots, "default")
      ])) : I("", !0)
    ], 10, t6));
  }
};
const dt = {
  props: {
    // 模式
    mode: {
      type: String,
      default: "default"
      // default 默认 fill 实心的 plain 空心的 
    },
    // 颜色
    color: {
      type: String,
      default: ""
      // #f00 primary red orange yellow green blue purple pink black  
    },
    // 尺寸
    size: {
      type: String,
      default: "medium"
      // large 40px medium 32px small 24px mini 14px
    },
    // 暗色模式
    scene: {
      type: String,
      default: "light"
      // light dark
    }
  },
  setup(e) {
    const s = e, n = z(() => {
      const o = /rgba|\#/.test(s.color) ? s.color : s.scene === "light" ? `var(--c-${s.color})` : `var(--cd-${s.color})`, a = s.scene === "light" ? "var(--c-bg)" : "var(--cd-bg)", l = s.scene === "light" ? "var(--c-border)" : "var(--cd-border)", r = s.scene === "light" ? "var(--c-main)" : "var(--cd-main)";
      return s.mode === "default" ? {
        background: a,
        borderColor: l,
        color: r
      } : s.mode === "fill" ? {
        borderColor: o,
        background: o,
        color: "#fff"
      } : s.mode === "plain" ? {
        borderColor: o,
        background: a,
        color: o
      } : {};
    });
    return (o, a) => (u(), m("div", {
      class: T(["am-tag", {
        ["is-" + e.mode]: e.mode,
        ["is-" + e.size]: e.size,
        ["is-" + e.color]: e.color,
        ["is-" + e.scene]: e.scene
      }]),
      style: D(x(n))
    }, [
      B(o.$slots, "default")
    ], 6));
  }
};
const s6 = {
  key: 0,
  class: "am-alert__icon"
}, a6 = { class: "am-alert__content" }, mt = {
  props: {
    type: {
      type: String,
      default: "info"
      // info 白 warning 黄 success 绿 fail 红
    },
    size: {
      type: String,
      default: "small"
      // small 小 middle 中 mini 迷你
    },
    showClose: {
      type: Boolean,
      default: !1
    },
    showIcon: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const s = e, n = $(!0), o = z(() => ({
      [`is-${s.type}`]: !0,
      [`is-${s.size}`]: !0
    })), a = z(() => s.type === "info" ? "info-fill" : s.type === "success" ? "success-fill" : s.type === "fail" ? "error-fill" : s.type === "warning" ? "info-fill" : ""), l = () => {
      n.value = !1;
    };
    return (r, d) => {
      const c = ee("AmIcon");
      return n.value ? (u(), m("div", {
        key: 0,
        class: T(["am-alert", x(o)])
      }, [
        e.showIcon && x(a) ? (u(), m("div", s6, [
          O(c, {
            name: x(a),
            size: "18px"
          }, null, 8, ["name"])
        ])) : I("", !0),
        b("div", a6, [
          B(r.$slots, "default")
        ]),
        e.showClose ? (u(), m("div", {
          key: 1,
          class: "am-alert__close",
          onClick: l
        }, [
          O(c, { name: "close" })
        ])) : I("", !0)
      ], 2)) : I("", !0);
    };
  }
};
const l6 = { class: "am-message" }, i6 = {
  props: {
    type: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: "通知"
    },
    duration: {
      type: Number,
      default: 2e3
    },
    destroySelf: Function
  },
  setup(e, { expose: s }) {
    const n = e, o = $(!1), a = $(pe.getZIndex()), l = $(null), r = z(() => {
      let y = "";
      switch (n.type) {
        case "success":
          y = "success-fill";
          break;
        case "fail":
          y = "error-fill";
          break;
        case "info":
          y = "info-fill";
          break;
        case "warning":
          y = "info-fill";
          break;
      }
      return y;
    });
    ne(() => {
      o.value = !0, l.value = setTimeout(() => {
        o.value = !1;
      }, n.duration);
    });
    const d = () => {
    }, c = () => {
    }, f = () => {
      console.log(n), n.destroySelf();
    }, g = () => {
      f();
    };
    return s({
      close: () => {
        l.value && (clearTimeout(l.value), l.value = null), o.value = !1;
      },
      show: o
    }), (y, E) => (u(), m("div", l6, [
      O(ce, {
        name: "am-message__anime",
        onAfterLeave: g
      }, {
        default: P(() => [
          K(b("div", {
            class: T(["am-message__body", "am-message__body--" + e.type]),
            style: D({
              "z-index": a.value
            }),
            onMouseenter: d,
            onMouseleave: c
          }, [
            e.type ? (u(), Z(ie, {
              key: 0,
              name: x(r),
              size: "20px"
            }, null, 8, ["name"])) : I("", !0),
            b("span", null, N(e.content), 1)
          ], 38), [
            [te, o.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}, Se = [], pt = {
  install(e) {
    const s = (o) => {
      let a = {
        content: "this is a message",
        type: "",
        duration: 2e3
      }, l = document.body;
      typeof o == "string" ? a.content = o : (a = { ...a, ...o }, l = o.father || l);
      const r = document.createElement("div"), d = O(i6, {
        ...a
      });
      he(d, r), l.appendChild(r.firstElementChild);
      const c = d.component;
      return Se.push(c), c.props.destroySelf = () => {
        const f = Se.findIndex((g) => g === c);
        Se.splice(f, 1), he(null, r), r.remove();
      }, c;
    }, n = (o) => {
      s(o);
    };
    n.success = (o) => {
      s({
        content: o,
        type: "success"
      });
    }, n.fail = (o) => {
      s({
        content: o,
        type: "fail"
      });
    }, n.info = (o) => {
      s({
        content: o,
        type: "info"
      });
    }, n.warning = (o) => {
      s({
        content: o,
        type: "warning"
      });
    }, n.closeMessage = (o) => {
      o ? o.exposed.close() : Se.forEach((a) => {
        a.exposed.close();
      });
    }, e.provide("$message", n), window.$message = n;
  }
};
const r6 = { class: "am-loading" }, c6 = {
  key: 0,
  class: "am-loading__inner"
}, u6 = { class: "am-loading__card" }, d6 = /* @__PURE__ */ b("svg", {
  class: "spinner",
  width: "40px",
  height: "40px",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ b("circle", {
    class: "path2",
    fill: "none",
    "stroke-width": "3",
    cx: "20",
    cy: "20",
    r: "13"
  }),
  /* @__PURE__ */ b("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "3",
    cx: "20",
    cy: "20",
    r: "13"
  })
], -1), m6 = {
  props: {
    destroySelf: Function,
    content: {
      type: String,
      default: "加载中"
    }
  },
  setup(e, { expose: s }) {
    const n = e, o = $(!1), a = $(!1);
    let l = !1, r = null;
    re(() => o.value, () => {
      o.value ? (a.value = !0, r && clearTimeout(r), r = setTimeout(() => {
        l = !0, o.value || (a.value = !1);
      }, 600)) : l && (a.value = !1, l = !1);
    }), ne(() => {
      o.value = !0;
    });
    let d;
    const c = () => {
      n.destroySelf();
    }, f = () => {
      d(), c();
    };
    return s({
      close: async () => {
        o.value = !1, await new Promise((_) => {
          d = _;
        });
      },
      show: o
    }), (_, y) => (u(), m("div", r6, [
      O(ce, {
        name: "am-loading-anime",
        onAfterLeave: f
      }, {
        default: P(() => [
          a.value ? (u(), m("div", c6, [
            b("div", u6, [
              d6,
              b("span", null, N(e.content), 1)
            ])
          ])) : I("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Ee = [], ft = {
  install(e) {
    const s = (o) => {
      let a = {
        content: "加载中"
      }, l = document.body;
      typeof o == "string" ? a.content = o : (a = { ...a, ...o }, l = o.father || l);
      const r = document.createElement("div"), d = O(m6, {
        ...a
      });
      he(d, r), l.appendChild(r.firstElementChild);
      const c = d.component;
      return Ee.push(c), c.props.destroySelf = () => {
        const f = Ee.findIndex((g) => g === c);
        Ee.splice(f, 1), he(null, r), r.remove();
      }, c;
    }, n = {};
    n.show = s, n.close = async (o) => {
      o ? await o.exposed.close() : await Promise.all(Ee.map((a) => a.exposed.close()));
    }, e.provide("$loading", n);
  }
};
const p6 = { class: "am-dialog" }, f6 = {
  props: {
    title: {
      type: String,
      default: "提示"
    },
    content: {
      type: String,
      default: "确定操作吗？"
    },
    isHtml: {
      type: Boolean,
      default: !1
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    destroySelf: Function,
    confirm: Function,
    cancel: Function
  },
  setup(e) {
    const s = e, n = $(!1);
    let o = "cancel";
    ne(() => {
      n.value = !0;
    });
    const a = () => {
      o = "cancel", n.value = !1;
    }, l = () => {
      o = "confirm", n.value = !1;
    }, r = () => {
      o === "cancel" ? s.cancel() : s.confirm(), s.destroySelf();
    };
    return (d, c) => (u(), m("div", p6, [
      O(Me, {
        "popup-class": "am-dialog",
        width: "480px",
        show: n.value,
        "onUpdate:show": c[0] || (c[0] = (f) => n.value = f),
        title: e.title,
        onAfterLeave: r
      }, {
        ft: P(() => [
          O(ve, { onClick: a }, {
            default: P(() => [
              Ae(N(e.cancelText), 1)
            ]),
            _: 1
          }),
          O(ve, {
            mode: "primary",
            onClick: l
          }, {
            default: P(() => [
              Ae(N(e.confirmText), 1)
            ]),
            _: 1
          })
        ]),
        default: P(() => [
          b("p", null, N(e.content), 1)
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}, vt = {
  install(e) {
    const n = (o) => {
      console.log("options", o);
      const a = document.createElement("div"), l = O(f6, {
        ...o
      });
      console.log("1", l, a), he(l, a), console.log("1.1"), document.body.appendChild(a.firstElementChild);
      const r = l.component;
      return console.log("2"), r.props.destroySelf = () => {
        he(null, a), a.remove();
      }, new Promise((d, c) => {
        r.props.confirm = d, r.props.cancel = c;
      });
    };
    e.provide("$dialog", n);
  }
};
(function(e) {
  var s, n, o, a, l, r = '<svg><symbol id="editor" viewBox="0 0 1024 1024"><path d="M694.037333 213.333333v64H234.666667v469.333334h512V512h64v234.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h459.370666z m136.746667 24.234667l45.098667 45.397333-343.722667 341.290667 0.128 0.128-46.592 1.578667 1.322667-47.274667 0.085333 0.106667 343.68-341.226667z"  ></path></symbol><symbol id="ascending" viewBox="0 0 1024 1024"><path d="M404.970667 180.117333c20.096-11.114667 22.464-12.416 38.4-3.946666l7.146666 3.925333c6.336 8.298667 7.488 9.813333 8.64 17.002667l0.810667 5.781333v644.202667h-64V279.68l-180.053333 180.117333L170.666667 414.549333zM682.666667 714.666667v64h-128v-64h128z m64-149.333334v64h-192v-64h192z m64-149.333333v64H554.666667v-64h256z m64-149.333333v64H554.666667v-64h320z"  ></path></symbol><symbol id="browse" viewBox="0 0 1024 1024"><path d="M512 234.666667c131.946667 0 252.245333 80.512 360.874667 241.536a64 64 0 0 1 2.410666 67.712l-2.410666 3.882666-6.058667 8.853334C759.786667 711.765333 641.493333 789.333333 512 789.333333c-131.946667 0-252.245333-80.512-360.874667-241.536a64 64 0 0 1-2.410666-67.712l2.410666-3.882666 6.058667-8.853334C264.213333 312.234667 382.506667 234.666667 512 234.666667z m0 64c-105.770667 0-206.037333 65.749333-301.952 204.757333L204.181333 512l5.888 8.597333C306.069333 659.648 406.314667 725.333333 512 725.333333c105.770667 0 206.037333-65.749333 301.952-204.757333l5.866667-8.576-5.888-8.597333C717.930667 364.352 617.685333 298.666667 512 298.666667z m0 77.482666a141.482667 141.482667 0 1 1 0 282.944 141.482667 141.482667 0 0 1 0-282.944z m0 64a77.482667 77.482667 0 1 0 0 154.944 77.482667 77.482667 0 0 0 0-154.944z"  ></path></symbol><symbol id="code" viewBox="0 0 1024 1024"><path d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"  ></path></symbol><symbol id="editor1" viewBox="0 0 1024 1024"><path d="M694.037333 213.333333v64H234.666667v469.333334h512V512h64v234.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h459.370666z m136.746667 24.234667l45.098667 45.397333-343.722667 341.290667 0.128 0.128-46.592 1.578667 1.322667-47.274667 0.085333 0.106667 343.68-341.226667z"  ></path></symbol><symbol id="filter" viewBox="0 0 1024 1024"><path d="M764.266667 213.333333a64 64 0 0 1 49.557333 104.512L615.466667 560.426667v273.386666l-54.336-24.704V525.781333L764.266667 277.333333H243.925333l200.192 253.205334v225.450666l-57.941333-26.304v-169.237333l-192.448-243.413333A64 64 0 0 1 243.925333 213.333333h520.341334z"  ></path></symbol><symbol id="link" viewBox="0 0 1024 1024"><path d="M618.24 439.381333a152.746667 152.746667 0 0 1 0 216l-135.893333 135.893334a163.370667 163.370667 0 1 1-231.04-231.04l66.922666-66.944 45.269334 45.269333-66.944 66.944a99.370667 99.370667 0 1 0 140.522666 140.522667l135.893334-135.893334a88.746667 88.746667 0 0 0 0-125.482666z m182.528-197.589333a163.370667 163.370667 0 0 1 0 231.04L733.866667 539.776l-45.269334-45.248 66.944-66.944a99.370667 99.370667 0 1 0-140.522666-140.522667l-135.893334 135.893334a88.746667 88.746667 0 0 0 0 125.482666l-45.269333 45.269334a152.746667 152.746667 0 0 1 0-216l135.893333-135.893334a163.370667 163.370667 0 0 1 231.04 0z"  ></path></symbol><symbol id="map" viewBox="0 0 1024 1024"><path d="M512 128c164.949333 0 298.666667 129.941333 298.666667 290.261333 0 3.392-0.064 6.784-0.213334 10.24-3.669333 95.914667-58.24 203.776-147.797333 313.173334a1260.714667 1260.714667 0 0 1-139.818667 144.768l-10.837333 9.322666-10.837333-9.322666-13.013334-11.626667a1260.714667 1260.714667 0 0 1-126.805333-133.162667c-89.557333-109.376-144.128-217.237333-147.818667-313.173333-0.128-3.413333-0.192-6.826667-0.192-10.24 0-158.08 130.069333-286.677333 291.904-290.176L512 128z m0 64c-130.005333 0-234.666667 101.717333-234.666667 226.261333 0 2.56 0.042667 5.141333 0.149334 7.765334 2.944 76.608 48.554667 171.52 133.376 275.093333a1184.682667 1184.682667 0 0 0 86.613333 94.506667l14.528 14.016 14.506667-14.016a1184.682667 1184.682667 0 0 0 86.634666-94.506667c84.821333-103.573333 130.432-198.485333 133.376-275.093333 0.106667-2.624 0.149333-5.205333 0.149334-7.765334C746.666667 293.717333 642.005333 192 512 192z m0 74.666667a149.333333 149.333333 0 1 1 0 298.666666 149.333333 149.333333 0 0 1 0-298.666666z m0 64a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z"  ></path></symbol><symbol id="resonserate" viewBox="0 0 1024 1024"><path d="M516.288 170.666667c4.330667 0 8.512 1.621333 11.733333 4.544L868.906667 485.333333c6.549333 5.973333 7.552 15.786667 2.688 22.954667l-1.450667 1.877333c-0.277333 0.298667-114.325333 104.085333-342.165333 311.381334a17.386667 17.386667 0 0 1-24.661334-1.237334 17.642667 17.642667 0 0 1-4.522666-11.797333v-179.904c-16.213333 0.426667-32.170667 1.962667-47.744 4.586667l-4.693334 0.810666c-129.066667 23.552-232.810667 98.304-267.306666 223.936l-2.624-5.696C166.186667 829.12 149.333333 781.525333 149.333333 734.037333c0-198.058667 154.922667-359.68 349.482667-368.874666V188.245333c0-9.706667 7.829333-17.578667 17.493333-17.578666z m46.528 122.730666v132.821334l-60.992 2.88c-140.416 6.613333-255.36 109.44-282.453333 243.946666 56.277333-51.541333 130.261333-86.4 215.978666-102.058666l5.12-0.896a404.309333 404.309333 0 0 1 56.746667-5.44l65.6-1.664v140.373333l225.28-205.013333-225.28-204.949334z"  ></path></symbol><symbol id="share" viewBox="0 0 1024 1024"><path d="M395.946667 234.666667v64H256v469.333333h512V522.666667h64V768a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h139.946667z m335.850666-87.914667l150.848 150.826667-158.378666 158.4-45.269334-45.248L748.394667 341.333333H672c-121.685333 0-220.714667 97.024-223.914667 217.941334L448 565.333333v85.333334h-64v-85.333334C384 406.272 512.938667 277.333333 672 277.333333h99.861333l-85.312-85.333333 45.248-45.248z"  ></path></symbol><symbol id="set" viewBox="0 0 1024 1024"><path d="M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z"  ></path></symbol><symbol id="filter-fill" viewBox="0 0 1024 1024"><path d="M776.341333 170.666667a64 64 0 0 1 49.557334 104.512L627.541333 517.76v273.386667L398.293333 687.018667v-169.237334l-192.469333-243.413333A64 64 0 0 1 256 170.666667h520.341333z"  ></path></symbol><symbol id="loading" viewBox="0 0 1024 1024"><path d="M277.333333 759.466667C213.333333 695.466667 170.666667 610.133333 170.666667 512c0-187.733333 153.6-341.333333 341.333333-341.333333v85.333333c-140.8 0-256 115.2-256 256 0 72.533333 29.866667 140.8 81.066667 187.733333l-59.733334 59.733334z"  ></path></symbol><symbol id="loading1" viewBox="0 0 1024 1024"><path d="M379.733333 827.733333l68.266667-68.266666c21.333333 4.266667 42.666667 8.533333 68.266667 8.533333 140.8 0 256-115.2 256-256 0-21.333333-4.266667-46.933333-8.533334-68.266667l68.266667-68.266666c17.066667 42.666667 25.6 85.333333 25.6 132.266666 0 187.733333-153.6 341.333333-341.333333 341.333334-51.2 4.266667-98.133333-4.266667-136.533334-21.333334z m-183.466666-183.466666c-17.066667-42.666667-25.6-85.333333-25.6-132.266667 0-187.733333 153.6-341.333333 341.333333-341.333333 46.933333 0 93.866667 8.533333 132.266667 25.6l-68.266667 68.266666c-17.066667-4.266667-42.666667-8.533333-64-8.533333-140.8 0-256 115.2-256 256 0 21.333333 4.266667 46.933333 8.533333 68.266667l-68.266666 64z"  ></path></symbol><symbol id="packaging" viewBox="0 0 1024 1024"><path d="M537.813333 118.058667l298.666667 131.776A64 64 0 0 1 874.666667 308.373333v407.253334a64 64 0 0 1-38.186667 58.538666l-298.666667 131.776a64 64 0 0 1-51.626666 0l-298.666667-131.776A64 64 0 0 1 149.333333 715.626667v-407.253334a64 64 0 0 1 38.186667-58.538666l298.666667-131.776a64 64 0 0 1 51.626666 0zM213.333333 360.64v354.986667l266.666667 117.632V485.077333L213.333333 360.64z m597.333334 2.944l-85.717334 40V533.333333H725.333333l-0.384 0.213334v1.130666l-1.941333-0.021333L661.333333 569.6v-34.944h-0.384v-101.205333L544 488.021333v345.237334L810.666667 715.626667V363.584z m-484.010667-105.216l-93.077333 41.066667 281.578666 131.413333 94.698667-44.202667-283.2-128.277333zM512 176.618667l-106.752 47.082666 281.002667 127.296 107.413333-50.133333L512 176.618667z"  ></path></symbol><symbol id="product" viewBox="0 0 1024 1024"><path d="M537.984 139.52l277.333333 123.178667A64 64 0 0 1 853.333333 321.194667v381.610666a64 64 0 0 1-38.016 58.496l-277.333333 123.157334a64 64 0 0 1-51.968 0l-277.333333-123.157334A64 64 0 0 1 170.666667 702.805333V321.194667a64 64 0 0 1 38.016-58.496l277.333333-123.157334a64 64 0 0 1 51.968 0zM234.666667 381.44v321.365333l250.666666 111.317334V488.853333L234.666667 381.44z m554.666666 2.304l-240 102.826667V809.386667L789.333333 702.805333V383.744zM512 198.037333l-266.581333 118.378667 269.290666 115.413333 266.517334-114.24L512 198.037333z"  ></path></symbol><symbol id="product1" viewBox="0 0 1024 1024"><path d="M170.666667 353.578667l314.666666 135.253333v395.306667L208.682667 761.322667A64 64 0 0 1 170.666667 702.805333v-349.226666z m682.666666-8.170667v357.397333a64 64 0 0 1-38.016 58.496L549.333333 879.402667V485.482667L853.333333 345.386667zM537.984 139.52l277.333333 123.157333c9.642667 4.266667 17.856 10.773333 24.149334 18.709334l-324.757334 150.4-334.72-143.872c6.613333-10.922667 16.533333-19.84 28.693334-25.237334l277.333333-123.157333a64 64 0 0 1 51.968 0z"  ></path></symbol><symbol id="add" viewBox="0 0 1024 1024"><path d="M810.666667 554.666667l-256 0 0 256-85.333333 0 0-256L213.333333 554.666667l0-85.333333 256 0L469.333333 213.333333l85.333333 0 0 256 256 0L810.666667 554.666667z"  ></path></symbol><symbol id="remove" viewBox="0 0 1024 1024"><path d="M810.666667 554.666667 213.333333 554.666667l0-85.333333 597.333333 0L810.666667 554.666667z"  ></path></symbol><symbol id="account-fill" viewBox="0 0 1024 1024"><path d="M644.8 581.568l160.64 187.456A64 64 0 0 1 756.842667 874.666667H267.157333a64 64 0 0 1-48.597333-105.642667l160.661333-187.434667A254.805333 254.805333 0 0 0 512 618.666667c48.64 0 94.08-13.546667 132.8-37.098667zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z"  ></path></symbol><symbol id="check-2" viewBox="0 0 1024 1024"><path d="M287 437.00000029l-74.99999971 74.99999971 225 225L811.99999971 361.99999971l-74.99999971-74.99999971-299.99999971 299.99999971z"  ></path></symbol><symbol id="info-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 298.666667h-64v256h64V448z m0-106.666667h-64v64h64v-64z"  ></path></symbol><symbol id="help" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m39.658667 426.666667v64h-59.946667l-0.021333-64h59.968z m-3.541334-316.757333c38.72 7.808 84.778667 44.736 84.778667 98.453333 0 53.738667-43.882667 74.069333-59.605333 84.117333-14.506667 9.28-20.672 19.882667-21.525334 31.189334l-0.106666 2.816V597.333333h-59.968v-79.338666c0-18.816 6.037333-32 22.826666-43.648l3.776-2.496 33.685334-22.4c21.482667-14.464 21.184-43.498667 7.893333-56.32a60.373333 60.373333 0 0 0-52.842667-13.546667c-37.376 7.338667-41.685333 33.706667-41.941333 59.306667v14.485333H405.333333c0-49.834667 5.717333-72.426667 32.298667-100.970667 29.781333-31.893333 71.744-37.013333 110.485333-29.162666z"  ></path></symbol><symbol id="info" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m32 234.666667v256h-64V448h64z m0-106.666667v64h-64v-64h64z"  ></path></symbol><symbol id="error" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m113.130667 140.266667l45.269333 45.269333L557.226667 512l113.152 113.130667-45.269334 45.269333L512 557.226667l-113.130667 113.152-45.269333-45.269334L466.773333 512l-113.152-113.109333 45.269334-45.269334L512 466.730667l113.109333-113.130667z"  ></path></symbol><symbol id="success" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m169.045333 127.04l45.909334 44.586667-271.829334 279.722667-136.832-141.952 46.08-44.416 90.944 94.336 225.728-232.277334z"  ></path></symbol><symbol id="help-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m39.658667 490.666667h-59.968v64h59.968v-64z m-3.541334-316.757333c-38.741333-7.850667-80.704-2.730667-110.485333 29.162666C411.050667 380.949333 405.333333 403.541333 405.333333 453.376h59.733334v-14.506667c0.277333-25.578667 4.586667-51.946667 41.962666-59.306666a60.373333 60.373333 0 0 1 52.821334 13.568c13.312 12.821333 13.610667 41.856-7.893334 56.32l-33.664 22.4-3.776 2.496c-16.789333 11.669333-22.826667 24.832-22.826666 43.648V597.333333h59.968v-57.514666l0.106666-2.816c0.853333-11.306667 6.997333-21.909333 21.525334-31.189334 15.722667-10.048 59.605333-30.378667 59.605333-84.117333 0-53.717333-46.058667-90.645333-84.778667-98.453333z"  ></path></symbol><symbol id="error-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m113.130667 204.266667l-113.109334 113.130667-113.152-113.130667-45.269333 45.269333 113.152 113.109334-113.152 113.152 45.269333 45.269333L512 557.226667l113.130667 113.152 45.269333-45.269334L557.226667 512l113.152-113.130667-45.269334-45.269333z"  ></path></symbol><symbol id="success-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m169.045333 191.04L455.317333 572.650667l-90.944-94.336-46.08 44.416 136.832 141.952 271.829334-279.722667-45.909334-44.586667z"  ></path></symbol><symbol id="check" viewBox="0 0 1024 1024"><path d="M384 691.2 204.8 512 145.066667 571.733333 384 810.666667 896 298.666667 836.266667 238.933333Z"  ></path></symbol><symbol id="close" viewBox="0 0 1024 1024"><path d="M810.666667 273.066667 750.933333 213.333333 512 452.266667 273.066667 213.333333 213.333333 273.066667 452.266667 512 213.333333 750.933333 273.066667 810.666667 512 571.733333 750.933333 810.666667 810.666667 750.933333 571.733333 512Z"  ></path></symbol><symbol id="down" viewBox="0 0 1024 1024"><path d="M315.733333 332.8 512 529.066667 708.266667 332.8 768 392.533333 512 648.533333 256 392.533333Z"  ></path></symbol><symbol id="left" viewBox="0 0 1024 1024"><path d="M657.066667 686.933333 460.8 490.666667 657.066667 294.4 597.333333 234.666667 341.333333 490.666667 597.333333 746.666667Z"  ></path></symbol><symbol id="right" viewBox="0 0 1024 1024"><path d="M366.933333 695.466667 563.2 503.466667 366.933333 307.2 426.666667 247.466667 682.666667 503.466667 426.666667 759.466667Z"  ></path></symbol><symbol id="up" viewBox="0 0 1024 1024"><path d="M315.733333 657.066667 512 460.8 708.266667 657.066667 768 597.333333 512 341.333333 256 597.333333Z"  ></path></symbol><symbol id="search" viewBox="0 0 1024 1024"><path d="M661.333333 597.333333l-34.133333 0-12.8-12.8c42.666667-46.933333 68.266667-110.933333 68.266667-179.2C682.666667 251.733333 558.933333 128 405.333333 128 251.733333 128 128 251.733333 128 405.333333S251.733333 682.666667 405.333333 682.666667c68.266667 0 132.266667-25.6 179.2-68.266667l12.8 12.8 0 34.133333 213.333333 213.333333 64-64L661.333333 597.333333zM405.333333 597.333333C298.666667 597.333333 213.333333 512 213.333333 405.333333S298.666667 213.333333 405.333333 213.333333C512 213.333333 597.333333 298.666667 597.333333 405.333333S512 597.333333 405.333333 597.333333z"  ></path></symbol><symbol id="caret-left" viewBox="0 0 1024 1024"><path d="M597.333333 725.333333l-256-213.333333 256-213.333333v426.666666z"  ></path></symbol><symbol id="caret-right" viewBox="0 0 1024 1024"><path d="M426.666667 298.666667l256 213.333333-256 213.333333V298.666667z"  ></path></symbol><symbol id="caret-down" viewBox="0 0 1024 1024"><path d="M725.333333 426.666667l-213.333333 256-213.333333-256h426.666666z"  ></path></symbol><symbol id="caret-up" viewBox="0 0 1024 1024"><path d="M298.666667 597.333333l213.333333-256 213.333333 256H298.666667z"  ></path></symbol><symbol id="ellipsis" viewBox="0 0 1024 1024"><path d="M269.333333 448a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773334 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773333 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z"  ></path></symbol></svg>', d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"), c = function(_, y) {
    y.parentNode.insertBefore(_, y);
  };
  if (d && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (_) {
      console && console.log(_);
    }
  }
  function f() {
    l || (l = !0, o());
  }
  function g() {
    try {
      a.documentElement.doScroll("left");
    } catch {
      return void setTimeout(g, 50);
    }
    f();
  }
  s = function() {
    var _, y = document.createElement("div");
    y.innerHTML = r, r = null, (y = y.getElementsByTagName("svg")[0]) && (y.setAttribute("aria-hidden", "true"), y.style.position = "absolute", y.style.width = 0, y.style.height = 0, y.style.overflow = "hidden", y = y, (_ = document.body).firstChild ? c(y, _.firstChild) : _.appendChild(y));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(s, 0) : (n = function() {
    document.removeEventListener("DOMContentLoaded", n, !1), s();
  }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = s, a = e.document, l = !1, g(), a.onreadystatechange = function() {
    a.readyState == "complete" && (a.onreadystatechange = null, f());
  });
})(window);
const h6 = {
  install(e) {
    e.component("AmIcon", ie), e.component("AmTab", je), e.component("AmButton", ve), e.component("AmInput", Pe), e.component("AmTable", Re), e.component("AmTableColumn", He), e.component("AmPopover", We), e.component("AmSelect", qe), e.component("AmOption", Ze), e.component("AmTooltip", Ge), e.component("AmDivider", Ue), e.component("AmPopup", Me), e.component("AmProgress", Xe), e.component("AmCheckbox", Ke), e.component("AmMenu", Je), e.component("AmMenuItem", Qe), e.component("AmPagination", et), e.component("AmLogo", tt), e.component("AmForm", nt), e.component("AmFormItem", ot), e.component("AmAvatar", st), e.component("AmList", at), e.component("AmListItem", lt), e.component("AmListStatus", it), e.component("AmWaterfall", rt), e.component("AmDropdown", Be), e.component("AmSwitch", ct), e.component("AmRadio", ut), e.component("AmTag", dt), e.component("AmAlert", mt), e.directive("clickoutside", l3), e.directive("clickanime", gt), e.use(pt), e.use(ft), e.use(vt);
  },
  AmIcon: ie,
  AmButton: ve,
  AmIcon: ie,
  AmButton: ve,
  AmInput: Pe,
  AmTable: Re,
  AmTableColumn: He,
  AmPopover: We,
  AmTab: je,
  AmSelect: qe,
  AmOption: Ze,
  AmTooltip: Ge,
  AmDivider: Ue,
  AmPopup: Me,
  AmProgress: Xe,
  AmCheckbox: Ke,
  AmMenu: Je,
  AmMenuItem: Qe,
  AmPagination: et,
  AmLogo: tt,
  AmForm: nt,
  AmFormItem: ot,
  AmAvatar: st,
  AmList: at,
  AmListItem: lt,
  AmWaterfall: rt,
  AmDropdown: Be,
  AmMessage: pt,
  AmLoading: ft,
  AmDialog: vt,
  AmSwitch: ct,
  AmRadio: ut,
  AmTag: dt,
  AmAlert: mt,
  AmListStatus: it
};
export {
  h6 as default
};
