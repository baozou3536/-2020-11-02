import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;        //$后面为名字，可以随意    在main.js中导入为全局变量

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
