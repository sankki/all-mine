<template>
    <div
        class="am-button"
        :class="className"
        @click="handleClick"
        v-clickanime="'is-down'"
    >
        <!-- 图标 -->
        <AmIcon :class="iconClass" v-if="icon" :name="icon" :size="iconSize" />
        <!-- 内容 -->
        <div class="am-button__content" v-if="$slots.default">
            <slot />
        </div>
    </div>
</template>

<script setup>
import {
    defineProps, computed, defineEmits,
} from 'vue';
import AmIcon from '../icon/index.vue';
import clickanime from '../../directives/clickanime/index';

const vClickanime = clickanime;
const props = defineProps({
    type: {
        type: String,
        default: 'default',
    },
    // 模式
    mode: {
        type: String,
        default: 'default',
    },
    // 尺寸
    size: {
        type: String,
        default: 'medium', // large 40px medium 32px small 24px mini 14px
    },
    // 形状
    sharp: {
        type: String,
        default: 'rectangle', // rectangle 长方形 round 圆角 circle 圆形 square 正方形
    },
    // 场景
    scene: {
        type: String,
        default: 'light', // light dark
    },
    // 功用
    function: {
        type: String,
        default: '', // confirm 确认 cancel 取消
    },
    // 选中
    selected: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    // 添加图标
    icon: {
        type: String,
        default: '',
    },
    iconSize: {
        type: String,
        default: '14px',
    },
    iconPosition: {
        type: String,
        default: 'front', // 有front和back
    },
});

const className = computed(() => ({
    'is-disabled': props.disabled,
    'is-selected': props.selected,
    [`is-${props.mode}`]: props.mode,
    [`is-${props.size}`]: props.size,
    [`is-${props.sharp}`]: props.sharp,
    [`is-${props.scene}`]: props.scene,
    [`is-${props.function}`]: props.function,
}));
const iconClass = computed(() => ({
    [`is-${props.iconPosition}`]: props.iconPosition,
}));

const emit = defineEmits(['click']);
const handleClick = (e) => {
    if (props.disabled) {
        e.preventDefault();
        return;
    }
    emit('click', e);
};
</script>

<style lang="scss">
.am-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    transition: background .1s, border .1s, color .1s, transform .1s, box-shadow .1s;
    transition-timing-function: linear;
    box-sizing: border-box;
    line-height: 1;
    position: relative;
    overflow: hidden;
    color: var(--c-main);
    &:after {
        content: '';
        display: inline-flex;
        width: 120%;
        height: 120%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        transition: background .2s;
    }
    &__content {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 2;
    }
    .am-icon {
        order: 5;
    }
    .am-icon.is-front + &__content {
        margin-left: 4px;
        order: 6;
    }
    .am-icon.is-back + &__content {
        margin-right: 4px;
        order: 4;
    }
    // 按钮不可用
    &.is-disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: .4;
    }

    // 明朗模式
    &.is-light {
        &.is-default {
            background: var(--c-bg);
            color: var(--c-main);
            border: 1px solid var(--c-border);
            &:hover {
                &:after {
                    background: rgba(0,0,0,.06);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(0,0,0,.12);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }
        &.is-primary {
            background: var(--c-primary);
            color: #fff;
            &:hover {
                &:after {
                    background: rgba(0,0,0,.2);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(0,0,0,.4);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }
        &.is-plain {
            border: 1px solid var(--c-primary);
            color: var(--c-primary);
            background: #fff;
            &:hover {
                &:after {
                    background: rgba(0,0,0,.08);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(0,0,0,.16);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }
        &.is-text {
            &:hover {
                &:after {
                    background: rgba(0,0,0,.06);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(0,0,0,.12);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }

        // 功能性
        &.is-confirm {
            &.is-primary {
                background: var(--c-success);
            }
            &.is-plain {
                border: 1px solid var(--c-success);
                color: var(--c-success);
            }
        }
        &.is-cancel {
            &.is-primary {
                background: var(--c-fail);
            }
            &.is-plain {
                border: 1px solid var(--c-fail);
                color: var(--c-fail);
            }
        }
    }
    // 暗黑模式
    &.is-dark {
        &.is-default {
            background: var(--cd-bg);
            color: var(--cd-main);
            border: 1px solid var(--cd-border);
             &:hover {
                &:after {
                    background: rgba(255,255,255,.06);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(255,255,255,.12);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }
        &.is-primary {
            background: var(--cd-primary);
            color: #fff;
            &:hover {
                &:after {
                    background: rgba(0,0,0,.15);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(0,0,0,.3);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }
        &.is-plain {
            background: var(--cd-bg);
            border: 1px solid var(--cd-primary);
            color: var(--cd-primary);
             &:hover {
                &:after {
                    background: rgba(255,255,255,.06);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(255,255,255,.12);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }
        &.is-text {
            color: var(--cd-main);
             &:hover {
                &:after {
                    background: rgba(255,255,255,.16);
                }
            }
            &.is-down {
                &:after {
                    background: rgba(255,255,255,.24);
                }
            }
            &.is-selected {
                // 暂缺
            }
        }

        // 功能性
        &.is-confirm {
            &.is-primary {
                background: var(--cd-success);
            }
            &.is-plain {
                border: 1px solid var(--cd-success);
                color: var(--cd-success);
            }
        }
        &.is-cancel {
            &.is-primary {
                background: var(--cd-fail);
            }
            &.is-plain {
                border: 1px solid var(--cd-fail);
                color: var(--cd-fail);
            }
        }
    }

    // 尺寸
    &.is-large {
        height: 40px;
        line-height: 40px;
        padding: 0 12px;
        font-size: 16px;
        min-width: 40px;
    }
    &.is-medium {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        min-width: 30px;
        font-size: 14px;
    }
    &.is-small {
        font-size: 13px;
        height: 24px;
        line-height: 24px;
        padding: 0 6px;
        min-width: 24px;
    }
    &.is-mini {
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        padding: 0 4px;
        min-width: 16px;
    }

    // 形状
    &.is-rectangle {
        border-radius: 2px;
    }
    &.is-square {
        &.is-large {
            width: 40px;
            border-radius: 2px;
            padding: 0;
        }
        &.is-medium {
            width: 32px;
            border-radius: 2px;
            padding: 0;
        }
        &.is-small {
            width: 24px;
            border-radius: 2px;
            padding: 0;
        }
        &.is-mini {
            width: 16px;
            border-radius: 2px;
            padding: 0;
        }
    }
    &.is-round {
        &.is-large {
            border-radius: 20px;
        }
        &.is-medium {
            border-radius: 16px;
        }
        &.is-small {
            border-radius: 12px;
        }
        &.is-mini {
            border-radius: 8px;
        }
    }
    &.is-circle {
        &.is-large {
            width: 40px;
            border-radius: 20px;
            padding: 0;
        }
        &.is-medium {
            width: 32px;
            border-radius: 16px;
            padding: 0;
        }
        &.is-small {
            width: 24px;
            border-radius: 12px;
            padding: 0;
        }
        &.is-mini {
            width: 16px;
            border-radius: 8px;
            padding: 0;
        }
    }

    /**
        风格
        default   常规
        primary   色块
        plain     描线

        环境
        light     明朗
        dark      黑暗

        大小
        medium   默认 26px
        small     小按钮 24px
        mini      迷你按钮 16px

        形状
        rectangle 长方形
        round     圆角
        circle    圆形
        square    正方形
    */
}
</style>
