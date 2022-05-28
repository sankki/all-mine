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
import { computed, toRefs, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, withDirectives, normalizeClass, createBlock, createCommentVNode, renderSlot, ref, onMounted, watch, withKeys, provide, defineComponent, h, Fragment, renderList, toDisplayString, getCurrentInstance, inject, onUnmounted, createVNode, Transition, withCtx, vShow, nextTick, resolveComponent, resolveDirective, reactive, createTextVNode, normalizeProps, guardReactiveProps, withModifiers, onBeforeUnmount, render } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$r = ["xlink:href"];
const _sfc_main$v = {
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
        }, null, 8, _hoisted_1$r)
      ], 4);
    };
  }
};
var AmIcon = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-25ad101c"]]);
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
var index_vue_vue_type_style_index_0_lang$r = "";
const _hoisted_1$q = {
  key: 1,
  class: "am-button__content"
};
const _sfc_main$u = {
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
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const vClickanime = clickanime;
    const className = computed(() => ({
      "is-disabled": props.disabled,
      "is-selected": props.selected,
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
      if (props.disabled) {
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
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_1$q, [
          renderSlot(_ctx.$slots, "default")
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
var index_vue_vue_type_style_index_0_lang$q = "";
const _hoisted_1$p = { class: "am-input__inner" };
const _hoisted_2$f = ["readOnly", "placeholder", "value", "autocomplete", "onKeyup"];
const _hoisted_3$b = ["readOnly", "type", "value", "placeholder", "autocomplete", "onKeyup"];
const _sfc_main$t = {
  props: {
    value: String,
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
        createElementVNode("div", _hoisted_1$p, [
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
var index_vue_vue_type_style_index_0_lang$p = "";
const _hoisted_1$o = { class: "am-table" };
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
const _sfc_main$s = {
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
        bd.value.offsetWidth;
        bd.value.firstChild.getBoundingClientRect();
        scrollBarWidth.value = bd.value.offsetWidth - bd.value.firstChild.offsetWidth - 2;
        console.log("# scrollBarWidth", scrollBarWidth.value);
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
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
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
const _hoisted_1$n = { class: "am-table-column" };
const _sfc_main$r = {
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
    console.log("ins", ins);
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
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
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
var index_vue_vue_type_style_index_0_lang$o = "";
const _hoisted_1$m = { class: "am-popover" };
const _sfc_main$q = {
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
      return openBlock(), createElementBlock("div", _hoisted_1$m, [
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
var index_vue_vue_type_style_index_0_lang$n = "";
const _hoisted_1$l = { class: "am-tab" };
const _hoisted_2$d = ["onClick"];
const _sfc_main$p = {
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
    value: null
  },
  emits: ["update:value"],
  setup(__props, { emit }) {
    const clickTab = (item) => {
      emit("update:value", item.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (item, index2) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass([{
              "is-active": item.value === __props.value
            }, "am-tab__item"]),
            key: index2,
            onClick: ($event) => clickTab(item)
          }, [
            createElementVNode("span", null, toDisplayString(item.label), 1)
          ], 10, _hoisted_2$d);
        }), 128))
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$m = "";
const _hoisted_1$k = { class: "am-dropdown__trigger-icon" };
const _sfc_main$o = {
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
      console.log("\u89E6\u53D1\u4E86");
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
              createElementVNode("div", _hoisted_1$k, [
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
var index_vue_vue_type_style_index_0_lang$l = "";
const _hoisted_1$j = {
  key: 0,
  class: "am-select__placeholder"
};
const _hoisted_2$c = {
  key: 2,
  class: "am-select__content am-select__content-alone"
};
const _hoisted_3$9 = {
  key: 3,
  class: "am-select__content am-select__content-multiple"
};
const _sfc_main$n = {
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
        createVNode(_sfc_main$o, {
          scene: __props.scene,
          "popover-box-class": "am-select__popover",
          ref_key: "dropdownCm",
          ref: dropdownCm
        }, {
          trigger: withCtx(() => [
            !unref(selectedItem) || __props.multiple && !unref(selectedItem).length ? (openBlock(), createElementBlock("p", _hoisted_1$j, toDisplayString(__props.placeholder), 1)) : createCommentVNode("", true),
            _ctx.$slots.selected ? renderSlot(_ctx.$slots, "selected", {
              key: 1,
              selectedItem: unref(selectedItem)
            }) : !__props.multiple ? (openBlock(), createElementBlock("div", _hoisted_2$c, toDisplayString(unref(selectedItem) ? unref(selectedItem).label : ""), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$9, [
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
const _sfc_main$m = {
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
var index_vue_vue_type_style_index_0_lang$k = "";
const _hoisted_1$i = {
  key: 1,
  class: "am-tooltip__tip-span"
};
const _sfc_main$l = {
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
    const popEl = ref(null);
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
    });
    const onMouseEnter = () => {
      if (props.trigger !== "hover")
        return;
      popShow.value = true;
    };
    const onMouseLeave = () => {
      if (props.trigger !== "hover")
        return;
      popShow.value = false;
    };
    const check = async () => {
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
          style: normalizeStyle(unref(tipStyle)),
          onMouseenter: onMouseEnter,
          onMouseleave: onMouseLeave
        }, [
          createVNode(Transition, {
            name: "am-tooltip-in",
            onAfterLeave: afterLeave
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                ref_key: "popEl",
                ref: popEl,
                class: "am-tooltip__tip-inner",
                style: normalizeStyle(`transform: translate(${unref(tipX)},${unref(tipY)});padding: ${__props.margin}`)
              }, [
                _ctx.$slots.tip ? renderSlot(_ctx.$slots, "tip", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_1$i, toDisplayString(__props.content), 1))
              ], 4), [
                [vShow, popShow.value]
              ])
            ]),
            _: 3
          })
        ], 38)
      ], 544);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$j = "";
const _hoisted_1$h = { key: 0 };
const _hoisted_2$b = {
  key: 2,
  class: "am-divider__line"
};
const _sfc_main$k = {
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
        __props.content ? (openBlock(), createElementBlock("span", _hoisted_1$h, toDisplayString(__props.content), 1)) : __props.icon ? (openBlock(), createBlock(_component_AmIcon, {
          key: 1,
          name: __props.icon,
          size: __props.size
        }, null, 8, ["name", "size"])) : __props.showLine ? (openBlock(), createElementBlock("i", _hoisted_2$b)) : createCommentVNode("", true)
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
var index_vue_vue_type_style_index_0_lang$i = "";
const _hoisted_1$g = { class: "am-popup__inner" };
const _hoisted_2$a = {
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
const _sfc_main$j = {
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
              createElementVNode("div", _hoisted_1$g, [
                _ctx.$slots.hd || __props.title ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
                  __props.title ? (openBlock(), createElementBlock("div", _hoisted_3$8, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "hd"),
                  __props.showCloseBtn ? (openBlock(), createBlock(_sfc_main$u, {
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
var index_vue_vue_type_style_index_0_lang$h = "";
const _hoisted_1$f = ["aria-valuenow"];
const _hoisted_2$9 = {
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
const _sfc_main$i = {
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
        __props.type === "line" ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
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
      ], 10, _hoisted_1$f);
    };
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        var value = array[index2];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (iteratee(array[index2], index2, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (!predicate(array[index2], index2, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (comparator(value, array[index2])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index2];
      }
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array[index2], index2, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (comparator(array[index2], value)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index2, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index2 = -1, length = array.length;
      while (++index2 < length) {
        var current = iteratee(array[index2]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n2, iteratee) {
      var index2 = -1, result = Array(n2);
      while (++index2 < n2) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index2 = -1, length = strSymbols.length;
      while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index2 = strSymbols.length;
      while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index2 = -1, length = array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index2] = PLACEHOLDER;
          result[resIndex++] = index2;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index2 = fromIndex + 1;
      while (index2--) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return index2;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index2 = string.length;
      while (index2-- && reWhitespace.test(string.charAt(index2))) {
      }
      return index2;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
      var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer2 = moduleExports ? context.Buffer : undefined$1, Symbol = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1, symIterator = Symbol ? Symbol.iterator : undefined$1, symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e2) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
      var symbolProto = Symbol ? Symbol.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index2 += dir;
            var iterIndex = -1, value = array[index2];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        return index2 < 0 ? undefined$1 : data[index2][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index2][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index2 = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index2 < length) {
          this.add(values2[index2]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n2) {
        return shuffleSelf(copyArray(array), baseClamp(n2, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index2 = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index2 < length) {
          result2[index2] = skip ? undefined$1 : get(object, paths[index2]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index2, collection2) {
          result2 = !!predicate(value, index2, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index2 = -1, length = array.length;
        while (++index2 < length) {
          var value = array[index2], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index2, collection2) {
          if (predicate(value, index2, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index2 = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index2 < length) {
          var value = array[index2];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index2 = 0, length = path.length;
        while (object != null && index2 < length) {
          object = object[toKey(path[index2++])];
        }
        return index2 && index2 == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index2 = -1, seen = caches[0];
        outer:
          while (++index2 < length && result2.length < maxLength) {
            var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index2 = matchData.length, length = index2, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index2--) {
          var data = matchData[index2];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index2 < length) {
          data = matchData[index2];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index2 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index2] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n2) {
        var length = array.length;
        if (!length) {
          return;
        }
        n2 += n2 < 0 ? length : 0;
        return isIndex(n2, length) ? array[n2] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index2 = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index2, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index2 = -1, length = paths.length, result2 = {};
        while (++index2 < length) {
          var path = paths[index2], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index2 < length) {
          var fromIndex = 0, value = values2[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index2 = indexes[length];
          if (length == lastIndex || index2 !== previous) {
            var previous = index2;
            if (isIndex(index2)) {
              splice.call(array, index2, 1);
            } else {
              baseUnset(array, index2);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index2] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n2) {
        var result2 = "";
        if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n2 % 2) {
            result2 += string;
          }
          n2 = nativeFloor(n2 / 2);
          if (n2) {
            string += string;
          }
        } while (n2);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n2) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n2, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index2 < length) {
          var key = toKey(path[index2]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index2 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index2 = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index2 < length) {
          result2[index2] = array[index2 + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index2, collection2) {
          result2 = predicate(value, index2, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array[mid];
            if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index2 = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index2 || !eq(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index2 = fromRight ? length : -1;
        while ((fromRight ? index2-- : ++index2 < length) && predicate(array[index2], index2, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index2 = -1, result2 = Array2(length);
        while (++index2 < length) {
          var array = arrays[index2], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index2) {
              result2[index2] = baseDifference(result2[index2] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index2 < length) {
          var value = index2 < valsLength ? values2[index2] : undefined$1;
          assignFunc(result2, props[index2], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index2 < length) {
          var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
          if (result2) {
            if (index2 >= ordersLength) {
              return result2;
            }
            var order = orders[index2];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index2 = -1, length = source.length;
        array || (array = Array2(length));
        while (++index2 < length) {
          array[index2] = source[index2];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object, source, index2, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index2-- : ++index2 < length) {
            if (iteratee2(iterable[index2], index2, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index2 = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
          while (index2--) {
            args[index2] = arguments[index2];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index2 = findIndexFunc(collection, predicate, fromIndex);
          return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index2--) {
            var func = funcs[index2];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index2 = wrapper ? index2 : length;
          while (++index2 < length) {
            func = funcs[index2];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
            while (++index3 < length) {
              result2 = funcs[index3].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length;
          while (index2--) {
            args[index2] = arguments[index2];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index2 < arrLength) {
          var arrValue = array[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key = objProps[index2];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key = objProps[index2];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e2) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index2 = -1, length = transforms.length;
        while (++index2 < length) {
          var data = transforms[index2], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index2 = -1, length = path.length, result2 = false;
        while (++index2 < length) {
          var key = toKey(path[index2]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index2 != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index2;
        if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
          return eq(object[index2], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index2 < length) {
            array[index2] = args[start + index2];
          }
          index2 = -1;
          var otherArgs = Array2(start + 1);
          while (++index2 < start) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index2 = indexes[length];
          array[length] = isIndex(index2, arrLength) ? oldArray[index2] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index2 = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index2 < size2) {
          var rand = baseRandom(index2, lastIndex), value = array[rand];
          array[rand] = array[index2];
          array[index2] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e2) {
          }
          try {
            return func + "";
          } catch (e2) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index2 < length) {
          result2[resIndex++] = baseSlice(array, index2, index2 += size2);
        }
        return result2;
      }
      function compact(array) {
        var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index2 = length;
        while (index2--) {
          args[index2 - 1] = arguments[index2];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array, n2 < 0 ? 0 : n2, length);
      }
      function dropRight(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length - n2;
        return baseSlice(array, 0, n2 < 0 ? 0 : n2);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length - 1;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index2 < length) {
          var pair = pairs[index2];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseIndexOf(array, value, index2);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = index2 < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index2) : baseFindIndex(array, baseIsNaN, index2, true);
      }
      function nth(array, n2) {
        return array && array.length ? baseNth(array, toInteger(n2)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index2) {
          return isIndex(index2, length) ? +index2 : index2;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index2 = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index2 < length) {
          var value = array[index2];
          if (predicate(value, index2, array)) {
            result2.push(value);
            indexes.push(index2);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value);
          if (index2 < length && eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n2, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array, 0, n2 < 0 ? 0 : n2);
      }
      function takeRight(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length - n2;
        return baseSlice(array, n2 < 0 ? 0 : n2, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index2) {
          return arrayMap(array, baseProperty(index2));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index2] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n2, guard) {
        if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n2);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n2, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n2, guard) {
        n2 = guard ? undefined$1 : n2;
        n2 = func && n2 == null ? func.length : n2;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n2);
      }
      function before(n2, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n2 <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index2 = -1, length = nativeMin(args.length, funcsLength);
          while (++index2 < length) {
            args[index2] = transforms[index2].call(this, args[index2]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index2 = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index2 < length) {
          var source = sources[index2];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index2 = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index2 < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index2])];
          if (value === undefined$1) {
            index2 = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index2, object2) {
          return iteratee2(accumulator, value, index2, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index2) {
        word = word.toLowerCase();
        return result2 + (index2 ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n2, guard) {
        if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        return baseRepeat(toString(string), n2);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index2 = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index2 = result2.lastIndexOf(separator);
          if (index2 > -1) {
            result2 = result2.slice(0, index2);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e2) {
          return isError(e2) ? e2 : new Error2(e2);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index2 = -1;
          while (++index2 < length) {
            var pair = pairs[index2];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n2) {
        n2 = toInteger(n2);
        return baseRest(function(args) {
          return baseNth(args, n2);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n2, iteratee2) {
        n2 = toInteger(n2);
        if (n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return [];
        }
        var index2 = MAX_ARRAY_LENGTH, length = nativeMin(n2, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n2 -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index2 < n2) {
          iteratee2(index2);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber;
      lodash2.isObject = isObject;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index2) {
        LazyWrapper.prototype[methodName] = function(n2) {
          n2 = n2 === undefined$1 ? 1 : nativeMax(toInteger(n2), 0);
          var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n2, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n2, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n2) {
          return this.reverse()[methodName](n2).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index2) {
        var type = index2 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index2) {
        var takeName = "take" + (index2 ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index2) {
        var dropName = "drop" + (index2 ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
var index_vue_vue_type_style_index_0_lang$g = "";
const _hoisted_1$e = ["onClick"];
const _hoisted_2$8 = { class: "am-checkbox__box" };
const _hoisted_3$6 = {
  key: 0,
  class: "am-checkbox__text"
};
const _sfc_main$h = {
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
        const newValue = lodash.exports.cloneDeep(props.value);
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
        createElementVNode("div", _hoisted_2$8, [
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
      ], 10, _hoisted_1$e);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$f = "";
const _sfc_main$g = {};
const _hoisted_1$d = { class: "am-menu" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var AmMenu = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$1]]);
var index_vue_vue_type_style_index_0_lang$e = "";
const _hoisted_1$c = { class: "am-menu-item" };
const _hoisted_2$7 = { class: "am-menu-item__text" };
const _hoisted_3$5 = {
  key: 1,
  class: "am-menu-item__children"
};
const _sfc_main$f = {
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
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
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
          createElementVNode("div", _hoisted_2$7, [
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
var index_vue_vue_type_style_index_0_lang$d = "";
const _hoisted_1$b = { class: "am-pagination" };
const _hoisted_2$6 = { key: 1 };
const _sfc_main$e = {
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
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
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
              })) : (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString(item), 1))
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
var index_vue_vue_type_style_index_0_lang$c = "";
const _hoisted_1$a = { class: "am-logo" };
const _hoisted_2$5 = { class: "am-logo__main" };
const _hoisted_3$4 = ["src"];
const _hoisted_4$1 = { key: 1 };
const _hoisted_5 = {
  key: 0,
  class: "am-logo__sub"
};
const _sfc_main$d = {
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
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createElementVNode("div", _hoisted_2$5, [
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
var index_vue_vue_type_style_index_0_lang$b = "";
const _hoisted_1$9 = { class: "am-form" };
const _sfc_main$c = {
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
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$a = "";
const _hoisted_1$8 = { class: "am-form-item__bd" };
const _sfc_main$b = {
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
        createElementVNode("div", _hoisted_1$8, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$9 = "";
const _hoisted_1$7 = { class: "am-avatar" };
const _hoisted_2$4 = ["src"];
const _hoisted_3$3 = {
  key: 0,
  class: "am-avatar__name"
};
const _sfc_main$a = {
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
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createElementVNode("div", {
          class: normalizeClass(["am-avatar__avatar", {
            [`is-${__props.avatarSize}`]: true
          }])
        }, [
          __props.url ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: __props.url
          }, null, 8, _hoisted_2$4)) : (openBlock(), createBlock(AmIcon, {
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
var index_vue_vue_type_style_index_0_lang$8 = "";
const _sfc_main$9 = {};
const _hoisted_1$6 = { class: "am-list" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var AmList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render]]);
var index_vue_vue_type_style_index_0_lang$7 = "";
const _sfc_main$8 = {
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
var index_vue_vue_type_style_index_0_lang$6 = "";
const _hoisted_1$5 = {
  key: 0,
  class: "am-list-status__loading"
};
const _hoisted_2$3 = {
  key: 1,
  class: "am-list-status__end"
};
const _hoisted_3$2 = {
  key: 2,
  class: "am-list-status__empty"
};
const _sfc_main$7 = {
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
        __props.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
          createVNode(_component_AmIcon, {
            name: "loading1",
            size: "18px",
            color: "#aaa"
          }),
          createElementVNode("span", null, toDisplayString(__props.loadingText), 1)
        ])) : createCommentVNode("", true),
        __props.isEnd ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
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
var index_vue_vue_type_style_index_0_lang$5 = "";
const _sfc_main$6 = {
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
var index_vue_vue_type_style_index_0_lang$4 = "";
const _hoisted_1$4 = /* @__PURE__ */ createElementVNode("div", { class: "am-switch__switch" }, [
  /* @__PURE__ */ createElementVNode("i")
], -1);
const _hoisted_2$2 = {
  key: 0,
  class: "am-switch__text"
};
const _sfc_main$5 = {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    scene: {
      type: String,
      default: "light"
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
          [`is-${__props.scene}`]: __props.scene
        }]),
        onClick: handleClick
      }, [
        _hoisted_1$4,
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$3 = "";
const _hoisted_1$3 = ["onClick"];
const _hoisted_2$1 = { class: "am-radio__box" };
const _hoisted_3$1 = {
  key: 0,
  class: "am-radio__text"
};
const _sfc_main$4 = {
  props: {
    value: {
      type: Boolean
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
      if (props.label) {
        return props.value === props.label;
      }
      return props.value;
    });
    const handleClick = () => {
      if (props.label) {
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
        createElementVNode("div", _hoisted_2$1, [
          createVNode(Transition, { name: "am-radio-anime" }, {
            default: withCtx(() => [
              withDirectives(createVNode(AmIcon, {
                name: "check2",
                size: "12px"
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
      ], 10, _hoisted_1$3);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$2 = "";
const _sfc_main$3 = {
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
              })
            }, [
              __props.type ? (openBlock(), createBlock(AmIcon, {
                key: 0,
                name: unref(iconName),
                size: "20px"
              }, null, 8, ["name"])) : createCommentVNode("", true),
              createElementVNode("span", null, toDisplayString(__props.content), 1)
            ], 6), [
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
      console.log("instance", instance);
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
    width: "36px",
    height: "36px",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ createElementVNode("circle", {
      class: "path2",
      fill: "red",
      "stroke-width": "4",
      cx: "18",
      cy: "18",
      r: "13"
    }),
    /* @__PURE__ */ createElementVNode("circle", {
      class: "path",
      fill: "blue",
      "stroke-width": "4",
      cx: "18",
      cy: "18",
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
      console.log("instance", instance);
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
        console.log("\u6267\u884C\u4E86cancel");
      } else {
        props.confirm();
        console.log("\u6267\u884C\u4E86confirm");
      }
      props.destroySelf();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$j, {
          width: "480px",
          show: show.value,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => show.value = $event),
          title: __props.title,
          onAfterLeave: afterLeave
        }, {
          ft: withCtx(() => [
            createVNode(_sfc_main$u, { onClick: clickCancelBtn }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.cancelText), 1)
              ]),
              _: 1
            }),
            createVNode(_sfc_main$u, {
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
      console.log("instance", instance);
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
    app.component("AmTab", _sfc_main$p);
    app.component("AmButton", _sfc_main$u);
    app.component("AmInput", _sfc_main$t);
    app.component("AmTable", _sfc_main$s);
    app.component("AmTableColumn", _sfc_main$r);
    app.component("AmPopover", _sfc_main$q);
    app.component("AmSelect", _sfc_main$n);
    app.component("AmOption", _sfc_main$m);
    app.component("AmTooltip", _sfc_main$l);
    app.component("AmDivider", _sfc_main$k);
    app.component("AmPopup", _sfc_main$j);
    app.component("AmProgress", _sfc_main$i);
    app.component("AmCheckbox", _sfc_main$h);
    app.component("AmMenu", AmMenu);
    app.component("AmMenuItem", _sfc_main$f);
    app.component("AmPagination", _sfc_main$e);
    app.component("AmLogo", _sfc_main$d);
    app.component("AmForm", _sfc_main$c);
    app.component("AmFormItem", _sfc_main$b);
    app.component("AmAvatar", _sfc_main$a);
    app.component("AmList", AmList);
    app.component("AmListItem", _sfc_main$8);
    app.component("AmListStatus", _sfc_main$7);
    app.component("AmWaterfall", _sfc_main$6);
    app.component("AmDropdown", _sfc_main$o);
    app.component("AmSwitch", _sfc_main$5);
    app.component("AmRadio", _sfc_main$4);
    app.component("AmTag", _sfc_main$3);
    app.directive("clickoutside", ClickOutside);
    app.directive("clickanime", clickanime);
    app.use(AmMessage);
    app.use(AmLoading);
    app.use(AmDialog);
  },
  AmIcon,
  AmButton: _sfc_main$u,
  AmIcon,
  AmButton: _sfc_main$u,
  AmInput: _sfc_main$t,
  AmTable: _sfc_main$s,
  AmTableColumn: _sfc_main$r,
  AmPopover: _sfc_main$q,
  AmTab: _sfc_main$p,
  AmSelect: _sfc_main$n,
  AmOption: _sfc_main$m,
  AmTooltip: _sfc_main$l,
  AmDivider: _sfc_main$k,
  AmPopup: _sfc_main$j,
  AmProgress: _sfc_main$i,
  AmCheckbox: _sfc_main$h,
  AmMenu,
  AmMenuItem: _sfc_main$f,
  AmPagination: _sfc_main$e,
  AmLogo: _sfc_main$d,
  AmForm: _sfc_main$c,
  AmFormItem: _sfc_main$b,
  AmAvatar: _sfc_main$a,
  AmList,
  AmListItem: _sfc_main$8,
  AmWaterfall: _sfc_main$6,
  AmDropdown: _sfc_main$o,
  AmMessage,
  AmLoading,
  AmDialog,
  AmSwitch: _sfc_main$5,
  AmRadio: _sfc_main$4,
  AmTag: _sfc_main$3,
  AmListStatus: _sfc_main$7
};
export { index as default };
