<template>
    <div
        class="am-tooltip"
        ref="triggerEl"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <slot />
        <div
            class="am-tooltip__tip"
            :class="{
                [`is-${scene}`]: true,
            }"
            v-if="loaded"
            ref="tipEl"
            :style="tipStyle"
        >
            <Transition name="am-tooltip-in" v-on:after-leave="afterLeave">
                <div
                    class="am-tooltip__tip-inner"
                    v-show="popShow"
                    :style="`transform: translate(${tipX},${tipY});padding: ${margin}`"
                >
                    <slot name="tip" v-if="$slots.tip"></slot>
                    <span class="am-tooltip__tip-span" v-else>
                        {{ content }}
                    </span>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import {
    getScrollBoxOfEl,
    observeElResize,
    offObserveElResize,
} from '../../utils/dom'
import { defineProps, ref, computed, onMounted, watch, onUnmounted, nextTick, onBeforeUnmount } from 'vue'
import popupManager from '../../common/popup-manager'

const props = defineProps({
    content: String,
    // 触发方式
    trigger: {
        type: String,
        default: 'hover', // 悬停 点击
    },
    // 气泡位置
    direction: {
        type: String,
        default: 'top', // left\top\right\bottom\bottomRight
    },
    // 禁用
    disabled: {
        type: Boolean,
        default: false,
    },
    // 模式
    mode: {
        type: String,
        default: '',
    },
    // tooltip类
    tooltipClass: {
        type: String,
        default: '',
    },
    width: Number,
    height: Number,
    margin: {
        type: String,
        default: '',
    },
    // 风格
    scene: {
        type: String,
        default: 'light', // light dark
    }
})
const tipEl = ref(null);
let tipElement = null;
const loaded = ref(false);
const triggerEl = ref(null)
const popShow = ref(false)
const fatherScrollEls = ref([])
let ro = null;
const zIndex = ref(popupManager.getZIndex())
// 原点的坐标
const rLeft = ref(0)
const rTop = ref(0)
const rWidth = ref(0)
const rHeight = ref(0)
// 黑色块的偏移
const dirctionArr = computed(() => {
    return props.direction.toLowerCase().match(/left|right|bottom|top/g)
})
const tipX = computed(() => {
    if (dirctionArr.value[0] === 'left') return `calc(-100% - 0px)`
    if (dirctionArr.value[0] === 'right') return `0px`
    if (dirctionArr.value[0] === 'top' || dirctionArr.value[0] === 'bottom') {
        if (dirctionArr.value[1] === 'left') return '0'
        if (dirctionArr.value[1] === 'right') return `-100%`
        return '-50%'
    }
    return '0'
})
const tipY = computed(() => {
    if (dirctionArr.value[0] === 'top') return `calc(-100% - 0px)`
    if (dirctionArr.value[0] === 'bottom') return `0px`
    if (dirctionArr.value[0] === 'left' || dirctionArr.value[0] === 'right') {
        if (dirctionArr.value[1] === 'top') return '0'
        if (dirctionArr.value[1] === 'bottom') return `-100%`
        return '-50%'
    }
    return '0'
})
const tipStyle = computed(() => {
    return {
        transform: `translate(${rLeft.value}px,${rTop.value}px)`,
        zIndex: zIndex.value,
    }
})
const loadDom = () => {
    if(tipElement) return;
    document.body.appendChild(tipEl.value);
    tipElement = tipEl.value;
}
onUnmounted(() => {
    tipElement && tipElement.remove();
    endObserve();
})

const onMouseEnter = async () => {
    if(props.disabled) return;
    if (props.trigger !== 'hover') return;
    loaded.value = true;
    await nextTick();
    loadDom();
    popShow.value = true;
}
const onMouseLeave = () => {
    if (props.trigger !== 'hover') return;
    // loaded.value = false;
    popShow.value = false;
}
const check = async () => {
    if(!triggerEl.value) return;
    const triggerRect = triggerEl.value.getBoundingClientRect()

    const { width, height } = triggerRect
    let { left, top } = triggerRect
    rWidth.value = width
    rHeight.value = height
    const direction1 = dirctionArr.value[0]
    const direction2 = dirctionArr.value[1]
    switch (direction1) {
        case 'left':
            if (direction2 === 'top') break
            else if (direction2 === 'bottom') top += height
            else top += 0.5 * height
            break
        case 'right':
            left += width
            if (direction2 === 'top') break
            else if (direction2 === 'bottom') top += height
            else top += 0.5 * height
            break
        case 'top':
            if (direction2 === 'left') break
            else if (direction2 === 'right') left += width
            else left += 0.5 * width
            break
        case 'bottom':
            top += height
            if (direction2 === 'left') break
            else if (direction2 === 'right') left += width
            else left += 0.5 * width
            break
        default:
            break
    }
    rLeft.value = left
    rTop.value = top
}
const afterLeave = async () => {}
const startObserve = () => {
    check();
    // 监听父级祖先级滚动
    fatherScrollEls.value = getScrollBoxOfEl(triggerEl.value);
    fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.addEventListener('scroll', check)
    })
    // 窗口变化
    window.addEventListener('resize', check);
    // 监听目标元素变化
    ro = observeElResize(triggerEl.value, () => {
        if(!triggerEl.value) {
            tipElement.remove();
        }else {
            check();
        }
    })
}
const endObserve = () => {
    fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.removeEventListener('scroll', check);
    })
    window.removeEventListener('resize', check);
    if(triggerEl.value && ro) offObserveElResize(triggerEl.value, ro);
}
watch(
    () => popShow.value,
    () => {
        if (popShow.value) {
            zIndex.value = popupManager.getZIndex()
            startObserve()
        } else {
            endObserve();
        }
    }
)
</script>

<style lang="scss">
.am-tooltip {
    &__tip {
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        user-select: none;
        &-inner {
            pointer-events: initial;
        }
        &-span {
            background: var(--cd-bg);
            color: var(--cd-main);
            padding: 2px 6px;
            border-radius: 2px;
            font-size: 12px;
            display: inherit;
        }

        &.is-light {

        }
        &.is-dark {
            .am-tooltip__tip-span {
                background: var(--c-bg);
                color: var(--c-main);
            }
        }
    }
    .am-tooltip-in-leave-active {
        animation: am-tooltip-in 0.2s reverse;
    }
    @keyframes am-tooltip-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
}
</style>