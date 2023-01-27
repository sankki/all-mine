import { computed, toRefs, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, withDirectives, normalizeClass, createBlock, createCommentVNode, Fragment, createTextVNode, toDisplayString, renderSlot, ref, onMounted, nextTick, watch, withKeys, provide, onBeforeUnmount, defineComponent, h, renderList, getCurrentInstance, inject, onUnmounted, createVNode, Transition, withCtx, vShow, resolveComponent, resolveDirective, reactive, normalizeProps, guardReactiveProps, withModifiers, render } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$s = ["xlink:href"];
const _sfc_main$w = {
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
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      const { size, color } = toRefs(props);
      const sty = {};
      if (size) {
        sty.fontSize = size.value;
      }
      if (color) {
        sty.color = color.value;
      }
      return sty;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "am-icon",
        "aria-hidden": "true",
        style: normalizeStyle(unref(style))
      }, [
        createElementVNode("use", {
          "xlink:href": "#" + __props.name
        }, null, 8, _hoisted_1$s)
      ], 4);
    };
  }
};
var AmIcon = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-25ad101c"]]);
var clickanime = {
  mounted(el, binding) {
    setTimeout(() => {
      const style = window.getComputedStyle(el, null);
      const timeMatch = style.transitionDuration.match(/[0-9\.]+(?=s)/g);
      if (!timeMatch) {
        return false;
      }
      const maxTime = timeMatch.reduce((num1, num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        return num1 > num2 ? num1 : num2;
      }) * 1e3;
      let isUp = true;
      let timeEnd = false;
      let handlerEnd = true;
      el.addEventListener("mousedown", () => {
        if (!handlerEnd) {
          return;
        }
        el.classList.add(binding.value);
        handlerEnd = false;
        isUp = false;
        timeEnd = false;
        setTimeout(() => {
          timeEnd = true;
          moveLeave();
        }, maxTime);
      });
      el.addEventListener("mouseleave", () => {
        isUp = true;
        moveLeave();
      });
      el.addEventListener("mouseup", () => {
        isUp = true;
        moveLeave();
      });
      const moveLeave = () => {
        if (isUp && timeEnd) {
          el.classList.remove(binding.value);
          setTimeout(() => {
            handlerEnd = true;
          }, maxTime);
        }
      };
    }, 0);
  }
};
var index_vue_vue_type_style_index_0_lang$s = "";
const _hoisted_1$r = {
  key: 1,
  class: "am-button__content"
};
const _sfc_main$v = {
  props: {
    type: {
      type: String,
      default: "default"
    },
    mode: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "medium"
    },
    sharp: {
      type: String,
      default: "rectangle"
    },
    scene: {
      type: String,
      default: "light"
    },
    function: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
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
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const vClickanime = clickanime;
    const className = computed(() => ({
      "is-disabled": props.disabled,
      "is-selected": props.selected,
      "is-loading": props.loading,
      [`is-${props.mode}`]: props.mode,
      [`is-${props.size}`]: props.size,
      [`is-${props.sharp}`]: props.sharp,
      [`is-${props.scene}`]: props.scene,
      [`is-${props.function}`]: props.function
    }));
    const iconClass = computed(() => ({
      [`is-${props.iconPosition}`]: props.iconPosition
    }));
    const handleClick = (e2) => {
      if (props.disabled || props.loading) {
        e2.preventDefault();
        return;
      }
      emit("click", e2);
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-button", unref(className)]),
        onClick: handleClick
      }, [
        __props.icon ? (openBlock(), createBlock(AmIcon, {
          key: 0,
          class: normalizeClass(unref(iconClass)),
          name: __props.icon,
          size: __props.iconSize
        }, null, 8, ["class", "name", "size"])) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
          __props.loading && __props.loadingText ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(__props.loadingText), 1)
          ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 })
        ])) : createCommentVNode("", true)
      ], 2)), [
        [unref(vClickanime), "is-down"]
      ]);
    };
  }
};
var e, t, n = "function" == typeof Map ? /* @__PURE__ */ new Map() : (e = [], t = [], { has: function(t2) {
  return e.indexOf(t2) > -1;
}, get: function(n2) {
  return t[e.indexOf(n2)];
}, set: function(n2, o2) {
  -1 === e.indexOf(n2) && (e.push(n2), t.push(o2));
}, delete: function(n2) {
  var o2 = e.indexOf(n2);
  o2 > -1 && (e.splice(o2, 1), t.splice(o2, 1));
} }), o = function(e2) {
  return new Event(e2, { bubbles: true });
};
try {
  new Event("test");
} catch (e2) {
  o = function(e3) {
    var t2 = document.createEvent("Event");
    return t2.initEvent(e3, true, false), t2;
  };
}
function r(e2) {
  var t2 = n.get(e2);
  t2 && t2.destroy();
}
function i(e2) {
  var t2 = n.get(e2);
  t2 && t2.update();
}
var l = null;
"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, l.update = function(e2) {
  return e2;
}) : ((l = function(e2, t2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], function(e3) {
    return function(e4) {
      if (e4 && e4.nodeName && "TEXTAREA" === e4.nodeName && !n.has(e4)) {
        var t3, r2 = null, i2 = null, l2 = null, d2 = function() {
          e4.clientWidth !== i2 && c();
        }, a = function(t4) {
          window.removeEventListener("resize", d2, false), e4.removeEventListener("input", c, false), e4.removeEventListener("keyup", c, false), e4.removeEventListener("autosize:destroy", a, false), e4.removeEventListener("autosize:update", c, false), Object.keys(t4).forEach(function(n2) {
            e4.style[n2] = t4[n2];
          }), n.delete(e4);
        }.bind(e4, { height: e4.style.height, resize: e4.style.resize, overflowY: e4.style.overflowY, overflowX: e4.style.overflowX, wordWrap: e4.style.wordWrap });
        e4.addEventListener("autosize:destroy", a, false), "onpropertychange" in e4 && "oninput" in e4 && e4.addEventListener("keyup", c, false), window.addEventListener("resize", d2, false), e4.addEventListener("input", c, false), e4.addEventListener("autosize:update", c, false), e4.style.overflowX = "hidden", e4.style.wordWrap = "break-word", n.set(e4, { destroy: a, update: c }), "vertical" === (t3 = window.getComputedStyle(e4, null)).resize ? e4.style.resize = "none" : "both" === t3.resize && (e4.style.resize = "horizontal"), r2 = "content-box" === t3.boxSizing ? -(parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom)) : parseFloat(t3.borderTopWidth) + parseFloat(t3.borderBottomWidth), isNaN(r2) && (r2 = 0), c();
      }
      function u(t4) {
        var n2 = e4.style.width;
        e4.style.width = "0px", e4.style.width = n2, e4.style.overflowY = t4;
      }
      function s() {
        if (0 !== e4.scrollHeight) {
          var t4 = function(e5) {
            for (var t5 = []; e5 && e5.parentNode && e5.parentNode instanceof Element; )
              e5.parentNode.scrollTop && t5.push({ node: e5.parentNode, scrollTop: e5.parentNode.scrollTop }), e5 = e5.parentNode;
            return t5;
          }(e4), n2 = document.documentElement && document.documentElement.scrollTop;
          e4.style.height = "", e4.style.height = e4.scrollHeight + r2 + "px", i2 = e4.clientWidth, t4.forEach(function(e5) {
            e5.node.scrollTop = e5.scrollTop;
          }), n2 && (document.documentElement.scrollTop = n2);
        }
      }
      function c() {
        s();
        var t4 = Math.round(parseFloat(e4.style.height)), n2 = window.getComputedStyle(e4, null), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(n2.height)) : e4.offsetHeight;
        if (r3 < t4 ? "hidden" === n2.overflowY && (u("scroll"), s(), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight) : "hidden" !== n2.overflowY && (u("hidden"), s(), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight), l2 !== r3) {
          l2 = r3;
          var i3 = o("autosize:resized");
          try {
            e4.dispatchEvent(i3);
          } catch (e5) {
          }
        }
      }
    }(e3);
  }), e2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], r), e2;
}, l.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], i), e2;
});
var d = l;
var index_vue_vue_type_style_index_0_lang$r = "";
const _hoisted_1$q = { class: "am-input__inner" };
const _hoisted_2$f = {
  key: 0,
  class: "am-input__prefix"
};
const _hoisted_3$b = ["readonly", "placeholder", "value", "autocomplete", "onKeyup"];
const _hoisted_4$6 = ["readonly", "type", "value", "placeholder", "autocomplete", "onKeyup"];
const _hoisted_5$5 = {
  key: 3,
  class: "am-input__suffix"
};
const _sfc_main$u = {
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165"
    },
    type: String,
    autosize: {
      type: Boolean,
      default: true
    },
    scene: {
      type: String,
      default: "light"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
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
  setup(__props, { emit }) {
    const props = __props;
    const onInput = (e2) => {
      emit("update:value", e2.target.value);
      emit("input", e2);
    };
    const onChange = (e2) => {
      emit("change", e2);
    };
    const isFocus = ref(false);
    const onFocus = (e2) => {
      isFocus.value = true;
    };
    const onBlur = (e2) => {
      isFocus.value = false;
      emit("blur", e2);
    };
    const onEnter = (e2) => {
      emit("enter", e2);
    };
    const textareaEl = ref(null);
    const checkAutosize = () => {
      if (props.type !== "textarea")
        return;
      if (props.autosize) {
        d(textareaEl.value);
        d.update(textareaEl.value);
      } else {
        d.destroy(textareaEl.value);
      }
    };
    onMounted(async () => {
      await nextTick();
      checkAutosize();
    });
    watch(
      () => props.autosize,
      () => {
        checkAutosize();
      }
    );
    watch(() => props.value, () => {
      checkAutosize();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-input", {
          "is-focus": isFocus.value,
          [`is-${__props.scene}`]: __props.scene
        }])
      }, [
        createElementVNode("label", _hoisted_1$q, [
          __props.prefix ? (openBlock(), createElementBlock("div", _hoisted_2$f, toDisplayString(__props.prefix), 1)) : createCommentVNode("", true),
          __props.type === "textarea" ? (openBlock(), createElementBlock("textarea", {
            key: 1,
            readonly: __props.readonly,
            ref_key: "textareaEl",
            ref: textareaEl,
            spellcheck: "false",
            placeholder: __props.placeholder,
            value: __props.value,
            autocomplete: __props.autocomplete,
            onInput,
            onFocus,
            onBlur,
            onChange,
            onEnter,
            onKeyup: withKeys(onEnter, ["enter"])
          }, null, 40, _hoisted_3$b)) : (openBlock(), createElementBlock("input", {
            key: 2,
            readonly: __props.readonly,
            spellcheck: "false",
            type: __props.type,
            value: __props.value,
            placeholder: __props.placeholder,
            autocomplete: __props.autocomplete,
            onInput,
            onFocus,
            onBlur,
            onChange,
            onEnter,
            onKeyup: withKeys(onEnter, ["enter"])
          }, null, 40, _hoisted_4$6)),
          __props.suffix ? (openBlock(), createElementBlock("div", _hoisted_5$5, toDisplayString(__props.suffix), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
};
function getScrollBoxOfEl(el) {
  const els = [window];
  let thisEl = el;
  let end = false;
  while (!end) {
    thisEl = thisEl.parentElement;
    const style = window.getComputedStyle(thisEl, null);
    if (style.overflow === "scroll" || style.overflow === "auto" || style.overflowY === "scroll" || style.overflowY === "auto" || style.overflowX === "scroll" || style.overflowX === "auto") {
      els.push(thisEl);
    }
    if (thisEl === document.body) {
      end = true;
    }
  }
  return els;
}
function observeElResize(el, callBack) {
  const ro = new ResizeObserver(() => {
    callBack();
  });
  ro.observe(el);
  return ro;
}
function offObserveElResize(el, ro) {
  ro.unobserve(el);
}
function getHiddenDomRect(el) {
  const oldElStyle = window.getComputedStyle(el, null);
  const oldWidth = oldElStyle.width;
  const cloneEl = el.cloneNode(true);
  cloneEl.style.cssText = `
        z-index: -999;
        position: fixed;
        top: 0;
        left: 0;
        width: ${oldWidth};
        width: max-content;
        visibility: hidden;`;
  el.parentNode.append(cloneEl);
  const cloneElRect = window.getComputedStyle(cloneEl, null);
  const obj = {
    height: window.parseFloat(cloneElRect.height),
    width: window.parseFloat(cloneElRect.width)
  };
  cloneEl.remove();
  return obj;
}
var index_vue_vue_type_style_index_0_lang$q = "";
const _hoisted_1$p = { class: "am-table" };
const _hoisted_2$e = { style: { "display": "none" } };
const _hoisted_3$a = {
  key: 1,
  class: "am-table__th-cell"
};
const _hoisted_4$5 = ["onClick"];
const _hoisted_5$4 = ["onClick"];
const _hoisted_6$1 = {
  key: 1,
  class: "am-table__td-cell"
};
const _sfc_main$t = {
  props: {
    data: null,
    height: {
      type: String
    },
    align: {
      type: String,
      default: "left"
    },
    rowClass: {
      type: Function,
      default: () => {
      }
    },
    hdStyle: {
      type: Object,
      default: () => {
      }
    },
    bdStyle: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["row-click", "cell-click"],
  setup(__props, { emit }) {
    const props = __props;
    const columnData = ref([]);
    provide("tableColumnData", columnData);
    const tableBdStyle = computed(() => ({
      "max-height": props.height ? `${props.height}` : "",
      "overflow-y": props.height ? "auto" : "",
      "overflow-x": "hidden",
      ...props.bdStyle
    }));
    const scrollBarWidth = ref(0);
    const bd = ref(null);
    const getScrollBarWidth = async () => {
      if (!bd.value)
        return;
      await nextTick();
      scrollBarWidth.value = Math.max(bd.value.offsetWidth - bd.value.firstChild.offsetWidth - 2, 0);
    };
    let ro;
    onMounted(() => {
      getScrollBarWidth();
      ro = observeElResize(bd.value.firstChild, getScrollBarWidth);
    });
    onBeforeUnmount(() => {
      offObserveElResize(bd.value, ro);
    });
    const clickRow = (row) => {
      emit("row-click", row);
    };
    const clickCell = (row, column) => {
      emit("cell-click", row, column);
    };
    const Cell = defineComponent({
      name: "Cell",
      props: {
        slotFun: null,
        data: null
      },
      render() {
        return h(
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$p, [
        createElementVNode("div", _hoisted_2$e, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode("div", {
          class: "am-table__hd",
          style: normalizeStyle(__props.hdStyle)
        }, [
          createElementVNode("table", null, [
            createElementVNode("thead", null, [
              createElementVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(columnData.value, (item, index2) => {
                  return openBlock(), createElementBlock("th", {
                    key: index2,
                    style: normalizeStyle({
                      width: item.props.width
                    })
                  }, [
                    item.slots.th ? (openBlock(), createBlock(unref(Cell), {
                      key: 0,
                      "slot-fun": item.slots.th
                    }, null, 8, ["slot-fun"])) : (openBlock(), createElementBlock("div", _hoisted_3$a, toDisplayString(item.props.label), 1))
                  ], 4);
                }), 128)),
                createElementVNode("th", {
                  class: "am-table__th-scroll-bar",
                  style: normalizeStyle({
                    "width": `${scrollBarWidth.value}px`
                  })
                }, null, 4)
              ])
            ])
          ])
        ], 4),
        createElementVNode("div", {
          class: "am-table__bd",
          style: normalizeStyle(unref(tableBdStyle)),
          ref_key: "bd",
          ref: bd
        }, [
          createElementVNode("table", null, [
            createElementVNode("colgroup", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(columnData.value, (item, index2) => {
                return openBlock(), createElementBlock("col", {
                  key: index2,
                  style: normalizeStyle({
                    width: item.props.width
                  })
                }, null, 4);
              }), 128))
            ]),
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (item1, index1) => {
                return openBlock(), createElementBlock("tr", {
                  key: index1,
                  class: normalizeClass(__props.rowClass(item1, index1)),
                  onClick: ($event) => clickRow(item1)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(columnData.value, (item2, index2) => {
                    return openBlock(), createElementBlock("td", {
                      key: index2,
                      onClick: ($event) => clickCell(item1, item2)
                    }, [
                      item2.slots.default ? (openBlock(), createBlock(unref(Cell), {
                        key: 0,
                        "slot-fun": item2.slots.default,
                        data: item1
                      }, null, 8, ["slot-fun", "data"])) : (openBlock(), createElementBlock("div", _hoisted_6$1, toDisplayString(item1[item2.props.prop]), 1))
                    ], 8, _hoisted_5$4);
                  }), 128))
                ], 10, _hoisted_4$5);
              }), 128))
            ])
          ])
        ], 4)
      ]);
    };
  }
};
let nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");
const _hoisted_1$o = { class: "am-table-column" };
const _sfc_main$s = {
  props: {
    label: {
      type: String,
      default: "\u8868\u5934"
    },
    prop: {
      type: String,
      default: ""
    },
    width: {
      type: String
    },
    type: {
      type: String
    },
    sort: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const ins = getCurrentInstance();
    const tableColumnData = inject("tableColumnData");
    const columnId = nanoid();
    tableColumnData.value.push({
      props: ins.props,
      slots: ins.slots,
      id: columnId
    });
    onUnmounted(() => {
      const findIndex = tableColumnData.value.findIndex((i2) => {
        return i2.id === columnId;
      });
      if (findIndex >= 0) {
        tableColumnData.value.splice(findIndex, 1);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
        renderSlot(_ctx.$slots, "th"),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
};
class PopupManager {
  constructor() {
    this.zIndex = 2e3;
  }
  getZIndex() {
    this.zIndex += 1;
    return this.zIndex;
  }
}
var popupManager = new PopupManager();
var index_vue_vue_type_style_index_0_lang$p = "";
const _hoisted_1$n = { class: "am-popover" };
const _sfc_main$r = {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    xDirection: {
      type: String,
      default: "left"
    },
    yDirection: {
      type: String,
      default: "auto"
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    apWidthFollowFather: {
      type: Boolean,
      default: true
    },
    popoverBoxClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:show", "after-hide", "after-enter"],
  setup(__props, { emit }) {
    const props = __props;
    const linkEl = ref(null);
    const ap = ref(null);
    let apEl = null;
    onMounted(() => {
      apEl = ap.value;
      document.body.appendChild(ap.value);
    });
    onUnmounted(() => {
      apEl && apEl.remove();
    });
    const apShow = ref(false);
    const popShow = ref(false);
    const fatherScrollEls = ref([]);
    const popEl = ref(null);
    const popWidth = ref();
    const popHeight = ref();
    const x = ref();
    const y = ref();
    const popOrigin = ref("top");
    const ro = ref();
    const zIndex = ref(popupManager.getZIndex());
    watch(
      () => props.show,
      () => {
        if (props.show) {
          zIndex.value = popupManager.getZIndex();
          apShow.value = true;
          startObserve();
          setTimeout(() => {
            popShow.value = true;
          }, 0);
        } else {
          popShow.value = false;
          endObserve();
        }
      }
    );
    const check = async () => {
      await nextTick();
      const popRect = getHiddenDomRect(popEl.value);
      const linkRect = linkEl.value.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = linkRect;
      const { apWidthFollowFather } = props;
      const bottom = window.innerHeight - top - height;
      popWidth.value = props.width || `${popRect.width < width && apWidthFollowFather ? width : popRect.width}`;
      popHeight.value = props.height || `${popRect.height}`;
      const leftX = left;
      const rightX = left - popWidth.value + width;
      if (props.xDirection === "left") {
        x.value = leftX;
      } else if (props.xDirection === "right") {
        x.value = rightX;
      }
      const topY = top - popHeight.value - 6;
      const bottomY = top + height + 6;
      if (props.yDirection === "top") {
        y.value = topY;
      } else if (props.yDirection === "bottom") {
        y.value = bottomY;
      } else if (props.yDirection === "auto") {
        if (bottom < popHeight.value && top > popHeight.value) {
          y.value = topY;
          popOrigin.value = "bottom";
        } else {
          y.value = bottomY;
          popOrigin.value = "top";
        }
      }
    };
    const startObserve = () => {
      check();
      fatherScrollEls.value = getScrollBoxOfEl(linkEl.value);
      fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.addEventListener("scroll", check);
      });
      window.addEventListener("resize", check);
      ro.value = observeElResize(linkEl.value, check);
    };
    const endObserve = () => {
      fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.removeEventListener("scroll", check);
      });
      window.removeEventListener("resize", check);
      offObserveElResize(linkEl.value, ro.value);
    };
    const apStyle = computed(() => {
      const obj = {};
      obj.transform = `translate(${x.value}px, ${y.value}px)`;
      obj.zIndex = zIndex.value + 1;
      return obj;
    });
    const popStyle = computed(() => {
      const obj = {};
      obj.width = `${popWidth.value}px`;
      obj.transformOrigin = popOrigin.value;
      if (props.height) {
        obj.height = `${popHeight.value}px`;
      }
      return obj;
    });
    const onPopHide = () => {
      apShow.value = false;
      emit("after-hide");
    };
    const onPopShow = () => {
      emit("after-enter");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        createElementVNode("div", {
          class: "am-popover__trigger",
          ref_key: "linkEl",
          ref: linkEl
        }, [
          renderSlot(_ctx.$slots, "trigger")
        ], 512),
        withDirectives(createElementVNode("div", {
          ref_key: "ap",
          ref: ap,
          class: normalizeClass(["am-popover__box", __props.popoverBoxClass]),
          style: normalizeStyle(unref(apStyle))
        }, [
          createVNode(Transition, {
            name: "am-popover-pop-anime",
            onAfterLeave: onPopHide,
            onAfterEnter: onPopShow
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: "am-popover__box-pop",
                ref_key: "popEl",
                ref: popEl,
                style: normalizeStyle(unref(popStyle))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 4), [
                [vShow, popShow.value]
              ])
            ]),
            _: 3
          })
        ], 6), [
          [vShow, apShow.value]
        ])
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$o = "";
const _hoisted_1$m = ["onClick"];
const _sfc_main$q = {
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
    },
    scene: {
      type: String,
      default: "light"
    }
  },
  emits: ["update:value", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const clickTab = (item) => {
      if (item.value === props.value)
        return;
      emit("update:value", item.value);
      emit("change", item.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-tab", {
          [`is-${__props.mode}`]: __props.mode,
          [`is-${__props.scene}`]: __props.scene
        }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (item, index2) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass([{
              "is-active": item.value === __props.value
            }, "am-tab__item"]),
            key: index2,
            onClick: ($event) => clickTab(item)
          }, [
            createElementVNode("span", null, toDisplayString(item.label), 1)
          ], 10, _hoisted_1$m);
        }), 128))
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$n = "";
const _hoisted_1$l = { class: "am-dropdown__trigger-icon" };
const _sfc_main$p = {
  props: {
    triggerMode: {
      type: String,
      default: "default"
    },
    scene: {
      type: String,
      default: "light"
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
  setup(__props, { expose }) {
    const props = __props;
    const dropdownShow = ref(false);
    const dropdownLock = ref(false);
    const isFocus = computed(() => dropdownShow.value);
    const asClass = computed(() => ({
      "is-focus": isFocus.value,
      [`is-${props.scene}`]: props.scene
    }));
    const triggerClass = computed(() => {
      return {
        [`is-${props.triggerMode}`]: true
      };
    });
    const clickTrigger = () => {
      dropdownShow.value = !dropdownShow.value;
    };
    let timer;
    const clickOutside = () => {
      if (dropdownLock.value)
        return;
      timer = setTimeout(() => {
        dropdownShow.value = false;
      }, 16);
    };
    const clickPopover = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      dropdownShow.value = true;
    };
    const hideDropdown = () => {
      timer = setTimeout(() => {
        dropdownShow.value = false;
      }, 16);
    };
    const lock = () => {
      dropdownLock.value = true;
    };
    const unlock = () => {
      dropdownLock.value = false;
    };
    expose({
      hideDropdown,
      lock,
      unlock
    });
    return (_ctx, _cache) => {
      const _component_AmIcon = resolveComponent("AmIcon");
      const _component_AmPopover = resolveComponent("AmPopover");
      const _directive_clickoutside = resolveDirective("clickoutside");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-dropdown", unref(asClass)])
      }, [
        createVNode(_component_AmPopover, {
          "popover-box-class": `am-dropdown__popover is-${__props.scene} ${__props.popoverBoxClass}`,
          show: dropdownShow.value,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => dropdownShow.value = $event),
          "x-direction": __props.xDirection,
          "y-direction": __props.yDirection
        }, {
          trigger: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass(["am-dropdown__trigger", unref(triggerClass)]),
              onClick: clickTrigger
            }, [
              renderSlot(_ctx.$slots, "trigger"),
              createElementVNode("div", _hoisted_1$l, [
                createVNode(_component_AmIcon, {
                  name: "caret-down",
                  size: "16px"
                })
              ])
            ], 2)
          ]),
          default: withCtx(() => [
            createElementVNode("div", {
              class: "am-dropdown__popover-inner",
              onClick: clickPopover
            }, [
              renderSlot(_ctx.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["popover-box-class", "show", "x-direction", "y-direction"])
      ], 2)), [
        [_directive_clickoutside, clickOutside]
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$m = "";
const _hoisted_1$k = {
  key: 0,
  class: "am-select__placeholder"
};
const _hoisted_2$d = {
  key: 2,
  class: "am-select__content am-select__content-alone"
};
const _hoisted_3$9 = {
  key: 3,
  class: "am-select__content am-select__content-multiple"
};
const _sfc_main$o = {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    },
    value: null,
    scene: {
      type: String,
      default: "light"
    }
  },
  emits: ["update:value", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownCm = ref(null);
    const options = reactive([]);
    provide("options", options);
    inject("dropdownShow");
    const asClass = computed(() => ({
      [`is-${props.scene}`]: props.scene
    }));
    const selectedItem = computed(() => {
      if (props.multiple) {
        const arr = options.filter((i2) => {
          return props.value.includes(i2.value);
        });
        console.log("# arr", arr);
        return arr;
      }
      return options.find((i2) => i2.value === props.value);
    });
    provide(
      "selectedItemValue",
      computed(() => props.value)
    );
    provide(
      "selectedItem",
      selectedItem
    );
    provide("setValue", (option) => {
      if (props.multiple) {
        const newValue = props.value ? props.value : [];
        const index2 = newValue.findIndex((i2) => i2 === option.value);
        if (index2 > -1) {
          newValue.splice(index2, 1);
        } else {
          newValue.push(option.value);
        }
        emit("update:value", newValue);
        emit("change", newValue);
      } else {
        if (option.value === props.value)
          return;
        emit("update:value", option.value);
        emit("change", option.value);
        dropdownCm.value.hideDropdown();
      }
    });
    return (_ctx, _cache) => {
      const _component_AmTag = resolveComponent("AmTag");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-select", unref(asClass)])
      }, [
        createVNode(_sfc_main$p, {
          scene: __props.scene,
          "popover-box-class": "am-select__popover",
          ref_key: "dropdownCm",
          ref: dropdownCm
        }, {
          trigger: withCtx(() => [
            !unref(selectedItem) || __props.multiple && !unref(selectedItem).length ? (openBlock(), createElementBlock("p", _hoisted_1$k, toDisplayString(__props.placeholder), 1)) : createCommentVNode("", true),
            _ctx.$slots.selected ? renderSlot(_ctx.$slots, "selected", {
              key: 1,
              selectedItem: unref(selectedItem)
            }) : !__props.multiple ? (openBlock(), createElementBlock("div", _hoisted_2$d, toDisplayString(unref(selectedItem) ? unref(selectedItem).label : ""), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectedItem), (item) => {
                return openBlock(), createBlock(_component_AmTag, {
                  key: item.value,
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]))
          ]),
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["scene"])
      ], 2);
    };
  }
};
const _sfc_main$n = {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const options = inject("options");
    const selectedItemValue = inject("selectedItemValue");
    watch(
      () => props.item,
      () => {
        const findedIndex = options.findIndex((i2) => i2.value === props.item.value);
        if (findedIndex >= 0) {
          options.splice(findedIndex, 1, props.item);
        } else {
          options.push(props.item);
        }
      },
      {
        deep: true,
        immediate: true
      }
    );
    const isSelected = computed(() => {
      if (Array.isArray(selectedItemValue.value)) {
        return selectedItemValue.value.includes(props.item.value);
      }
      return selectedItemValue.value === props.item.value;
    });
    const aoClass = computed(() => {
      return {
        "is-selected": isSelected.value
      };
    });
    const setValue = inject("setValue");
    const clickOption = () => {
      setValue(props.item);
    };
    return (_ctx, _cache) => {
      const _component_AmIcon = resolveComponent("AmIcon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-option", unref(aoClass)]),
        onClick: clickOption
      }, [
        renderSlot(_ctx.$slots, "default"),
        unref(isSelected) ? (openBlock(), createBlock(_component_AmIcon, {
          key: 0,
          class: "am-option__check",
          name: "check-2",
          size: "20px"
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$l = "";
const _hoisted_1$j = {
  key: 1,
  class: "am-tooltip__tip-span"
};
const _sfc_main$m = {
  props: {
    content: String,
    trigger: {
      type: String,
      default: "hover"
    },
    direction: {
      type: String,
      default: "top"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: ""
    },
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
    scene: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    const props = __props;
    const tipEl = ref(null);
    let tipElement = null;
    const loaded = ref(false);
    const triggerEl = ref(null);
    const popShow = ref(false);
    const fatherScrollEls = ref([]);
    let ro = null;
    const zIndex = ref(popupManager.getZIndex());
    const rLeft = ref(0);
    const rTop = ref(0);
    const rWidth = ref(0);
    const rHeight = ref(0);
    const dirctionArr = computed(() => {
      return props.direction.toLowerCase().match(/left|right|bottom|top/g);
    });
    const tipX = computed(() => {
      if (dirctionArr.value[0] === "left")
        return `calc(-100% - 0px)`;
      if (dirctionArr.value[0] === "right")
        return `0px`;
      if (dirctionArr.value[0] === "top" || dirctionArr.value[0] === "bottom") {
        if (dirctionArr.value[1] === "left")
          return "0";
        if (dirctionArr.value[1] === "right")
          return `-100%`;
        return "-50%";
      }
      return "0";
    });
    const tipY = computed(() => {
      if (dirctionArr.value[0] === "top")
        return `calc(-100% - 0px)`;
      if (dirctionArr.value[0] === "bottom")
        return `0px`;
      if (dirctionArr.value[0] === "left" || dirctionArr.value[0] === "right") {
        if (dirctionArr.value[1] === "top")
          return "0";
        if (dirctionArr.value[1] === "bottom")
          return `-100%`;
        return "-50%";
      }
      return "0";
    });
    const tipStyle = computed(() => {
      return {
        transform: `translate(${rLeft.value}px,${rTop.value}px)`,
        zIndex: zIndex.value
      };
    });
    const loadDom = () => {
      if (tipElement)
        return;
      document.body.appendChild(tipEl.value);
      tipElement = tipEl.value;
    };
    onUnmounted(() => {
      tipElement && tipElement.remove();
      endObserve();
    });
    const onMouseEnter = async () => {
      if (props.disabled)
        return;
      if (props.trigger !== "hover")
        return;
      loaded.value = true;
      await nextTick();
      loadDom();
      popShow.value = true;
    };
    const onMouseLeave = () => {
      if (props.trigger !== "hover")
        return;
      popShow.value = false;
    };
    const check = async () => {
      if (!triggerEl.value)
        return;
      const triggerRect = triggerEl.value.getBoundingClientRect();
      const { width, height } = triggerRect;
      let { left, top } = triggerRect;
      rWidth.value = width;
      rHeight.value = height;
      const direction1 = dirctionArr.value[0];
      const direction2 = dirctionArr.value[1];
      switch (direction1) {
        case "left":
          if (direction2 === "top")
            break;
          else if (direction2 === "bottom")
            top += height;
          else
            top += 0.5 * height;
          break;
        case "right":
          left += width;
          if (direction2 === "top")
            break;
          else if (direction2 === "bottom")
            top += height;
          else
            top += 0.5 * height;
          break;
        case "top":
          if (direction2 === "left")
            break;
          else if (direction2 === "right")
            left += width;
          else
            left += 0.5 * width;
          break;
        case "bottom":
          top += height;
          if (direction2 === "left")
            break;
          else if (direction2 === "right")
            left += width;
          else
            left += 0.5 * width;
          break;
      }
      rLeft.value = left;
      rTop.value = top;
    };
    const afterLeave = async () => {
    };
    const startObserve = () => {
      check();
      fatherScrollEls.value = getScrollBoxOfEl(triggerEl.value);
      fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.addEventListener("scroll", check);
      });
      window.addEventListener("resize", check);
      ro = observeElResize(triggerEl.value, () => {
        if (!triggerEl.value) {
          tipElement.remove();
        } else {
          check();
        }
      });
    };
    const endObserve = () => {
      fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.removeEventListener("scroll", check);
      });
      window.removeEventListener("resize", check);
      if (triggerEl.value && ro)
        offObserveElResize(triggerEl.value, ro);
    };
    watch(
      () => popShow.value,
      () => {
        if (popShow.value) {
          zIndex.value = popupManager.getZIndex();
          startObserve();
        } else {
          endObserve();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "am-tooltip",
        ref_key: "triggerEl",
        ref: triggerEl,
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        renderSlot(_ctx.$slots, "default"),
        loaded.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["am-tooltip__tip", {
            [`is-${__props.scene}`]: true
          }]),
          ref_key: "tipEl",
          ref: tipEl,
          style: normalizeStyle(unref(tipStyle))
        }, [
          createVNode(Transition, {
            name: "am-tooltip-in",
            onAfterLeave: afterLeave
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: "am-tooltip__tip-inner",
                style: normalizeStyle(`transform: translate(${unref(tipX)},${unref(tipY)});padding: ${__props.margin}`)
              }, [
                _ctx.$slots.tip ? renderSlot(_ctx.$slots, "tip", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_1$j, toDisplayString(__props.content), 1))
              ], 4), [
                [vShow, popShow.value]
              ])
            ]),
            _: 3
          })
        ], 6)) : createCommentVNode("", true)
      ], 544);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$k = "";
const _hoisted_1$i = { key: 0 };
const _hoisted_2$c = {
  key: 2,
  class: "am-divider__line"
};
const _sfc_main$l = {
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
      default: false
    },
    scene: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_AmIcon = resolveComponent("AmIcon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-divider", {
          [`is-${__props.scene}`]: __props.scene
        }]),
        style: normalizeStyle("margin:" + __props.margin + ";font-size:" + __props.size + ";")
      }, [
        __props.content ? (openBlock(), createElementBlock("span", _hoisted_1$i, toDisplayString(__props.content), 1)) : __props.icon ? (openBlock(), createBlock(_component_AmIcon, {
          key: 1,
          name: __props.icon,
          size: __props.size
        }, null, 8, ["name", "size"])) : __props.showLine ? (openBlock(), createElementBlock("i", _hoisted_2$c)) : createCommentVNode("", true)
      ], 6);
    };
  }
};
const nodeList = /* @__PURE__ */ new Map();
let startClick;
document.addEventListener("mousedown", (e2) => startClick = e2, false);
document.addEventListener(
  "mouseup",
  (e2) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e2, startClick);
      }
    }
  },
  false
);
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (binding.arg instanceof HTMLElement) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown === null || mousedown === void 0 ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some(
      (item) => item === null || item === void 0 ? void 0 : item.contains(mouseUpTarget)
    ) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex(
      (item) => item.bindingFn === binding.oldValue
    );
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
var index_vue_vue_type_style_index_0_lang$j = "";
const _hoisted_1$h = { class: "am-popup__inner" };
const _hoisted_2$b = {
  key: 0,
  class: "am-popup__hd"
};
const _hoisted_3$8 = {
  key: 0,
  class: "am-popup__title"
};
const _hoisted_4$4 = { class: "am-popup__bd" };
const _hoisted_5$3 = {
  key: 1,
  class: "am-popup__ft"
};
const _sfc_main$k = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    showCloseBtn: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    maskClose: {
      type: Boolean,
      default: true
    },
    scene: {
      type: String,
      default: "light"
    }
  },
  emits: ["update:show", "after-leave"],
  setup(__props, { emit }) {
    const props = __props;
    const zIndex = ref(popupManager.getZIndex());
    const popupStyle = computed(() => ({
      width: props.width,
      height: props.height,
      zIndex: zIndex.value
    }));
    watch(
      () => props.show,
      () => {
        props.show && (zIndex.value = popupManager.getZIndex());
      }
    );
    const pop = ref(null);
    let popEl = null;
    onMounted(() => {
      popEl = pop.value;
      document.body.appendChild(pop.value);
    });
    onUnmounted(() => {
      popEl && popEl.remove();
    });
    const close = () => {
      emit("update:show", false);
    };
    const afterLeave = () => {
      emit("after-leave", this);
    };
    const clickMask = () => {
      if (props.maskClose) {
        close();
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-popup", {
          [`is-${__props.scene}`]: __props.scene
        }]),
        ref_key: "pop",
        ref: pop
      }, [
        createVNode(Transition, { name: "mask-anime" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: "am-popup__mask",
              style: normalizeStyle("z-index:" + zIndex.value)
            }, null, 4), [
              [vShow, __props.show]
            ])
          ]),
          _: 1
        }),
        createVNode(Transition, {
          name: "popup-anime",
          onAfterLeave: afterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: "am-popup__popup",
              style: normalizeStyle(unref(popupStyle))
            }, [
              createElementVNode("div", _hoisted_1$h, [
                _ctx.$slots.hd || __props.title ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
                  __props.title ? (openBlock(), createElementBlock("div", _hoisted_3$8, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "hd"),
                  __props.showCloseBtn ? (openBlock(), createBlock(_sfc_main$v, {
                    key: 1,
                    mode: "text",
                    icon: "close",
                    "icon-size": "16px",
                    scene: __props.scene,
                    size: "small",
                    class: "am-popup__close",
                    onClick: close
                  }, null, 8, ["scene"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_4$4, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _ctx.$slots.ft ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
                  renderSlot(_ctx.$slots, "ft")
                ])) : createCommentVNode("", true)
              ]),
              createElementVNode("div", {
                class: "am-popup__cancel-part",
                onClick: clickMask
              })
            ], 4), [
              [vShow, __props.show]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$i = "";
const _hoisted_1$g = ["aria-valuenow"];
const _hoisted_2$a = {
  key: 0,
  class: "am-progress-bar"
};
const _hoisted_3$7 = {
  key: 0,
  class: "am-progress-bar__innerText"
};
const _hoisted_4$3 = { viewBox: "0 0 100 100" };
const _hoisted_5$2 = ["d", "stroke-width"];
const _hoisted_6 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_7 = { key: 0 };
const _sfc_main$j = {
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
      default: false
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
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: null,
      default: "#111111"
    },
    format: {
      type: Function,
      default: (percentage) => `${percentage}%`
    }
  },
  setup(__props) {
    const props = __props;
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (typeof color === "function") {
        return color(percentage);
      }
      if (typeof color === "string") {
        return color;
      }
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index2) => {
        if (typeof seriesColor === "string") {
          return {
            color: seriesColor,
            percentage: (index2 + 1) * span
          };
        }
        return seriesColor;
      });
      const colors = seriesColors.sort((a, b) => a.percentage - b.percentage);
      const colorsValues = Object.values(colors);
      for (let i2 = 0; i2 < colorsValues.length; i2 += 1) {
        const c = colorsValues[i2];
        if (c.percentage > percentage) {
          return c.color;
        }
      }
      return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
    };
    const barStyle = computed(() => ({
      width: `${props.percentage}%`,
      animationDuration: `${props.duration}s`,
      backgroundColor: getCurrentColor(props.percentage)
    }));
    const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed(() => {
      if (props.type === "circle" || props.type === "dashboard") {
        return parseInt(`${50 - parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      }
      return 0;
    });
    const trackPath = computed(() => {
      const r2 = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
        M 50 50
        m 0 ${isDashboard ? "" : "-"}${r2}
        a ${r2} ${r2} 0 1 1 0 ${isDashboard ? "-" : ""}${r2 * 2}
        a ${r2} ${r2} 0 1 1 0 ${isDashboard ? "" : "-"}${r2 * 2}
        `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(
      () => ({
        strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
        strokeDashoffset: strokeDashoffset.value
      })
    );
    const circlePathStyle = computed(
      () => ({
        strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
        strokeDashoffset: strokeDashoffset.value,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
      })
    );
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        switch (props.status) {
          case "success":
            ret = "#13ce66";
            break;
          case "exception":
            ret = "#ff4949";
            break;
          case "warning":
            ret = "#e6a23c";
            break;
          default:
            ret = "#20a0ff";
        }
      }
      return ret;
    });
    const progressTextSize = computed(() => props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2);
    const content = computed(() => props.format(props.percentage));
    const slotData = computed(() => ({
      percentage: props.percentage
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-progress", [
          `am-progress--${__props.type}`,
          __props.status ? `is-${__props.status}` : "",
          {
            "am-progress--without-text": !__props.showText,
            "am-progress--text-inside": __props.textInside
          }
        ]]),
        role: "progressbar",
        "aria-valuenow": __props.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        __props.type === "line" ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
          createElementVNode("div", {
            class: "am-progress-bar__outer",
            style: normalizeStyle({ height: `${__props.strokeWidth}px` })
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                "am-progress-bar__inner",
                { "am-progress-bar__inner--indeterminate": __props.indeterminate }
              ]),
              style: normalizeStyle(unref(barStyle))
            }, [
              (__props.showText || _ctx.$slots.default) && __props.textInside ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
                renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(slotData))), () => [
                  createElementVNode("span", null, toDisplayString(unref(content)), 1)
                ])
              ])) : createCommentVNode("", true)
            ], 6)
          ], 4)
        ])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "am-progress-circle",
          style: normalizeStyle({ height: `${__props.width}px`, width: `${__props.width}px` })
        }, [
          (openBlock(), createElementBlock("svg", _hoisted_4$3, [
            createElementVNode("path", {
              class: "am-progress-circle__track",
              d: unref(trackPath),
              stroke: "#e5e9f2",
              "stroke-width": unref(relativeStrokeWidth),
              fill: "none",
              style: normalizeStyle(unref(trailPathStyle))
            }, null, 12, _hoisted_5$2),
            createElementVNode("path", {
              class: "am-progress-circle__path",
              d: unref(trackPath),
              stroke: unref(stroke),
              fill: "none",
              "stroke-linecap": __props.strokeLinecap,
              "stroke-width": __props.percentage ? unref(relativeStrokeWidth) : 0,
              style: normalizeStyle(unref(circlePathStyle))
            }, null, 12, _hoisted_6)
          ]))
        ], 4)),
        (__props.showText || _ctx.$slots.default) && !__props.textInside ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "am-progress__text",
          style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
        }, [
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(slotData))), () => [
            !__props.status ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(unref(content)), 1)) : createCommentVNode("", true)
          ])
        ], 4)) : createCommentVNode("", true)
      ], 10, _hoisted_1$g);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$h = "";
const _hoisted_1$f = ["onClick"];
const _hoisted_2$9 = { class: "am-checkbox__box" };
const _hoisted_3$6 = {
  key: 0,
  class: "am-checkbox__text"
};
const _sfc_main$i = {
  props: {
    value: {
      type: [Boolean, Array]
    },
    disabled: {
      type: Boolean,
      default: false
    },
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
  setup(__props, { emit }) {
    const props = __props;
    const selected = computed(() => {
      if (Array.isArray(props.value)) {
        return props.value.find((item) => {
          if (item === props.label) {
            return true;
          }
          return false;
        });
      }
      if (props.label) {
        return props.value === props.label;
      }
      return props.value;
    });
    const handleClick = () => {
      if (Array.isArray(props.value)) {
        let inIndex = -1;
        const newValue = JSON.parse(JSON.stringify(props.value));
        newValue.forEach((item, index2) => {
          if (item === props.label) {
            inIndex = index2;
          }
        });
        if (inIndex >= 0) {
          newValue.splice(inIndex, 1);
        } else {
          newValue.push(props.label);
        }
        emit("update:value", newValue);
        emit("change", newValue);
      } else if (props.label) {
        emit("update:value", props.label);
        emit("change", props.label);
      } else {
        emit("update:value", !props.value);
        emit("change", props.value);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-checkbox", {
          ["is-active"]: unref(selected)
        }]),
        onClick: withModifiers(handleClick, ["stop"])
      }, [
        createElementVNode("div", _hoisted_2$9, [
          createVNode(Transition, { name: "am-checkbox-anime" }, {
            default: withCtx(() => [
              withDirectives(createVNode(AmIcon, {
                name: "check-2",
                size: "18px",
                color: "#fff"
              }, null, 512), [
                [vShow, unref(selected)]
              ])
            ]),
            _: 1
          })
        ]),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_3$6, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1$f);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$g = "";
const _sfc_main$h = {};
const _hoisted_1$e = { class: "am-menu" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var AmMenu = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$1]]);
var index_vue_vue_type_style_index_0_lang$f = "";
const _hoisted_1$d = { class: "am-menu-item" };
const _hoisted_2$8 = { class: "am-menu-item__text" };
const _hoisted_3$5 = {
  key: 1,
  class: "am-menu-item__children"
};
const _sfc_main$g = {
  props: {
    icon: {
      type: String,
      default: ""
    },
    open: {
      type: String,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const level = inject("level");
    if (level === void 0) {
      provide("level", 1);
    } else {
      provide("level", level + 1);
    }
    console.log(level, "level");
    const contentStyle = computed(() => {
      return {
        paddingLeft: (level + 1) * 16 + "px"
      };
    });
    const innerOpen = ref(props.open);
    const hanlderClick = () => {
      innerOpen.value = !innerOpen.value;
    };
    return (_ctx, _cache) => {
      const _component_AmIcon = resolveComponent("AmIcon");
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "am-menu-item__content",
          style: normalizeStyle(unref(contentStyle)),
          onClick: hanlderClick
        }, [
          __props.icon ? (openBlock(), createBlock(_component_AmIcon, {
            key: 0,
            class: "am-menu-item__icon",
            name: __props.icon,
            size: "18px"
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_2$8, [
            renderSlot(_ctx.$slots, "default")
          ]),
          _ctx.$slots.children ? (openBlock(), createBlock(_component_AmIcon, {
            key: 1,
            class: "am-menu-item__down",
            name: "down",
            size: "18px"
          })) : createCommentVNode("", true)
        ], 4)) : createCommentVNode("", true),
        _ctx.$slots.children ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3$5, [
          renderSlot(_ctx.$slots, "children")
        ], 512)), [
          [vShow, innerOpen.value]
        ]) : createCommentVNode("", true)
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$e = "";
const _hoisted_1$c = { class: "am-pagination" };
const _hoisted_2$7 = { key: 1 };
const _sfc_main$f = {
  props: {
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 1
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    pageSize: {
      type: Number,
      default: 20
    },
    pageSizeOptions: {
      type: Array,
      default: () => [20, 40, 60]
    },
    showPageSize: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:current", "update:pageSize", "click-pager", "click-prev", "click-next"],
  setup(__props, { emit }) {
    const props = __props;
    const pagers = computed(() => {
      const { pagerCount } = props;
      const currentPage = Number(props.current);
      const halfPagerCount = (pagerCount - 1) / 2;
      const pageCount = Math.ceil(props.total / props.pageSize);
      let showPrevMore = false;
      let showNextMore = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true;
        }
      }
      let array = [1];
      if (showPrevMore && !showNextMore) {
        array.push("prev");
        const startPage = pageCount - (pagerCount - 3);
        for (let i2 = startPage; i2 < pageCount; i2 += 1) {
          array.push(i2);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i2 = 1; i2 <= pagerCount - 3; i2 += 1) {
          array.push(i2 + 1);
        }
        array.push("next");
      } else if (showPrevMore && showNextMore) {
        array.push("prev");
        const p = Math.ceil((pagerCount - 5) / 2);
        const n2 = Math.floor((pagerCount - 5) / 2);
        for (let i2 = currentPage - p; i2 <= currentPage + n2; i2 += 1) {
          array.push(i2);
        }
        array.push("next");
      } else {
        for (let i2 = 2; i2 < pageCount; i2 += 1) {
          array.push(i2);
        }
      }
      if (pageCount)
        array.push(pageCount);
      array = Array.from(new Set(array));
      return array;
    });
    const pagerTotal = computed(() => {
      const all = Math.ceil(props.total / props.pageSize);
      return all;
    });
    const clickPager = (num) => {
      let { current } = props;
      if (num === "prev") {
        current -= Math.floor(props.pagerCount / 2);
      } else if (num === "next") {
        current += Math.floor(props.pagerCount / 2);
      } else {
        current = num;
      }
      emit("update:current", current);
      emit("click-pager", num, current);
    };
    const clickPrev = () => {
      const current = props.current - 1;
      emit("update:current", current);
      emit("click-prev");
    };
    const clickNext = () => {
      const current = props.current + 1;
      emit("update:current", current);
      emit("click-next");
    };
    return (_ctx, _cache) => {
      const _component_AmButton = resolveComponent("AmButton");
      const _component_AmIcon = resolveComponent("AmIcon");
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(_component_AmButton, {
          class: "am-pagination__left",
          shape: "square",
          icon: "caret-left",
          "icon-size": "16px",
          disabled: __props.current <= 1,
          onClick: clickPrev
        }, null, 8, ["disabled"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagers), (item, index2) => {
          return openBlock(), createBlock(_component_AmButton, {
            class: normalizeClass(["am-pagination__number", item === __props.current ? "is-active" : ""]),
            key: index2,
            onClick: ($event) => clickPager(item)
          }, {
            default: withCtx(() => [
              item == "prev" || item === "next" ? (openBlock(), createBlock(_component_AmIcon, {
                key: 0,
                name: "ellipsis",
                size: "18px"
              })) : (openBlock(), createElementBlock("span", _hoisted_2$7, toDisplayString(item), 1))
            ]),
            _: 2
          }, 1032, ["class", "onClick"]);
        }), 128)),
        createVNode(_component_AmButton, {
          class: "am-pagination__right",
          shape: "square",
          icon: "caret-right",
          "icon-size": "16px",
          disabled: __props.current >= unref(pagerTotal),
          onClick: clickNext
        }, null, 8, ["disabled"])
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$d = "";
const _hoisted_1$b = { class: "am-logo" };
const _hoisted_2$6 = { class: "am-logo__main" };
const _hoisted_3$4 = ["src"];
const _hoisted_4$2 = { key: 1 };
const _hoisted_5$1 = {
  key: 0,
  class: "am-logo__sub"
};
const _sfc_main$e = {
  props: {
    name: {
      type: String,
      default: "all-mine"
    },
    url: {
      type: String,
      default: ""
    },
    sub: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createElementVNode("div", _hoisted_2$6, [
          __props.url ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: __props.url
          }, null, 8, _hoisted_3$4)) : (openBlock(), createElementBlock("span", _hoisted_4$2, toDisplayString(__props.name), 1))
        ]),
        __props.sub ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          createElementVNode("span", null, toDisplayString(__props.sub), 1)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$c = "";
const _hoisted_1$a = { class: "am-form" };
const _sfc_main$d = {
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
    }
  },
  setup(__props) {
    const props = __props;
    provide("form", {
      props
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$b = "";
const _hoisted_1$9 = { class: "am-form-item__bd" };
const _sfc_main$c = {
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
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const form = inject("form");
    console.log(form);
    const labelClass = computed(() => {
      return {
        [`is-${props.position || form.props.labelWidth}`]: true,
        "is-required": props.required,
        [`is-${form.props.scene}`]: form.props.scene
      };
    });
    const labelHdStyle = computed(() => {
      const position = props.position || form.props.labelWidth;
      return {
        width: position !== "top" ? `${props.labelWidth || form.props.labelWidth}` : "100%"
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-form-item", unref(labelClass)])
      }, [
        createElementVNode("div", {
          class: "am-form-item__hd",
          style: normalizeStyle(unref(labelHdStyle))
        }, [
          createElementVNode("span", null, toDisplayString(__props.label), 1)
        ], 4),
        createElementVNode("div", _hoisted_1$9, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$a = "";
const _hoisted_1$8 = { class: "am-avatar" };
const _hoisted_2$5 = ["src"];
const _hoisted_3$3 = {
  key: 0,
  class: "am-avatar__name"
};
const _sfc_main$b = {
  props: {
    url: String,
    name: String,
    avatarSize: {
      type: String,
      default: "default"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", {
          class: normalizeClass(["am-avatar__avatar", {
            [`is-${__props.avatarSize}`]: true
          }])
        }, [
          __props.url ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: __props.url
          }, null, 8, _hoisted_2$5)) : (openBlock(), createBlock(AmIcon, {
            key: 1,
            name: "account-fill",
            size: "18px"
          }))
        ], 2),
        __props.name ? (openBlock(), createElementBlock("div", _hoisted_3$3, toDisplayString(__props.name), 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$9 = "";
const _sfc_main$a = {};
const _hoisted_1$7 = { class: "am-list" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var AmList = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render]]);
var index_vue_vue_type_style_index_0_lang$8 = "";
const _sfc_main$9 = {
  props: {
    selected: {
      type: Boolean
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-list-item", {
          "is-selected": __props.selected
        }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k);
    Object.defineProperty(a, k, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k];
      }
    });
  });
  return a;
}
var lib$2 = {};
var isReactComponent$1 = {};
var buildMatchMemberExpression$1 = {};
var matchesPattern$1 = {};
var generated$4 = {};
var shallowEqual$1 = {};
Object.defineProperty(shallowEqual$1, "__esModule", {
  value: true
});
shallowEqual$1.default = shallowEqual;
function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);
  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
}
Object.defineProperty(generated$4, "__esModule", {
  value: true
});
generated$4.isAccessor = isAccessor;
generated$4.isAnyTypeAnnotation = isAnyTypeAnnotation;
generated$4.isArgumentPlaceholder = isArgumentPlaceholder;
generated$4.isArrayExpression = isArrayExpression;
generated$4.isArrayPattern = isArrayPattern;
generated$4.isArrayTypeAnnotation = isArrayTypeAnnotation;
generated$4.isArrowFunctionExpression = isArrowFunctionExpression;
generated$4.isAssignmentExpression = isAssignmentExpression;
generated$4.isAssignmentPattern = isAssignmentPattern;
generated$4.isAwaitExpression = isAwaitExpression;
generated$4.isBigIntLiteral = isBigIntLiteral;
generated$4.isBinary = isBinary;
generated$4.isBinaryExpression = isBinaryExpression;
generated$4.isBindExpression = isBindExpression;
generated$4.isBlock = isBlock;
generated$4.isBlockParent = isBlockParent;
generated$4.isBlockStatement = isBlockStatement;
generated$4.isBooleanLiteral = isBooleanLiteral;
generated$4.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
generated$4.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
generated$4.isBreakStatement = isBreakStatement;
generated$4.isCallExpression = isCallExpression;
generated$4.isCatchClause = isCatchClause;
generated$4.isClass = isClass;
generated$4.isClassAccessorProperty = isClassAccessorProperty;
generated$4.isClassBody = isClassBody;
generated$4.isClassDeclaration = isClassDeclaration;
generated$4.isClassExpression = isClassExpression;
generated$4.isClassImplements = isClassImplements;
generated$4.isClassMethod = isClassMethod;
generated$4.isClassPrivateMethod = isClassPrivateMethod;
generated$4.isClassPrivateProperty = isClassPrivateProperty;
generated$4.isClassProperty = isClassProperty;
generated$4.isCompletionStatement = isCompletionStatement;
generated$4.isConditional = isConditional;
generated$4.isConditionalExpression = isConditionalExpression;
generated$4.isContinueStatement = isContinueStatement;
generated$4.isDebuggerStatement = isDebuggerStatement;
generated$4.isDecimalLiteral = isDecimalLiteral;
generated$4.isDeclaration = isDeclaration;
generated$4.isDeclareClass = isDeclareClass;
generated$4.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
generated$4.isDeclareExportDeclaration = isDeclareExportDeclaration;
generated$4.isDeclareFunction = isDeclareFunction;
generated$4.isDeclareInterface = isDeclareInterface;
generated$4.isDeclareModule = isDeclareModule;
generated$4.isDeclareModuleExports = isDeclareModuleExports;
generated$4.isDeclareOpaqueType = isDeclareOpaqueType;
generated$4.isDeclareTypeAlias = isDeclareTypeAlias;
generated$4.isDeclareVariable = isDeclareVariable;
generated$4.isDeclaredPredicate = isDeclaredPredicate;
generated$4.isDecorator = isDecorator;
generated$4.isDirective = isDirective;
generated$4.isDirectiveLiteral = isDirectiveLiteral;
generated$4.isDoExpression = isDoExpression;
generated$4.isDoWhileStatement = isDoWhileStatement;
generated$4.isEmptyStatement = isEmptyStatement;
generated$4.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
generated$4.isEnumBody = isEnumBody;
generated$4.isEnumBooleanBody = isEnumBooleanBody;
generated$4.isEnumBooleanMember = isEnumBooleanMember;
generated$4.isEnumDeclaration = isEnumDeclaration;
generated$4.isEnumDefaultedMember = isEnumDefaultedMember;
generated$4.isEnumMember = isEnumMember;
generated$4.isEnumNumberBody = isEnumNumberBody;
generated$4.isEnumNumberMember = isEnumNumberMember;
generated$4.isEnumStringBody = isEnumStringBody;
generated$4.isEnumStringMember = isEnumStringMember;
generated$4.isEnumSymbolBody = isEnumSymbolBody;
generated$4.isExistsTypeAnnotation = isExistsTypeAnnotation;
generated$4.isExportAllDeclaration = isExportAllDeclaration;
generated$4.isExportDeclaration = isExportDeclaration;
generated$4.isExportDefaultDeclaration = isExportDefaultDeclaration;
generated$4.isExportDefaultSpecifier = isExportDefaultSpecifier;
generated$4.isExportNamedDeclaration = isExportNamedDeclaration;
generated$4.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
generated$4.isExportSpecifier = isExportSpecifier;
generated$4.isExpression = isExpression;
generated$4.isExpressionStatement = isExpressionStatement;
generated$4.isExpressionWrapper = isExpressionWrapper;
generated$4.isFile = isFile;
generated$4.isFlow = isFlow;
generated$4.isFlowBaseAnnotation = isFlowBaseAnnotation;
generated$4.isFlowDeclaration = isFlowDeclaration;
generated$4.isFlowPredicate = isFlowPredicate;
generated$4.isFlowType = isFlowType;
generated$4.isFor = isFor;
generated$4.isForInStatement = isForInStatement;
generated$4.isForOfStatement = isForOfStatement;
generated$4.isForStatement = isForStatement;
generated$4.isForXStatement = isForXStatement;
generated$4.isFunction = isFunction;
generated$4.isFunctionDeclaration = isFunctionDeclaration;
generated$4.isFunctionExpression = isFunctionExpression;
generated$4.isFunctionParent = isFunctionParent;
generated$4.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
generated$4.isFunctionTypeParam = isFunctionTypeParam;
generated$4.isGenericTypeAnnotation = isGenericTypeAnnotation;
generated$4.isIdentifier = isIdentifier;
generated$4.isIfStatement = isIfStatement;
generated$4.isImmutable = isImmutable$2;
generated$4.isImport = isImport;
generated$4.isImportAttribute = isImportAttribute;
generated$4.isImportDeclaration = isImportDeclaration;
generated$4.isImportDefaultSpecifier = isImportDefaultSpecifier;
generated$4.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
generated$4.isImportSpecifier = isImportSpecifier;
generated$4.isIndexedAccessType = isIndexedAccessType;
generated$4.isInferredPredicate = isInferredPredicate;
generated$4.isInterfaceDeclaration = isInterfaceDeclaration;
generated$4.isInterfaceExtends = isInterfaceExtends;
generated$4.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
generated$4.isInterpreterDirective = isInterpreterDirective;
generated$4.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
generated$4.isJSX = isJSX;
generated$4.isJSXAttribute = isJSXAttribute;
generated$4.isJSXClosingElement = isJSXClosingElement;
generated$4.isJSXClosingFragment = isJSXClosingFragment;
generated$4.isJSXElement = isJSXElement;
generated$4.isJSXEmptyExpression = isJSXEmptyExpression;
generated$4.isJSXExpressionContainer = isJSXExpressionContainer;
generated$4.isJSXFragment = isJSXFragment;
generated$4.isJSXIdentifier = isJSXIdentifier;
generated$4.isJSXMemberExpression = isJSXMemberExpression;
generated$4.isJSXNamespacedName = isJSXNamespacedName;
generated$4.isJSXOpeningElement = isJSXOpeningElement;
generated$4.isJSXOpeningFragment = isJSXOpeningFragment;
generated$4.isJSXSpreadAttribute = isJSXSpreadAttribute;
generated$4.isJSXSpreadChild = isJSXSpreadChild;
generated$4.isJSXText = isJSXText;
generated$4.isLVal = isLVal;
generated$4.isLabeledStatement = isLabeledStatement;
generated$4.isLiteral = isLiteral;
generated$4.isLogicalExpression = isLogicalExpression;
generated$4.isLoop = isLoop;
generated$4.isMemberExpression = isMemberExpression;
generated$4.isMetaProperty = isMetaProperty;
generated$4.isMethod = isMethod;
generated$4.isMiscellaneous = isMiscellaneous;
generated$4.isMixedTypeAnnotation = isMixedTypeAnnotation;
generated$4.isModuleDeclaration = isModuleDeclaration;
generated$4.isModuleExpression = isModuleExpression;
generated$4.isModuleSpecifier = isModuleSpecifier;
generated$4.isNewExpression = isNewExpression;
generated$4.isNoop = isNoop;
generated$4.isNullLiteral = isNullLiteral;
generated$4.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
generated$4.isNullableTypeAnnotation = isNullableTypeAnnotation;
generated$4.isNumberLiteral = isNumberLiteral;
generated$4.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
generated$4.isNumberTypeAnnotation = isNumberTypeAnnotation;
generated$4.isNumericLiteral = isNumericLiteral;
generated$4.isObjectExpression = isObjectExpression;
generated$4.isObjectMember = isObjectMember;
generated$4.isObjectMethod = isObjectMethod;
generated$4.isObjectPattern = isObjectPattern;
generated$4.isObjectProperty = isObjectProperty;
generated$4.isObjectTypeAnnotation = isObjectTypeAnnotation;
generated$4.isObjectTypeCallProperty = isObjectTypeCallProperty;
generated$4.isObjectTypeIndexer = isObjectTypeIndexer;
generated$4.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
generated$4.isObjectTypeProperty = isObjectTypeProperty;
generated$4.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
generated$4.isOpaqueType = isOpaqueType;
generated$4.isOptionalCallExpression = isOptionalCallExpression;
generated$4.isOptionalIndexedAccessType = isOptionalIndexedAccessType;
generated$4.isOptionalMemberExpression = isOptionalMemberExpression;
generated$4.isParenthesizedExpression = isParenthesizedExpression;
generated$4.isPattern = isPattern;
generated$4.isPatternLike = isPatternLike;
generated$4.isPipelineBareFunction = isPipelineBareFunction;
generated$4.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
generated$4.isPipelineTopicExpression = isPipelineTopicExpression;
generated$4.isPlaceholder = isPlaceholder;
generated$4.isPrivate = isPrivate;
generated$4.isPrivateName = isPrivateName;
generated$4.isProgram = isProgram;
generated$4.isProperty = isProperty;
generated$4.isPureish = isPureish;
generated$4.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
generated$4.isRecordExpression = isRecordExpression;
generated$4.isRegExpLiteral = isRegExpLiteral;
generated$4.isRegexLiteral = isRegexLiteral;
generated$4.isRestElement = isRestElement;
generated$4.isRestProperty = isRestProperty;
generated$4.isReturnStatement = isReturnStatement;
generated$4.isScopable = isScopable;
generated$4.isSequenceExpression = isSequenceExpression;
generated$4.isSpreadElement = isSpreadElement;
generated$4.isSpreadProperty = isSpreadProperty;
generated$4.isStandardized = isStandardized;
generated$4.isStatement = isStatement;
generated$4.isStaticBlock = isStaticBlock;
generated$4.isStringLiteral = isStringLiteral;
generated$4.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
generated$4.isStringTypeAnnotation = isStringTypeAnnotation;
generated$4.isSuper = isSuper;
generated$4.isSwitchCase = isSwitchCase;
generated$4.isSwitchStatement = isSwitchStatement;
generated$4.isSymbolTypeAnnotation = isSymbolTypeAnnotation;
generated$4.isTSAnyKeyword = isTSAnyKeyword;
generated$4.isTSArrayType = isTSArrayType;
generated$4.isTSAsExpression = isTSAsExpression;
generated$4.isTSBaseType = isTSBaseType;
generated$4.isTSBigIntKeyword = isTSBigIntKeyword;
generated$4.isTSBooleanKeyword = isTSBooleanKeyword;
generated$4.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
generated$4.isTSConditionalType = isTSConditionalType;
generated$4.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
generated$4.isTSConstructorType = isTSConstructorType;
generated$4.isTSDeclareFunction = isTSDeclareFunction;
generated$4.isTSDeclareMethod = isTSDeclareMethod;
generated$4.isTSEntityName = isTSEntityName;
generated$4.isTSEnumDeclaration = isTSEnumDeclaration;
generated$4.isTSEnumMember = isTSEnumMember;
generated$4.isTSExportAssignment = isTSExportAssignment;
generated$4.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
generated$4.isTSExternalModuleReference = isTSExternalModuleReference;
generated$4.isTSFunctionType = isTSFunctionType;
generated$4.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
generated$4.isTSImportType = isTSImportType;
generated$4.isTSIndexSignature = isTSIndexSignature;
generated$4.isTSIndexedAccessType = isTSIndexedAccessType;
generated$4.isTSInferType = isTSInferType;
generated$4.isTSInstantiationExpression = isTSInstantiationExpression;
generated$4.isTSInterfaceBody = isTSInterfaceBody;
generated$4.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
generated$4.isTSIntersectionType = isTSIntersectionType;
generated$4.isTSIntrinsicKeyword = isTSIntrinsicKeyword;
generated$4.isTSLiteralType = isTSLiteralType;
generated$4.isTSMappedType = isTSMappedType;
generated$4.isTSMethodSignature = isTSMethodSignature;
generated$4.isTSModuleBlock = isTSModuleBlock;
generated$4.isTSModuleDeclaration = isTSModuleDeclaration;
generated$4.isTSNamedTupleMember = isTSNamedTupleMember;
generated$4.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
generated$4.isTSNeverKeyword = isTSNeverKeyword;
generated$4.isTSNonNullExpression = isTSNonNullExpression;
generated$4.isTSNullKeyword = isTSNullKeyword;
generated$4.isTSNumberKeyword = isTSNumberKeyword;
generated$4.isTSObjectKeyword = isTSObjectKeyword;
generated$4.isTSOptionalType = isTSOptionalType;
generated$4.isTSParameterProperty = isTSParameterProperty;
generated$4.isTSParenthesizedType = isTSParenthesizedType;
generated$4.isTSPropertySignature = isTSPropertySignature;
generated$4.isTSQualifiedName = isTSQualifiedName;
generated$4.isTSRestType = isTSRestType;
generated$4.isTSSatisfiesExpression = isTSSatisfiesExpression;
generated$4.isTSStringKeyword = isTSStringKeyword;
generated$4.isTSSymbolKeyword = isTSSymbolKeyword;
generated$4.isTSThisType = isTSThisType;
generated$4.isTSTupleType = isTSTupleType;
generated$4.isTSType = isTSType;
generated$4.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
generated$4.isTSTypeAnnotation = isTSTypeAnnotation;
generated$4.isTSTypeAssertion = isTSTypeAssertion;
generated$4.isTSTypeElement = isTSTypeElement;
generated$4.isTSTypeLiteral = isTSTypeLiteral;
generated$4.isTSTypeOperator = isTSTypeOperator;
generated$4.isTSTypeParameter = isTSTypeParameter;
generated$4.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
generated$4.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
generated$4.isTSTypePredicate = isTSTypePredicate;
generated$4.isTSTypeQuery = isTSTypeQuery;
generated$4.isTSTypeReference = isTSTypeReference;
generated$4.isTSUndefinedKeyword = isTSUndefinedKeyword;
generated$4.isTSUnionType = isTSUnionType;
generated$4.isTSUnknownKeyword = isTSUnknownKeyword;
generated$4.isTSVoidKeyword = isTSVoidKeyword;
generated$4.isTaggedTemplateExpression = isTaggedTemplateExpression;
generated$4.isTemplateElement = isTemplateElement;
generated$4.isTemplateLiteral = isTemplateLiteral;
generated$4.isTerminatorless = isTerminatorless;
generated$4.isThisExpression = isThisExpression;
generated$4.isThisTypeAnnotation = isThisTypeAnnotation;
generated$4.isThrowStatement = isThrowStatement;
generated$4.isTopicReference = isTopicReference;
generated$4.isTryStatement = isTryStatement;
generated$4.isTupleExpression = isTupleExpression;
generated$4.isTupleTypeAnnotation = isTupleTypeAnnotation;
generated$4.isTypeAlias = isTypeAlias;
generated$4.isTypeAnnotation = isTypeAnnotation;
generated$4.isTypeCastExpression = isTypeCastExpression;
generated$4.isTypeParameter = isTypeParameter;
generated$4.isTypeParameterDeclaration = isTypeParameterDeclaration;
generated$4.isTypeParameterInstantiation = isTypeParameterInstantiation;
generated$4.isTypeScript = isTypeScript;
generated$4.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
generated$4.isUnaryExpression = isUnaryExpression;
generated$4.isUnaryLike = isUnaryLike;
generated$4.isUnionTypeAnnotation = isUnionTypeAnnotation;
generated$4.isUpdateExpression = isUpdateExpression;
generated$4.isUserWhitespacable = isUserWhitespacable;
generated$4.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
generated$4.isVariableDeclaration = isVariableDeclaration;
generated$4.isVariableDeclarator = isVariableDeclarator;
generated$4.isVariance = isVariance;
generated$4.isVoidTypeAnnotation = isVoidTypeAnnotation;
generated$4.isWhile = isWhile;
generated$4.isWhileStatement = isWhileStatement;
generated$4.isWithStatement = isWithStatement;
generated$4.isYieldExpression = isYieldExpression;
var _shallowEqual$1 = shallowEqual$1;
function isArrayExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ArrayExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isAssignmentExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "AssignmentExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBinaryExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BinaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isInterpreterDirective(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "InterpreterDirective") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDirective(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Directive") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDirectiveLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DirectiveLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBlockStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BlockStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBreakStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BreakStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isCallExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "CallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isCatchClause(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "CatchClause") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isConditionalExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ConditionalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isContinueStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ContinueStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDebuggerStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DebuggerStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDoWhileStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DoWhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEmptyStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EmptyStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExpressionStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExpressionStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFile(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "File") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isForInStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ForInStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isForStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ForStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFunctionDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "FunctionDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFunctionExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "FunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isIdentifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Identifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isIfStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "IfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isLabeledStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "LabeledStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isStringLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "StringLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNumericLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NumericLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNullLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NullLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBooleanLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BooleanLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isRegExpLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "RegExpLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isLogicalExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "LogicalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isMemberExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "MemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNewExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NewExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isProgram(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Program") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectMethod(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isRestElement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "RestElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isReturnStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ReturnStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isSequenceExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "SequenceExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isParenthesizedExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ParenthesizedExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isSwitchCase(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "SwitchCase") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isSwitchStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "SwitchStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isThisExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ThisExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isThrowStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ThrowStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTryStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TryStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isUnaryExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "UnaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isUpdateExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "UpdateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isVariableDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "VariableDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isVariableDeclarator(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "VariableDeclarator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isWhileStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "WhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isWithStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "WithStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isAssignmentPattern(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "AssignmentPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isArrayPattern(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ArrayPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isArrowFunctionExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ArrowFunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassBody(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExportAllDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExportDefaultDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExportDefaultDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExportNamedDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExportNamedDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExportSpecifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isForOfStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ForOfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isImportDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ImportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isImportDefaultSpecifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ImportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isImportNamespaceSpecifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ImportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isImportSpecifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ImportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isMetaProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "MetaProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassMethod(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectPattern(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isSpreadElement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "SpreadElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isSuper(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Super") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTaggedTemplateExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TaggedTemplateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTemplateElement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TemplateElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTemplateLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TemplateLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isYieldExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "YieldExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isAwaitExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "AwaitExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isImport(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Import") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBigIntLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BigIntLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExportNamespaceSpecifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isOptionalMemberExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "OptionalMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isOptionalCallExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "OptionalCallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassAccessorProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassAccessorProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassPrivateProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassPrivateProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassPrivateMethod(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassPrivateMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPrivateName(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "PrivateName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isStaticBlock(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "StaticBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isAnyTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "AnyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isArrayTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ArrayTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBooleanTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BooleanTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BooleanLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNullLiteralTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NullLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClassImplements(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ClassImplements") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareClass(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareClass") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareFunction(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareInterface(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareInterface") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareModule(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareModule") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareModuleExports(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareModuleExports") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareTypeAlias(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareTypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareOpaqueType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareOpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareVariable(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareVariable") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareExportDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclareExportAllDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclareExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclaredPredicate(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DeclaredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExistsTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExistsTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFunctionTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "FunctionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFunctionTypeParam(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "FunctionTypeParam") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isGenericTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "GenericTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isInferredPredicate(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "InferredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isInterfaceExtends(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "InterfaceExtends") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isInterfaceDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "InterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isInterfaceTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "InterfaceTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isIntersectionTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "IntersectionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isMixedTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "MixedTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEmptyTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EmptyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNullableTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NullableTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NumberLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNumberTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NumberTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectTypeInternalSlot(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectTypeInternalSlot") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectTypeCallProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectTypeCallProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectTypeIndexer(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectTypeIndexer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectTypeProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectTypeProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectTypeSpreadProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ObjectTypeSpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isOpaqueType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "OpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isQualifiedTypeIdentifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "QualifiedTypeIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isStringLiteralTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "StringLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isStringTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "StringTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isSymbolTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "SymbolTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isThisTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ThisTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTupleTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TupleTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeofTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TypeofTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeAlias(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeCastExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TypeCastExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeParameter(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeParameterDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeParameterInstantiation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isUnionTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "UnionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isVariance(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Variance") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isVoidTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "VoidTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumBooleanBody(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumBooleanBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumNumberBody(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumNumberBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumStringBody(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumStringBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumSymbolBody(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumSymbolBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumBooleanMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumBooleanMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumNumberMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumNumberMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumStringMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumStringMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumDefaultedMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "EnumDefaultedMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isIndexedAccessType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "IndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isOptionalIndexedAccessType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "OptionalIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXAttribute(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXClosingElement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXClosingElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXElement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXEmptyExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXEmptyExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXExpressionContainer(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXExpressionContainer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXSpreadChild(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXSpreadChild") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXIdentifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXMemberExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXNamespacedName(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXNamespacedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXOpeningElement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXOpeningElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXSpreadAttribute(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXSpreadAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXText(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXText") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXFragment(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXOpeningFragment(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXOpeningFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSXClosingFragment(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "JSXClosingFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNoop(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Noop") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPlaceholder(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Placeholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isV8IntrinsicIdentifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "V8IntrinsicIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isArgumentPlaceholder(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ArgumentPlaceholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBindExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "BindExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isImportAttribute(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ImportAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDecorator(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "Decorator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDoExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DoExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExportDefaultSpecifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ExportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isRecordExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "RecordExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTupleExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TupleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDecimalLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "DecimalLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isModuleExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "ModuleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTopicReference(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPipelineTopicExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "PipelineTopicExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPipelineBareFunction(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "PipelineBareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPipelinePrimaryTopicReference(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "PipelinePrimaryTopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSParameterProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSParameterProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSDeclareFunction(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSDeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSDeclareMethod(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSDeclareMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSQualifiedName(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSQualifiedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSCallSignatureDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSCallSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSConstructSignatureDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSConstructSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSPropertySignature(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSPropertySignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSMethodSignature(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSMethodSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSIndexSignature(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSIndexSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSAnyKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSAnyKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSBooleanKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSBooleanKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSBigIntKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSBigIntKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSIntrinsicKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSIntrinsicKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSNeverKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSNeverKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSNullKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSNullKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSNumberKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSNumberKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSObjectKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSObjectKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSStringKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSStringKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSSymbolKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSSymbolKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSUndefinedKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSUndefinedKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSUnknownKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSUnknownKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSVoidKeyword(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSVoidKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSThisType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSThisType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSFunctionType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSFunctionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSConstructorType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSConstructorType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeReference(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypePredicate(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypePredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeQuery(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeQuery") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSArrayType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSArrayType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTupleType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTupleType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSOptionalType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSOptionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSRestType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSRestType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSNamedTupleMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSNamedTupleMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSUnionType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSUnionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSIntersectionType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSIntersectionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSConditionalType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSConditionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSInferType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSInferType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSParenthesizedType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSParenthesizedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeOperator(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeOperator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSIndexedAccessType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSMappedType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSMappedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSLiteralType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSLiteralType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSExpressionWithTypeArguments(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSExpressionWithTypeArguments") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSInterfaceDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSInterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSInterfaceBody(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSInterfaceBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeAliasDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeAliasDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSInstantiationExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSInstantiationExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSAsExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSAsExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSSatisfiesExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSSatisfiesExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeAssertion(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeAssertion") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSEnumDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSEnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSEnumMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSEnumMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSModuleDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSModuleDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSModuleBlock(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSModuleBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSImportType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSImportType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSImportEqualsDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSImportEqualsDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSExternalModuleReference(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSExternalModuleReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSNonNullExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSNonNullExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSExportAssignment(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSExportAssignment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSNamespaceExportDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSNamespaceExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeParameterInstantiation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeParameterDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeParameter(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "TSTypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isStandardized(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "InterpreterDirective" === nodeType || "Directive" === nodeType || "DirectiveLiteral" === nodeType || "BlockStatement" === nodeType || "BreakStatement" === nodeType || "CallExpression" === nodeType || "CatchClause" === nodeType || "ConditionalExpression" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "File" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "Program" === nodeType || "ObjectExpression" === nodeType || "ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "RestElement" === nodeType || "ReturnStatement" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "SwitchCase" === nodeType || "SwitchStatement" === nodeType || "ThisExpression" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "VariableDeclaration" === nodeType || "VariableDeclarator" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassBody" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ExportSpecifier" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "MetaProperty" === nodeType || "ClassMethod" === nodeType || "ObjectPattern" === nodeType || "SpreadElement" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateElement" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "ExportNamespaceSpecifier" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "ClassProperty" === nodeType || "ClassAccessorProperty" === nodeType || "ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType || "StaticBlock" === nodeType || nodeType === "Placeholder" && ("Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode || "BlockStatement" === node.expectedNode || "ClassBody" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExpression(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "CallExpression" === nodeType || "ConditionalExpression" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "ObjectExpression" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "ThisExpression" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "MetaProperty" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "TypeCastExpression" === nodeType || "JSXElement" === nodeType || "JSXFragment" === nodeType || "BindExpression" === nodeType || "DoExpression" === nodeType || "RecordExpression" === nodeType || "TupleExpression" === nodeType || "DecimalLiteral" === nodeType || "ModuleExpression" === nodeType || "TopicReference" === nodeType || "PipelineTopicExpression" === nodeType || "PipelineBareFunction" === nodeType || "PipelinePrimaryTopicReference" === nodeType || "TSInstantiationExpression" === nodeType || "TSAsExpression" === nodeType || "TSSatisfiesExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Expression" === node.expectedNode || "Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBinary(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("BinaryExpression" === nodeType || "LogicalExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isScopable(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBlockParent(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isBlock(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("BlockStatement" === nodeType || "Program" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("BlockStatement" === nodeType || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "ReturnStatement" === nodeType || "SwitchStatement" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "VariableDeclaration" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || nodeType === "Placeholder" && ("Statement" === node.expectedNode || "Declaration" === node.expectedNode || "BlockStatement" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTerminatorless(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isCompletionStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isConditional(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ConditionalExpression" === nodeType || "IfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isLoop(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "WhileStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isWhile(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("DoWhileStatement" === nodeType || "WhileStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExpressionWrapper(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ExpressionStatement" === nodeType || "ParenthesizedExpression" === nodeType || "TypeCastExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFor(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ForInStatement" === nodeType || "ForStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isForXStatement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ForInStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFunction(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFunctionParent(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPureish(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "ArrowFunctionExpression" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("FunctionDeclaration" === nodeType || "VariableDeclaration" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || nodeType === "Placeholder" && "Declaration" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPatternLike(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("Identifier" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSAsExpression" === nodeType || "TSSatisfiesExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isLVal(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("Identifier" === nodeType || "MemberExpression" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSParameterProperty" === nodeType || "TSAsExpression" === nodeType || "TSSatisfiesExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSEntityName(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("Identifier" === nodeType || "TSQualifiedName" === nodeType || nodeType === "Placeholder" && "Identifier" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isLiteral(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "TemplateLiteral" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isImmutable$2(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "BigIntLiteral" === nodeType || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXOpeningElement" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isUserWhitespacable(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isMethod(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ObjectMethod" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isObjectMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isProperty(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ObjectProperty" === nodeType || "ClassProperty" === nodeType || "ClassAccessorProperty" === nodeType || "ClassPrivateProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isUnaryLike(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("UnaryExpression" === nodeType || "SpreadElement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPattern(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && "Pattern" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isClass(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ClassExpression" === nodeType || "ClassDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isModuleDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isExportDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isModuleSpecifier(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ExportSpecifier" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "ExportNamespaceSpecifier" === nodeType || "ExportDefaultSpecifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isAccessor(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ClassAccessorProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isPrivate(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFlow(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ClassImplements" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "DeclaredPredicate" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "FunctionTypeParam" === nodeType || "GenericTypeAnnotation" === nodeType || "InferredPredicate" === nodeType || "InterfaceExtends" === nodeType || "InterfaceDeclaration" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType || "OpaqueType" === nodeType || "QualifiedTypeIdentifier" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "TypeAlias" === nodeType || "TypeAnnotation" === nodeType || "TypeCastExpression" === nodeType || "TypeParameter" === nodeType || "TypeParameterDeclaration" === nodeType || "TypeParameterInstantiation" === nodeType || "UnionTypeAnnotation" === nodeType || "Variance" === nodeType || "VoidTypeAnnotation" === nodeType || "EnumDeclaration" === nodeType || "EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType || "EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFlowType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "GenericTypeAnnotation" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "UnionTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFlowBaseAnnotation(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("AnyTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFlowDeclaration(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isFlowPredicate(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("DeclaredPredicate" === nodeType || "InferredPredicate" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumBody(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isEnumMember(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isJSX(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXEmptyExpression" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXIdentifier" === nodeType || "JSXMemberExpression" === nodeType || "JSXNamespacedName" === nodeType || "JSXOpeningElement" === nodeType || "JSXSpreadAttribute" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isMiscellaneous(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("Noop" === nodeType || "Placeholder" === nodeType || "V8IntrinsicIdentifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTypeScript(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("TSParameterProperty" === nodeType || "TSDeclareFunction" === nodeType || "TSDeclareMethod" === nodeType || "TSQualifiedName" === nodeType || "TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType || "TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSNamedTupleMember" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSInterfaceBody" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSInstantiationExpression" === nodeType || "TSAsExpression" === nodeType || "TSSatisfiesExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSEnumDeclaration" === nodeType || "TSEnumMember" === nodeType || "TSModuleDeclaration" === nodeType || "TSModuleBlock" === nodeType || "TSImportType" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExternalModuleReference" === nodeType || "TSNonNullExpression" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || "TSTypeAnnotation" === nodeType || "TSTypeParameterInstantiation" === nodeType || "TSTypeParameterDeclaration" === nodeType || "TSTypeParameter" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSTypeElement(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSImportType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isTSBaseType(node, opts) {
  if (!node)
    return false;
  const nodeType = node.type;
  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSLiteralType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "NumberLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "RegexLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "RestProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
function isSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  if (!node)
    return false;
  const nodeType = node.type;
  if (nodeType === "SpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }
  return false;
}
Object.defineProperty(matchesPattern$1, "__esModule", {
  value: true
});
matchesPattern$1.default = matchesPattern;
var _generated$o = generated$4;
function matchesPattern(member, match, allowPartial) {
  if (!(0, _generated$o.isMemberExpression)(member))
    return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;
  for (node = member; (0, _generated$o.isMemberExpression)(node); node = node.object) {
    nodes.push(node.property);
  }
  nodes.push(node);
  if (nodes.length < parts.length)
    return false;
  if (!allowPartial && nodes.length > parts.length)
    return false;
  for (let i2 = 0, j = nodes.length - 1; i2 < parts.length; i2++, j--) {
    const node2 = nodes[j];
    let value;
    if ((0, _generated$o.isIdentifier)(node2)) {
      value = node2.name;
    } else if ((0, _generated$o.isStringLiteral)(node2)) {
      value = node2.value;
    } else if ((0, _generated$o.isThisExpression)(node2)) {
      value = "this";
    } else {
      return false;
    }
    if (parts[i2] !== value)
      return false;
  }
  return true;
}
Object.defineProperty(buildMatchMemberExpression$1, "__esModule", {
  value: true
});
buildMatchMemberExpression$1.default = buildMatchMemberExpression;
var _matchesPattern = matchesPattern$1;
function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return (member) => (0, _matchesPattern.default)(member, parts, allowPartial);
}
Object.defineProperty(isReactComponent$1, "__esModule", {
  value: true
});
isReactComponent$1.default = void 0;
var _buildMatchMemberExpression = buildMatchMemberExpression$1;
const isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
var _default$5 = isReactComponent;
isReactComponent$1.default = _default$5;
var isCompatTag$1 = {};
Object.defineProperty(isCompatTag$1, "__esModule", {
  value: true
});
isCompatTag$1.default = isCompatTag;
function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}
var buildChildren$1 = {};
var cleanJSXElementLiteralChild$1 = {};
var generated$3 = {};
var validateNode$1 = {};
var validate$2 = {};
var definitions = {};
let fastProto = null;
function FastObject(o2) {
  if (fastProto !== null && typeof fastProto.property) {
    const result = fastProto;
    fastProto = FastObject.prototype = null;
    return result;
  }
  fastProto = FastObject.prototype = o2 == null ? /* @__PURE__ */ Object.create(null) : o2;
  return new FastObject();
}
FastObject();
var _toFastProperties_2_0_0_toFastProperties = function toFastproperties(o2) {
  return FastObject(o2);
};
var core = {};
var is$1 = {};
var isType$1 = {};
Object.defineProperty(isType$1, "__esModule", {
  value: true
});
isType$1.default = isType;
var _definitions$9 = definitions;
function isType(nodeType, targetType) {
  if (nodeType === targetType)
    return true;
  if (_definitions$9.ALIAS_KEYS[targetType])
    return false;
  const aliases = _definitions$9.FLIPPED_ALIAS_KEYS[targetType];
  if (aliases) {
    if (aliases[0] === nodeType)
      return true;
    for (const alias of aliases) {
      if (nodeType === alias)
        return true;
    }
  }
  return false;
}
var isPlaceholderType$1 = {};
Object.defineProperty(isPlaceholderType$1, "__esModule", {
  value: true
});
isPlaceholderType$1.default = isPlaceholderType;
var _definitions$8 = definitions;
function isPlaceholderType(placeholderType, targetType) {
  if (placeholderType === targetType)
    return true;
  const aliases = _definitions$8.PLACEHOLDERS_ALIAS[placeholderType];
  if (aliases) {
    for (const alias of aliases) {
      if (targetType === alias)
        return true;
    }
  }
  return false;
}
Object.defineProperty(is$1, "__esModule", {
  value: true
});
is$1.default = is;
var _shallowEqual = shallowEqual$1;
var _isType$1 = isType$1;
var _isPlaceholderType = isPlaceholderType$1;
var _definitions$7 = definitions;
function is(type, node, opts) {
  if (!node)
    return false;
  const matches = (0, _isType$1.default)(node.type, type);
  if (!matches) {
    if (!opts && node.type === "Placeholder" && type in _definitions$7.FLIPPED_ALIAS_KEYS) {
      return (0, _isPlaceholderType.default)(node.expectedNode, type);
    }
    return false;
  }
  if (typeof opts === "undefined") {
    return true;
  } else {
    return (0, _shallowEqual.default)(node, opts);
  }
}
var isValidIdentifier$1 = {};
var lib$1 = {};
var identifier$1 = {};
Object.defineProperty(identifier$1, "__esModule", {
  value: true
});
identifier$1.isIdentifierChar = isIdentifierChar;
identifier$1.isIdentifierName = isIdentifierName;
identifier$1.isIdentifierStart = isIdentifierStart;
let nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
let nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function isInAstralSet(code, set) {
  let pos = 65536;
  for (let i2 = 0, length = set.length; i2 < length; i2 += 2) {
    pos += set[i2];
    if (pos > code)
      return false;
    pos += set[i2 + 1];
    if (pos >= code)
      return true;
  }
  return false;
}
function isIdentifierStart(code) {
  if (code < 65)
    return code === 36;
  if (code <= 90)
    return true;
  if (code < 97)
    return code === 95;
  if (code <= 122)
    return true;
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code) {
  if (code < 48)
    return code === 36;
  if (code < 58)
    return true;
  if (code < 65)
    return false;
  if (code <= 90)
    return true;
  if (code < 97)
    return code === 95;
  if (code <= 122)
    return true;
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
function isIdentifierName(name) {
  let isFirst = true;
  for (let i2 = 0; i2 < name.length; i2++) {
    let cp = name.charCodeAt(i2);
    if ((cp & 64512) === 55296 && i2 + 1 < name.length) {
      const trail = name.charCodeAt(++i2);
      if ((trail & 64512) === 56320) {
        cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
      }
    }
    if (isFirst) {
      isFirst = false;
      if (!isIdentifierStart(cp)) {
        return false;
      }
    } else if (!isIdentifierChar(cp)) {
      return false;
    }
  }
  return !isFirst;
}
var keyword = {};
Object.defineProperty(keyword, "__esModule", {
  value: true
});
keyword.isKeyword = isKeyword;
keyword.isReservedWord = isReservedWord;
keyword.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
keyword.isStrictBindReservedWord = isStrictBindReservedWord;
keyword.isStrictReservedWord = isStrictReservedWord;
const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords.has(word);
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "isIdentifierChar", {
    enumerable: true,
    get: function() {
      return _identifier.isIdentifierChar;
    }
  });
  Object.defineProperty(exports, "isIdentifierName", {
    enumerable: true,
    get: function() {
      return _identifier.isIdentifierName;
    }
  });
  Object.defineProperty(exports, "isIdentifierStart", {
    enumerable: true,
    get: function() {
      return _identifier.isIdentifierStart;
    }
  });
  Object.defineProperty(exports, "isKeyword", {
    enumerable: true,
    get: function() {
      return _keyword.isKeyword;
    }
  });
  Object.defineProperty(exports, "isReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isReservedWord;
    }
  });
  Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isStrictBindOnlyReservedWord;
    }
  });
  Object.defineProperty(exports, "isStrictBindReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isStrictBindReservedWord;
    }
  });
  Object.defineProperty(exports, "isStrictReservedWord", {
    enumerable: true,
    get: function() {
      return _keyword.isStrictReservedWord;
    }
  });
  var _identifier = identifier$1;
  var _keyword = keyword;
})(lib$1);
Object.defineProperty(isValidIdentifier$1, "__esModule", {
  value: true
});
isValidIdentifier$1.default = isValidIdentifier;
var _helperValidatorIdentifier$2 = lib$1;
function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string")
    return false;
  if (reserved) {
    if ((0, _helperValidatorIdentifier$2.isKeyword)(name) || (0, _helperValidatorIdentifier$2.isStrictReservedWord)(name, true)) {
      return false;
    }
  }
  return (0, _helperValidatorIdentifier$2.isIdentifierName)(name);
}
var lib = {};
Object.defineProperty(lib, "__esModule", {
  value: true
});
lib.readCodePoint = readCodePoint;
lib.readInt = readInt;
lib.readStringContents = readStringContents;
var _isDigit = function isDigit(code) {
  return code >= 48 && code <= 57;
};
const forbiddenNumericSeparatorSiblings = {
  decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
  hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
};
const isAllowedNumericSeparatorSibling = {
  bin: (ch) => ch === 48 || ch === 49,
  oct: (ch) => ch >= 48 && ch <= 55,
  dec: (ch) => ch >= 48 && ch <= 57,
  hex: (ch) => ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102
};
function readStringContents(type, input, pos, lineStart, curLine, errors) {
  const initialPos = pos;
  const initialLineStart = lineStart;
  const initialCurLine = curLine;
  let out = "";
  let firstInvalidLoc = null;
  let chunkStart = pos;
  const {
    length
  } = input;
  for (; ; ) {
    if (pos >= length) {
      errors.unterminated(initialPos, initialLineStart, initialCurLine);
      out += input.slice(chunkStart, pos);
      break;
    }
    const ch = input.charCodeAt(pos);
    if (isStringEnd(type, ch, input, pos)) {
      out += input.slice(chunkStart, pos);
      break;
    }
    if (ch === 92) {
      out += input.slice(chunkStart, pos);
      const res = readEscapedChar(input, pos, lineStart, curLine, type === "template", errors);
      if (res.ch === null && !firstInvalidLoc) {
        firstInvalidLoc = {
          pos,
          lineStart,
          curLine
        };
      } else {
        out += res.ch;
      }
      ({
        pos,
        lineStart,
        curLine
      } = res);
      chunkStart = pos;
    } else if (ch === 8232 || ch === 8233) {
      ++pos;
      ++curLine;
      lineStart = pos;
    } else if (ch === 10 || ch === 13) {
      if (type === "template") {
        out += input.slice(chunkStart, pos) + "\n";
        ++pos;
        if (ch === 13 && input.charCodeAt(pos) === 10) {
          ++pos;
        }
        ++curLine;
        chunkStart = lineStart = pos;
      } else {
        errors.unterminated(initialPos, initialLineStart, initialCurLine);
      }
    } else {
      ++pos;
    }
  }
  return {
    pos,
    str: out,
    firstInvalidLoc,
    lineStart,
    curLine,
    containsInvalid: !!firstInvalidLoc
  };
}
function isStringEnd(type, ch, input, pos) {
  if (type === "template") {
    return ch === 96 || ch === 36 && input.charCodeAt(pos + 1) === 123;
  }
  return ch === (type === "double" ? 34 : 39);
}
function readEscapedChar(input, pos, lineStart, curLine, inTemplate, errors) {
  const throwOnInvalid = !inTemplate;
  pos++;
  const res = (ch2) => ({
    pos,
    ch: ch2,
    lineStart,
    curLine
  });
  const ch = input.charCodeAt(pos++);
  switch (ch) {
    case 110:
      return res("\n");
    case 114:
      return res("\r");
    case 120: {
      let code;
      ({
        code,
        pos
      } = readHexChar(input, pos, lineStart, curLine, 2, false, throwOnInvalid, errors));
      return res(code === null ? null : String.fromCharCode(code));
    }
    case 117: {
      let code;
      ({
        code,
        pos
      } = readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors));
      return res(code === null ? null : String.fromCodePoint(code));
    }
    case 116:
      return res("	");
    case 98:
      return res("\b");
    case 118:
      return res("\v");
    case 102:
      return res("\f");
    case 13:
      if (input.charCodeAt(pos) === 10) {
        ++pos;
      }
    case 10:
      lineStart = pos;
      ++curLine;
    case 8232:
    case 8233:
      return res("");
    case 56:
    case 57:
      if (inTemplate) {
        return res(null);
      } else {
        errors.strictNumericEscape(pos - 1, lineStart, curLine);
      }
    default:
      if (ch >= 48 && ch <= 55) {
        const startPos = pos - 1;
        const match = input.slice(startPos, pos + 2).match(/^[0-7]+/);
        let octalStr = match[0];
        let octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        pos += octalStr.length - 1;
        const next = input.charCodeAt(pos);
        if (octalStr !== "0" || next === 56 || next === 57) {
          if (inTemplate) {
            return res(null);
          } else {
            errors.strictNumericEscape(startPos, lineStart, curLine);
          }
        }
        return res(String.fromCharCode(octal));
      }
      return res(String.fromCharCode(ch));
  }
}
function readHexChar(input, pos, lineStart, curLine, len, forceLen, throwOnInvalid, errors) {
  const initialPos = pos;
  let n2;
  ({
    n: n2,
    pos
  } = readInt(input, pos, lineStart, curLine, 16, len, forceLen, false, errors, !throwOnInvalid));
  if (n2 === null) {
    if (throwOnInvalid) {
      errors.invalidEscapeSequence(initialPos, lineStart, curLine);
    } else {
      pos = initialPos - 1;
    }
  }
  return {
    code: n2,
    pos
  };
}
function readInt(input, pos, lineStart, curLine, radix, len, forceLen, allowNumSeparator, errors, bailOnError) {
  const start = pos;
  const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
  const isAllowedSibling = radix === 16 ? isAllowedNumericSeparatorSibling.hex : radix === 10 ? isAllowedNumericSeparatorSibling.dec : radix === 8 ? isAllowedNumericSeparatorSibling.oct : isAllowedNumericSeparatorSibling.bin;
  let invalid = false;
  let total = 0;
  for (let i2 = 0, e2 = len == null ? Infinity : len; i2 < e2; ++i2) {
    const code = input.charCodeAt(pos);
    let val;
    if (code === 95 && allowNumSeparator !== "bail") {
      const prev = input.charCodeAt(pos - 1);
      const next = input.charCodeAt(pos + 1);
      if (!allowNumSeparator) {
        if (bailOnError)
          return {
            n: null,
            pos
          };
        errors.numericSeparatorInEscapeSequence(pos, lineStart, curLine);
      } else if (Number.isNaN(next) || !isAllowedSibling(next) || forbiddenSiblings.has(prev) || forbiddenSiblings.has(next)) {
        if (bailOnError)
          return {
            n: null,
            pos
          };
        errors.unexpectedNumericSeparator(pos, lineStart, curLine);
      }
      ++pos;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (_isDigit(code)) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      if (val <= 9 && bailOnError) {
        return {
          n: null,
          pos
        };
      } else if (val <= 9 && errors.invalidDigit(pos, lineStart, curLine, radix)) {
        val = 0;
      } else if (forceLen) {
        val = 0;
        invalid = true;
      } else {
        break;
      }
    }
    ++pos;
    total = total * radix + val;
  }
  if (pos === start || len != null && pos - start !== len || invalid) {
    return {
      n: null,
      pos
    };
  }
  return {
    n: total,
    pos
  };
}
function readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors) {
  const ch = input.charCodeAt(pos);
  let code;
  if (ch === 123) {
    ++pos;
    ({
      code,
      pos
    } = readHexChar(input, pos, lineStart, curLine, input.indexOf("}", pos) - pos, true, throwOnInvalid, errors));
    ++pos;
    if (code !== null && code > 1114111) {
      if (throwOnInvalid) {
        errors.invalidCodePoint(pos, lineStart, curLine);
      } else {
        return {
          code: null,
          pos
        };
      }
    }
  } else {
    ({
      code,
      pos
    } = readHexChar(input, pos, lineStart, curLine, 4, false, throwOnInvalid, errors));
  }
  return {
    code,
    pos
  };
}
var constants = {};
Object.defineProperty(constants, "__esModule", {
  value: true
});
constants.UPDATE_OPERATORS = constants.UNARY_OPERATORS = constants.STRING_UNARY_OPERATORS = constants.STATEMENT_OR_BLOCK_KEYS = constants.NUMBER_UNARY_OPERATORS = constants.NUMBER_BINARY_OPERATORS = constants.NOT_LOCAL_BINDING = constants.LOGICAL_OPERATORS = constants.INHERIT_KEYS = constants.FOR_INIT_KEYS = constants.FLATTENABLE_KEYS = constants.EQUALITY_BINARY_OPERATORS = constants.COMPARISON_BINARY_OPERATORS = constants.COMMENT_KEYS = constants.BOOLEAN_UNARY_OPERATORS = constants.BOOLEAN_NUMBER_BINARY_OPERATORS = constants.BOOLEAN_BINARY_OPERATORS = constants.BLOCK_SCOPED_SYMBOL = constants.BINARY_OPERATORS = constants.ASSIGNMENT_OPERATORS = void 0;
const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
constants.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
const FLATTENABLE_KEYS = ["body", "expressions"];
constants.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
const FOR_INIT_KEYS = ["left", "init"];
constants.FOR_INIT_KEYS = FOR_INIT_KEYS;
const COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
constants.COMMENT_KEYS = COMMENT_KEYS;
const LOGICAL_OPERATORS = ["||", "&&", "??"];
constants.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
const UPDATE_OPERATORS = ["++", "--"];
constants.UPDATE_OPERATORS = UPDATE_OPERATORS;
const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
constants.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
constants.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
const COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
constants.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
const BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
constants.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
const NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
constants.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
const BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS, "|>"];
constants.BINARY_OPERATORS = BINARY_OPERATORS;
const ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map((op) => op + "="), ...LOGICAL_OPERATORS.map((op) => op + "=")];
constants.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS;
const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
constants.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
constants.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
const STRING_UNARY_OPERATORS = ["typeof"];
constants.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
const UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
constants.UNARY_OPERATORS = UNARY_OPERATORS;
const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
constants.INHERIT_KEYS = INHERIT_KEYS;
const BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
constants.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
const NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
constants.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;
var utils = {};
Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.VISITOR_KEYS = utils.NODE_PARENT_VALIDATIONS = utils.NODE_FIELDS = utils.FLIPPED_ALIAS_KEYS = utils.DEPRECATED_KEYS = utils.BUILDER_KEYS = utils.ALIAS_KEYS = void 0;
utils.arrayOf = arrayOf;
utils.arrayOfType = arrayOfType;
utils.assertEach = assertEach;
utils.assertNodeOrValueType = assertNodeOrValueType;
utils.assertNodeType = assertNodeType;
utils.assertOneOf = assertOneOf;
utils.assertOptionalChainStart = assertOptionalChainStart;
utils.assertShape = assertShape;
utils.assertValueType = assertValueType;
utils.chain = chain;
utils.default = defineType$5;
utils.defineAliasedType = defineAliasedType;
utils.typeIs = typeIs;
utils.validate = validate$1;
utils.validateArrayOfType = validateArrayOfType;
utils.validateOptional = validateOptional;
utils.validateOptionalType = validateOptionalType;
utils.validateType = validateType;
var _is$3 = is$1;
var _validate$1 = validate$2;
const VISITOR_KEYS = {};
utils.VISITOR_KEYS = VISITOR_KEYS;
const ALIAS_KEYS = {};
utils.ALIAS_KEYS = ALIAS_KEYS;
const FLIPPED_ALIAS_KEYS = {};
utils.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
const NODE_FIELDS = {};
utils.NODE_FIELDS = NODE_FIELDS;
const BUILDER_KEYS = {};
utils.BUILDER_KEYS = BUILDER_KEYS;
const DEPRECATED_KEYS = {};
utils.DEPRECATED_KEYS = DEPRECATED_KEYS;
const NODE_PARENT_VALIDATIONS = {};
utils.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS;
function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else {
    return typeof val;
  }
}
function validate$1(validate2) {
  return {
    validate: validate2
  };
}
function typeIs(typeName) {
  return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
}
function validateType(typeName) {
  return validate$1(typeIs(typeName));
}
function validateOptional(validate2) {
  return {
    validate: validate2,
    optional: true
  };
}
function validateOptionalType(typeName) {
  return {
    validate: typeIs(typeName),
    optional: true
  };
}
function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}
function arrayOfType(typeName) {
  return arrayOf(typeIs(typeName));
}
function validateArrayOfType(typeName) {
  return validate$1(arrayOfType(typeName));
}
function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val))
      return;
    for (let i2 = 0; i2 < val.length; i2++) {
      const subkey = `${key}[${i2}]`;
      const v = val[i2];
      callback(node, subkey, v);
      if ({}.BABEL_TYPES_8_BREAKING)
        (0, _validate$1.validateChild)(node, subkey, v);
    }
  }
  validator.each = callback;
  return validator;
}
function assertOneOf(...values) {
  function validate2(node, key, val) {
    if (values.indexOf(val) < 0) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }
  validate2.oneOf = values;
  return validate2;
}
function assertNodeType(...types) {
  function validate2(node, key, val) {
    for (const type of types) {
      if ((0, _is$3.default)(type, val)) {
        (0, _validate$1.validateChild)(node, key, val);
        return;
      }
    }
    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }
  validate2.oneOfNodeTypes = types;
  return validate2;
}
function assertNodeOrValueType(...types) {
  function validate2(node, key, val) {
    for (const type of types) {
      if (getType(val) === type || (0, _is$3.default)(type, val)) {
        (0, _validate$1.validateChild)(node, key, val);
        return;
      }
    }
    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }
  validate2.oneOfNodeOrValueTypes = types;
  return validate2;
}
function assertValueType(type) {
  function validate2(node, key, val) {
    const valid = getType(val) === type;
    if (!valid) {
      throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
    }
  }
  validate2.type = type;
  return validate2;
}
function assertShape(shape) {
  function validate2(node, key, val) {
    const errors = [];
    for (const property of Object.keys(shape)) {
      try {
        (0, _validate$1.validateField)(node, property, val[property], shape[property]);
      } catch (error) {
        if (error instanceof TypeError) {
          errors.push(error.message);
          continue;
        }
        throw error;
      }
    }
    if (errors.length) {
      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:
${errors.join("\n")}`);
    }
  }
  validate2.shapeOf = shape;
  return validate2;
}
function assertOptionalChainStart() {
  function validate2(node) {
    var _current;
    let current = node;
    while (node) {
      const {
        type
      } = current;
      if (type === "OptionalCallExpression") {
        if (current.optional)
          return;
        current = current.callee;
        continue;
      }
      if (type === "OptionalMemberExpression") {
        if (current.optional)
          return;
        current = current.object;
        continue;
      }
      break;
    }
    throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
  }
  return validate2;
}
function chain(...fns) {
  function validate2(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }
  validate2.chainOf = fns;
  if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
    throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
  }
  return validate2;
}
const validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
const validFieldKeys = ["default", "optional", "validate"];
function defineAliasedType(...aliases) {
  return (type, opts = {}) => {
    let defined = opts.aliases;
    if (!defined) {
      var _store$opts$inherits$, _defined;
      if (opts.inherits)
        defined = (_store$opts$inherits$ = store[opts.inherits].aliases) == null ? void 0 : _store$opts$inherits$.slice();
      (_defined = defined) != null ? _defined : defined = [];
      opts.aliases = defined;
    }
    const additional = aliases.filter((a) => !defined.includes(a));
    defined.unshift(...additional);
    return defineType$5(type, opts);
  };
}
function defineType$5(type, opts = {}) {
  const inherits2 = opts.inherits && store[opts.inherits] || {};
  let fields = opts.fields;
  if (!fields) {
    fields = {};
    if (inherits2.fields) {
      const keys = Object.getOwnPropertyNames(inherits2.fields);
      for (const key of keys) {
        const field = inherits2.fields[key];
        const def = field.default;
        if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
          throw new Error("field defaults can only be primitives or empty arrays currently");
        }
        fields[key] = {
          default: Array.isArray(def) ? [] : def,
          optional: field.optional,
          validate: field.validate
        };
      }
    }
  }
  const visitor = opts.visitor || inherits2.visitor || [];
  const aliases = opts.aliases || inherits2.aliases || [];
  const builder = opts.builder || inherits2.builder || opts.visitor || [];
  for (const k of Object.keys(opts)) {
    if (validTypeOpts.indexOf(k) === -1) {
      throw new Error(`Unknown type option "${k}" on ${type}`);
    }
  }
  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }
  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }
  for (const key of Object.keys(fields)) {
    const field = fields[key];
    if (field.default !== void 0 && builder.indexOf(key) === -1) {
      field.optional = true;
    }
    if (field.default === void 0) {
      field.default = null;
    } else if (!field.validate && field.default != null) {
      field.validate = assertValueType(getType(field.default));
    }
    for (const k of Object.keys(field)) {
      if (validFieldKeys.indexOf(k) === -1) {
        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
      }
    }
  }
  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach((alias) => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });
  if (opts.validate) {
    NODE_PARENT_VALIDATIONS[type] = opts.validate;
  }
  store[type] = opts;
}
const store = {};
Object.defineProperty(core, "__esModule", {
  value: true
});
core.patternLikeCommon = core.functionTypeAnnotationCommon = core.functionDeclarationCommon = core.functionCommon = core.classMethodOrPropertyCommon = core.classMethodOrDeclareMethodCommon = void 0;
var _is$2 = is$1;
var _isValidIdentifier$3 = isValidIdentifier$1;
var _helperValidatorIdentifier$1 = lib$1;
var _helperStringParser = lib;
var _constants$5 = constants;
var _utils$6 = utils;
const defineType$4 = (0, _utils$6.defineAliasedType)("Standardized");
defineType$4("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: !{}.BABEL_TYPES_8_BREAKING ? [] : void 0
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
defineType$4("AssignmentExpression", {
  fields: {
    operator: {
      validate: function() {
        if (!{}.BABEL_TYPES_8_BREAKING) {
          return (0, _utils$6.assertValueType)("string");
        }
        const identifier2 = (0, _utils$6.assertOneOf)(..._constants$5.ASSIGNMENT_OPERATORS);
        const pattern = (0, _utils$6.assertOneOf)("=");
        return function(node, key, val) {
          const validator = (0, _is$2.default)("Pattern", node.left) ? pattern : identifier2;
          validator(node, key, val);
        };
      }()
    },
    left: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("LVal") : (0, _utils$6.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
defineType$4("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.BINARY_OPERATORS)
    },
    left: {
      validate: function() {
        const expression = (0, _utils$6.assertNodeType)("Expression");
        const inOp = (0, _utils$6.assertNodeType)("Expression", "PrivateName");
        const validator = Object.assign(function(node, key, val) {
          const validator2 = node.operator === "in" ? inOp : expression;
          validator2(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "PrivateName"]
        });
        return validator;
      }()
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
defineType$4("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  }
});
defineType$4("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertNodeType)("DirectiveLiteral")
    }
  }
});
defineType$4("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  }
});
defineType$4("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
defineType$4("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType$4("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, _utils$6.assertNodeType)("Expression", "Super", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  }, !{}.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils$6.assertOneOf)(true, false),
      optional: true
    }
  } : {}, {
    typeArguments: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  })
});
defineType$4("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
defineType$4("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
defineType$4("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType$4("DebuggerStatement", {
  aliases: ["Statement"]
});
defineType$4("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
defineType$4("EmptyStatement", {
  aliases: ["Statement"]
});
defineType$4("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
defineType$4("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _utils$6.assertNodeType)("Program")
    },
    comments: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? Object.assign(() => {
      }, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }) : (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("CommentBlock", "CommentLine")),
      optional: true
    },
    tokens: {
      validate: (0, _utils$6.assertEach)(Object.assign(() => {
      }, {
        type: "any"
      })),
      optional: true
    }
  }
});
defineType$4("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils$6.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _utils$6.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
const functionCommon = () => ({
  params: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Identifier", "Pattern", "RestElement")))
  },
  generator: {
    default: false
  },
  async: {
    default: false
  }
});
core.functionCommon = functionCommon;
const functionTypeAnnotationCommon = () => ({
  returnType: {
    validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils$6.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
});
core.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = () => Object.assign({}, functionCommon(), {
  declare: {
    validate: (0, _utils$6.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _utils$6.assertNodeType)("Identifier"),
    optional: true
  }
});
core.functionDeclarationCommon = functionDeclarationCommon;
defineType$4("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, functionDeclarationCommon(), functionTypeAnnotationCommon(), {
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    },
    predicate: {
      validate: (0, _utils$6.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
      optional: true
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: function() {
    if (!{}.BABEL_TYPES_8_BREAKING)
      return () => {
      };
    const identifier2 = (0, _utils$6.assertNodeType)("Identifier");
    return function(parent, key, node) {
      if (!(0, _is$2.default)("ExportDefaultDeclaration", parent)) {
        identifier2(node, "id", node.id);
      }
    };
  }()
});
defineType$4("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    },
    predicate: {
      validate: (0, _utils$6.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
      optional: true
    }
  })
});
const patternLikeCommon = () => ({
  typeAnnotation: {
    validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
    optional: true
  }
});
core.patternLikeCommon = patternLikeCommon;
defineType$4("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon(), {
    name: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("string"), Object.assign(function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        if (!(0, _isValidIdentifier$3.default)(val, false)) {
          throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      }, {
        type: "string"
      }))
    },
    optional: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  }),
  validate(parent, key, node) {
    if (!{}.BABEL_TYPES_8_BREAKING)
      return;
    const match = /\.(\w+)$/.exec(key);
    if (!match)
      return;
    const [, parentKey] = match;
    const nonComp = {
      computed: false
    };
    if (parentKey === "property") {
      if ((0, _is$2.default)("MemberExpression", parent, nonComp))
        return;
      if ((0, _is$2.default)("OptionalMemberExpression", parent, nonComp))
        return;
    } else if (parentKey === "key") {
      if ((0, _is$2.default)("Property", parent, nonComp))
        return;
      if ((0, _is$2.default)("Method", parent, nonComp))
        return;
    } else if (parentKey === "exported") {
      if ((0, _is$2.default)("ExportSpecifier", parent))
        return;
    } else if (parentKey === "imported") {
      if ((0, _is$2.default)("ImportSpecifier", parent, {
        imported: node
      }))
        return;
    } else if (parentKey === "meta") {
      if ((0, _is$2.default)("MetaProperty", parent, {
        meta: node
      }))
        return;
    }
    if (((0, _helperValidatorIdentifier$1.isKeyword)(node.name) || (0, _helperValidatorIdentifier$1.isReservedWord)(node.name, false)) && node.name !== "this") {
      throw new TypeError(`"${node.name}" is not a valid identifier`);
    }
  }
});
defineType$4("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (0, _utils$6.assertValueType)("string")
    },
    flags: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("string"), Object.assign(function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        const invalid = /[^gimsuy]/.exec(val);
        if (invalid) {
          throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
        }
      }, {
        type: "string"
      })),
      default: ""
    }
  }
});
defineType$4("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("MemberExpression", {
  builder: ["object", "property", "computed", ...!{}.BABEL_TYPES_8_BREAKING ? ["optional"] : []],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: Object.assign({
    object: {
      validate: (0, _utils$6.assertNodeType)("Expression", "Super")
    },
    property: {
      validate: function() {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "PrivateName");
        const computed2 = (0, _utils$6.assertNodeType)("Expression");
        const validator = function(node, key, val) {
          const validator2 = node.computed ? computed2 : normal;
          validator2(node, key, val);
        };
        validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
        return validator;
      }()
    },
    computed: {
      default: false
    }
  }, !{}.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils$6.assertOneOf)(true, false),
      optional: true
    }
  } : {})
});
defineType$4("NewExpression", {
  inherits: "CallExpression"
});
defineType$4("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, _utils$6.assertValueType)("string")
    },
    sourceType: {
      validate: (0, _utils$6.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, _utils$6.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
defineType$4("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
defineType$4("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
    kind: Object.assign({
      validate: (0, _utils$6.assertOneOf)("method", "get", "set")
    }, !{}.BABEL_TYPES_8_BREAKING ? {
      default: "method"
    } : {}),
    computed: {
      default: false
    },
    key: {
      validate: function() {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
        const computed2 = (0, _utils$6.assertNodeType)("Expression");
        const validator = function(node, key, val) {
          const validator2 = node.computed ? computed2 : normal;
          validator2(node, key, val);
        };
        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"];
        return validator;
      }()
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
defineType$4("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", ...!{}.BABEL_TYPES_8_BREAKING ? ["decorators"] : []],
  fields: {
    computed: {
      default: false
    },
    key: {
      validate: function() {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName");
        const computed2 = (0, _utils$6.assertNodeType)("Expression");
        const validator = Object.assign(function(node, key, val) {
          const validator2 = node.computed ? computed2 : normal;
          validator2(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
        });
        return validator;
      }()
    },
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), Object.assign(function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        if (val && node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
      }, {
        type: "boolean"
      }), function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        if (val && !(0, _is$2.default)("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }),
      default: false
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function() {
    const pattern = (0, _utils$6.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion");
    const expression = (0, _utils$6.assertNodeType)("Expression");
    return function(parent, key, node) {
      if (!{}.BABEL_TYPES_8_BREAKING)
        return;
      const validator = (0, _is$2.default)("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
defineType$4("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon(), {
    argument: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("LVal") : (0, _utils$6.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    optional: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  }),
  validate(parent, key) {
    if (!{}.BABEL_TYPES_8_BREAKING)
      return;
    const match = /(\w+)\[(\d+)\]/.exec(key);
    if (!match)
      throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index2] = match;
    if (parent[listKey].length > +index2 + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  }
});
defineType$4("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    }
  }
});
defineType$4("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
defineType$4("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  }
});
defineType$4("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("SwitchCase")))
    }
  }
});
defineType$4("ThisExpression", {
  aliases: ["Expression"]
});
defineType$4("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertNodeType)("BlockStatement"), Object.assign(function(node) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  }
});
defineType$4("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
defineType$4("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("Expression") : (0, _utils$6.assertNodeType)("Identifier", "MemberExpression")
    },
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
defineType$4("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils$6.assertOneOf)("var", "let", "const", "using")
    },
    declarations: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("VariableDeclarator")))
    }
  },
  validate(parent, key, node) {
    if (!{}.BABEL_TYPES_8_BREAKING)
      return;
    if (!(0, _is$2.default)("ForXStatement", parent, {
      left: node
    }))
      return;
    if (node.declarations.length !== 1) {
      throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
    }
  }
});
defineType$4("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function() {
        if (!{}.BABEL_TYPES_8_BREAKING) {
          return (0, _utils$6.assertNodeType)("LVal");
        }
        const normal = (0, _utils$6.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
        const without = (0, _utils$6.assertNodeType)("Identifier");
        return function(node, key, val) {
          const validator = node.init ? normal : without;
          validator(node, key, val);
        };
      }()
    },
    definite: {
      optional: true,
      validate: (0, _utils$6.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    left: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
defineType$4("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    elements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeOrValueType)("null", "PatternLike", "LVal")))
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    optional: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  })
});
defineType$4("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
    expression: {
      validate: (0, _utils$6.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement", "Expression")
    },
    predicate: {
      validate: (0, _utils$6.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
      optional: true
    }
  })
});
defineType$4("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")))
    }
  }
});
defineType$4("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils$6.assertNodeType)("InterfaceExtends"),
      optional: true
    }
  }
});
defineType$4("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils$6.assertNodeType)("InterfaceExtends"),
      optional: true
    },
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  },
  validate: function() {
    const identifier2 = (0, _utils$6.assertNodeType)("Identifier");
    return function(parent, key, node) {
      if (!{}.BABEL_TYPES_8_BREAKING)
        return;
      if (!(0, _is$2.default)("ExportDefaultDeclaration", parent)) {
        identifier2(node, "id", node.id);
      }
    };
  }()
});
defineType$4("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _utils$6.assertNodeType)("StringLiteral")
    },
    exportKind: (0, _utils$6.validateOptional)((0, _utils$6.assertOneOf)("type", "value")),
    assertions: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportAttribute")))
    }
  }
});
defineType$4("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils$6.assertNodeType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression")
    },
    exportKind: (0, _utils$6.validateOptional)((0, _utils$6.assertOneOf)("value"))
  }
});
defineType$4("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertNodeType)("Declaration"), Object.assign(function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
      }, {
        oneOfNodeTypes: ["Declaration"]
      }), function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      })
    },
    assertions: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)(function() {
        const sourced = (0, _utils$6.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (0, _utils$6.assertNodeType)("ExportSpecifier");
        if (!{}.BABEL_TYPES_8_BREAKING)
          return sourced;
        return function(node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        };
      }()))
    },
    source: {
      validate: (0, _utils$6.assertNodeType)("StringLiteral"),
      optional: true
    },
    exportKind: (0, _utils$6.validateOptional)((0, _utils$6.assertOneOf)("type", "value"))
  }
});
defineType$4("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "StringLiteral")
    },
    exportKind: {
      validate: (0, _utils$6.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
defineType$4("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function() {
        if (!{}.BABEL_TYPES_8_BREAKING) {
          return (0, _utils$6.assertNodeType)("VariableDeclaration", "LVal");
        }
        const declaration = (0, _utils$6.assertNodeType)("VariableDeclaration");
        const lval = (0, _utils$6.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression");
        return function(node, key, val) {
          if ((0, _is$2.default)("VariableDeclaration", val)) {
            declaration(node, key, val);
          } else {
            lval(node, key, val);
          }
        };
      }()
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    },
    await: {
      default: false
    }
  }
});
defineType$4("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    assertions: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportAttribute")))
    },
    module: {
      optional: true,
      validate: (0, _utils$6.assertValueType)("boolean")
    },
    specifiers: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils$6.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, _utils$6.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType$4("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, _utils$6.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType$4("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertNodeType)("Identifier"), Object.assign(function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        let property;
        switch (val.name) {
          case "function":
            property = "sent";
            break;
          case "new":
            property = "target";
            break;
          case "import":
            property = "meta";
            break;
        }
        if (!(0, _is$2.default)("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = () => ({
  abstract: {
    validate: (0, _utils$6.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils$6.assertOneOf)("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  override: {
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: (0, _utils$6.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils$6.chain)(function() {
      const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      const computed2 = (0, _utils$6.assertNodeType)("Expression");
      return function(node, key, val) {
        const validator = node.computed ? computed2 : normal;
        validator(node, key, val);
      };
    }(), (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
  }
});
core.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = () => Object.assign({}, functionCommon(), classMethodOrPropertyCommon(), {
  params: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  kind: {
    validate: (0, _utils$6.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("string"), (0, _utils$6.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
    optional: true
  }
});
core.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
defineType$4("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  })
});
defineType$4("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    properties: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
defineType$4("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("Super", {
  aliases: ["Expression"]
});
defineType$4("TaggedTemplateExpression", {
  visitor: ["tag", "quasi", "typeParameters"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils$6.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$4("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertShape)({
        raw: {
          validate: (0, _utils$6.assertValueType)("string")
        },
        cooked: {
          validate: (0, _utils$6.assertValueType)("string"),
          optional: true
        }
      }), function templateElementCookedValidator(node) {
        const raw = node.value.raw;
        let unterminatedCalled = false;
        const error = () => {
          throw new Error("Internal @babel/types error.");
        };
        const {
          str,
          firstInvalidLoc
        } = (0, _helperStringParser.readStringContents)("template", raw, 0, 0, 0, {
          unterminated() {
            unterminatedCalled = true;
          },
          strictNumericEscape: error,
          invalidEscapeSequence: error,
          numericSeparatorInEscapeSequence: error,
          unexpectedNumericSeparator: error,
          invalidDigit: error,
          invalidCodePoint: error
        });
        if (!unterminatedCalled)
          throw new Error("Invalid raw");
        node.value.cooked = firstInvalidLoc ? null : str;
      })
    },
    tail: {
      default: false
    }
  }
});
defineType$4("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression", "TSType")), function(node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.
Expected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
defineType$4("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), Object.assign(function(node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING)
          return;
        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }, {
        type: "boolean"
      })),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("Import", {
  aliases: ["Expression"]
});
defineType$4("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    property: {
      validate: function() {
        const normal = (0, _utils$6.assertNodeType)("Identifier");
        const computed2 = (0, _utils$6.assertNodeType)("Expression");
        const validator = Object.assign(function(node, key, val) {
          const validator2 = node.computed ? computed2 : normal;
          validator2(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "Identifier"]
        });
        return validator;
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertValueType)("boolean") : (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), (0, _utils$6.assertOptionalChainStart)())
    }
  }
});
defineType$4("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertValueType)("boolean") : (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), (0, _utils$6.assertOptionalChainStart)())
    },
    typeArguments: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$4("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, classMethodOrPropertyCommon(), {
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils$6.assertNodeType)("Variance"),
      optional: true
    }
  })
});
defineType$4("ClassAccessorProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property", "Accessor"],
  fields: Object.assign({}, classMethodOrPropertyCommon(), {
    key: {
      validate: (0, _utils$6.chain)(function() {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
        const computed2 = (0, _utils$6.assertNodeType)("Expression");
        return function(node, key, val) {
          const validator = node.computed ? computed2 : normal;
          validator(node, key, val);
        };
      }(), (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
    },
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils$6.assertNodeType)("Variance"),
      optional: true
    }
  })
});
defineType$4("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators", "typeAnnotation"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, _utils$6.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    static: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      default: false
    },
    readonly: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    definite: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils$6.assertNodeType)("Variance"),
      optional: true
    }
  }
});
defineType$4("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
    kind: {
      validate: (0, _utils$6.assertOneOf)("get", "set", "method"),
      default: "method"
    },
    key: {
      validate: (0, _utils$6.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  })
});
defineType$4("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "FunctionParent"]
});
var _utils$5 = utils;
const defineType$3 = (0, _utils$5.defineAliasedType)("Flow");
const defineInterfaceishType = (name) => {
  defineType$3(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils$5.validateType)("Identifier"),
      typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
      extends: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("InterfaceExtends")),
      mixins: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("InterfaceExtends")),
      implements: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("ClassImplements")),
      body: (0, _utils$5.validateType)("ObjectTypeAnnotation")
    }
  });
};
defineType$3("AnyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["FlowType"],
  fields: {
    elementType: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("BooleanTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("NullLiteralTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ClassImplements", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
defineType$3("DeclareFunction", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    predicate: (0, _utils$5.validateOptionalType)("DeclaredPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
defineType$3("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils$5.validateType)("BlockStatement"),
    kind: (0, _utils$5.validateOptional)((0, _utils$5.assertOneOf)("CommonJS", "ES"))
  }
});
defineType$3("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, _utils$5.validateType)("TypeAnnotation")
  }
});
defineType$3("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils$5.validateOptionalType)("FlowType"),
    impltype: (0, _utils$5.validateOptionalType)("FlowType")
  }
});
defineType$3("DeclareVariable", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier")
  }
});
defineType$3("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, _utils$5.validateOptionalType)("Flow"),
    specifiers: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, _utils$5.validateOptionalType)("StringLiteral"),
    default: (0, _utils$5.validateOptional)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, _utils$5.validateType)("StringLiteral"),
    exportKind: (0, _utils$5.validateOptional)((0, _utils$5.assertOneOf)("type", "value"))
  }
});
defineType$3("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["FlowPredicate"],
  fields: {
    value: (0, _utils$5.validateType)("Flow")
  }
});
defineType$3("ExistsTypeAnnotation", {
  aliases: ["FlowType"]
});
defineType$3("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["FlowType"],
  fields: {
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FunctionTypeParam")),
    rest: (0, _utils$5.validateOptionalType)("FunctionTypeParam"),
    this: (0, _utils$5.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  fields: {
    name: (0, _utils$5.validateOptionalType)("Identifier"),
    typeAnnotation: (0, _utils$5.validateType)("FlowType"),
    optional: (0, _utils$5.validateOptional)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["FlowType"],
  fields: {
    id: (0, _utils$5.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineType$3("InferredPredicate", {
  aliases: ["FlowPredicate"]
});
defineType$3("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, _utils$5.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
defineType$3("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["FlowType"],
  fields: {
    extends: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("InterfaceExtends")),
    body: (0, _utils$5.validateType)("ObjectTypeAnnotation")
  }
});
defineType$3("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("MixedTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("EmptyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowType"],
  fields: {
    typeAnnotation: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, _utils$5.validate)((0, _utils$5.assertValueType)("number"))
  }
});
defineType$3("NumberTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, _utils$5.validate)((0, _utils$5.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: {
      validate: (0, _utils$5.arrayOfType)("ObjectTypeIndexer"),
      optional: true,
      default: []
    },
    callProperties: {
      validate: (0, _utils$5.arrayOfType)("ObjectTypeCallProperty"),
      optional: true,
      default: []
    },
    internalSlots: {
      validate: (0, _utils$5.arrayOfType)("ObjectTypeInternalSlot"),
      optional: true,
      default: []
    },
    exact: {
      validate: (0, _utils$5.assertValueType)("boolean"),
      default: false
    },
    inexact: (0, _utils$5.validateOptional)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    value: (0, _utils$5.validateType)("FlowType"),
    optional: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    method: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["UserWhitespacable"],
  fields: {
    value: (0, _utils$5.validateType)("FlowType"),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, _utils$5.validateOptionalType)("Identifier"),
    key: (0, _utils$5.validateType)("FlowType"),
    value: (0, _utils$5.validateType)("FlowType"),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    variance: (0, _utils$5.validateOptionalType)("Variance")
  }
});
defineType$3("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    key: (0, _utils$5.validateType)(["Identifier", "StringLiteral"]),
    value: (0, _utils$5.validateType)("FlowType"),
    kind: (0, _utils$5.validate)((0, _utils$5.assertOneOf)("init", "get", "set")),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    proto: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    optional: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    variance: (0, _utils$5.validateOptionalType)("Variance"),
    method: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["UserWhitespacable"],
  fields: {
    argument: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils$5.validateOptionalType)("FlowType"),
    impltype: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    qualification: (0, _utils$5.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
defineType$3("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, _utils$5.validate)((0, _utils$5.assertValueType)("string"))
  }
});
defineType$3("StringTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("SymbolTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ThisTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["FlowType"],
  fields: {
    argument: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("TypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, _utils$5.validateType)("Expression"),
    typeAnnotation: (0, _utils$5.validateType)("TypeAnnotation")
  }
});
defineType$3("TypeParameter", {
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, _utils$5.validate)((0, _utils$5.assertValueType)("string")),
    bound: (0, _utils$5.validateOptionalType)("TypeAnnotation"),
    default: (0, _utils$5.validateOptionalType)("FlowType"),
    variance: (0, _utils$5.validateOptionalType)("Variance")
  }
});
defineType$3("TypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("TypeParameter"))
  }
});
defineType$3("TypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("Variance", {
  builder: ["kind"],
  fields: {
    kind: (0, _utils$5.validate)((0, _utils$5.assertOneOf)("minus", "plus"))
  }
});
defineType$3("VoidTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    body: (0, _utils$5.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
defineType$3("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    members: (0, _utils$5.validateArrayOfType)("EnumBooleanMember"),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    members: (0, _utils$5.validateArrayOfType)("EnumNumberMember"),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    members: (0, _utils$5.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, _utils$5.validateArrayOfType)("EnumDefaultedMember"),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    init: (0, _utils$5.validateType)("BooleanLiteral")
  }
});
defineType$3("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    init: (0, _utils$5.validateType)("NumericLiteral")
  }
});
defineType$3("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    init: (0, _utils$5.validateType)("StringLiteral")
  }
});
defineType$3("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier")
  }
});
defineType$3("IndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, _utils$5.validateType)("FlowType"),
    indexType: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("OptionalIndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, _utils$5.validateType)("FlowType"),
    indexType: (0, _utils$5.validateType)("FlowType"),
    optional: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
var _utils$4 = utils;
const defineType$2 = (0, _utils$4.defineAliasedType)("JSX");
defineType$2("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, _utils$4.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
defineType$2("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
defineType$2("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["Immutable", "Expression"],
  fields: Object.assign({
    openingElement: {
      validate: (0, _utils$4.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, _utils$4.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, _utils$4.chain)((0, _utils$4.assertValueType)("array"), (0, _utils$4.assertEach)((0, _utils$4.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }, {
    selfClosing: {
      validate: (0, _utils$4.assertValueType)("boolean"),
      optional: true
    }
  })
});
defineType$2("JSXEmptyExpression", {});
defineType$2("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, _utils$4.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
defineType$2("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, _utils$4.assertNodeType)("Expression")
    }
  }
});
defineType$2("JSXIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, _utils$4.assertValueType)("string")
    }
  }
});
defineType$2("JSXMemberExpression", {
  visitor: ["object", "property"],
  fields: {
    object: {
      validate: (0, _utils$4.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier")
    }
  }
});
defineType$2("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  fields: {
    namespace: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier")
    }
  }
});
defineType$2("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: false
    },
    attributes: {
      validate: (0, _utils$4.chain)((0, _utils$4.assertValueType)("array"), (0, _utils$4.assertEach)((0, _utils$4.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, _utils$4.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$2("JSXSpreadAttribute", {
  visitor: ["argument"],
  fields: {
    argument: {
      validate: (0, _utils$4.assertNodeType)("Expression")
    }
  }
});
defineType$2("JSXText", {
  aliases: ["Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$4.assertValueType)("string")
    }
  }
});
defineType$2("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, _utils$4.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, _utils$4.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, _utils$4.chain)((0, _utils$4.assertValueType)("array"), (0, _utils$4.assertEach)((0, _utils$4.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
defineType$2("JSXOpeningFragment", {
  aliases: ["Immutable"]
});
defineType$2("JSXClosingFragment", {
  aliases: ["Immutable"]
});
var placeholders = {};
Object.defineProperty(placeholders, "__esModule", {
  value: true
});
placeholders.PLACEHOLDERS_FLIPPED_ALIAS = placeholders.PLACEHOLDERS_ALIAS = placeholders.PLACEHOLDERS = void 0;
var _utils$3 = utils;
const PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
placeholders.PLACEHOLDERS = PLACEHOLDERS;
const PLACEHOLDERS_ALIAS = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
placeholders.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS;
for (const type of PLACEHOLDERS) {
  const alias = _utils$3.ALIAS_KEYS[type];
  if (alias != null && alias.length)
    PLACEHOLDERS_ALIAS[type] = alias;
}
const PLACEHOLDERS_FLIPPED_ALIAS = {};
placeholders.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS;
Object.keys(PLACEHOLDERS_ALIAS).forEach((type) => {
  PLACEHOLDERS_ALIAS[type].forEach((alias) => {
    if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }
    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});
var _utils$2 = utils;
var _placeholders = placeholders;
const defineType$1 = (0, _utils$2.defineAliasedType)("Miscellaneous");
{
  defineType$1("Noop", {
    visitor: []
  });
}
defineType$1("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, _utils$2.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: (0, _utils$2.assertOneOf)(..._placeholders.PLACEHOLDERS)
    }
  }
});
defineType$1("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, _utils$2.assertValueType)("string")
    }
  }
});
var _utils$1 = utils;
(0, _utils$1.default)("ArgumentPlaceholder", {});
(0, _utils$1.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: !{}.BABEL_TYPES_8_BREAKING ? {
    object: {
      validate: Object.assign(() => {
      }, {
        oneOfNodeTypes: ["Expression"]
      })
    },
    callee: {
      validate: Object.assign(() => {
      }, {
        oneOfNodeTypes: ["Expression"]
      })
    }
  } : {
    object: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    },
    callee: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  }
});
(0, _utils$1.default)("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: (0, _utils$1.assertNodeType)("Identifier", "StringLiteral")
    },
    value: {
      validate: (0, _utils$1.assertNodeType)("StringLiteral")
    }
  }
});
(0, _utils$1.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  }
});
(0, _utils$1.default)("DoExpression", {
  visitor: ["body"],
  builder: ["body", "async"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, _utils$1.assertNodeType)("BlockStatement")
    },
    async: {
      validate: (0, _utils$1.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, _utils$1.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils$1.assertNodeType)("Identifier")
    }
  }
});
(0, _utils$1.default)("RecordExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils$1.chain)((0, _utils$1.assertValueType)("array"), (0, _utils$1.assertEach)((0, _utils$1.assertNodeType)("ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _utils$1.default)("TupleExpression", {
  fields: {
    elements: {
      validate: (0, _utils$1.chain)((0, _utils$1.assertValueType)("array"), (0, _utils$1.assertEach)((0, _utils$1.assertNodeType)("Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _utils$1.default)("DecimalLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$1.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils$1.default)("ModuleExpression", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils$1.assertNodeType)("Program")
    }
  },
  aliases: ["Expression"]
});
(0, _utils$1.default)("TopicReference", {
  aliases: ["Expression"]
});
(0, _utils$1.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, _utils$1.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, _utils$1.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});
var _utils = utils;
var _core = core;
var _is$1 = is$1;
const defineType = (0, _utils.defineAliasedType)("TypeScript");
const bool = (0, _utils.assertValueType)("boolean");
const tSFunctionTypeAnnotationCommon = () => ({
  returnType: {
    validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
});
defineType("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
    },
    override: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  }
});
defineType("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, (0, _core.functionDeclarationCommon)(), tSFunctionTypeAnnotationCommon())
});
defineType("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, (0, _core.classMethodOrDeclareMethodCommon)(), tSFunctionTypeAnnotationCommon())
});
defineType("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, _utils.validateType)("TSEntityName"),
    right: (0, _utils.validateType)("Identifier")
  }
});
const signatureDeclarationCommon = () => ({
  typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
  ["parameters"]: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
  ["typeAnnotation"]: (0, _utils.validateOptionalType)("TSTypeAnnotation")
});
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon()
};
defineType("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
defineType("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = () => ({
  key: (0, _utils.validateType)("Expression"),
  computed: {
    default: false
  },
  optional: (0, _utils.validateOptional)(bool)
});
defineType("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, namedTypeElementCommon(), {
    readonly: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, _utils.validateOptionalType)("Expression"),
    kind: {
      validate: (0, _utils.assertOneOf)("get", "set")
    }
  })
});
defineType("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, signatureDeclarationCommon(), namedTypeElementCommon(), {
    kind: {
      validate: (0, _utils.assertOneOf)("method", "get", "set")
    }
  })
});
defineType("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    static: (0, _utils.validateOptional)(bool),
    parameters: (0, _utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
for (const type of tsKeywordTypes) {
  defineType(type, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}
defineType("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
const fnOrCtrBase = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"]
};
defineType("TSFunctionType", Object.assign({}, fnOrCtrBase, {
  fields: signatureDeclarationCommon()
}));
defineType("TSConstructorType", Object.assign({}, fnOrCtrBase, {
  fields: Object.assign({}, signatureDeclarationCommon(), {
    abstract: (0, _utils.validateOptional)(bool)
  })
}));
defineType("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, _utils.validateOptional)(bool)
  }
});
defineType("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName", "typeParameters"],
  fields: {
    exprName: (0, _utils.validateType)(["TSEntityName", "TSImportType"]),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
defineType("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, _utils.validateType)("TSType")
  }
});
defineType("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, _utils.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
  }
});
defineType("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: (0, _utils.validateType)("Identifier"),
    optional: {
      validate: bool,
      default: false
    },
    elementType: (0, _utils.validateType)("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, _utils.validateArrayOfType)("TSType")
  }
};
defineType("TSUnionType", unionOrIntersection);
defineType("TSIntersectionType", unionOrIntersection);
defineType("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, _utils.validateType)("TSType"),
    extendsType: (0, _utils.validateType)("TSType"),
    trueType: (0, _utils.validateType)("TSType"),
    falseType: (0, _utils.validateType)("TSType")
  }
});
defineType("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, _utils.validateType)("TSTypeParameter")
  }
});
defineType("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, _utils.validateType)("TSType"),
    indexType: (0, _utils.validateType)("TSType")
  }
});
defineType("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation", "nameType"],
  fields: {
    readonly: (0, _utils.validateOptional)((0, _utils.assertOneOf)(true, false, "+", "-")),
    typeParameter: (0, _utils.validateType)("TSTypeParameter"),
    optional: (0, _utils.validateOptional)((0, _utils.assertOneOf)(true, false, "+", "-")),
    typeAnnotation: (0, _utils.validateOptionalType)("TSType"),
    nameType: (0, _utils.validateOptionalType)("TSType")
  }
});
defineType("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: {
      validate: function() {
        const unaryExpression2 = (0, _utils.assertNodeType)("NumericLiteral", "BigIntLiteral");
        const unaryOperator = (0, _utils.assertOneOf)("-");
        const literal = (0, _utils.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral");
        function validator(parent, key, node) {
          if ((0, _is$1.default)("UnaryExpression", node)) {
            unaryOperator(node, "operator", node.operator);
            unaryExpression2(node, "argument", node.argument);
          } else {
            literal(parent, key, node);
          }
        }
        validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"];
        return validator;
      }()
    }
  }
});
defineType("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, _utils.validateType)("TSInterfaceBody")
  }
});
defineType("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
defineType("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSInstantiationExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
const TSTypeExpression = {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
};
defineType("TSAsExpression", TSTypeExpression);
defineType("TSSatisfiesExpression", TSTypeExpression);
defineType("TSTypeAssertion", {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType"),
    expression: (0, _utils.validateType)("Expression")
  }
});
defineType("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    const: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    members: (0, _utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
defineType("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
defineType("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    global: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
defineType("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent", "FunctionParent"],
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("Statement")
  }
});
defineType("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, _utils.validateType)("StringLiteral"),
    qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, _utils.validate)(bool),
    id: (0, _utils.validateType)("Identifier"),
    moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"]),
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
defineType("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("StringLiteral")
  }
});
defineType("TSNonNullExpression", {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
defineType("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
defineType("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
defineType("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TSType")
    }
  }
});
defineType("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
    }
  }
});
defineType("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
defineType("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    },
    in: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    out: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    constraint: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ALIAS_KEYS", {
    enumerable: true,
    get: function() {
      return _utils2.ALIAS_KEYS;
    }
  });
  Object.defineProperty(exports, "BUILDER_KEYS", {
    enumerable: true,
    get: function() {
      return _utils2.BUILDER_KEYS;
    }
  });
  Object.defineProperty(exports, "DEPRECATED_KEYS", {
    enumerable: true,
    get: function() {
      return _utils2.DEPRECATED_KEYS;
    }
  });
  Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
    enumerable: true,
    get: function() {
      return _utils2.FLIPPED_ALIAS_KEYS;
    }
  });
  Object.defineProperty(exports, "NODE_FIELDS", {
    enumerable: true,
    get: function() {
      return _utils2.NODE_FIELDS;
    }
  });
  Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
    enumerable: true,
    get: function() {
      return _utils2.NODE_PARENT_VALIDATIONS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS", {
    enumerable: true,
    get: function() {
      return _placeholders2.PLACEHOLDERS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
    enumerable: true,
    get: function() {
      return _placeholders2.PLACEHOLDERS_ALIAS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
    enumerable: true,
    get: function() {
      return _placeholders2.PLACEHOLDERS_FLIPPED_ALIAS;
    }
  });
  exports.TYPES = void 0;
  Object.defineProperty(exports, "VISITOR_KEYS", {
    enumerable: true,
    get: function() {
      return _utils2.VISITOR_KEYS;
    }
  });
  var _toFastProperties = _toFastProperties_2_0_0_toFastProperties;
  var _utils2 = utils;
  var _placeholders2 = placeholders;
  _toFastProperties(_utils2.VISITOR_KEYS);
  _toFastProperties(_utils2.ALIAS_KEYS);
  _toFastProperties(_utils2.FLIPPED_ALIAS_KEYS);
  _toFastProperties(_utils2.NODE_FIELDS);
  _toFastProperties(_utils2.BUILDER_KEYS);
  _toFastProperties(_utils2.DEPRECATED_KEYS);
  _toFastProperties(_placeholders2.PLACEHOLDERS_ALIAS);
  _toFastProperties(_placeholders2.PLACEHOLDERS_FLIPPED_ALIAS);
  const TYPES = [].concat(Object.keys(_utils2.VISITOR_KEYS), Object.keys(_utils2.FLIPPED_ALIAS_KEYS), Object.keys(_utils2.DEPRECATED_KEYS));
  exports.TYPES = TYPES;
})(definitions);
Object.defineProperty(validate$2, "__esModule", {
  value: true
});
validate$2.default = validate;
validate$2.validateChild = validateChild;
validate$2.validateField = validateField;
var _definitions$6 = definitions;
function validate(node, key, val) {
  if (!node)
    return;
  const fields = _definitions$6.NODE_FIELDS[node.type];
  if (!fields)
    return;
  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}
function validateField(node, key, val, field) {
  if (!(field != null && field.validate))
    return;
  if (field.optional && val == null)
    return;
  field.validate(node, key, val);
}
function validateChild(node, key, val) {
  if (val == null)
    return;
  const validate2 = _definitions$6.NODE_PARENT_VALIDATIONS[val.type];
  if (!validate2)
    return;
  validate2(node, key, val);
}
Object.defineProperty(validateNode$1, "__esModule", {
  value: true
});
validateNode$1.default = validateNode;
var _validate = validate$2;
var _$1 = lib$2;
function validateNode(node) {
  const keys = _$1.BUILDER_KEYS[node.type];
  for (const key of keys) {
    (0, _validate.default)(node, key, node[key]);
  }
  return node;
}
Object.defineProperty(generated$3, "__esModule", {
  value: true
});
generated$3.anyTypeAnnotation = anyTypeAnnotation;
generated$3.argumentPlaceholder = argumentPlaceholder;
generated$3.arrayExpression = arrayExpression;
generated$3.arrayPattern = arrayPattern;
generated$3.arrayTypeAnnotation = arrayTypeAnnotation;
generated$3.arrowFunctionExpression = arrowFunctionExpression;
generated$3.assignmentExpression = assignmentExpression;
generated$3.assignmentPattern = assignmentPattern;
generated$3.awaitExpression = awaitExpression;
generated$3.bigIntLiteral = bigIntLiteral;
generated$3.binaryExpression = binaryExpression;
generated$3.bindExpression = bindExpression;
generated$3.blockStatement = blockStatement;
generated$3.booleanLiteral = booleanLiteral;
generated$3.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation;
generated$3.booleanTypeAnnotation = booleanTypeAnnotation;
generated$3.breakStatement = breakStatement;
generated$3.callExpression = callExpression;
generated$3.catchClause = catchClause;
generated$3.classAccessorProperty = classAccessorProperty;
generated$3.classBody = classBody;
generated$3.classDeclaration = classDeclaration;
generated$3.classExpression = classExpression;
generated$3.classImplements = classImplements;
generated$3.classMethod = classMethod;
generated$3.classPrivateMethod = classPrivateMethod;
generated$3.classPrivateProperty = classPrivateProperty;
generated$3.classProperty = classProperty;
generated$3.conditionalExpression = conditionalExpression;
generated$3.continueStatement = continueStatement;
generated$3.debuggerStatement = debuggerStatement;
generated$3.decimalLiteral = decimalLiteral;
generated$3.declareClass = declareClass;
generated$3.declareExportAllDeclaration = declareExportAllDeclaration;
generated$3.declareExportDeclaration = declareExportDeclaration;
generated$3.declareFunction = declareFunction;
generated$3.declareInterface = declareInterface;
generated$3.declareModule = declareModule;
generated$3.declareModuleExports = declareModuleExports;
generated$3.declareOpaqueType = declareOpaqueType;
generated$3.declareTypeAlias = declareTypeAlias;
generated$3.declareVariable = declareVariable;
generated$3.declaredPredicate = declaredPredicate;
generated$3.decorator = decorator;
generated$3.directive = directive;
generated$3.directiveLiteral = directiveLiteral;
generated$3.doExpression = doExpression;
generated$3.doWhileStatement = doWhileStatement;
generated$3.emptyStatement = emptyStatement;
generated$3.emptyTypeAnnotation = emptyTypeAnnotation;
generated$3.enumBooleanBody = enumBooleanBody;
generated$3.enumBooleanMember = enumBooleanMember;
generated$3.enumDeclaration = enumDeclaration;
generated$3.enumDefaultedMember = enumDefaultedMember;
generated$3.enumNumberBody = enumNumberBody;
generated$3.enumNumberMember = enumNumberMember;
generated$3.enumStringBody = enumStringBody;
generated$3.enumStringMember = enumStringMember;
generated$3.enumSymbolBody = enumSymbolBody;
generated$3.existsTypeAnnotation = existsTypeAnnotation;
generated$3.exportAllDeclaration = exportAllDeclaration;
generated$3.exportDefaultDeclaration = exportDefaultDeclaration;
generated$3.exportDefaultSpecifier = exportDefaultSpecifier;
generated$3.exportNamedDeclaration = exportNamedDeclaration;
generated$3.exportNamespaceSpecifier = exportNamespaceSpecifier;
generated$3.exportSpecifier = exportSpecifier;
generated$3.expressionStatement = expressionStatement;
generated$3.file = file;
generated$3.forInStatement = forInStatement;
generated$3.forOfStatement = forOfStatement;
generated$3.forStatement = forStatement;
generated$3.functionDeclaration = functionDeclaration;
generated$3.functionExpression = functionExpression;
generated$3.functionTypeAnnotation = functionTypeAnnotation;
generated$3.functionTypeParam = functionTypeParam;
generated$3.genericTypeAnnotation = genericTypeAnnotation;
generated$3.identifier = identifier;
generated$3.ifStatement = ifStatement;
generated$3.import = _import;
generated$3.importAttribute = importAttribute;
generated$3.importDeclaration = importDeclaration;
generated$3.importDefaultSpecifier = importDefaultSpecifier;
generated$3.importNamespaceSpecifier = importNamespaceSpecifier;
generated$3.importSpecifier = importSpecifier;
generated$3.indexedAccessType = indexedAccessType;
generated$3.inferredPredicate = inferredPredicate;
generated$3.interfaceDeclaration = interfaceDeclaration;
generated$3.interfaceExtends = interfaceExtends;
generated$3.interfaceTypeAnnotation = interfaceTypeAnnotation;
generated$3.interpreterDirective = interpreterDirective;
generated$3.intersectionTypeAnnotation = intersectionTypeAnnotation;
generated$3.jSXAttribute = generated$3.jsxAttribute = jsxAttribute;
generated$3.jSXClosingElement = generated$3.jsxClosingElement = jsxClosingElement;
generated$3.jSXClosingFragment = generated$3.jsxClosingFragment = jsxClosingFragment;
generated$3.jSXElement = generated$3.jsxElement = jsxElement;
generated$3.jSXEmptyExpression = generated$3.jsxEmptyExpression = jsxEmptyExpression;
generated$3.jSXExpressionContainer = generated$3.jsxExpressionContainer = jsxExpressionContainer;
generated$3.jSXFragment = generated$3.jsxFragment = jsxFragment;
generated$3.jSXIdentifier = generated$3.jsxIdentifier = jsxIdentifier;
generated$3.jSXMemberExpression = generated$3.jsxMemberExpression = jsxMemberExpression;
generated$3.jSXNamespacedName = generated$3.jsxNamespacedName = jsxNamespacedName;
generated$3.jSXOpeningElement = generated$3.jsxOpeningElement = jsxOpeningElement;
generated$3.jSXOpeningFragment = generated$3.jsxOpeningFragment = jsxOpeningFragment;
generated$3.jSXSpreadAttribute = generated$3.jsxSpreadAttribute = jsxSpreadAttribute;
generated$3.jSXSpreadChild = generated$3.jsxSpreadChild = jsxSpreadChild;
generated$3.jSXText = generated$3.jsxText = jsxText;
generated$3.labeledStatement = labeledStatement;
generated$3.logicalExpression = logicalExpression;
generated$3.memberExpression = memberExpression;
generated$3.metaProperty = metaProperty;
generated$3.mixedTypeAnnotation = mixedTypeAnnotation;
generated$3.moduleExpression = moduleExpression;
generated$3.newExpression = newExpression;
generated$3.noop = noop;
generated$3.nullLiteral = nullLiteral;
generated$3.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation;
generated$3.nullableTypeAnnotation = nullableTypeAnnotation;
generated$3.numberLiteral = NumberLiteral;
generated$3.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation;
generated$3.numberTypeAnnotation = numberTypeAnnotation;
generated$3.numericLiteral = numericLiteral;
generated$3.objectExpression = objectExpression;
generated$3.objectMethod = objectMethod;
generated$3.objectPattern = objectPattern;
generated$3.objectProperty = objectProperty;
generated$3.objectTypeAnnotation = objectTypeAnnotation;
generated$3.objectTypeCallProperty = objectTypeCallProperty;
generated$3.objectTypeIndexer = objectTypeIndexer;
generated$3.objectTypeInternalSlot = objectTypeInternalSlot;
generated$3.objectTypeProperty = objectTypeProperty;
generated$3.objectTypeSpreadProperty = objectTypeSpreadProperty;
generated$3.opaqueType = opaqueType;
generated$3.optionalCallExpression = optionalCallExpression;
generated$3.optionalIndexedAccessType = optionalIndexedAccessType;
generated$3.optionalMemberExpression = optionalMemberExpression;
generated$3.parenthesizedExpression = parenthesizedExpression;
generated$3.pipelineBareFunction = pipelineBareFunction;
generated$3.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference;
generated$3.pipelineTopicExpression = pipelineTopicExpression;
generated$3.placeholder = placeholder;
generated$3.privateName = privateName;
generated$3.program = program;
generated$3.qualifiedTypeIdentifier = qualifiedTypeIdentifier;
generated$3.recordExpression = recordExpression;
generated$3.regExpLiteral = regExpLiteral;
generated$3.regexLiteral = RegexLiteral;
generated$3.restElement = restElement;
generated$3.restProperty = RestProperty;
generated$3.returnStatement = returnStatement;
generated$3.sequenceExpression = sequenceExpression;
generated$3.spreadElement = spreadElement;
generated$3.spreadProperty = SpreadProperty;
generated$3.staticBlock = staticBlock;
generated$3.stringLiteral = stringLiteral;
generated$3.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation;
generated$3.stringTypeAnnotation = stringTypeAnnotation;
generated$3.super = _super;
generated$3.switchCase = switchCase;
generated$3.switchStatement = switchStatement;
generated$3.symbolTypeAnnotation = symbolTypeAnnotation;
generated$3.taggedTemplateExpression = taggedTemplateExpression;
generated$3.templateElement = templateElement;
generated$3.templateLiteral = templateLiteral;
generated$3.thisExpression = thisExpression;
generated$3.thisTypeAnnotation = thisTypeAnnotation;
generated$3.throwStatement = throwStatement;
generated$3.topicReference = topicReference;
generated$3.tryStatement = tryStatement;
generated$3.tSAnyKeyword = generated$3.tsAnyKeyword = tsAnyKeyword;
generated$3.tSArrayType = generated$3.tsArrayType = tsArrayType;
generated$3.tSAsExpression = generated$3.tsAsExpression = tsAsExpression;
generated$3.tSBigIntKeyword = generated$3.tsBigIntKeyword = tsBigIntKeyword;
generated$3.tSBooleanKeyword = generated$3.tsBooleanKeyword = tsBooleanKeyword;
generated$3.tSCallSignatureDeclaration = generated$3.tsCallSignatureDeclaration = tsCallSignatureDeclaration;
generated$3.tSConditionalType = generated$3.tsConditionalType = tsConditionalType;
generated$3.tSConstructSignatureDeclaration = generated$3.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration;
generated$3.tSConstructorType = generated$3.tsConstructorType = tsConstructorType;
generated$3.tSDeclareFunction = generated$3.tsDeclareFunction = tsDeclareFunction;
generated$3.tSDeclareMethod = generated$3.tsDeclareMethod = tsDeclareMethod;
generated$3.tSEnumDeclaration = generated$3.tsEnumDeclaration = tsEnumDeclaration;
generated$3.tSEnumMember = generated$3.tsEnumMember = tsEnumMember;
generated$3.tSExportAssignment = generated$3.tsExportAssignment = tsExportAssignment;
generated$3.tSExpressionWithTypeArguments = generated$3.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments;
generated$3.tSExternalModuleReference = generated$3.tsExternalModuleReference = tsExternalModuleReference;
generated$3.tSFunctionType = generated$3.tsFunctionType = tsFunctionType;
generated$3.tSImportEqualsDeclaration = generated$3.tsImportEqualsDeclaration = tsImportEqualsDeclaration;
generated$3.tSImportType = generated$3.tsImportType = tsImportType;
generated$3.tSIndexSignature = generated$3.tsIndexSignature = tsIndexSignature;
generated$3.tSIndexedAccessType = generated$3.tsIndexedAccessType = tsIndexedAccessType;
generated$3.tSInferType = generated$3.tsInferType = tsInferType;
generated$3.tSInstantiationExpression = generated$3.tsInstantiationExpression = tsInstantiationExpression;
generated$3.tSInterfaceBody = generated$3.tsInterfaceBody = tsInterfaceBody;
generated$3.tSInterfaceDeclaration = generated$3.tsInterfaceDeclaration = tsInterfaceDeclaration;
generated$3.tSIntersectionType = generated$3.tsIntersectionType = tsIntersectionType;
generated$3.tSIntrinsicKeyword = generated$3.tsIntrinsicKeyword = tsIntrinsicKeyword;
generated$3.tSLiteralType = generated$3.tsLiteralType = tsLiteralType;
generated$3.tSMappedType = generated$3.tsMappedType = tsMappedType;
generated$3.tSMethodSignature = generated$3.tsMethodSignature = tsMethodSignature;
generated$3.tSModuleBlock = generated$3.tsModuleBlock = tsModuleBlock;
generated$3.tSModuleDeclaration = generated$3.tsModuleDeclaration = tsModuleDeclaration;
generated$3.tSNamedTupleMember = generated$3.tsNamedTupleMember = tsNamedTupleMember;
generated$3.tSNamespaceExportDeclaration = generated$3.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration;
generated$3.tSNeverKeyword = generated$3.tsNeverKeyword = tsNeverKeyword;
generated$3.tSNonNullExpression = generated$3.tsNonNullExpression = tsNonNullExpression;
generated$3.tSNullKeyword = generated$3.tsNullKeyword = tsNullKeyword;
generated$3.tSNumberKeyword = generated$3.tsNumberKeyword = tsNumberKeyword;
generated$3.tSObjectKeyword = generated$3.tsObjectKeyword = tsObjectKeyword;
generated$3.tSOptionalType = generated$3.tsOptionalType = tsOptionalType;
generated$3.tSParameterProperty = generated$3.tsParameterProperty = tsParameterProperty;
generated$3.tSParenthesizedType = generated$3.tsParenthesizedType = tsParenthesizedType;
generated$3.tSPropertySignature = generated$3.tsPropertySignature = tsPropertySignature;
generated$3.tSQualifiedName = generated$3.tsQualifiedName = tsQualifiedName;
generated$3.tSRestType = generated$3.tsRestType = tsRestType;
generated$3.tSSatisfiesExpression = generated$3.tsSatisfiesExpression = tsSatisfiesExpression;
generated$3.tSStringKeyword = generated$3.tsStringKeyword = tsStringKeyword;
generated$3.tSSymbolKeyword = generated$3.tsSymbolKeyword = tsSymbolKeyword;
generated$3.tSThisType = generated$3.tsThisType = tsThisType;
generated$3.tSTupleType = generated$3.tsTupleType = tsTupleType;
generated$3.tSTypeAliasDeclaration = generated$3.tsTypeAliasDeclaration = tsTypeAliasDeclaration;
generated$3.tSTypeAnnotation = generated$3.tsTypeAnnotation = tsTypeAnnotation;
generated$3.tSTypeAssertion = generated$3.tsTypeAssertion = tsTypeAssertion;
generated$3.tSTypeLiteral = generated$3.tsTypeLiteral = tsTypeLiteral;
generated$3.tSTypeOperator = generated$3.tsTypeOperator = tsTypeOperator;
generated$3.tSTypeParameter = generated$3.tsTypeParameter = tsTypeParameter;
generated$3.tSTypeParameterDeclaration = generated$3.tsTypeParameterDeclaration = tsTypeParameterDeclaration;
generated$3.tSTypeParameterInstantiation = generated$3.tsTypeParameterInstantiation = tsTypeParameterInstantiation;
generated$3.tSTypePredicate = generated$3.tsTypePredicate = tsTypePredicate;
generated$3.tSTypeQuery = generated$3.tsTypeQuery = tsTypeQuery;
generated$3.tSTypeReference = generated$3.tsTypeReference = tsTypeReference;
generated$3.tSUndefinedKeyword = generated$3.tsUndefinedKeyword = tsUndefinedKeyword;
generated$3.tSUnionType = generated$3.tsUnionType = tsUnionType;
generated$3.tSUnknownKeyword = generated$3.tsUnknownKeyword = tsUnknownKeyword;
generated$3.tSVoidKeyword = generated$3.tsVoidKeyword = tsVoidKeyword;
generated$3.tupleExpression = tupleExpression;
generated$3.tupleTypeAnnotation = tupleTypeAnnotation;
generated$3.typeAlias = typeAlias;
generated$3.typeAnnotation = typeAnnotation;
generated$3.typeCastExpression = typeCastExpression;
generated$3.typeParameter = typeParameter;
generated$3.typeParameterDeclaration = typeParameterDeclaration;
generated$3.typeParameterInstantiation = typeParameterInstantiation;
generated$3.typeofTypeAnnotation = typeofTypeAnnotation;
generated$3.unaryExpression = unaryExpression;
generated$3.unionTypeAnnotation = unionTypeAnnotation;
generated$3.updateExpression = updateExpression;
generated$3.v8IntrinsicIdentifier = v8IntrinsicIdentifier;
generated$3.variableDeclaration = variableDeclaration;
generated$3.variableDeclarator = variableDeclarator;
generated$3.variance = variance;
generated$3.voidTypeAnnotation = voidTypeAnnotation;
generated$3.whileStatement = whileStatement;
generated$3.withStatement = withStatement;
generated$3.yieldExpression = yieldExpression;
var _validateNode = validateNode$1;
function arrayExpression(elements = []) {
  return (0, _validateNode.default)({
    type: "ArrayExpression",
    elements
  });
}
function assignmentExpression(operator, left, right) {
  return (0, _validateNode.default)({
    type: "AssignmentExpression",
    operator,
    left,
    right
  });
}
function binaryExpression(operator, left, right) {
  return (0, _validateNode.default)({
    type: "BinaryExpression",
    operator,
    left,
    right
  });
}
function interpreterDirective(value) {
  return (0, _validateNode.default)({
    type: "InterpreterDirective",
    value
  });
}
function directive(value) {
  return (0, _validateNode.default)({
    type: "Directive",
    value
  });
}
function directiveLiteral(value) {
  return (0, _validateNode.default)({
    type: "DirectiveLiteral",
    value
  });
}
function blockStatement(body, directives = []) {
  return (0, _validateNode.default)({
    type: "BlockStatement",
    body,
    directives
  });
}
function breakStatement(label = null) {
  return (0, _validateNode.default)({
    type: "BreakStatement",
    label
  });
}
function callExpression(callee, _arguments) {
  return (0, _validateNode.default)({
    type: "CallExpression",
    callee,
    arguments: _arguments
  });
}
function catchClause(param = null, body) {
  return (0, _validateNode.default)({
    type: "CatchClause",
    param,
    body
  });
}
function conditionalExpression(test, consequent, alternate) {
  return (0, _validateNode.default)({
    type: "ConditionalExpression",
    test,
    consequent,
    alternate
  });
}
function continueStatement(label = null) {
  return (0, _validateNode.default)({
    type: "ContinueStatement",
    label
  });
}
function debuggerStatement() {
  return {
    type: "DebuggerStatement"
  };
}
function doWhileStatement(test, body) {
  return (0, _validateNode.default)({
    type: "DoWhileStatement",
    test,
    body
  });
}
function emptyStatement() {
  return {
    type: "EmptyStatement"
  };
}
function expressionStatement(expression) {
  return (0, _validateNode.default)({
    type: "ExpressionStatement",
    expression
  });
}
function file(program2, comments = null, tokens = null) {
  return (0, _validateNode.default)({
    type: "File",
    program: program2,
    comments,
    tokens
  });
}
function forInStatement(left, right, body) {
  return (0, _validateNode.default)({
    type: "ForInStatement",
    left,
    right,
    body
  });
}
function forStatement(init = null, test = null, update = null, body) {
  return (0, _validateNode.default)({
    type: "ForStatement",
    init,
    test,
    update,
    body
  });
}
function functionDeclaration(id = null, params, body, generator = false, async = false) {
  return (0, _validateNode.default)({
    type: "FunctionDeclaration",
    id,
    params,
    body,
    generator,
    async
  });
}
function functionExpression(id = null, params, body, generator = false, async = false) {
  return (0, _validateNode.default)({
    type: "FunctionExpression",
    id,
    params,
    body,
    generator,
    async
  });
}
function identifier(name) {
  return (0, _validateNode.default)({
    type: "Identifier",
    name
  });
}
function ifStatement(test, consequent, alternate = null) {
  return (0, _validateNode.default)({
    type: "IfStatement",
    test,
    consequent,
    alternate
  });
}
function labeledStatement(label, body) {
  return (0, _validateNode.default)({
    type: "LabeledStatement",
    label,
    body
  });
}
function stringLiteral(value) {
  return (0, _validateNode.default)({
    type: "StringLiteral",
    value
  });
}
function numericLiteral(value) {
  return (0, _validateNode.default)({
    type: "NumericLiteral",
    value
  });
}
function nullLiteral() {
  return {
    type: "NullLiteral"
  };
}
function booleanLiteral(value) {
  return (0, _validateNode.default)({
    type: "BooleanLiteral",
    value
  });
}
function regExpLiteral(pattern, flags = "") {
  return (0, _validateNode.default)({
    type: "RegExpLiteral",
    pattern,
    flags
  });
}
function logicalExpression(operator, left, right) {
  return (0, _validateNode.default)({
    type: "LogicalExpression",
    operator,
    left,
    right
  });
}
function memberExpression(object, property, computed2 = false, optional = null) {
  return (0, _validateNode.default)({
    type: "MemberExpression",
    object,
    property,
    computed: computed2,
    optional
  });
}
function newExpression(callee, _arguments) {
  return (0, _validateNode.default)({
    type: "NewExpression",
    callee,
    arguments: _arguments
  });
}
function program(body, directives = [], sourceType = "script", interpreter = null) {
  return (0, _validateNode.default)({
    type: "Program",
    body,
    directives,
    sourceType,
    interpreter,
    sourceFile: null
  });
}
function objectExpression(properties) {
  return (0, _validateNode.default)({
    type: "ObjectExpression",
    properties
  });
}
function objectMethod(kind = "method", key, params, body, computed2 = false, generator = false, async = false) {
  return (0, _validateNode.default)({
    type: "ObjectMethod",
    kind,
    key,
    params,
    body,
    computed: computed2,
    generator,
    async
  });
}
function objectProperty(key, value, computed2 = false, shorthand = false, decorators = null) {
  return (0, _validateNode.default)({
    type: "ObjectProperty",
    key,
    value,
    computed: computed2,
    shorthand,
    decorators
  });
}
function restElement(argument) {
  return (0, _validateNode.default)({
    type: "RestElement",
    argument
  });
}
function returnStatement(argument = null) {
  return (0, _validateNode.default)({
    type: "ReturnStatement",
    argument
  });
}
function sequenceExpression(expressions) {
  return (0, _validateNode.default)({
    type: "SequenceExpression",
    expressions
  });
}
function parenthesizedExpression(expression) {
  return (0, _validateNode.default)({
    type: "ParenthesizedExpression",
    expression
  });
}
function switchCase(test = null, consequent) {
  return (0, _validateNode.default)({
    type: "SwitchCase",
    test,
    consequent
  });
}
function switchStatement(discriminant, cases) {
  return (0, _validateNode.default)({
    type: "SwitchStatement",
    discriminant,
    cases
  });
}
function thisExpression() {
  return {
    type: "ThisExpression"
  };
}
function throwStatement(argument) {
  return (0, _validateNode.default)({
    type: "ThrowStatement",
    argument
  });
}
function tryStatement(block, handler = null, finalizer = null) {
  return (0, _validateNode.default)({
    type: "TryStatement",
    block,
    handler,
    finalizer
  });
}
function unaryExpression(operator, argument, prefix = true) {
  return (0, _validateNode.default)({
    type: "UnaryExpression",
    operator,
    argument,
    prefix
  });
}
function updateExpression(operator, argument, prefix = false) {
  return (0, _validateNode.default)({
    type: "UpdateExpression",
    operator,
    argument,
    prefix
  });
}
function variableDeclaration(kind, declarations) {
  return (0, _validateNode.default)({
    type: "VariableDeclaration",
    kind,
    declarations
  });
}
function variableDeclarator(id, init = null) {
  return (0, _validateNode.default)({
    type: "VariableDeclarator",
    id,
    init
  });
}
function whileStatement(test, body) {
  return (0, _validateNode.default)({
    type: "WhileStatement",
    test,
    body
  });
}
function withStatement(object, body) {
  return (0, _validateNode.default)({
    type: "WithStatement",
    object,
    body
  });
}
function assignmentPattern(left, right) {
  return (0, _validateNode.default)({
    type: "AssignmentPattern",
    left,
    right
  });
}
function arrayPattern(elements) {
  return (0, _validateNode.default)({
    type: "ArrayPattern",
    elements
  });
}
function arrowFunctionExpression(params, body, async = false) {
  return (0, _validateNode.default)({
    type: "ArrowFunctionExpression",
    params,
    body,
    async,
    expression: null
  });
}
function classBody(body) {
  return (0, _validateNode.default)({
    type: "ClassBody",
    body
  });
}
function classExpression(id = null, superClass = null, body, decorators = null) {
  return (0, _validateNode.default)({
    type: "ClassExpression",
    id,
    superClass,
    body,
    decorators
  });
}
function classDeclaration(id, superClass = null, body, decorators = null) {
  return (0, _validateNode.default)({
    type: "ClassDeclaration",
    id,
    superClass,
    body,
    decorators
  });
}
function exportAllDeclaration(source) {
  return (0, _validateNode.default)({
    type: "ExportAllDeclaration",
    source
  });
}
function exportDefaultDeclaration(declaration) {
  return (0, _validateNode.default)({
    type: "ExportDefaultDeclaration",
    declaration
  });
}
function exportNamedDeclaration(declaration = null, specifiers = [], source = null) {
  return (0, _validateNode.default)({
    type: "ExportNamedDeclaration",
    declaration,
    specifiers,
    source
  });
}
function exportSpecifier(local, exported) {
  return (0, _validateNode.default)({
    type: "ExportSpecifier",
    local,
    exported
  });
}
function forOfStatement(left, right, body, _await = false) {
  return (0, _validateNode.default)({
    type: "ForOfStatement",
    left,
    right,
    body,
    await: _await
  });
}
function importDeclaration(specifiers, source) {
  return (0, _validateNode.default)({
    type: "ImportDeclaration",
    specifiers,
    source
  });
}
function importDefaultSpecifier(local) {
  return (0, _validateNode.default)({
    type: "ImportDefaultSpecifier",
    local
  });
}
function importNamespaceSpecifier(local) {
  return (0, _validateNode.default)({
    type: "ImportNamespaceSpecifier",
    local
  });
}
function importSpecifier(local, imported) {
  return (0, _validateNode.default)({
    type: "ImportSpecifier",
    local,
    imported
  });
}
function metaProperty(meta, property) {
  return (0, _validateNode.default)({
    type: "MetaProperty",
    meta,
    property
  });
}
function classMethod(kind = "method", key, params, body, computed2 = false, _static = false, generator = false, async = false) {
  return (0, _validateNode.default)({
    type: "ClassMethod",
    kind,
    key,
    params,
    body,
    computed: computed2,
    static: _static,
    generator,
    async
  });
}
function objectPattern(properties) {
  return (0, _validateNode.default)({
    type: "ObjectPattern",
    properties
  });
}
function spreadElement(argument) {
  return (0, _validateNode.default)({
    type: "SpreadElement",
    argument
  });
}
function _super() {
  return {
    type: "Super"
  };
}
function taggedTemplateExpression(tag, quasi) {
  return (0, _validateNode.default)({
    type: "TaggedTemplateExpression",
    tag,
    quasi
  });
}
function templateElement(value, tail = false) {
  return (0, _validateNode.default)({
    type: "TemplateElement",
    value,
    tail
  });
}
function templateLiteral(quasis, expressions) {
  return (0, _validateNode.default)({
    type: "TemplateLiteral",
    quasis,
    expressions
  });
}
function yieldExpression(argument = null, delegate = false) {
  return (0, _validateNode.default)({
    type: "YieldExpression",
    argument,
    delegate
  });
}
function awaitExpression(argument) {
  return (0, _validateNode.default)({
    type: "AwaitExpression",
    argument
  });
}
function _import() {
  return {
    type: "Import"
  };
}
function bigIntLiteral(value) {
  return (0, _validateNode.default)({
    type: "BigIntLiteral",
    value
  });
}
function exportNamespaceSpecifier(exported) {
  return (0, _validateNode.default)({
    type: "ExportNamespaceSpecifier",
    exported
  });
}
function optionalMemberExpression(object, property, computed2 = false, optional) {
  return (0, _validateNode.default)({
    type: "OptionalMemberExpression",
    object,
    property,
    computed: computed2,
    optional
  });
}
function optionalCallExpression(callee, _arguments, optional) {
  return (0, _validateNode.default)({
    type: "OptionalCallExpression",
    callee,
    arguments: _arguments,
    optional
  });
}
function classProperty(key, value = null, typeAnnotation2 = null, decorators = null, computed2 = false, _static = false) {
  return (0, _validateNode.default)({
    type: "ClassProperty",
    key,
    value,
    typeAnnotation: typeAnnotation2,
    decorators,
    computed: computed2,
    static: _static
  });
}
function classAccessorProperty(key, value = null, typeAnnotation2 = null, decorators = null, computed2 = false, _static = false) {
  return (0, _validateNode.default)({
    type: "ClassAccessorProperty",
    key,
    value,
    typeAnnotation: typeAnnotation2,
    decorators,
    computed: computed2,
    static: _static
  });
}
function classPrivateProperty(key, value = null, decorators = null, _static = false) {
  return (0, _validateNode.default)({
    type: "ClassPrivateProperty",
    key,
    value,
    decorators,
    static: _static
  });
}
function classPrivateMethod(kind = "method", key, params, body, _static = false) {
  return (0, _validateNode.default)({
    type: "ClassPrivateMethod",
    kind,
    key,
    params,
    body,
    static: _static
  });
}
function privateName(id) {
  return (0, _validateNode.default)({
    type: "PrivateName",
    id
  });
}
function staticBlock(body) {
  return (0, _validateNode.default)({
    type: "StaticBlock",
    body
  });
}
function anyTypeAnnotation() {
  return {
    type: "AnyTypeAnnotation"
  };
}
function arrayTypeAnnotation(elementType) {
  return (0, _validateNode.default)({
    type: "ArrayTypeAnnotation",
    elementType
  });
}
function booleanTypeAnnotation() {
  return {
    type: "BooleanTypeAnnotation"
  };
}
function booleanLiteralTypeAnnotation(value) {
  return (0, _validateNode.default)({
    type: "BooleanLiteralTypeAnnotation",
    value
  });
}
function nullLiteralTypeAnnotation() {
  return {
    type: "NullLiteralTypeAnnotation"
  };
}
function classImplements(id, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "ClassImplements",
    id,
    typeParameters
  });
}
function declareClass(id, typeParameters = null, _extends = null, body) {
  return (0, _validateNode.default)({
    type: "DeclareClass",
    id,
    typeParameters,
    extends: _extends,
    body
  });
}
function declareFunction(id) {
  return (0, _validateNode.default)({
    type: "DeclareFunction",
    id
  });
}
function declareInterface(id, typeParameters = null, _extends = null, body) {
  return (0, _validateNode.default)({
    type: "DeclareInterface",
    id,
    typeParameters,
    extends: _extends,
    body
  });
}
function declareModule(id, body, kind = null) {
  return (0, _validateNode.default)({
    type: "DeclareModule",
    id,
    body,
    kind
  });
}
function declareModuleExports(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "DeclareModuleExports",
    typeAnnotation: typeAnnotation2
  });
}
function declareTypeAlias(id, typeParameters = null, right) {
  return (0, _validateNode.default)({
    type: "DeclareTypeAlias",
    id,
    typeParameters,
    right
  });
}
function declareOpaqueType(id, typeParameters = null, supertype = null) {
  return (0, _validateNode.default)({
    type: "DeclareOpaqueType",
    id,
    typeParameters,
    supertype
  });
}
function declareVariable(id) {
  return (0, _validateNode.default)({
    type: "DeclareVariable",
    id
  });
}
function declareExportDeclaration(declaration = null, specifiers = null, source = null) {
  return (0, _validateNode.default)({
    type: "DeclareExportDeclaration",
    declaration,
    specifiers,
    source
  });
}
function declareExportAllDeclaration(source) {
  return (0, _validateNode.default)({
    type: "DeclareExportAllDeclaration",
    source
  });
}
function declaredPredicate(value) {
  return (0, _validateNode.default)({
    type: "DeclaredPredicate",
    value
  });
}
function existsTypeAnnotation() {
  return {
    type: "ExistsTypeAnnotation"
  };
}
function functionTypeAnnotation(typeParameters = null, params, rest = null, returnType) {
  return (0, _validateNode.default)({
    type: "FunctionTypeAnnotation",
    typeParameters,
    params,
    rest,
    returnType
  });
}
function functionTypeParam(name = null, typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "FunctionTypeParam",
    name,
    typeAnnotation: typeAnnotation2
  });
}
function genericTypeAnnotation(id, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "GenericTypeAnnotation",
    id,
    typeParameters
  });
}
function inferredPredicate() {
  return {
    type: "InferredPredicate"
  };
}
function interfaceExtends(id, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "InterfaceExtends",
    id,
    typeParameters
  });
}
function interfaceDeclaration(id, typeParameters = null, _extends = null, body) {
  return (0, _validateNode.default)({
    type: "InterfaceDeclaration",
    id,
    typeParameters,
    extends: _extends,
    body
  });
}
function interfaceTypeAnnotation(_extends = null, body) {
  return (0, _validateNode.default)({
    type: "InterfaceTypeAnnotation",
    extends: _extends,
    body
  });
}
function intersectionTypeAnnotation(types) {
  return (0, _validateNode.default)({
    type: "IntersectionTypeAnnotation",
    types
  });
}
function mixedTypeAnnotation() {
  return {
    type: "MixedTypeAnnotation"
  };
}
function emptyTypeAnnotation() {
  return {
    type: "EmptyTypeAnnotation"
  };
}
function nullableTypeAnnotation(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "NullableTypeAnnotation",
    typeAnnotation: typeAnnotation2
  });
}
function numberLiteralTypeAnnotation(value) {
  return (0, _validateNode.default)({
    type: "NumberLiteralTypeAnnotation",
    value
  });
}
function numberTypeAnnotation() {
  return {
    type: "NumberTypeAnnotation"
  };
}
function objectTypeAnnotation(properties, indexers = [], callProperties = [], internalSlots = [], exact = false) {
  return (0, _validateNode.default)({
    type: "ObjectTypeAnnotation",
    properties,
    indexers,
    callProperties,
    internalSlots,
    exact
  });
}
function objectTypeInternalSlot(id, value, optional, _static, method) {
  return (0, _validateNode.default)({
    type: "ObjectTypeInternalSlot",
    id,
    value,
    optional,
    static: _static,
    method
  });
}
function objectTypeCallProperty(value) {
  return (0, _validateNode.default)({
    type: "ObjectTypeCallProperty",
    value,
    static: null
  });
}
function objectTypeIndexer(id = null, key, value, variance2 = null) {
  return (0, _validateNode.default)({
    type: "ObjectTypeIndexer",
    id,
    key,
    value,
    variance: variance2,
    static: null
  });
}
function objectTypeProperty(key, value, variance2 = null) {
  return (0, _validateNode.default)({
    type: "ObjectTypeProperty",
    key,
    value,
    variance: variance2,
    kind: null,
    method: null,
    optional: null,
    proto: null,
    static: null
  });
}
function objectTypeSpreadProperty(argument) {
  return (0, _validateNode.default)({
    type: "ObjectTypeSpreadProperty",
    argument
  });
}
function opaqueType(id, typeParameters = null, supertype = null, impltype) {
  return (0, _validateNode.default)({
    type: "OpaqueType",
    id,
    typeParameters,
    supertype,
    impltype
  });
}
function qualifiedTypeIdentifier(id, qualification) {
  return (0, _validateNode.default)({
    type: "QualifiedTypeIdentifier",
    id,
    qualification
  });
}
function stringLiteralTypeAnnotation(value) {
  return (0, _validateNode.default)({
    type: "StringLiteralTypeAnnotation",
    value
  });
}
function stringTypeAnnotation() {
  return {
    type: "StringTypeAnnotation"
  };
}
function symbolTypeAnnotation() {
  return {
    type: "SymbolTypeAnnotation"
  };
}
function thisTypeAnnotation() {
  return {
    type: "ThisTypeAnnotation"
  };
}
function tupleTypeAnnotation(types) {
  return (0, _validateNode.default)({
    type: "TupleTypeAnnotation",
    types
  });
}
function typeofTypeAnnotation(argument) {
  return (0, _validateNode.default)({
    type: "TypeofTypeAnnotation",
    argument
  });
}
function typeAlias(id, typeParameters = null, right) {
  return (0, _validateNode.default)({
    type: "TypeAlias",
    id,
    typeParameters,
    right
  });
}
function typeAnnotation(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TypeAnnotation",
    typeAnnotation: typeAnnotation2
  });
}
function typeCastExpression(expression, typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TypeCastExpression",
    expression,
    typeAnnotation: typeAnnotation2
  });
}
function typeParameter(bound = null, _default2 = null, variance2 = null) {
  return (0, _validateNode.default)({
    type: "TypeParameter",
    bound,
    default: _default2,
    variance: variance2,
    name: null
  });
}
function typeParameterDeclaration(params) {
  return (0, _validateNode.default)({
    type: "TypeParameterDeclaration",
    params
  });
}
function typeParameterInstantiation(params) {
  return (0, _validateNode.default)({
    type: "TypeParameterInstantiation",
    params
  });
}
function unionTypeAnnotation(types) {
  return (0, _validateNode.default)({
    type: "UnionTypeAnnotation",
    types
  });
}
function variance(kind) {
  return (0, _validateNode.default)({
    type: "Variance",
    kind
  });
}
function voidTypeAnnotation() {
  return {
    type: "VoidTypeAnnotation"
  };
}
function enumDeclaration(id, body) {
  return (0, _validateNode.default)({
    type: "EnumDeclaration",
    id,
    body
  });
}
function enumBooleanBody(members) {
  return (0, _validateNode.default)({
    type: "EnumBooleanBody",
    members,
    explicitType: null,
    hasUnknownMembers: null
  });
}
function enumNumberBody(members) {
  return (0, _validateNode.default)({
    type: "EnumNumberBody",
    members,
    explicitType: null,
    hasUnknownMembers: null
  });
}
function enumStringBody(members) {
  return (0, _validateNode.default)({
    type: "EnumStringBody",
    members,
    explicitType: null,
    hasUnknownMembers: null
  });
}
function enumSymbolBody(members) {
  return (0, _validateNode.default)({
    type: "EnumSymbolBody",
    members,
    hasUnknownMembers: null
  });
}
function enumBooleanMember(id) {
  return (0, _validateNode.default)({
    type: "EnumBooleanMember",
    id,
    init: null
  });
}
function enumNumberMember(id, init) {
  return (0, _validateNode.default)({
    type: "EnumNumberMember",
    id,
    init
  });
}
function enumStringMember(id, init) {
  return (0, _validateNode.default)({
    type: "EnumStringMember",
    id,
    init
  });
}
function enumDefaultedMember(id) {
  return (0, _validateNode.default)({
    type: "EnumDefaultedMember",
    id
  });
}
function indexedAccessType(objectType, indexType) {
  return (0, _validateNode.default)({
    type: "IndexedAccessType",
    objectType,
    indexType
  });
}
function optionalIndexedAccessType(objectType, indexType) {
  return (0, _validateNode.default)({
    type: "OptionalIndexedAccessType",
    objectType,
    indexType,
    optional: null
  });
}
function jsxAttribute(name, value = null) {
  return (0, _validateNode.default)({
    type: "JSXAttribute",
    name,
    value
  });
}
function jsxClosingElement(name) {
  return (0, _validateNode.default)({
    type: "JSXClosingElement",
    name
  });
}
function jsxElement(openingElement, closingElement = null, children, selfClosing = null) {
  return (0, _validateNode.default)({
    type: "JSXElement",
    openingElement,
    closingElement,
    children,
    selfClosing
  });
}
function jsxEmptyExpression() {
  return {
    type: "JSXEmptyExpression"
  };
}
function jsxExpressionContainer(expression) {
  return (0, _validateNode.default)({
    type: "JSXExpressionContainer",
    expression
  });
}
function jsxSpreadChild(expression) {
  return (0, _validateNode.default)({
    type: "JSXSpreadChild",
    expression
  });
}
function jsxIdentifier(name) {
  return (0, _validateNode.default)({
    type: "JSXIdentifier",
    name
  });
}
function jsxMemberExpression(object, property) {
  return (0, _validateNode.default)({
    type: "JSXMemberExpression",
    object,
    property
  });
}
function jsxNamespacedName(namespace, name) {
  return (0, _validateNode.default)({
    type: "JSXNamespacedName",
    namespace,
    name
  });
}
function jsxOpeningElement(name, attributes, selfClosing = false) {
  return (0, _validateNode.default)({
    type: "JSXOpeningElement",
    name,
    attributes,
    selfClosing
  });
}
function jsxSpreadAttribute(argument) {
  return (0, _validateNode.default)({
    type: "JSXSpreadAttribute",
    argument
  });
}
function jsxText(value) {
  return (0, _validateNode.default)({
    type: "JSXText",
    value
  });
}
function jsxFragment(openingFragment, closingFragment, children) {
  return (0, _validateNode.default)({
    type: "JSXFragment",
    openingFragment,
    closingFragment,
    children
  });
}
function jsxOpeningFragment() {
  return {
    type: "JSXOpeningFragment"
  };
}
function jsxClosingFragment() {
  return {
    type: "JSXClosingFragment"
  };
}
function noop() {
  return {
    type: "Noop"
  };
}
function placeholder(expectedNode, name) {
  return (0, _validateNode.default)({
    type: "Placeholder",
    expectedNode,
    name
  });
}
function v8IntrinsicIdentifier(name) {
  return (0, _validateNode.default)({
    type: "V8IntrinsicIdentifier",
    name
  });
}
function argumentPlaceholder() {
  return {
    type: "ArgumentPlaceholder"
  };
}
function bindExpression(object, callee) {
  return (0, _validateNode.default)({
    type: "BindExpression",
    object,
    callee
  });
}
function importAttribute(key, value) {
  return (0, _validateNode.default)({
    type: "ImportAttribute",
    key,
    value
  });
}
function decorator(expression) {
  return (0, _validateNode.default)({
    type: "Decorator",
    expression
  });
}
function doExpression(body, async = false) {
  return (0, _validateNode.default)({
    type: "DoExpression",
    body,
    async
  });
}
function exportDefaultSpecifier(exported) {
  return (0, _validateNode.default)({
    type: "ExportDefaultSpecifier",
    exported
  });
}
function recordExpression(properties) {
  return (0, _validateNode.default)({
    type: "RecordExpression",
    properties
  });
}
function tupleExpression(elements = []) {
  return (0, _validateNode.default)({
    type: "TupleExpression",
    elements
  });
}
function decimalLiteral(value) {
  return (0, _validateNode.default)({
    type: "DecimalLiteral",
    value
  });
}
function moduleExpression(body) {
  return (0, _validateNode.default)({
    type: "ModuleExpression",
    body
  });
}
function topicReference() {
  return {
    type: "TopicReference"
  };
}
function pipelineTopicExpression(expression) {
  return (0, _validateNode.default)({
    type: "PipelineTopicExpression",
    expression
  });
}
function pipelineBareFunction(callee) {
  return (0, _validateNode.default)({
    type: "PipelineBareFunction",
    callee
  });
}
function pipelinePrimaryTopicReference() {
  return {
    type: "PipelinePrimaryTopicReference"
  };
}
function tsParameterProperty(parameter) {
  return (0, _validateNode.default)({
    type: "TSParameterProperty",
    parameter
  });
}
function tsDeclareFunction(id = null, typeParameters = null, params, returnType = null) {
  return (0, _validateNode.default)({
    type: "TSDeclareFunction",
    id,
    typeParameters,
    params,
    returnType
  });
}
function tsDeclareMethod(decorators = null, key, typeParameters = null, params, returnType = null) {
  return (0, _validateNode.default)({
    type: "TSDeclareMethod",
    decorators,
    key,
    typeParameters,
    params,
    returnType
  });
}
function tsQualifiedName(left, right) {
  return (0, _validateNode.default)({
    type: "TSQualifiedName",
    left,
    right
  });
}
function tsCallSignatureDeclaration(typeParameters = null, parameters, typeAnnotation2 = null) {
  return (0, _validateNode.default)({
    type: "TSCallSignatureDeclaration",
    typeParameters,
    parameters,
    typeAnnotation: typeAnnotation2
  });
}
function tsConstructSignatureDeclaration(typeParameters = null, parameters, typeAnnotation2 = null) {
  return (0, _validateNode.default)({
    type: "TSConstructSignatureDeclaration",
    typeParameters,
    parameters,
    typeAnnotation: typeAnnotation2
  });
}
function tsPropertySignature(key, typeAnnotation2 = null, initializer = null) {
  return (0, _validateNode.default)({
    type: "TSPropertySignature",
    key,
    typeAnnotation: typeAnnotation2,
    initializer,
    kind: null
  });
}
function tsMethodSignature(key, typeParameters = null, parameters, typeAnnotation2 = null) {
  return (0, _validateNode.default)({
    type: "TSMethodSignature",
    key,
    typeParameters,
    parameters,
    typeAnnotation: typeAnnotation2,
    kind: null
  });
}
function tsIndexSignature(parameters, typeAnnotation2 = null) {
  return (0, _validateNode.default)({
    type: "TSIndexSignature",
    parameters,
    typeAnnotation: typeAnnotation2
  });
}
function tsAnyKeyword() {
  return {
    type: "TSAnyKeyword"
  };
}
function tsBooleanKeyword() {
  return {
    type: "TSBooleanKeyword"
  };
}
function tsBigIntKeyword() {
  return {
    type: "TSBigIntKeyword"
  };
}
function tsIntrinsicKeyword() {
  return {
    type: "TSIntrinsicKeyword"
  };
}
function tsNeverKeyword() {
  return {
    type: "TSNeverKeyword"
  };
}
function tsNullKeyword() {
  return {
    type: "TSNullKeyword"
  };
}
function tsNumberKeyword() {
  return {
    type: "TSNumberKeyword"
  };
}
function tsObjectKeyword() {
  return {
    type: "TSObjectKeyword"
  };
}
function tsStringKeyword() {
  return {
    type: "TSStringKeyword"
  };
}
function tsSymbolKeyword() {
  return {
    type: "TSSymbolKeyword"
  };
}
function tsUndefinedKeyword() {
  return {
    type: "TSUndefinedKeyword"
  };
}
function tsUnknownKeyword() {
  return {
    type: "TSUnknownKeyword"
  };
}
function tsVoidKeyword() {
  return {
    type: "TSVoidKeyword"
  };
}
function tsThisType() {
  return {
    type: "TSThisType"
  };
}
function tsFunctionType(typeParameters = null, parameters, typeAnnotation2 = null) {
  return (0, _validateNode.default)({
    type: "TSFunctionType",
    typeParameters,
    parameters,
    typeAnnotation: typeAnnotation2
  });
}
function tsConstructorType(typeParameters = null, parameters, typeAnnotation2 = null) {
  return (0, _validateNode.default)({
    type: "TSConstructorType",
    typeParameters,
    parameters,
    typeAnnotation: typeAnnotation2
  });
}
function tsTypeReference(typeName, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "TSTypeReference",
    typeName,
    typeParameters
  });
}
function tsTypePredicate(parameterName, typeAnnotation2 = null, asserts = null) {
  return (0, _validateNode.default)({
    type: "TSTypePredicate",
    parameterName,
    typeAnnotation: typeAnnotation2,
    asserts
  });
}
function tsTypeQuery(exprName, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "TSTypeQuery",
    exprName,
    typeParameters
  });
}
function tsTypeLiteral(members) {
  return (0, _validateNode.default)({
    type: "TSTypeLiteral",
    members
  });
}
function tsArrayType(elementType) {
  return (0, _validateNode.default)({
    type: "TSArrayType",
    elementType
  });
}
function tsTupleType(elementTypes) {
  return (0, _validateNode.default)({
    type: "TSTupleType",
    elementTypes
  });
}
function tsOptionalType(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSOptionalType",
    typeAnnotation: typeAnnotation2
  });
}
function tsRestType(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSRestType",
    typeAnnotation: typeAnnotation2
  });
}
function tsNamedTupleMember(label, elementType, optional = false) {
  return (0, _validateNode.default)({
    type: "TSNamedTupleMember",
    label,
    elementType,
    optional
  });
}
function tsUnionType(types) {
  return (0, _validateNode.default)({
    type: "TSUnionType",
    types
  });
}
function tsIntersectionType(types) {
  return (0, _validateNode.default)({
    type: "TSIntersectionType",
    types
  });
}
function tsConditionalType(checkType, extendsType, trueType, falseType) {
  return (0, _validateNode.default)({
    type: "TSConditionalType",
    checkType,
    extendsType,
    trueType,
    falseType
  });
}
function tsInferType(typeParameter2) {
  return (0, _validateNode.default)({
    type: "TSInferType",
    typeParameter: typeParameter2
  });
}
function tsParenthesizedType(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSParenthesizedType",
    typeAnnotation: typeAnnotation2
  });
}
function tsTypeOperator(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSTypeOperator",
    typeAnnotation: typeAnnotation2,
    operator: null
  });
}
function tsIndexedAccessType(objectType, indexType) {
  return (0, _validateNode.default)({
    type: "TSIndexedAccessType",
    objectType,
    indexType
  });
}
function tsMappedType(typeParameter2, typeAnnotation2 = null, nameType = null) {
  return (0, _validateNode.default)({
    type: "TSMappedType",
    typeParameter: typeParameter2,
    typeAnnotation: typeAnnotation2,
    nameType
  });
}
function tsLiteralType(literal) {
  return (0, _validateNode.default)({
    type: "TSLiteralType",
    literal
  });
}
function tsExpressionWithTypeArguments(expression, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "TSExpressionWithTypeArguments",
    expression,
    typeParameters
  });
}
function tsInterfaceDeclaration(id, typeParameters = null, _extends = null, body) {
  return (0, _validateNode.default)({
    type: "TSInterfaceDeclaration",
    id,
    typeParameters,
    extends: _extends,
    body
  });
}
function tsInterfaceBody(body) {
  return (0, _validateNode.default)({
    type: "TSInterfaceBody",
    body
  });
}
function tsTypeAliasDeclaration(id, typeParameters = null, typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSTypeAliasDeclaration",
    id,
    typeParameters,
    typeAnnotation: typeAnnotation2
  });
}
function tsInstantiationExpression(expression, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "TSInstantiationExpression",
    expression,
    typeParameters
  });
}
function tsAsExpression(expression, typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSAsExpression",
    expression,
    typeAnnotation: typeAnnotation2
  });
}
function tsSatisfiesExpression(expression, typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSSatisfiesExpression",
    expression,
    typeAnnotation: typeAnnotation2
  });
}
function tsTypeAssertion(typeAnnotation2, expression) {
  return (0, _validateNode.default)({
    type: "TSTypeAssertion",
    typeAnnotation: typeAnnotation2,
    expression
  });
}
function tsEnumDeclaration(id, members) {
  return (0, _validateNode.default)({
    type: "TSEnumDeclaration",
    id,
    members
  });
}
function tsEnumMember(id, initializer = null) {
  return (0, _validateNode.default)({
    type: "TSEnumMember",
    id,
    initializer
  });
}
function tsModuleDeclaration(id, body) {
  return (0, _validateNode.default)({
    type: "TSModuleDeclaration",
    id,
    body
  });
}
function tsModuleBlock(body) {
  return (0, _validateNode.default)({
    type: "TSModuleBlock",
    body
  });
}
function tsImportType(argument, qualifier = null, typeParameters = null) {
  return (0, _validateNode.default)({
    type: "TSImportType",
    argument,
    qualifier,
    typeParameters
  });
}
function tsImportEqualsDeclaration(id, moduleReference) {
  return (0, _validateNode.default)({
    type: "TSImportEqualsDeclaration",
    id,
    moduleReference,
    isExport: null
  });
}
function tsExternalModuleReference(expression) {
  return (0, _validateNode.default)({
    type: "TSExternalModuleReference",
    expression
  });
}
function tsNonNullExpression(expression) {
  return (0, _validateNode.default)({
    type: "TSNonNullExpression",
    expression
  });
}
function tsExportAssignment(expression) {
  return (0, _validateNode.default)({
    type: "TSExportAssignment",
    expression
  });
}
function tsNamespaceExportDeclaration(id) {
  return (0, _validateNode.default)({
    type: "TSNamespaceExportDeclaration",
    id
  });
}
function tsTypeAnnotation(typeAnnotation2) {
  return (0, _validateNode.default)({
    type: "TSTypeAnnotation",
    typeAnnotation: typeAnnotation2
  });
}
function tsTypeParameterInstantiation(params) {
  return (0, _validateNode.default)({
    type: "TSTypeParameterInstantiation",
    params
  });
}
function tsTypeParameterDeclaration(params) {
  return (0, _validateNode.default)({
    type: "TSTypeParameterDeclaration",
    params
  });
}
function tsTypeParameter(constraint = null, _default2 = null, name) {
  return (0, _validateNode.default)({
    type: "TSTypeParameter",
    constraint,
    default: _default2,
    name
  });
}
function NumberLiteral(value) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  return numericLiteral(value);
}
function RegexLiteral(pattern, flags = "") {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  return regExpLiteral(pattern, flags);
}
function RestProperty(argument) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  return restElement(argument);
}
function SpreadProperty(argument) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  return spreadElement(argument);
}
Object.defineProperty(cleanJSXElementLiteralChild$1, "__esModule", {
  value: true
});
cleanJSXElementLiteralChild$1.default = cleanJSXElementLiteralChild;
var _generated$n = generated$3;
function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;
  for (let i2 = 0; i2 < lines.length; i2++) {
    if (lines[i2].match(/[^ \t]/)) {
      lastNonEmptyLine = i2;
    }
  }
  let str = "";
  for (let i2 = 0; i2 < lines.length; i2++) {
    const line = lines[i2];
    const isFirstLine = i2 === 0;
    const isLastLine = i2 === lines.length - 1;
    const isLastNonEmptyLine = i2 === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");
    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }
    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }
    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }
      str += trimmedLine;
    }
  }
  if (str)
    args.push((0, _generated$n.stringLiteral)(str));
}
Object.defineProperty(buildChildren$1, "__esModule", {
  value: true
});
buildChildren$1.default = buildChildren;
var _generated$m = generated$4;
var _cleanJSXElementLiteralChild = cleanJSXElementLiteralChild$1;
function buildChildren(node) {
  const elements = [];
  for (let i2 = 0; i2 < node.children.length; i2++) {
    let child = node.children[i2];
    if ((0, _generated$m.isJSXText)(child)) {
      (0, _cleanJSXElementLiteralChild.default)(child, elements);
      continue;
    }
    if ((0, _generated$m.isJSXExpressionContainer)(child))
      child = child.expression;
    if ((0, _generated$m.isJSXEmptyExpression)(child))
      continue;
    elements.push(child);
  }
  return elements;
}
var assertNode$1 = {};
var isNode$1 = {};
Object.defineProperty(isNode$1, "__esModule", {
  value: true
});
isNode$1.default = isNode;
var _definitions$5 = definitions;
function isNode(node) {
  return !!(node && _definitions$5.VISITOR_KEYS[node.type]);
}
Object.defineProperty(assertNode$1, "__esModule", {
  value: true
});
assertNode$1.default = assertNode;
var _isNode = isNode$1;
function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    var _node$type;
    const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}
var generated$2 = {};
Object.defineProperty(generated$2, "__esModule", {
  value: true
});
generated$2.assertAccessor = assertAccessor;
generated$2.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
generated$2.assertArgumentPlaceholder = assertArgumentPlaceholder;
generated$2.assertArrayExpression = assertArrayExpression;
generated$2.assertArrayPattern = assertArrayPattern;
generated$2.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
generated$2.assertArrowFunctionExpression = assertArrowFunctionExpression;
generated$2.assertAssignmentExpression = assertAssignmentExpression;
generated$2.assertAssignmentPattern = assertAssignmentPattern;
generated$2.assertAwaitExpression = assertAwaitExpression;
generated$2.assertBigIntLiteral = assertBigIntLiteral;
generated$2.assertBinary = assertBinary;
generated$2.assertBinaryExpression = assertBinaryExpression;
generated$2.assertBindExpression = assertBindExpression;
generated$2.assertBlock = assertBlock;
generated$2.assertBlockParent = assertBlockParent;
generated$2.assertBlockStatement = assertBlockStatement;
generated$2.assertBooleanLiteral = assertBooleanLiteral;
generated$2.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
generated$2.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
generated$2.assertBreakStatement = assertBreakStatement;
generated$2.assertCallExpression = assertCallExpression;
generated$2.assertCatchClause = assertCatchClause;
generated$2.assertClass = assertClass;
generated$2.assertClassAccessorProperty = assertClassAccessorProperty;
generated$2.assertClassBody = assertClassBody;
generated$2.assertClassDeclaration = assertClassDeclaration;
generated$2.assertClassExpression = assertClassExpression;
generated$2.assertClassImplements = assertClassImplements;
generated$2.assertClassMethod = assertClassMethod;
generated$2.assertClassPrivateMethod = assertClassPrivateMethod;
generated$2.assertClassPrivateProperty = assertClassPrivateProperty;
generated$2.assertClassProperty = assertClassProperty;
generated$2.assertCompletionStatement = assertCompletionStatement;
generated$2.assertConditional = assertConditional;
generated$2.assertConditionalExpression = assertConditionalExpression;
generated$2.assertContinueStatement = assertContinueStatement;
generated$2.assertDebuggerStatement = assertDebuggerStatement;
generated$2.assertDecimalLiteral = assertDecimalLiteral;
generated$2.assertDeclaration = assertDeclaration;
generated$2.assertDeclareClass = assertDeclareClass;
generated$2.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
generated$2.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
generated$2.assertDeclareFunction = assertDeclareFunction;
generated$2.assertDeclareInterface = assertDeclareInterface;
generated$2.assertDeclareModule = assertDeclareModule;
generated$2.assertDeclareModuleExports = assertDeclareModuleExports;
generated$2.assertDeclareOpaqueType = assertDeclareOpaqueType;
generated$2.assertDeclareTypeAlias = assertDeclareTypeAlias;
generated$2.assertDeclareVariable = assertDeclareVariable;
generated$2.assertDeclaredPredicate = assertDeclaredPredicate;
generated$2.assertDecorator = assertDecorator;
generated$2.assertDirective = assertDirective;
generated$2.assertDirectiveLiteral = assertDirectiveLiteral;
generated$2.assertDoExpression = assertDoExpression;
generated$2.assertDoWhileStatement = assertDoWhileStatement;
generated$2.assertEmptyStatement = assertEmptyStatement;
generated$2.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
generated$2.assertEnumBody = assertEnumBody;
generated$2.assertEnumBooleanBody = assertEnumBooleanBody;
generated$2.assertEnumBooleanMember = assertEnumBooleanMember;
generated$2.assertEnumDeclaration = assertEnumDeclaration;
generated$2.assertEnumDefaultedMember = assertEnumDefaultedMember;
generated$2.assertEnumMember = assertEnumMember;
generated$2.assertEnumNumberBody = assertEnumNumberBody;
generated$2.assertEnumNumberMember = assertEnumNumberMember;
generated$2.assertEnumStringBody = assertEnumStringBody;
generated$2.assertEnumStringMember = assertEnumStringMember;
generated$2.assertEnumSymbolBody = assertEnumSymbolBody;
generated$2.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
generated$2.assertExportAllDeclaration = assertExportAllDeclaration;
generated$2.assertExportDeclaration = assertExportDeclaration;
generated$2.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
generated$2.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
generated$2.assertExportNamedDeclaration = assertExportNamedDeclaration;
generated$2.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
generated$2.assertExportSpecifier = assertExportSpecifier;
generated$2.assertExpression = assertExpression;
generated$2.assertExpressionStatement = assertExpressionStatement;
generated$2.assertExpressionWrapper = assertExpressionWrapper;
generated$2.assertFile = assertFile;
generated$2.assertFlow = assertFlow;
generated$2.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
generated$2.assertFlowDeclaration = assertFlowDeclaration;
generated$2.assertFlowPredicate = assertFlowPredicate;
generated$2.assertFlowType = assertFlowType;
generated$2.assertFor = assertFor;
generated$2.assertForInStatement = assertForInStatement;
generated$2.assertForOfStatement = assertForOfStatement;
generated$2.assertForStatement = assertForStatement;
generated$2.assertForXStatement = assertForXStatement;
generated$2.assertFunction = assertFunction;
generated$2.assertFunctionDeclaration = assertFunctionDeclaration;
generated$2.assertFunctionExpression = assertFunctionExpression;
generated$2.assertFunctionParent = assertFunctionParent;
generated$2.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
generated$2.assertFunctionTypeParam = assertFunctionTypeParam;
generated$2.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
generated$2.assertIdentifier = assertIdentifier;
generated$2.assertIfStatement = assertIfStatement;
generated$2.assertImmutable = assertImmutable;
generated$2.assertImport = assertImport;
generated$2.assertImportAttribute = assertImportAttribute;
generated$2.assertImportDeclaration = assertImportDeclaration;
generated$2.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
generated$2.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
generated$2.assertImportSpecifier = assertImportSpecifier;
generated$2.assertIndexedAccessType = assertIndexedAccessType;
generated$2.assertInferredPredicate = assertInferredPredicate;
generated$2.assertInterfaceDeclaration = assertInterfaceDeclaration;
generated$2.assertInterfaceExtends = assertInterfaceExtends;
generated$2.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
generated$2.assertInterpreterDirective = assertInterpreterDirective;
generated$2.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
generated$2.assertJSX = assertJSX;
generated$2.assertJSXAttribute = assertJSXAttribute;
generated$2.assertJSXClosingElement = assertJSXClosingElement;
generated$2.assertJSXClosingFragment = assertJSXClosingFragment;
generated$2.assertJSXElement = assertJSXElement;
generated$2.assertJSXEmptyExpression = assertJSXEmptyExpression;
generated$2.assertJSXExpressionContainer = assertJSXExpressionContainer;
generated$2.assertJSXFragment = assertJSXFragment;
generated$2.assertJSXIdentifier = assertJSXIdentifier;
generated$2.assertJSXMemberExpression = assertJSXMemberExpression;
generated$2.assertJSXNamespacedName = assertJSXNamespacedName;
generated$2.assertJSXOpeningElement = assertJSXOpeningElement;
generated$2.assertJSXOpeningFragment = assertJSXOpeningFragment;
generated$2.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
generated$2.assertJSXSpreadChild = assertJSXSpreadChild;
generated$2.assertJSXText = assertJSXText;
generated$2.assertLVal = assertLVal;
generated$2.assertLabeledStatement = assertLabeledStatement;
generated$2.assertLiteral = assertLiteral;
generated$2.assertLogicalExpression = assertLogicalExpression;
generated$2.assertLoop = assertLoop;
generated$2.assertMemberExpression = assertMemberExpression;
generated$2.assertMetaProperty = assertMetaProperty;
generated$2.assertMethod = assertMethod;
generated$2.assertMiscellaneous = assertMiscellaneous;
generated$2.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
generated$2.assertModuleDeclaration = assertModuleDeclaration;
generated$2.assertModuleExpression = assertModuleExpression;
generated$2.assertModuleSpecifier = assertModuleSpecifier;
generated$2.assertNewExpression = assertNewExpression;
generated$2.assertNoop = assertNoop;
generated$2.assertNullLiteral = assertNullLiteral;
generated$2.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
generated$2.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
generated$2.assertNumberLiteral = assertNumberLiteral;
generated$2.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
generated$2.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
generated$2.assertNumericLiteral = assertNumericLiteral;
generated$2.assertObjectExpression = assertObjectExpression;
generated$2.assertObjectMember = assertObjectMember;
generated$2.assertObjectMethod = assertObjectMethod;
generated$2.assertObjectPattern = assertObjectPattern;
generated$2.assertObjectProperty = assertObjectProperty;
generated$2.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
generated$2.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
generated$2.assertObjectTypeIndexer = assertObjectTypeIndexer;
generated$2.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
generated$2.assertObjectTypeProperty = assertObjectTypeProperty;
generated$2.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
generated$2.assertOpaqueType = assertOpaqueType;
generated$2.assertOptionalCallExpression = assertOptionalCallExpression;
generated$2.assertOptionalIndexedAccessType = assertOptionalIndexedAccessType;
generated$2.assertOptionalMemberExpression = assertOptionalMemberExpression;
generated$2.assertParenthesizedExpression = assertParenthesizedExpression;
generated$2.assertPattern = assertPattern;
generated$2.assertPatternLike = assertPatternLike;
generated$2.assertPipelineBareFunction = assertPipelineBareFunction;
generated$2.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
generated$2.assertPipelineTopicExpression = assertPipelineTopicExpression;
generated$2.assertPlaceholder = assertPlaceholder;
generated$2.assertPrivate = assertPrivate;
generated$2.assertPrivateName = assertPrivateName;
generated$2.assertProgram = assertProgram;
generated$2.assertProperty = assertProperty;
generated$2.assertPureish = assertPureish;
generated$2.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
generated$2.assertRecordExpression = assertRecordExpression;
generated$2.assertRegExpLiteral = assertRegExpLiteral;
generated$2.assertRegexLiteral = assertRegexLiteral;
generated$2.assertRestElement = assertRestElement;
generated$2.assertRestProperty = assertRestProperty;
generated$2.assertReturnStatement = assertReturnStatement;
generated$2.assertScopable = assertScopable;
generated$2.assertSequenceExpression = assertSequenceExpression;
generated$2.assertSpreadElement = assertSpreadElement;
generated$2.assertSpreadProperty = assertSpreadProperty;
generated$2.assertStandardized = assertStandardized;
generated$2.assertStatement = assertStatement;
generated$2.assertStaticBlock = assertStaticBlock;
generated$2.assertStringLiteral = assertStringLiteral;
generated$2.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
generated$2.assertStringTypeAnnotation = assertStringTypeAnnotation;
generated$2.assertSuper = assertSuper;
generated$2.assertSwitchCase = assertSwitchCase;
generated$2.assertSwitchStatement = assertSwitchStatement;
generated$2.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
generated$2.assertTSAnyKeyword = assertTSAnyKeyword;
generated$2.assertTSArrayType = assertTSArrayType;
generated$2.assertTSAsExpression = assertTSAsExpression;
generated$2.assertTSBaseType = assertTSBaseType;
generated$2.assertTSBigIntKeyword = assertTSBigIntKeyword;
generated$2.assertTSBooleanKeyword = assertTSBooleanKeyword;
generated$2.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
generated$2.assertTSConditionalType = assertTSConditionalType;
generated$2.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
generated$2.assertTSConstructorType = assertTSConstructorType;
generated$2.assertTSDeclareFunction = assertTSDeclareFunction;
generated$2.assertTSDeclareMethod = assertTSDeclareMethod;
generated$2.assertTSEntityName = assertTSEntityName;
generated$2.assertTSEnumDeclaration = assertTSEnumDeclaration;
generated$2.assertTSEnumMember = assertTSEnumMember;
generated$2.assertTSExportAssignment = assertTSExportAssignment;
generated$2.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
generated$2.assertTSExternalModuleReference = assertTSExternalModuleReference;
generated$2.assertTSFunctionType = assertTSFunctionType;
generated$2.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
generated$2.assertTSImportType = assertTSImportType;
generated$2.assertTSIndexSignature = assertTSIndexSignature;
generated$2.assertTSIndexedAccessType = assertTSIndexedAccessType;
generated$2.assertTSInferType = assertTSInferType;
generated$2.assertTSInstantiationExpression = assertTSInstantiationExpression;
generated$2.assertTSInterfaceBody = assertTSInterfaceBody;
generated$2.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
generated$2.assertTSIntersectionType = assertTSIntersectionType;
generated$2.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
generated$2.assertTSLiteralType = assertTSLiteralType;
generated$2.assertTSMappedType = assertTSMappedType;
generated$2.assertTSMethodSignature = assertTSMethodSignature;
generated$2.assertTSModuleBlock = assertTSModuleBlock;
generated$2.assertTSModuleDeclaration = assertTSModuleDeclaration;
generated$2.assertTSNamedTupleMember = assertTSNamedTupleMember;
generated$2.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
generated$2.assertTSNeverKeyword = assertTSNeverKeyword;
generated$2.assertTSNonNullExpression = assertTSNonNullExpression;
generated$2.assertTSNullKeyword = assertTSNullKeyword;
generated$2.assertTSNumberKeyword = assertTSNumberKeyword;
generated$2.assertTSObjectKeyword = assertTSObjectKeyword;
generated$2.assertTSOptionalType = assertTSOptionalType;
generated$2.assertTSParameterProperty = assertTSParameterProperty;
generated$2.assertTSParenthesizedType = assertTSParenthesizedType;
generated$2.assertTSPropertySignature = assertTSPropertySignature;
generated$2.assertTSQualifiedName = assertTSQualifiedName;
generated$2.assertTSRestType = assertTSRestType;
generated$2.assertTSSatisfiesExpression = assertTSSatisfiesExpression;
generated$2.assertTSStringKeyword = assertTSStringKeyword;
generated$2.assertTSSymbolKeyword = assertTSSymbolKeyword;
generated$2.assertTSThisType = assertTSThisType;
generated$2.assertTSTupleType = assertTSTupleType;
generated$2.assertTSType = assertTSType;
generated$2.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
generated$2.assertTSTypeAnnotation = assertTSTypeAnnotation;
generated$2.assertTSTypeAssertion = assertTSTypeAssertion;
generated$2.assertTSTypeElement = assertTSTypeElement;
generated$2.assertTSTypeLiteral = assertTSTypeLiteral;
generated$2.assertTSTypeOperator = assertTSTypeOperator;
generated$2.assertTSTypeParameter = assertTSTypeParameter;
generated$2.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
generated$2.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
generated$2.assertTSTypePredicate = assertTSTypePredicate;
generated$2.assertTSTypeQuery = assertTSTypeQuery;
generated$2.assertTSTypeReference = assertTSTypeReference;
generated$2.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
generated$2.assertTSUnionType = assertTSUnionType;
generated$2.assertTSUnknownKeyword = assertTSUnknownKeyword;
generated$2.assertTSVoidKeyword = assertTSVoidKeyword;
generated$2.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
generated$2.assertTemplateElement = assertTemplateElement;
generated$2.assertTemplateLiteral = assertTemplateLiteral;
generated$2.assertTerminatorless = assertTerminatorless;
generated$2.assertThisExpression = assertThisExpression;
generated$2.assertThisTypeAnnotation = assertThisTypeAnnotation;
generated$2.assertThrowStatement = assertThrowStatement;
generated$2.assertTopicReference = assertTopicReference;
generated$2.assertTryStatement = assertTryStatement;
generated$2.assertTupleExpression = assertTupleExpression;
generated$2.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
generated$2.assertTypeAlias = assertTypeAlias;
generated$2.assertTypeAnnotation = assertTypeAnnotation;
generated$2.assertTypeCastExpression = assertTypeCastExpression;
generated$2.assertTypeParameter = assertTypeParameter;
generated$2.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
generated$2.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
generated$2.assertTypeScript = assertTypeScript;
generated$2.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
generated$2.assertUnaryExpression = assertUnaryExpression;
generated$2.assertUnaryLike = assertUnaryLike;
generated$2.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
generated$2.assertUpdateExpression = assertUpdateExpression;
generated$2.assertUserWhitespacable = assertUserWhitespacable;
generated$2.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
generated$2.assertVariableDeclaration = assertVariableDeclaration;
generated$2.assertVariableDeclarator = assertVariableDeclarator;
generated$2.assertVariance = assertVariance;
generated$2.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
generated$2.assertWhile = assertWhile;
generated$2.assertWhileStatement = assertWhileStatement;
generated$2.assertWithStatement = assertWithStatement;
generated$2.assertYieldExpression = assertYieldExpression;
var _is = is$1;
function assert(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, but instead got "${node.type}".`);
  }
}
function assertArrayExpression(node, opts) {
  assert("ArrayExpression", node, opts);
}
function assertAssignmentExpression(node, opts) {
  assert("AssignmentExpression", node, opts);
}
function assertBinaryExpression(node, opts) {
  assert("BinaryExpression", node, opts);
}
function assertInterpreterDirective(node, opts) {
  assert("InterpreterDirective", node, opts);
}
function assertDirective(node, opts) {
  assert("Directive", node, opts);
}
function assertDirectiveLiteral(node, opts) {
  assert("DirectiveLiteral", node, opts);
}
function assertBlockStatement(node, opts) {
  assert("BlockStatement", node, opts);
}
function assertBreakStatement(node, opts) {
  assert("BreakStatement", node, opts);
}
function assertCallExpression(node, opts) {
  assert("CallExpression", node, opts);
}
function assertCatchClause(node, opts) {
  assert("CatchClause", node, opts);
}
function assertConditionalExpression(node, opts) {
  assert("ConditionalExpression", node, opts);
}
function assertContinueStatement(node, opts) {
  assert("ContinueStatement", node, opts);
}
function assertDebuggerStatement(node, opts) {
  assert("DebuggerStatement", node, opts);
}
function assertDoWhileStatement(node, opts) {
  assert("DoWhileStatement", node, opts);
}
function assertEmptyStatement(node, opts) {
  assert("EmptyStatement", node, opts);
}
function assertExpressionStatement(node, opts) {
  assert("ExpressionStatement", node, opts);
}
function assertFile(node, opts) {
  assert("File", node, opts);
}
function assertForInStatement(node, opts) {
  assert("ForInStatement", node, opts);
}
function assertForStatement(node, opts) {
  assert("ForStatement", node, opts);
}
function assertFunctionDeclaration(node, opts) {
  assert("FunctionDeclaration", node, opts);
}
function assertFunctionExpression(node, opts) {
  assert("FunctionExpression", node, opts);
}
function assertIdentifier(node, opts) {
  assert("Identifier", node, opts);
}
function assertIfStatement(node, opts) {
  assert("IfStatement", node, opts);
}
function assertLabeledStatement(node, opts) {
  assert("LabeledStatement", node, opts);
}
function assertStringLiteral(node, opts) {
  assert("StringLiteral", node, opts);
}
function assertNumericLiteral(node, opts) {
  assert("NumericLiteral", node, opts);
}
function assertNullLiteral(node, opts) {
  assert("NullLiteral", node, opts);
}
function assertBooleanLiteral(node, opts) {
  assert("BooleanLiteral", node, opts);
}
function assertRegExpLiteral(node, opts) {
  assert("RegExpLiteral", node, opts);
}
function assertLogicalExpression(node, opts) {
  assert("LogicalExpression", node, opts);
}
function assertMemberExpression(node, opts) {
  assert("MemberExpression", node, opts);
}
function assertNewExpression(node, opts) {
  assert("NewExpression", node, opts);
}
function assertProgram(node, opts) {
  assert("Program", node, opts);
}
function assertObjectExpression(node, opts) {
  assert("ObjectExpression", node, opts);
}
function assertObjectMethod(node, opts) {
  assert("ObjectMethod", node, opts);
}
function assertObjectProperty(node, opts) {
  assert("ObjectProperty", node, opts);
}
function assertRestElement(node, opts) {
  assert("RestElement", node, opts);
}
function assertReturnStatement(node, opts) {
  assert("ReturnStatement", node, opts);
}
function assertSequenceExpression(node, opts) {
  assert("SequenceExpression", node, opts);
}
function assertParenthesizedExpression(node, opts) {
  assert("ParenthesizedExpression", node, opts);
}
function assertSwitchCase(node, opts) {
  assert("SwitchCase", node, opts);
}
function assertSwitchStatement(node, opts) {
  assert("SwitchStatement", node, opts);
}
function assertThisExpression(node, opts) {
  assert("ThisExpression", node, opts);
}
function assertThrowStatement(node, opts) {
  assert("ThrowStatement", node, opts);
}
function assertTryStatement(node, opts) {
  assert("TryStatement", node, opts);
}
function assertUnaryExpression(node, opts) {
  assert("UnaryExpression", node, opts);
}
function assertUpdateExpression(node, opts) {
  assert("UpdateExpression", node, opts);
}
function assertVariableDeclaration(node, opts) {
  assert("VariableDeclaration", node, opts);
}
function assertVariableDeclarator(node, opts) {
  assert("VariableDeclarator", node, opts);
}
function assertWhileStatement(node, opts) {
  assert("WhileStatement", node, opts);
}
function assertWithStatement(node, opts) {
  assert("WithStatement", node, opts);
}
function assertAssignmentPattern(node, opts) {
  assert("AssignmentPattern", node, opts);
}
function assertArrayPattern(node, opts) {
  assert("ArrayPattern", node, opts);
}
function assertArrowFunctionExpression(node, opts) {
  assert("ArrowFunctionExpression", node, opts);
}
function assertClassBody(node, opts) {
  assert("ClassBody", node, opts);
}
function assertClassExpression(node, opts) {
  assert("ClassExpression", node, opts);
}
function assertClassDeclaration(node, opts) {
  assert("ClassDeclaration", node, opts);
}
function assertExportAllDeclaration(node, opts) {
  assert("ExportAllDeclaration", node, opts);
}
function assertExportDefaultDeclaration(node, opts) {
  assert("ExportDefaultDeclaration", node, opts);
}
function assertExportNamedDeclaration(node, opts) {
  assert("ExportNamedDeclaration", node, opts);
}
function assertExportSpecifier(node, opts) {
  assert("ExportSpecifier", node, opts);
}
function assertForOfStatement(node, opts) {
  assert("ForOfStatement", node, opts);
}
function assertImportDeclaration(node, opts) {
  assert("ImportDeclaration", node, opts);
}
function assertImportDefaultSpecifier(node, opts) {
  assert("ImportDefaultSpecifier", node, opts);
}
function assertImportNamespaceSpecifier(node, opts) {
  assert("ImportNamespaceSpecifier", node, opts);
}
function assertImportSpecifier(node, opts) {
  assert("ImportSpecifier", node, opts);
}
function assertMetaProperty(node, opts) {
  assert("MetaProperty", node, opts);
}
function assertClassMethod(node, opts) {
  assert("ClassMethod", node, opts);
}
function assertObjectPattern(node, opts) {
  assert("ObjectPattern", node, opts);
}
function assertSpreadElement(node, opts) {
  assert("SpreadElement", node, opts);
}
function assertSuper(node, opts) {
  assert("Super", node, opts);
}
function assertTaggedTemplateExpression(node, opts) {
  assert("TaggedTemplateExpression", node, opts);
}
function assertTemplateElement(node, opts) {
  assert("TemplateElement", node, opts);
}
function assertTemplateLiteral(node, opts) {
  assert("TemplateLiteral", node, opts);
}
function assertYieldExpression(node, opts) {
  assert("YieldExpression", node, opts);
}
function assertAwaitExpression(node, opts) {
  assert("AwaitExpression", node, opts);
}
function assertImport(node, opts) {
  assert("Import", node, opts);
}
function assertBigIntLiteral(node, opts) {
  assert("BigIntLiteral", node, opts);
}
function assertExportNamespaceSpecifier(node, opts) {
  assert("ExportNamespaceSpecifier", node, opts);
}
function assertOptionalMemberExpression(node, opts) {
  assert("OptionalMemberExpression", node, opts);
}
function assertOptionalCallExpression(node, opts) {
  assert("OptionalCallExpression", node, opts);
}
function assertClassProperty(node, opts) {
  assert("ClassProperty", node, opts);
}
function assertClassAccessorProperty(node, opts) {
  assert("ClassAccessorProperty", node, opts);
}
function assertClassPrivateProperty(node, opts) {
  assert("ClassPrivateProperty", node, opts);
}
function assertClassPrivateMethod(node, opts) {
  assert("ClassPrivateMethod", node, opts);
}
function assertPrivateName(node, opts) {
  assert("PrivateName", node, opts);
}
function assertStaticBlock(node, opts) {
  assert("StaticBlock", node, opts);
}
function assertAnyTypeAnnotation(node, opts) {
  assert("AnyTypeAnnotation", node, opts);
}
function assertArrayTypeAnnotation(node, opts) {
  assert("ArrayTypeAnnotation", node, opts);
}
function assertBooleanTypeAnnotation(node, opts) {
  assert("BooleanTypeAnnotation", node, opts);
}
function assertBooleanLiteralTypeAnnotation(node, opts) {
  assert("BooleanLiteralTypeAnnotation", node, opts);
}
function assertNullLiteralTypeAnnotation(node, opts) {
  assert("NullLiteralTypeAnnotation", node, opts);
}
function assertClassImplements(node, opts) {
  assert("ClassImplements", node, opts);
}
function assertDeclareClass(node, opts) {
  assert("DeclareClass", node, opts);
}
function assertDeclareFunction(node, opts) {
  assert("DeclareFunction", node, opts);
}
function assertDeclareInterface(node, opts) {
  assert("DeclareInterface", node, opts);
}
function assertDeclareModule(node, opts) {
  assert("DeclareModule", node, opts);
}
function assertDeclareModuleExports(node, opts) {
  assert("DeclareModuleExports", node, opts);
}
function assertDeclareTypeAlias(node, opts) {
  assert("DeclareTypeAlias", node, opts);
}
function assertDeclareOpaqueType(node, opts) {
  assert("DeclareOpaqueType", node, opts);
}
function assertDeclareVariable(node, opts) {
  assert("DeclareVariable", node, opts);
}
function assertDeclareExportDeclaration(node, opts) {
  assert("DeclareExportDeclaration", node, opts);
}
function assertDeclareExportAllDeclaration(node, opts) {
  assert("DeclareExportAllDeclaration", node, opts);
}
function assertDeclaredPredicate(node, opts) {
  assert("DeclaredPredicate", node, opts);
}
function assertExistsTypeAnnotation(node, opts) {
  assert("ExistsTypeAnnotation", node, opts);
}
function assertFunctionTypeAnnotation(node, opts) {
  assert("FunctionTypeAnnotation", node, opts);
}
function assertFunctionTypeParam(node, opts) {
  assert("FunctionTypeParam", node, opts);
}
function assertGenericTypeAnnotation(node, opts) {
  assert("GenericTypeAnnotation", node, opts);
}
function assertInferredPredicate(node, opts) {
  assert("InferredPredicate", node, opts);
}
function assertInterfaceExtends(node, opts) {
  assert("InterfaceExtends", node, opts);
}
function assertInterfaceDeclaration(node, opts) {
  assert("InterfaceDeclaration", node, opts);
}
function assertInterfaceTypeAnnotation(node, opts) {
  assert("InterfaceTypeAnnotation", node, opts);
}
function assertIntersectionTypeAnnotation(node, opts) {
  assert("IntersectionTypeAnnotation", node, opts);
}
function assertMixedTypeAnnotation(node, opts) {
  assert("MixedTypeAnnotation", node, opts);
}
function assertEmptyTypeAnnotation(node, opts) {
  assert("EmptyTypeAnnotation", node, opts);
}
function assertNullableTypeAnnotation(node, opts) {
  assert("NullableTypeAnnotation", node, opts);
}
function assertNumberLiteralTypeAnnotation(node, opts) {
  assert("NumberLiteralTypeAnnotation", node, opts);
}
function assertNumberTypeAnnotation(node, opts) {
  assert("NumberTypeAnnotation", node, opts);
}
function assertObjectTypeAnnotation(node, opts) {
  assert("ObjectTypeAnnotation", node, opts);
}
function assertObjectTypeInternalSlot(node, opts) {
  assert("ObjectTypeInternalSlot", node, opts);
}
function assertObjectTypeCallProperty(node, opts) {
  assert("ObjectTypeCallProperty", node, opts);
}
function assertObjectTypeIndexer(node, opts) {
  assert("ObjectTypeIndexer", node, opts);
}
function assertObjectTypeProperty(node, opts) {
  assert("ObjectTypeProperty", node, opts);
}
function assertObjectTypeSpreadProperty(node, opts) {
  assert("ObjectTypeSpreadProperty", node, opts);
}
function assertOpaqueType(node, opts) {
  assert("OpaqueType", node, opts);
}
function assertQualifiedTypeIdentifier(node, opts) {
  assert("QualifiedTypeIdentifier", node, opts);
}
function assertStringLiteralTypeAnnotation(node, opts) {
  assert("StringLiteralTypeAnnotation", node, opts);
}
function assertStringTypeAnnotation(node, opts) {
  assert("StringTypeAnnotation", node, opts);
}
function assertSymbolTypeAnnotation(node, opts) {
  assert("SymbolTypeAnnotation", node, opts);
}
function assertThisTypeAnnotation(node, opts) {
  assert("ThisTypeAnnotation", node, opts);
}
function assertTupleTypeAnnotation(node, opts) {
  assert("TupleTypeAnnotation", node, opts);
}
function assertTypeofTypeAnnotation(node, opts) {
  assert("TypeofTypeAnnotation", node, opts);
}
function assertTypeAlias(node, opts) {
  assert("TypeAlias", node, opts);
}
function assertTypeAnnotation(node, opts) {
  assert("TypeAnnotation", node, opts);
}
function assertTypeCastExpression(node, opts) {
  assert("TypeCastExpression", node, opts);
}
function assertTypeParameter(node, opts) {
  assert("TypeParameter", node, opts);
}
function assertTypeParameterDeclaration(node, opts) {
  assert("TypeParameterDeclaration", node, opts);
}
function assertTypeParameterInstantiation(node, opts) {
  assert("TypeParameterInstantiation", node, opts);
}
function assertUnionTypeAnnotation(node, opts) {
  assert("UnionTypeAnnotation", node, opts);
}
function assertVariance(node, opts) {
  assert("Variance", node, opts);
}
function assertVoidTypeAnnotation(node, opts) {
  assert("VoidTypeAnnotation", node, opts);
}
function assertEnumDeclaration(node, opts) {
  assert("EnumDeclaration", node, opts);
}
function assertEnumBooleanBody(node, opts) {
  assert("EnumBooleanBody", node, opts);
}
function assertEnumNumberBody(node, opts) {
  assert("EnumNumberBody", node, opts);
}
function assertEnumStringBody(node, opts) {
  assert("EnumStringBody", node, opts);
}
function assertEnumSymbolBody(node, opts) {
  assert("EnumSymbolBody", node, opts);
}
function assertEnumBooleanMember(node, opts) {
  assert("EnumBooleanMember", node, opts);
}
function assertEnumNumberMember(node, opts) {
  assert("EnumNumberMember", node, opts);
}
function assertEnumStringMember(node, opts) {
  assert("EnumStringMember", node, opts);
}
function assertEnumDefaultedMember(node, opts) {
  assert("EnumDefaultedMember", node, opts);
}
function assertIndexedAccessType(node, opts) {
  assert("IndexedAccessType", node, opts);
}
function assertOptionalIndexedAccessType(node, opts) {
  assert("OptionalIndexedAccessType", node, opts);
}
function assertJSXAttribute(node, opts) {
  assert("JSXAttribute", node, opts);
}
function assertJSXClosingElement(node, opts) {
  assert("JSXClosingElement", node, opts);
}
function assertJSXElement(node, opts) {
  assert("JSXElement", node, opts);
}
function assertJSXEmptyExpression(node, opts) {
  assert("JSXEmptyExpression", node, opts);
}
function assertJSXExpressionContainer(node, opts) {
  assert("JSXExpressionContainer", node, opts);
}
function assertJSXSpreadChild(node, opts) {
  assert("JSXSpreadChild", node, opts);
}
function assertJSXIdentifier(node, opts) {
  assert("JSXIdentifier", node, opts);
}
function assertJSXMemberExpression(node, opts) {
  assert("JSXMemberExpression", node, opts);
}
function assertJSXNamespacedName(node, opts) {
  assert("JSXNamespacedName", node, opts);
}
function assertJSXOpeningElement(node, opts) {
  assert("JSXOpeningElement", node, opts);
}
function assertJSXSpreadAttribute(node, opts) {
  assert("JSXSpreadAttribute", node, opts);
}
function assertJSXText(node, opts) {
  assert("JSXText", node, opts);
}
function assertJSXFragment(node, opts) {
  assert("JSXFragment", node, opts);
}
function assertJSXOpeningFragment(node, opts) {
  assert("JSXOpeningFragment", node, opts);
}
function assertJSXClosingFragment(node, opts) {
  assert("JSXClosingFragment", node, opts);
}
function assertNoop(node, opts) {
  assert("Noop", node, opts);
}
function assertPlaceholder(node, opts) {
  assert("Placeholder", node, opts);
}
function assertV8IntrinsicIdentifier(node, opts) {
  assert("V8IntrinsicIdentifier", node, opts);
}
function assertArgumentPlaceholder(node, opts) {
  assert("ArgumentPlaceholder", node, opts);
}
function assertBindExpression(node, opts) {
  assert("BindExpression", node, opts);
}
function assertImportAttribute(node, opts) {
  assert("ImportAttribute", node, opts);
}
function assertDecorator(node, opts) {
  assert("Decorator", node, opts);
}
function assertDoExpression(node, opts) {
  assert("DoExpression", node, opts);
}
function assertExportDefaultSpecifier(node, opts) {
  assert("ExportDefaultSpecifier", node, opts);
}
function assertRecordExpression(node, opts) {
  assert("RecordExpression", node, opts);
}
function assertTupleExpression(node, opts) {
  assert("TupleExpression", node, opts);
}
function assertDecimalLiteral(node, opts) {
  assert("DecimalLiteral", node, opts);
}
function assertModuleExpression(node, opts) {
  assert("ModuleExpression", node, opts);
}
function assertTopicReference(node, opts) {
  assert("TopicReference", node, opts);
}
function assertPipelineTopicExpression(node, opts) {
  assert("PipelineTopicExpression", node, opts);
}
function assertPipelineBareFunction(node, opts) {
  assert("PipelineBareFunction", node, opts);
}
function assertPipelinePrimaryTopicReference(node, opts) {
  assert("PipelinePrimaryTopicReference", node, opts);
}
function assertTSParameterProperty(node, opts) {
  assert("TSParameterProperty", node, opts);
}
function assertTSDeclareFunction(node, opts) {
  assert("TSDeclareFunction", node, opts);
}
function assertTSDeclareMethod(node, opts) {
  assert("TSDeclareMethod", node, opts);
}
function assertTSQualifiedName(node, opts) {
  assert("TSQualifiedName", node, opts);
}
function assertTSCallSignatureDeclaration(node, opts) {
  assert("TSCallSignatureDeclaration", node, opts);
}
function assertTSConstructSignatureDeclaration(node, opts) {
  assert("TSConstructSignatureDeclaration", node, opts);
}
function assertTSPropertySignature(node, opts) {
  assert("TSPropertySignature", node, opts);
}
function assertTSMethodSignature(node, opts) {
  assert("TSMethodSignature", node, opts);
}
function assertTSIndexSignature(node, opts) {
  assert("TSIndexSignature", node, opts);
}
function assertTSAnyKeyword(node, opts) {
  assert("TSAnyKeyword", node, opts);
}
function assertTSBooleanKeyword(node, opts) {
  assert("TSBooleanKeyword", node, opts);
}
function assertTSBigIntKeyword(node, opts) {
  assert("TSBigIntKeyword", node, opts);
}
function assertTSIntrinsicKeyword(node, opts) {
  assert("TSIntrinsicKeyword", node, opts);
}
function assertTSNeverKeyword(node, opts) {
  assert("TSNeverKeyword", node, opts);
}
function assertTSNullKeyword(node, opts) {
  assert("TSNullKeyword", node, opts);
}
function assertTSNumberKeyword(node, opts) {
  assert("TSNumberKeyword", node, opts);
}
function assertTSObjectKeyword(node, opts) {
  assert("TSObjectKeyword", node, opts);
}
function assertTSStringKeyword(node, opts) {
  assert("TSStringKeyword", node, opts);
}
function assertTSSymbolKeyword(node, opts) {
  assert("TSSymbolKeyword", node, opts);
}
function assertTSUndefinedKeyword(node, opts) {
  assert("TSUndefinedKeyword", node, opts);
}
function assertTSUnknownKeyword(node, opts) {
  assert("TSUnknownKeyword", node, opts);
}
function assertTSVoidKeyword(node, opts) {
  assert("TSVoidKeyword", node, opts);
}
function assertTSThisType(node, opts) {
  assert("TSThisType", node, opts);
}
function assertTSFunctionType(node, opts) {
  assert("TSFunctionType", node, opts);
}
function assertTSConstructorType(node, opts) {
  assert("TSConstructorType", node, opts);
}
function assertTSTypeReference(node, opts) {
  assert("TSTypeReference", node, opts);
}
function assertTSTypePredicate(node, opts) {
  assert("TSTypePredicate", node, opts);
}
function assertTSTypeQuery(node, opts) {
  assert("TSTypeQuery", node, opts);
}
function assertTSTypeLiteral(node, opts) {
  assert("TSTypeLiteral", node, opts);
}
function assertTSArrayType(node, opts) {
  assert("TSArrayType", node, opts);
}
function assertTSTupleType(node, opts) {
  assert("TSTupleType", node, opts);
}
function assertTSOptionalType(node, opts) {
  assert("TSOptionalType", node, opts);
}
function assertTSRestType(node, opts) {
  assert("TSRestType", node, opts);
}
function assertTSNamedTupleMember(node, opts) {
  assert("TSNamedTupleMember", node, opts);
}
function assertTSUnionType(node, opts) {
  assert("TSUnionType", node, opts);
}
function assertTSIntersectionType(node, opts) {
  assert("TSIntersectionType", node, opts);
}
function assertTSConditionalType(node, opts) {
  assert("TSConditionalType", node, opts);
}
function assertTSInferType(node, opts) {
  assert("TSInferType", node, opts);
}
function assertTSParenthesizedType(node, opts) {
  assert("TSParenthesizedType", node, opts);
}
function assertTSTypeOperator(node, opts) {
  assert("TSTypeOperator", node, opts);
}
function assertTSIndexedAccessType(node, opts) {
  assert("TSIndexedAccessType", node, opts);
}
function assertTSMappedType(node, opts) {
  assert("TSMappedType", node, opts);
}
function assertTSLiteralType(node, opts) {
  assert("TSLiteralType", node, opts);
}
function assertTSExpressionWithTypeArguments(node, opts) {
  assert("TSExpressionWithTypeArguments", node, opts);
}
function assertTSInterfaceDeclaration(node, opts) {
  assert("TSInterfaceDeclaration", node, opts);
}
function assertTSInterfaceBody(node, opts) {
  assert("TSInterfaceBody", node, opts);
}
function assertTSTypeAliasDeclaration(node, opts) {
  assert("TSTypeAliasDeclaration", node, opts);
}
function assertTSInstantiationExpression(node, opts) {
  assert("TSInstantiationExpression", node, opts);
}
function assertTSAsExpression(node, opts) {
  assert("TSAsExpression", node, opts);
}
function assertTSSatisfiesExpression(node, opts) {
  assert("TSSatisfiesExpression", node, opts);
}
function assertTSTypeAssertion(node, opts) {
  assert("TSTypeAssertion", node, opts);
}
function assertTSEnumDeclaration(node, opts) {
  assert("TSEnumDeclaration", node, opts);
}
function assertTSEnumMember(node, opts) {
  assert("TSEnumMember", node, opts);
}
function assertTSModuleDeclaration(node, opts) {
  assert("TSModuleDeclaration", node, opts);
}
function assertTSModuleBlock(node, opts) {
  assert("TSModuleBlock", node, opts);
}
function assertTSImportType(node, opts) {
  assert("TSImportType", node, opts);
}
function assertTSImportEqualsDeclaration(node, opts) {
  assert("TSImportEqualsDeclaration", node, opts);
}
function assertTSExternalModuleReference(node, opts) {
  assert("TSExternalModuleReference", node, opts);
}
function assertTSNonNullExpression(node, opts) {
  assert("TSNonNullExpression", node, opts);
}
function assertTSExportAssignment(node, opts) {
  assert("TSExportAssignment", node, opts);
}
function assertTSNamespaceExportDeclaration(node, opts) {
  assert("TSNamespaceExportDeclaration", node, opts);
}
function assertTSTypeAnnotation(node, opts) {
  assert("TSTypeAnnotation", node, opts);
}
function assertTSTypeParameterInstantiation(node, opts) {
  assert("TSTypeParameterInstantiation", node, opts);
}
function assertTSTypeParameterDeclaration(node, opts) {
  assert("TSTypeParameterDeclaration", node, opts);
}
function assertTSTypeParameter(node, opts) {
  assert("TSTypeParameter", node, opts);
}
function assertStandardized(node, opts) {
  assert("Standardized", node, opts);
}
function assertExpression(node, opts) {
  assert("Expression", node, opts);
}
function assertBinary(node, opts) {
  assert("Binary", node, opts);
}
function assertScopable(node, opts) {
  assert("Scopable", node, opts);
}
function assertBlockParent(node, opts) {
  assert("BlockParent", node, opts);
}
function assertBlock(node, opts) {
  assert("Block", node, opts);
}
function assertStatement(node, opts) {
  assert("Statement", node, opts);
}
function assertTerminatorless(node, opts) {
  assert("Terminatorless", node, opts);
}
function assertCompletionStatement(node, opts) {
  assert("CompletionStatement", node, opts);
}
function assertConditional(node, opts) {
  assert("Conditional", node, opts);
}
function assertLoop(node, opts) {
  assert("Loop", node, opts);
}
function assertWhile(node, opts) {
  assert("While", node, opts);
}
function assertExpressionWrapper(node, opts) {
  assert("ExpressionWrapper", node, opts);
}
function assertFor(node, opts) {
  assert("For", node, opts);
}
function assertForXStatement(node, opts) {
  assert("ForXStatement", node, opts);
}
function assertFunction(node, opts) {
  assert("Function", node, opts);
}
function assertFunctionParent(node, opts) {
  assert("FunctionParent", node, opts);
}
function assertPureish(node, opts) {
  assert("Pureish", node, opts);
}
function assertDeclaration(node, opts) {
  assert("Declaration", node, opts);
}
function assertPatternLike(node, opts) {
  assert("PatternLike", node, opts);
}
function assertLVal(node, opts) {
  assert("LVal", node, opts);
}
function assertTSEntityName(node, opts) {
  assert("TSEntityName", node, opts);
}
function assertLiteral(node, opts) {
  assert("Literal", node, opts);
}
function assertImmutable(node, opts) {
  assert("Immutable", node, opts);
}
function assertUserWhitespacable(node, opts) {
  assert("UserWhitespacable", node, opts);
}
function assertMethod(node, opts) {
  assert("Method", node, opts);
}
function assertObjectMember(node, opts) {
  assert("ObjectMember", node, opts);
}
function assertProperty(node, opts) {
  assert("Property", node, opts);
}
function assertUnaryLike(node, opts) {
  assert("UnaryLike", node, opts);
}
function assertPattern(node, opts) {
  assert("Pattern", node, opts);
}
function assertClass(node, opts) {
  assert("Class", node, opts);
}
function assertModuleDeclaration(node, opts) {
  assert("ModuleDeclaration", node, opts);
}
function assertExportDeclaration(node, opts) {
  assert("ExportDeclaration", node, opts);
}
function assertModuleSpecifier(node, opts) {
  assert("ModuleSpecifier", node, opts);
}
function assertAccessor(node, opts) {
  assert("Accessor", node, opts);
}
function assertPrivate(node, opts) {
  assert("Private", node, opts);
}
function assertFlow(node, opts) {
  assert("Flow", node, opts);
}
function assertFlowType(node, opts) {
  assert("FlowType", node, opts);
}
function assertFlowBaseAnnotation(node, opts) {
  assert("FlowBaseAnnotation", node, opts);
}
function assertFlowDeclaration(node, opts) {
  assert("FlowDeclaration", node, opts);
}
function assertFlowPredicate(node, opts) {
  assert("FlowPredicate", node, opts);
}
function assertEnumBody(node, opts) {
  assert("EnumBody", node, opts);
}
function assertEnumMember(node, opts) {
  assert("EnumMember", node, opts);
}
function assertJSX(node, opts) {
  assert("JSX", node, opts);
}
function assertMiscellaneous(node, opts) {
  assert("Miscellaneous", node, opts);
}
function assertTypeScript(node, opts) {
  assert("TypeScript", node, opts);
}
function assertTSTypeElement(node, opts) {
  assert("TSTypeElement", node, opts);
}
function assertTSType(node, opts) {
  assert("TSType", node, opts);
}
function assertTSBaseType(node, opts) {
  assert("TSBaseType", node, opts);
}
function assertNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  assert("NumberLiteral", node, opts);
}
function assertRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  assert("RegexLiteral", node, opts);
}
function assertRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  assert("RestProperty", node, opts);
}
function assertSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  assert("SpreadProperty", node, opts);
}
var createTypeAnnotationBasedOnTypeof$1 = {};
Object.defineProperty(createTypeAnnotationBasedOnTypeof$1, "__esModule", {
  value: true
});
createTypeAnnotationBasedOnTypeof$1.default = void 0;
var _generated$l = generated$3;
var _default$4 = createTypeAnnotationBasedOnTypeof;
createTypeAnnotationBasedOnTypeof$1.default = _default$4;
function createTypeAnnotationBasedOnTypeof(type) {
  switch (type) {
    case "string":
      return (0, _generated$l.stringTypeAnnotation)();
    case "number":
      return (0, _generated$l.numberTypeAnnotation)();
    case "undefined":
      return (0, _generated$l.voidTypeAnnotation)();
    case "boolean":
      return (0, _generated$l.booleanTypeAnnotation)();
    case "function":
      return (0, _generated$l.genericTypeAnnotation)((0, _generated$l.identifier)("Function"));
    case "object":
      return (0, _generated$l.genericTypeAnnotation)((0, _generated$l.identifier)("Object"));
    case "symbol":
      return (0, _generated$l.genericTypeAnnotation)((0, _generated$l.identifier)("Symbol"));
    case "bigint":
      return (0, _generated$l.anyTypeAnnotation)();
  }
  throw new Error("Invalid typeof value: " + type);
}
var createFlowUnionType$1 = {};
var removeTypeDuplicates$3 = {};
Object.defineProperty(removeTypeDuplicates$3, "__esModule", {
  value: true
});
removeTypeDuplicates$3.default = removeTypeDuplicates$2;
var _generated$k = generated$4;
function getQualifiedName$1(node) {
  return (0, _generated$k.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName$1(node.qualification)}`;
}
function removeTypeDuplicates$2(nodes) {
  const generics = /* @__PURE__ */ new Map();
  const bases = /* @__PURE__ */ new Map();
  const typeGroups = /* @__PURE__ */ new Set();
  const types = [];
  for (let i2 = 0; i2 < nodes.length; i2++) {
    const node = nodes[i2];
    if (!node)
      continue;
    if (types.indexOf(node) >= 0) {
      continue;
    }
    if ((0, _generated$k.isAnyTypeAnnotation)(node)) {
      return [node];
    }
    if ((0, _generated$k.isFlowBaseAnnotation)(node)) {
      bases.set(node.type, node);
      continue;
    }
    if ((0, _generated$k.isUnionTypeAnnotation)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes = nodes.concat(node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    if ((0, _generated$k.isGenericTypeAnnotation)(node)) {
      const name = getQualifiedName$1(node.id);
      if (generics.has(name)) {
        let existing = generics.get(name);
        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates$2(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics.set(name, node);
      }
      continue;
    }
    types.push(node);
  }
  for (const [, baseType] of bases) {
    types.push(baseType);
  }
  for (const [, genericName] of generics) {
    types.push(genericName);
  }
  return types;
}
Object.defineProperty(createFlowUnionType$1, "__esModule", {
  value: true
});
createFlowUnionType$1.default = createFlowUnionType;
var _generated$j = generated$3;
var _removeTypeDuplicates$1 = removeTypeDuplicates$3;
function createFlowUnionType(types) {
  const flattened = (0, _removeTypeDuplicates$1.default)(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _generated$j.unionTypeAnnotation)(flattened);
  }
}
var createTSUnionType$1 = {};
var removeTypeDuplicates$1 = {};
Object.defineProperty(removeTypeDuplicates$1, "__esModule", {
  value: true
});
removeTypeDuplicates$1.default = removeTypeDuplicates;
var _generated$i = generated$4;
function getQualifiedName(node) {
  return (0, _generated$i.isIdentifier)(node) ? node.name : `${node.right.name}.${getQualifiedName(node.left)}`;
}
function removeTypeDuplicates(nodes) {
  const generics = /* @__PURE__ */ new Map();
  const bases = /* @__PURE__ */ new Map();
  const typeGroups = /* @__PURE__ */ new Set();
  const types = [];
  for (let i2 = 0; i2 < nodes.length; i2++) {
    const node = nodes[i2];
    if (!node)
      continue;
    if (types.indexOf(node) >= 0) {
      continue;
    }
    if ((0, _generated$i.isTSAnyKeyword)(node)) {
      return [node];
    }
    if ((0, _generated$i.isTSBaseType)(node)) {
      bases.set(node.type, node);
      continue;
    }
    if ((0, _generated$i.isTSUnionType)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    if ((0, _generated$i.isTSTypeReference)(node) && node.typeParameters) {
      const name = getQualifiedName(node.typeName);
      if (generics.has(name)) {
        let existing = generics.get(name);
        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics.set(name, node);
      }
      continue;
    }
    types.push(node);
  }
  for (const [, baseType] of bases) {
    types.push(baseType);
  }
  for (const [, genericName] of generics) {
    types.push(genericName);
  }
  return types;
}
Object.defineProperty(createTSUnionType$1, "__esModule", {
  value: true
});
createTSUnionType$1.default = createTSUnionType;
var _generated$h = generated$3;
var _removeTypeDuplicates = removeTypeDuplicates$1;
var _index = generated$4;
function createTSUnionType(typeAnnotations) {
  const types = typeAnnotations.map((type) => {
    return (0, _index.isTSTypeAnnotation)(type) ? type.typeAnnotation : type;
  });
  const flattened = (0, _removeTypeDuplicates.default)(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _generated$h.tsUnionType)(flattened);
  }
}
var uppercase = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "AnyTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.anyTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ArgumentPlaceholder", {
    enumerable: true,
    get: function() {
      return _index2.argumentPlaceholder;
    }
  });
  Object.defineProperty(exports, "ArrayExpression", {
    enumerable: true,
    get: function() {
      return _index2.arrayExpression;
    }
  });
  Object.defineProperty(exports, "ArrayPattern", {
    enumerable: true,
    get: function() {
      return _index2.arrayPattern;
    }
  });
  Object.defineProperty(exports, "ArrayTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.arrayTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ArrowFunctionExpression", {
    enumerable: true,
    get: function() {
      return _index2.arrowFunctionExpression;
    }
  });
  Object.defineProperty(exports, "AssignmentExpression", {
    enumerable: true,
    get: function() {
      return _index2.assignmentExpression;
    }
  });
  Object.defineProperty(exports, "AssignmentPattern", {
    enumerable: true,
    get: function() {
      return _index2.assignmentPattern;
    }
  });
  Object.defineProperty(exports, "AwaitExpression", {
    enumerable: true,
    get: function() {
      return _index2.awaitExpression;
    }
  });
  Object.defineProperty(exports, "BigIntLiteral", {
    enumerable: true,
    get: function() {
      return _index2.bigIntLiteral;
    }
  });
  Object.defineProperty(exports, "BinaryExpression", {
    enumerable: true,
    get: function() {
      return _index2.binaryExpression;
    }
  });
  Object.defineProperty(exports, "BindExpression", {
    enumerable: true,
    get: function() {
      return _index2.bindExpression;
    }
  });
  Object.defineProperty(exports, "BlockStatement", {
    enumerable: true,
    get: function() {
      return _index2.blockStatement;
    }
  });
  Object.defineProperty(exports, "BooleanLiteral", {
    enumerable: true,
    get: function() {
      return _index2.booleanLiteral;
    }
  });
  Object.defineProperty(exports, "BooleanLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.booleanLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "BooleanTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.booleanTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "BreakStatement", {
    enumerable: true,
    get: function() {
      return _index2.breakStatement;
    }
  });
  Object.defineProperty(exports, "CallExpression", {
    enumerable: true,
    get: function() {
      return _index2.callExpression;
    }
  });
  Object.defineProperty(exports, "CatchClause", {
    enumerable: true,
    get: function() {
      return _index2.catchClause;
    }
  });
  Object.defineProperty(exports, "ClassAccessorProperty", {
    enumerable: true,
    get: function() {
      return _index2.classAccessorProperty;
    }
  });
  Object.defineProperty(exports, "ClassBody", {
    enumerable: true,
    get: function() {
      return _index2.classBody;
    }
  });
  Object.defineProperty(exports, "ClassDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.classDeclaration;
    }
  });
  Object.defineProperty(exports, "ClassExpression", {
    enumerable: true,
    get: function() {
      return _index2.classExpression;
    }
  });
  Object.defineProperty(exports, "ClassImplements", {
    enumerable: true,
    get: function() {
      return _index2.classImplements;
    }
  });
  Object.defineProperty(exports, "ClassMethod", {
    enumerable: true,
    get: function() {
      return _index2.classMethod;
    }
  });
  Object.defineProperty(exports, "ClassPrivateMethod", {
    enumerable: true,
    get: function() {
      return _index2.classPrivateMethod;
    }
  });
  Object.defineProperty(exports, "ClassPrivateProperty", {
    enumerable: true,
    get: function() {
      return _index2.classPrivateProperty;
    }
  });
  Object.defineProperty(exports, "ClassProperty", {
    enumerable: true,
    get: function() {
      return _index2.classProperty;
    }
  });
  Object.defineProperty(exports, "ConditionalExpression", {
    enumerable: true,
    get: function() {
      return _index2.conditionalExpression;
    }
  });
  Object.defineProperty(exports, "ContinueStatement", {
    enumerable: true,
    get: function() {
      return _index2.continueStatement;
    }
  });
  Object.defineProperty(exports, "DebuggerStatement", {
    enumerable: true,
    get: function() {
      return _index2.debuggerStatement;
    }
  });
  Object.defineProperty(exports, "DecimalLiteral", {
    enumerable: true,
    get: function() {
      return _index2.decimalLiteral;
    }
  });
  Object.defineProperty(exports, "DeclareClass", {
    enumerable: true,
    get: function() {
      return _index2.declareClass;
    }
  });
  Object.defineProperty(exports, "DeclareExportAllDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.declareExportAllDeclaration;
    }
  });
  Object.defineProperty(exports, "DeclareExportDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.declareExportDeclaration;
    }
  });
  Object.defineProperty(exports, "DeclareFunction", {
    enumerable: true,
    get: function() {
      return _index2.declareFunction;
    }
  });
  Object.defineProperty(exports, "DeclareInterface", {
    enumerable: true,
    get: function() {
      return _index2.declareInterface;
    }
  });
  Object.defineProperty(exports, "DeclareModule", {
    enumerable: true,
    get: function() {
      return _index2.declareModule;
    }
  });
  Object.defineProperty(exports, "DeclareModuleExports", {
    enumerable: true,
    get: function() {
      return _index2.declareModuleExports;
    }
  });
  Object.defineProperty(exports, "DeclareOpaqueType", {
    enumerable: true,
    get: function() {
      return _index2.declareOpaqueType;
    }
  });
  Object.defineProperty(exports, "DeclareTypeAlias", {
    enumerable: true,
    get: function() {
      return _index2.declareTypeAlias;
    }
  });
  Object.defineProperty(exports, "DeclareVariable", {
    enumerable: true,
    get: function() {
      return _index2.declareVariable;
    }
  });
  Object.defineProperty(exports, "DeclaredPredicate", {
    enumerable: true,
    get: function() {
      return _index2.declaredPredicate;
    }
  });
  Object.defineProperty(exports, "Decorator", {
    enumerable: true,
    get: function() {
      return _index2.decorator;
    }
  });
  Object.defineProperty(exports, "Directive", {
    enumerable: true,
    get: function() {
      return _index2.directive;
    }
  });
  Object.defineProperty(exports, "DirectiveLiteral", {
    enumerable: true,
    get: function() {
      return _index2.directiveLiteral;
    }
  });
  Object.defineProperty(exports, "DoExpression", {
    enumerable: true,
    get: function() {
      return _index2.doExpression;
    }
  });
  Object.defineProperty(exports, "DoWhileStatement", {
    enumerable: true,
    get: function() {
      return _index2.doWhileStatement;
    }
  });
  Object.defineProperty(exports, "EmptyStatement", {
    enumerable: true,
    get: function() {
      return _index2.emptyStatement;
    }
  });
  Object.defineProperty(exports, "EmptyTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.emptyTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "EnumBooleanBody", {
    enumerable: true,
    get: function() {
      return _index2.enumBooleanBody;
    }
  });
  Object.defineProperty(exports, "EnumBooleanMember", {
    enumerable: true,
    get: function() {
      return _index2.enumBooleanMember;
    }
  });
  Object.defineProperty(exports, "EnumDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.enumDeclaration;
    }
  });
  Object.defineProperty(exports, "EnumDefaultedMember", {
    enumerable: true,
    get: function() {
      return _index2.enumDefaultedMember;
    }
  });
  Object.defineProperty(exports, "EnumNumberBody", {
    enumerable: true,
    get: function() {
      return _index2.enumNumberBody;
    }
  });
  Object.defineProperty(exports, "EnumNumberMember", {
    enumerable: true,
    get: function() {
      return _index2.enumNumberMember;
    }
  });
  Object.defineProperty(exports, "EnumStringBody", {
    enumerable: true,
    get: function() {
      return _index2.enumStringBody;
    }
  });
  Object.defineProperty(exports, "EnumStringMember", {
    enumerable: true,
    get: function() {
      return _index2.enumStringMember;
    }
  });
  Object.defineProperty(exports, "EnumSymbolBody", {
    enumerable: true,
    get: function() {
      return _index2.enumSymbolBody;
    }
  });
  Object.defineProperty(exports, "ExistsTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.existsTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ExportAllDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.exportAllDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportDefaultDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.exportDefaultDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportDefaultSpecifier", {
    enumerable: true,
    get: function() {
      return _index2.exportDefaultSpecifier;
    }
  });
  Object.defineProperty(exports, "ExportNamedDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.exportNamedDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportNamespaceSpecifier", {
    enumerable: true,
    get: function() {
      return _index2.exportNamespaceSpecifier;
    }
  });
  Object.defineProperty(exports, "ExportSpecifier", {
    enumerable: true,
    get: function() {
      return _index2.exportSpecifier;
    }
  });
  Object.defineProperty(exports, "ExpressionStatement", {
    enumerable: true,
    get: function() {
      return _index2.expressionStatement;
    }
  });
  Object.defineProperty(exports, "File", {
    enumerable: true,
    get: function() {
      return _index2.file;
    }
  });
  Object.defineProperty(exports, "ForInStatement", {
    enumerable: true,
    get: function() {
      return _index2.forInStatement;
    }
  });
  Object.defineProperty(exports, "ForOfStatement", {
    enumerable: true,
    get: function() {
      return _index2.forOfStatement;
    }
  });
  Object.defineProperty(exports, "ForStatement", {
    enumerable: true,
    get: function() {
      return _index2.forStatement;
    }
  });
  Object.defineProperty(exports, "FunctionDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.functionDeclaration;
    }
  });
  Object.defineProperty(exports, "FunctionExpression", {
    enumerable: true,
    get: function() {
      return _index2.functionExpression;
    }
  });
  Object.defineProperty(exports, "FunctionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.functionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "FunctionTypeParam", {
    enumerable: true,
    get: function() {
      return _index2.functionTypeParam;
    }
  });
  Object.defineProperty(exports, "GenericTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.genericTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "Identifier", {
    enumerable: true,
    get: function() {
      return _index2.identifier;
    }
  });
  Object.defineProperty(exports, "IfStatement", {
    enumerable: true,
    get: function() {
      return _index2.ifStatement;
    }
  });
  Object.defineProperty(exports, "Import", {
    enumerable: true,
    get: function() {
      return _index2.import;
    }
  });
  Object.defineProperty(exports, "ImportAttribute", {
    enumerable: true,
    get: function() {
      return _index2.importAttribute;
    }
  });
  Object.defineProperty(exports, "ImportDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.importDeclaration;
    }
  });
  Object.defineProperty(exports, "ImportDefaultSpecifier", {
    enumerable: true,
    get: function() {
      return _index2.importDefaultSpecifier;
    }
  });
  Object.defineProperty(exports, "ImportNamespaceSpecifier", {
    enumerable: true,
    get: function() {
      return _index2.importNamespaceSpecifier;
    }
  });
  Object.defineProperty(exports, "ImportSpecifier", {
    enumerable: true,
    get: function() {
      return _index2.importSpecifier;
    }
  });
  Object.defineProperty(exports, "IndexedAccessType", {
    enumerable: true,
    get: function() {
      return _index2.indexedAccessType;
    }
  });
  Object.defineProperty(exports, "InferredPredicate", {
    enumerable: true,
    get: function() {
      return _index2.inferredPredicate;
    }
  });
  Object.defineProperty(exports, "InterfaceDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.interfaceDeclaration;
    }
  });
  Object.defineProperty(exports, "InterfaceExtends", {
    enumerable: true,
    get: function() {
      return _index2.interfaceExtends;
    }
  });
  Object.defineProperty(exports, "InterfaceTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.interfaceTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "InterpreterDirective", {
    enumerable: true,
    get: function() {
      return _index2.interpreterDirective;
    }
  });
  Object.defineProperty(exports, "IntersectionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.intersectionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "JSXAttribute", {
    enumerable: true,
    get: function() {
      return _index2.jsxAttribute;
    }
  });
  Object.defineProperty(exports, "JSXClosingElement", {
    enumerable: true,
    get: function() {
      return _index2.jsxClosingElement;
    }
  });
  Object.defineProperty(exports, "JSXClosingFragment", {
    enumerable: true,
    get: function() {
      return _index2.jsxClosingFragment;
    }
  });
  Object.defineProperty(exports, "JSXElement", {
    enumerable: true,
    get: function() {
      return _index2.jsxElement;
    }
  });
  Object.defineProperty(exports, "JSXEmptyExpression", {
    enumerable: true,
    get: function() {
      return _index2.jsxEmptyExpression;
    }
  });
  Object.defineProperty(exports, "JSXExpressionContainer", {
    enumerable: true,
    get: function() {
      return _index2.jsxExpressionContainer;
    }
  });
  Object.defineProperty(exports, "JSXFragment", {
    enumerable: true,
    get: function() {
      return _index2.jsxFragment;
    }
  });
  Object.defineProperty(exports, "JSXIdentifier", {
    enumerable: true,
    get: function() {
      return _index2.jsxIdentifier;
    }
  });
  Object.defineProperty(exports, "JSXMemberExpression", {
    enumerable: true,
    get: function() {
      return _index2.jsxMemberExpression;
    }
  });
  Object.defineProperty(exports, "JSXNamespacedName", {
    enumerable: true,
    get: function() {
      return _index2.jsxNamespacedName;
    }
  });
  Object.defineProperty(exports, "JSXOpeningElement", {
    enumerable: true,
    get: function() {
      return _index2.jsxOpeningElement;
    }
  });
  Object.defineProperty(exports, "JSXOpeningFragment", {
    enumerable: true,
    get: function() {
      return _index2.jsxOpeningFragment;
    }
  });
  Object.defineProperty(exports, "JSXSpreadAttribute", {
    enumerable: true,
    get: function() {
      return _index2.jsxSpreadAttribute;
    }
  });
  Object.defineProperty(exports, "JSXSpreadChild", {
    enumerable: true,
    get: function() {
      return _index2.jsxSpreadChild;
    }
  });
  Object.defineProperty(exports, "JSXText", {
    enumerable: true,
    get: function() {
      return _index2.jsxText;
    }
  });
  Object.defineProperty(exports, "LabeledStatement", {
    enumerable: true,
    get: function() {
      return _index2.labeledStatement;
    }
  });
  Object.defineProperty(exports, "LogicalExpression", {
    enumerable: true,
    get: function() {
      return _index2.logicalExpression;
    }
  });
  Object.defineProperty(exports, "MemberExpression", {
    enumerable: true,
    get: function() {
      return _index2.memberExpression;
    }
  });
  Object.defineProperty(exports, "MetaProperty", {
    enumerable: true,
    get: function() {
      return _index2.metaProperty;
    }
  });
  Object.defineProperty(exports, "MixedTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.mixedTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ModuleExpression", {
    enumerable: true,
    get: function() {
      return _index2.moduleExpression;
    }
  });
  Object.defineProperty(exports, "NewExpression", {
    enumerable: true,
    get: function() {
      return _index2.newExpression;
    }
  });
  Object.defineProperty(exports, "Noop", {
    enumerable: true,
    get: function() {
      return _index2.noop;
    }
  });
  Object.defineProperty(exports, "NullLiteral", {
    enumerable: true,
    get: function() {
      return _index2.nullLiteral;
    }
  });
  Object.defineProperty(exports, "NullLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.nullLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NullableTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.nullableTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumberLiteral", {
    enumerable: true,
    get: function() {
      return _index2.numberLiteral;
    }
  });
  Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.numberLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumberTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.numberTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumericLiteral", {
    enumerable: true,
    get: function() {
      return _index2.numericLiteral;
    }
  });
  Object.defineProperty(exports, "ObjectExpression", {
    enumerable: true,
    get: function() {
      return _index2.objectExpression;
    }
  });
  Object.defineProperty(exports, "ObjectMethod", {
    enumerable: true,
    get: function() {
      return _index2.objectMethod;
    }
  });
  Object.defineProperty(exports, "ObjectPattern", {
    enumerable: true,
    get: function() {
      return _index2.objectPattern;
    }
  });
  Object.defineProperty(exports, "ObjectProperty", {
    enumerable: true,
    get: function() {
      return _index2.objectProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.objectTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ObjectTypeCallProperty", {
    enumerable: true,
    get: function() {
      return _index2.objectTypeCallProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeIndexer", {
    enumerable: true,
    get: function() {
      return _index2.objectTypeIndexer;
    }
  });
  Object.defineProperty(exports, "ObjectTypeInternalSlot", {
    enumerable: true,
    get: function() {
      return _index2.objectTypeInternalSlot;
    }
  });
  Object.defineProperty(exports, "ObjectTypeProperty", {
    enumerable: true,
    get: function() {
      return _index2.objectTypeProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeSpreadProperty", {
    enumerable: true,
    get: function() {
      return _index2.objectTypeSpreadProperty;
    }
  });
  Object.defineProperty(exports, "OpaqueType", {
    enumerable: true,
    get: function() {
      return _index2.opaqueType;
    }
  });
  Object.defineProperty(exports, "OptionalCallExpression", {
    enumerable: true,
    get: function() {
      return _index2.optionalCallExpression;
    }
  });
  Object.defineProperty(exports, "OptionalIndexedAccessType", {
    enumerable: true,
    get: function() {
      return _index2.optionalIndexedAccessType;
    }
  });
  Object.defineProperty(exports, "OptionalMemberExpression", {
    enumerable: true,
    get: function() {
      return _index2.optionalMemberExpression;
    }
  });
  Object.defineProperty(exports, "ParenthesizedExpression", {
    enumerable: true,
    get: function() {
      return _index2.parenthesizedExpression;
    }
  });
  Object.defineProperty(exports, "PipelineBareFunction", {
    enumerable: true,
    get: function() {
      return _index2.pipelineBareFunction;
    }
  });
  Object.defineProperty(exports, "PipelinePrimaryTopicReference", {
    enumerable: true,
    get: function() {
      return _index2.pipelinePrimaryTopicReference;
    }
  });
  Object.defineProperty(exports, "PipelineTopicExpression", {
    enumerable: true,
    get: function() {
      return _index2.pipelineTopicExpression;
    }
  });
  Object.defineProperty(exports, "Placeholder", {
    enumerable: true,
    get: function() {
      return _index2.placeholder;
    }
  });
  Object.defineProperty(exports, "PrivateName", {
    enumerable: true,
    get: function() {
      return _index2.privateName;
    }
  });
  Object.defineProperty(exports, "Program", {
    enumerable: true,
    get: function() {
      return _index2.program;
    }
  });
  Object.defineProperty(exports, "QualifiedTypeIdentifier", {
    enumerable: true,
    get: function() {
      return _index2.qualifiedTypeIdentifier;
    }
  });
  Object.defineProperty(exports, "RecordExpression", {
    enumerable: true,
    get: function() {
      return _index2.recordExpression;
    }
  });
  Object.defineProperty(exports, "RegExpLiteral", {
    enumerable: true,
    get: function() {
      return _index2.regExpLiteral;
    }
  });
  Object.defineProperty(exports, "RegexLiteral", {
    enumerable: true,
    get: function() {
      return _index2.regexLiteral;
    }
  });
  Object.defineProperty(exports, "RestElement", {
    enumerable: true,
    get: function() {
      return _index2.restElement;
    }
  });
  Object.defineProperty(exports, "RestProperty", {
    enumerable: true,
    get: function() {
      return _index2.restProperty;
    }
  });
  Object.defineProperty(exports, "ReturnStatement", {
    enumerable: true,
    get: function() {
      return _index2.returnStatement;
    }
  });
  Object.defineProperty(exports, "SequenceExpression", {
    enumerable: true,
    get: function() {
      return _index2.sequenceExpression;
    }
  });
  Object.defineProperty(exports, "SpreadElement", {
    enumerable: true,
    get: function() {
      return _index2.spreadElement;
    }
  });
  Object.defineProperty(exports, "SpreadProperty", {
    enumerable: true,
    get: function() {
      return _index2.spreadProperty;
    }
  });
  Object.defineProperty(exports, "StaticBlock", {
    enumerable: true,
    get: function() {
      return _index2.staticBlock;
    }
  });
  Object.defineProperty(exports, "StringLiteral", {
    enumerable: true,
    get: function() {
      return _index2.stringLiteral;
    }
  });
  Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.stringLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "StringTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.stringTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "Super", {
    enumerable: true,
    get: function() {
      return _index2.super;
    }
  });
  Object.defineProperty(exports, "SwitchCase", {
    enumerable: true,
    get: function() {
      return _index2.switchCase;
    }
  });
  Object.defineProperty(exports, "SwitchStatement", {
    enumerable: true,
    get: function() {
      return _index2.switchStatement;
    }
  });
  Object.defineProperty(exports, "SymbolTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.symbolTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TSAnyKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsAnyKeyword;
    }
  });
  Object.defineProperty(exports, "TSArrayType", {
    enumerable: true,
    get: function() {
      return _index2.tsArrayType;
    }
  });
  Object.defineProperty(exports, "TSAsExpression", {
    enumerable: true,
    get: function() {
      return _index2.tsAsExpression;
    }
  });
  Object.defineProperty(exports, "TSBigIntKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsBigIntKeyword;
    }
  });
  Object.defineProperty(exports, "TSBooleanKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsBooleanKeyword;
    }
  });
  Object.defineProperty(exports, "TSCallSignatureDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsCallSignatureDeclaration;
    }
  });
  Object.defineProperty(exports, "TSConditionalType", {
    enumerable: true,
    get: function() {
      return _index2.tsConditionalType;
    }
  });
  Object.defineProperty(exports, "TSConstructSignatureDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsConstructSignatureDeclaration;
    }
  });
  Object.defineProperty(exports, "TSConstructorType", {
    enumerable: true,
    get: function() {
      return _index2.tsConstructorType;
    }
  });
  Object.defineProperty(exports, "TSDeclareFunction", {
    enumerable: true,
    get: function() {
      return _index2.tsDeclareFunction;
    }
  });
  Object.defineProperty(exports, "TSDeclareMethod", {
    enumerable: true,
    get: function() {
      return _index2.tsDeclareMethod;
    }
  });
  Object.defineProperty(exports, "TSEnumDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsEnumDeclaration;
    }
  });
  Object.defineProperty(exports, "TSEnumMember", {
    enumerable: true,
    get: function() {
      return _index2.tsEnumMember;
    }
  });
  Object.defineProperty(exports, "TSExportAssignment", {
    enumerable: true,
    get: function() {
      return _index2.tsExportAssignment;
    }
  });
  Object.defineProperty(exports, "TSExpressionWithTypeArguments", {
    enumerable: true,
    get: function() {
      return _index2.tsExpressionWithTypeArguments;
    }
  });
  Object.defineProperty(exports, "TSExternalModuleReference", {
    enumerable: true,
    get: function() {
      return _index2.tsExternalModuleReference;
    }
  });
  Object.defineProperty(exports, "TSFunctionType", {
    enumerable: true,
    get: function() {
      return _index2.tsFunctionType;
    }
  });
  Object.defineProperty(exports, "TSImportEqualsDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsImportEqualsDeclaration;
    }
  });
  Object.defineProperty(exports, "TSImportType", {
    enumerable: true,
    get: function() {
      return _index2.tsImportType;
    }
  });
  Object.defineProperty(exports, "TSIndexSignature", {
    enumerable: true,
    get: function() {
      return _index2.tsIndexSignature;
    }
  });
  Object.defineProperty(exports, "TSIndexedAccessType", {
    enumerable: true,
    get: function() {
      return _index2.tsIndexedAccessType;
    }
  });
  Object.defineProperty(exports, "TSInferType", {
    enumerable: true,
    get: function() {
      return _index2.tsInferType;
    }
  });
  Object.defineProperty(exports, "TSInstantiationExpression", {
    enumerable: true,
    get: function() {
      return _index2.tsInstantiationExpression;
    }
  });
  Object.defineProperty(exports, "TSInterfaceBody", {
    enumerable: true,
    get: function() {
      return _index2.tsInterfaceBody;
    }
  });
  Object.defineProperty(exports, "TSInterfaceDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsInterfaceDeclaration;
    }
  });
  Object.defineProperty(exports, "TSIntersectionType", {
    enumerable: true,
    get: function() {
      return _index2.tsIntersectionType;
    }
  });
  Object.defineProperty(exports, "TSIntrinsicKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsIntrinsicKeyword;
    }
  });
  Object.defineProperty(exports, "TSLiteralType", {
    enumerable: true,
    get: function() {
      return _index2.tsLiteralType;
    }
  });
  Object.defineProperty(exports, "TSMappedType", {
    enumerable: true,
    get: function() {
      return _index2.tsMappedType;
    }
  });
  Object.defineProperty(exports, "TSMethodSignature", {
    enumerable: true,
    get: function() {
      return _index2.tsMethodSignature;
    }
  });
  Object.defineProperty(exports, "TSModuleBlock", {
    enumerable: true,
    get: function() {
      return _index2.tsModuleBlock;
    }
  });
  Object.defineProperty(exports, "TSModuleDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsModuleDeclaration;
    }
  });
  Object.defineProperty(exports, "TSNamedTupleMember", {
    enumerable: true,
    get: function() {
      return _index2.tsNamedTupleMember;
    }
  });
  Object.defineProperty(exports, "TSNamespaceExportDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsNamespaceExportDeclaration;
    }
  });
  Object.defineProperty(exports, "TSNeverKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsNeverKeyword;
    }
  });
  Object.defineProperty(exports, "TSNonNullExpression", {
    enumerable: true,
    get: function() {
      return _index2.tsNonNullExpression;
    }
  });
  Object.defineProperty(exports, "TSNullKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsNullKeyword;
    }
  });
  Object.defineProperty(exports, "TSNumberKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsNumberKeyword;
    }
  });
  Object.defineProperty(exports, "TSObjectKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsObjectKeyword;
    }
  });
  Object.defineProperty(exports, "TSOptionalType", {
    enumerable: true,
    get: function() {
      return _index2.tsOptionalType;
    }
  });
  Object.defineProperty(exports, "TSParameterProperty", {
    enumerable: true,
    get: function() {
      return _index2.tsParameterProperty;
    }
  });
  Object.defineProperty(exports, "TSParenthesizedType", {
    enumerable: true,
    get: function() {
      return _index2.tsParenthesizedType;
    }
  });
  Object.defineProperty(exports, "TSPropertySignature", {
    enumerable: true,
    get: function() {
      return _index2.tsPropertySignature;
    }
  });
  Object.defineProperty(exports, "TSQualifiedName", {
    enumerable: true,
    get: function() {
      return _index2.tsQualifiedName;
    }
  });
  Object.defineProperty(exports, "TSRestType", {
    enumerable: true,
    get: function() {
      return _index2.tsRestType;
    }
  });
  Object.defineProperty(exports, "TSSatisfiesExpression", {
    enumerable: true,
    get: function() {
      return _index2.tsSatisfiesExpression;
    }
  });
  Object.defineProperty(exports, "TSStringKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsStringKeyword;
    }
  });
  Object.defineProperty(exports, "TSSymbolKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsSymbolKeyword;
    }
  });
  Object.defineProperty(exports, "TSThisType", {
    enumerable: true,
    get: function() {
      return _index2.tsThisType;
    }
  });
  Object.defineProperty(exports, "TSTupleType", {
    enumerable: true,
    get: function() {
      return _index2.tsTupleType;
    }
  });
  Object.defineProperty(exports, "TSTypeAliasDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeAliasDeclaration;
    }
  });
  Object.defineProperty(exports, "TSTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TSTypeAssertion", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeAssertion;
    }
  });
  Object.defineProperty(exports, "TSTypeLiteral", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeLiteral;
    }
  });
  Object.defineProperty(exports, "TSTypeOperator", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeOperator;
    }
  });
  Object.defineProperty(exports, "TSTypeParameter", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeParameter;
    }
  });
  Object.defineProperty(exports, "TSTypeParameterDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeParameterDeclaration;
    }
  });
  Object.defineProperty(exports, "TSTypeParameterInstantiation", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeParameterInstantiation;
    }
  });
  Object.defineProperty(exports, "TSTypePredicate", {
    enumerable: true,
    get: function() {
      return _index2.tsTypePredicate;
    }
  });
  Object.defineProperty(exports, "TSTypeQuery", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeQuery;
    }
  });
  Object.defineProperty(exports, "TSTypeReference", {
    enumerable: true,
    get: function() {
      return _index2.tsTypeReference;
    }
  });
  Object.defineProperty(exports, "TSUndefinedKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsUndefinedKeyword;
    }
  });
  Object.defineProperty(exports, "TSUnionType", {
    enumerable: true,
    get: function() {
      return _index2.tsUnionType;
    }
  });
  Object.defineProperty(exports, "TSUnknownKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsUnknownKeyword;
    }
  });
  Object.defineProperty(exports, "TSVoidKeyword", {
    enumerable: true,
    get: function() {
      return _index2.tsVoidKeyword;
    }
  });
  Object.defineProperty(exports, "TaggedTemplateExpression", {
    enumerable: true,
    get: function() {
      return _index2.taggedTemplateExpression;
    }
  });
  Object.defineProperty(exports, "TemplateElement", {
    enumerable: true,
    get: function() {
      return _index2.templateElement;
    }
  });
  Object.defineProperty(exports, "TemplateLiteral", {
    enumerable: true,
    get: function() {
      return _index2.templateLiteral;
    }
  });
  Object.defineProperty(exports, "ThisExpression", {
    enumerable: true,
    get: function() {
      return _index2.thisExpression;
    }
  });
  Object.defineProperty(exports, "ThisTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.thisTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ThrowStatement", {
    enumerable: true,
    get: function() {
      return _index2.throwStatement;
    }
  });
  Object.defineProperty(exports, "TopicReference", {
    enumerable: true,
    get: function() {
      return _index2.topicReference;
    }
  });
  Object.defineProperty(exports, "TryStatement", {
    enumerable: true,
    get: function() {
      return _index2.tryStatement;
    }
  });
  Object.defineProperty(exports, "TupleExpression", {
    enumerable: true,
    get: function() {
      return _index2.tupleExpression;
    }
  });
  Object.defineProperty(exports, "TupleTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.tupleTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TypeAlias", {
    enumerable: true,
    get: function() {
      return _index2.typeAlias;
    }
  });
  Object.defineProperty(exports, "TypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.typeAnnotation;
    }
  });
  Object.defineProperty(exports, "TypeCastExpression", {
    enumerable: true,
    get: function() {
      return _index2.typeCastExpression;
    }
  });
  Object.defineProperty(exports, "TypeParameter", {
    enumerable: true,
    get: function() {
      return _index2.typeParameter;
    }
  });
  Object.defineProperty(exports, "TypeParameterDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.typeParameterDeclaration;
    }
  });
  Object.defineProperty(exports, "TypeParameterInstantiation", {
    enumerable: true,
    get: function() {
      return _index2.typeParameterInstantiation;
    }
  });
  Object.defineProperty(exports, "TypeofTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.typeofTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "UnaryExpression", {
    enumerable: true,
    get: function() {
      return _index2.unaryExpression;
    }
  });
  Object.defineProperty(exports, "UnionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.unionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "UpdateExpression", {
    enumerable: true,
    get: function() {
      return _index2.updateExpression;
    }
  });
  Object.defineProperty(exports, "V8IntrinsicIdentifier", {
    enumerable: true,
    get: function() {
      return _index2.v8IntrinsicIdentifier;
    }
  });
  Object.defineProperty(exports, "VariableDeclaration", {
    enumerable: true,
    get: function() {
      return _index2.variableDeclaration;
    }
  });
  Object.defineProperty(exports, "VariableDeclarator", {
    enumerable: true,
    get: function() {
      return _index2.variableDeclarator;
    }
  });
  Object.defineProperty(exports, "Variance", {
    enumerable: true,
    get: function() {
      return _index2.variance;
    }
  });
  Object.defineProperty(exports, "VoidTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _index2.voidTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "WhileStatement", {
    enumerable: true,
    get: function() {
      return _index2.whileStatement;
    }
  });
  Object.defineProperty(exports, "WithStatement", {
    enumerable: true,
    get: function() {
      return _index2.withStatement;
    }
  });
  Object.defineProperty(exports, "YieldExpression", {
    enumerable: true,
    get: function() {
      return _index2.yieldExpression;
    }
  });
  var _index2 = generated$3;
})(uppercase);
var cloneNode$1 = {};
Object.defineProperty(cloneNode$1, "__esModule", {
  value: true
});
cloneNode$1.default = cloneNode;
var _definitions$4 = definitions;
var _generated$g = generated$4;
const has = Function.call.bind(Object.prototype.hasOwnProperty);
function cloneIfNode(obj, deep, withoutLoc, commentsCache) {
  if (obj && typeof obj.type === "string") {
    return cloneNodeInternal(obj, deep, withoutLoc, commentsCache);
  }
  return obj;
}
function cloneIfNodeOrArray(obj, deep, withoutLoc, commentsCache) {
  if (Array.isArray(obj)) {
    return obj.map((node) => cloneIfNode(node, deep, withoutLoc, commentsCache));
  }
  return cloneIfNode(obj, deep, withoutLoc, commentsCache);
}
function cloneNode(node, deep = true, withoutLoc = false) {
  return cloneNodeInternal(node, deep, withoutLoc, /* @__PURE__ */ new Map());
}
function cloneNodeInternal(node, deep = true, withoutLoc = false, commentsCache) {
  if (!node)
    return node;
  const {
    type
  } = node;
  const newNode = {
    type: node.type
  };
  if ((0, _generated$g.isIdentifier)(node)) {
    newNode.name = node.name;
    if (has(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }
    if (has(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc, commentsCache) : node.typeAnnotation;
    }
  } else if (!has(_definitions$4.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(_definitions$4.NODE_FIELDS[type])) {
      if (has(node, field)) {
        if (deep) {
          newNode[field] = (0, _generated$g.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc, commentsCache) : cloneIfNodeOrArray(node[field], true, withoutLoc, commentsCache);
        } else {
          newNode[field] = node[field];
        }
      }
    }
  }
  if (has(node, "loc")) {
    if (withoutLoc) {
      newNode.loc = null;
    } else {
      newNode.loc = node.loc;
    }
  }
  if (has(node, "leadingComments")) {
    newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc, commentsCache);
  }
  if (has(node, "innerComments")) {
    newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc, commentsCache);
  }
  if (has(node, "trailingComments")) {
    newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc, commentsCache);
  }
  if (has(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }
  return newNode;
}
function maybeCloneComments(comments, deep, withoutLoc, commentsCache) {
  if (!comments || !deep) {
    return comments;
  }
  return comments.map((comment) => {
    const cache = commentsCache.get(comment);
    if (cache)
      return cache;
    const {
      type,
      value,
      loc
    } = comment;
    const ret = {
      type,
      value,
      loc
    };
    if (withoutLoc) {
      ret.loc = null;
    }
    commentsCache.set(comment, ret);
    return ret;
  });
}
var clone$1 = {};
Object.defineProperty(clone$1, "__esModule", {
  value: true
});
clone$1.default = clone;
var _cloneNode$5 = cloneNode$1;
function clone(node) {
  return (0, _cloneNode$5.default)(node, false);
}
var cloneDeep$1 = {};
Object.defineProperty(cloneDeep$1, "__esModule", {
  value: true
});
cloneDeep$1.default = cloneDeep;
var _cloneNode$4 = cloneNode$1;
function cloneDeep(node) {
  return (0, _cloneNode$4.default)(node);
}
var cloneDeepWithoutLoc$1 = {};
Object.defineProperty(cloneDeepWithoutLoc$1, "__esModule", {
  value: true
});
cloneDeepWithoutLoc$1.default = cloneDeepWithoutLoc;
var _cloneNode$3 = cloneNode$1;
function cloneDeepWithoutLoc(node) {
  return (0, _cloneNode$3.default)(node, true, true);
}
var cloneWithoutLoc$1 = {};
Object.defineProperty(cloneWithoutLoc$1, "__esModule", {
  value: true
});
cloneWithoutLoc$1.default = cloneWithoutLoc;
var _cloneNode$2 = cloneNode$1;
function cloneWithoutLoc(node) {
  return (0, _cloneNode$2.default)(node, false, true);
}
var addComment$1 = {};
var addComments$1 = {};
Object.defineProperty(addComments$1, "__esModule", {
  value: true
});
addComments$1.default = addComments;
function addComments(node, type, comments) {
  if (!comments || !node)
    return node;
  const key = `${type}Comments`;
  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key].push(...comments);
    }
  } else {
    node[key] = comments;
  }
  return node;
}
Object.defineProperty(addComment$1, "__esModule", {
  value: true
});
addComment$1.default = addComment;
var _addComments = addComments$1;
function addComment(node, type, content, line) {
  return (0, _addComments.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}
var inheritInnerComments$1 = {};
var inherit$1 = {};
Object.defineProperty(inherit$1, "__esModule", {
  value: true
});
inherit$1.default = inherit;
function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
  }
}
Object.defineProperty(inheritInnerComments$1, "__esModule", {
  value: true
});
inheritInnerComments$1.default = inheritInnerComments;
var _inherit$2 = inherit$1;
function inheritInnerComments(child, parent) {
  (0, _inherit$2.default)("innerComments", child, parent);
}
var inheritLeadingComments$1 = {};
Object.defineProperty(inheritLeadingComments$1, "__esModule", {
  value: true
});
inheritLeadingComments$1.default = inheritLeadingComments;
var _inherit$1 = inherit$1;
function inheritLeadingComments(child, parent) {
  (0, _inherit$1.default)("leadingComments", child, parent);
}
var inheritsComments$1 = {};
var inheritTrailingComments$1 = {};
Object.defineProperty(inheritTrailingComments$1, "__esModule", {
  value: true
});
inheritTrailingComments$1.default = inheritTrailingComments;
var _inherit = inherit$1;
function inheritTrailingComments(child, parent) {
  (0, _inherit.default)("trailingComments", child, parent);
}
Object.defineProperty(inheritsComments$1, "__esModule", {
  value: true
});
inheritsComments$1.default = inheritsComments;
var _inheritTrailingComments = inheritTrailingComments$1;
var _inheritLeadingComments = inheritLeadingComments$1;
var _inheritInnerComments = inheritInnerComments$1;
function inheritsComments(child, parent) {
  (0, _inheritTrailingComments.default)(child, parent);
  (0, _inheritLeadingComments.default)(child, parent);
  (0, _inheritInnerComments.default)(child, parent);
  return child;
}
var removeComments$1 = {};
Object.defineProperty(removeComments$1, "__esModule", {
  value: true
});
removeComments$1.default = removeComments;
var _constants$4 = constants;
function removeComments(node) {
  _constants$4.COMMENT_KEYS.forEach((key) => {
    node[key] = null;
  });
  return node;
}
var generated$1 = {};
Object.defineProperty(generated$1, "__esModule", {
  value: true
});
generated$1.WHILE_TYPES = generated$1.USERWHITESPACABLE_TYPES = generated$1.UNARYLIKE_TYPES = generated$1.TYPESCRIPT_TYPES = generated$1.TSTYPE_TYPES = generated$1.TSTYPEELEMENT_TYPES = generated$1.TSENTITYNAME_TYPES = generated$1.TSBASETYPE_TYPES = generated$1.TERMINATORLESS_TYPES = generated$1.STATEMENT_TYPES = generated$1.STANDARDIZED_TYPES = generated$1.SCOPABLE_TYPES = generated$1.PUREISH_TYPES = generated$1.PROPERTY_TYPES = generated$1.PRIVATE_TYPES = generated$1.PATTERN_TYPES = generated$1.PATTERNLIKE_TYPES = generated$1.OBJECTMEMBER_TYPES = generated$1.MODULESPECIFIER_TYPES = generated$1.MODULEDECLARATION_TYPES = generated$1.MISCELLANEOUS_TYPES = generated$1.METHOD_TYPES = generated$1.LVAL_TYPES = generated$1.LOOP_TYPES = generated$1.LITERAL_TYPES = generated$1.JSX_TYPES = generated$1.IMMUTABLE_TYPES = generated$1.FUNCTION_TYPES = generated$1.FUNCTIONPARENT_TYPES = generated$1.FOR_TYPES = generated$1.FORXSTATEMENT_TYPES = generated$1.FLOW_TYPES = generated$1.FLOWTYPE_TYPES = generated$1.FLOWPREDICATE_TYPES = generated$1.FLOWDECLARATION_TYPES = generated$1.FLOWBASEANNOTATION_TYPES = generated$1.EXPRESSION_TYPES = generated$1.EXPRESSIONWRAPPER_TYPES = generated$1.EXPORTDECLARATION_TYPES = generated$1.ENUMMEMBER_TYPES = generated$1.ENUMBODY_TYPES = generated$1.DECLARATION_TYPES = generated$1.CONDITIONAL_TYPES = generated$1.COMPLETIONSTATEMENT_TYPES = generated$1.CLASS_TYPES = generated$1.BLOCK_TYPES = generated$1.BLOCKPARENT_TYPES = generated$1.BINARY_TYPES = generated$1.ACCESSOR_TYPES = void 0;
var _definitions$3 = definitions;
const STANDARDIZED_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Standardized"];
generated$1.STANDARDIZED_TYPES = STANDARDIZED_TYPES;
const EXPRESSION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Expression"];
generated$1.EXPRESSION_TYPES = EXPRESSION_TYPES;
const BINARY_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Binary"];
generated$1.BINARY_TYPES = BINARY_TYPES;
const SCOPABLE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Scopable"];
generated$1.SCOPABLE_TYPES = SCOPABLE_TYPES;
const BLOCKPARENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["BlockParent"];
generated$1.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
const BLOCK_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Block"];
generated$1.BLOCK_TYPES = BLOCK_TYPES;
const STATEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Statement"];
generated$1.STATEMENT_TYPES = STATEMENT_TYPES;
const TERMINATORLESS_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Terminatorless"];
generated$1.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
const COMPLETIONSTATEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["CompletionStatement"];
generated$1.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
const CONDITIONAL_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Conditional"];
generated$1.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
const LOOP_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Loop"];
generated$1.LOOP_TYPES = LOOP_TYPES;
const WHILE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["While"];
generated$1.WHILE_TYPES = WHILE_TYPES;
const EXPRESSIONWRAPPER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
generated$1.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
const FOR_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["For"];
generated$1.FOR_TYPES = FOR_TYPES;
const FORXSTATEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ForXStatement"];
generated$1.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
const FUNCTION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Function"];
generated$1.FUNCTION_TYPES = FUNCTION_TYPES;
const FUNCTIONPARENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FunctionParent"];
generated$1.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
const PUREISH_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Pureish"];
generated$1.PUREISH_TYPES = PUREISH_TYPES;
const DECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Declaration"];
generated$1.DECLARATION_TYPES = DECLARATION_TYPES;
const PATTERNLIKE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["PatternLike"];
generated$1.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
const LVAL_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["LVal"];
generated$1.LVAL_TYPES = LVAL_TYPES;
const TSENTITYNAME_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSEntityName"];
generated$1.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
const LITERAL_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Literal"];
generated$1.LITERAL_TYPES = LITERAL_TYPES;
const IMMUTABLE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Immutable"];
generated$1.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
const USERWHITESPACABLE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
generated$1.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
const METHOD_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Method"];
generated$1.METHOD_TYPES = METHOD_TYPES;
const OBJECTMEMBER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ObjectMember"];
generated$1.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
const PROPERTY_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Property"];
generated$1.PROPERTY_TYPES = PROPERTY_TYPES;
const UNARYLIKE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["UnaryLike"];
generated$1.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
const PATTERN_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Pattern"];
generated$1.PATTERN_TYPES = PATTERN_TYPES;
const CLASS_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Class"];
generated$1.CLASS_TYPES = CLASS_TYPES;
const MODULEDECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
generated$1.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
const EXPORTDECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
generated$1.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
const MODULESPECIFIER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
generated$1.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
const ACCESSOR_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Accessor"];
generated$1.ACCESSOR_TYPES = ACCESSOR_TYPES;
const PRIVATE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Private"];
generated$1.PRIVATE_TYPES = PRIVATE_TYPES;
const FLOW_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Flow"];
generated$1.FLOW_TYPES = FLOW_TYPES;
const FLOWTYPE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowType"];
generated$1.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
const FLOWBASEANNOTATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
generated$1.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
const FLOWDECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
generated$1.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
const FLOWPREDICATE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowPredicate"];
generated$1.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
const ENUMBODY_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["EnumBody"];
generated$1.ENUMBODY_TYPES = ENUMBODY_TYPES;
const ENUMMEMBER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["EnumMember"];
generated$1.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES;
const JSX_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["JSX"];
generated$1.JSX_TYPES = JSX_TYPES;
const MISCELLANEOUS_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Miscellaneous"];
generated$1.MISCELLANEOUS_TYPES = MISCELLANEOUS_TYPES;
const TYPESCRIPT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TypeScript"];
generated$1.TYPESCRIPT_TYPES = TYPESCRIPT_TYPES;
const TSTYPEELEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSTypeElement"];
generated$1.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
const TSTYPE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSType"];
generated$1.TSTYPE_TYPES = TSTYPE_TYPES;
const TSBASETYPE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSBaseType"];
generated$1.TSBASETYPE_TYPES = TSBASETYPE_TYPES;
var ensureBlock$1 = {};
var toBlock$1 = {};
Object.defineProperty(toBlock$1, "__esModule", {
  value: true
});
toBlock$1.default = toBlock;
var _generated$f = generated$4;
var _generated2$3 = generated$3;
function toBlock(node, parent) {
  if ((0, _generated$f.isBlockStatement)(node)) {
    return node;
  }
  let blockNodes = [];
  if ((0, _generated$f.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, _generated$f.isStatement)(node)) {
      if ((0, _generated$f.isFunction)(parent)) {
        node = (0, _generated2$3.returnStatement)(node);
      } else {
        node = (0, _generated2$3.expressionStatement)(node);
      }
    }
    blockNodes = [node];
  }
  return (0, _generated2$3.blockStatement)(blockNodes);
}
Object.defineProperty(ensureBlock$1, "__esModule", {
  value: true
});
ensureBlock$1.default = ensureBlock;
var _toBlock = toBlock$1;
function ensureBlock(node, key = "body") {
  const result = (0, _toBlock.default)(node[key], node);
  node[key] = result;
  return result;
}
var toBindingIdentifierName$1 = {};
var toIdentifier$1 = {};
Object.defineProperty(toIdentifier$1, "__esModule", {
  value: true
});
toIdentifier$1.default = toIdentifier;
var _isValidIdentifier$2 = isValidIdentifier$1;
var _helperValidatorIdentifier = lib$1;
function toIdentifier(input) {
  input = input + "";
  let name = "";
  for (const c of input) {
    name += (0, _helperValidatorIdentifier.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
  }
  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : "";
  });
  if (!(0, _isValidIdentifier$2.default)(name)) {
    name = `_${name}`;
  }
  return name || "_";
}
Object.defineProperty(toBindingIdentifierName$1, "__esModule", {
  value: true
});
toBindingIdentifierName$1.default = toBindingIdentifierName;
var _toIdentifier = toIdentifier$1;
function toBindingIdentifierName(name) {
  name = (0, _toIdentifier.default)(name);
  if (name === "eval" || name === "arguments")
    name = "_" + name;
  return name;
}
var toComputedKey$1 = {};
Object.defineProperty(toComputedKey$1, "__esModule", {
  value: true
});
toComputedKey$1.default = toComputedKey;
var _generated$e = generated$4;
var _generated2$2 = generated$3;
function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && (0, _generated$e.isIdentifier)(key))
    key = (0, _generated2$2.stringLiteral)(key.name);
  return key;
}
var toExpression$1 = {};
Object.defineProperty(toExpression$1, "__esModule", {
  value: true
});
toExpression$1.default = void 0;
var _generated$d = generated$4;
var _default$3 = toExpression;
toExpression$1.default = _default$3;
function toExpression(node) {
  if ((0, _generated$d.isExpressionStatement)(node)) {
    node = node.expression;
  }
  if ((0, _generated$d.isExpression)(node)) {
    return node;
  }
  if ((0, _generated$d.isClass)(node)) {
    node.type = "ClassExpression";
  } else if ((0, _generated$d.isFunction)(node)) {
    node.type = "FunctionExpression";
  }
  if (!(0, _generated$d.isExpression)(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }
  return node;
}
var toKeyAlias$1 = {};
var removePropertiesDeep$1 = {};
var traverseFast$1 = {};
Object.defineProperty(traverseFast$1, "__esModule", {
  value: true
});
traverseFast$1.default = traverseFast;
var _definitions$2 = definitions;
function traverseFast(node, enter, opts) {
  if (!node)
    return;
  const keys = _definitions$2.VISITOR_KEYS[node.type];
  if (!keys)
    return;
  opts = opts || {};
  enter(node, opts);
  for (const key of keys) {
    const subNode = node[key];
    if (Array.isArray(subNode)) {
      for (const node2 of subNode) {
        traverseFast(node2, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}
var removeProperties$1 = {};
Object.defineProperty(removeProperties$1, "__esModule", {
  value: true
});
removeProperties$1.default = removeProperties;
var _constants$3 = constants;
const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
const CLEAR_KEYS_PLUS_COMMENTS = [..._constants$3.COMMENT_KEYS, "comments", ...CLEAR_KEYS];
function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
  for (const key of map) {
    if (node[key] != null)
      node[key] = void 0;
  }
  for (const key of Object.keys(node)) {
    if (key[0] === "_" && node[key] != null)
      node[key] = void 0;
  }
  const symbols = Object.getOwnPropertySymbols(node);
  for (const sym of symbols) {
    node[sym] = null;
  }
}
Object.defineProperty(removePropertiesDeep$1, "__esModule", {
  value: true
});
removePropertiesDeep$1.default = removePropertiesDeep;
var _traverseFast = traverseFast$1;
var _removeProperties = removeProperties$1;
function removePropertiesDeep(tree, opts) {
  (0, _traverseFast.default)(tree, _removeProperties.default, opts);
  return tree;
}
Object.defineProperty(toKeyAlias$1, "__esModule", {
  value: true
});
toKeyAlias$1.default = toKeyAlias;
var _generated$c = generated$4;
var _cloneNode$1 = cloneNode$1;
var _removePropertiesDeep = removePropertiesDeep$1;
function toKeyAlias(node, key = node.key) {
  let alias;
  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, _generated$c.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, _generated$c.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode$1.default)(key)));
  }
  if (node.computed) {
    alias = `[${alias}]`;
  }
  if (node.static) {
    alias = `static:${alias}`;
  }
  return alias;
}
toKeyAlias.uid = 0;
toKeyAlias.increment = function() {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};
var toSequenceExpression$1 = {};
var gatherSequenceExpressions$1 = {};
var getBindingIdentifiers$1 = {};
Object.defineProperty(getBindingIdentifiers$1, "__esModule", {
  value: true
});
getBindingIdentifiers$1.default = getBindingIdentifiers;
var _generated$b = generated$4;
function getBindingIdentifiers(node, duplicates, outerOnly) {
  const search = [].concat(node);
  const ids = /* @__PURE__ */ Object.create(null);
  while (search.length) {
    const id = search.shift();
    if (!id)
      continue;
    const keys = getBindingIdentifiers.keys[id.type];
    if ((0, _generated$b.isIdentifier)(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];
        _ids.push(id);
      } else {
        ids[id.name] = id;
      }
      continue;
    }
    if ((0, _generated$b.isExportDeclaration)(id) && !(0, _generated$b.isExportAllDeclaration)(id)) {
      if ((0, _generated$b.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }
      continue;
    }
    if (outerOnly) {
      if ((0, _generated$b.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }
      if ((0, _generated$b.isFunctionExpression)(id)) {
        continue;
      }
    }
    if (keys) {
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        const nodes = id[key];
        if (nodes) {
          Array.isArray(nodes) ? search.push(...nodes) : search.push(nodes);
        }
      }
    }
  }
  return ids;
}
getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ClassPrivateMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};
Object.defineProperty(gatherSequenceExpressions$1, "__esModule", {
  value: true
});
gatherSequenceExpressions$1.default = gatherSequenceExpressions;
var _getBindingIdentifiers$2 = getBindingIdentifiers$1;
var _generated$a = generated$4;
var _generated2$1 = generated$3;
var _cloneNode = cloneNode$1;
function gatherSequenceExpressions(nodes, scope, declars) {
  const exprs = [];
  let ensureLastUndefined = true;
  for (const node of nodes) {
    if (!(0, _generated$a.isEmptyStatement)(node)) {
      ensureLastUndefined = false;
    }
    if ((0, _generated$a.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, _generated$a.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, _generated$a.isVariableDeclaration)(node)) {
      if (node.kind !== "var")
        return;
      for (const declar of node.declarations) {
        const bindings = (0, _getBindingIdentifiers$2.default)(declar);
        for (const key of Object.keys(bindings)) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }
        if (declar.init) {
          exprs.push((0, _generated2$1.assignmentExpression)("=", declar.id, declar.init));
        }
      }
      ensureLastUndefined = true;
    } else if ((0, _generated$a.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate)
        return;
      exprs.push((0, _generated2$1.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, _generated$a.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body)
        return;
      exprs.push(body);
    } else if ((0, _generated$a.isEmptyStatement)(node)) {
      if (nodes.indexOf(node) === 0) {
        ensureLastUndefined = true;
      }
    } else {
      return;
    }
  }
  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }
  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, _generated2$1.sequenceExpression)(exprs);
  }
}
Object.defineProperty(toSequenceExpression$1, "__esModule", {
  value: true
});
toSequenceExpression$1.default = toSequenceExpression;
var _gatherSequenceExpressions = gatherSequenceExpressions$1;
function toSequenceExpression(nodes, scope) {
  if (!(nodes != null && nodes.length))
    return;
  const declars = [];
  const result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
  if (!result)
    return;
  for (const declar of declars) {
    scope.push(declar);
  }
  return result;
}
var toStatement$1 = {};
Object.defineProperty(toStatement$1, "__esModule", {
  value: true
});
toStatement$1.default = void 0;
var _generated$9 = generated$4;
var _generated2 = generated$3;
var _default$2 = toStatement;
toStatement$1.default = _default$2;
function toStatement(node, ignore) {
  if ((0, _generated$9.isStatement)(node)) {
    return node;
  }
  let mustHaveId = false;
  let newType;
  if ((0, _generated$9.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, _generated$9.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, _generated$9.isAssignmentExpression)(node)) {
    return (0, _generated2.expressionStatement)(node);
  }
  if (mustHaveId && !node.id) {
    newType = false;
  }
  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }
  node.type = newType;
  return node;
}
var valueToNode$1 = {};
Object.defineProperty(valueToNode$1, "__esModule", {
  value: true
});
valueToNode$1.default = void 0;
var _isValidIdentifier$1 = isValidIdentifier$1;
var _generated$8 = generated$3;
var _default$1 = valueToNode;
valueToNode$1.default = _default$1;
const objectToString = Function.call.bind(Object.prototype.toString);
function isRegExp(value) {
  return objectToString(value) === "[object RegExp]";
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || Object.getPrototypeOf(proto) === null;
}
function valueToNode(value) {
  if (value === void 0) {
    return (0, _generated$8.identifier)("undefined");
  }
  if (value === true || value === false) {
    return (0, _generated$8.booleanLiteral)(value);
  }
  if (value === null) {
    return (0, _generated$8.nullLiteral)();
  }
  if (typeof value === "string") {
    return (0, _generated$8.stringLiteral)(value);
  }
  if (typeof value === "number") {
    let result;
    if (Number.isFinite(value)) {
      result = (0, _generated$8.numericLiteral)(Math.abs(value));
    } else {
      let numerator;
      if (Number.isNaN(value)) {
        numerator = (0, _generated$8.numericLiteral)(0);
      } else {
        numerator = (0, _generated$8.numericLiteral)(1);
      }
      result = (0, _generated$8.binaryExpression)("/", numerator, (0, _generated$8.numericLiteral)(0));
    }
    if (value < 0 || Object.is(value, -0)) {
      result = (0, _generated$8.unaryExpression)("-", result);
    }
    return result;
  }
  if (isRegExp(value)) {
    const pattern = value.source;
    const flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return (0, _generated$8.regExpLiteral)(pattern, flags);
  }
  if (Array.isArray(value)) {
    return (0, _generated$8.arrayExpression)(value.map(valueToNode));
  }
  if (isPlainObject(value)) {
    const props = [];
    for (const key of Object.keys(value)) {
      let nodeKey;
      if ((0, _isValidIdentifier$1.default)(key)) {
        nodeKey = (0, _generated$8.identifier)(key);
      } else {
        nodeKey = (0, _generated$8.stringLiteral)(key);
      }
      props.push((0, _generated$8.objectProperty)(nodeKey, valueToNode(value[key])));
    }
    return (0, _generated$8.objectExpression)(props);
  }
  throw new Error("don't know how to turn this value into a node");
}
var appendToMemberExpression$1 = {};
Object.defineProperty(appendToMemberExpression$1, "__esModule", {
  value: true
});
appendToMemberExpression$1.default = appendToMemberExpression;
var _generated$7 = generated$3;
function appendToMemberExpression(member, append, computed2 = false) {
  member.object = (0, _generated$7.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed2;
  return member;
}
var inherits$1 = {};
Object.defineProperty(inherits$1, "__esModule", {
  value: true
});
inherits$1.default = inherits;
var _constants$2 = constants;
var _inheritsComments = inheritsComments$1;
function inherits(child, parent) {
  if (!child || !parent)
    return child;
  for (const key of _constants$2.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }
  for (const key of Object.keys(parent)) {
    if (key[0] === "_" && key !== "__clone") {
      child[key] = parent[key];
    }
  }
  for (const key of _constants$2.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }
  (0, _inheritsComments.default)(child, parent);
  return child;
}
var prependToMemberExpression$1 = {};
Object.defineProperty(prependToMemberExpression$1, "__esModule", {
  value: true
});
prependToMemberExpression$1.default = prependToMemberExpression;
var _generated$6 = generated$3;
var _ = lib$2;
function prependToMemberExpression(member, prepend) {
  if ((0, _.isSuper)(member.object)) {
    throw new Error("Cannot prepend node to super property access (`super.foo`).");
  }
  member.object = (0, _generated$6.memberExpression)(prepend, member.object);
  return member;
}
var getOuterBindingIdentifiers$1 = {};
Object.defineProperty(getOuterBindingIdentifiers$1, "__esModule", {
  value: true
});
getOuterBindingIdentifiers$1.default = void 0;
var _getBindingIdentifiers$1 = getBindingIdentifiers$1;
var _default = getOuterBindingIdentifiers;
getOuterBindingIdentifiers$1.default = _default;
function getOuterBindingIdentifiers(node, duplicates) {
  return (0, _getBindingIdentifiers$1.default)(node, duplicates, true);
}
var traverse$1 = {};
Object.defineProperty(traverse$1, "__esModule", {
  value: true
});
traverse$1.default = traverse;
var _definitions$1 = definitions;
function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }
  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}
function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = _definitions$1.VISITOR_KEYS[node.type];
  if (!keys)
    return;
  if (enter)
    enter(node, ancestors, state);
  for (const key of keys) {
    const subNode = node[key];
    if (Array.isArray(subNode)) {
      for (let i2 = 0; i2 < subNode.length; i2++) {
        const child = subNode[i2];
        if (!child)
          continue;
        ancestors.push({
          node,
          key,
          index: i2
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }
  if (exit)
    exit(node, ancestors, state);
}
var isBinding$1 = {};
Object.defineProperty(isBinding$1, "__esModule", {
  value: true
});
isBinding$1.default = isBinding;
var _getBindingIdentifiers = getBindingIdentifiers$1;
function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }
  const keys = _getBindingIdentifiers.default.keys[parent.type];
  if (keys) {
    for (let i2 = 0; i2 < keys.length; i2++) {
      const key = keys[i2];
      const val = parent[key];
      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0)
          return true;
      } else {
        if (val === node)
          return true;
      }
    }
  }
  return false;
}
var isBlockScoped$1 = {};
var isLet$1 = {};
Object.defineProperty(isLet$1, "__esModule", {
  value: true
});
isLet$1.default = isLet;
var _generated$5 = generated$4;
var _constants$1 = constants;
function isLet(node) {
  return (0, _generated$5.isVariableDeclaration)(node) && (node.kind !== "var" || node[_constants$1.BLOCK_SCOPED_SYMBOL]);
}
Object.defineProperty(isBlockScoped$1, "__esModule", {
  value: true
});
isBlockScoped$1.default = isBlockScoped;
var _generated$4 = generated$4;
var _isLet = isLet$1;
function isBlockScoped(node) {
  return (0, _generated$4.isFunctionDeclaration)(node) || (0, _generated$4.isClassDeclaration)(node) || (0, _isLet.default)(node);
}
var isImmutable$1 = {};
Object.defineProperty(isImmutable$1, "__esModule", {
  value: true
});
isImmutable$1.default = isImmutable;
var _isType = isType$1;
var _generated$3 = generated$4;
function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable"))
    return true;
  if ((0, _generated$3.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
var isNodesEquivalent$1 = {};
Object.defineProperty(isNodesEquivalent$1, "__esModule", {
  value: true
});
isNodesEquivalent$1.default = isNodesEquivalent;
var _definitions = definitions;
function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }
  if (a.type !== b.type) {
    return false;
  }
  const fields = Object.keys(_definitions.NODE_FIELDS[a.type] || a.type);
  const visitorKeys = _definitions.VISITOR_KEYS[a.type];
  for (const field of fields) {
    const val_a = a[field];
    const val_b = b[field];
    if (typeof val_a !== typeof val_b) {
      return false;
    }
    if (val_a == null && val_b == null) {
      continue;
    } else if (val_a == null || val_b == null) {
      return false;
    }
    if (Array.isArray(val_a)) {
      if (!Array.isArray(val_b)) {
        return false;
      }
      if (val_a.length !== val_b.length) {
        return false;
      }
      for (let i2 = 0; i2 < val_a.length; i2++) {
        if (!isNodesEquivalent(val_a[i2], val_b[i2])) {
          return false;
        }
      }
      continue;
    }
    if (typeof val_a === "object" && !(visitorKeys != null && visitorKeys.includes(field))) {
      for (const key of Object.keys(val_a)) {
        if (val_a[key] !== val_b[key]) {
          return false;
        }
      }
      continue;
    }
    if (!isNodesEquivalent(val_a, val_b)) {
      return false;
    }
  }
  return true;
}
var isReferenced$1 = {};
Object.defineProperty(isReferenced$1, "__esModule", {
  value: true
});
isReferenced$1.default = isReferenced;
function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }
      return parent.object === node;
    case "JSXMemberExpression":
      return parent.object === node;
    case "VariableDeclarator":
      return parent.init === node;
    case "ArrowFunctionExpression":
      return parent.body === node;
    case "PrivateName":
      return false;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return false;
    case "ObjectProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return !grandparent || grandparent.type !== "ObjectPattern";
    case "ClassProperty":
    case "ClassAccessorProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
    case "ClassPrivateProperty":
      return parent.key !== node;
    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;
    case "AssignmentExpression":
      return parent.right === node;
    case "AssignmentPattern":
      return parent.right === node;
    case "LabeledStatement":
      return false;
    case "CatchClause":
      return false;
    case "RestElement":
      return false;
    case "BreakStatement":
    case "ContinueStatement":
      return false;
    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;
    case "ExportSpecifier":
      if (grandparent != null && grandparent.source) {
        return false;
      }
      return parent.local === node;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;
    case "ImportAttribute":
      return false;
    case "JSXAttribute":
      return false;
    case "ObjectPattern":
    case "ArrayPattern":
      return false;
    case "MetaProperty":
      return false;
    case "ObjectTypeProperty":
      return parent.key !== node;
    case "TSEnumMember":
      return parent.id !== node;
    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
  }
  return true;
}
var isScope$1 = {};
Object.defineProperty(isScope$1, "__esModule", {
  value: true
});
isScope$1.default = isScope;
var _generated$2 = generated$4;
function isScope(node, parent) {
  if ((0, _generated$2.isBlockStatement)(node) && ((0, _generated$2.isFunction)(parent) || (0, _generated$2.isCatchClause)(parent))) {
    return false;
  }
  if ((0, _generated$2.isPattern)(node) && ((0, _generated$2.isFunction)(parent) || (0, _generated$2.isCatchClause)(parent))) {
    return true;
  }
  return (0, _generated$2.isScopable)(node);
}
var isSpecifierDefault$1 = {};
Object.defineProperty(isSpecifierDefault$1, "__esModule", {
  value: true
});
isSpecifierDefault$1.default = isSpecifierDefault;
var _generated$1 = generated$4;
function isSpecifierDefault(specifier) {
  return (0, _generated$1.isImportDefaultSpecifier)(specifier) || (0, _generated$1.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}
var isValidES3Identifier$1 = {};
Object.defineProperty(isValidES3Identifier$1, "__esModule", {
  value: true
});
isValidES3Identifier$1.default = isValidES3Identifier;
var _isValidIdentifier = isValidIdentifier$1;
const RESERVED_WORDS_ES3_ONLY = /* @__PURE__ */ new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}
var isVar$1 = {};
Object.defineProperty(isVar$1, "__esModule", {
  value: true
});
isVar$1.default = isVar;
var _generated = generated$4;
var _constants = constants;
function isVar(node) {
  return (0, _generated.isVariableDeclaration)(node, {
    kind: "var"
  }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
}
var generated = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var require$$65 = /* @__PURE__ */ getAugmentedNamespace(generated);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    react: true,
    assertNode: true,
    createTypeAnnotationBasedOnTypeof: true,
    createUnionTypeAnnotation: true,
    createFlowUnionType: true,
    createTSUnionType: true,
    cloneNode: true,
    clone: true,
    cloneDeep: true,
    cloneDeepWithoutLoc: true,
    cloneWithoutLoc: true,
    addComment: true,
    addComments: true,
    inheritInnerComments: true,
    inheritLeadingComments: true,
    inheritsComments: true,
    inheritTrailingComments: true,
    removeComments: true,
    ensureBlock: true,
    toBindingIdentifierName: true,
    toBlock: true,
    toComputedKey: true,
    toExpression: true,
    toIdentifier: true,
    toKeyAlias: true,
    toSequenceExpression: true,
    toStatement: true,
    valueToNode: true,
    appendToMemberExpression: true,
    inherits: true,
    prependToMemberExpression: true,
    removeProperties: true,
    removePropertiesDeep: true,
    removeTypeDuplicates: true,
    getBindingIdentifiers: true,
    getOuterBindingIdentifiers: true,
    traverse: true,
    traverseFast: true,
    shallowEqual: true,
    is: true,
    isBinding: true,
    isBlockScoped: true,
    isImmutable: true,
    isLet: true,
    isNode: true,
    isNodesEquivalent: true,
    isPlaceholderType: true,
    isReferenced: true,
    isScope: true,
    isSpecifierDefault: true,
    isType: true,
    isValidES3Identifier: true,
    isValidIdentifier: true,
    isVar: true,
    matchesPattern: true,
    validate: true,
    buildMatchMemberExpression: true
  };
  Object.defineProperty(exports, "addComment", {
    enumerable: true,
    get: function() {
      return _addComment.default;
    }
  });
  Object.defineProperty(exports, "addComments", {
    enumerable: true,
    get: function() {
      return _addComments2.default;
    }
  });
  Object.defineProperty(exports, "appendToMemberExpression", {
    enumerable: true,
    get: function() {
      return _appendToMemberExpression.default;
    }
  });
  Object.defineProperty(exports, "assertNode", {
    enumerable: true,
    get: function() {
      return _assertNode.default;
    }
  });
  Object.defineProperty(exports, "buildMatchMemberExpression", {
    enumerable: true,
    get: function() {
      return _buildMatchMemberExpression2.default;
    }
  });
  Object.defineProperty(exports, "clone", {
    enumerable: true,
    get: function() {
      return _clone.default;
    }
  });
  Object.defineProperty(exports, "cloneDeep", {
    enumerable: true,
    get: function() {
      return _cloneDeep.default;
    }
  });
  Object.defineProperty(exports, "cloneDeepWithoutLoc", {
    enumerable: true,
    get: function() {
      return _cloneDeepWithoutLoc.default;
    }
  });
  Object.defineProperty(exports, "cloneNode", {
    enumerable: true,
    get: function() {
      return _cloneNode2.default;
    }
  });
  Object.defineProperty(exports, "cloneWithoutLoc", {
    enumerable: true,
    get: function() {
      return _cloneWithoutLoc.default;
    }
  });
  Object.defineProperty(exports, "createFlowUnionType", {
    enumerable: true,
    get: function() {
      return _createFlowUnionType.default;
    }
  });
  Object.defineProperty(exports, "createTSUnionType", {
    enumerable: true,
    get: function() {
      return _createTSUnionType.default;
    }
  });
  Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
    enumerable: true,
    get: function() {
      return _createTypeAnnotationBasedOnTypeof.default;
    }
  });
  Object.defineProperty(exports, "createUnionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return _createFlowUnionType.default;
    }
  });
  Object.defineProperty(exports, "ensureBlock", {
    enumerable: true,
    get: function() {
      return _ensureBlock.default;
    }
  });
  Object.defineProperty(exports, "getBindingIdentifiers", {
    enumerable: true,
    get: function() {
      return _getBindingIdentifiers2.default;
    }
  });
  Object.defineProperty(exports, "getOuterBindingIdentifiers", {
    enumerable: true,
    get: function() {
      return _getOuterBindingIdentifiers.default;
    }
  });
  Object.defineProperty(exports, "inheritInnerComments", {
    enumerable: true,
    get: function() {
      return _inheritInnerComments2.default;
    }
  });
  Object.defineProperty(exports, "inheritLeadingComments", {
    enumerable: true,
    get: function() {
      return _inheritLeadingComments2.default;
    }
  });
  Object.defineProperty(exports, "inheritTrailingComments", {
    enumerable: true,
    get: function() {
      return _inheritTrailingComments2.default;
    }
  });
  Object.defineProperty(exports, "inherits", {
    enumerable: true,
    get: function() {
      return _inherits.default;
    }
  });
  Object.defineProperty(exports, "inheritsComments", {
    enumerable: true,
    get: function() {
      return _inheritsComments2.default;
    }
  });
  Object.defineProperty(exports, "is", {
    enumerable: true,
    get: function() {
      return _is2.default;
    }
  });
  Object.defineProperty(exports, "isBinding", {
    enumerable: true,
    get: function() {
      return _isBinding.default;
    }
  });
  Object.defineProperty(exports, "isBlockScoped", {
    enumerable: true,
    get: function() {
      return _isBlockScoped.default;
    }
  });
  Object.defineProperty(exports, "isImmutable", {
    enumerable: true,
    get: function() {
      return _isImmutable.default;
    }
  });
  Object.defineProperty(exports, "isLet", {
    enumerable: true,
    get: function() {
      return _isLet2.default;
    }
  });
  Object.defineProperty(exports, "isNode", {
    enumerable: true,
    get: function() {
      return _isNode2.default;
    }
  });
  Object.defineProperty(exports, "isNodesEquivalent", {
    enumerable: true,
    get: function() {
      return _isNodesEquivalent.default;
    }
  });
  Object.defineProperty(exports, "isPlaceholderType", {
    enumerable: true,
    get: function() {
      return _isPlaceholderType2.default;
    }
  });
  Object.defineProperty(exports, "isReferenced", {
    enumerable: true,
    get: function() {
      return _isReferenced.default;
    }
  });
  Object.defineProperty(exports, "isScope", {
    enumerable: true,
    get: function() {
      return _isScope.default;
    }
  });
  Object.defineProperty(exports, "isSpecifierDefault", {
    enumerable: true,
    get: function() {
      return _isSpecifierDefault.default;
    }
  });
  Object.defineProperty(exports, "isType", {
    enumerable: true,
    get: function() {
      return _isType2.default;
    }
  });
  Object.defineProperty(exports, "isValidES3Identifier", {
    enumerable: true,
    get: function() {
      return _isValidES3Identifier.default;
    }
  });
  Object.defineProperty(exports, "isValidIdentifier", {
    enumerable: true,
    get: function() {
      return _isValidIdentifier2.default;
    }
  });
  Object.defineProperty(exports, "isVar", {
    enumerable: true,
    get: function() {
      return _isVar.default;
    }
  });
  Object.defineProperty(exports, "matchesPattern", {
    enumerable: true,
    get: function() {
      return _matchesPattern2.default;
    }
  });
  Object.defineProperty(exports, "prependToMemberExpression", {
    enumerable: true,
    get: function() {
      return _prependToMemberExpression.default;
    }
  });
  exports.react = void 0;
  Object.defineProperty(exports, "removeComments", {
    enumerable: true,
    get: function() {
      return _removeComments.default;
    }
  });
  Object.defineProperty(exports, "removeProperties", {
    enumerable: true,
    get: function() {
      return _removeProperties2.default;
    }
  });
  Object.defineProperty(exports, "removePropertiesDeep", {
    enumerable: true,
    get: function() {
      return _removePropertiesDeep2.default;
    }
  });
  Object.defineProperty(exports, "removeTypeDuplicates", {
    enumerable: true,
    get: function() {
      return _removeTypeDuplicates2.default;
    }
  });
  Object.defineProperty(exports, "shallowEqual", {
    enumerable: true,
    get: function() {
      return _shallowEqual2.default;
    }
  });
  Object.defineProperty(exports, "toBindingIdentifierName", {
    enumerable: true,
    get: function() {
      return _toBindingIdentifierName.default;
    }
  });
  Object.defineProperty(exports, "toBlock", {
    enumerable: true,
    get: function() {
      return _toBlock2.default;
    }
  });
  Object.defineProperty(exports, "toComputedKey", {
    enumerable: true,
    get: function() {
      return _toComputedKey.default;
    }
  });
  Object.defineProperty(exports, "toExpression", {
    enumerable: true,
    get: function() {
      return _toExpression.default;
    }
  });
  Object.defineProperty(exports, "toIdentifier", {
    enumerable: true,
    get: function() {
      return _toIdentifier2.default;
    }
  });
  Object.defineProperty(exports, "toKeyAlias", {
    enumerable: true,
    get: function() {
      return _toKeyAlias.default;
    }
  });
  Object.defineProperty(exports, "toSequenceExpression", {
    enumerable: true,
    get: function() {
      return _toSequenceExpression.default;
    }
  });
  Object.defineProperty(exports, "toStatement", {
    enumerable: true,
    get: function() {
      return _toStatement.default;
    }
  });
  Object.defineProperty(exports, "traverse", {
    enumerable: true,
    get: function() {
      return _traverse.default;
    }
  });
  Object.defineProperty(exports, "traverseFast", {
    enumerable: true,
    get: function() {
      return _traverseFast2.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function() {
      return _validate2.default;
    }
  });
  Object.defineProperty(exports, "valueToNode", {
    enumerable: true,
    get: function() {
      return _valueToNode.default;
    }
  });
  var _isReactComponent = isReactComponent$1;
  var _isCompatTag = isCompatTag$1;
  var _buildChildren = buildChildren$1;
  var _assertNode = assertNode$1;
  var _generated3 = generated$2;
  Object.keys(_generated3).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated3[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated3[key];
      }
    });
  });
  var _createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof$1;
  var _createFlowUnionType = createFlowUnionType$1;
  var _createTSUnionType = createTSUnionType$1;
  var _generated22 = generated$3;
  Object.keys(_generated22).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated22[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated22[key];
      }
    });
  });
  var _uppercase = uppercase;
  Object.keys(_uppercase).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _uppercase[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _uppercase[key];
      }
    });
  });
  var _cloneNode2 = cloneNode$1;
  var _clone = clone$1;
  var _cloneDeep = cloneDeep$1;
  var _cloneDeepWithoutLoc = cloneDeepWithoutLoc$1;
  var _cloneWithoutLoc = cloneWithoutLoc$1;
  var _addComment = addComment$1;
  var _addComments2 = addComments$1;
  var _inheritInnerComments2 = inheritInnerComments$1;
  var _inheritLeadingComments2 = inheritLeadingComments$1;
  var _inheritsComments2 = inheritsComments$1;
  var _inheritTrailingComments2 = inheritTrailingComments$1;
  var _removeComments = removeComments$1;
  var _generated32 = generated$1;
  Object.keys(_generated32).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated32[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated32[key];
      }
    });
  });
  var _constants2 = constants;
  Object.keys(_constants2).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _constants2[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _constants2[key];
      }
    });
  });
  var _ensureBlock = ensureBlock$1;
  var _toBindingIdentifierName = toBindingIdentifierName$1;
  var _toBlock2 = toBlock$1;
  var _toComputedKey = toComputedKey$1;
  var _toExpression = toExpression$1;
  var _toIdentifier2 = toIdentifier$1;
  var _toKeyAlias = toKeyAlias$1;
  var _toSequenceExpression = toSequenceExpression$1;
  var _toStatement = toStatement$1;
  var _valueToNode = valueToNode$1;
  var _definitions2 = definitions;
  Object.keys(_definitions2).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _definitions2[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _definitions2[key];
      }
    });
  });
  var _appendToMemberExpression = appendToMemberExpression$1;
  var _inherits = inherits$1;
  var _prependToMemberExpression = prependToMemberExpression$1;
  var _removeProperties2 = removeProperties$1;
  var _removePropertiesDeep2 = removePropertiesDeep$1;
  var _removeTypeDuplicates2 = removeTypeDuplicates$3;
  var _getBindingIdentifiers2 = getBindingIdentifiers$1;
  var _getOuterBindingIdentifiers = getOuterBindingIdentifiers$1;
  var _traverse = traverse$1;
  Object.keys(_traverse).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _traverse[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _traverse[key];
      }
    });
  });
  var _traverseFast2 = traverseFast$1;
  var _shallowEqual2 = shallowEqual$1;
  var _is2 = is$1;
  var _isBinding = isBinding$1;
  var _isBlockScoped = isBlockScoped$1;
  var _isImmutable = isImmutable$1;
  var _isLet2 = isLet$1;
  var _isNode2 = isNode$1;
  var _isNodesEquivalent = isNodesEquivalent$1;
  var _isPlaceholderType2 = isPlaceholderType$1;
  var _isReferenced = isReferenced$1;
  var _isScope = isScope$1;
  var _isSpecifierDefault = isSpecifierDefault$1;
  var _isType2 = isType$1;
  var _isValidES3Identifier = isValidES3Identifier$1;
  var _isValidIdentifier2 = isValidIdentifier$1;
  var _isVar = isVar$1;
  var _matchesPattern2 = matchesPattern$1;
  var _validate2 = validate$2;
  var _buildMatchMemberExpression2 = buildMatchMemberExpression$1;
  var _generated4 = generated$4;
  Object.keys(_generated4).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated4[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated4[key];
      }
    });
  });
  var _generated5 = require$$65;
  Object.keys(_generated5).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === _generated5[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return _generated5[key];
      }
    });
  });
  const react = {
    isReactComponent: _isReactComponent.default,
    isCompatTag: _isCompatTag.default,
    buildChildren: _buildChildren.default
  };
  exports.react = react;
})(lib$2);
var index_vue_vue_type_style_index_0_lang$7 = "";
const _hoisted_1$6 = {
  key: 0,
  class: "am-list-status__loading"
};
const _hoisted_2$4 = {
  key: 1,
  class: "am-list-status__empty"
};
const _hoisted_3$2 = {
  key: 2,
  class: "am-list-status__error"
};
const _hoisted_4$1 = {
  key: 3,
  class: "am-list-status__end"
};
const _hoisted_5 = {
  key: 4,
  class: "am-list-status__error"
};
const _sfc_main$8 = {
  props: {
    options: {
      type: Object,
      default: () => {
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isEnd: {
      type: Boolean,
      default: false
    },
    isEmpty: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    isBlank: {
      type: Boolean,
      default: false
    },
    endText: {
      type: String,
      default: "\u5230\u5E95\u4E86"
    },
    loadingText: {
      type: String,
      default: "\u52A0\u8F7D\u4E2D"
    },
    emptyText: {
      type: String,
      default: "\u6682\u65E0\u6570\u636E"
    },
    errorText: {
      type: String,
      default: "\u52A0\u8F7D\u9519\u8BEF"
    },
    blankText: {
      type: String,
      default: "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A"
    }
  },
  emits: ["intersect", "retry"],
  setup(__props, { emit }) {
    const props = __props;
    const observerEl = ref(null);
    let observer = null;
    const init = () => {
      observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          emit("intersect");
        }
      }, props.options);
      observer.observe(observerEl.value);
    };
    const clickRetry = () => {
      emit("retry");
    };
    const clickBlank = () => {
      emit("intersect");
    };
    onMounted(() => {
      init();
    });
    onUnmounted(() => {
      observer.disconnect();
    });
    return (_ctx, _cache) => {
      const _component_AmIcon = resolveComponent("AmIcon");
      return openBlock(), createElementBlock("div", {
        class: "am-list-status",
        ref_key: "observerEl",
        ref: observerEl
      }, [
        __props.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
          createVNode(_component_AmIcon, {
            name: "loading1",
            size: "18px",
            color: "#aaa"
          }),
          createElementVNode("span", null, toDisplayString(__props.loadingText), 1)
        ])) : __props.isEmpty ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createVNode(_component_AmIcon, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          createElementVNode("span", null, toDisplayString(__props.emptyText), 1)
        ])) : __props.isError ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createVNode(_component_AmIcon, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          createElementVNode("span", null, toDisplayString(__props.errorText), 1),
          createElementVNode("a", { onClick: clickRetry }, "\u91CD\u8BD5")
        ])) : __props.isEnd && __props.endText ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createVNode(_component_AmIcon, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          createElementVNode("span", null, toDisplayString(__props.endText), 1)
        ])) : __props.isBlank ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createElementVNode("a", {
            style: { "margin": "0" },
            onClick: clickBlank
          }, toDisplayString(__props.blankText), 1)
        ])) : createCommentVNode("", true)
      ], 512);
    };
  }
};
var macy = { exports: {} };
(function(module, exports) {
  !function(t2, n2) {
    module.exports = n2();
  }(commonjsGlobal, function() {
    function t2(t3, n3) {
      var e3 = void 0;
      return function() {
        e3 && clearTimeout(e3), e3 = setTimeout(t3, n3);
      };
    }
    function n2(t3, n3) {
      for (var e3 = t3.length, r3 = e3, o3 = []; e3--; )
        o3.push(n3(t3[r3 - e3 - 1]));
      return o3;
    }
    function e2(t3, n3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (window.Promise)
        return A(t3, n3, e3);
      t3.recalculate(true, true);
    }
    function r2(t3) {
      for (var n3 = t3.options, e3 = t3.responsiveOptions, r3 = t3.keys, o3 = t3.docWidth, i3 = void 0, s2 = 0; s2 < r3.length; s2++) {
        var a2 = parseInt(r3[s2], 10);
        o3 >= a2 && (i3 = n3.breakAt[a2], O(i3, e3));
      }
      return e3;
    }
    function o2(t3) {
      for (var n3 = t3.options, e3 = t3.responsiveOptions, r3 = t3.keys, o3 = t3.docWidth, i3 = void 0, s2 = r3.length - 1; s2 >= 0; s2--) {
        var a2 = parseInt(r3[s2], 10);
        o3 <= a2 && (i3 = n3.breakAt[a2], O(i3, e3));
      }
      return e3;
    }
    function i2(t3) {
      var n3 = t3.useContainerForBreakpoints ? t3.container.clientWidth : window.innerWidth, e3 = { columns: t3.columns };
      b(t3.margin) ? e3.margin = { x: t3.margin.x, y: t3.margin.y } : e3.margin = { x: t3.margin, y: t3.margin };
      var i3 = Object.keys(t3.breakAt);
      return t3.mobileFirst ? r2({ options: t3, responsiveOptions: e3, keys: i3, docWidth: n3 }) : o2({ options: t3, responsiveOptions: e3, keys: i3, docWidth: n3 });
    }
    function s(t3) {
      return i2(t3).columns;
    }
    function a(t3) {
      return i2(t3).margin;
    }
    function c(t3) {
      var n3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], e3 = s(t3), r3 = a(t3).x, o3 = 100 / e3;
      if (!n3)
        return o3;
      if (1 === e3)
        return "100%";
      var i3 = "px";
      if ("string" == typeof r3) {
        var c2 = parseFloat(r3);
        i3 = r3.replace(c2, ""), r3 = c2;
      }
      return r3 = (e3 - 1) * r3 / e3, "%" === i3 ? o3 - r3 + "%" : "calc(" + o3 + "% - " + r3 + i3 + ")";
    }
    function u(t3, n3) {
      var e3 = s(t3.options), r3 = 0, o3 = void 0, i3 = void 0;
      if (1 === ++n3)
        return 0;
      i3 = a(t3.options).x;
      var u2 = "px";
      if ("string" == typeof i3) {
        var l3 = parseFloat(i3, 10);
        u2 = i3.replace(l3, ""), i3 = l3;
      }
      return o3 = (i3 - (e3 - 1) * i3 / e3) * (n3 - 1), r3 += c(t3.options, false) * (n3 - 1), "%" === u2 ? r3 + o3 + "%" : "calc(" + r3 + "% + " + o3 + u2 + ")";
    }
    function l2(t3) {
      var n3 = 0, e3 = t3.container, r3 = t3.rows;
      v(r3, function(t4) {
        n3 = t4 > n3 ? t4 : n3;
      }), e3.style.height = n3 + "px";
    }
    function p(t3, n3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r3 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o3 = s(t3.options), i3 = a(t3.options).y;
      M(t3, o3, e3), v(n3, function(n4) {
        var e4 = 0, o4 = parseInt(n4.offsetHeight, 10);
        isNaN(o4) || (t3.rows.forEach(function(n5, r4) {
          n5 < t3.rows[e4] && (e4 = r4);
        }), n4.style.position = "absolute", n4.style.top = t3.rows[e4] + "px", n4.style.left = "" + t3.cols[e4], t3.rows[e4] += isNaN(o4) ? 0 : o4 + i3, r3 && (n4.dataset.macyComplete = 1));
      }), r3 && (t3.tmpRows = null), l2(t3);
    }
    function f(t3, n3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r3 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o3 = s(t3.options), i3 = a(t3.options).y;
      M(t3, o3, e3), v(n3, function(n4) {
        t3.lastcol === o3 && (t3.lastcol = 0);
        var e4 = C(n4, "height");
        e4 = parseInt(n4.offsetHeight, 10), isNaN(e4) || (n4.style.position = "absolute", n4.style.top = t3.rows[t3.lastcol] + "px", n4.style.left = "" + t3.cols[t3.lastcol], t3.rows[t3.lastcol] += isNaN(e4) ? 0 : e4 + i3, t3.lastcol += 1, r3 && (n4.dataset.macyComplete = 1));
      }), r3 && (t3.tmpRows = null), l2(t3);
    }
    var h2 = function t3(n3, e3) {
      if (!(this instanceof t3))
        return new t3(n3, e3);
      if (n3 && n3.nodeName)
        return n3;
      if (n3 = n3.replace(/^\s*/, "").replace(/\s*$/, ""), e3)
        return this.byCss(n3, e3);
      for (var r3 in this.selectors)
        if (e3 = r3.split("/"), new RegExp(e3[1], e3[2]).test(n3))
          return this.selectors[r3](n3);
      return this.byCss(n3);
    };
    h2.prototype.byCss = function(t3, n3) {
      return (n3 || document).querySelectorAll(t3);
    }, h2.prototype.selectors = {}, h2.prototype.selectors[/^\.[\w\-]+$/] = function(t3) {
      return document.getElementsByClassName(t3.substring(1));
    }, h2.prototype.selectors[/^\w+$/] = function(t3) {
      return document.getElementsByTagName(t3);
    }, h2.prototype.selectors[/^\#[\w\-]+$/] = function(t3) {
      return document.getElementById(t3.substring(1));
    };
    var v = function(t3, n3) {
      for (var e3 = t3.length, r3 = e3; e3--; )
        n3(t3[r3 - e3 - 1]);
    }, m = function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      this.running = false, this.events = [], this.add(t3);
    };
    m.prototype.run = function() {
      if (!this.running && this.events.length > 0) {
        var t3 = this.events.shift();
        this.running = true, t3(), this.running = false, this.run();
      }
    }, m.prototype.add = function() {
      var t3 = this, n3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return !!n3 && (Array.isArray(n3) ? v(n3, function(n4) {
        return t3.add(n4);
      }) : (this.events.push(n3), void this.run()));
    }, m.prototype.clear = function() {
      this.events = [];
    };
    var d2 = function(t3) {
      var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return this.instance = t3, this.data = n3, this;
    }, y = function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      this.events = {}, this.instance = t3;
    };
    y.prototype.on = function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return !(!t3 || !n3) && (Array.isArray(this.events[t3]) || (this.events[t3] = []), this.events[t3].push(n3));
    }, y.prototype.emit = function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!t3 || !Array.isArray(this.events[t3]))
        return false;
      var e3 = new d2(this.instance, n3);
      v(this.events[t3], function(t4) {
        return t4(e3);
      });
    };
    var g = function(t3) {
      return !("naturalHeight" in t3 && t3.naturalHeight + t3.naturalWidth === 0) || t3.width + t3.height !== 0;
    }, E = function(t3, n3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return new Promise(function(t4, e4) {
        if (n3.complete)
          return g(n3) ? t4(n3) : e4(n3);
        n3.addEventListener("load", function() {
          return g(n3) ? t4(n3) : e4(n3);
        }), n3.addEventListener("error", function() {
          return e4(n3);
        });
      }).then(function(n4) {
        e3 && t3.emit(t3.constants.EVENT_IMAGE_LOAD, { img: n4 });
      }).catch(function(n4) {
        return t3.emit(t3.constants.EVENT_IMAGE_ERROR, { img: n4 });
      });
    }, w = function(t3, e3) {
      var r3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return n2(e3, function(n3) {
        return E(t3, n3, r3);
      });
    }, A = function(t3, n3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return Promise.all(w(t3, n3, e3)).then(function() {
        t3.emit(t3.constants.EVENT_IMAGE_COMPLETE);
      });
    }, I = function(n3) {
      return t2(function() {
        n3.emit(n3.constants.EVENT_RESIZE), n3.queue.add(function() {
          return n3.recalculate(true, true);
        });
      }, 100);
    }, N = function(t3) {
      if (t3.container = h2(t3.options.container), t3.container instanceof h2 || !t3.container)
        return !!t3.options.debug && console.error("Error: Container not found");
      t3.container.length && (t3.container = t3.container[0]), t3.options.container = t3.container, t3.container.style.position = "relative";
    }, T = function(t3) {
      t3.queue = new m(), t3.events = new y(t3), t3.rows = [], t3.resizer = I(t3);
    }, L = function(t3) {
      var n3 = h2("img", t3.container);
      window.addEventListener("resize", t3.resizer), t3.on(t3.constants.EVENT_IMAGE_LOAD, function() {
        return t3.recalculate(false, false);
      }), t3.on(t3.constants.EVENT_IMAGE_COMPLETE, function() {
        return t3.recalculate(true, true);
      }), t3.options.useOwnImageLoader || e2(t3, n3, !t3.options.waitForImages), t3.emit(t3.constants.EVENT_INITIALIZED);
    }, _2 = function(t3) {
      N(t3), T(t3), L(t3);
    }, b = function(t3) {
      return t3 === Object(t3) && "[object Array]" !== Object.prototype.toString.call(t3);
    }, O = function(t3, n3) {
      b(t3) || (n3.columns = t3), b(t3) && t3.columns && (n3.columns = t3.columns), b(t3) && t3.margin && !b(t3.margin) && (n3.margin = { x: t3.margin, y: t3.margin }), b(t3) && t3.margin && b(t3.margin) && t3.margin.x && (n3.margin.x = t3.margin.x), b(t3) && t3.margin && b(t3.margin) && t3.margin.y && (n3.margin.y = t3.margin.y);
    }, C = function(t3, n3) {
      return window.getComputedStyle(t3, null).getPropertyValue(n3);
    }, M = function(t3, n3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (t3.lastcol || (t3.lastcol = 0), t3.rows.length < 1 && (e3 = true), e3) {
        t3.rows = [], t3.cols = [], t3.lastcol = 0;
        for (var r3 = n3 - 1; r3 >= 0; r3--)
          t3.rows[r3] = 0, t3.cols[r3] = u(t3, r3);
      } else if (t3.tmpRows) {
        t3.rows = [];
        for (var r3 = n3 - 1; r3 >= 0; r3--)
          t3.rows[r3] = t3.tmpRows[r3];
      } else {
        t3.tmpRows = [];
        for (var r3 = n3 - 1; r3 >= 0; r3--)
          t3.tmpRows[r3] = t3.rows[r3];
      }
    }, V = function(t3) {
      var n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r3 = n3 ? t3.container.children : h2(':scope > *:not([data-macy-complete="1"])', t3.container);
      r3 = Array.from(r3).filter(function(t4) {
        return null !== t4.offsetParent;
      });
      var o3 = c(t3.options);
      return v(r3, function(t4) {
        n3 && (t4.dataset.macyComplete = 0), t4.style.width = o3;
      }), t3.options.trueOrder ? (f(t3, r3, n3, e3), t3.emit(t3.constants.EVENT_RECALCULATED)) : (p(t3, r3, n3, e3), t3.emit(t3.constants.EVENT_RECALCULATED));
    }, R = function() {
      return !!window.Promise;
    }, x = Object.assign || function(t3) {
      for (var n3 = 1; n3 < arguments.length; n3++) {
        var e3 = arguments[n3];
        for (var r3 in e3)
          Object.prototype.hasOwnProperty.call(e3, r3) && (t3[r3] = e3[r3]);
      }
      return t3;
    };
    Array.from || (Array.from = function(t3) {
      for (var n3 = 0, e3 = []; n3 < t3.length; )
        e3.push(t3[n3++]);
      return e3;
    });
    var k = { columns: 4, margin: 2, trueOrder: false, waitForImages: false, useImageLoader: true, breakAt: {}, useOwnImageLoader: false, onInit: false, cancelLegacy: false, useContainerForBreakpoints: false };
    !function() {
      try {
        document.createElement("a").querySelector(":scope *");
      } catch (t3) {
        !function() {
          function t4(t5) {
            return function(e4) {
              if (e4 && n3.test(e4)) {
                var r4 = this.getAttribute("id");
                r4 || (this.id = "q" + Math.floor(9e6 * Math.random()) + 1e6), arguments[0] = e4.replace(n3, "#" + this.id);
                var o3 = t5.apply(this, arguments);
                return null === r4 ? this.removeAttribute("id") : r4 || (this.id = r4), o3;
              }
              return t5.apply(this, arguments);
            };
          }
          var n3 = /:scope\b/gi, e3 = t4(Element.prototype.querySelector);
          Element.prototype.querySelector = function(t5) {
            return e3.apply(this, arguments);
          };
          var r3 = t4(Element.prototype.querySelectorAll);
          Element.prototype.querySelectorAll = function(t5) {
            return r3.apply(this, arguments);
          };
        }();
      }
    }();
    var q = function t3() {
      var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
      if (!(this instanceof t3))
        return new t3(n3);
      this.options = {}, x(this.options, k, n3), this.options.cancelLegacy && !R() || _2(this);
    };
    return q.init = function(t3) {
      return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new q(t3);
    }, q.prototype.recalculateOnImageLoad = function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return e2(this, h2("img", this.container), !t3);
    }, q.prototype.runOnImageLoad = function(t3) {
      var n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r3 = h2("img", this.container);
      return this.on(this.constants.EVENT_IMAGE_COMPLETE, t3), n3 && this.on(this.constants.EVENT_IMAGE_LOAD, t3), e2(this, r3, n3);
    }, q.prototype.recalculate = function() {
      var t3 = this, n3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return e3 && this.queue.clear(), this.queue.add(function() {
        return V(t3, n3, e3);
      });
    }, q.prototype.remove = function() {
      window.removeEventListener("resize", this.resizer), v(this.container.children, function(t3) {
        t3.removeAttribute("data-macy-complete"), t3.removeAttribute("style");
      }), this.container.removeAttribute("style");
    }, q.prototype.reInit = function() {
      this.recalculate(true, true), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), this.container.style.position = "relative";
    }, q.prototype.on = function(t3, n3) {
      this.events.on(t3, n3);
    }, q.prototype.emit = function(t3, n3) {
      this.events.emit(t3, n3);
    }, q.constants = { EVENT_INITIALIZED: "macy.initialized", EVENT_RECALCULATED: "macy.recalculated", EVENT_IMAGE_LOAD: "macy.image.load", EVENT_IMAGE_ERROR: "macy.image.error", EVENT_IMAGE_COMPLETE: "macy.images.complete", EVENT_RESIZE: "macy.resize" }, q.prototype.constants = q.constants, q;
  });
})(macy);
var Macy = macy.exports;
var index_vue_vue_type_style_index_0_lang$6 = "";
const _sfc_main$7 = {
  props: {
    config: {
      type: Object,
      default: () => {
      }
    },
    changeKey: {
      type: null
    }
  },
  setup(__props) {
    const props = __props;
    const masonry = ref(null);
    const boxClass = ref(`m-waterfall-box${Math.floor(Math.random() * 9999)}`);
    const onresize = () => {
      if (masonry.value) {
        masonry.value.recalculate(true);
      }
    };
    const initMacy = async () => {
      masonry.value = new Macy({
        container: `.${boxClass.value}`,
        trueOrder: false,
        useOwnImageLoader: false,
        debug: true,
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
        ...props.config
      });
      window.addEventListener("resize", onresize);
    };
    onBeforeUnmount(() => {
      window.removeEventListener("reszie", onresize);
    });
    onMounted(() => {
      initMacy();
    });
    watch(() => props.changeKey, () => {
      initMacy();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: "wb",
        class: normalizeClass(["am-waterfall", boxClass.value])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$5 = "";
const _hoisted_1$5 = /* @__PURE__ */ createElementVNode("div", { class: "am-switch__switch" }, [
  /* @__PURE__ */ createElementVNode("i")
], -1);
const _hoisted_2$3 = {
  key: 0,
  class: "am-switch__text"
};
const _sfc_main$6 = {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    scene: {
      type: String,
      default: "light"
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  emits: ["update:value", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const handleClick = () => {
      emit("update:value", !props.value);
      emit("change", props.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-switch", {
          ["is-active"]: __props.value,
          [`is-${__props.scene}`]: __props.scene,
          [`is-${__props.size}`]: __props.size
        }]),
        onClick: handleClick
      }, [
        _hoisted_1$5,
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$4 = "";
const _hoisted_1$4 = ["onClick"];
const _hoisted_2$2 = { class: "am-radio__box" };
const _hoisted_3$1 = {
  key: 0,
  class: "am-radio__text"
};
const _sfc_main$5 = {
  props: {
    value: {
      type: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: null,
    scene: {
      type: String,
      default: "light"
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
  setup(__props, { emit }) {
    const props = __props;
    const selected = computed(() => {
      if (props.label !== void 0) {
        return props.value === props.label;
      }
      return props.value;
    });
    const handleClick = () => {
      if (props.label !== void 0) {
        emit("update:value", props.label);
        emit("change", props.label);
      } else {
        emit("update:value", !props.value);
        emit("change", props.value);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-radio", {
          ["is-active"]: unref(selected),
          [`is-${__props.scene}`]: __props.scene
        }]),
        onClick: withModifiers(handleClick, ["stop"])
      }, [
        createElementVNode("div", _hoisted_2$2, [
          createVNode(Transition, { name: "am-radio-anime" }, {
            default: withCtx(() => [
              withDirectives(createVNode(AmIcon, {
                name: "check-2",
                size: "18px",
                color: "#fff"
              }, null, 512), [
                [vShow, unref(selected)]
              ])
            ]),
            _: 1
          })
        ]),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1$4);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$3 = "";
const _sfc_main$4 = {
  props: {
    mode: {
      type: String,
      default: "default"
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "medium"
    },
    scene: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    const props = __props;
    const tagStyle = computed(() => {
      const color = /rgba|\#/.test(props.color) ? props.color : props.scene === "light" ? `var(--c-${props.color})` : `var(--cd-${props.color})`;
      const bgColor = props.scene === "light" ? `var(--c-bg)` : `var(--cd-bg)`;
      const borderColor = props.scene === "light" ? `var(--c-border)` : `var(--cd-border)`;
      const textColor = props.scene === "light" ? `var(--c-main)` : `var(--cd-main)`;
      if (props.mode === "default") {
        return {
          background: bgColor,
          borderColor,
          color: textColor
        };
      }
      if (props.mode === "fill") {
        return {
          borderColor: color,
          background: color,
          color: "#fff"
        };
      } else if (props.mode === "plain") {
        return {
          borderColor: color,
          background: bgColor,
          color
        };
      }
      return {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-tag", {
          ["is-" + __props.mode]: __props.mode,
          ["is-" + __props.size]: __props.size,
          ["is-" + __props.color]: __props.color,
          ["is-" + __props.scene]: __props.scene
        }]),
        style: normalizeStyle(unref(tagStyle))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$2 = "";
const _hoisted_1$3 = {
  key: 0,
  class: "am-alert__icon"
};
const _hoisted_2$1 = { class: "am-alert__content" };
const _sfc_main$3 = {
  props: {
    type: {
      type: String,
      default: "info"
    },
    size: {
      type: String,
      default: "small"
    },
    showClose: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const show = ref(true);
    const alertClass = computed(() => {
      return {
        [`is-${props.type}`]: true,
        [`is-${props.size}`]: true
      };
    });
    const alertIcon = computed(() => {
      if (props.type === "info") {
        return "info-fill";
      } else if (props.type === "success") {
        return "success-fill";
      } else if (props.type === "fail") {
        return "error-fill";
      } else if (props.type === "warning") {
        return "info-fill";
      }
      return "";
    });
    const deleteAlert = () => {
      show.value = false;
    };
    return (_ctx, _cache) => {
      const _component_AmIcon = resolveComponent("AmIcon");
      return show.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["am-alert", unref(alertClass)])
      }, [
        __props.showIcon && unref(alertIcon) ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          createVNode(_component_AmIcon, {
            name: unref(alertIcon),
            size: "18px"
          }, null, 8, ["name"])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ]),
        __props.showClose ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "am-alert__close",
          onClick: deleteAlert
        }, [
          createVNode(_component_AmIcon, { name: "close" })
        ])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$1 = "";
const _hoisted_1$2 = { class: "am-message" };
const _sfc_main$2 = {
  props: {
    type: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: "\u901A\u77E5"
    },
    duration: {
      type: Number,
      default: 2e3
    },
    destroySelf: Function
  },
  setup(__props, { expose }) {
    const props = __props;
    const show = ref(false);
    const zIndex = ref(popupManager.getZIndex());
    const autoCloseTimer = ref(null);
    const iconName = computed(() => {
      let iconName2 = "";
      switch (props.type) {
        case "success":
          iconName2 = "success-fill";
          break;
        case "fail":
          iconName2 = "error-fill";
          break;
        case "info":
          iconName2 = "info-fill";
          break;
        case "warning":
          iconName2 = "info-fill";
          break;
      }
      return iconName2;
    });
    onMounted(() => {
      show.value = true;
      autoCloseTimer.value = setTimeout(() => {
        show.value = false;
      }, props.duration);
    });
    const mouseEnter = () => {
    };
    const mouseLeave = () => {
    };
    const remove = () => {
      console.log(props);
      props.destroySelf();
    };
    const afterLeave = () => {
      remove();
    };
    const close = () => {
      if (autoCloseTimer.value) {
        clearTimeout(autoCloseTimer.value);
        autoCloseTimer.value = null;
      }
      show.value = false;
    };
    expose({
      close,
      show
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(Transition, {
          name: "am-message__anime",
          onAfterLeave: afterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass(["am-message__body", "am-message__body--" + __props.type]),
              style: normalizeStyle({
                "z-index": zIndex.value
              }),
              onMouseenter: mouseEnter,
              onMouseleave: mouseLeave
            }, [
              __props.type ? (openBlock(), createBlock(AmIcon, {
                key: 0,
                name: unref(iconName),
                size: "20px"
              }, null, 8, ["name"])) : createCommentVNode("", true),
              createElementVNode("span", null, toDisplayString(__props.content), 1)
            ], 38), [
              [vShow, show.value]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const instances$1 = [];
var AmMessage = {
  install(app) {
    const showMessage = (arg) => {
      let initData = {
        content: "this is a message",
        type: "",
        duration: 2e3
      };
      let father = document.body;
      if (typeof arg === "string") {
        initData.content = arg;
      } else {
        initData = { ...initData, ...arg };
        father = arg.father || father;
      }
      const container = document.createElement("div");
      const vm = createVNode(_sfc_main$2, {
        ...initData
      });
      render(vm, container);
      father.appendChild(container.firstElementChild);
      const instance = vm.component;
      instances$1.push(instance);
      instance.props.destroySelf = () => {
        const index2 = instances$1.findIndex((i2) => i2 === instance);
        instances$1.splice(index2, 1);
        render(null, container);
        container.remove();
      };
      return instance;
    };
    const $message = (arg) => {
      showMessage(arg);
    };
    $message.success = (content) => {
      showMessage({
        content,
        type: "success"
      });
    };
    $message.fail = (content) => {
      showMessage({
        content,
        type: "fail"
      });
    };
    $message.info = (content) => {
      showMessage({
        content,
        type: "info"
      });
    };
    $message.warning = (content) => {
      showMessage({
        content,
        type: "warning"
      });
    };
    $message.closeMessage = (instance) => {
      if (instance) {
        instance.exposed.close();
      } else {
        instances$1.forEach((item) => {
          item.exposed.close();
        });
      }
    };
    app.provide("$message", $message);
    window.$message = $message;
  }
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "am-loading" };
const _hoisted_2 = {
  key: 0,
  class: "am-loading__inner"
};
const _hoisted_3 = { class: "am-loading__card" };
const _hoisted_4 = /* @__PURE__ */ createElementVNode("svg", {
  class: "spinner",
  width: "40px",
  height: "40px",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("circle", {
    class: "path2",
    fill: "none",
    "stroke-width": "3",
    cx: "20",
    cy: "20",
    r: "13"
  }),
  /* @__PURE__ */ createElementVNode("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "3",
    cx: "20",
    cy: "20",
    r: "13"
  })
], -1);
const _sfc_main$1 = {
  props: {
    destroySelf: Function,
    content: {
      type: String,
      default: "\u52A0\u8F7D\u4E2D"
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const show = ref(false);
    const realShow = ref(false);
    let canClose = false;
    let timer = null;
    watch(() => show.value, () => {
      if (show.value) {
        realShow.value = true;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          canClose = true;
          if (!show.value) {
            realShow.value = false;
          }
        }, 600);
      } else if (canClose) {
        realShow.value = false;
        canClose = false;
      }
    });
    onMounted(() => {
      show.value = true;
    });
    let closePromiseResolve;
    const remove = () => {
      console.log(props);
      props.destroySelf();
    };
    const afterLeave = () => {
      console.log("afterLeave");
      closePromiseResolve();
      remove();
    };
    const close = async () => {
      console.log("\u6267\u884C\u5173\u95ED");
      show.value = false;
      await new Promise((resolve) => {
        closePromiseResolve = resolve;
      });
    };
    expose({
      close,
      show
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(Transition, {
          name: "am-loading-anime",
          onAfterLeave: afterLeave
        }, {
          default: withCtx(() => [
            realShow.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                _hoisted_4,
                createElementVNode("span", null, toDisplayString(__props.content), 1)
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const instances = [];
var AmLoading = {
  install(app) {
    const showLoading = (arg) => {
      let initData = {
        content: "\u52A0\u8F7D\u4E2D"
      };
      let father = document.body;
      if (typeof arg === "string") {
        initData.content = arg;
      } else {
        initData = { ...initData, ...arg };
        father = arg.father || father;
      }
      const container = document.createElement("div");
      const vm = createVNode(_sfc_main$1, {
        ...initData
      });
      console.log(vm);
      render(vm, container);
      father.appendChild(container.firstElementChild);
      const instance = vm.component;
      instances.push(instance);
      instance.props.destroySelf = () => {
        const index2 = instances.findIndex((i2) => i2 === instance);
        instances.splice(index2, 1);
        render(null, container);
        container.remove();
      };
      return instance;
    };
    const $loading = {};
    $loading.show = showLoading;
    $loading.close = async (instance) => {
      if (instance) {
        await instance.exposed.close();
      } else {
        await Promise.all(instances.map((i2) => i2.exposed.close()));
      }
      console.log("\u5904\u7406\u5B8C\u6BD5");
    };
    app.provide("$loading", $loading);
  }
};
const _hoisted_1 = { class: "am-dialog" };
const _sfc_main = {
  props: {
    title: {
      type: String,
      default: "\u63D0\u793A"
    },
    content: {
      type: String,
      default: "\u786E\u5B9A\u64CD\u4F5C\u5417\uFF1F"
    },
    isHtml: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    confirmText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    destroySelf: Function,
    confirm: Function,
    cancel: Function
  },
  setup(__props) {
    const props = __props;
    const show = ref(false);
    let clickResult = "cancel";
    onMounted(() => {
      show.value = true;
    });
    const clickCancelBtn = () => {
      clickResult = "cancel";
      show.value = false;
    };
    const clickConfirmBtn = () => {
      clickResult = "confirm";
      show.value = false;
    };
    const afterLeave = () => {
      if (clickResult === "cancel") {
        props.cancel();
      } else {
        props.confirm();
      }
      props.destroySelf();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$k, {
          width: "480px",
          show: show.value,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => show.value = $event),
          title: __props.title,
          onAfterLeave: afterLeave
        }, {
          ft: withCtx(() => [
            createVNode(_sfc_main$v, { onClick: clickCancelBtn }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.cancelText), 1)
              ]),
              _: 1
            }),
            createVNode(_sfc_main$v, {
              mode: "primary",
              onClick: clickConfirmBtn
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.confirmText), 1)
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("p", null, toDisplayString(__props.content), 1)
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
};
var AmDialog = {
  install(app) {
    const showDialog = (options) => {
      console.log("options", options);
      const container = document.createElement("div");
      const vm = createVNode(_sfc_main, {
        ...options
      });
      console.log("1", vm, container);
      render(vm, container);
      console.log("1.1");
      document.body.appendChild(container.firstElementChild);
      const instance = vm.component;
      console.log("2");
      instance.props.destroySelf = () => {
        render(null, container);
        container.remove();
      };
      return new Promise((resolve, reject) => {
        instance.props.confirm = resolve;
        instance.props.cancel = reject;
      });
    };
    const $dialog = showDialog;
    app.provide("$dialog", $dialog);
  }
};
!function(l2) {
  var a, o2, t2, e2, i2, m = '<svg><symbol id="editor" viewBox="0 0 1024 1024"><path d="M694.037333 213.333333v64H234.666667v469.333334h512V512h64v234.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h459.370666z m136.746667 24.234667l45.098667 45.397333-343.722667 341.290667 0.128 0.128-46.592 1.578667 1.322667-47.274667 0.085333 0.106667 343.68-341.226667z"  ></path></symbol><symbol id="ascending" viewBox="0 0 1024 1024"><path d="M404.970667 180.117333c20.096-11.114667 22.464-12.416 38.4-3.946666l7.146666 3.925333c6.336 8.298667 7.488 9.813333 8.64 17.002667l0.810667 5.781333v644.202667h-64V279.68l-180.053333 180.117333L170.666667 414.549333zM682.666667 714.666667v64h-128v-64h128z m64-149.333334v64h-192v-64h192z m64-149.333333v64H554.666667v-64h256z m64-149.333333v64H554.666667v-64h320z"  ></path></symbol><symbol id="browse" viewBox="0 0 1024 1024"><path d="M512 234.666667c131.946667 0 252.245333 80.512 360.874667 241.536a64 64 0 0 1 2.410666 67.712l-2.410666 3.882666-6.058667 8.853334C759.786667 711.765333 641.493333 789.333333 512 789.333333c-131.946667 0-252.245333-80.512-360.874667-241.536a64 64 0 0 1-2.410666-67.712l2.410666-3.882666 6.058667-8.853334C264.213333 312.234667 382.506667 234.666667 512 234.666667z m0 64c-105.770667 0-206.037333 65.749333-301.952 204.757333L204.181333 512l5.888 8.597333C306.069333 659.648 406.314667 725.333333 512 725.333333c105.770667 0 206.037333-65.749333 301.952-204.757333l5.866667-8.576-5.888-8.597333C717.930667 364.352 617.685333 298.666667 512 298.666667z m0 77.482666a141.482667 141.482667 0 1 1 0 282.944 141.482667 141.482667 0 0 1 0-282.944z m0 64a77.482667 77.482667 0 1 0 0 154.944 77.482667 77.482667 0 0 0 0-154.944z"  ></path></symbol><symbol id="code" viewBox="0 0 1024 1024"><path d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"  ></path></symbol><symbol id="editor1" viewBox="0 0 1024 1024"><path d="M694.037333 213.333333v64H234.666667v469.333334h512V512h64v234.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h459.370666z m136.746667 24.234667l45.098667 45.397333-343.722667 341.290667 0.128 0.128-46.592 1.578667 1.322667-47.274667 0.085333 0.106667 343.68-341.226667z"  ></path></symbol><symbol id="filter" viewBox="0 0 1024 1024"><path d="M764.266667 213.333333a64 64 0 0 1 49.557333 104.512L615.466667 560.426667v273.386666l-54.336-24.704V525.781333L764.266667 277.333333H243.925333l200.192 253.205334v225.450666l-57.941333-26.304v-169.237333l-192.448-243.413333A64 64 0 0 1 243.925333 213.333333h520.341334z"  ></path></symbol><symbol id="link" viewBox="0 0 1024 1024"><path d="M618.24 439.381333a152.746667 152.746667 0 0 1 0 216l-135.893333 135.893334a163.370667 163.370667 0 1 1-231.04-231.04l66.922666-66.944 45.269334 45.269333-66.944 66.944a99.370667 99.370667 0 1 0 140.522666 140.522667l135.893334-135.893334a88.746667 88.746667 0 0 0 0-125.482666z m182.528-197.589333a163.370667 163.370667 0 0 1 0 231.04L733.866667 539.776l-45.269334-45.248 66.944-66.944a99.370667 99.370667 0 1 0-140.522666-140.522667l-135.893334 135.893334a88.746667 88.746667 0 0 0 0 125.482666l-45.269333 45.269334a152.746667 152.746667 0 0 1 0-216l135.893333-135.893334a163.370667 163.370667 0 0 1 231.04 0z"  ></path></symbol><symbol id="map" viewBox="0 0 1024 1024"><path d="M512 128c164.949333 0 298.666667 129.941333 298.666667 290.261333 0 3.392-0.064 6.784-0.213334 10.24-3.669333 95.914667-58.24 203.776-147.797333 313.173334a1260.714667 1260.714667 0 0 1-139.818667 144.768l-10.837333 9.322666-10.837333-9.322666-13.013334-11.626667a1260.714667 1260.714667 0 0 1-126.805333-133.162667c-89.557333-109.376-144.128-217.237333-147.818667-313.173333-0.128-3.413333-0.192-6.826667-0.192-10.24 0-158.08 130.069333-286.677333 291.904-290.176L512 128z m0 64c-130.005333 0-234.666667 101.717333-234.666667 226.261333 0 2.56 0.042667 5.141333 0.149334 7.765334 2.944 76.608 48.554667 171.52 133.376 275.093333a1184.682667 1184.682667 0 0 0 86.613333 94.506667l14.528 14.016 14.506667-14.016a1184.682667 1184.682667 0 0 0 86.634666-94.506667c84.821333-103.573333 130.432-198.485333 133.376-275.093333 0.106667-2.624 0.149333-5.205333 0.149334-7.765334C746.666667 293.717333 642.005333 192 512 192z m0 74.666667a149.333333 149.333333 0 1 1 0 298.666666 149.333333 149.333333 0 0 1 0-298.666666z m0 64a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z"  ></path></symbol><symbol id="resonserate" viewBox="0 0 1024 1024"><path d="M516.288 170.666667c4.330667 0 8.512 1.621333 11.733333 4.544L868.906667 485.333333c6.549333 5.973333 7.552 15.786667 2.688 22.954667l-1.450667 1.877333c-0.277333 0.298667-114.325333 104.085333-342.165333 311.381334a17.386667 17.386667 0 0 1-24.661334-1.237334 17.642667 17.642667 0 0 1-4.522666-11.797333v-179.904c-16.213333 0.426667-32.170667 1.962667-47.744 4.586667l-4.693334 0.810666c-129.066667 23.552-232.810667 98.304-267.306666 223.936l-2.624-5.696C166.186667 829.12 149.333333 781.525333 149.333333 734.037333c0-198.058667 154.922667-359.68 349.482667-368.874666V188.245333c0-9.706667 7.829333-17.578667 17.493333-17.578666z m46.528 122.730666v132.821334l-60.992 2.88c-140.416 6.613333-255.36 109.44-282.453333 243.946666 56.277333-51.541333 130.261333-86.4 215.978666-102.058666l5.12-0.896a404.309333 404.309333 0 0 1 56.746667-5.44l65.6-1.664v140.373333l225.28-205.013333-225.28-204.949334z"  ></path></symbol><symbol id="share" viewBox="0 0 1024 1024"><path d="M395.946667 234.666667v64H256v469.333333h512V522.666667h64V768a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h139.946667z m335.850666-87.914667l150.848 150.826667-158.378666 158.4-45.269334-45.248L748.394667 341.333333H672c-121.685333 0-220.714667 97.024-223.914667 217.941334L448 565.333333v85.333334h-64v-85.333334C384 406.272 512.938667 277.333333 672 277.333333h99.861333l-85.312-85.333333 45.248-45.248z"  ></path></symbol><symbol id="set" viewBox="0 0 1024 1024"><path d="M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z"  ></path></symbol><symbol id="filter-fill" viewBox="0 0 1024 1024"><path d="M776.341333 170.666667a64 64 0 0 1 49.557334 104.512L627.541333 517.76v273.386667L398.293333 687.018667v-169.237334l-192.469333-243.413333A64 64 0 0 1 256 170.666667h520.341333z"  ></path></symbol><symbol id="loading" viewBox="0 0 1024 1024"><path d="M277.333333 759.466667C213.333333 695.466667 170.666667 610.133333 170.666667 512c0-187.733333 153.6-341.333333 341.333333-341.333333v85.333333c-140.8 0-256 115.2-256 256 0 72.533333 29.866667 140.8 81.066667 187.733333l-59.733334 59.733334z"  ></path></symbol><symbol id="loading1" viewBox="0 0 1024 1024"><path d="M379.733333 827.733333l68.266667-68.266666c21.333333 4.266667 42.666667 8.533333 68.266667 8.533333 140.8 0 256-115.2 256-256 0-21.333333-4.266667-46.933333-8.533334-68.266667l68.266667-68.266666c17.066667 42.666667 25.6 85.333333 25.6 132.266666 0 187.733333-153.6 341.333333-341.333333 341.333334-51.2 4.266667-98.133333-4.266667-136.533334-21.333334z m-183.466666-183.466666c-17.066667-42.666667-25.6-85.333333-25.6-132.266667 0-187.733333 153.6-341.333333 341.333333-341.333333 46.933333 0 93.866667 8.533333 132.266667 25.6l-68.266667 68.266666c-17.066667-4.266667-42.666667-8.533333-64-8.533333-140.8 0-256 115.2-256 256 0 21.333333 4.266667 46.933333 8.533333 68.266667l-68.266666 64z"  ></path></symbol><symbol id="packaging" viewBox="0 0 1024 1024"><path d="M537.813333 118.058667l298.666667 131.776A64 64 0 0 1 874.666667 308.373333v407.253334a64 64 0 0 1-38.186667 58.538666l-298.666667 131.776a64 64 0 0 1-51.626666 0l-298.666667-131.776A64 64 0 0 1 149.333333 715.626667v-407.253334a64 64 0 0 1 38.186667-58.538666l298.666667-131.776a64 64 0 0 1 51.626666 0zM213.333333 360.64v354.986667l266.666667 117.632V485.077333L213.333333 360.64z m597.333334 2.944l-85.717334 40V533.333333H725.333333l-0.384 0.213334v1.130666l-1.941333-0.021333L661.333333 569.6v-34.944h-0.384v-101.205333L544 488.021333v345.237334L810.666667 715.626667V363.584z m-484.010667-105.216l-93.077333 41.066667 281.578666 131.413333 94.698667-44.202667-283.2-128.277333zM512 176.618667l-106.752 47.082666 281.002667 127.296 107.413333-50.133333L512 176.618667z"  ></path></symbol><symbol id="product" viewBox="0 0 1024 1024"><path d="M537.984 139.52l277.333333 123.178667A64 64 0 0 1 853.333333 321.194667v381.610666a64 64 0 0 1-38.016 58.496l-277.333333 123.157334a64 64 0 0 1-51.968 0l-277.333333-123.157334A64 64 0 0 1 170.666667 702.805333V321.194667a64 64 0 0 1 38.016-58.496l277.333333-123.157334a64 64 0 0 1 51.968 0zM234.666667 381.44v321.365333l250.666666 111.317334V488.853333L234.666667 381.44z m554.666666 2.304l-240 102.826667V809.386667L789.333333 702.805333V383.744zM512 198.037333l-266.581333 118.378667 269.290666 115.413333 266.517334-114.24L512 198.037333z"  ></path></symbol><symbol id="product1" viewBox="0 0 1024 1024"><path d="M170.666667 353.578667l314.666666 135.253333v395.306667L208.682667 761.322667A64 64 0 0 1 170.666667 702.805333v-349.226666z m682.666666-8.170667v357.397333a64 64 0 0 1-38.016 58.496L549.333333 879.402667V485.482667L853.333333 345.386667zM537.984 139.52l277.333333 123.157333c9.642667 4.266667 17.856 10.773333 24.149334 18.709334l-324.757334 150.4-334.72-143.872c6.613333-10.922667 16.533333-19.84 28.693334-25.237334l277.333333-123.157333a64 64 0 0 1 51.968 0z"  ></path></symbol><symbol id="add" viewBox="0 0 1024 1024"><path d="M810.666667 554.666667l-256 0 0 256-85.333333 0 0-256L213.333333 554.666667l0-85.333333 256 0L469.333333 213.333333l85.333333 0 0 256 256 0L810.666667 554.666667z"  ></path></symbol><symbol id="remove" viewBox="0 0 1024 1024"><path d="M810.666667 554.666667 213.333333 554.666667l0-85.333333 597.333333 0L810.666667 554.666667z"  ></path></symbol><symbol id="account-fill" viewBox="0 0 1024 1024"><path d="M644.8 581.568l160.64 187.456A64 64 0 0 1 756.842667 874.666667H267.157333a64 64 0 0 1-48.597333-105.642667l160.661333-187.434667A254.805333 254.805333 0 0 0 512 618.666667c48.64 0 94.08-13.546667 132.8-37.098667zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z"  ></path></symbol><symbol id="check-2" viewBox="0 0 1024 1024"><path d="M287 437.00000029l-74.99999971 74.99999971 225 225L811.99999971 361.99999971l-74.99999971-74.99999971-299.99999971 299.99999971z"  ></path></symbol><symbol id="info-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 298.666667h-64v256h64V448z m0-106.666667h-64v64h64v-64z"  ></path></symbol><symbol id="help" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m39.658667 426.666667v64h-59.946667l-0.021333-64h59.968z m-3.541334-316.757333c38.72 7.808 84.778667 44.736 84.778667 98.453333 0 53.738667-43.882667 74.069333-59.605333 84.117333-14.506667 9.28-20.672 19.882667-21.525334 31.189334l-0.106666 2.816V597.333333h-59.968v-79.338666c0-18.816 6.037333-32 22.826666-43.648l3.776-2.496 33.685334-22.4c21.482667-14.464 21.184-43.498667 7.893333-56.32a60.373333 60.373333 0 0 0-52.842667-13.546667c-37.376 7.338667-41.685333 33.706667-41.941333 59.306667v14.485333H405.333333c0-49.834667 5.717333-72.426667 32.298667-100.970667 29.781333-31.893333 71.744-37.013333 110.485333-29.162666z"  ></path></symbol><symbol id="info" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m32 234.666667v256h-64V448h64z m0-106.666667v64h-64v-64h64z"  ></path></symbol><symbol id="error" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m113.130667 140.266667l45.269333 45.269333L557.226667 512l113.152 113.130667-45.269334 45.269333L512 557.226667l-113.130667 113.152-45.269333-45.269334L466.773333 512l-113.152-113.109333 45.269334-45.269334L512 466.730667l113.109333-113.130667z"  ></path></symbol><symbol id="success" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m169.045333 127.04l45.909334 44.586667-271.829334 279.722667-136.832-141.952 46.08-44.416 90.944 94.336 225.728-232.277334z"  ></path></symbol><symbol id="help-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m39.658667 490.666667h-59.968v64h59.968v-64z m-3.541334-316.757333c-38.741333-7.850667-80.704-2.730667-110.485333 29.162666C411.050667 380.949333 405.333333 403.541333 405.333333 453.376h59.733334v-14.506667c0.277333-25.578667 4.586667-51.946667 41.962666-59.306666a60.373333 60.373333 0 0 1 52.821334 13.568c13.312 12.821333 13.610667 41.856-7.893334 56.32l-33.664 22.4-3.776 2.496c-16.789333 11.669333-22.826667 24.832-22.826666 43.648V597.333333h59.968v-57.514666l0.106666-2.816c0.853333-11.306667 6.997333-21.909333 21.525334-31.189334 15.722667-10.048 59.605333-30.378667 59.605333-84.117333 0-53.717333-46.058667-90.645333-84.778667-98.453333z"  ></path></symbol><symbol id="error-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m113.130667 204.266667l-113.109334 113.130667-113.152-113.130667-45.269333 45.269333 113.152 113.109334-113.152 113.152 45.269333 45.269333L512 557.226667l113.130667 113.152 45.269333-45.269334L557.226667 512l113.152-113.130667-45.269334-45.269333z"  ></path></symbol><symbol id="success-fill" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m169.045333 191.04L455.317333 572.650667l-90.944-94.336-46.08 44.416 136.832 141.952 271.829334-279.722667-45.909334-44.586667z"  ></path></symbol><symbol id="check" viewBox="0 0 1024 1024"><path d="M384 691.2 204.8 512 145.066667 571.733333 384 810.666667 896 298.666667 836.266667 238.933333Z"  ></path></symbol><symbol id="close" viewBox="0 0 1024 1024"><path d="M810.666667 273.066667 750.933333 213.333333 512 452.266667 273.066667 213.333333 213.333333 273.066667 452.266667 512 213.333333 750.933333 273.066667 810.666667 512 571.733333 750.933333 810.666667 810.666667 750.933333 571.733333 512Z"  ></path></symbol><symbol id="down" viewBox="0 0 1024 1024"><path d="M315.733333 332.8 512 529.066667 708.266667 332.8 768 392.533333 512 648.533333 256 392.533333Z"  ></path></symbol><symbol id="left" viewBox="0 0 1024 1024"><path d="M657.066667 686.933333 460.8 490.666667 657.066667 294.4 597.333333 234.666667 341.333333 490.666667 597.333333 746.666667Z"  ></path></symbol><symbol id="right" viewBox="0 0 1024 1024"><path d="M366.933333 695.466667 563.2 503.466667 366.933333 307.2 426.666667 247.466667 682.666667 503.466667 426.666667 759.466667Z"  ></path></symbol><symbol id="up" viewBox="0 0 1024 1024"><path d="M315.733333 657.066667 512 460.8 708.266667 657.066667 768 597.333333 512 341.333333 256 597.333333Z"  ></path></symbol><symbol id="search" viewBox="0 0 1024 1024"><path d="M661.333333 597.333333l-34.133333 0-12.8-12.8c42.666667-46.933333 68.266667-110.933333 68.266667-179.2C682.666667 251.733333 558.933333 128 405.333333 128 251.733333 128 128 251.733333 128 405.333333S251.733333 682.666667 405.333333 682.666667c68.266667 0 132.266667-25.6 179.2-68.266667l12.8 12.8 0 34.133333 213.333333 213.333333 64-64L661.333333 597.333333zM405.333333 597.333333C298.666667 597.333333 213.333333 512 213.333333 405.333333S298.666667 213.333333 405.333333 213.333333C512 213.333333 597.333333 298.666667 597.333333 405.333333S512 597.333333 405.333333 597.333333z"  ></path></symbol><symbol id="caret-left" viewBox="0 0 1024 1024"><path d="M597.333333 725.333333l-256-213.333333 256-213.333333v426.666666z"  ></path></symbol><symbol id="caret-right" viewBox="0 0 1024 1024"><path d="M426.666667 298.666667l256 213.333333-256 213.333333V298.666667z"  ></path></symbol><symbol id="caret-down" viewBox="0 0 1024 1024"><path d="M725.333333 426.666667l-213.333333 256-213.333333-256h426.666666z"  ></path></symbol><symbol id="caret-up" viewBox="0 0 1024 1024"><path d="M298.666667 597.333333l213.333333-256 213.333333 256H298.666667z"  ></path></symbol><symbol id="ellipsis" viewBox="0 0 1024 1024"><path d="M269.333333 448a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773334 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773333 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z"  ></path></symbol></svg>', s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss"), h2 = function(l3, a2) {
    a2.parentNode.insertBefore(l3, a2);
  };
  if (s && !l2.__iconfont__svg__cssinject__) {
    l2.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (l3) {
      console && console.log(l3);
    }
  }
  function d2() {
    i2 || (i2 = true, t2());
  }
  function c() {
    try {
      e2.documentElement.doScroll("left");
    } catch (l3) {
      return void setTimeout(c, 50);
    }
    d2();
  }
  a = function() {
    var l3, a2 = document.createElement("div");
    a2.innerHTML = m, m = null, (a2 = a2.getElementsByTagName("svg")[0]) && (a2.setAttribute("aria-hidden", "true"), a2.style.position = "absolute", a2.style.width = 0, a2.style.height = 0, a2.style.overflow = "hidden", a2 = a2, (l3 = document.body).firstChild ? h2(a2, l3.firstChild) : l3.appendChild(a2));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(a, 0) : (o2 = function() {
    document.removeEventListener("DOMContentLoaded", o2, false), a();
  }, document.addEventListener("DOMContentLoaded", o2, false)) : document.attachEvent && (t2 = a, e2 = l2.document, i2 = false, c(), e2.onreadystatechange = function() {
    "complete" == e2.readyState && (e2.onreadystatechange = null, d2());
  });
}(window);
var reset = "";
var default_theme = "";
var index = {
  install(app) {
    app.component("AmIcon", AmIcon);
    app.component("AmTab", _sfc_main$q);
    app.component("AmButton", _sfc_main$v);
    app.component("AmInput", _sfc_main$u);
    app.component("AmTable", _sfc_main$t);
    app.component("AmTableColumn", _sfc_main$s);
    app.component("AmPopover", _sfc_main$r);
    app.component("AmSelect", _sfc_main$o);
    app.component("AmOption", _sfc_main$n);
    app.component("AmTooltip", _sfc_main$m);
    app.component("AmDivider", _sfc_main$l);
    app.component("AmPopup", _sfc_main$k);
    app.component("AmProgress", _sfc_main$j);
    app.component("AmCheckbox", _sfc_main$i);
    app.component("AmMenu", AmMenu);
    app.component("AmMenuItem", _sfc_main$g);
    app.component("AmPagination", _sfc_main$f);
    app.component("AmLogo", _sfc_main$e);
    app.component("AmForm", _sfc_main$d);
    app.component("AmFormItem", _sfc_main$c);
    app.component("AmAvatar", _sfc_main$b);
    app.component("AmList", AmList);
    app.component("AmListItem", _sfc_main$9);
    app.component("AmListStatus", _sfc_main$8);
    app.component("AmWaterfall", _sfc_main$7);
    app.component("AmDropdown", _sfc_main$p);
    app.component("AmSwitch", _sfc_main$6);
    app.component("AmRadio", _sfc_main$5);
    app.component("AmTag", _sfc_main$4);
    app.component("AmAlert", _sfc_main$3);
    app.directive("clickoutside", ClickOutside);
    app.directive("clickanime", clickanime);
    app.use(AmMessage);
    app.use(AmLoading);
    app.use(AmDialog);
  },
  AmIcon,
  AmButton: _sfc_main$v,
  AmIcon,
  AmButton: _sfc_main$v,
  AmInput: _sfc_main$u,
  AmTable: _sfc_main$t,
  AmTableColumn: _sfc_main$s,
  AmPopover: _sfc_main$r,
  AmTab: _sfc_main$q,
  AmSelect: _sfc_main$o,
  AmOption: _sfc_main$n,
  AmTooltip: _sfc_main$m,
  AmDivider: _sfc_main$l,
  AmPopup: _sfc_main$k,
  AmProgress: _sfc_main$j,
  AmCheckbox: _sfc_main$i,
  AmMenu,
  AmMenuItem: _sfc_main$g,
  AmPagination: _sfc_main$f,
  AmLogo: _sfc_main$e,
  AmForm: _sfc_main$d,
  AmFormItem: _sfc_main$c,
  AmAvatar: _sfc_main$b,
  AmList,
  AmListItem: _sfc_main$9,
  AmWaterfall: _sfc_main$7,
  AmDropdown: _sfc_main$p,
  AmMessage,
  AmLoading,
  AmDialog,
  AmSwitch: _sfc_main$6,
  AmRadio: _sfc_main$5,
  AmTag: _sfc_main$4,
  AmAlert: _sfc_main$3,
  AmListStatus: _sfc_main$8
};
export { index as default };
