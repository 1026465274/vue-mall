import { createApp } from 'vue'
import App from './App.vue'
import routers from './router/index'
import store  from './store';

// 使用$bus 则必须要向vue的原型里面加入 $bus 给其赋值为Vue实例 否则为空  使用方法
//  this.$bus.$emit('事件名');  this.$bus.$on('事件名')

// createApp.prototype.$bus = new Vue();

const app=  createApp(App);
app.use(routers);
app.use(store);
app.mount('#app');
