<template>
    <div 
        class="am-popup"
        :class="{
            [`is-${scene}`]: scene,
        }"
        ref="pop"
    >
        <!-- 遮掩层 -->
        <transition name="mask-anime">
            <div
                class="am-popup__mask"
                v-show="show"
                :style="'z-index:' + zIndex"
            ></div>
        </transition>
        <!-- 主体 -->
        <transition name="popup-anime" v-on:after-leave="afterLeave">
            <div class="am-popup__popup" :class="popupClass" :style="popupStyle" v-show="show">
                <div class="am-popup__inner">
                    <div class="am-popup__hd" v-if="$slots.hd || title">
                        <div class="am-popup__title" v-if="title">{{ title }}</div>
                        <slot name="hd" />
                        <AmButton
                            mode="text"
                            icon="close"
                            icon-size="16px"
                            :scene="scene"
                            size="small"
                            v-if="showCloseBtn"
                            class="am-popup__close"
                            @click="close"
                        />
                    </div>
                    <div class="am-popup__bd">
                        <slot />
                    </div>
                    <div class="am-popup__ft" v-if="$slots.ft">
                        <slot name="ft" />
                    </div>
                </div>
                <div class="am-popup__cancel-part" @click="clickMask"></div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {
    defineProps, ref, computed, watch, onMounted, defineEmits, onUnmounted
} from 'vue';
import AmButton from '../button/index.vue';
import popupManager from '../../common/popup-manager';
import clickoutside from '../../directives/clickoutside/index';
const vClickoutside = clickoutside;
const emit = defineEmits(['update:show', 'after-leave']);

const props = defineProps({
    popupClass: {
        type: String,
        default: '',
    },
    // 显示
    show: {
        type: Boolean,
        default: true,
    },
    // 遮掩层
    mask: {
        type: Boolean,
        default: false,
    },
    // 标题
    title: {
        type: String,
        default: '',
    },
    // 关闭按钮
    showCloseBtn: {
        type: Boolean,
        default: true,
    },
    // 宽度
    width: {
        type: String,
        default: '',
    },
    // 高度
    height: {
        type: String,
        default: '',
    },
    // 点击mask关闭
    maskClose: {
        type: Boolean,
        default: true,
    },
    // 场景
    scene: {
        type: String,
        default: 'light', // light dark
    },
});
const zIndex = ref(popupManager.getZIndex());
const popupStyle = computed(() => ({
    width: props.width,
    height: props.height,
    zIndex: zIndex.value,
}));
watch(
    () => props.show,
    () => {
        props.show && (zIndex.value = popupManager.getZIndex());
    },
);
const pop = ref(null);
let popEl = null;
onMounted(() => {
    popEl = pop.value;
    document.body.appendChild(pop.value);
});
onUnmounted(() => {
    popEl && popEl.remove();
})


const close = () => {
    emit('update:show', false);
};
const afterLeave = () => {
    emit('after-leave', this);
};
const clickMask = () => {
    if (props.maskClose) {
        close();
    }
};
</script>

<style lang="scss">
.am-popup {
    color: var(--c-main);
    // 阴影
    &__mask {
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        &.mask-anime-enter-active,
        &.mask-anime-leave-active {
            transition: opacity .2s;
        }
        &.mask-anime-enter-from,
        &.mask-anime-leave-to {
            opacity: 0;
        }
    }
    &__popup {
        position: fixed;
        max-height: 90vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, calc(-50%));
        &.popup-anime-enter-active {
            transition: transform 0s, opacity .2s;
        }
        &.popup-anime-leave-active {
            transition: transform .2s, opacity 0.2s;
        }
        &.popup-anime-enter-from,
        &.popup-anime-leave-to {
            transform: translate(-50%, calc(-50% - 50px));
            opacity: 0;
        }
    }
    &__inner {
        width: 100%;
        height: 100%;
        max-height: 90vh;
        overflow: auto;
        display: flex;
        flex-direction: column;
        transform: translateY(calc(0.3 * (100% - 90vh)));
        background: #fff;
        border-radius: 2px;
        position: relative;
        z-index: 3;
    }
    &__hd {
        // position: relative;
    }
    &__title {
        margin: auto;
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 16px 24px 0 24px;
        color: var(--c-main);
    }
    &__close {
        position: absolute;
        right: 16px;
        top: 12px;
        margin: 0;
        z-index: 10;
        width: 20px;
        height: 20px;
        padding: 0!important;
    }
    &__bd {
        flex: 1;
        padding: 16px 24px;
    }
    &__ft {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 24px 24px;
        padding-top: 0;
        > .am-button {
            margin-left: 8px;
        }
    }
    &__cancel-part {
        width: 200vw;
        height: 200vh;
        position: absolute;
        top: -100vh;
        left: -100vw;
        z-index: 2;
    }

    &.is-dark {
        color: var(--cd-main);
        .am-popup__inner {
            background: #222;
        }
        .am-popup__title {
            color: var(--cd-main);
        }
    }
}
</style>
