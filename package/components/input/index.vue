<template>
    <div
        class="am-input"
        :class="{
            'is-focus': isFocus,
            [`is-${scene}`]: scene,
        }"
    >
        <!-- 主体 -->
        <div class="am-input__inner">
            <textarea
                :readOnly="readOnly"
                ref="textareaEl"
                v-if="type === 'textarea'"
                spellcheck="false"
                :placeholder="placeholder"
                :value="value"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur"
                @change="onChange"
                @enter="onEnter"
                @keyup.enter="onEnter"
            ></textarea>
            <input
                :readOnly="readOnly"
                v-else
                spellcheck="false"
                :type="type"
                :value="value"
                :placeholder="placeholder"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur"
                @change="onChange"
                @enter="onEnter"
                @keyup.enter="onEnter"
            />
        </div>
    </div>
</template>

<script setup>
import autosize from 'autosize';
import {
    defineProps, defineEmits, ref, onMounted, watch,
} from 'vue';

const props = defineProps({
    value: String,
    placeholder: {
        type: String,
        default: '请输入'
    },
    type: String,
    autosize: {
        type: Boolean,
        default: true,
    },
    scene: {
        type: String,
        default: 'light', // light dark
    },
    readOnly: {
        type: Boolean,
        default: false,
    }
});
const emit = defineEmits([
    'update:value',
    'input',
    'change',
    'focus',
    'blur',
    'enter',
]);

// 事件
const onInput = (e) => {
    emit('update:value', e.target.value);
    emit('input', e);
};
const onChange = (e) => {
    emit('change', e);
};
const isFocus = ref(false);
const onFocus = (e) => {
    isFocus.value = true;
};
const onBlur = (e) => {
    isFocus.value = false;
    emit('blur', e);
};
const onEnter = (e) => {
    emit('enter', e);
};

//  自动高度检测
const textareaEl = ref(null);
const checkAutosize = () => {
    if (props.type !== 'textarea') return;
    if (props.autosize) {
        autosize(textareaEl.value);
    } else {
        autosize.destroy(textareaEl.value);
    }
};
onMounted(() => {
    checkAutosize();
});
watch(
    () => props.autosize,
    () => {
        checkAutosize();
    },
);
</script>

<style lang="scss">
.am-input {
    width: 230px;
    display: flex;
    flex-direction: column;
    &__inner {
        border: 1px solid var(--c-border);
        background: var(--c-bglight);
        color: var(--c-main);
        display: inline-flex;
        transition: border 0s;
        position: relative;
        width: 100%;
        border-radius: 2px;
        input {
            background: none;
            width: 100%;
            font-size: 14px;
            border: none;
            padding: 0 8px;
            height: 28px;
            line-height: 20px;
            position: relative;
            z-index: 2;
        }
        textarea {
            width: 100%;
            height: 28px;
            resize: none;
            background: none;
            padding: 5px 8px;
            line-height: 20px;
            font-size: 14px;
            border: none;
            position: relative;
            z-index: 2;
        }
        &:after {
            content: '';
            display: inline-block;
            position: absolute;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            left: -1px;
            top: -1px;
            z-index: 1;
            outline: 2px solid rgba(0,0,0,0);
            border-radius: 2px;
            opacity: .2;
        }
    }
    // 修饰
    &:hover {
    }
    &.is-focus {
        .am-input__inner {
            border: 1px solid var(--c-primary);
            &:after {
                outline-color: var(--c-primary);
            }
        }
    }

    &.is-dark {
        .am-input__inner {
            border: 1px solid var(--cd-border);
            background: var(--cd-bglight);
            color: var(--cd-main);
        }
        &.is-focus {
            .am-input__inner {
                border: 1px solid var(--cd-primary);
                &:after {
                    outline-color: var(--cd-primary);
                    opacity: .4;
                }
            }
        }
        ::-webkit-input-placeholder {
            color: var(--cd-placeholder);
        }
        ::-moz-placeholder {
            color: var(--cd-placeholder);
        }
    }
    ::-webkit-input-placeholder {
        color: var(--c-placeholder);
    }
    ::-moz-placeholder {
        color: var(--c-placeholder);
    }
}
</style>
