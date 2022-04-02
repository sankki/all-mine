<template>
    <div
        class="am-form-item"
        :class="labelClass"
    >
        <div
            class="am-form-item__hd"
            :style="labelHdStyle"
        >
            <span>{{ label }}</span>
        </div>
        <div class="am-form-item__bd">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, inject } from 'vue';
const form = inject('form');
console.log(form);

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    labelWidth: {
        type: String,
        default: '',
    },
    position: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
})
const labelClass = computed(() => {
    return {
        [`is-${props.position || form.props.labelWidth}`]: true,
        'is-required': props.required,
        [`is-${form.props.scene}`]: form.props.scene,
    };  
})
const labelHdStyle = computed(() => {
    const position = props.position || form.props.labelWidth;
    return {
        width: position !== 'top' ? `${props.labelWidth || form.props.labelWidth}` : '100%',
    };
})
</script>

<style lang="scss">
.am-form-item {
    // 默认样式
    display: flex;
    &__hd {
        line-height: 30px;
        display: flex;
        padding-right: 12px;
        font-size: 14px;
        color: var(--c-main);
    }
    &__bd {
        display: flex;
    }

    // 文字居上
    &.is-top {
        flex-wrap: wrap;
        .am-form-item__hd {
            display: flex;
        }
    }
    // 文字居左
    &.is-left {

    }
    // 文字居右
    &.is-right {
        .am-form-item__hd {
            justify-content: flex-end;
        }
    }
    // 必须
    &.is-required {
        .am-form-item__hd {
            > span {
                position: relative;
                &:before {
                    content: '*';
                    position: absolute;
                    left: -10px;
                    color: var(--c-fail);
                    font-family: SimSun,sans-serif;
                    font-size: 14px;
                }
            }
        }
    }

    &.is-dark {
        .am-form-item__hd {
            color: var(--cd-main);
        }
        &.is-required {
            .am-form-item__hd {
                &:before {
                    color: var(--cd-fail);
                }
            }
        }
    }
}
</style>
