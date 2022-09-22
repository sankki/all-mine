var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { computed, toRefs, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, withDirectives, normalizeClass, createBlock, createCommentVNode, Fragment, createTextVNode, toDisplayString, renderSlot, ref, onMounted, watch, withKeys, provide, defineComponent, h, renderList, getCurrentInstance, inject, onUnmounted, createVNode, Transition, withCtx, vShow, nextTick, resolveComponent, resolveDirective, reactive, normalizeProps, guardReactiveProps, withModifiers, onBeforeUnmount, render } from "vue";
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
var e, t, n = typeof Map == "function" ? /* @__PURE__ */ new Map() : (e = [], t = [], { has: function(t2) {
  return e.indexOf(t2) > -1;
}, get: function(n2) {
  return t[e.indexOf(n2)];
}, set: function(n2, o2) {
  e.indexOf(n2) === -1 && (e.push(n2), t.push(o2));
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
typeof window == "undefined" || typeof window.getComputedStyle != "function" ? ((l = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, l.update = function(e2) {
  return e2;
}) : ((l = function(e2, t2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], function(e3) {
    return function(e4) {
      if (e4 && e4.nodeName && e4.nodeName === "TEXTAREA" && !n.has(e4)) {
        var t3, r2 = null, i2 = null, l2 = null, d2 = function() {
          e4.clientWidth !== i2 && c();
        }, a = function(t4) {
          window.removeEventListener("resize", d2, false), e4.removeEventListener("input", c, false), e4.removeEventListener("keyup", c, false), e4.removeEventListener("autosize:destroy", a, false), e4.removeEventListener("autosize:update", c, false), Object.keys(t4).forEach(function(n2) {
            e4.style[n2] = t4[n2];
          }), n.delete(e4);
        }.bind(e4, { height: e4.style.height, resize: e4.style.resize, overflowY: e4.style.overflowY, overflowX: e4.style.overflowX, wordWrap: e4.style.wordWrap });
        e4.addEventListener("autosize:destroy", a, false), "onpropertychange" in e4 && "oninput" in e4 && e4.addEventListener("keyup", c, false), window.addEventListener("resize", d2, false), e4.addEventListener("input", c, false), e4.addEventListener("autosize:update", c, false), e4.style.overflowX = "hidden", e4.style.wordWrap = "break-word", n.set(e4, { destroy: a, update: c }), (t3 = window.getComputedStyle(e4, null)).resize === "vertical" ? e4.style.resize = "none" : t3.resize === "both" && (e4.style.resize = "horizontal"), r2 = t3.boxSizing === "content-box" ? -(parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom)) : parseFloat(t3.borderTopWidth) + parseFloat(t3.borderBottomWidth), isNaN(r2) && (r2 = 0), c();
      }
      function u(t4) {
        var n2 = e4.style.width;
        e4.style.width = "0px", e4.style.width = n2, e4.style.overflowY = t4;
      }
      function s() {
        if (e4.scrollHeight !== 0) {
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
        var t4 = Math.round(parseFloat(e4.style.height)), n2 = window.getComputedStyle(e4, null), r3 = n2.boxSizing === "content-box" ? Math.round(parseFloat(n2.height)) : e4.offsetHeight;
        if (r3 < t4 ? n2.overflowY === "hidden" && (u("scroll"), s(), r3 = n2.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight) : n2.overflowY !== "hidden" && (u("hidden"), s(), r3 = n2.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight), l2 !== r3) {
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
const _hoisted_2$f = ["readOnly", "placeholder", "value", "autocomplete", "onKeyup"];
const _hoisted_3$b = ["readOnly", "type", "value", "placeholder", "autocomplete", "onKeyup"];
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
    readOnly: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
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
      } else {
        d.destroy(textareaEl.value);
      }
    };
    onMounted(() => {
      checkAutosize();
    });
    watch(() => props.autosize, () => {
      checkAutosize();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-input", {
          "is-focus": isFocus.value,
          [`is-${__props.scene}`]: __props.scene
        }])
      }, [
        createElementVNode("div", _hoisted_1$q, [
          __props.type === "textarea" ? (openBlock(), createElementBlock("textarea", {
            key: 0,
            readOnly: __props.readOnly,
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
          }, null, 40, _hoisted_2$f)) : (openBlock(), createElementBlock("input", {
            key: 1,
            readOnly: __props.readOnly,
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
          }, null, 40, _hoisted_3$b))
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
const _hoisted_4$4 = ["onClick"];
const _hoisted_5$3 = ["onClick"];
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
    const tableBdStyle = computed(() => __spreadValues({
      "max-height": props.height ? `${props.height}` : "",
      "overflow-y": props.height ? "auto" : "",
      "overflow-x": "hidden"
    }, props.bdStyle));
    const scrollBarWidth = ref(0);
    const bd = ref(null);
    onMounted(() => {
      observeElResize(bd.value.firstChild, () => {
        if (!bd.value)
          return;
        bd.value.offsetWidth;
        bd.value.firstChild.getBoundingClientRect();
        scrollBarWidth.value = bd.value.offsetWidth - bd.value.firstChild.offsetWidth - 2;
      });
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
        return h("div", {
          attrs: {
            class: "cell"
          }
        }, this.slotFun(this.data));
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
                  style: normalizeStyle("width:" + scrollBarWidth.value + "px;")
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
                    ], 8, _hoisted_5$3);
                  }), 128))
                ], 10, _hoisted_4$4);
              }), 128))
            ])
          ])
        ], 4)
      ]);
    };
  }
};
let nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    let byte = bytes[size] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += "_";
    } else {
      id += "-";
    }
  }
  return id;
};
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
    watch(() => props.show, () => {
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
    });
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
    }
  },
  emits: ["update:value"],
  setup(__props, { emit }) {
    const clickTab = (item) => {
      emit("update:value", item.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["am-tab", {
          [`is-${__props.mode}`]: __props.mode
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
    provide("selectedItemValue", computed(() => props.value));
    provide("selectedItem", selectedItem);
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
    watch(() => props.item, () => {
      const findedIndex = options.findIndex((i2) => i2.value === props.item.value);
      if (findedIndex >= 0) {
        options.splice(findedIndex, 1, props.item);
      } else {
        options.push(props.item);
      }
    }, {
      deep: true,
      immediate: true
    });
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
    onMounted(() => {
      document.body.appendChild(tipEl.value);
      tipElement = tipEl.value;
    });
    onUnmounted(() => {
      tipElement && tipElement.remove();
      endObserve();
    });
    const onMouseEnter = () => {
      if (props.disabled)
        return;
      if (props.trigger !== "hover")
        return;
      popShow.value = true;
    };
    const onMouseLeave = () => {
      if (props.disabled)
        return;
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
    watch(() => popShow.value, () => {
      if (popShow.value) {
        zIndex.value = popupManager.getZIndex();
        startObserve();
      } else {
        endObserve();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "am-tooltip",
        ref_key: "triggerEl",
        ref: triggerEl,
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("div", {
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
        ], 6)
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
document.addEventListener("mouseup", (e2) => {
  for (const handlers of nodeList.values()) {
    for (const { documentHandler } of handlers) {
      documentHandler(e2, startClick);
    }
  }
}, false);
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
    const isTargetExcluded = excludes.length && excludes.some((item) => item === null || item === void 0 ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
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
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
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
const _hoisted_4$3 = { class: "am-popup__bd" };
const _hoisted_5$2 = {
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
    watch(() => props.show, () => {
      props.show && (zIndex.value = popupManager.getZIndex());
    });
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
                createElementVNode("div", _hoisted_4$3, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _ctx.$slots.ft ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
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
const _hoisted_4$2 = { viewBox: "0 0 100 100" };
const _hoisted_5$1 = ["d", "stroke-width"];
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
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
    }));
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
          (openBlock(), createElementBlock("svg", _hoisted_4$2, [
            createElementVNode("path", {
              class: "am-progress-circle__track",
              d: unref(trackPath),
              stroke: "#e5e9f2",
              "stroke-width": unref(relativeStrokeWidth),
              fill: "none",
              style: normalizeStyle(unref(trailPathStyle))
            }, null, 12, _hoisted_5$1),
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
const _hoisted_4$1 = { key: 1 };
const _hoisted_5 = {
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
          }, null, 8, _hoisted_3$4)) : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(__props.name), 1))
        ]),
        __props.sub ? (openBlock(), createElementBlock("div", _hoisted_5, [
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
var index_vue_vue_type_style_index_0_lang$7 = "";
const _hoisted_1$6 = {
  key: 0,
  class: "am-list-status__loading"
};
const _hoisted_2$4 = {
  key: 1,
  class: "am-list-status__end"
};
const _hoisted_3$2 = {
  key: 2,
  class: "am-list-status__empty"
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
    }
  },
  emits: ["intersect"],
  setup(__props, { emit }) {
    const props = __props;
    const observerEl = ref(null);
    const observer = ref(null);
    const init = () => {
      observer.value = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          emit("intersect");
        }
      }, props.options);
      observer.value.observe(observerEl.value);
    };
    onMounted(() => {
      init();
    });
    onUnmounted(() => {
      observer.value.disconnect();
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
        ])) : createCommentVNode("", true),
        __props.isEnd ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createVNode(_component_AmIcon, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          createElementVNode("span", null, toDisplayString(__props.endText), 1)
        ])) : createCommentVNode("", true),
        __props.isEmpty ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createVNode(_component_AmIcon, {
            name: "product1",
            size: "18px",
            color: "#aaa"
          }),
          createElementVNode("span", null, toDisplayString(__props.emptyText), 1)
        ])) : createCommentVNode("", true)
      ], 512);
    };
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
      var e3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
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
      var n3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], e3 = s(t3), r3 = a(t3).x, o3 = 100 / e3;
      if (!n3)
        return o3;
      if (e3 === 1)
        return "100%";
      var i3 = "px";
      if (typeof r3 == "string") {
        var c2 = parseFloat(r3);
        i3 = r3.replace(c2, ""), r3 = c2;
      }
      return r3 = (e3 - 1) * r3 / e3, i3 === "%" ? o3 - r3 + "%" : "calc(" + o3 + "% - " + r3 + i3 + ")";
    }
    function u(t3, n3) {
      var e3 = s(t3.options), r3 = 0, o3 = void 0, i3 = void 0;
      if (++n3 === 1)
        return 0;
      i3 = a(t3.options).x;
      var u2 = "px";
      if (typeof i3 == "string") {
        var l3 = parseFloat(i3, 10);
        u2 = i3.replace(l3, ""), i3 = l3;
      }
      return o3 = (i3 - (e3 - 1) * i3 / e3) * (n3 - 1), r3 += c(t3.options, false) * (n3 - 1), u2 === "%" ? r3 + o3 + "%" : "calc(" + r3 + "% + " + o3 + u2 + ")";
    }
    function l2(t3) {
      var n3 = 0, e3 = t3.container, r3 = t3.rows;
      v(r3, function(t4) {
        n3 = t4 > n3 ? t4 : n3;
      }), e3.style.height = n3 + "px";
    }
    function p(t3, n3) {
      var e3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r3 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], o3 = s(t3.options), i3 = a(t3.options).y;
      M(t3, o3, e3), v(n3, function(n4) {
        var e4 = 0, o4 = parseInt(n4.offsetHeight, 10);
        isNaN(o4) || (t3.rows.forEach(function(n5, r4) {
          n5 < t3.rows[e4] && (e4 = r4);
        }), n4.style.position = "absolute", n4.style.top = t3.rows[e4] + "px", n4.style.left = "" + t3.cols[e4], t3.rows[e4] += isNaN(o4) ? 0 : o4 + i3, r3 && (n4.dataset.macyComplete = 1));
      }), r3 && (t3.tmpRows = null), l2(t3);
    }
    function f(t3, n3) {
      var e3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r3 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], o3 = s(t3.options), i3 = a(t3.options).y;
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
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.running = false, this.events = [], this.add(t3);
    };
    m.prototype.run = function() {
      if (!this.running && this.events.length > 0) {
        var t3 = this.events.shift();
        this.running = true, t3(), this.running = false, this.run();
      }
    }, m.prototype.add = function() {
      var t3 = this, n3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return !!n3 && (Array.isArray(n3) ? v(n3, function(n4) {
        return t3.add(n4);
      }) : (this.events.push(n3), void this.run()));
    }, m.prototype.clear = function() {
      this.events = [];
    };
    var d2 = function(t3) {
      var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.instance = t3, this.data = n3, this;
    }, y = function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.events = {}, this.instance = t3;
    };
    y.prototype.on = function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      return !(!t3 || !n3) && (Array.isArray(this.events[t3]) || (this.events[t3] = []), this.events[t3].push(n3));
    }, y.prototype.emit = function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
      var e3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
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
      var r3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return n2(e3, function(n3) {
        return E(t3, n3, r3);
      });
    }, A = function(t3, n3) {
      var e3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
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
    }, _ = function(t3) {
      N(t3), T(t3), L(t3);
    }, b = function(t3) {
      return t3 === Object(t3) && Object.prototype.toString.call(t3) !== "[object Array]";
    }, O = function(t3, n3) {
      b(t3) || (n3.columns = t3), b(t3) && t3.columns && (n3.columns = t3.columns), b(t3) && t3.margin && !b(t3.margin) && (n3.margin = { x: t3.margin, y: t3.margin }), b(t3) && t3.margin && b(t3.margin) && t3.margin.x && (n3.margin.x = t3.margin.x), b(t3) && t3.margin && b(t3.margin) && t3.margin.y && (n3.margin.y = t3.margin.y);
    }, C = function(t3, n3) {
      return window.getComputedStyle(t3, null).getPropertyValue(n3);
    }, M = function(t3, n3) {
      var e3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
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
      var n3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], e3 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r3 = n3 ? t3.container.children : h2(':scope > *:not([data-macy-complete="1"])', t3.container);
      r3 = Array.from(r3).filter(function(t4) {
        return t4.offsetParent !== null;
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
                return r4 === null ? this.removeAttribute("id") : r4 || (this.id = r4), o3;
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
      var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k;
      if (!(this instanceof t3))
        return new t3(n3);
      this.options = {}, x(this.options, k, n3), this.options.cancelLegacy && !R() || _(this);
    };
    return q.init = function(t3) {
      return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new q(t3);
    }, q.prototype.recalculateOnImageLoad = function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      return e2(this, h2("img", this.container), !t3);
    }, q.prototype.runOnImageLoad = function(t3) {
      var n3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r3 = h2("img", this.container);
      return this.on(this.constants.EVENT_IMAGE_COMPLETE, t3), n3 && this.on(this.constants.EVENT_IMAGE_LOAD, t3), e2(this, r3, n3);
    }, q.prototype.recalculate = function() {
      var t3 = this, n3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
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
      masonry.value = new Macy(__spreadValues({
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
        }
      }, props.config));
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
        initData = __spreadValues(__spreadValues({}, initData), arg);
        father = arg.father || father;
      }
      const container = document.createElement("div");
      const vm = createVNode(_sfc_main$2, __spreadValues({}, initData));
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
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", { class: "am-loading__card" }, [
  /* @__PURE__ */ createElementVNode("svg", {
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
  ]),
  /* @__PURE__ */ createElementVNode("span", null, "\u52A0\u8F7D\u4E2D")
], -1);
const _hoisted_4 = [
  _hoisted_3
];
const _sfc_main$1 = {
  props: {
    destroySelf: Function
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
            realShow.value ? (openBlock(), createElementBlock("div", _hoisted_2, _hoisted_4)) : createCommentVNode("", true)
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
        content: "this is a message",
        type: "",
        duration: 2e3
      };
      let father = document.body;
      if (typeof arg === "string") {
        initData.content = arg;
      } else {
        initData = __spreadValues(__spreadValues({}, initData), arg);
        father = arg.father || father;
      }
      const container = document.createElement("div");
      const vm = createVNode(_sfc_main$1, __spreadValues({}, initData));
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
      const vm = createVNode(_sfc_main, __spreadValues({}, options));
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
    e2.readyState == "complete" && (e2.onreadystatechange = null, d2());
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
