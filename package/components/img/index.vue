<template>
    <div class="am-img">
        <img
            v-if="loadState === 'success'"
            class="am-img__img"
            :src="src"
        />
        <div 
            class="am-img__error"
            v-else-if="loadState === 'error'" 
            style="transform: none!important;"
        >
            <!-- 加载失败 -->
            <AmIcon
                name="picfail-fill"
                color="var(--c-sub)"
                size="24px"
            ></AmIcon>
            <AmButton
                size="small"
                v-if="showReload"
                @click="redloadImg"
            >
                重新加载
            </AmButton>
        </div>

        <div class="am-img__control">
            <AmButton
                v-if="showPreviewBtn"
                scene="dark"
                icon-size="14px"
                size="small"
                icon="eye-line"
                @click.stop="toPreview"
            ></AmButton>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed, ref, watch, nextTick, onBeforeMount, defineEmits } from 'vue';
import { sleep } from '@sankki/utils-common/esm/sleep';
import { urlToImage } from '@sankki/utils-common/esm/url-to-image';
import AmIcon from '../icon/index.vue';
import AmButton from '../button/index.vue';

const emit = defineEmits([
    'preview',
]);

const props = defineProps({
    src: {
        type: String,
    },
    showReload: {
        type: Boolean,
        default: false,
    },
    showPreviewBtn: {
        type: Boolean,
        default: false,
    }
});

const loadState = ref(null); // success 成功 error 加载错误

let imgKey = 1;
const loadImg = async () => {
    if(!props.src) return;
    loadState.value = '';
    imgKey ++;
    const originImgKey = imgKey;
    try {
        await urlToImage(props.src);
        if(originImgKey === imgKey) {
            loadState.value = 'success';
        }
    } catch(e){
        console.error('# 图片请求失败', e);
        loadState.value = 'error';
    }
}
const redloadImg = async () => {
    console.log('# 图片重载');
    loadState.value = '';
    await sleep(500);
    loadImg();
}
watch(() => [props.src], () => {
    loadImg();
}, {
    immediate: true,
});

const toPreview = () => {
    emit('preview', props.src);
}
</script>

<style lang="scss">
.am-img {
    position: relative;
    display: inline-flex;
    &__img {
        width: 100%;
        height: 100%;
    }
    &__error {
        background: var(--c-bglight);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transform: none!important;
        padding: 12px;
        color: var(--c-sub);
        .am-button {
            margin-top: 4px;
        }
    }
    &__control {
        position: absolute;
        right: 8px;
        top: 8px;
        opacity: 0;
        transition: opacity .1s;
        .am-button {
            background: rgba(0,0,0,.3);
            border: 1px solid rgba(255,255,255,.3);
            transition: border-color .2s, background .2s;
            &:hover {
                background: rgba(0,0,0,.6);
                border: 1px solid rgba(255,255,255,.6);
            }
        }
    }
    &:hover {
        .am-img__control {
            opacity: 1;
        } 
    }
}
</style>
