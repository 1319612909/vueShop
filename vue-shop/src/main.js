import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
