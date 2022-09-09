import { createVNode, render } from 'vue';
import AmLoading from './index.vue';

const instances = [];

export default {
    install(app) {
        const showLoading = (arg) => {
            // 生成messgae的内容
            let initData = {
                content: 'this is a message',
                type: '',
                duration: 2000,
            };
            // 选择挂载的父元素
            let father = document.body;
            if (typeof arg === 'string') {
                initData.content = arg;
            } else {
                initData = { ...initData, ...arg };
                father = arg.father || father;
            }
            const container = document.createElement('div');
            const vm = createVNode(AmLoading, {
                ...initData,
            });
            console.log(vm);
            render(vm, container);
            father.appendChild(container.firstElementChild);
            const instance = vm.component;
            instances.push(instance);
            instance.props.destroySelf = () => {
                const index = instances.findIndex((i) => i === instance);
                instances.splice(index, 1);
                render(null, container);
                container.remove();
            };
            // console.log('instance', instance);
            return instance;
        };
        const $loading = {};
        $loading.show = showLoading;
        $loading.close = async (instance) => {
            if (instance) {
                await instance.exposed.close();
            } else {
                await Promise.all(instances.map((i) => i.exposed.close()));
            }
            console.log('处理完毕');
        };
        app.provide('$loading', $loading);
    },
};
