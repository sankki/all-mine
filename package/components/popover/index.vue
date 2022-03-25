<template>
    <div class="am-popover">
        <div class="am-popover__trigger" ref="linkEl">
            <slot name="trigger"></slot>
        </div>
        <div 
            ref="ap" 
            class="am-popover__box" 
            :style="apStyle" 
            v-show="apShow"
            :class="popoverBoxClass"
        >
            <transition
                name="am-popover-pop-anime"
                @after-leave="onPopHide"
                @after-enter="onPopShow"
            >
                <div
                    class="am-popover__box-pop"
                    v-show="popShow"
                    ref="popEl"
                    :style="popStyle"
                >
                    <slot />
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import {
    defineProps,
    computed,
    watch,
    defineEmits,
    onMounted,
    ref,
    nextTick,
} from 'vue';
import {
    getScrollBoxOfEl,
    observeElResize,
    offObserveElResize,
    getHiddenDomRect,
} from '../../utils/dom';
import popupManager from '../../common/popup-manager';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    xDirection: {
        type: String,
        default: 'left',
    },
    yDirection: {
        type: String,
        default: 'auto',
    },
    // ap宽
    width: {
        type: Number,
    },
    // ap高
    height: {
        type: Number,
    },
    // ap保留宽度
    apWidthFollowFather: {
        type: Boolean,
        default: true,
    },
    popoverBoxClass: {
        type: String,
        default: '',
    }
});
const emit = defineEmits(['update:show', 'after-hide', 'after-enter']);

// 关联元素
const linkEl = ref(null);
const ap = ref(null);
onMounted(() => {
    document.body.appendChild(ap.value);
});

// 下拉框显示隐藏
const apShow = ref(false); // 一级隐藏
const popShow = ref(false); // 二级隐藏
const fatherScrollEls = ref([]);
const popEl = ref(null);
const popWidth = ref();
const popHeight = ref();
const x = ref();
const y = ref();
const popOrigin = ref('top');
const ro = ref();
const zIndex = ref(popupManager.getZIndex());
watch(
    () => props.show,
    () => {
        if (props.show) {
            // 开始监听
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
    },
);
const check = async () => {
    await nextTick();
    const popRect = getHiddenDomRect(popEl.value);
    // 获取关联元素的大小偏移
    const linkRect = linkEl.value.getBoundingClientRect();
    const {
        left, top, width, height,
    } = linkRect;
    const { apWidthFollowFather } = props;
    const bottom = window.innerHeight - top - height;
    // 计算弹出层宽高
    popWidth.value = props.width
        || `${
            popRect.width < width && apWidthFollowFather ? width : popRect.width
        }`;
    popHeight.value = props.height || `${popRect.height}`;
    // 计算 x
    const leftX = left;
    const rightX = left - popWidth.value + width;
    if (props.xDirection === 'left') {
        x.value = leftX;
    } else if (props.xDirection === 'right') {
        x.value = rightX;
    }
    // 计算 y
    const topY = top - popHeight.value - 6;
    const bottomY = top + height + 6;
    if (props.yDirection === 'top') {
        y.value = topY;
    } else if (props.yDirection === 'bottom') {
        y.value = bottomY;
    } else if (props.yDirection === 'auto') {
        // 上足下不足 走上
        if (bottom < popHeight.value && top > popHeight.value) {
            y.value = topY;
            popOrigin.value = 'bottom';
        } else {
            y.value = bottomY;
            popOrigin.value = 'top';
        }
    }
};
const startObserve = () => {
    check();
    fatherScrollEls.value = getScrollBoxOfEl(linkEl.value);
    fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.addEventListener('scroll', check);
    });
    // 窗口变化
    window.addEventListener('resize', check);
    ro.value = observeElResize(linkEl.value, check);
};
const endObserve = () => {
    fatherScrollEls.value.forEach((scrollBox) => {
        scrollBox.removeEventListener('scroll', check);
    });
    window.removeEventListener('resize', check);
    offObserveElResize(linkEl.value, ro.value);
};
const apStyle = computed(() => {
    const obj = {};
    obj.transform = `translate(${x.value}px, ${y.value}px)`;
    obj.zIndex = zIndex.value;
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
    emit('after-hide');
};
const onPopShow = () => {
    emit('after-enter');
};
</script>

<style lang="scss">
.am-popover {
    &__box {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 20;
        width: auto;
        &-pop {
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            // border: 1px solid #ddd;
            background: #fff;
            border-radius: 4px;
        }
    }
}
.am-popover-pop-anime-enter-active {
    animation: am-popover-pop-in 0s;
}
.am-popover-pop-anime-leave-active {
    animation: am-popover-pop-in 0s reverse;
    animation-fill-mode: forwards;
}
@keyframes am-popover-pop-in {
    from {
        opacity: 0;
        transform: scaleY(0.8);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
}
</style>
