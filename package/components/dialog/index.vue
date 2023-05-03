<template>
    <div class="am-dialog">
        <AmPopup
            popup-class="am-dialog"
            width="480px"
            v-model:show="show"
            :title="title"
            @after-leave="afterLeave"
        >
            <p>{{ content }}</p>
            <template v-slot:ft>
                <AmButton @click="clickCancelBtn">{{ cancelText }}</AmButton>
                <AmButton mode="primary" @click="clickConfirmBtn">{{ confirmText }}</AmButton>
            </template>
        </AmPopup>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import AmPopup from '../popup/index.vue';
import AmButton from '../button/index.vue';

const props = defineProps({
    title: {
        type: String,
        default: '提示',
    },
    content: {
        type: String,
        default: '确定操作吗？',
    },
    isHtml: {
        type: Boolean,
        default: false,
    },
    cancelText: {
        type: String,
        default: '取消',
    },
    confirmText: {
        type: String,
        default: '确定',
    },
    destroySelf: Function,
    confirm: Function,
    cancel: Function,
});

const show = ref(false);
let clickResult = 'cancel';
onMounted(() => {
    show.value = true;
});
const clickCancelBtn = () => {
    clickResult = 'cancel';
    show.value = false;
};
const clickConfirmBtn = () => {
    clickResult = 'confirm';
    show.value = false;
};
const afterLeave = () => {
    if (clickResult === 'cancel') {
        props.cancel();
    } else {
        props.confirm();
    }
    props.destroySelf();
};
</script>

<style lang="scss">
.am-dialog {
    .am-popup__bd {
        font: var(--f-15);
    }
}
</style>