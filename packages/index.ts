import LuckDraw from './luck-draw/luck-draw.vue';

export default {
    install: function (Vue: any) {
        Vue.component('LuckDraw', LuckDraw);
    },
};

export { LuckDraw };
