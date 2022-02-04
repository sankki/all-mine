<template>
    <div
        class="am-input"
        :class="{
            'is-focus': isFocus,
        }"
    >
        <!-- 主体 -->
        <div class="am-input__inner">
            <textarea
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
    placeholder: String,
    type: String,
    autosize: {
        type: Boolean,
        default: true,
    },
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
    console.log(e.target.value, 'e.target.value');
    emit('update:value', e.target.value);
    emit('input', e);
};
const onChange = (e) => {
    emit('change', e);
};
const isFocus = ref(false);
const onFocus = (e) => {
    isFocus.value = true;
    emit('change', e);
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
        border: 1px solid #e0e0e0;
        background: #f7f7f7;
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
        }
    }
    // 修饰
    &:hover {
        .am-input__inner {
            // border: 1px solid #333;
            // border: 1px solid #78a2e9;
            // background: #ddd;
        }
    }
    &.is-focus {
        .am-input__inner {
            border: 1px solid #3375e5;
            outline: 2px solid #bfd0f0;
        }
    }
}
</style>
