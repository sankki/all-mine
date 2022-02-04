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
            ref="tipEl"
            :style="tipStyle"
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave"
        >
            <Transition name="am-tooltip-in" v-on:after-leave="afterLeave">
                <div
                    ref="popEl"
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
import { defineProps, ref, computed, onMounted, watch } from 'vue'
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
    // 风格
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
})
const tipEl = ref(null)
const triggerEl = ref(null)
const popEl = ref(null)
const popShow = ref(false)
const fatherScrollEls = ref([])
const ro = ref(null)
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
onMounted(() => {
    document.body.appendChild(tipEl.value)
})

const onMouseEnter = () => {
    if (props.trigger !== 'hover') return
    popShow.value = true
}
const onMouseLeave = () => {
    if (props.trigger !== 'hover') return
    popShow.value = false
}
const check = async () => {
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
    check()
    fatherScrollEls.value = getScrollBoxOfEl(triggerEl.value)
    fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.addEventListener('scroll', check)
    })
    // 窗口变化
    window.addEventListener('resize', check)
    ro.value = observeElResize(triggerEl.value, check)
}
const endObserve = () => {
    fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.removeEventListener('scroll', check)
    })
    window.removeEventListener('resize', check)
    offObserveElResize(triggerEl.value, ro.value)
}
watch(
    () => popShow.value,
    () => {
        if (popShow.value) {
            zIndex.value = popupManager.getZIndex()
            startObserve()
        } else {
            endObserve()
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
        &-inner {
            pointer-events: initial;
        }
        &-span {
            background: #000;
            color: #fff;
            padding: 2px 6px;
            border-radius: 2px;
            font-size: 12px;
            display: inherit;
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