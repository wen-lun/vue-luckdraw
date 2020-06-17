import Vue from 'vue';
import LuckDraw from '../packages';
import App from './app.vue';

Vue.config.productionTip = false;

Vue.use(LuckDraw);

new Vue({
    render: h => h(App),
}).$mount('#app');
