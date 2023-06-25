import { computed as T, toRefs as f6, openBlock as f, createElementBlock as v, normalizeStyle as Z, unref as E, createElementVNode as y, withDirectives as ge, normalizeClass as R, createBlock as se, createCommentVNode as M, Fragment as ye, createTextVNode as Ae, toDisplayString as B, renderSlot as $, ref as A, onMounted as xe, nextTick as Qe, watch as Ce, withKeys as N3, onUnmounted as n3, resolveComponent as ue, createVNode as D, provide as Ee, onBeforeUnmount as Qt, defineComponent as m6, h as v6, renderList as Me, getCurrentInstance as p6, inject as ke, Transition as $e, withCtx as ie, vShow as we, resolveDirective as g6, reactive as e6, normalizeProps as O3, guardReactiveProps as H3, withModifiers as y6, render as We } from "vue";
const Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, b6 = ["xlink:href"], w6 = {
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
    const t = e, n = T(() => {
      const { size: i, color: a } = f6(t), s = {};
      return i && (s.fontSize = i.value), a && (s.color = a.value), s;
    });
    return (i, a) => (f(), v("svg", {
      class: "am-icon",
      "aria-hidden": "true",
      style: Z(E(n))
    }, [
      y("use", {
        "xlink:href": "#" + e.name
      }, null, 8, b6)
    ], 4));
  }
}, be = /* @__PURE__ */ Xe(w6, [["__scopeId", "data-v-25ad101c"]]), t6 = {
  mounted(e, t) {
    setTimeout(() => {
      const i = window.getComputedStyle(e, null).transitionDuration.match(/[0-9\.]+(?=s)/g);
      if (!i)
        return !1;
      const a = i.reduce((u, d) => (u = parseFloat(u), d = parseFloat(d), u > d ? u : d)) * 1e3;
      let s = !0, o = !1, c = !0;
      e.addEventListener("mousedown", () => {
        c && (e.classList.add(t.value), c = !1, s = !1, o = !1, setTimeout(() => {
          o = !0, r();
        }, a));
      }), e.addEventListener("mouseleave", () => {
        s = !0, r();
      }), e.addEventListener("mouseup", () => {
        s = !0, r();
      });
      const r = () => {
        s && o && (e.classList.remove(t.value), setTimeout(() => {
          c = !0;
        }, a));
      };
    }, 0);
  }
};
const _6 = {
  key: 1,
  class: "am-button__content"
}, Se = {
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
  setup(e, { emit: t }) {
    const n = e, i = t6, a = T(() => ({
      "is-disabled": n.disabled,
      "is-selected": n.selected,
      "is-loading": n.loading,
      [`is-${n.mode}`]: n.mode,
      [`is-${n.size}`]: n.size,
      [`is-${n.sharp}`]: n.sharp,
      [`is-${n.scene}`]: n.scene,
      [`is-${n.function}`]: n.function
    })), s = T(() => ({
      [`is-${n.iconPosition}`]: n.iconPosition
    })), o = (c) => {
      if (n.disabled || n.loading) {
        c.preventDefault();
        return;
      }
      t("click", c);
    };
    return (c, r) => ge((f(), v("div", {
      class: R(["am-button", E(a)]),
      onClick: o
    }, [
      e.icon ? (f(), se(be, {
        key: 0,
        class: R(E(s)),
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "name", "size"])) : M("", !0),
      c.$slots.default ? (f(), v("div", _6, [
        e.loading && e.loadingText ? (f(), v(ye, { key: 0 }, [
          Ae(B(e.loadingText), 1)
        ], 64)) : $(c.$slots, "default", { key: 1 })
      ])) : M("", !0)
    ], 2)), [
      [E(i), "is-down"]
    ]);
  }
};
var Te, l3, Ge = typeof Map == "function" ? /* @__PURE__ */ new Map() : (Te = [], l3 = [], { has: function(e) {
  return Te.indexOf(e) > -1;
}, get: function(e) {
  return l3[Te.indexOf(e)];
}, set: function(e, t) {
  Te.indexOf(e) === -1 && (Te.push(e), l3.push(t));
}, delete: function(e) {
  var t = Te.indexOf(e);
  t > -1 && (Te.splice(t, 1), l3.splice(t, 1));
} }), i6 = function(e) {
  return new Event(e, { bubbles: !0 });
};
try {
  new Event("test");
} catch {
  i6 = function(t) {
    var n = document.createEvent("Event");
    return n.initEvent(t, !0, !1), n;
  };
}
function x6(e) {
  var t = Ge.get(e);
  t && t.destroy();
}
function z6(e) {
  var t = Ge.get(e);
  t && t.update();
}
var Ue = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Ue = function(e) {
  return e;
}).destroy = function(e) {
  return e;
}, Ue.update = function(e) {
  return e;
}) : ((Ue = function(e, t) {
  return e && Array.prototype.forEach.call(e.length ? e : [e], function(n) {
    return function(i) {
      if (i && i.nodeName && i.nodeName === "TEXTAREA" && !Ge.has(i)) {
        var a, s = null, o = null, c = null, r = function() {
          i.clientWidth !== o && p();
        }, u = function(z) {
          window.removeEventListener("resize", r, !1), i.removeEventListener("input", p, !1), i.removeEventListener("keyup", p, !1), i.removeEventListener("autosize:destroy", u, !1), i.removeEventListener("autosize:update", p, !1), Object.keys(z).forEach(function(g) {
            i.style[g] = z[g];
          }), Ge.delete(i);
        }.bind(i, { height: i.style.height, resize: i.style.resize, overflowY: i.style.overflowY, overflowX: i.style.overflowX, wordWrap: i.style.wordWrap });
        i.addEventListener("autosize:destroy", u, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", p, !1), window.addEventListener("resize", r, !1), i.addEventListener("input", p, !1), i.addEventListener("autosize:update", p, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", Ge.set(i, { destroy: u, update: p }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), s = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(s) && (s = 0), p();
      }
      function d(z) {
        var g = i.style.width;
        i.style.width = "0px", i.style.width = g, i.style.overflowY = z;
      }
      function h() {
        if (i.scrollHeight !== 0) {
          var z = function(g) {
            for (var _ = []; g && g.parentNode && g.parentNode instanceof Element; )
              g.parentNode.scrollTop && (g.parentNode.style.scrollBehavior = "auto", _.push([g.parentNode, g.parentNode.scrollTop])), g = g.parentNode;
            return function() {
              return _.forEach(function(x) {
                var k = x[0];
                k.scrollTop = x[1], k.style.scrollBehavior = null;
              });
            };
          }(i);
          i.style.height = "", i.style.height = i.scrollHeight + s + "px", o = i.clientWidth, z();
        }
      }
      function p() {
        h();
        var z = Math.round(parseFloat(i.style.height)), g = window.getComputedStyle(i, null), _ = g.boxSizing === "content-box" ? Math.round(parseFloat(g.height)) : i.offsetHeight;
        if (_ < z ? g.overflowY === "hidden" && (d("scroll"), h(), _ = g.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : g.overflowY !== "hidden" && (d("hidden"), h(), _ = g.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), c !== _) {
          c = _;
          var x = i6("autosize:resized");
          try {
            i.dispatchEvent(x);
          } catch {
          }
        }
      }
    }(n);
  }), e;
}).destroy = function(e) {
  return e && Array.prototype.forEach.call(e.length ? e : [e], x6), e;
}, Ue.update = function(e) {
  return e && Array.prototype.forEach.call(e.length ? e : [e], z6), e;
});
var w3 = Ue;
const C3 = (e) => new Promise((t) => {
  setTimeout(() => {
    t();
  }, e);
});
const E6 = { class: "am-input__inner" }, k6 = {
  key: 0,
  class: "am-input__prefix"
}, S6 = ["readonly", "placeholder", "value", "autocomplete", "onKeyup"], A6 = ["readonly", "type", "value", "placeholder", "autocomplete", "onKeyup"], $6 = {
  key: 3,
  class: "am-input__suffix"
}, R3 = {
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
  setup(e, { emit: t }) {
    const n = e, i = (h) => {
      t("update:value", h.target.value), t("input", h);
    }, a = (h) => {
      t("change", h);
    }, s = A(!1), o = (h) => {
      s.value = !0;
    }, c = (h) => {
      s.value = !1, t("blur", h);
    }, r = (h) => {
      t("enter", h);
    }, u = A(null), d = () => {
      n.type === "textarea" && (n.autosize ? (w3(u.value), w3.update(u.value)) : w3.destroy(u.value));
    };
    return xe(async () => {
      await Qe(), d(), u.value && !u.value.changeValue && (u.value.changeValue = async (h) => {
        i({
          target: {
            value: h
          }
        }), a(), await Qe(), d();
      });
    }), Ce(
      () => [n.autosize, n.value],
      async () => {
        await C3(100), d();
      },
      {
        deep: !0
      }
    ), (h, p) => (f(), v("div", {
      class: R(["am-input", {
        "is-focus": s.value,
        [`is-${e.scene}`]: e.scene
      }])
    }, [
      y("label", E6, [
        e.prefix ? (f(), v("div", k6, B(e.prefix), 1)) : M("", !0),
        e.type === "textarea" ? (f(), v("textarea", {
          key: 1,
          readonly: e.readonly,
          ref_key: "textareaEl",
          ref: u,
          spellcheck: "false",
          placeholder: e.placeholder,
          value: e.value,
          autocomplete: e.autocomplete,
          onInput: i,
          onFocus: o,
          onBlur: c,
          onChange: a,
          onEnter: r,
          onKeyup: N3(r, ["enter"])
        }, null, 40, S6)) : (f(), v("input", {
          key: 2,
          readonly: e.readonly,
          spellcheck: "false",
          type: e.type,
          value: e.value,
          placeholder: e.placeholder,
          autocomplete: e.autocomplete,
          onInput: i,
          onFocus: o,
          onBlur: c,
          onChange: a,
          onEnter: r,
          onKeyup: N3(r, ["enter"])
        }, null, 40, A6)),
        e.suffix ? (f(), v("div", $6, B(e.suffix), 1)) : M("", !0)
      ])
    ], 2));
  }
};
function n6(e) {
  const t = [window];
  let n = e, i = !1;
  for (; !i; ) {
    n = n.parentElement;
    const a = window.getComputedStyle(n, null);
    (a.overflow === "scroll" || a.overflow === "auto" || a.overflowY === "scroll" || a.overflowY === "auto" || a.overflowX === "scroll" || a.overflowX === "auto") && t.push(n), n === document.body && (i = !0);
  }
  return t;
}
function T3(e, t) {
  const n = new ResizeObserver(() => {
    t();
  });
  return n.observe(e), n;
}
function L3(e, t) {
  t.unobserve(e);
}
function C6(e) {
  const n = window.getComputedStyle(e, null).width, i = e.cloneNode(!0);
  i.style.cssText = `
        z-index: -999;
        position: fixed;
        top: 0;
        left: 0;
        width: ${n};
        width: max-content;
        visibility: hidden;`, e.parentNode.append(i);
  const a = window.getComputedStyle(i, null), s = {
    height: window.parseFloat(a.height),
    width: window.parseFloat(a.width)
  };
  return i.remove(), s;
}
const T6 = {
  key: 0,
  class: "am-list-status__loading"
}, L6 = {
  key: 1,
  class: "am-list-status__empty"
}, M6 = {
  key: 2,
  class: "am-list-status__error"
}, I6 = {
  key: 3,
  class: "am-list-status__end"
}, V6 = {
  key: 4,
  class: "am-list-status__end"
}, B6 = {
  key: 5,
  class: "am-list-status__error"
}, x3 = {
  props: {
    options: {
      type: Object,
      default: () => {
      }
    },
    state: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
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
    lastText: {
      type: String,
      default: "到底了"
    },
    blankText: {
      type: String,
      default: "点击加载更多"
    }
  },
  emits: ["intersect", "retry"],
  setup(e, { emit: t }) {
    const n = e, i = A(null);
    let a = null;
    const s = () => {
      a = new IntersectionObserver(([r]) => {
        r && r.isIntersecting && t("intersect");
      }, n.options), a.observe(i.value);
    }, o = () => {
      t("retry");
    }, c = () => {
      t("intersect");
    };
    return xe(() => {
      s();
    }), n3(() => {
      a.disconnect();
    }), (r, u) => {
      const d = ue("AmIcon");
      return f(), v("div", {
        class: "am-list-status",
        ref_key: "observerEl",
        ref: i
      }, [
        e.state === "loading" && e.loadingText ? (f(), v("div", T6, [
          D(d, {
            name: "loading1",
            size: "18px",
            color: "#aaa"
          }),
          y("span", null, B(e.loadingText), 1)
        ])) : e.state === "empty" && e.emptyText ? (f(), v("div", L6, [
          D(d, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          y("span", null, B(e.emptyText), 1)
        ])) : e.state === "error" && e.errorText ? (f(), v("div", M6, [
          D(d, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          y("span", null, B(e.errorText), 1),
          y("a", { onClick: o }, "重试")
        ])) : e.state === "end" && e.endText ? (f(), v("div", I6, [
          D(d, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          y("span", null, B(e.endText), 1)
        ])) : e.state === "last" && e.lastText ? (f(), v("div", V6, [
          D(d, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          y("span", null, B(e.lastText), 1)
        ])) : e.state === "blank" && e.blankText ? (f(), v("div", B6, [
          y("a", {
            style: { margin: "0" },
            onClick: c
          }, B(e.blankText), 1)
        ])) : M("", !0)
      ], 512);
    };
  }
};
const D6 = { class: "am-table" }, N6 = { style: { display: "none" } }, O6 = {
  key: 1,
  class: "am-table__th-cell"
}, H6 = ["onClick"], R6 = ["onClick"], P6 = {
  key: 1,
  class: "am-table__td-cell"
}, P3 = {
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
    },
    state: null
    // watch dom
  },
  emits: ["row-click", "cell-click"],
  setup(e, { emit: t }) {
    const n = e, i = A([]);
    Ee("tableColumnData", i);
    const a = T(() => ({
      "max-height": n.height ? `${n.height}` : "",
      "overflow-y": n.height ? "auto" : "",
      "overflow-x": "hidden",
      ...n.bdStyle
    })), s = A(0), o = A(null), c = async () => {
      o.value && (await Qe(), s.value = Math.max(o.value.offsetWidth - o.value.firstChild.offsetWidth - 2, 0));
    };
    let r;
    xe(() => {
      c(), r = T3(o.value.firstChild, c);
    }), Qt(() => {
      L3(o.value, r);
    });
    const u = (p) => {
      t("row-click", p);
    }, d = (p, z) => {
      t("cell-click", p, z);
    }, h = m6({
      name: "Cell",
      props: {
        slotFun: null,
        data: null
      },
      render() {
        return v6(
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
    return (p, z) => (f(), v("div", D6, [
      y("div", N6, [
        $(p.$slots, "default")
      ]),
      y("div", {
        class: "am-table__hd",
        style: Z(e.hdStyle)
      }, [
        y("table", null, [
          y("thead", null, [
            y("tr", null, [
              (f(!0), v(ye, null, Me(i.value, (g, _) => (f(), v("th", {
                key: _,
                style: Z({
                  width: g.props.width
                })
              }, [
                g.slots.th ? (f(), se(E(h), {
                  key: 0,
                  "slot-fun": g.slots.th
                }, null, 8, ["slot-fun"])) : (f(), v("div", O6, B(g.props.label), 1))
              ], 4))), 128)),
              y("th", {
                class: "am-table__th-scroll-bar",
                style: Z({
                  width: `${s.value}px`
                })
              }, null, 4)
            ])
          ])
        ])
      ], 4),
      y("div", {
        class: "am-table__bd",
        style: Z(E(a)),
        ref_key: "bd",
        ref: o
      }, [
        y("table", null, [
          y("colgroup", null, [
            (f(!0), v(ye, null, Me(i.value, (g, _) => (f(), v("col", {
              key: _,
              style: Z({
                width: g.props.width
              })
            }, null, 4))), 128))
          ]),
          y("tbody", null, [
            (f(!0), v(ye, null, Me(e.data, (g, _) => (f(), v("tr", {
              key: _,
              class: R(e.rowClass(g, _)),
              onClick: (x) => u(g)
            }, [
              (f(!0), v(ye, null, Me(i.value, (x, k) => (f(), v("td", {
                key: k,
                onClick: (Y) => d(g, x)
              }, [
                x.slots.default ? (f(), se(E(h), {
                  key: 0,
                  "slot-fun": x.slots.default,
                  data: g
                }, null, 8, ["slot-fun", "data"])) : (f(), v("div", P6, B(g[x.props.prop]), 1))
              ], 8, R6))), 128))
            ], 10, H6))), 128))
          ])
        ])
      ], 4),
      e.state ? (f(), se(x3, {
        key: 0,
        state: e.state
      }, null, 8, ["state"])) : M("", !0)
    ]));
  }
};
let F6 = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const W6 = { class: "am-table-column" }, F3 = {
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
    const t = p6(), n = ke("tableColumnData"), i = F6();
    return n.value.push({
      props: t.props,
      slots: t.slots,
      id: i
    }), n3(() => {
      const a = n.value.findIndex((s) => s.id === i);
      a >= 0 && n.value.splice(a, 1);
    }), (a, s) => (f(), v("div", W6, [
      $(a.$slots, "th"),
      $(a.$slots, "default")
    ]));
  }
};
class q6 {
  constructor() {
    this.zIndex = 2e3;
  }
  getZIndex() {
    return this.zIndex += 1, this.zIndex;
  }
}
const Ve = new q6();
const Y6 = { class: "am-popover" }, W3 = {
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
  setup(e, { emit: t }) {
    const n = e, i = A(null), a = A(null);
    let s = null;
    xe(() => {
      s = a.value, document.body.appendChild(a.value);
    }), n3(() => {
      s && s.remove();
    });
    const o = A(!1), c = A(!1), r = A([]), u = A(null), d = A(), h = A(), p = A(), z = A(), g = A("top"), _ = A(), x = A(Ve.getZIndex());
    Ce(
      () => n.show,
      () => {
        n.show ? (x.value = Ve.getZIndex(), o.value = !0, Y(), setTimeout(() => {
          c.value = !0;
        }, 0)) : (c.value = !1, V());
      }
    );
    const k = async () => {
      await Qe();
      const I = C6(u.value), G = i.value.getBoundingClientRect(), {
        left: J,
        top: oe,
        width: de,
        height: ae
      } = G, { apWidthFollowFather: Be } = n, he = window.innerHeight - oe - ae;
      d.value = n.width || `${I.width < de && Be ? de : I.width}`, h.value = n.height || `${I.height}`;
      const a3 = J, b3 = J - d.value + de;
      n.xDirection === "left" ? p.value = a3 : n.xDirection === "right" && (p.value = b3);
      const s3 = oe - h.value - 6, o3 = oe + ae + 6;
      n.yDirection === "top" ? z.value = s3 : n.yDirection === "bottom" ? z.value = o3 : n.yDirection === "auto" && (he < h.value && oe > h.value ? (z.value = s3, g.value = "bottom") : (z.value = o3, g.value = "top"));
    }, Y = () => {
      k(), r.value = n6(i.value), r.value.forEach((I) => {
        I.addEventListener("scroll", k);
      }), window.addEventListener("resize", k), _.value = T3(i.value, k);
    }, V = () => {
      r.value.forEach((I) => {
        I.removeEventListener("scroll", k);
      }), window.removeEventListener("resize", k), L3(i.value, _.value);
    }, K = T(() => {
      const I = {};
      return I.transform = `translate(${p.value}px, ${z.value}px)`, I.zIndex = x.value + 1, I;
    }), ee = T(() => {
      const I = {};
      return I.width = `${d.value}px`, I.transformOrigin = g.value, n.height && (I.height = `${h.value}px`), I;
    }), ne = () => {
      o.value = !1, t("after-hide");
    }, j = () => {
      t("after-enter");
    };
    return (I, G) => (f(), v("div", Y6, [
      y("div", {
        class: "am-popover__trigger",
        ref_key: "linkEl",
        ref: i
      }, [
        $(I.$slots, "trigger")
      ], 512),
      ge(y("div", {
        ref_key: "ap",
        ref: a,
        class: R(["am-popover__box", e.popoverBoxClass]),
        style: Z(E(K))
      }, [
        D($e, {
          name: "am-popover-pop-anime",
          onAfterLeave: ne,
          onAfterEnter: j
        }, {
          default: ie(() => [
            ge(y("div", {
              class: "am-popover__box-pop",
              ref_key: "popEl",
              ref: u,
              style: Z(E(ee))
            }, [
              $(I.$slots, "default")
            ], 4), [
              [we, c.value]
            ])
          ]),
          _: 3
        })
      ], 6), [
        [we, o.value]
      ])
    ]));
  }
};
const X6 = ["onClick"], q3 = {
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
  setup(e, { emit: t }) {
    const n = e, i = (a) => {
      a.value !== n.value && (t("update:value", a.value), t("change", a.value));
    };
    return (a, s) => (f(), v("div", {
      class: R(["am-tab", {
        [`is-${e.mode}`]: e.mode,
        [`is-${e.scene}`]: e.scene
      }])
    }, [
      (f(!0), v(ye, null, Me(e.tabs, (o, c) => (f(), v("div", {
        class: R([{
          "is-active": o.value === e.value
        }, "am-tab__item"]),
        key: c,
        onClick: (r) => i(o)
      }, [
        y("span", null, B(o.label), 1)
      ], 10, X6))), 128))
    ], 2));
  }
};
const j6 = { class: "am-dropdown__trigger-icon" }, z3 = {
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
  setup(e, { expose: t }) {
    const n = e, i = A(!1), a = A(!1), s = T(() => i.value), o = T(() => ({
      "is-focus": s.value,
      [`is-${n.scene}`]: n.scene
    })), c = T(() => ({
      [`is-${n.triggerMode}`]: !0
    })), r = () => {
      i.value = !i.value;
    };
    let u;
    const d = () => {
      a.value || (u = setTimeout(() => {
        i.value = !1;
      }, 16));
    }, h = () => {
      u && (clearTimeout(u), u = null), i.value = !0;
    };
    return t({
      hideDropdown: () => {
        u = setTimeout(() => {
          i.value = !1;
        }, 16);
      },
      lock: () => {
        a.value = !0;
      },
      unlock: () => {
        a.value = !1;
      }
    }), (_, x) => {
      const k = ue("AmIcon"), Y = ue("AmPopover"), V = g6("clickoutside");
      return ge((f(), v("div", {
        class: R(["am-dropdown", E(o)])
      }, [
        D(Y, {
          "popover-box-class": `am-dropdown__popover is-${e.scene} ${e.popoverBoxClass}`,
          show: i.value,
          "onUpdate:show": x[0] || (x[0] = (K) => i.value = K),
          "x-direction": e.xDirection,
          "y-direction": e.yDirection
        }, {
          trigger: ie(() => [
            y("div", {
              class: R(["am-dropdown__trigger", E(c)]),
              onClick: r
            }, [
              $(_.$slots, "trigger"),
              y("div", j6, [
                D(k, {
                  name: "caret-down",
                  size: "16px"
                })
              ])
            ], 2)
          ]),
          default: ie(() => [
            y("div", {
              class: "am-dropdown__popover-inner",
              onClick: h
            }, [
              $(_.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["popover-box-class", "show", "x-direction", "y-direction"])
      ], 2)), [
        [V, d]
      ]);
    };
  }
};
const U6 = {
  key: 0,
  class: "am-select__placeholder"
}, Z6 = {
  key: 2,
  class: "am-select__content am-select__content-alone"
}, K6 = {
  key: 3,
  class: "am-select__content am-select__content-multiple"
}, Y3 = {
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
  setup(e, { emit: t }) {
    const n = e, i = A(null), a = e6([]);
    Ee("options", a), ke("dropdownShow");
    const s = T(() => ({
      [`is-${n.scene}`]: n.scene
    })), o = T(() => {
      if (n.multiple) {
        const c = a.filter((r) => n.value.includes(r.value));
        return console.log("# arr", c), c;
      }
      return a.find((c) => c.value === n.value);
    });
    return Ee(
      "selectedItemValue",
      T(() => n.value)
    ), Ee(
      "selectedItem",
      o
    ), Ee("setValue", (c) => {
      if (n.multiple) {
        const r = n.value ? n.value : [], u = r.findIndex((d) => d === c.value);
        u > -1 ? r.splice(u, 1) : r.push(c.value), t("update:value", r), t("change", r);
      } else {
        if (c.value === n.value)
          return;
        t("update:value", c.value), t("change", c.value), i.value.hideDropdown();
      }
    }), (c, r) => {
      const u = ue("AmTag");
      return f(), v("div", {
        class: R(["am-select", E(s)])
      }, [
        D(z3, {
          scene: e.scene,
          "popover-box-class": "am-select__popover",
          ref_key: "dropdownCm",
          ref: i
        }, {
          trigger: ie(() => [
            !E(o) || e.multiple && !E(o).length ? (f(), v("p", U6, B(e.placeholder), 1)) : M("", !0),
            c.$slots.selected ? $(c.$slots, "selected", {
              key: 1,
              selectedItem: E(o)
            }) : e.multiple ? (f(), v("div", K6, [
              (f(!0), v(ye, null, Me(E(o), (d) => (f(), se(u, {
                key: d.value,
                size: "small"
              }, {
                default: ie(() => [
                  Ae(B(d.label), 1)
                ]),
                _: 2
              }, 1024))), 128))
            ])) : (f(), v("div", Z6, B(E(o) ? E(o).label : ""), 1))
          ]),
          default: ie(() => [
            $(c.$slots, "default")
          ]),
          _: 3
        }, 8, ["scene"])
      ], 2);
    };
  }
}, X3 = {
  props: {
    // 选项内容，必须包括 value 和 label
    item: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ke("options"), i = ke("selectedItemValue");
    Ce(
      () => t.item,
      () => {
        const r = n.findIndex((u) => u.value === t.item.value);
        r >= 0 ? n.splice(r, 1, t.item) : n.push(t.item);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const a = T(() => Array.isArray(i.value) ? i.value.includes(t.item.value) : i.value === t.item.value), s = T(() => ({
      "is-selected": a.value
    })), o = ke("setValue"), c = () => {
      o(t.item);
    };
    return (r, u) => {
      const d = ue("AmIcon");
      return f(), v("div", {
        class: R(["am-option", E(s)]),
        onClick: c
      }, [
        $(r.$slots, "default"),
        E(a) ? (f(), se(d, {
          key: 0,
          class: "am-option__check",
          name: "check-2",
          size: "20px"
        })) : M("", !0)
      ], 2);
    };
  }
};
const G6 = {
  key: 1,
  class: "am-tooltip__tip-span"
}, j3 = {
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
    const t = e, n = A(null);
    let i = null;
    const a = A(!1), s = A(null), o = A(!1), c = A([]);
    let r = null;
    const u = A(Ve.getZIndex()), d = A(0), h = A(0), p = A(0), z = A(0), g = T(() => t.direction.toLowerCase().match(/left|right|bottom|top/g)), _ = T(() => g.value[0] === "left" ? "calc(-100% - 0px)" : g.value[0] === "right" ? "0px" : g.value[0] === "top" || g.value[0] === "bottom" ? g.value[1] === "left" ? "0" : g.value[1] === "right" ? "-100%" : "-50%" : "0"), x = T(() => g.value[0] === "top" ? "calc(-100% - 0px)" : g.value[0] === "bottom" ? "0px" : g.value[0] === "left" || g.value[0] === "right" ? g.value[1] === "top" ? "0" : g.value[1] === "bottom" ? "-100%" : "-50%" : "0"), k = T(() => ({
      transform: `translate(${d.value}px,${h.value}px)`,
      zIndex: u.value
    })), Y = () => {
      i || (document.body.appendChild(n.value), i = n.value);
    };
    n3(() => {
      i && i.remove(), I();
    });
    const V = async () => {
      t.disabled || t.trigger === "hover" && (a.value = !0, await Qe(), Y(), o.value = !0);
    }, K = () => {
      t.trigger === "hover" && (o.value = !1);
    }, ee = async () => {
      if (!s.value)
        return;
      const G = s.value.getBoundingClientRect(), { width: J, height: oe } = G;
      let { left: de, top: ae } = G;
      p.value = J, z.value = oe;
      const Be = g.value[0], he = g.value[1];
      switch (Be) {
        case "left":
          if (he === "top")
            break;
          he === "bottom" ? ae += oe : ae += 0.5 * oe;
          break;
        case "right":
          if (de += J, he === "top")
            break;
          he === "bottom" ? ae += oe : ae += 0.5 * oe;
          break;
        case "top":
          if (he === "left")
            break;
          he === "right" ? de += J : de += 0.5 * J;
          break;
        case "bottom":
          if (ae += oe, he === "left")
            break;
          he === "right" ? de += J : de += 0.5 * J;
          break;
      }
      d.value = de, h.value = ae;
    }, ne = async () => {
    }, j = () => {
      ee(), c.value = n6(s.value), c.value.forEach((G) => {
        G.addEventListener("scroll", ee);
      }), window.addEventListener("resize", ee), r = T3(s.value, () => {
        s.value ? ee() : i.remove();
      });
    }, I = () => {
      c.value.forEach((G) => {
        G.removeEventListener("scroll", ee);
      }), window.removeEventListener("resize", ee), s.value && r && L3(s.value, r);
    };
    return Ce(
      () => o.value,
      () => {
        o.value ? (u.value = Ve.getZIndex(), j()) : I();
      }
    ), (G, J) => (f(), v("div", {
      class: "am-tooltip",
      ref_key: "triggerEl",
      ref: s,
      onMouseenter: V,
      onMouseleave: K
    }, [
      $(G.$slots, "default"),
      a.value ? (f(), v("div", {
        key: 0,
        class: R(["am-tooltip__tip", {
          [`is-${e.scene}`]: !0
        }]),
        ref_key: "tipEl",
        ref: n,
        style: Z(E(k))
      }, [
        D($e, {
          name: "am-tooltip-in",
          onAfterLeave: ne
        }, {
          default: ie(() => [
            ge(y("div", {
              class: "am-tooltip__tip-inner",
              style: Z(`transform: translate(${E(_)},${E(x)});padding: ${e.margin}`)
            }, [
              G.$slots.tip ? $(G.$slots, "tip", { key: 0 }) : (f(), v("span", G6, B(e.content), 1))
            ], 4), [
              [we, o.value]
            ])
          ]),
          _: 3
        })
      ], 6)) : M("", !0)
    ], 544));
  }
};
const J6 = { key: 0 }, Q6 = {
  key: 2,
  class: "am-divider__line"
}, U3 = {
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
    return (t, n) => {
      const i = ue("AmIcon");
      return f(), v("div", {
        class: R(["am-divider", {
          [`is-${e.scene}`]: e.scene
        }]),
        style: Z("margin:" + e.margin + ";font-size:" + e.size + ";")
      }, [
        e.content ? (f(), v("span", J6, B(e.content), 1)) : e.icon ? (f(), se(i, {
          key: 1,
          name: e.icon,
          size: e.size
        }, null, 8, ["name", "size"])) : e.showLine ? (f(), v("i", Q6)) : M("", !0)
      ], 6);
    };
  }
}, ze = /* @__PURE__ */ new Map();
let a6;
document.addEventListener("mousedown", (e) => a6 = e, !1);
document.addEventListener(
  "mouseup",
  (e) => {
    for (const t of ze.values())
      for (const { documentHandler: n } of t)
        n(e, a6);
  },
  !1
);
function Z3(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : t.arg instanceof HTMLElement && n.push(t.arg), function(i, a) {
    const s = t.instance.popperRef, o = i.target, c = a == null ? void 0 : a.target, r = !t || !t.instance, u = !o || !c, d = e.contains(o) || e.contains(c), h = e === o, p = n.length && n.some(
      (g) => g == null ? void 0 : g.contains(o)
    ) || n.length && n.includes(c), z = s && (s.contains(o) || s.contains(c));
    r || u || d || h || p || z || t.value(i, a);
  };
}
const ei = {
  beforeMount(e, t) {
    ze.has(e) || ze.set(e, []), ze.get(e).push({
      documentHandler: Z3(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ze.has(e) || ze.set(e, []);
    const n = ze.get(e), i = n.findIndex(
      (s) => s.bindingFn === t.oldValue
    ), a = {
      documentHandler: Z3(e, t),
      bindingFn: t.value
    };
    i >= 0 ? n.splice(i, 1, a) : n.push(a);
  },
  unmounted(e) {
    ze.delete(e);
  }
};
const ti = { class: "am-popup__inner" }, ii = {
  key: 0,
  class: "am-popup__hd"
}, ni = {
  key: 0,
  class: "am-popup__title"
}, ai = { class: "am-popup__bd" }, si = {
  key: 1,
  class: "am-popup__ft"
}, E3 = {
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
  setup(e, { emit: t }) {
    const n = e, i = A(Ve.getZIndex()), a = T(() => ({
      width: n.width,
      height: n.height,
      zIndex: i.value
    }));
    Ce(
      () => n.show,
      () => {
        n.show && (i.value = Ve.getZIndex());
      }
    );
    const s = A(null);
    let o = null;
    xe(() => {
      o = s.value, document.body.appendChild(s.value);
    }), n3(() => {
      o && o.remove();
    });
    const c = () => {
      t("update:show", !1);
    }, r = () => {
      t("after-leave", this);
    }, u = () => {
      n.maskClose && c();
    };
    return (d, h) => (f(), v("div", {
      class: R(["am-popup", {
        [`is-${e.scene}`]: e.scene
      }]),
      ref_key: "pop",
      ref: s
    }, [
      D($e, { name: "mask-anime" }, {
        default: ie(() => [
          ge(y("div", {
            class: "am-popup__mask",
            style: Z("z-index:" + i.value)
          }, null, 4), [
            [we, e.show]
          ])
        ]),
        _: 1
      }),
      D($e, {
        name: "popup-anime",
        onAfterLeave: r
      }, {
        default: ie(() => [
          ge(y("div", {
            class: R(["am-popup__popup", e.popupClass]),
            style: Z(E(a))
          }, [
            y("div", ti, [
              d.$slots.hd || e.title ? (f(), v("div", ii, [
                e.title ? (f(), v("div", ni, B(e.title), 1)) : M("", !0),
                $(d.$slots, "hd"),
                e.showCloseBtn ? (f(), se(Se, {
                  key: 1,
                  mode: "text",
                  icon: "close",
                  "icon-size": "16px",
                  scene: e.scene,
                  size: "small",
                  class: "am-popup__close",
                  onClick: c
                }, null, 8, ["scene"])) : M("", !0)
              ])) : M("", !0),
              y("div", ai, [
                $(d.$slots, "default")
              ]),
              d.$slots.ft ? (f(), v("div", si, [
                $(d.$slots, "ft")
              ])) : M("", !0)
            ]),
            y("div", {
              class: "am-popup__cancel-part",
              onClick: u
            })
          ], 6), [
            [we, e.show]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
};
const oi = ["aria-valuenow"], li = {
  key: 0,
  class: "am-progress-bar"
}, ri = {
  key: 0,
  class: "am-progress-bar__innerText"
}, ci = { viewBox: "0 0 100 100" }, ui = ["d", "stroke-width"], di = ["d", "stroke", "stroke-linecap", "stroke-width"], hi = { key: 0 }, K3 = {
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
    const t = e, n = (x) => {
      var ne;
      const { color: k } = t;
      if (typeof k == "function")
        return k(x);
      if (typeof k == "string")
        return k;
      const Y = 100 / k.length, K = k.map((j, I) => typeof j == "string" ? {
        color: j,
        percentage: (I + 1) * Y
      } : j).sort((j, I) => j.percentage - I.percentage), ee = Object.values(K);
      for (let j = 0; j < ee.length; j += 1) {
        const I = ee[j];
        if (I.percentage > x)
          return I.color;
      }
      return (ne = K[K.length - 1]) == null ? void 0 : ne.color;
    }, i = T(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: n(t.percentage)
    })), a = T(() => (t.strokeWidth / t.width * 100).toFixed(1)), s = T(() => t.type === "circle" || t.type === "dashboard" ? parseInt(`${50 - parseFloat(a.value) / 2}`, 10) : 0), o = T(() => {
      const x = s.value, k = t.type === "dashboard";
      return `
        M 50 50
        m 0 ${k ? "" : "-"}${x}
        a ${x} ${x} 0 1 1 0 ${k ? "-" : ""}${x * 2}
        a ${x} ${x} 0 1 1 0 ${k ? "" : "-"}${x * 2}
        `;
    }), c = T(() => 2 * Math.PI * s.value), r = T(() => t.type === "dashboard" ? 0.75 : 1), u = T(() => `${-1 * c.value * (1 - r.value) / 2}px`), d = T(
      () => ({
        strokeDasharray: `${c.value * r.value}px, ${c.value}px`,
        strokeDashoffset: u.value
      })
    ), h = T(
      () => ({
        strokeDasharray: `${c.value * r.value * (t.percentage / 100)}px, ${c.value}px`,
        strokeDashoffset: u.value,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
      })
    ), p = T(() => {
      let x;
      if (t.color)
        x = n(t.percentage);
      else
        switch (t.status) {
          case "success":
            x = "#13ce66";
            break;
          case "exception":
            x = "#ff4949";
            break;
          case "warning":
            x = "#e6a23c";
            break;
          default:
            x = "#20a0ff";
        }
      return x;
    }), z = T(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), g = T(() => t.format(t.percentage)), _ = T(() => ({
      percentage: t.percentage
    }));
    return (x, k) => (f(), v("div", {
      class: R(["am-progress", [
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
      e.type === "line" ? (f(), v("div", li, [
        y("div", {
          class: "am-progress-bar__outer",
          style: Z({ height: `${e.strokeWidth}px` })
        }, [
          y("div", {
            class: R([
              "am-progress-bar__inner",
              { "am-progress-bar__inner--indeterminate": e.indeterminate }
            ]),
            style: Z(E(i))
          }, [
            (e.showText || x.$slots.default) && e.textInside ? (f(), v("div", ri, [
              $(x.$slots, "default", O3(H3(E(_))), () => [
                y("span", null, B(E(g)), 1)
              ])
            ])) : M("", !0)
          ], 6)
        ], 4)
      ])) : (f(), v("div", {
        key: 1,
        class: "am-progress-circle",
        style: Z({ height: `${e.width}px`, width: `${e.width}px` })
      }, [
        (f(), v("svg", ci, [
          y("path", {
            class: "am-progress-circle__track",
            d: E(o),
            stroke: "#e5e9f2",
            "stroke-width": E(a),
            fill: "none",
            style: Z(E(d))
          }, null, 12, ui),
          y("path", {
            class: "am-progress-circle__path",
            d: E(o),
            stroke: E(p),
            fill: "none",
            "stroke-linecap": e.strokeLinecap,
            "stroke-width": e.percentage ? E(a) : 0,
            style: Z(E(h))
          }, null, 12, di)
        ]))
      ], 4)),
      (e.showText || x.$slots.default) && !e.textInside ? (f(), v("div", {
        key: 2,
        class: "am-progress__text",
        style: Z({ fontSize: `${E(z)}px` })
      }, [
        $(x.$slots, "default", O3(H3(E(_))), () => [
          e.status ? M("", !0) : (f(), v("span", hi, B(E(g)), 1))
        ])
      ], 4)) : M("", !0)
    ], 10, oi));
  }
};
const fi = { class: "am-checkbox__box" }, mi = {
  key: 0,
  class: "am-checkbox__text"
}, G3 = {
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
  setup(e, { emit: t }) {
    const n = e, i = T(() => Array.isArray(n.value) ? n.value.find((s) => s === n.label) : n.label ? n.value === n.label : n.value), a = () => {
      if (Array.isArray(n.value)) {
        let s = -1;
        const o = JSON.parse(JSON.stringify(n.value));
        o.forEach((c, r) => {
          c === n.label && (s = r);
        }), s >= 0 ? o.splice(s, 1) : o.push(n.label), t("update:value", o), t("change", o);
      } else
        n.label ? (t("update:value", n.label), t("change", n.label)) : (t("update:value", !n.value), t("change", n.value));
    };
    return (s, o) => (f(), v("div", {
      class: R(["am-checkbox", {
        ["is-active"]: E(i)
      }]),
      onClick: a
    }, [
      y("div", fi, [
        D($e, { name: "am-checkbox-anime" }, {
          default: ie(() => [
            ge(D(be, {
              name: "check-2",
              size: "18px",
              color: "#fff"
            }, null, 512), [
              [we, E(i)]
            ])
          ]),
          _: 1
        })
      ]),
      s.$slots.default ? (f(), v("div", mi, [
        $(s.$slots, "default")
      ])) : M("", !0)
    ], 2));
  }
};
const vi = {}, pi = { class: "am-menu" };
function gi(e, t) {
  return f(), v("div", pi, [
    $(e.$slots, "default")
  ]);
}
const J3 = /* @__PURE__ */ Xe(vi, [["render", gi]]);
const yi = { class: "am-menu-item__text" }, bi = {
  key: 1,
  class: "am-menu-item__children"
}, Q3 = {
  props: {
    icon: {
      type: String,
      default: ""
    },
    open: {
      type: String,
      default: !1
    },
    isSelected: {
      Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = ke("level");
    n === void 0 ? Ee("level", 1) : Ee("level", n + 1), console.log(n, "level");
    const i = T(() => ({
      paddingLeft: (n + 1) * 20 + "px"
    })), a = A(t.open), s = () => {
      a.value = !a.value;
    };
    return (o, c) => {
      const r = ue("AmIcon");
      return f(), v("div", {
        class: R(["am-menu-item", {
          ["is-selected"]: e.isSelected
        }])
      }, [
        o.$slots.default ? (f(), v("div", {
          key: 0,
          class: "am-menu-item__content",
          style: Z(E(i)),
          onClick: s
        }, [
          e.icon ? (f(), se(r, {
            key: 0,
            class: "am-menu-item__icon",
            name: e.icon,
            size: "16px"
          }, null, 8, ["name"])) : M("", !0),
          y("div", yi, [
            $(o.$slots, "default")
          ]),
          o.$slots.children ? (f(), se(r, {
            key: 1,
            class: "am-menu-item__down",
            name: "down",
            size: "16px",
            color: "var(--c-sub)"
          })) : M("", !0)
        ], 4)) : M("", !0),
        o.$slots.children ? ge((f(), v("div", bi, [
          $(o.$slots, "children")
        ], 512)), [
          [we, a.value]
        ]) : M("", !0)
      ], 2);
    };
  }
};
const wi = { class: "am-pagination" }, _i = {
  key: 0,
  class: "am-pagination__total"
}, xi = { key: 1 }, et = {
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
    },
    // 显示总数
    showTotal: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:current", "update:pageSize", "click-pager", "click-prev", "click-next"],
  setup(e, { emit: t }) {
    const n = e, i = T(() => {
      const { pagerCount: r } = n, u = Number(n.current), d = (r - 1) / 2, h = Math.ceil(n.total / n.pageSize);
      let p = !1, z = !1;
      h > r && (u > r - d && (p = !0), u < h - d && (z = !0));
      let g = [1];
      if (p && !z) {
        g.push("prev");
        const _ = h - (r - 3);
        for (let x = _; x < h; x += 1)
          g.push(x);
      } else if (!p && z) {
        for (let _ = 1; _ <= r - 3; _ += 1)
          g.push(_ + 1);
        g.push("next");
      } else if (p && z) {
        g.push("prev");
        const _ = Math.ceil((r - 5) / 2), x = Math.floor((r - 5) / 2);
        for (let k = u - _; k <= u + x; k += 1)
          g.push(k);
        g.push("next");
      } else
        for (let _ = 2; _ < h; _ += 1)
          g.push(_);
      return h && g.push(h), g = Array.from(new Set(g)), g;
    }), a = T(() => Math.ceil(n.total / n.pageSize)), s = (r) => {
      let { current: u } = n;
      r === "prev" ? u -= Math.floor(n.pagerCount / 2) : r === "next" ? u += Math.floor(n.pagerCount / 2) : u = r, t("update:current", u), t("click-pager", r, u);
    }, o = () => {
      const r = n.current - 1;
      t("update:current", r), t("click-prev");
    }, c = () => {
      const r = n.current + 1;
      t("update:current", r), t("click-next");
    };
    return (r, u) => {
      const d = ue("AmButton"), h = ue("AmIcon");
      return f(), v("div", wi, [
        e.showTotal ? (f(), v("div", _i, " 共 " + B(e.total) + " 条 ", 1)) : M("", !0),
        D(d, {
          class: "am-pagination__left",
          shape: "square",
          icon: "caret-left",
          "icon-size": "16px",
          disabled: e.current <= 1,
          onClick: o
        }, null, 8, ["disabled"]),
        (f(!0), v(ye, null, Me(E(i), (p, z) => (f(), se(d, {
          mode: p !== e.current ? "default" : "primary",
          class: R(["am-pagination__number", p === e.current ? "is-active" : ""]),
          key: z,
          onClick: (g) => s(p)
        }, {
          default: ie(() => [
            p == "prev" || p === "next" ? (f(), se(h, {
              key: 0,
              name: "ellipsis",
              size: "18px"
            })) : (f(), v("span", xi, B(p), 1))
          ]),
          _: 2
        }, 1032, ["mode", "class", "onClick"]))), 128)),
        D(d, {
          class: "am-pagination__right",
          shape: "square",
          icon: "caret-right",
          "icon-size": "16px",
          disabled: e.current >= E(a),
          onClick: c
        }, null, 8, ["disabled"])
      ]);
    };
  }
};
const zi = {
  key: 0,
  src: "//cos.sankki.com/c/20230504155314/logo-light-all.svg"
}, Ei = {
  key: 1,
  src: "//cos.sankki.com/c/20230504155332/logo-dark-all.svg"
}, ki = {
  key: 2,
  src: "//cos.sankki.com/c/20230504145646/logo-light-icon.svg"
}, Si = {
  key: 3,
  src: "//cos.sankki.com/c/20230504145728/logo-dark-icon.svg"
}, Ai = {
  key: 4,
  src: "//cos.sankki.com/c/20230504145659/logo-light-black.svg"
}, tt = {
  props: {
    mode: {
      type: String,
      default: "light-all"
      // light-all dark-all light-icon dark-icon black
    },
    href: {
      type: String
    }
  },
  setup(e) {
    const t = e, n = () => {
      t.href && window.open(t.href);
    };
    return (i, a) => (f(), v("div", {
      class: R(["am-logo", {
        "has-href": e.href
      }]),
      onClick: n
    }, [
      e.mode === "light-all" ? (f(), v("img", zi)) : e.mode === "dark-all" ? (f(), v("img", Ei)) : e.mode === "light-icon" ? (f(), v("img", ki)) : e.mode === "dark-icon" ? (f(), v("img", Si)) : e.mode === "black" ? (f(), v("img", Ai)) : M("", !0)
    ], 2));
  }
};
const $i = { class: "am-form" }, it = {
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
    return Ee("form", {
      props: e
    }), (n, i) => (f(), v("div", $i, [
      $(n.$slots, "default")
    ]));
  }
};
const Ci = { class: "am-form-item__bd" }, nt = {
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
    const t = e, n = ke("form"), i = T(() => ({
      [`is-${t.position || n.props.labelWidth}`]: !0,
      "is-required": t.required,
      [`is-${n.props.scene}`]: n.props.scene
    })), a = T(() => ({
      width: (t.position || n.props.labelWidth) !== "top" ? `${t.labelWidth || n.props.labelWidth}` : "100%"
    }));
    return (s, o) => (f(), v("div", {
      class: R(["am-form-item", E(i)])
    }, [
      y("div", {
        class: "am-form-item__hd",
        style: Z(E(a))
      }, [
        y("span", null, B(e.label), 1)
      ], 4),
      y("div", Ci, [
        $(s.$slots, "default")
      ])
    ], 2));
  }
};
const Ti = { class: "am-avatar" }, Li = ["src"], Mi = {
  key: 0,
  class: "am-avatar__name"
}, at = {
  props: {
    url: String,
    name: String,
    avatarSize: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    return (t, n) => (f(), v("div", Ti, [
      y("div", {
        class: R(["am-avatar__avatar", {
          [`is-${e.avatarSize}`]: !0
        }])
      }, [
        e.url ? (f(), v("img", {
          key: 0,
          src: e.url
        }, null, 8, Li)) : (f(), se(be, {
          key: 1,
          name: "account-fill",
          size: "18px"
        }))
      ], 2),
      e.name ? (f(), v("div", Mi, B(e.name), 1)) : M("", !0)
    ]));
  }
};
const Ii = {}, Vi = { class: "am-list" };
function Bi(e, t) {
  return f(), v("div", Vi, [
    $(e.$slots, "default")
  ]);
}
const st = /* @__PURE__ */ Xe(Ii, [["render", Bi]]);
const ot = {
  props: {
    // 选中
    selected: {
      type: Boolean
    }
  },
  setup(e) {
    return (t, n) => (f(), v("div", {
      class: R(["am-list-item", {
        "is-selected": e.selected
      }])
    }, [
      $(t.$slots, "default")
    ], 2));
  }
};
var Di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ni(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var s6 = { exports: {} };
(function(e, t) {
  (function(n, i) {
    e.exports = i();
  })(Di, function() {
    function n(l, m) {
      var b = void 0;
      return function() {
        b && clearTimeout(b), b = setTimeout(l, m);
      };
    }
    function i(l, m) {
      for (var b = l.length, w = b, P = []; b--; )
        P.push(m(l[w - b - 1]));
      return P;
    }
    function a(l, m) {
      var b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      if (window.Promise)
        return j(l, m, b);
      l.recalculate(!0, !0);
    }
    function s(l) {
      for (var m = l.options, b = l.responsiveOptions, w = l.keys, P = l.docWidth, N = void 0, O = 0; O < w.length; O++) {
        var X = parseInt(w[O], 10);
        P >= X && (N = m.breakAt[X], Be(N, b));
      }
      return b;
    }
    function o(l) {
      for (var m = l.options, b = l.responsiveOptions, w = l.keys, P = l.docWidth, N = void 0, O = w.length - 1; O >= 0; O--) {
        var X = parseInt(w[O], 10);
        P <= X && (N = m.breakAt[X], Be(N, b));
      }
      return b;
    }
    function c(l) {
      var m = l.useContainerForBreakpoints ? l.container.clientWidth : window.innerWidth, b = { columns: l.columns };
      ae(l.margin) ? b.margin = { x: l.margin.x, y: l.margin.y } : b.margin = { x: l.margin, y: l.margin };
      var w = Object.keys(l.breakAt);
      return l.mobileFirst ? s({ options: l, responsiveOptions: b, keys: w, docWidth: m }) : o({ options: l, responsiveOptions: b, keys: w, docWidth: m });
    }
    function r(l) {
      return c(l).columns;
    }
    function u(l) {
      return c(l).margin;
    }
    function d(l) {
      var m = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], b = r(l), w = u(l).x, P = 100 / b;
      if (!m)
        return P;
      if (b === 1)
        return "100%";
      var N = "px";
      if (typeof w == "string") {
        var O = parseFloat(w);
        N = w.replace(O, ""), w = O;
      }
      return w = (b - 1) * w / b, N === "%" ? P - w + "%" : "calc(" + P + "% - " + w + N + ")";
    }
    function h(l, m) {
      var b = r(l.options), w = 0, P = void 0, N = void 0;
      if (++m === 1)
        return 0;
      N = u(l.options).x;
      var O = "px";
      if (typeof N == "string") {
        var X = parseFloat(N, 10);
        O = N.replace(X, ""), N = X;
      }
      return P = (N - (b - 1) * N / b) * (m - 1), w += d(l.options, !1) * (m - 1), O === "%" ? w + P + "%" : "calc(" + w + "% + " + P + O + ")";
    }
    function p(l) {
      var m = 0, b = l.container, w = l.rows;
      x(w, function(P) {
        m = P > m ? P : m;
      }), b.style.height = m + "px";
    }
    function z(l, m) {
      var b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], w = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], P = r(l.options), N = u(l.options).y;
      a3(l, P, b), x(m, function(O) {
        var X = 0, je = parseInt(O.offsetHeight, 10);
        isNaN(je) || (l.rows.forEach(function(d6, h6) {
          d6 < l.rows[X] && (X = h6);
        }), O.style.position = "absolute", O.style.top = l.rows[X] + "px", O.style.left = "" + l.cols[X], l.rows[X] += isNaN(je) ? 0 : je + N, w && (O.dataset.macyComplete = 1));
      }), w && (l.tmpRows = null), p(l);
    }
    function g(l, m) {
      var b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], w = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], P = r(l.options), N = u(l.options).y;
      a3(l, P, b), x(m, function(O) {
        l.lastcol === P && (l.lastcol = 0);
        var X = he(O, "height");
        X = parseInt(O.offsetHeight, 10), isNaN(X) || (O.style.position = "absolute", O.style.top = l.rows[l.lastcol] + "px", O.style.left = "" + l.cols[l.lastcol], l.rows[l.lastcol] += isNaN(X) ? 0 : X + N, l.lastcol += 1, w && (O.dataset.macyComplete = 1));
      }), w && (l.tmpRows = null), p(l);
    }
    var _ = function l(m, b) {
      if (!(this instanceof l))
        return new l(m, b);
      if (m && m.nodeName)
        return m;
      if (m = m.replace(/^\s*/, "").replace(/\s*$/, ""), b)
        return this.byCss(m, b);
      for (var w in this.selectors)
        if (b = w.split("/"), new RegExp(b[1], b[2]).test(m))
          return this.selectors[w](m);
      return this.byCss(m);
    };
    _.prototype.byCss = function(l, m) {
      return (m || document).querySelectorAll(l);
    }, _.prototype.selectors = {}, _.prototype.selectors[/^\.[\w\-]+$/] = function(l) {
      return document.getElementsByClassName(l.substring(1));
    }, _.prototype.selectors[/^\w+$/] = function(l) {
      return document.getElementsByTagName(l);
    }, _.prototype.selectors[/^\#[\w\-]+$/] = function(l) {
      return document.getElementById(l.substring(1));
    };
    var x = function(l, m) {
      for (var b = l.length, w = b; b--; )
        m(l[w - b - 1]);
    }, k = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.running = !1, this.events = [], this.add(l);
    };
    k.prototype.run = function() {
      if (!this.running && this.events.length > 0) {
        var l = this.events.shift();
        this.running = !0, l(), this.running = !1, this.run();
      }
    }, k.prototype.add = function() {
      var l = this, m = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return !!m && (Array.isArray(m) ? x(m, function(b) {
        return l.add(b);
      }) : (this.events.push(m), void this.run()));
    }, k.prototype.clear = function() {
      this.events = [];
    };
    var Y = function(l) {
      var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.instance = l, this.data = m, this;
    }, V = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.events = {}, this.instance = l;
    };
    V.prototype.on = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], m = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      return !(!l || !m) && (Array.isArray(this.events[l]) || (this.events[l] = []), this.events[l].push(m));
    }, V.prototype.emit = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!l || !Array.isArray(this.events[l]))
        return !1;
      var b = new Y(this.instance, m);
      x(this.events[l], function(w) {
        return w(b);
      });
    };
    var K = function(l) {
      return !("naturalHeight" in l && l.naturalHeight + l.naturalWidth === 0) || l.width + l.height !== 0;
    }, ee = function(l, m) {
      var b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return new Promise(function(w, P) {
        if (m.complete)
          return K(m) ? w(m) : P(m);
        m.addEventListener("load", function() {
          return K(m) ? w(m) : P(m);
        }), m.addEventListener("error", function() {
          return P(m);
        });
      }).then(function(w) {
        b && l.emit(l.constants.EVENT_IMAGE_LOAD, { img: w });
      }).catch(function(w) {
        return l.emit(l.constants.EVENT_IMAGE_ERROR, { img: w });
      });
    }, ne = function(l, m) {
      var b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return i(m, function(w) {
        return ee(l, w, b);
      });
    }, j = function(l, m) {
      var b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return Promise.all(ne(l, m, b)).then(function() {
        l.emit(l.constants.EVENT_IMAGE_COMPLETE);
      });
    }, I = function(l) {
      return n(function() {
        l.emit(l.constants.EVENT_RESIZE), l.queue.add(function() {
          return l.recalculate(!0, !0);
        });
      }, 100);
    }, G = function(l) {
      if (l.container = _(l.options.container), l.container instanceof _ || !l.container)
        return !!l.options.debug && console.error("Error: Container not found");
      l.container.length && (l.container = l.container[0]), l.options.container = l.container, l.container.style.position = "relative";
    }, J = function(l) {
      l.queue = new k(), l.events = new V(l), l.rows = [], l.resizer = I(l);
    }, oe = function(l) {
      var m = _("img", l.container);
      window.addEventListener("resize", l.resizer), l.on(l.constants.EVENT_IMAGE_LOAD, function() {
        return l.recalculate(!1, !1);
      }), l.on(l.constants.EVENT_IMAGE_COMPLETE, function() {
        return l.recalculate(!0, !0);
      }), l.options.useOwnImageLoader || a(l, m, !l.options.waitForImages), l.emit(l.constants.EVENT_INITIALIZED);
    }, de = function(l) {
      G(l), J(l), oe(l);
    }, ae = function(l) {
      return l === Object(l) && Object.prototype.toString.call(l) !== "[object Array]";
    }, Be = function(l, m) {
      ae(l) || (m.columns = l), ae(l) && l.columns && (m.columns = l.columns), ae(l) && l.margin && !ae(l.margin) && (m.margin = { x: l.margin, y: l.margin }), ae(l) && l.margin && ae(l.margin) && l.margin.x && (m.margin.x = l.margin.x), ae(l) && l.margin && ae(l.margin) && l.margin.y && (m.margin.y = l.margin.y);
    }, he = function(l, m) {
      return window.getComputedStyle(l, null).getPropertyValue(m);
    }, a3 = function(l, m) {
      var b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      if (l.lastcol || (l.lastcol = 0), l.rows.length < 1 && (b = !0), b) {
        l.rows = [], l.cols = [], l.lastcol = 0;
        for (var w = m - 1; w >= 0; w--)
          l.rows[w] = 0, l.cols[w] = h(l, w);
      } else if (l.tmpRows) {
        l.rows = [];
        for (var w = m - 1; w >= 0; w--)
          l.rows[w] = l.tmpRows[w];
      } else {
        l.tmpRows = [];
        for (var w = m - 1; w >= 0; w--)
          l.tmpRows[w] = l.rows[w];
      }
    }, b3 = function(l) {
      var m = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], b = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], w = m ? l.container.children : _(':scope > *:not([data-macy-complete="1"])', l.container);
      w = Array.from(w).filter(function(N) {
        return N.offsetParent !== null;
      });
      var P = d(l.options);
      return x(w, function(N) {
        m && (N.dataset.macyComplete = 0), N.style.width = P;
      }), l.options.trueOrder ? (g(l, w, m, b), l.emit(l.constants.EVENT_RECALCULATED)) : (z(l, w, m, b), l.emit(l.constants.EVENT_RECALCULATED));
    }, s3 = function() {
      return !!window.Promise;
    }, o3 = Object.assign || function(l) {
      for (var m = 1; m < arguments.length; m++) {
        var b = arguments[m];
        for (var w in b)
          Object.prototype.hasOwnProperty.call(b, w) && (l[w] = b[w]);
      }
      return l;
    };
    Array.from || (Array.from = function(l) {
      for (var m = 0, b = []; m < l.length; )
        b.push(l[m++]);
      return b;
    });
    var D3 = { columns: 4, margin: 2, trueOrder: !1, waitForImages: !1, useImageLoader: !0, breakAt: {}, useOwnImageLoader: !1, onInit: !1, cancelLegacy: !1, useContainerForBreakpoints: !1 };
    (function() {
      try {
        document.createElement("a").querySelector(":scope *");
      } catch {
        (function() {
          function m(N) {
            return function(O) {
              if (O && b.test(O)) {
                var X = this.getAttribute("id");
                X || (this.id = "q" + Math.floor(9e6 * Math.random()) + 1e6), arguments[0] = O.replace(b, "#" + this.id);
                var je = N.apply(this, arguments);
                return X === null ? this.removeAttribute("id") : X || (this.id = X), je;
              }
              return N.apply(this, arguments);
            };
          }
          var b = /:scope\b/gi, w = m(Element.prototype.querySelector);
          Element.prototype.querySelector = function(N) {
            return w.apply(this, arguments);
          };
          var P = m(Element.prototype.querySelectorAll);
          Element.prototype.querySelectorAll = function(N) {
            return P.apply(this, arguments);
          };
        })();
      }
    })();
    var le = function l() {
      var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D3;
      if (!(this instanceof l))
        return new l(m);
      this.options = {}, o3(this.options, D3, m), this.options.cancelLegacy && !s3() || de(this);
    };
    return le.init = function(l) {
      return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new le(l);
    }, le.prototype.recalculateOnImageLoad = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return a(this, _("img", this.container), !l);
    }, le.prototype.runOnImageLoad = function(l) {
      var m = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], b = _("img", this.container);
      return this.on(this.constants.EVENT_IMAGE_COMPLETE, l), m && this.on(this.constants.EVENT_IMAGE_LOAD, l), a(this, b, m);
    }, le.prototype.recalculate = function() {
      var l = this, m = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], b = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      return b && this.queue.clear(), this.queue.add(function() {
        return b3(l, m, b);
      });
    }, le.prototype.remove = function() {
      window.removeEventListener("resize", this.resizer), x(this.container.children, function(l) {
        l.removeAttribute("data-macy-complete"), l.removeAttribute("style");
      }), this.container.removeAttribute("style");
    }, le.prototype.reInit = function() {
      this.recalculate(!0, !0), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), this.container.style.position = "relative";
    }, le.prototype.on = function(l, m) {
      this.events.on(l, m);
    }, le.prototype.emit = function(l, m) {
      this.events.emit(l, m);
    }, le.constants = { EVENT_INITIALIZED: "macy.initialized", EVENT_RECALCULATED: "macy.recalculated", EVENT_IMAGE_LOAD: "macy.image.load", EVENT_IMAGE_ERROR: "macy.image.error", EVENT_IMAGE_COMPLETE: "macy.images.complete", EVENT_RESIZE: "macy.resize" }, le.prototype.constants = le.constants, le;
  });
})(s6);
var Oi = s6.exports;
const Hi = /* @__PURE__ */ Ni(Oi);
const lt = {
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
    const t = e, n = A(null), i = A(`m-waterfall-box${Math.floor(Math.random() * 9999)}`), a = () => {
      n.value && n.value.recalculate(!0);
    }, s = async () => {
      n.value = new Hi({
        container: `.${i.value}`,
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
        ...t.config
      }), window.addEventListener("resize", a);
    };
    return Qt(() => {
      window.removeEventListener("reszie", a);
    }), xe(() => {
      s();
    }), Ce(() => t.changeKey, () => {
      s();
    }), (o, c) => (f(), v("div", {
      ref: "wb",
      class: R(["am-waterfall", i.value])
    }, [
      $(o.$slots, "default")
    ], 2));
  }
};
const Ri = /* @__PURE__ */ y("div", { class: "am-switch__switch" }, [
  /* @__PURE__ */ y("i")
], -1), Pi = {
  key: 0,
  class: "am-switch__text"
}, rt = {
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
  setup(e, { emit: t }) {
    const n = e, i = () => {
      t("update:value", !n.value), t("change", n.value);
    };
    return (a, s) => (f(), v("div", {
      class: R(["am-switch", {
        ["is-active"]: e.value,
        [`is-${e.scene}`]: e.scene,
        [`is-${e.size}`]: e.size
      }]),
      onClick: i
    }, [
      Ri,
      a.$slots.default ? (f(), v("div", Pi, [
        $(a.$slots, "default")
      ])) : M("", !0)
    ], 2));
  }
};
const Fi = { class: "am-radio__box" }, Wi = {
  key: 0,
  class: "am-radio__text"
}, ct = {
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
  setup(e, { emit: t }) {
    const n = e, i = T(() => n.label !== void 0 ? n.value === n.label : n.value), a = () => {
      n.label !== void 0 ? (t("update:value", n.label), t("change", n.label)) : (t("update:value", !n.value), t("change", n.value));
    };
    return (s, o) => (f(), v("div", {
      class: R(["am-radio", {
        ["is-active"]: E(i),
        [`is-${e.scene}`]: e.scene
      }]),
      onClick: a
    }, [
      y("div", Fi, [
        D($e, { name: "am-radio-anime" }, {
          default: ie(() => [
            ge(D(be, {
              name: "check-2",
              size: "18px",
              color: "#fff"
            }, null, 512), [
              [we, E(i)]
            ])
          ]),
          _: 1
        })
      ]),
      s.$slots.default ? (f(), v("div", Wi, [
        $(s.$slots, "default")
      ])) : M("", !0)
    ], 2));
  }
};
const ut = {
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
    const t = e, n = T(() => {
      const i = /rgba|\#/.test(t.color) ? t.color : t.scene === "light" ? `var(--c-${t.color})` : `var(--cd-${t.color})`, a = t.scene === "light" ? "var(--c-bg)" : "var(--cd-bg)", s = t.scene === "light" ? "var(--c-border)" : "var(--cd-border)", o = t.scene === "light" ? "var(--c-main)" : "var(--cd-main)";
      return t.mode === "default" ? {
        background: a,
        borderColor: s,
        color: o
      } : t.mode === "fill" ? {
        borderColor: i,
        background: i,
        color: "#fff"
      } : t.mode === "plain" ? {
        borderColor: i,
        background: a,
        color: i
      } : {};
    });
    return (i, a) => (f(), v("div", {
      class: R(["am-tag", {
        ["is-" + e.mode]: e.mode,
        ["is-" + e.size]: e.size,
        ["is-" + e.color]: e.color,
        ["is-" + e.scene]: e.scene
      }]),
      style: Z(E(n))
    }, [
      $(i.$slots, "default")
    ], 6));
  }
};
const qi = {
  key: 0,
  class: "am-alert__icon"
}, Yi = { class: "am-alert__content" }, dt = {
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
    const t = e, n = A(!0), i = T(() => ({
      [`is-${t.type}`]: !0,
      [`is-${t.size}`]: !0
    })), a = T(() => t.type === "info" ? "info-fill" : t.type === "success" ? "success-fill" : t.type === "fail" ? "error-fill" : t.type === "warning" ? "info-fill" : ""), s = () => {
      n.value = !1;
    };
    return (o, c) => {
      const r = ue("AmIcon");
      return n.value ? (f(), v("div", {
        key: 0,
        class: R(["am-alert", E(i)])
      }, [
        e.showIcon && E(a) ? (f(), v("div", qi, [
          D(r, {
            name: E(a),
            size: "18px"
          }, null, 8, ["name"])
        ])) : M("", !0),
        y("div", Yi, [
          $(o.$slots, "default")
        ]),
        e.showClose ? (f(), v("div", {
          key: 1,
          class: "am-alert__close",
          onClick: s
        }, [
          D(r, { name: "close" })
        ])) : M("", !0)
      ], 2)) : M("", !0);
    };
  }
}, Xi = (e) => new Promise(function(t, n) {
  let i = new Image();
  i.onload = function() {
    t(i);
  }, i.onerror = function() {
    n();
  }, i.src = e;
});
const ji = { class: "am-img" }, Ui = ["src"], Zi = {
  key: 1,
  class: "am-img__error",
  style: { transform: "none!important" }
}, Ki = /* @__PURE__ */ Ae(" 重新加载 "), Gi = { class: "am-img__control" }, ht = {
  props: {
    src: {
      type: String
    },
    showReload: {
      type: Boolean,
      default: !1
    },
    showPreviewBtn: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "preview"
  ],
  setup(e, { emit: t }) {
    const n = e, i = A(null);
    let a = 1;
    const s = async () => {
      if (!n.src)
        return;
      i.value = "", a++;
      const r = a;
      try {
        await Xi(n.src), r === a && (i.value = "success");
      } catch (u) {
        console.error("# 图片请求失败", u), i.value = "error";
      }
    }, o = async () => {
      console.log("# 图片重载"), i.value = "", await C3(500), s();
    };
    Ce(() => [n.src], () => {
      s();
    }, {
      immediate: !0
    });
    const c = () => {
      t("preview", n.src);
    };
    return (r, u) => (f(), v("div", ji, [
      i.value === "success" ? (f(), v("img", {
        key: 0,
        class: "am-img__img",
        src: e.src
      }, null, 8, Ui)) : i.value === "error" ? (f(), v("div", Zi, [
        D(be, {
          name: "picfail-fill",
          color: "var(--c-sub)",
          size: "24px"
        }),
        e.showReload ? (f(), se(Se, {
          key: 0,
          size: "small",
          onClick: o
        }, {
          default: ie(() => [
            Ki
          ]),
          _: 1
        })) : M("", !0)
      ])) : M("", !0),
      y("div", Gi, [
        e.showPreviewBtn ? (f(), se(Se, {
          key: 0,
          scene: "dark",
          "icon-size": "14px",
          size: "small",
          icon: "eye-line",
          onClick: y6(c, ["stop"])
        }, null, 8, ["onClick"])) : M("", !0)
      ])
    ]));
  }
};
const Ji = {}, Qi = { class: "am-layout-admin" }, en = { class: "am-layout-admin__header" }, tn = { class: "am-layout-admin__header-left" }, nn = { class: "am-layout-admin__header-right" }, an = { class: "am-layout-admin__body" }, sn = { class: "am-layout-admin__navbar" }, on = { class: "am-layout-admin__main" }, ln = { class: "am-layout-admin__bread" }, rn = { class: "am-layout-admin__container" };
function cn(e, t) {
  return f(), v("div", Qi, [
    y("div", en, [
      y("div", tn, [
        $(e.$slots, "headerleft")
      ]),
      y("div", nn, [
        $(e.$slots, "headerright")
      ])
    ]),
    y("div", an, [
      y("div", sn, [
        $(e.$slots, "nav")
      ]),
      y("div", on, [
        y("div", ln, [
          $(e.$slots, "bread")
        ]),
        y("div", rn, [
          $(e.$slots, "container")
        ])
      ])
    ])
  ]);
}
const ft = /* @__PURE__ */ Xe(Ji, [["render", cn]]);
const un = {
  key: 0,
  class: "am-card__hd"
}, dn = { class: "am-card__hd-left" }, hn = { class: "am-card__title" }, fn = { class: "am-card__hd-right" }, mn = { class: "am-card__bd" }, mt = {
  props: {
    title: String,
    size: {
      type: String,
      default: "medium"
      // large medium small
    },
    border: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => (f(), v("div", {
      class: R(["am-card", {
        [`is-${e.size}`]: e.size,
        ["is-border"]: e.border
      }])
    }, [
      e.title ? (f(), v("div", un, [
        y("div", dn, [
          y("span", hn, B(e.title), 1),
          $(t.$slots, "hdleft")
        ]),
        y("div", fn, [
          $(t.$slots, "hdright")
        ])
      ])) : M("", !0),
      y("div", mn, [
        $(t.$slots, "default")
      ])
    ], 2));
  }
};
const vn = {}, pn = { class: "am-layout-config" };
function gn(e, t) {
  return f(), v("div", pn, [
    $(e.$slots, "default")
  ]);
}
const vt = /* @__PURE__ */ Xe(vn, [["render", gn]]);
const yn = { class: "am-layout-config-item" }, bn = { class: "am-layout-config-item__left" }, wn = { class: "am-layout-config-item__title" }, _n = { class: "am-layout-config-item__sub" }, xn = {
  key: 0,
  class: "am-layout-config-item__right"
}, pt = {
  props: {
    title: String,
    sub: String
  },
  setup(e) {
    return (t, n) => (f(), v("div", yn, [
      y("div", bn, [
        y("div", wn, [
          t.$slots.title ? $(t.$slots, "sub", { key: 0 }) : e.title ? (f(), v(ye, { key: 1 }, [
            Ae(B(e.title), 1)
          ], 64)) : M("", !0)
        ]),
        y("div", _n, [
          t.$slots.sub ? $(t.$slots, "sub", { key: 0 }) : e.sub ? (f(), v(ye, { key: 1 }, [
            Ae(B(e.sub), 1)
          ], 64)) : M("", !0)
        ])
      ]),
      t.$slots.default ? (f(), v("div", xn, [
        $(t.$slots, "default")
      ])) : M("", !0)
    ]));
  }
};
const zn = {}, En = { class: "am-layout-bar" }, kn = { class: "am-layout-bar__left" }, Sn = { class: "am-layout-bar__right" };
function An(e, t) {
  return f(), v("div", En, [
    y("div", kn, [
      $(e.$slots, "left")
    ]),
    y("div", Sn, [
      $(e.$slots, "right")
    ])
  ]);
}
const gt = /* @__PURE__ */ Xe(zn, [["render", An]]);
const $n = { class: "am-layout-title" }, Cn = { class: "am-layout-title__left" }, Tn = { class: "am-layout-title__title" }, Ln = /* @__PURE__ */ y("div", { class: "am-layout-title__right" }, null, -1), yt = {
  props: {
    title: String
  },
  setup(e) {
    return (t, n) => (f(), v("div", $n, [
      y("div", Cn, [
        y("div", Tn, B(e.title), 1)
      ]),
      Ln
    ]));
  }
};
const Mn = { class: "am-user-login" }, In = { class: "am-user-login__input" }, Vn = { class: "am-user-login__submit" }, Bn = /* @__PURE__ */ Ae("登录"), bt = {
  props: {
    title: {
      type: String,
      default: "登录"
    },
    show: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const n = ke("$message"), i = e6({
      username: "",
      password: ""
    }), a = () => {
      if (!i.username || !i.password) {
        n.fail("请输入账号密码");
        return;
      }
      t("click-login", i);
    };
    return (s, o) => {
      const c = ue("AmInput"), r = ue("AmButton"), u = ue("AmPopup");
      return f(), v("div", Mn, [
        D(u, {
          width: "320px",
          height: "400px",
          "show-close-btn": !1,
          title: e.title,
          show: e.show
        }, {
          default: ie(() => [
            y("div", In, [
              D(c, {
                placeholder: "用户名",
                value: E(i).username,
                "onUpdate:value": o[0] || (o[0] = (d) => E(i).username = d)
              }, null, 8, ["value"]),
              D(c, {
                name: "password",
                placeholder: "密码",
                type: "password",
                value: E(i).password,
                "onUpdate:value": o[1] || (o[1] = (d) => E(i).password = d)
              }, null, 8, ["value"])
            ]),
            y("div", Vn, [
              D(r, {
                mode: "primary",
                onClick: a
              }, {
                default: ie(() => [
                  Bn
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["title", "show"])
      ]);
    };
  }
};
const Dn = { class: "am-message" }, Nn = {
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
  setup(e, { expose: t }) {
    const n = e, i = A(!1), a = A(Ve.getZIndex()), s = A(null), o = T(() => {
      let p = "";
      switch (n.type) {
        case "success":
          p = "success-fill";
          break;
        case "fail":
          p = "error-fill";
          break;
        case "info":
          p = "info-fill";
          break;
        case "warning":
          p = "info-fill";
          break;
      }
      return p;
    });
    xe(() => {
      i.value = !0, s.value = setTimeout(() => {
        i.value = !1;
      }, n.duration);
    });
    const c = () => {
    }, r = () => {
    }, u = () => {
      console.log(n), n.destroySelf();
    }, d = () => {
      u();
    };
    return t({
      close: () => {
        s.value && (clearTimeout(s.value), s.value = null), i.value = !1;
      },
      show: i
    }), (p, z) => (f(), v("div", Dn, [
      D($e, {
        name: "am-message__anime",
        onAfterLeave: d
      }, {
        default: ie(() => [
          ge(y("div", {
            class: R(["am-message__body", "am-message__body--" + e.type]),
            style: Z({
              "z-index": a.value
            }),
            onMouseenter: c,
            onMouseleave: r
          }, [
            e.type ? (f(), se(be, {
              key: 0,
              name: E(o),
              size: "20px"
            }, null, 8, ["name"])) : M("", !0),
            y("span", null, B(e.content), 1)
          ], 38), [
            [we, i.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}, r3 = [], wt = {
  install(e) {
    const t = (i) => {
      let a = {
        content: "this is a message",
        type: "",
        duration: 2e3
      }, s = document.body;
      typeof i == "string" ? a.content = i : (a = { ...a, ...i }, s = i.father || s);
      const o = document.createElement("div"), c = D(Nn, {
        ...a
      });
      We(c, o), s.appendChild(o.firstElementChild);
      const r = c.component;
      return r3.push(r), r.props.destroySelf = () => {
        const u = r3.findIndex((d) => d === r);
        r3.splice(u, 1), We(null, o), o.remove();
      }, r;
    }, n = (i) => {
      t(i);
    };
    n.success = (i) => {
      t({
        content: i,
        type: "success"
      });
    }, n.fail = (i) => {
      t({
        content: i,
        type: "fail"
      });
    }, n.info = (i) => {
      t({
        content: i,
        type: "info"
      });
    }, n.warning = (i) => {
      t({
        content: i,
        type: "warning"
      });
    }, n.closeMessage = (i) => {
      i ? i.exposed.close() : r3.forEach((a) => {
        a.exposed.close();
      });
    }, e.provide("$message", n), window.$message = n;
  }
};
const On = { class: "am-loading" }, Hn = {
  key: 0,
  class: "am-loading__inner"
}, Rn = { class: "am-loading__card" }, Pn = /* @__PURE__ */ y("svg", {
  class: "spinner",
  width: "40px",
  height: "40px",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ y("circle", {
    class: "path2",
    fill: "none",
    "stroke-width": "3",
    cx: "20",
    cy: "20",
    r: "13"
  }),
  /* @__PURE__ */ y("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "3",
    cx: "20",
    cy: "20",
    r: "13"
  })
], -1), Fn = {
  props: {
    destroySelf: Function,
    content: {
      type: String,
      default: "加载中"
    }
  },
  setup(e, { expose: t }) {
    const n = e, i = A(!1), a = A(!1);
    let s = !1, o = null;
    Ce(() => i.value, () => {
      i.value ? (a.value = !0, o && clearTimeout(o), o = setTimeout(() => {
        s = !0, i.value || (a.value = !1);
      }, 600)) : s && (a.value = !1, s = !1);
    }), xe(() => {
      i.value = !0;
    });
    let c;
    const r = () => {
      n.destroySelf();
    }, u = () => {
      c(), r();
    };
    return t({
      close: async () => {
        i.value = !1, await new Promise((h) => {
          c = h;
        });
      },
      show: i
    }), (h, p) => (f(), v("div", On, [
      D($e, {
        name: "am-loading-anime",
        onAfterLeave: u
      }, {
        default: ie(() => [
          a.value ? (f(), v("div", Hn, [
            y("div", Rn, [
              Pn,
              y("span", null, B(e.content), 1)
            ])
          ])) : M("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, c3 = [], _t = {
  install(e) {
    const t = (i) => {
      let a = {
        content: "加载中"
      }, s = document.body;
      typeof i == "string" ? a.content = i : (a = { ...a, ...i }, s = i.father || s);
      const o = document.createElement("div"), c = D(Fn, {
        ...a
      });
      We(c, o), s.appendChild(o.firstElementChild);
      const r = c.component;
      return c3.push(r), r.props.destroySelf = () => {
        const u = c3.findIndex((d) => d === r);
        c3.splice(u, 1), We(null, o), o.remove();
      }, r;
    }, n = {};
    n.show = t, n.close = async (i) => {
      i ? await i.exposed.close() : await Promise.all(c3.map((a) => a.exposed.close()));
    }, e.provide("$loading", n);
  }
};
const Wn = { class: "am-dialog" }, qn = {
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
    const t = e, n = A(!1);
    let i = "cancel";
    xe(() => {
      n.value = !0;
    });
    const a = () => {
      i = "cancel", n.value = !1;
    }, s = () => {
      i = "confirm", n.value = !1;
    }, o = () => {
      i === "cancel" ? t.cancel() : t.confirm(), t.destroySelf();
    };
    return (c, r) => (f(), v("div", Wn, [
      D(E3, {
        "popup-class": "am-dialog",
        width: "480px",
        show: n.value,
        "onUpdate:show": r[0] || (r[0] = (u) => n.value = u),
        title: e.title,
        onAfterLeave: o
      }, {
        ft: ie(() => [
          D(Se, { onClick: a }, {
            default: ie(() => [
              Ae(B(e.cancelText), 1)
            ]),
            _: 1
          }),
          D(Se, {
            mode: "primary",
            onClick: s
          }, {
            default: ie(() => [
              Ae(B(e.confirmText), 1)
            ]),
            _: 1
          })
        ]),
        default: ie(() => [
          y("p", null, B(e.content), 1)
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}, xt = {
  install(e) {
    const n = (i) => {
      console.log("options", i);
      const a = document.createElement("div"), s = D(qn, {
        ...i
      });
      console.log("1", s, a), We(s, a), console.log("1.1"), document.body.appendChild(a.firstElementChild);
      const o = s.component;
      return console.log("2"), o.props.destroySelf = () => {
        We(null, a), a.remove();
      }, new Promise((c, r) => {
        o.props.confirm = c, o.props.cancel = r;
      });
    };
    e.provide("$dialog", n);
  }
};
/*!
 * Viewer.js v1.11.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-03-05T07:01:17.741Z
 */
function zt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function M3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zt(Object(n), !0).forEach(function(i) {
      jn(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function k3(e) {
  "@babel/helpers - typeof";
  return k3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, k3(e);
}
function Yn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Et(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, o6(i.key), i);
  }
}
function Xn(e, t, n) {
  return t && Et(e.prototype, t), n && Et(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function jn(e, t, n) {
  return t = o6(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Un(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o6(e) {
  var t = Un(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var kt = {
  /**
   * Enable a modal backdrop, specify `static` for a backdrop
   * which doesn't close the modal on click.
   * @type {boolean}
   */
  backdrop: !0,
  /**
   * Show the button on the top-right of the viewer.
   * @type {boolean}
   */
  button: !0,
  /**
   * Show the navbar.
   * @type {boolean | number}
   */
  navbar: !0,
  /**
   * Specify the visibility and the content of the title.
   * @type {boolean | number | Function | Array}
   */
  title: !0,
  /**
   * Show the toolbar.
   * @type {boolean | number | Object}
   */
  toolbar: !0,
  /**
   * Custom class name(s) to add to the viewer's root element.
   * @type {string}
   */
  className: "",
  /**
   * Define where to put the viewer in modal mode.
   * @type {string | Element}
   */
  container: "body",
  /**
   * Filter the images for viewing. Return true if the image is viewable.
   * @type {Function}
   */
  filter: null,
  /**
   * Enable to request fullscreen when play.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
   * @type {boolean|FullscreenOptions}
   */
  fullscreen: !0,
  /**
   * Define the extra attributes to inherit from the original image.
   * @type {Array}
   */
  inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
  /**
   * Define the initial coverage of the viewing image.
   * @type {number}
   */
  initialCoverage: 0.9,
  /**
   * Define the initial index of the image for viewing.
   * @type {number}
   */
  initialViewIndex: 0,
  /**
   * Enable inline mode.
   * @type {boolean}
   */
  inline: !1,
  /**
   * The amount of time to delay between automatically cycling an image when playing.
   * @type {number}
   */
  interval: 5e3,
  /**
   * Enable keyboard support.
   * @type {boolean}
   */
  keyboard: !0,
  /**
   * Focus the viewer when initialized.
   * @type {boolean}
   */
  focus: !0,
  /**
   * Indicate if show a loading spinner when load image or not.
   * @type {boolean}
   */
  loading: !0,
  /**
   * Indicate if enable loop viewing or not.
   * @type {boolean}
   */
  loop: !0,
  /**
   * Min width of the viewer in inline mode.
   * @type {number}
   */
  minWidth: 200,
  /**
   * Min height of the viewer in inline mode.
   * @type {number}
   */
  minHeight: 100,
  /**
   * Enable to move the image.
   * @type {boolean}
   */
  movable: !0,
  /**
   * Enable to rotate the image.
   * @type {boolean}
   */
  rotatable: !0,
  /**
   * Enable to scale the image.
   * @type {boolean}
   */
  scalable: !0,
  /**
   * Enable to zoom the image.
   * @type {boolean}
   */
  zoomable: !0,
  /**
   * Enable to zoom the current image by dragging on the touch screen.
   * @type {boolean}
   */
  zoomOnTouch: !0,
  /**
   * Enable to zoom the image by wheeling mouse.
   * @type {boolean}
   */
  zoomOnWheel: !0,
  /**
   * Enable to slide to the next or previous image by swiping on the touch screen.
   * @type {boolean}
   */
  slideOnTouch: !0,
  /**
   * Indicate if toggle the image size between its natural size
   * and initial size when double click on the image or not.
   * @type {boolean}
   */
  toggleOnDblclick: !0,
  /**
   * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
   * @type {boolean}
   */
  tooltip: !0,
  /**
   * Enable CSS3 Transition for some special elements.
   * @type {boolean}
   */
  transition: !0,
  /**
   * Define the CSS `z-index` value of viewer in modal mode.
   * @type {number}
   */
  zIndex: 2015,
  /**
   * Define the CSS `z-index` value of viewer in inline mode.
   * @type {number}
   */
  zIndexInline: 0,
  /**
   * Define the ratio when zoom the image by wheeling mouse.
   * @type {number}
   */
  zoomRatio: 0.1,
  /**
   * Define the min ratio of the image when zoom out.
   * @type {number}
   */
  minZoomRatio: 0.01,
  /**
   * Define the max ratio of the image when zoom in.
   * @type {number}
   */
  maxZoomRatio: 100,
  /**
   * Define where to get the original image URL for viewing.
   * @type {string | Function}
   */
  url: "src",
  /**
   * Event shortcuts.
   * @type {Function}
   */
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null,
  move: null,
  moved: null,
  rotate: null,
  rotated: null,
  scale: null,
  scaled: null,
  zoom: null,
  zoomed: null,
  play: null,
  stop: null
}, Zn = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>', y3 = typeof window < "u" && typeof window.document < "u", _e = y3 ? window : {}, Pe = y3 && _e.document.documentElement ? "ontouchstart" in _e.document.documentElement : !1, I3 = y3 ? "PointerEvent" in _e : !1, L = "viewer", m3 = "move", l6 = "switch", Ze = "zoom", u3 = "".concat(L, "-active"), Kn = "".concat(L, "-close"), v3 = "".concat(L, "-fade"), S3 = "".concat(L, "-fixed"), Gn = "".concat(L, "-fullscreen"), St = "".concat(L, "-fullscreen-exit"), Le = "".concat(L, "-hide"), Jn = "".concat(L, "-hide-md-down"), Qn = "".concat(L, "-hide-sm-down"), ea = "".concat(L, "-hide-xs-down"), fe = "".concat(L, "-in"), Je = "".concat(L, "-invisible"), Fe = "".concat(L, "-loading"), ta = "".concat(L, "-move"), At = "".concat(L, "-open"), De = "".concat(L, "-show"), Q = "".concat(L, "-transition"), qe = "click", A3 = "dblclick", $t = "dragstart", Ct = "focusin", Tt = "keydown", me = "load", Ie = "error", ia = Pe ? "touchend touchcancel" : "mouseup", na = Pe ? "touchmove" : "mousemove", aa = Pe ? "touchstart" : "mousedown", Lt = I3 ? "pointerdown" : aa, Mt = I3 ? "pointermove" : na, It = I3 ? "pointerup pointercancel" : ia, Vt = "resize", ve = "transitionend", Bt = "wheel", Dt = "ready", Nt = "show", Ot = "shown", Ht = "hide", Rt = "hidden", Pt = "view", e3 = "viewed", Ft = "move", Wt = "moved", qt = "rotate", Yt = "rotated", Xt = "scale", jt = "scaled", Ut = "zoom", Zt = "zoomed", Kt = "play", Gt = "stop", g3 = "".concat(L, "Action"), V3 = /\s\s*/, d3 = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
function t3(e) {
  return typeof e == "string";
}
var sa = Number.isNaN || _e.isNaN;
function U(e) {
  return typeof e == "number" && !sa(e);
}
function Oe(e) {
  return typeof e > "u";
}
function Ye(e) {
  return k3(e) === "object" && e !== null;
}
var oa = Object.prototype.hasOwnProperty;
function He(e) {
  if (!Ye(e))
    return !1;
  try {
    var t = e.constructor, n = t.prototype;
    return t && n && oa.call(n, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function F(e) {
  return typeof e == "function";
}
function q(e, t) {
  if (e && F(t))
    if (Array.isArray(e) || U(e.length)) {
      var n = e.length, i;
      for (i = 0; i < n && t.call(e, e[i], i, e) !== !1; i += 1)
        ;
    } else
      Ye(e) && Object.keys(e).forEach(function(a) {
        t.call(e, e[a], a, e);
      });
  return e;
}
var ce = Object.assign || function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return Ye(t) && i.length > 0 && i.forEach(function(s) {
    Ye(s) && Object.keys(s).forEach(function(o) {
      t[o] = s[o];
    });
  }), t;
}, la = /^(?:width|height|left|top|marginLeft|marginTop)$/;
function pe(e, t) {
  var n = e.style;
  q(t, function(i, a) {
    la.test(a) && U(i) && (i += "px"), n[a] = i;
  });
}
function ra(e) {
  return t3(e) ? e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : e;
}
function Ne(e, t) {
  return !e || !t ? !1 : e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1;
}
function S(e, t) {
  if (!(!e || !t)) {
    if (U(e.length)) {
      q(e, function(i) {
        S(i, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.add(t);
      return;
    }
    var n = e.className.trim();
    n ? n.indexOf(t) < 0 && (e.className = "".concat(n, " ").concat(t)) : e.className = t;
  }
}
function H(e, t) {
  if (!(!e || !t)) {
    if (U(e.length)) {
      q(e, function(n) {
        H(n, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.remove(t);
      return;
    }
    e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, ""));
  }
}
function i3(e, t, n) {
  if (t) {
    if (U(e.length)) {
      q(e, function(i) {
        i3(i, t, n);
      });
      return;
    }
    n ? S(e, t) : H(e, t);
  }
}
var ca = /([a-z\d])([A-Z])/g;
function B3(e) {
  return e.replace(ca, "$1-$2").toLowerCase();
}
function Re(e, t) {
  return Ye(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(B3(t)));
}
function $3(e, t, n) {
  Ye(n) ? e[t] = n : e.dataset ? e.dataset[t] = n : e.setAttribute("data-".concat(B3(t)), n);
}
var r6 = function() {
  var e = !1;
  if (y3) {
    var t = !1, n = function() {
    }, i = Object.defineProperty({}, "once", {
      get: function() {
        return e = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(s) {
        t = s;
      }
    });
    _e.addEventListener("test", n, i), _e.removeEventListener("test", n, i);
  }
  return e;
}();
function W(e, t, n) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = n;
  t.trim().split(V3).forEach(function(s) {
    if (!r6) {
      var o = e.listeners;
      o && o[s] && o[s][n] && (a = o[s][n], delete o[s][n], Object.keys(o[s]).length === 0 && delete o[s], Object.keys(o).length === 0 && delete e.listeners);
    }
    e.removeEventListener(s, a, i);
  });
}
function C(e, t, n) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = n;
  t.trim().split(V3).forEach(function(s) {
    if (i.once && !r6) {
      var o = e.listeners, c = o === void 0 ? {} : o;
      a = function() {
        delete c[s][n], e.removeEventListener(s, a, i);
        for (var u = arguments.length, d = new Array(u), h = 0; h < u; h++)
          d[h] = arguments[h];
        n.apply(e, d);
      }, c[s] || (c[s] = {}), c[s][n] && e.removeEventListener(s, c[s][n], i), c[s][n] = a, e.listeners = c;
    }
    e.addEventListener(s, a, i);
  });
}
function te(e, t, n, i) {
  var a;
  return F(Event) && F(CustomEvent) ? a = new CustomEvent(t, M3({
    bubbles: !0,
    cancelable: !0,
    detail: n
  }, i)) : (a = document.createEvent("CustomEvent"), a.initCustomEvent(t, !0, !0, n)), e.dispatchEvent(a);
}
function ua(e) {
  var t = e.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
function p3(e) {
  var t = e.rotate, n = e.scaleX, i = e.scaleY, a = e.translateX, s = e.translateY, o = [];
  U(a) && a !== 0 && o.push("translateX(".concat(a, "px)")), U(s) && s !== 0 && o.push("translateY(".concat(s, "px)")), U(t) && t !== 0 && o.push("rotate(".concat(t, "deg)")), U(n) && n !== 1 && o.push("scaleX(".concat(n, ")")), U(i) && i !== 1 && o.push("scaleY(".concat(i, ")"));
  var c = o.length ? o.join(" ") : "none";
  return {
    WebkitTransform: c,
    msTransform: c,
    transform: c
  };
}
function da(e) {
  return t3(e) ? decodeURIComponent(e.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
}
var _3 = _e.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(_e.navigator.userAgent);
function c6(e, t, n) {
  var i = document.createElement("img");
  if (e.naturalWidth && !_3)
    return n(e.naturalWidth, e.naturalHeight), i;
  var a = document.body || document.documentElement;
  return i.onload = function() {
    n(i.width, i.height), _3 || a.removeChild(i);
  }, q(t.inheritedAttributes, function(s) {
    var o = e.getAttribute(s);
    o !== null && i.setAttribute(s, o);
  }), i.src = e.src, _3 || (i.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", a.appendChild(i)), i;
}
function h3(e) {
  switch (e) {
    case 2:
      return ea;
    case 3:
      return Qn;
    case 4:
      return Jn;
    default:
      return "";
  }
}
function ha(e) {
  var t = M3({}, e), n = [];
  return q(e, function(i, a) {
    delete t[a], q(t, function(s) {
      var o = Math.abs(i.startX - s.startX), c = Math.abs(i.startY - s.startY), r = Math.abs(i.endX - s.endX), u = Math.abs(i.endY - s.endY), d = Math.sqrt(o * o + c * c), h = Math.sqrt(r * r + u * u), p = (h - d) / d;
      n.push(p);
    });
  }), n.sort(function(i, a) {
    return Math.abs(i) < Math.abs(a);
  }), n[0];
}
function f3(e, t) {
  var n = e.pageX, i = e.pageY, a = {
    endX: n,
    endY: i
  };
  return t ? a : M3({
    timeStamp: Date.now(),
    startX: n,
    startY: i
  }, a);
}
function fa(e) {
  var t = 0, n = 0, i = 0;
  return q(e, function(a) {
    var s = a.startX, o = a.startY;
    t += s, n += o, i += 1;
  }), t /= i, n /= i, {
    pageX: t,
    pageY: n
  };
}
var ma = {
  render: function() {
    this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
  },
  initBody: function() {
    var t = this.element.ownerDocument, n = t.body || t.documentElement;
    this.body = n, this.scrollbarWidth = window.innerWidth - t.documentElement.clientWidth, this.initialBodyPaddingRight = n.style.paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(n).paddingRight;
  },
  initContainer: function() {
    this.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function() {
    var t = this.options, n = this.parent, i;
    t.inline && (i = {
      width: Math.max(n.offsetWidth, t.minWidth),
      height: Math.max(n.offsetHeight, t.minHeight)
    }, this.parentData = i), (this.fulled || !i) && (i = this.containerData), this.viewerData = ce({}, i);
  },
  renderViewer: function() {
    this.options.inline && !this.fulled && pe(this.viewer, this.viewerData);
  },
  initList: function() {
    var t = this, n = this.element, i = this.options, a = this.list, s = [];
    a.innerHTML = "", q(this.images, function(o, c) {
      var r = o.src, u = o.alt || da(r), d = t.getImageURL(o);
      if (r || d) {
        var h = document.createElement("li"), p = document.createElement("img");
        q(i.inheritedAttributes, function(z) {
          var g = o.getAttribute(z);
          g !== null && p.setAttribute(z, g);
        }), i.navbar && (p.src = r || d), p.alt = u, p.setAttribute("data-original-url", d || r), h.setAttribute("data-index", c), h.setAttribute("data-viewer-action", "view"), h.setAttribute("role", "button"), i.keyboard && h.setAttribute("tabindex", 0), h.appendChild(p), a.appendChild(h), s.push(h);
      }
    }), this.items = s, q(s, function(o) {
      var c = o.firstElementChild, r, u;
      $3(c, "filled", !0), i.loading && S(o, Fe), C(c, me, r = function(h) {
        W(c, Ie, u), i.loading && H(o, Fe), t.loadImage(h);
      }, {
        once: !0
      }), C(c, Ie, u = function() {
        W(c, me, r), i.loading && H(o, Fe);
      }, {
        once: !0
      });
    }), i.transition && C(n, e3, function() {
      S(a, Q);
    }, {
      once: !0
    });
  },
  renderList: function() {
    var t = this.index, n = this.items[t];
    if (n) {
      var i = n.nextElementSibling, a = parseInt(window.getComputedStyle(i || n).marginLeft, 10), s = n.offsetWidth, o = s + a;
      pe(this.list, ce({
        width: o * this.length - a
      }, p3({
        translateX: (this.viewerData.width - s) / 2 - o * t
      })));
    }
  },
  resetList: function() {
    var t = this.list;
    t.innerHTML = "", H(t, Q), pe(t, p3({
      translateX: 0
    }));
  },
  initImage: function(t) {
    var n = this, i = this.options, a = this.image, s = this.viewerData, o = this.footer.offsetHeight, c = s.width, r = Math.max(s.height - o, o), u = this.imageData || {}, d;
    this.imageInitializing = {
      abort: function() {
        d.onload = null;
      }
    }, d = c6(a, i, function(h, p) {
      var z = h / p, g = Math.max(0, Math.min(1, i.initialCoverage)), _ = c, x = r;
      n.imageInitializing = !1, r * z > c ? x = c / z : _ = r * z, g = U(g) ? g : 0.9, _ = Math.min(_ * g, h), x = Math.min(x * g, p);
      var k = (c - _) / 2, Y = (r - x) / 2, V = {
        left: k,
        top: Y,
        x: k,
        y: Y,
        width: _,
        height: x,
        oldRatio: 1,
        ratio: _ / h,
        aspectRatio: z,
        naturalWidth: h,
        naturalHeight: p
      }, K = ce({}, V);
      i.rotatable && (V.rotate = u.rotate || 0, K.rotate = 0), i.scalable && (V.scaleX = u.scaleX || 1, V.scaleY = u.scaleY || 1, K.scaleX = 1, K.scaleY = 1), n.imageData = V, n.initialImageData = K, t && t();
    });
  },
  renderImage: function(t) {
    var n = this, i = this.image, a = this.imageData;
    if (pe(i, ce({
      width: a.width,
      height: a.height,
      // XXX: Not to use translateX/Y to avoid image shaking when zooming
      marginLeft: a.x,
      marginTop: a.y
    }, p3(a))), t)
      if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && Ne(i, Q)) {
        var s = function() {
          n.imageRendering = !1, t();
        };
        this.imageRendering = {
          abort: function() {
            W(i, ve, s);
          }
        }, C(i, ve, s, {
          once: !0
        });
      } else
        t();
  },
  resetImage: function() {
    if (this.viewing || this.viewed) {
      var t = this.image;
      this.viewing && this.viewing.abort(), t.parentNode.removeChild(t), this.image = null;
    }
  }
}, va = {
  bind: function() {
    var t = this.options, n = this.viewer, i = this.canvas, a = this.element.ownerDocument;
    C(n, qe, this.onClick = this.click.bind(this)), C(n, $t, this.onDragStart = this.dragstart.bind(this)), C(i, Lt, this.onPointerDown = this.pointerdown.bind(this)), C(a, Mt, this.onPointerMove = this.pointermove.bind(this)), C(a, It, this.onPointerUp = this.pointerup.bind(this)), C(a, Tt, this.onKeyDown = this.keydown.bind(this)), C(window, Vt, this.onResize = this.resize.bind(this)), t.zoomable && t.zoomOnWheel && C(n, Bt, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), t.toggleOnDblclick && C(i, A3, this.onDblclick = this.dblclick.bind(this));
  },
  unbind: function() {
    var t = this.options, n = this.viewer, i = this.canvas, a = this.element.ownerDocument;
    W(n, qe, this.onClick), W(n, $t, this.onDragStart), W(i, Lt, this.onPointerDown), W(a, Mt, this.onPointerMove), W(a, It, this.onPointerUp), W(a, Tt, this.onKeyDown), W(window, Vt, this.onResize), t.zoomable && t.zoomOnWheel && W(n, Bt, this.onWheel, {
      passive: !1,
      capture: !0
    }), t.toggleOnDblclick && W(i, A3, this.onDblclick);
  }
}, pa = {
  click: function(t) {
    var n = this.options, i = this.imageData, a = t.target, s = Re(a, g3);
    switch (!s && a.localName === "img" && a.parentElement.localName === "li" && (a = a.parentElement, s = Re(a, g3)), Pe && t.isTrusted && a === this.canvas && clearTimeout(this.clickCanvasTimeout), s) {
      case "mix":
        this.played ? this.stop() : n.inline ? this.fulled ? this.exit() : this.full() : this.hide();
        break;
      case "hide":
        this.pointerMoved || this.hide();
        break;
      case "view":
        this.view(Re(a, "index"));
        break;
      case "zoom-in":
        this.zoom(0.1, !0);
        break;
      case "zoom-out":
        this.zoom(-0.1, !0);
        break;
      case "one-to-one":
        this.toggle();
        break;
      case "reset":
        this.reset();
        break;
      case "prev":
        this.prev(n.loop);
        break;
      case "play":
        this.play(n.fullscreen);
        break;
      case "next":
        this.next(n.loop);
        break;
      case "rotate-left":
        this.rotate(-90);
        break;
      case "rotate-right":
        this.rotate(90);
        break;
      case "flip-horizontal":
        this.scaleX(-i.scaleX || -1);
        break;
      case "flip-vertical":
        this.scaleY(-i.scaleY || -1);
        break;
      default:
        this.played && this.stop();
    }
  },
  dblclick: function(t) {
    t.preventDefault(), this.viewed && t.target === this.image && (Pe && t.isTrusted && clearTimeout(this.doubleClickImageTimeout), this.toggle(t.isTrusted ? t : t.detail && t.detail.originalEvent));
  },
  load: function() {
    var t = this;
    this.timeout && (clearTimeout(this.timeout), this.timeout = !1);
    var n = this.element, i = this.options, a = this.image, s = this.index, o = this.viewerData;
    H(a, Je), i.loading && H(this.canvas, Fe), a.style.cssText = "height:0;" + "margin-left:".concat(o.width / 2, "px;") + "margin-top:".concat(o.height / 2, "px;") + "max-width:none!important;position:relative;width:0;", this.initImage(function() {
      i3(a, ta, i.movable), i3(a, Q, i.transition), t.renderImage(function() {
        t.viewed = !0, t.viewing = !1, F(i.viewed) && C(n, e3, i.viewed, {
          once: !0
        }), te(n, e3, {
          originalImage: t.images[s],
          index: s,
          image: a
        }, {
          cancelable: !1
        });
      });
    });
  },
  loadImage: function(t) {
    var n = t.target, i = n.parentNode, a = i.offsetWidth || 30, s = i.offsetHeight || 50, o = !!Re(n, "filled");
    c6(n, this.options, function(c, r) {
      var u = c / r, d = a, h = s;
      s * u > a ? o ? d = s * u : h = a / u : o ? h = a / u : d = s * u, pe(n, ce({
        width: d,
        height: h
      }, p3({
        translateX: (a - d) / 2,
        translateY: (s - h) / 2
      })));
    });
  },
  keydown: function(t) {
    var n = this.options;
    if (n.keyboard) {
      var i = t.keyCode || t.which || t.charCode;
      switch (i) {
        case 13:
          this.viewer.contains(t.target) && this.click(t);
          break;
      }
      if (this.fulled)
        switch (i) {
          case 27:
            this.played ? this.stop() : n.inline ? this.fulled && this.exit() : this.hide();
            break;
          case 32:
            this.played && this.stop();
            break;
          case 37:
            this.played && this.playing ? this.playing.prev() : this.prev(n.loop);
            break;
          case 38:
            t.preventDefault(), this.zoom(n.zoomRatio, !0);
            break;
          case 39:
            this.played && this.playing ? this.playing.next() : this.next(n.loop);
            break;
          case 40:
            t.preventDefault(), this.zoom(-n.zoomRatio, !0);
            break;
          case 48:
          case 49:
            t.ctrlKey && (t.preventDefault(), this.toggle());
            break;
        }
    }
  },
  dragstart: function(t) {
    t.target.localName === "img" && t.preventDefault();
  },
  pointerdown: function(t) {
    var n = this.options, i = this.pointers, a = t.buttons, s = t.button;
    if (this.pointerMoved = !1, !(!this.viewed || this.showing || this.viewing || this.hiding || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (U(a) && a !== 1 || U(s) && s !== 0 || t.ctrlKey))) {
      t.preventDefault(), t.changedTouches ? q(t.changedTouches, function(c) {
        i[c.identifier] = f3(c);
      }) : i[t.pointerId || 0] = f3(t);
      var o = n.movable ? m3 : !1;
      n.zoomOnTouch && n.zoomable && Object.keys(i).length > 1 ? o = Ze : n.slideOnTouch && (t.pointerType === "touch" || t.type === "touchstart") && this.isSwitchable() && (o = l6), n.transition && (o === m3 || o === Ze) && H(this.image, Q), this.action = o;
    }
  },
  pointermove: function(t) {
    var n = this.pointers, i = this.action;
    !this.viewed || !i || (t.preventDefault(), t.changedTouches ? q(t.changedTouches, function(a) {
      ce(n[a.identifier] || {}, f3(a, !0));
    }) : ce(n[t.pointerId || 0] || {}, f3(t, !0)), this.change(t));
  },
  pointerup: function(t) {
    var n = this, i = this.options, a = this.action, s = this.pointers, o;
    t.changedTouches ? q(t.changedTouches, function(c) {
      o = s[c.identifier], delete s[c.identifier];
    }) : (o = s[t.pointerId || 0], delete s[t.pointerId || 0]), a && (t.preventDefault(), i.transition && (a === m3 || a === Ze) && S(this.image, Q), this.action = !1, Pe && a !== Ze && o && Date.now() - o.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this.doubleClickImageTimeout), i.toggleOnDblclick && this.viewed && t.target === this.image ? this.imageClicked ? (this.imageClicked = !1, this.doubleClickImageTimeout = setTimeout(function() {
      te(n.image, A3, {
        originalEvent: t
      });
    }, 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout(function() {
      n.imageClicked = !1;
    }, 500)) : (this.imageClicked = !1, i.backdrop && i.backdrop !== "static" && t.target === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
      te(n.canvas, qe, {
        originalEvent: t
      });
    }, 50)))));
  },
  resize: function() {
    var t = this;
    if (!(!this.isShown || this.hiding) && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      t.renderImage();
    }), this.played)) {
      if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        this.stop();
        return;
      }
      q(this.player.getElementsByTagName("img"), function(n) {
        C(n, me, t.loadImage.bind(t), {
          once: !0
        }), te(n, me);
      });
    }
  },
  wheel: function(t) {
    var n = this;
    if (this.viewed && (t.preventDefault(), !this.wheeling)) {
      this.wheeling = !0, setTimeout(function() {
        n.wheeling = !1;
      }, 50);
      var i = Number(this.options.zoomRatio) || 0.1, a = 1;
      t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * i, !0, null, t);
    }
  }
}, ga = {
  /** Show the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
   * @returns {Viewer} this
   */
  show: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, n = this.element, i = this.options;
    if (i.inline || this.showing || this.isShown || this.showing)
      return this;
    if (!this.ready)
      return this.build(), this.ready && this.show(t), this;
    if (F(i.show) && C(n, Nt, i.show, {
      once: !0
    }), te(n, Nt) === !1 || !this.ready)
      return this;
    this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
    var a = this.viewer;
    if (H(a, Le), a.setAttribute("role", "dialog"), a.setAttribute("aria-labelledby", this.title.id), a.setAttribute("aria-modal", !0), a.removeAttribute("aria-hidden"), i.transition && !t) {
      var s = this.shown.bind(this);
      this.transitioning = {
        abort: function() {
          W(a, ve, s), H(a, fe);
        }
      }, S(a, Q), a.initialOffsetWidth = a.offsetWidth, C(a, ve, s, {
        once: !0
      }), S(a, fe);
    } else
      S(a, fe), this.shown();
    return this;
  },
  /**
   * Hide the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
   * @returns {Viewer} this
   */
  hide: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.element, a = this.options;
    if (a.inline || this.hiding || !(this.isShown || this.showing))
      return this;
    if (F(a.hide) && C(i, Ht, a.hide, {
      once: !0
    }), te(i, Ht) === !1)
      return this;
    this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
    var s = this.viewer, o = this.image, c = function() {
      H(s, fe), t.hidden();
    };
    if (a.transition && !n) {
      var r = function d(h) {
        h && h.target === s && (W(s, ve, d), t.hidden());
      }, u = function() {
        Ne(s, Q) ? (C(s, ve, r), H(s, fe)) : c();
      };
      this.transitioning = {
        abort: function() {
          t.viewed && Ne(o, Q) ? W(o, ve, u) : Ne(s, Q) && W(s, ve, r);
        }
      }, this.viewed && Ne(o, Q) ? (C(o, ve, u, {
        once: !0
      }), this.zoomTo(0, !1, null, null, !0)) : u();
    } else
      c();
    return this;
  },
  /**
   * View one of the images with image's index
   * @param {number} index - The index of the image to view.
   * @returns {Viewer} this
   */
  view: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
    if (n = Number(n) || 0, this.hiding || this.played || n < 0 || n >= this.length || this.viewed && n === this.index)
      return this;
    if (!this.isShown)
      return this.index = n, this.show();
    this.viewing && this.viewing.abort();
    var i = this.element, a = this.options, s = this.title, o = this.canvas, c = this.items[n], r = c.querySelector("img"), u = Re(r, "originalUrl"), d = r.getAttribute("alt"), h = document.createElement("img");
    if (q(a.inheritedAttributes, function(x) {
      var k = r.getAttribute(x);
      k !== null && h.setAttribute(x, k);
    }), h.src = u, h.alt = d, F(a.view) && C(i, Pt, a.view, {
      once: !0
    }), te(i, Pt, {
      originalImage: this.images[n],
      index: n,
      image: h
    }) === !1 || !this.isShown || this.hiding || this.played)
      return this;
    var p = this.items[this.index];
    p && (H(p, u3), p.removeAttribute("aria-selected")), S(c, u3), c.setAttribute("aria-selected", !0), a.focus && c.focus(), this.image = h, this.viewed = !1, this.index = n, this.imageData = {}, S(h, Je), a.loading && S(o, Fe), o.innerHTML = "", o.appendChild(h), this.renderList(), s.innerHTML = "";
    var z = function() {
      var k = t.imageData, Y = Array.isArray(a.title) ? a.title[1] : a.title;
      s.innerHTML = ra(F(Y) ? Y.call(t, h, k) : "".concat(d, " (").concat(k.naturalWidth, " × ").concat(k.naturalHeight, ")"));
    }, g, _;
    return C(i, e3, z, {
      once: !0
    }), this.viewing = {
      abort: function() {
        W(i, e3, z), h.complete ? t.imageRendering ? t.imageRendering.abort() : t.imageInitializing && t.imageInitializing.abort() : (h.src = "", W(h, me, g), t.timeout && clearTimeout(t.timeout));
      }
    }, h.complete ? this.load() : (C(h, me, g = function() {
      W(h, Ie, _), t.load();
    }, {
      once: !0
    }), C(h, Ie, _ = function() {
      W(h, me, g), t.timeout && (clearTimeout(t.timeout), t.timeout = !1), H(h, Je), a.loading && H(t.canvas, Fe);
    }, {
      once: !0
    }), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
      H(h, Je), t.timeout = !1;
    }, 1e3)), this;
  },
  /**
   * View the previous image
   * @param {boolean} [loop=false] - Indicate if view the last one
   * when it is the first one at present.
   * @returns {Viewer} this
   */
  prev: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, n = this.index - 1;
    return n < 0 && (n = t ? this.length - 1 : 0), this.view(n), this;
  },
  /**
   * View the next image
   * @param {boolean} [loop=false] - Indicate if view the first one
   * when it is the last one at present.
   * @returns {Viewer} this
   */
  next: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, n = this.length - 1, i = this.index + 1;
    return i > n && (i = t ? 0 : n), this.view(i), this;
  },
  /**
   * Move the image with relative offsets.
   * @param {number} x - The moving distance in the horizontal direction.
   * @param {number} [y=x] The moving distance in the vertical direction.
   * @returns {Viewer} this
   */
  move: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.imageData;
    return this.moveTo(Oe(t) ? t : i.x + Number(t), Oe(n) ? n : i.y + Number(n)), this;
  },
  /**
   * Move the image to an absolute point.
   * @param {number} x - The new position in the horizontal direction.
   * @param {number} [y=x] - The new position in the vertical direction.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  moveTo: function(t) {
    var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = this.element, o = this.options, c = this.imageData;
    if (t = Number(t), i = Number(i), this.viewed && !this.played && o.movable) {
      var r = c.x, u = c.y, d = !1;
      if (U(t) ? d = !0 : t = r, U(i) ? d = !0 : i = u, d) {
        if (F(o.move) && C(s, Ft, o.move, {
          once: !0
        }), te(s, Ft, {
          x: t,
          y: i,
          oldX: r,
          oldY: u,
          originalEvent: a
        }) === !1)
          return this;
        c.x = t, c.y = i, c.left = t, c.top = i, this.moving = !0, this.renderImage(function() {
          n.moving = !1, F(o.moved) && C(s, Wt, o.moved, {
            once: !0
          }), te(s, Wt, {
            x: t,
            y: i,
            oldX: r,
            oldY: u,
            originalEvent: a
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  /**
   * Rotate the image with a relative degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t)), this;
  },
  /**
   * Rotate the image to an absolute degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotateTo: function(t) {
    var n = this, i = this.element, a = this.options, s = this.imageData;
    if (t = Number(t), U(t) && this.viewed && !this.played && a.rotatable) {
      var o = s.rotate;
      if (F(a.rotate) && C(i, qt, a.rotate, {
        once: !0
      }), te(i, qt, {
        degree: t,
        oldDegree: o
      }) === !1)
        return this;
      s.rotate = t, this.rotating = !0, this.renderImage(function() {
        n.rotating = !1, F(a.rotated) && C(i, Yt, a.rotated, {
          once: !0
        }), te(i, Yt, {
          degree: t,
          oldDegree: o
        }, {
          cancelable: !1
        });
      });
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Viewer} this
   */
  scaleX: function(t) {
    return this.scale(t, this.imageData.scaleY), this;
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scaleY: function(t) {
    return this.scale(this.imageData.scaleX, t), this;
  },
  /**
   * Scale the image.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scale: function(t) {
    var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, a = this.element, s = this.options, o = this.imageData;
    if (t = Number(t), i = Number(i), this.viewed && !this.played && s.scalable) {
      var c = o.scaleX, r = o.scaleY, u = !1;
      if (U(t) ? u = !0 : t = c, U(i) ? u = !0 : i = r, u) {
        if (F(s.scale) && C(a, Xt, s.scale, {
          once: !0
        }), te(a, Xt, {
          scaleX: t,
          scaleY: i,
          oldScaleX: c,
          oldScaleY: r
        }) === !1)
          return this;
        o.scaleX = t, o.scaleY = i, this.scaling = !0, this.renderImage(function() {
          n.scaling = !1, F(s.scaled) && C(a, jt, s.scaled, {
            once: !0
          }), te(a, jt, {
            scaleX: t,
            scaleY: i,
            oldScaleX: c,
            oldScaleY: r
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  /**
   * Zoom the image with a relative ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  zoom: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s = this.imageData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(s.width * t / s.naturalWidth, n, i, a), this;
  },
  /**
   * Zoom the image to an absolute ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
   * @returns {Viewer} this
   */
  zoomTo: function(t) {
    var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, c = this.element, r = this.options, u = this.pointers, d = this.imageData, h = d.x, p = d.y, z = d.width, g = d.height, _ = d.naturalWidth, x = d.naturalHeight;
    if (t = Math.max(0, t), U(t) && this.viewed && !this.played && (o || r.zoomable)) {
      if (!o) {
        var k = Math.max(0.01, r.minZoomRatio), Y = Math.min(100, r.maxZoomRatio);
        t = Math.min(Math.max(t, k), Y);
      }
      if (s)
        switch (s.type) {
          case "wheel":
            r.zoomRatio >= 0.055 && t > 0.95 && t < 1.05 && (t = 1);
            break;
          case "pointermove":
          case "touchmove":
          case "mousemove":
            t > 0.99 && t < 1.01 && (t = 1);
            break;
        }
      var V = _ * t, K = x * t, ee = V - z, ne = K - g, j = d.ratio;
      if (F(r.zoom) && C(c, Ut, r.zoom, {
        once: !0
      }), te(c, Ut, {
        ratio: t,
        oldRatio: j,
        originalEvent: s
      }) === !1)
        return this;
      if (this.zooming = !0, s) {
        var I = ua(this.viewer), G = u && Object.keys(u).length > 0 ? fa(u) : {
          pageX: s.pageX,
          pageY: s.pageY
        };
        d.x -= ee * ((G.pageX - I.left - h) / z), d.y -= ne * ((G.pageY - I.top - p) / g);
      } else
        He(a) && U(a.x) && U(a.y) ? (d.x -= ee * ((a.x - h) / z), d.y -= ne * ((a.y - p) / g)) : (d.x -= ee / 2, d.y -= ne / 2);
      d.left = d.x, d.top = d.y, d.width = V, d.height = K, d.oldRatio = j, d.ratio = t, this.renderImage(function() {
        n.zooming = !1, F(r.zoomed) && C(c, Zt, r.zoomed, {
          once: !0
        }), te(c, Zt, {
          ratio: t,
          oldRatio: j,
          originalEvent: s
        }, {
          cancelable: !1
        });
      }), i && this.tooltip();
    }
    return this;
  },
  /**
   * Play the images
   * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
   * @returns {Viewer} this
   */
  play: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (!this.isShown || this.played)
      return this;
    var i = this.element, a = this.options;
    if (F(a.play) && C(i, Kt, a.play, {
      once: !0
    }), te(i, Kt) === !1)
      return this;
    var s = this.player, o = this.loadImage.bind(this), c = [], r = 0, u = 0;
    if (this.played = !0, this.onLoadWhenPlay = o, n && this.requestFullscreen(n), S(s, De), q(this.items, function(p, z) {
      var g = p.querySelector("img"), _ = document.createElement("img");
      _.src = Re(g, "originalUrl"), _.alt = g.getAttribute("alt"), _.referrerPolicy = g.referrerPolicy, r += 1, S(_, v3), i3(_, Q, a.transition), Ne(p, u3) && (S(_, fe), u = z), c.push(_), C(_, me, o, {
        once: !0
      }), s.appendChild(_);
    }), U(a.interval) && a.interval > 0) {
      var d = function p() {
        clearTimeout(t.playing.timeout), H(c[u], fe), u -= 1, u = u >= 0 ? u : r - 1, S(c[u], fe), t.playing.timeout = setTimeout(p, a.interval);
      }, h = function p() {
        clearTimeout(t.playing.timeout), H(c[u], fe), u += 1, u = u < r ? u : 0, S(c[u], fe), t.playing.timeout = setTimeout(p, a.interval);
      };
      r > 1 && (this.playing = {
        prev: d,
        next: h,
        timeout: setTimeout(h, a.interval)
      });
    }
    return this;
  },
  // Stop play
  stop: function() {
    var t = this;
    if (!this.played)
      return this;
    var n = this.element, i = this.options;
    if (F(i.stop) && C(n, Gt, i.stop, {
      once: !0
    }), te(n, Gt) === !1)
      return this;
    var a = this.player;
    return clearTimeout(this.playing.timeout), this.playing = !1, this.played = !1, q(a.getElementsByTagName("img"), function(s) {
      W(s, me, t.onLoadWhenPlay);
    }), H(a, De), a.innerHTML = "", this.exitFullscreen(), this;
  },
  // Enter modal mode (only available in inline mode)
  full: function() {
    var t = this, n = this.options, i = this.viewer, a = this.image, s = this.list;
    return !this.isShown || this.played || this.fulled || !n.inline ? this : (this.fulled = !0, this.open(), S(this.button, St), n.transition && (H(s, Q), this.viewed && H(a, Q)), S(i, S3), i.setAttribute("role", "dialog"), i.setAttribute("aria-labelledby", this.title.id), i.setAttribute("aria-modal", !0), i.removeAttribute("style"), pe(i, {
      zIndex: n.zIndex
    }), n.focus && this.enforceFocus(), this.initContainer(), this.viewerData = ce({}, this.containerData), this.renderList(), this.viewed && this.initImage(function() {
      t.renderImage(function() {
        n.transition && setTimeout(function() {
          S(a, Q), S(s, Q);
        }, 0);
      });
    }), this);
  },
  // Exit modal mode (only available in inline mode)
  exit: function() {
    var t = this, n = this.options, i = this.viewer, a = this.image, s = this.list;
    return !this.isShown || this.played || !this.fulled || !n.inline ? this : (this.fulled = !1, this.close(), H(this.button, St), n.transition && (H(s, Q), this.viewed && H(a, Q)), n.focus && this.clearEnforceFocus(), i.removeAttribute("role"), i.removeAttribute("aria-labelledby"), i.removeAttribute("aria-modal"), H(i, S3), pe(i, {
      zIndex: n.zIndexInline
    }), this.viewerData = ce({}, this.parentData), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      t.renderImage(function() {
        n.transition && setTimeout(function() {
          S(a, Q), S(s, Q);
        }, 0);
      });
    }), this);
  },
  // Show the current ratio of the image with percentage
  tooltip: function() {
    var t = this, n = this.options, i = this.tooltipBox, a = this.imageData;
    return !this.viewed || this.played || !n.tooltip ? this : (i.textContent = "".concat(Math.round(a.ratio * 100), "%"), this.tooltipping ? clearTimeout(this.tooltipping) : n.transition ? (this.fading && te(i, ve), S(i, De), S(i, v3), S(i, Q), i.removeAttribute("aria-hidden"), i.initialOffsetWidth = i.offsetWidth, S(i, fe)) : (S(i, De), i.removeAttribute("aria-hidden")), this.tooltipping = setTimeout(function() {
      n.transition ? (C(i, ve, function() {
        H(i, De), H(i, v3), H(i, Q), i.setAttribute("aria-hidden", !0), t.fading = !1;
      }, {
        once: !0
      }), H(i, fe), t.fading = !0) : (H(i, De), i.setAttribute("aria-hidden", !0)), t.tooltipping = !1;
    }, 1e3), this);
  },
  /**
   * Toggle the image size between its current size and natural size
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  toggle: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return this.imageData.ratio === 1 ? this.zoomTo(this.imageData.oldRatio, !0, null, t) : this.zoomTo(1, !0, null, t), this;
  },
  // Reset the image to its initial state
  reset: function() {
    return this.viewed && !this.played && (this.imageData = ce({}, this.initialImageData), this.renderImage()), this;
  },
  // Update viewer when images changed
  update: function() {
    var t = this, n = this.element, i = this.options, a = this.isImg;
    if (a && !n.parentNode)
      return this.destroy();
    var s = [];
    if (q(a ? [n] : n.querySelectorAll("img"), function(u) {
      F(i.filter) ? i.filter.call(t, u) && s.push(u) : t.getImageURL(u) && s.push(u);
    }), !s.length)
      return this;
    if (this.images = s, this.length = s.length, this.ready) {
      var o = [];
      if (q(this.items, function(u, d) {
        var h = u.querySelector("img"), p = s[d];
        p && h ? (p.src !== h.src || p.alt !== h.alt) && o.push(d) : o.push(d);
      }), pe(this.list, {
        width: "auto"
      }), this.initList(), this.isShown)
        if (this.length) {
          if (this.viewed) {
            var c = o.indexOf(this.index);
            if (c >= 0)
              this.viewed = !1, this.view(Math.max(Math.min(this.index - c, this.length - 1), 0));
            else {
              var r = this.items[this.index];
              S(r, u3), r.setAttribute("aria-selected", !0);
            }
          }
        } else
          this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, this.canvas.innerHTML = "", this.title.innerHTML = "";
    } else
      this.build();
    return this;
  },
  // Destroy the viewer
  destroy: function() {
    var t = this.element, n = this.options;
    return t[L] ? (this.destroyed = !0, this.ready ? (this.played && this.stop(), n.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : n.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), n.inline || W(t, qe, this.onStart), t[L] = void 0, this) : this;
  }
}, ya = {
  getImageURL: function(t) {
    var n = this.options.url;
    return t3(n) ? n = t.getAttribute(n) : F(n) ? n = n.call(this, t) : n = "", n;
  },
  enforceFocus: function() {
    var t = this;
    this.clearEnforceFocus(), C(document, Ct, this.onFocusin = function(n) {
      var i = t.viewer, a = n.target;
      if (!(a === document || a === i || i.contains(a))) {
        for (; a; ) {
          if (a.getAttribute("tabindex") !== null || a.getAttribute("aria-modal") === "true")
            return;
          a = a.parentElement;
        }
        i.focus();
      }
    });
  },
  clearEnforceFocus: function() {
    this.onFocusin && (W(document, Ct, this.onFocusin), this.onFocusin = null);
  },
  open: function() {
    var t = this.body;
    S(t, At), this.scrollbarWidth > 0 && (t.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px"));
  },
  close: function() {
    var t = this.body;
    H(t, At), this.scrollbarWidth > 0 && (t.style.paddingRight = this.initialBodyPaddingRight);
  },
  shown: function() {
    var t = this.element, n = this.options, i = this.viewer;
    this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, n.focus && (i.focus(), this.enforceFocus()), F(n.shown) && C(t, Ot, n.shown, {
      once: !0
    }), te(t, Ot) !== !1 && this.ready && this.isShown && !this.hiding && this.view(this.index);
  },
  hidden: function() {
    var t = this.element, n = this.options, i = this.viewer;
    n.fucus && this.clearEnforceFocus(), this.fulled = !1, this.viewed = !1, this.isShown = !1, this.close(), this.unbind(), S(i, Le), i.removeAttribute("role"), i.removeAttribute("aria-labelledby"), i.removeAttribute("aria-modal"), i.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), this.hiding = !1, this.destroyed || (F(n.hidden) && C(t, Rt, n.hidden, {
      once: !0
    }), te(t, Rt, null, {
      cancelable: !1
    }));
  },
  requestFullscreen: function(t) {
    var n = this.element.ownerDocument;
    if (this.fulled && !(n.fullscreenElement || n.webkitFullscreenElement || n.mozFullScreenElement || n.msFullscreenElement)) {
      var i = n.documentElement;
      i.requestFullscreen ? He(t) ? i.requestFullscreen(t) : i.requestFullscreen() : i.webkitRequestFullscreen ? i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.msRequestFullscreen && i.msRequestFullscreen();
    }
  },
  exitFullscreen: function() {
    var t = this.element.ownerDocument;
    this.fulled && (t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement) && (t.exitFullscreen ? t.exitFullscreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.msExitFullscreen && t.msExitFullscreen());
  },
  change: function(t) {
    var n = this.options, i = this.pointers, a = i[Object.keys(i)[0]];
    if (a) {
      var s = a.endX - a.startX, o = a.endY - a.startY;
      switch (this.action) {
        case m3:
          (s !== 0 || o !== 0) && (this.pointerMoved = !0, this.move(s, o, t));
          break;
        case Ze:
          this.zoom(ha(i), !1, null, t);
          break;
        case l6: {
          this.action = "switched";
          var c = Math.abs(s);
          c > 1 && c > Math.abs(o) && (this.pointers = {}, s > 1 ? this.prev(n.loop) : s < -1 && this.next(n.loop));
          break;
        }
      }
      q(i, function(r) {
        r.startX = r.endX, r.startY = r.endY;
      });
    }
  },
  isSwitchable: function() {
    var t = this.imageData, n = this.viewerData;
    return this.length > 1 && t.x >= 0 && t.y >= 0 && t.width <= n.width && t.height <= n.height;
  }
}, ba = _e.Viewer, wa = function(e) {
  return function() {
    return e += 1, e;
  };
}(-1), u6 = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Yn(this, e), !t || t.nodeType !== 1)
      throw new Error("The first argument is required and must be an element.");
    this.element = t, this.options = ce({}, kt, He(n) && n), this.action = !1, this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zooming = !1, this.pointerMoved = !1, this.id = wa(), this.init();
  }
  return Xn(e, [{
    key: "init",
    value: function() {
      var n = this, i = this.element, a = this.options;
      if (!i[L]) {
        i[L] = this, a.focus && !a.keyboard && (a.focus = !1);
        var s = i.localName === "img", o = [];
        if (q(s ? [i] : i.querySelectorAll("img"), function(u) {
          F(a.filter) ? a.filter.call(n, u) && o.push(u) : n.getImageURL(u) && o.push(u);
        }), this.isImg = s, this.length = o.length, this.images = o, this.initBody(), Oe(document.createElement(L).style.transition) && (a.transition = !1), a.inline) {
          var c = 0, r = function() {
            if (c += 1, c === n.length) {
              var d;
              n.initializing = !1, n.delaying = {
                abort: function() {
                  clearTimeout(d);
                }
              }, d = setTimeout(function() {
                n.delaying = !1, n.build();
              }, 0);
            }
          };
          this.initializing = {
            abort: function() {
              q(o, function(d) {
                d.complete || (W(d, me, r), W(d, Ie, r));
              });
            }
          }, q(o, function(u) {
            if (u.complete)
              r();
            else {
              var d, h;
              C(u, me, d = function() {
                W(u, Ie, h), r();
              }, {
                once: !0
              }), C(u, Ie, h = function() {
                W(u, me, d), r();
              }, {
                once: !0
              });
            }
          });
        } else
          C(i, qe, this.onStart = function(u) {
            var d = u.target;
            d.localName === "img" && (!F(a.filter) || a.filter.call(n, d)) && n.view(n.images.indexOf(d));
          });
      }
    }
  }, {
    key: "build",
    value: function() {
      if (!this.ready) {
        var n = this.element, i = this.options, a = n.parentNode, s = document.createElement("div");
        s.innerHTML = Zn;
        var o = s.querySelector(".".concat(L, "-container")), c = o.querySelector(".".concat(L, "-title")), r = o.querySelector(".".concat(L, "-toolbar")), u = o.querySelector(".".concat(L, "-navbar")), d = o.querySelector(".".concat(L, "-button")), h = o.querySelector(".".concat(L, "-canvas"));
        if (this.parent = a, this.viewer = o, this.title = c, this.toolbar = r, this.navbar = u, this.button = d, this.canvas = h, this.footer = o.querySelector(".".concat(L, "-footer")), this.tooltipBox = o.querySelector(".".concat(L, "-tooltip")), this.player = o.querySelector(".".concat(L, "-player")), this.list = o.querySelector(".".concat(L, "-list")), o.id = "".concat(L).concat(this.id), c.id = "".concat(L, "Title").concat(this.id), S(c, i.title ? h3(Array.isArray(i.title) ? i.title[0] : i.title) : Le), S(u, i.navbar ? h3(i.navbar) : Le), i3(d, Le, !i.button), i.keyboard && d.setAttribute("tabindex", 0), i.backdrop && (S(o, "".concat(L, "-backdrop")), !i.inline && i.backdrop !== "static" && $3(h, g3, "hide")), t3(i.className) && i.className && i.className.split(V3).forEach(function(V) {
          S(o, V);
        }), i.toolbar) {
          var p = document.createElement("ul"), z = He(i.toolbar), g = d3.slice(0, 3), _ = d3.slice(7, 9), x = d3.slice(9);
          z || S(r, h3(i.toolbar)), q(z ? i.toolbar : d3, function(V, K) {
            var ee = z && He(V), ne = z ? B3(K) : V, j = ee && !Oe(V.show) ? V.show : V;
            if (!(!j || !i.zoomable && g.indexOf(ne) !== -1 || !i.rotatable && _.indexOf(ne) !== -1 || !i.scalable && x.indexOf(ne) !== -1)) {
              var I = ee && !Oe(V.size) ? V.size : V, G = ee && !Oe(V.click) ? V.click : V, J = document.createElement("li");
              i.keyboard && J.setAttribute("tabindex", 0), J.setAttribute("role", "button"), S(J, "".concat(L, "-").concat(ne)), F(G) || $3(J, g3, ne), U(j) && S(J, h3(j)), ["small", "large"].indexOf(I) !== -1 ? S(J, "".concat(L, "-").concat(I)) : ne === "play" && S(J, "".concat(L, "-large")), F(G) && C(J, qe, G), p.appendChild(J);
            }
          }), r.appendChild(p);
        } else
          S(r, Le);
        if (!i.rotatable) {
          var k = r.querySelectorAll('li[class*="rotate"]');
          S(k, Je), q(k, function(V) {
            r.appendChild(V);
          });
        }
        if (i.inline)
          S(d, Gn), pe(o, {
            zIndex: i.zIndexInline
          }), window.getComputedStyle(a).position === "static" && pe(a, {
            position: "relative"
          }), a.insertBefore(o, n.nextSibling);
        else {
          S(d, Kn), S(o, S3), S(o, v3), S(o, Le), pe(o, {
            zIndex: i.zIndex
          });
          var Y = i.container;
          t3(Y) && (Y = n.ownerDocument.querySelector(Y)), Y || (Y = this.body), Y.appendChild(o);
        }
        if (i.inline && (this.render(), this.bind(), this.isShown = !0), this.ready = !0, F(i.ready) && C(n, Dt, i.ready, {
          once: !0
        }), te(n, Dt) === !1) {
          this.ready = !1;
          return;
        }
        this.ready && i.inline && this.view(this.index);
      }
    }
    /**
     * Get the no conflict viewer class.
     * @returns {Viewer} The viewer class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Viewer = ba, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      ce(kt, He(n) && n);
    }
  }]), e;
}();
ce(u6.prototype, ma, va, pa, ga, ya);
const Ke = document.createElement("ul"), re = new u6(Ke, {
  button: !1,
  title: !1
}), Jt = {
  install(e) {
    const t = {};
    t.show = async ({
      imgs: n,
      // [{ url: 'xxxx.jpg' }, { url: 'xxxx.jpg' }]
      index: i
      // 0
    }) => {
      for (var a = Ke.lastElementChild; a; )
        Ke.removeChild(a), a = Ke.lastElementChild;
      n.forEach((s) => {
        const { url: o } = s, c = document.createElement("li"), r = document.createElement("img");
        r.src = o, c.append(r), Ke.append(c);
      }), n.length <= 1 ? (re.options.navbar = !1, re.navbar && (re.navbar.style.display = "none")) : (re.options.navbar = !0, re.navbar && (re.navbar.style.display = "block")), re.navbar && (re.navbar.querySelector(".viewer-list").style.opacity = 0), re.update(), re.view(i), await C3(500), re.navbar && (re.navbar.querySelector(".viewer-list").style.opacity = 1);
    }, t.hide = () => {
      re.hide();
    }, e.provide("$viewer", t), window.$viewer = t;
  }
};
window._iconfont_svg_string_3491565 = '<svg><symbol id="book-2-fill" viewBox="0 0 1024 1024"><path d="M896 768H256a42.666667 42.666667 0 0 0 0 85.333333h640v85.333334H256a128 128 0 0 1-128-128V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334h682.666667v682.666667z m-213.333333-384V298.666667H341.333333v85.333333h341.333334z"  ></path></symbol><symbol id="book-read-fill" viewBox="0 0 1024 1024"><path d="M85.333333 170.368A42.666667 42.666667 0 0 1 127.658667 128h768.682666c23.381333 0 42.325333 18.986667 42.325334 42.368v683.264a42.666667 42.666667 0 0 1-42.325334 42.368H127.658667A42.368 42.368 0 0 1 85.333333 853.632V170.368zM512 213.333333v597.333334h341.333333V213.333333h-341.333333z m42.666667 85.333334h256v85.333333h-256V298.666667z m0 128h256v85.333333h-256v-85.333333z"  ></path></symbol><symbol id="lock-2-fill" viewBox="0 0 1024 1024"><path d="M768 341.333333h85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v512a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V384a42.666667 42.666667 0 0 1 42.666667-42.666667h85.333333V298.666667a256 256 0 1 1 512 0v42.666666z m-298.666667 329.898667V768h85.333334v-96.768a85.333333 85.333333 0 1 0-85.333334 0zM682.666667 341.333333V298.666667a170.666667 170.666667 0 1 0-341.333334 0v42.666666h341.333334z"  ></path></symbol><symbol id="lock-2-line" viewBox="0 0 1024 1024"><path d="M256 341.333333V298.666667a256 256 0 1 1 512 0v42.666666h85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v512a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V384a42.666667 42.666667 0 0 1 42.666667-42.666667h85.333333z m554.666667 85.333334H213.333333v426.666666h597.333334V426.666667z m-341.333334 244.565333a85.333333 85.333333 0 1 1 85.333334 0V768h-85.333334v-96.768zM341.333333 341.333333h341.333334V298.666667a170.666667 170.666667 0 1 0-341.333334 0v42.666666z"  ></path></symbol><symbol id="youtube" viewBox="0 0 1024 1024"><path d="M759.466667 187.349333c-55.765333-3.797333-145.493333-6.016-246.272-6.016-99.456 0-191.744 2.261333-246.869334 6.016-178.645333 12.202667-179.285333 156.928-180.096 324.864 0.810667 167.509333 1.450667 312.192 180.138667 324.48 55.253333 3.712 147.669333 5.973333 247.210667 5.973334h0.042666c100.650667 0 190.250667-2.176 245.888-5.973334 178.645333-12.245333 179.285333-156.970667 180.096-324.906666-0.853333-167.552-1.536-312.277333-180.138666-324.437334z m-5.845334 564.181334c-52.949333 3.626667-142.72 5.802667-240.042666 5.802666h-0.042667c-97.706667 0-187.989333-2.176-241.408-5.802666-79.36-5.461333-99.626667-29.696-100.565333-239.317334 0.938667-210.048 21.205333-234.325333 100.565333-239.701333 53.290667-3.669333 143.402667-5.845333 241.024-5.845333 97.450667 0 187.349333 2.176 240.469333 5.845333 79.36 5.376 99.626667 29.610667 100.565334 239.274667-0.938667 210.090667-21.205333 234.325333-100.565334 239.744z" fill="" ></path><path d="M416.896 640l256-128.256-256-127.744z" fill="" ></path></symbol><symbol id="bilibili-line" viewBox="0 0 1024 1024"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"  ></path></symbol><symbol id="drag-move-2-fill" viewBox="0 0 1024 1024"><path d="M768 469.333333V341.333333l170.666667 170.666667-170.666667 170.666667v-128h-213.333333v213.333333h128l-170.666667 170.666667-170.666667-170.666667h128v-213.333333H256v128l-170.666667-170.666667 170.666667-170.666667v128h213.333333V256H341.333333l170.666667-170.666667 170.666667 170.666667h-128v213.333333z"  ></path></symbol><symbol id="skip-next" viewBox="0 0 1024 1024"><path d="M682.666667 768h85.333333V256h-85.333333M256 768l362.666667-256L256 256v512z" fill="" ></path></symbol><symbol id="skip-previous" viewBox="0 0 1024 1024"><path d="M256 768V256h85.333333v512H256m149.333333-256L768 256v512l-362.666667-256z" fill="" ></path></symbol><symbol id="pause-fill" viewBox="0 0 1024 1024"><path d="M256 213.333333h85.333333v597.333334H256V213.333333z m426.666667 0h85.333333v597.333334h-85.333333V213.333333z"  ></path></symbol><symbol id="repeat-2-line" viewBox="0 0 1024 1024"><path d="M341.333333 853.333333v82.432a21.333333 21.333333 0 0 1-34.986666 16.426667l-175.786667-146.474667A21.333333 21.333333 0 0 1 144.298667 768H768a85.333333 85.333333 0 0 0 85.333333-85.333333V341.333333h85.333334v341.333334a170.666667 170.666667 0 0 1-170.666667 170.666666H341.333333z m341.333334-682.666666V88.234667a21.333333 21.333333 0 0 1 34.986666-16.426667l175.786667 146.474667a21.333333 21.333333 0 0 1-13.696 37.717333H256a85.333333 85.333333 0 0 0-85.333333 85.333333v341.333334H85.333333V341.333333a170.666667 170.666667 0 0 1 170.666667-170.666666h426.666667z"  ></path></symbol><symbol id="repeat-one-fill" viewBox="0 0 1024 1024"><path d="M341.333333 853.333333v82.432a21.333333 21.333333 0 0 1-34.986666 16.426667l-175.786667-146.474667A21.333333 21.333333 0 0 1 144.298667 768H768a85.333333 85.333333 0 0 0 85.333333-85.333333V341.333333h85.333334v341.333334a170.666667 170.666667 0 0 1-170.666667 170.666666H341.333333z m341.333334-682.666666V88.234667a21.333333 21.333333 0 0 1 34.986666-16.426667l175.786667 146.474667a21.333333 21.333333 0 0 1-13.696 37.717333H256a85.333333 85.333333 0 0 0-85.333333 85.333333v341.333334H85.333333V341.333333a170.666667 170.666667 0 0 1 170.666667-170.666666h426.666667z m-213.333334 170.666666h85.333334v341.333334h-85.333334v-256H384V384l85.333333-42.666667z"  ></path></symbol><symbol id="shuffle-fill" viewBox="0 0 1024 1024"><path d="M768 763.008V682.666667l213.333333 128-213.333333 128v-89.173334a384 384 0 0 1-298.538667-228.906666L469.333333 620.373333l-0.128 0.256A384 384 0 0 1 116.266667 853.333333H85.333333v-85.333333h30.933334a298.666667 298.666667 0 0 0 274.517333-181.034667L422.912 512l-32.128-74.965333A298.666667 298.666667 0 0 0 116.266667 256H85.333333V170.666667h30.933334a384 384 0 0 1 352.938666 232.746666L469.333333 403.626667l0.128-0.256A384 384 0 0 1 768 174.506667V85.333333l213.333333 128-213.333333 128V260.992a298.666667 298.666667 0 0 0-220.117333 176.042667L515.754667 512l32.128 74.965333A298.666667 298.666667 0 0 0 768 763.008z"  ></path></symbol><symbol id="f-vip" viewBox="0 0 1024 1024"><path d="M941.127 431.9L806.66 170.175a37.002 37.002 0 0 0-32.911-20.091H252.053a36.998 36.998 0 0 0-32.825 19.927L83.219 431.506a37 37 0 0 0 6.084 42.645L484.97 887.919a37.001 37.001 0 0 0 26.716 11.428h0.025a37 37 0 0 0 26.707-11.393l396.506-413.539a36.996 36.996 0 0 0 6.203-42.515z m-210.42 41.652L538.634 673.876a37 37 0 0 1-26.707 11.393h-0.025a36.998 36.998 0 0 1-26.716-11.429L293.521 473.406c-14.123-14.769-13.599-38.19 1.17-52.313 14.769-14.124 38.19-13.599 52.313 1.17l164.96 172.507 165.33-172.432c14.142-14.75 37.565-15.242 52.314-1.1 14.749 14.142 15.242 37.564 1.099 52.314z"  ></path></symbol><symbol id="picfail-fill" viewBox="0 0 1024 1024"><path d="M915.12500029 212.00000029H503.46874971a4.68749971 4.68749971 0 0 0-4.12499971 2.48437442l-44.81250029 85.87500029a4.40624971 4.40624971 0 0 0 0 4.12499971l46.546875 98.15625a4.68749971 4.68749971 0 0 1-0.37499942 4.68750058l-100.31250058 150.14062442a0.93750029 0.93750029 0 0 1-1.6875-0.65624942l21.234375-137.06250029a4.68749971 4.68749971 0 0 0-0.74999971-3.375L357.3125 326.09375a4.68749971 4.68749971 0 0 1-0.65625029-3.84374971l27.703125-104.39062558a4.68749971 4.68749971 0 0 0-4.68749971-5.85937442H99.50000029a4.68749971 4.68749971 0 0 0-4.68750058 4.68749971v590.625a4.68749971 4.68749971 0 0 0 4.68750058 4.68749971h815.625a4.68749971 4.68749971 0 0 0 4.68749971-4.68749971V216.6875a4.68749971 4.68749971 0 0 0-4.68749971-4.68749971zM235.43749971 309.54687471a42.609375 42.609375 0 1 1-42.56249942 42.609375A42.609375 42.609375 0 0 1 235.43749971 309.54687471z m637.50000058 273.70312558l-41.53125058 37.96875a4.68749971 4.68749971 0 0 1-6.609375-0.32812558l-165.18749942-180.84375a4.68749971 4.68749971 0 0 0-6.890625 0L399.5 720.78125029a4.68749971 4.68749971 0 0 1-6.46875 0.51562442l-150.46875-123.1875a4.68749971 4.68749971 0 0 0-5.95312471 0l-49.78125 40.78125a4.68749971 4.68749971 0 0 1-6.56250029-0.65624942l-35.67187529-43.54687529a4.68749971 4.68749971 0 0 1 0.65625029-6.56250029l91.35937529-74.99999971a4.68749971 4.68749971 0 0 1 5.95312471 0l143.67187529 117.5625a4.68749971 4.68749971 0 0 0 6.42187442-0.46874971L652.625 342.50000029a4.68749971 4.68749971 0 0 1 6.93749971 0l214.07812558 234.37499942a4.68749971 4.68749971 0 0 1-0.703125 6.37500058z"  ></path></symbol><symbol id="reduce" viewBox="0 0 1024 1024"><path d="M192 448l640 0 0 128-640 0 0-128Z"  ></path></symbol><symbol id="eye-line" viewBox="0 0 1024 1024"><path d="M512 128c230.058667 0 421.461333 165.546667 461.610667 384-40.106667 218.453333-231.552 384-461.610667 384-230.058667 0-421.461333-165.546667-461.610667-384C90.496 293.546667 281.941333 128 512 128z m0 682.666667a384.213333 384.213333 0 0 0 374.485333-298.666667 384.213333 384.213333 0 0 0-748.970666 0A384.213333 384.213333 0 0 0 512 810.666667z m0-106.666667a192 192 0 1 1 0-384 192 192 0 0 1 0 384z m0-85.333333a106.666667 106.666667 0 1 0 0-213.333334 106.666667 106.666667 0 0 0 0 213.333334z"  ></path></symbol><symbol id="download-cloud-fill" viewBox="0 0 1024 1024"><path d="M298.666667 895.189333a277.333333 277.333333 0 0 1-125.269334-512 341.376 341.376 0 0 1 677.205334 0 277.333333 277.333333 0 0 1-125.269334 512V896H298.666667v-0.810667zM554.666667 512V341.333333h-85.333334v170.666667H341.333333l170.666667 213.333333 170.666667-213.333333h-128z"  ></path></symbol><symbol id="download-2-line" viewBox="0 0 1024 1024"><path d="M554.666667 426.666667h213.333333l-256 256-256-256h213.333333V128h85.333334v298.666667z m-384 384h682.666666v-298.666667h85.333334v341.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667v-341.333333h85.333334v298.666667z"  ></path></symbol><symbol id="video-camera" viewBox="0 0 1024 1024"><path d="M965.68888853 284.4444448h-4.096a45.51111147 45.51111147 0 0 0-31.85777707 13.19822187L806.4 420.97777813V284.4444448a91.02222187 91.02222187 0 0 0-91.02222187-91.02222293H169.2444448a91.02222187 91.02222187 0 0 0-91.02222294 91.02222293v455.1111104a91.02222187 91.02222187 0 0 0 91.02222294 91.02222293h546.13333333a91.02222187 91.02222187 0 0 0 91.02222187-91.02222293v-136.53333333l123.33511146 123.33511146a45.51111147 45.51111147 0 0 0 31.85777707 13.19822187h4.096a22.7555552 22.7555552 0 0 0 22.75555627-22.7555552v-409.6a22.7555552 22.7555552 0 0 0-22.75555627-22.7555552z m-728.17777707 176.5831104a22.7555552 22.7555552 0 0 1-22.75555626-22.7555552v-34.5884448a22.7555552 22.7555552 0 0 1 22.75555626-22.7555552h182.04444374a22.7555552 22.7555552 0 0 1 22.75555626 22.7555552v34.5884448a22.7555552 22.7555552 0 0 1-22.75555626 22.7555552z"  ></path></symbol><symbol id="bill-fill" viewBox="0 0 1024 1024"><path d="M853.333333 938.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v768a42.666667 42.666667 0 0 1-42.666667 42.666667zM341.333333 384v85.333333h341.333334V384H341.333333z m0 170.666667v85.333333h341.333334v-85.333333H341.333333z"  ></path></symbol><symbol id="reply-fill" viewBox="0 0 1024 1024"><path d="M469.333333 853.333333L42.666667 512l426.666666-341.333333v213.333333c235.648 0 426.666667 191.018667 426.666667 426.666667 0 11.648-0.426667 23.168-1.365333 34.56A384 384 0 0 0 554.666667 640h-85.333334v213.333333z"  ></path></symbol><symbol id="layout-grid-fill" viewBox="0 0 1024 1024"><path d="M938.666667 554.624V853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-341.333333v-341.376h384z m-469.333334 0V896H128a42.666667 42.666667 0 0 1-42.666667-42.666667v-298.709333h384zM469.333333 128v341.290667H85.333333V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h341.333333z m426.666667 0a42.666667 42.666667 0 0 1 42.666667 42.666667v298.624h-384V128h341.333333z"  ></path></symbol><symbol id="add1" viewBox="0 0 1024 1024"><path d="M222.7181964 576.31578117L447.72399358 576.27600642 447.68421883 801.2818036 576.31578117 801.2818036 576.27600642 576.27600642 801.2818036 576.31578117 801.2818036 447.68421883 576.27600642 447.72399358 576.31578117 222.7181964 447.68421883 222.7181964 447.72399358 447.72399358 222.7181964 447.68421883Z"  ></path></symbol><symbol id="play-fill" viewBox="0 0 1024 1024"><path d="M826.709333 529.749333L374.485333 831.232A21.333333 21.333333 0 0 1 341.333333 813.482667V210.517333a21.333333 21.333333 0 0 1 33.152-17.749333l452.224 301.482667a21.333333 21.333333 0 0 1 0 35.498666z"  ></path></symbol><symbol id="share-forward-fill" viewBox="0 0 1024 1024"><path d="M554.666667 597.333333h-85.333334a383.957333 383.957333 0 0 0-339.968 205.226667A432.469333 432.469333 0 0 1 128 768C128 532.352 319.018667 341.333333 554.666667 341.333333V128l426.666666 341.333333-426.666666 341.333334v-213.333334z"  ></path></symbol><symbol id="edit-fill" viewBox="0 0 1024 1024"><path d="M309.034667 768H128v-181.034667L615.893333 99.072a42.666667 42.666667 0 0 1 60.330667 0l120.704 120.704a42.666667 42.666667 0 0 1 0 60.330667L309.034667 768zM128 853.333333h768v85.333334H128v-85.333334z"  ></path></symbol><symbol id="send-backward" viewBox="0 0 1024 1024"><path d="M597.333333 128a42.666667 42.666667 0 0 1 42.666667 42.666667v213.333333h213.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v426.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H426.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-213.333333H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h426.666666z m-42.666666 85.333333H213.333333v341.333334h170.666667v-128a42.666667 42.666667 0 0 1 42.666667-42.666667h128V213.333333z"  ></path></symbol><symbol id="questionnaire-fill" viewBox="0 0 1024 1024"><path d="M275.413333 810.666667L85.333333 960V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h768a42.666667 42.666667 0 0 1 42.666667 42.666667v597.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H275.413333zM469.333333 597.333333v85.333334h85.333334v-85.333334h-85.333334zM365.525333 376.021333l83.712 16.768A64 64 0 1 1 512 469.333333h-42.666667v85.333334h42.666667a149.333333 149.333333 0 1 0-146.474667-178.645334z"  ></path></symbol><symbol id="sailboat-fill" viewBox="0 0 1024 1024"><path d="M128 768h768a21.333333 21.333333 0 0 1 17.066667 34.133333l-89.6 119.466667a42.666667 42.666667 0 0 1-34.133334 17.066667h-554.666666a42.666667 42.666667 0 0 1-34.133334-17.066667l-89.6-119.466667A21.333333 21.333333 0 0 1 128 768zM640 103.466667V640a42.666667 42.666667 0 0 1-42.666667 42.666667H172.373333a21.333333 21.333333 0 0 1-16.64-34.645334L602.026667 90.154667a21.333333 21.333333 0 0 1 37.973333 13.312z"  ></path></symbol><symbol id="home-6-fill" viewBox="0 0 1024 1024"><path d="M896 853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V404.906667a42.666667 42.666667 0 0 1 16.469333-33.706667l341.333334-265.472a42.666667 42.666667 0 0 1 52.394666 0l341.333334 265.472a42.666667 42.666667 0 0 1 16.469333 33.706667V853.333333zM298.666667 640v85.333333h426.666666v-85.333333H298.666667z"  ></path></symbol><symbol id="magic-fill" viewBox="0 0 1024 1024"><path d="M649.557333 661.674667l-94.421333 198.4a25.6 25.6 0 0 1-41.685333 6.613333l-151.125334-159.530667a25.6 25.6 0 0 0-15.232-7.765333l-217.898666-28.501333a25.6 25.6 0 0 1-19.157334-37.589334l105.045334-193.024a25.6 25.6 0 0 0 2.645333-16.896L177.493333 207.36a25.6 25.6 0 0 1 29.866667-29.866667l216.021333 40.234667a25.6 25.6 0 0 0 16.896-2.645333l193.024-105.045334a25.6 25.6 0 0 1 37.589334 19.2l28.501333 217.856a25.6 25.6 0 0 0 7.765333 15.232l159.530667 151.125334a25.6 25.6 0 0 1-6.613333 41.685333l-198.4 94.421333a25.6 25.6 0 0 0-12.117334 12.117334z m34.005334 82.218666l60.330666-60.330666 181.034667 180.992-60.373333 60.373333-180.992-181.034667z"  ></path></symbol><symbol id="folder-5-fill" viewBox="0 0 1024 1024"><path d="M572.330667 213.333333H853.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667H128V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h316.330666l85.333334 85.333333zM131.712 384h760.576a42.666667 42.666667 0 0 1 42.538667 46.208l-35.584 426.666667a42.666667 42.666667 0 0 1-42.496 39.125333H167.253333a42.666667 42.666667 0 0 1-42.496-39.125333l-35.584-426.666667A42.666667 42.666667 0 0 1 131.712 384z"  ></path></symbol><symbol id="play-list-2-fill" viewBox="0 0 1024 1024"><path d="M938.666667 768v85.333333H85.333333v-85.333333h853.333334zM85.333333 149.333333l341.333334 213.333334-341.333334 213.333333v-426.666667zM938.666667 469.333333v85.333334H512v-85.333334h426.666667z m0-298.666666v85.333333H512V170.666667h426.666667z"  ></path></symbol><symbol id="eraser-fill" viewBox="0 0 1024 1024"><path d="M597.333333 810.666667h298.666667v85.333333h-384l-170.581333 0.085333-276.778667-276.778666a42.666667 42.666667 0 0 1 0-60.330667L517.12 106.410667a42.666667 42.666667 0 0 1 60.373333 0l331.861334 331.861333a42.666667 42.666667 0 0 1 0 60.330667L597.333333 810.666667z m70.698667-191.36l150.826667-150.869334-271.530667-271.530666-150.826667 150.869333 271.530667 271.530667z"  ></path></symbol><symbol id="arrow-right-up-fill" viewBox="0 0 1024 1024"><path d="M556.8 527.36l-241.322667 241.408-60.330666-60.373333 241.365333-241.322667-211.2-211.2H768V738.56z"  ></path></symbol><symbol id="delete-bin-7-fill" viewBox="0 0 1024 1024"><path d="M298.666667 256V128a42.666667 42.666667 0 0 1 42.666666-42.666667h341.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v128h213.333334v85.333333h-85.333334v554.666667a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V341.333333H85.333333V256h213.333334z m85.333333-85.333333v85.333333h256V170.666667H384z"  ></path></symbol><symbol id="step-backward" viewBox="0 0 1024 1024"><path d="M400.3771142 523.50793396l260.17435827 204.37547564C670.22560526 735.48204069 684.44927585 728.63295291 684.44927585 716.37547564v-408.75230915c0-12.25476153-14.22367059-19.10520718-23.89780338-11.50657609l-260.17435827 204.37479671c-7.47506507 5.87278046-7.47506507 17.14444532 0 23.01654685M388.43398344 750.98482322h-43.45178604a5.43147326 5.43147326 0 0 1-5.43147325-5.43147325V278.44665002a5.43147326 5.43147326 0 0 1 5.43147325-5.43147324h43.45178604a5.43147326 5.43147326 0 0 1 5.43147326 5.43147325v467.10669995a5.43147326 5.43147326 0 0 1-5.43147326 5.43147324"  ></path></symbol><symbol id="step-forward" viewBox="0 0 1024 1024"><path d="M623.6228858 523.50793396l-260.17435827 204.37547564C353.77439474 735.48204069 339.55072415 728.63295291 339.55072415 716.37547564v-408.75230915c0-12.25476153 14.22367059-19.10520718 23.89780338-11.50657609l260.17435827 204.37479671c7.47506507 5.87278046 7.47506507 17.14444532 0 23.01654685M635.56601656 750.98482322h43.45178604a5.43147326 5.43147326 0 0 0 5.43147325-5.43147325V278.44665002a5.43147326 5.43147326 0 0 0-5.43147325-5.43147324h-43.45178604a5.43147326 5.43147326 0 0 0-5.43147326 5.43147325v467.10669995a5.43147326 5.43147326 0 0 0 5.43147326 5.43147324"  ></path></symbol><symbol id="enlarge" viewBox="0 0 1024 1024"><path d="M882.78857422 141.21142578H581.52285766l115.87142945 115.87142945-139.04571533 139.04571532 69.52285767 69.52285767 139.04571532-139.04571533 115.87142945 115.87142945zM882.78857422 882.78857422V581.52285766l-115.87142945 115.87142945-139.04571532-139.04571533-69.52285767 69.52285767 139.04571533 139.04571532-115.87142945 115.87142945zM141.21142578 882.78857422h301.26571656l-115.87142945-115.87142945 139.04571534-139.04571532-69.52285768-69.52285767-139.04571532 139.04571533-115.87142945-115.87142945zM141.21142578 141.21142578v301.26571656l115.87142945-115.87142945 139.04571532 139.04571534 69.52285767-69.52285768-139.04571533-139.04571532 115.87142945-115.87142945z"  ></path></symbol><symbol id="pie-chart-2-fill" viewBox="0 0 1024 1024"><path d="M469.333333 87.466667V554.666667h467.2c-21.376 215.594667-203.306667 384-424.533333 384-235.648 0-426.666667-191.018667-426.666667-426.666667 0-221.226667 168.405333-403.157333 384-424.533333z m85.333334-64.298667C791.594667 43.52 980.437333 232.405333 1000.832 469.333333H554.666667V23.168z"  ></path></symbol><symbol id="pencil-fill" viewBox="0 0 1024 1024"><path d="M550.4 292.608l180.992 181.034667L308.992 896H128v-181.034667l422.4-422.4z m60.330667-60.330667l90.496-90.538666a42.666667 42.666667 0 0 1 60.330666 0l120.704 120.704a42.666667 42.666667 0 0 1 0 60.330666l-90.538666 90.496-180.992-180.992z"  ></path></symbol><symbol id="table-fill" viewBox="0 0 1024 1024"><path d="M640 896H384V426.666667h256v469.333333z m85.333333 0V426.666667h213.333334v426.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-170.666667zM298.666667 896H128a42.666667 42.666667 0 0 1-42.666667-42.666667V426.666667h213.333334v469.333333zM938.666667 341.333333H85.333333V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h768a42.666667 42.666667 0 0 1 42.666667 42.666667v170.666666z"  ></path></symbol><symbol id="terminal-box-fill" viewBox="0 0 1024 1024"><path d="M128 128h768a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m384 512v85.333333h256v-85.333333h-256z m-153.002667-128l-120.661333 120.661333L298.666667 693.034667 479.701333 512 298.666667 330.965333 238.336 391.338667 358.997333 512z"  ></path></symbol><symbol id="bill-line" viewBox="0 0 1024 1024"><path d="M853.333333 938.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v768a42.666667 42.666667 0 0 1-42.666667 42.666667z m-42.666666-85.333334V170.666667H213.333333v682.666666h597.333334zM341.333333 384h341.333334v85.333333H341.333333V384z m0 170.666667h341.333334v85.333333H341.333333v-85.333333z"  ></path></symbol><symbol id="exchange-fill" viewBox="0 0 1024 1024"><path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-554.666667H341.333333v85.333333h384l-213.333333-213.333333v128z m-213.333333 170.666667l213.333333 213.333333v-128h170.666667v-85.333333H298.666667z"  ></path></symbol><symbol id="compass-fill" viewBox="0 0 1024 1024"><path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m149.333333-576l-213.333333 85.333333-85.333333 213.333333 213.333333-85.333333 85.333333-213.333333z"  ></path></symbol><symbol id="task-line" viewBox="0 0 1024 1024"><path d="M896 127.658667v768.682666a42.666667 42.666667 0 0 1-42.368 42.325334H170.368A42.368 42.368 0 0 1 128 896.341333V127.658667A42.666667 42.666667 0 0 1 170.368 85.333333h683.264c23.381333 0 42.368 18.944 42.368 42.325334zM810.666667 170.666667H213.333333v682.666666h597.333334V170.666667z m-328.832 389.162666l181.034666-180.992 60.330667 60.330667-241.365333 241.365333-165.973334-165.973333 60.373334-60.330667 105.6 105.6z"  ></path></symbol><symbol id="todo-line" viewBox="0 0 1024 1024"><path d="M725.333333 85.333333h128a42.666667 42.666667 0 0 1 42.666667 42.666667v768a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h128V0h85.333333v85.333333h256V0h85.333333v85.333333z m0 85.333334v85.333333h-85.333333V170.666667H384v85.333333H298.666667V170.666667H213.333333v682.666666h597.333334V170.666667h-85.333334zM298.666667 341.333333h426.666666v85.333334H298.666667V341.333333z m0 170.666667h426.666666v85.333333H298.666667v-85.333333z"  ></path></symbol><symbol id="search-line" viewBox="0 0 1024 1024"><path d="M769.322667 708.992l182.741333 182.698667-60.373333 60.373333-182.698667-182.741333A382.293333 382.293333 0 0 1 469.333333 853.333333c-211.968 0-384-172.032-384-384s172.032-384 384-384 384 172.032 384 384a382.293333 382.293333 0 0 1-84.010666 239.658667z m-85.589334-31.658667A297.685333 297.685333 0 0 0 768 469.333333c0-165.034667-133.674667-298.666667-298.666667-298.666666-165.034667 0-298.666667 133.632-298.666666 298.666666 0 164.992 133.632 298.666667 298.666666 298.666667a297.685333 297.685333 0 0 0 208-84.266667l6.4-6.4z"  ></path></symbol><symbol id="product1" viewBox="0 0 1024 1024"><path d="M170.666667 353.578667l314.666666 135.253333v395.306667L208.682667 761.322667A64 64 0 0 1 170.666667 702.805333v-349.226666z m682.666666-8.170667v357.397333a64 64 0 0 1-38.016 58.496L549.333333 879.402667V485.482667L853.333333 345.386667zM537.984 139.52l277.333333 123.157333c9.642667 4.266667 17.856 10.773333 24.149334 18.709334l-324.757334 150.4-334.72-143.872c6.613333-10.922667 16.533333-19.84 28.693334-25.237334l277.333333-123.157333a64 64 0 0 1 51.968 0z"  ></path></symbol><symbol id="product" viewBox="0 0 1024 1024"><path d="M537.984 139.52l277.333333 123.178667A64 64 0 0 1 853.333333 321.194667v381.610666a64 64 0 0 1-38.016 58.496l-277.333333 123.157334a64 64 0 0 1-51.968 0l-277.333333-123.157334A64 64 0 0 1 170.666667 702.805333V321.194667a64 64 0 0 1 38.016-58.496l277.333333-123.157334a64 64 0 0 1 51.968 0zM234.666667 381.44v321.365333l250.666666 111.317334V488.853333L234.666667 381.44z m554.666666 2.304l-240 102.826667V809.386667L789.333333 702.805333V383.744zM512 198.037333l-266.581333 118.378667 269.290666 115.413333 266.517334-114.24L512 198.037333z"  ></path></symbol><symbol id="navigation-line" viewBox="0 0 1024 1024"><path d="M211.84 217.429333l151.296 529.493334 129.706667-259.413334 240.512-96.213333L211.84 217.429333zM123.690667 98.133333l802.389333 267.434667a21.333333 21.333333 0 0 1 1.194667 40.064L554.666667 554.666667l-188.8 377.6a21.333333 21.333333 0 0 1-39.594667-3.669334L96.426667 124.202667A21.333333 21.333333 0 0 1 123.733333 98.133333z"  ></path></symbol><symbol id="navigation-fill" viewBox="0 0 1024 1024"><path d="M123.733333 98.133333l802.346667 267.434667a21.333333 21.333333 0 0 1 1.194667 40.064L554.666667 554.666667l-188.8 377.6a21.333333 21.333333 0 0 1-39.594667-3.669334L96.426667 124.202667A21.333333 21.333333 0 0 1 123.733333 98.133333z"  ></path></symbol><symbol id="yonghu" viewBox="0 0 1024 1024"><path d="M500 128.8c-95.2 5.6-173.6 83.2-180 178.4-7.2 112 80.8 205.6 191.2 205.6 106.4 0 192-86.4 192-192 0.8-110.4-92-198.4-203.2-192zM512 575.2c-128 0-383.2 64-383.2 192v96c0 17.6 14.4 32 32 32h702.4c17.6 0 32-14.4 32-32V766.4c0-127.2-255.2-191.2-383.2-191.2z"  ></path></symbol><symbol id="bxs-exit" viewBox="0 0 1024 1024"><path d="M213.418667 896h597.333333c47.061333 0 85.333333-38.272 85.333333-85.333333V213.333333c0-47.061333-38.272-85.333333-85.333333-85.333333h-597.333333c-47.061333 0-85.333333 38.272-85.333334 85.333333v256.042667H426.666667V298.666667l256 213.333333-256 213.333333v-170.624H128.085333V810.666667c0 47.061333 38.272 85.333333 85.333334 85.333333z"  ></path></symbol><symbol id="arrow-down-fill" viewBox="0 0 1024 1024"><path d="M554.666667 512h298.666666l-341.333333 341.333333-341.333333-341.333333h298.666666V170.666667h85.333334z"  ></path></symbol><symbol id="arrow-left-fill" viewBox="0 0 1024 1024"><path d="M512 554.666667v298.666666l-341.333333-341.333333 341.333333-341.333333v298.666666h341.333333v85.333334z"  ></path></symbol><symbol id="arrow-right-fill" viewBox="0 0 1024 1024"><path d="M512 554.666667H170.666667v-85.333334h341.333333V170.666667l341.333333 341.333333-341.333333 341.333333z"  ></path></symbol><symbol id="arrow-up-fill" viewBox="0 0 1024 1024"><path d="M554.666667 512v341.333333h-85.333334v-341.333333H170.666667l341.333333-341.333333 341.333333 341.333333z"  ></path></symbol><symbol id="eye-fill" viewBox="0 0 1024 1024"><path d="M50.389333 512C90.496 293.546667 281.941333 128 512 128c230.058667 0 421.461333 165.546667 461.610667 384-40.106667 218.453333-231.552 384-461.610667 384-230.058667 0-421.461333-165.546667-461.610667-384zM512 725.333333a213.333333 213.333333 0 1 0 0-426.666666 213.333333 213.333333 0 0 0 0 426.666666z m0-85.333333a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"  ></path></symbol><symbol id="file-copy-2-fill" viewBox="0 0 1024 1024"><path d="M298.666667 256V128a42.666667 42.666667 0 0 1 42.666666-42.666667h512a42.666667 42.666667 0 0 1 42.666667 42.666667v597.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-128v128c0 23.552-19.2 42.666667-42.965333 42.666667H170.965333A42.709333 42.709333 0 0 1 128 896l0.128-597.333333c0-23.552 19.2-42.666667 42.965333-42.666667H298.666667z m85.333333 0h341.333333v426.666667h85.333334V170.666667H384v85.333333z m-85.333333 213.333333v85.333334h256v-85.333334H298.666667z m0 170.666667v85.333333h256v-85.333333H298.666667z"  ></path></symbol><symbol id="delete-bin-6-fill" viewBox="0 0 1024 1024"><path d="M725.333333 170.666667h213.333334v85.333333h-85.333334v640a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V256H85.333333V170.666667h213.333334V85.333333h426.666666v85.333334zM384 384v341.333333h85.333333V384H384z m170.666667 0v341.333333h85.333333V384h-85.333333z"  ></path></symbol><symbol id="eye-off-fill" viewBox="0 0 1024 1024"><path d="M192.853333 253.184L59.434667 119.808l60.373333-60.373333 844.757333 844.8-60.373333 60.330666-141.226667-141.226666A467.157333 467.157333 0 0 1 512 896c-230.058667 0-421.461333-165.546667-461.610667-384a468.565333 468.565333 0 0 1 142.506667-258.816z m436.778667 436.821333l-62.464-62.464a128 128 0 0 1-170.709333-170.709333L333.994667 394.368a213.333333 213.333333 0 0 0 295.637333 295.637333zM340.224 160.426667C393.429333 139.52 451.413333 128 512 128c230.058667 0 421.461333 165.546667 461.610667 384a467.072 467.072 0 0 1-85.845334 195.925333l-164.693333-164.693333a213.333333 213.333333 0 0 0-242.346667-242.346667L340.224 160.469333z"  ></path></symbol><symbol id="close1" viewBox="0 0 1024 1024"><path d="M331.008 796.48L512 615.424 692.992 796.48 796.48 692.992 615.424 512 796.48 331.008 692.992 227.52 512 408.576 331.008 227.52 227.52 331.008 408.576 512 227.52 692.992Z"  ></path></symbol><symbol id="add" viewBox="0 0 1024 1024"><path d="M810.666667 554.666667l-256 0 0 256-85.333333 0 0-256L213.333333 554.666667l0-85.333333 256 0L469.333333 213.333333l85.333333 0 0 256 256 0L810.666667 554.666667z"  ></path></symbol><symbol id="check" viewBox="0 0 1024 1024"><path d="M384 691.2 204.8 512 145.066667 571.733333 384 810.666667 896 298.666667 836.266667 238.933333Z"  ></path></symbol><symbol id="close" viewBox="0 0 1024 1024"><path d="M810.666667 273.066667 750.933333 213.333333 512 452.266667 273.066667 213.333333 213.333333 273.066667 452.266667 512 213.333333 750.933333 273.066667 810.666667 512 571.733333 750.933333 810.666667 810.666667 750.933333 571.733333 512Z"  ></path></symbol><symbol id="down" viewBox="0 0 1024 1024"><path d="M315.733333 332.8 512 529.066667 708.266667 332.8 768 392.533333 512 648.533333 256 392.533333Z"  ></path></symbol><symbol id="left" viewBox="0 0 1024 1024"><path d="M657.066667 686.933333 460.8 490.666667 657.066667 294.4 597.333333 234.666667 341.333333 490.666667 597.333333 746.666667Z"  ></path></symbol><symbol id="right" viewBox="0 0 1024 1024"><path d="M366.933333 695.466667 563.2 503.466667 366.933333 307.2 426.666667 247.466667 682.666667 503.466667 426.666667 759.466667Z"  ></path></symbol><symbol id="up" viewBox="0 0 1024 1024"><path d="M315.733333 657.066667 512 460.8 708.266667 657.066667 768 597.333333 512 341.333333 256 597.333333Z"  ></path></symbol><symbol id="search" viewBox="0 0 1024 1024"><path d="M661.333333 597.333333l-34.133333 0-12.8-12.8c42.666667-46.933333 68.266667-110.933333 68.266667-179.2C682.666667 251.733333 558.933333 128 405.333333 128 251.733333 128 128 251.733333 128 405.333333S251.733333 682.666667 405.333333 682.666667c68.266667 0 132.266667-25.6 179.2-68.266667l12.8 12.8 0 34.133333 213.333333 213.333333 64-64L661.333333 597.333333zM405.333333 597.333333C298.666667 597.333333 213.333333 512 213.333333 405.333333S298.666667 213.333333 405.333333 213.333333C512 213.333333 597.333333 298.666667 597.333333 405.333333S512 597.333333 405.333333 597.333333z"  ></path></symbol><symbol id="loading" viewBox="0 0 1024 1024"><path d="M277.333333 759.466667C213.333333 695.466667 170.666667 610.133333 170.666667 512c0-187.733333 153.6-341.333333 341.333333-341.333333v85.333333c-140.8 0-256 115.2-256 256 0 72.533333 29.866667 140.8 81.066667 187.733333l-59.733334 59.733334z"  ></path></symbol><symbol id="loading1" viewBox="0 0 1024 1024"><path d="M379.733333 827.733333l68.266667-68.266666c21.333333 4.266667 42.666667 8.533333 68.266667 8.533333 140.8 0 256-115.2 256-256 0-21.333333-4.266667-46.933333-8.533334-68.266667l68.266667-68.266666c17.066667 42.666667 25.6 85.333333 25.6 132.266666 0 187.733333-153.6 341.333333-341.333333 341.333334-51.2 4.266667-98.133333-4.266667-136.533334-21.333334z m-183.466666-183.466666c-17.066667-42.666667-25.6-85.333333-25.6-132.266667 0-187.733333 153.6-341.333333 341.333333-341.333333 46.933333 0 93.866667 8.533333 132.266667 25.6l-68.266667 68.266666c-17.066667-4.266667-42.666667-8.533333-64-8.533333-140.8 0-256 115.2-256 256 0 21.333333 4.266667 46.933333 8.533333 68.266667l-68.266666 64z"  ></path></symbol><symbol id="check-2" viewBox="0 0 1024 1024"><path d="M287 437.00000029l-74.99999971 74.99999971 225 225L811.99999971 361.99999971l-74.99999971-74.99999971-299.99999971 299.99999971z"  ></path></symbol><symbol id="info-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 298.666667h-64v256h64V448z m0-106.666667h-64v64h64v-64z"  ></path></symbol><symbol id="browse" viewBox="0 0 1024 1024"><path d="M512 234.666667c131.946667 0 252.245333 80.512 360.874667 241.536a64 64 0 0 1 2.410666 67.712l-2.410666 3.882666-6.058667 8.853334C759.786667 711.765333 641.493333 789.333333 512 789.333333c-131.946667 0-252.245333-80.512-360.874667-241.536a64 64 0 0 1-2.410666-67.712l2.410666-3.882666 6.058667-8.853334C264.213333 312.234667 382.506667 234.666667 512 234.666667z m0 64c-105.770667 0-206.037333 65.749333-301.952 204.757333L204.181333 512l5.888 8.597333C306.069333 659.648 406.314667 725.333333 512 725.333333c105.770667 0 206.037333-65.749333 301.952-204.757333l5.866667-8.576-5.888-8.597333C717.930667 364.352 617.685333 298.666667 512 298.666667z m0 77.482666a141.482667 141.482667 0 1 1 0 282.944 141.482667 141.482667 0 0 1 0-282.944z m0 64a77.482667 77.482667 0 1 0 0 154.944 77.482667 77.482667 0 0 0 0-154.944z"  ></path></symbol><symbol id="code" viewBox="0 0 1024 1024"><path d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"  ></path></symbol><symbol id="editor1" viewBox="0 0 1024 1024"><path d="M694.037333 213.333333v64H234.666667v469.333334h512V512h64v234.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h459.370666z m136.746667 24.234667l45.098667 45.397333-343.722667 341.290667 0.128 0.128-46.592 1.578667 1.322667-47.274667 0.085333 0.106667 343.68-341.226667z"  ></path></symbol><symbol id="ellipsis" viewBox="0 0 1024 1024"><path d="M269.333333 448a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773334 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773333 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z"  ></path></symbol><symbol id="filter" viewBox="0 0 1024 1024"><path d="M764.266667 213.333333a64 64 0 0 1 49.557333 104.512L615.466667 560.426667v273.386666l-54.336-24.704V525.781333L764.266667 277.333333H243.925333l200.192 253.205334v225.450666l-57.941333-26.304v-169.237333l-192.448-243.413333A64 64 0 0 1 243.925333 213.333333h520.341334z"  ></path></symbol><symbol id="help" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m39.658667 426.666667v64h-59.946667l-0.021333-64h59.968z m-3.541334-316.757333c38.72 7.808 84.778667 44.736 84.778667 98.453333 0 53.738667-43.882667 74.069333-59.605333 84.117333-14.506667 9.28-20.672 19.882667-21.525334 31.189334l-0.106666 2.816V597.333333h-59.968v-79.338666c0-18.816 6.037333-32 22.826666-43.648l3.776-2.496 33.685334-22.4c21.482667-14.464 21.184-43.498667 7.893333-56.32a60.373333 60.373333 0 0 0-52.842667-13.546667c-37.376 7.338667-41.685333 33.706667-41.941333 59.306667v14.485333H405.333333c0-49.834667 5.717333-72.426667 32.298667-100.970667 29.781333-31.893333 71.744-37.013333 110.485333-29.162666z"  ></path></symbol><symbol id="link" viewBox="0 0 1024 1024"><path d="M618.24 439.381333a152.746667 152.746667 0 0 1 0 216l-135.893333 135.893334a163.370667 163.370667 0 1 1-231.04-231.04l66.922666-66.944 45.269334 45.269333-66.944 66.944a99.370667 99.370667 0 1 0 140.522666 140.522667l135.893334-135.893334a88.746667 88.746667 0 0 0 0-125.482666z m182.528-197.589333a163.370667 163.370667 0 0 1 0 231.04L733.866667 539.776l-45.269334-45.248 66.944-66.944a99.370667 99.370667 0 1 0-140.522666-140.522667l-135.893334 135.893334a88.746667 88.746667 0 0 0 0 125.482666l-45.269333 45.269334a152.746667 152.746667 0 0 1 0-216l135.893333-135.893334a163.370667 163.370667 0 0 1 231.04 0z"  ></path></symbol><symbol id="map" viewBox="0 0 1024 1024"><path d="M512 128c164.949333 0 298.666667 129.941333 298.666667 290.261333 0 3.392-0.064 6.784-0.213334 10.24-3.669333 95.914667-58.24 203.776-147.797333 313.173334a1260.714667 1260.714667 0 0 1-139.818667 144.768l-10.837333 9.322666-10.837333-9.322666-13.013334-11.626667a1260.714667 1260.714667 0 0 1-126.805333-133.162667c-89.557333-109.376-144.128-217.237333-147.818667-313.173333-0.128-3.413333-0.192-6.826667-0.192-10.24 0-158.08 130.069333-286.677333 291.904-290.176L512 128z m0 64c-130.005333 0-234.666667 101.717333-234.666667 226.261333 0 2.56 0.042667 5.141333 0.149334 7.765334 2.944 76.608 48.554667 171.52 133.376 275.093333a1184.682667 1184.682667 0 0 0 86.613333 94.506667l14.528 14.016 14.506667-14.016a1184.682667 1184.682667 0 0 0 86.634666-94.506667c84.821333-103.573333 130.432-198.485333 133.376-275.093333 0.106667-2.624 0.149333-5.205333 0.149334-7.765334C746.666667 293.717333 642.005333 192 512 192z m0 74.666667a149.333333 149.333333 0 1 1 0 298.666666 149.333333 149.333333 0 0 1 0-298.666666z m0 64a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z"  ></path></symbol><symbol id="info" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m32 234.666667v256h-64V448h64z m0-106.666667v64h-64v-64h64z"  ></path></symbol><symbol id="error" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m113.130667 140.266667l45.269333 45.269333L557.226667 512l113.152 113.130667-45.269334 45.269333L512 557.226667l-113.130667 113.152-45.269333-45.269334L466.773333 512l-113.152-113.109333 45.269334-45.269334L512 466.730667l113.109333-113.130667z"  ></path></symbol><symbol id="resonserate" viewBox="0 0 1024 1024"><path d="M516.288 170.666667c4.330667 0 8.512 1.621333 11.733333 4.544L868.906667 485.333333c6.549333 5.973333 7.552 15.786667 2.688 22.954667l-1.450667 1.877333c-0.277333 0.298667-114.325333 104.085333-342.165333 311.381334a17.386667 17.386667 0 0 1-24.661334-1.237334 17.642667 17.642667 0 0 1-4.522666-11.797333v-179.904c-16.213333 0.426667-32.170667 1.962667-47.744 4.586667l-4.693334 0.810666c-129.066667 23.552-232.810667 98.304-267.306666 223.936l-2.624-5.696C166.186667 829.12 149.333333 781.525333 149.333333 734.037333c0-198.058667 154.922667-359.68 349.482667-368.874666V188.245333c0-9.706667 7.829333-17.578667 17.493333-17.578666z m46.528 122.730666v132.821334l-60.992 2.88c-140.416 6.613333-255.36 109.44-282.453333 243.946666 56.277333-51.541333 130.261333-86.4 215.978666-102.058666l5.12-0.896a404.309333 404.309333 0 0 1 56.746667-5.44l65.6-1.664v140.373333l225.28-205.013333-225.28-204.949334z"  ></path></symbol><symbol id="success" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m169.045333 127.04l45.909334 44.586667-271.829334 279.722667-136.832-141.952 46.08-44.416 90.944 94.336 225.728-232.277334z"  ></path></symbol><symbol id="set" viewBox="0 0 1024 1024"><path d="M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z"  ></path></symbol><symbol id="filter-fill" viewBox="0 0 1024 1024"><path d="M776.341333 170.666667a64 64 0 0 1 49.557334 104.512L627.541333 517.76v273.386667L398.293333 687.018667v-169.237334l-192.469333-243.413333A64 64 0 0 1 256 170.666667h520.341333z"  ></path></symbol><symbol id="help-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m39.658667 490.666667h-59.968v64h59.968v-64z m-3.541334-316.757333c-38.741333-7.850667-80.704-2.730667-110.485333 29.162666C411.050667 380.949333 405.333333 403.541333 405.333333 453.376h59.733334v-14.506667c0.277333-25.578667 4.586667-51.946667 41.962666-59.306666a60.373333 60.373333 0 0 1 52.821334 13.568c13.312 12.821333 13.610667 41.856-7.893334 56.32l-33.664 22.4-3.776 2.496c-16.789333 11.669333-22.826667 24.832-22.826666 43.648V597.333333h59.968v-57.514666l0.106666-2.816c0.853333-11.306667 6.997333-21.909333 21.525334-31.189334 15.722667-10.048 59.605333-30.378667 59.605333-84.117333 0-53.717333-46.058667-90.645333-84.778667-98.453333z"  ></path></symbol><symbol id="error-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m113.130667 204.266667l-113.109334 113.130667-113.152-113.130667-45.269333 45.269333 113.152 113.109334-113.152 113.152 45.269333 45.269333L512 557.226667l113.130667 113.152 45.269333-45.269334L557.226667 512l113.152-113.130667-45.269334-45.269333z"  ></path></symbol><symbol id="success-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m169.045333 191.04L455.317333 572.650667l-90.944-94.336-46.08 44.416 136.832 141.952 271.829334-279.722667-45.909334-44.586667z"  ></path></symbol><symbol id="caret-left" viewBox="0 0 1024 1024"><path d="M597.333333 725.333333l-256-213.333333 256-213.333333v426.666666z"  ></path></symbol><symbol id="caret-right" viewBox="0 0 1024 1024"><path d="M426.666667 298.666667l256 213.333333-256 213.333333V298.666667z"  ></path></symbol><symbol id="caret-down" viewBox="0 0 1024 1024"><path d="M725.333333 426.666667l-213.333333 256-213.333333-256h426.666666z"  ></path></symbol><symbol id="caret-up" viewBox="0 0 1024 1024"><path d="M298.666667 597.333333l213.333333-256 213.333333 256H298.666667z"  ></path></symbol></svg>', function(e) {
  var n = (n = document.getElementsByTagName("script"))[n.length - 1], t = n.getAttribute("data-injectcss"), n = n.getAttribute("data-disable-injectsvg");
  if (!n) {
    var i, a, s, o, c, r = function(h, p) {
      p.parentNode.insertBefore(h, p);
    };
    if (t && !e.__iconfont__svg__cssinject__) {
      e.__iconfont__svg__cssinject__ = !0;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (h) {
        console && console.log(h);
      }
    }
    i = function() {
      var h, p = document.createElement("div");
      p.innerHTML = e._iconfont_svg_string_3491565, (p = p.getElementsByTagName("svg")[0]) && (p.setAttribute("aria-hidden", "true"), p.style.position = "absolute", p.style.width = 0, p.style.height = 0, p.style.overflow = "hidden", p = p, (h = document.body).firstChild ? r(p, h.firstChild) : h.appendChild(p));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(i, 0) : (a = function() {
      document.removeEventListener("DOMContentLoaded", a, !1), i();
    }, document.addEventListener("DOMContentLoaded", a, !1)) : document.attachEvent && (s = i, o = e.document, c = !1, d(), o.onreadystatechange = function() {
      o.readyState == "complete" && (o.onreadystatechange = null, u());
    });
  }
  function u() {
    c || (c = !0, s());
  }
  function d() {
    try {
      o.documentElement.doScroll("left");
    } catch {
      return void setTimeout(d, 50);
    }
    u();
  }
}(window);
const xa = {
  install(e) {
    e.component("AmIcon", be), e.component("AmTab", q3), e.component("AmButton", Se), e.component("AmInput", R3), e.component("AmTable", P3), e.component("AmTableColumn", F3), e.component("AmPopover", W3), e.component("AmSelect", Y3), e.component("AmOption", X3), e.component("AmTooltip", j3), e.component("AmDivider", U3), e.component("AmPopup", E3), e.component("AmProgress", K3), e.component("AmCheckbox", G3), e.component("AmMenu", J3), e.component("AmMenuItem", Q3), e.component("AmPagination", et), e.component("AmLogo", tt), e.component("AmForm", it), e.component("AmFormItem", nt), e.component("AmAvatar", at), e.component("AmList", st), e.component("AmListItem", ot), e.component("AmListStatus", x3), e.component("AmWaterfall", lt), e.component("AmDropdown", z3), e.component("AmSwitch", rt), e.component("AmRadio", ct), e.component("AmTag", ut), e.component("AmAlert", dt), e.component("AmImg", ht), e.component("AmLayoutAdmin", ft), e.component("AmCard", mt), e.component("AmLayoutConfig", vt), e.component("AmLayoutConfigItem", pt), e.component("AmLayoutBar", gt), e.component("AmLayoutTitle", yt), e.component("AmUserLogin", bt), e.directive("clickoutside", ei), e.directive("clickanime", t6), e.use(wt), e.use(_t), e.use(xt), e.use(Jt);
  },
  AmIcon: be,
  AmButton: Se,
  AmIcon: be,
  AmButton: Se,
  AmInput: R3,
  AmTable: P3,
  AmTableColumn: F3,
  AmPopover: W3,
  AmTab: q3,
  AmSelect: Y3,
  AmOption: X3,
  AmTooltip: j3,
  AmDivider: U3,
  AmPopup: E3,
  AmProgress: K3,
  AmCheckbox: G3,
  AmMenu: J3,
  AmMenuItem: Q3,
  AmPagination: et,
  AmLogo: tt,
  AmForm: it,
  AmFormItem: nt,
  AmAvatar: at,
  AmList: st,
  AmListItem: ot,
  AmWaterfall: lt,
  AmDropdown: z3,
  AmMessage: wt,
  AmLoading: _t,
  AmDialog: xt,
  AmSwitch: rt,
  AmRadio: ct,
  AmTag: ut,
  AmAlert: dt,
  AmImg: ht,
  AmListStatus: x3,
  AmViewer: Jt,
  AmLayoutAdmin: ft,
  AmCard: mt,
  AmLayoutConfig: vt,
  AmLayoutConfigItem: pt,
  AmLayoutBar: gt,
  AmLayoutTitle: yt,
  AmUserLogin: bt
};
export {
  xa as default
};
