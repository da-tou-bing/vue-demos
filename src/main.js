import Vue from 'vue'
import App from './App.vue'
import Bus from './utils/Bus';

Vue.config.productionTip = false
Vue.prototype.$bus = new Bus();
const app = new Vue({
  render: h => h(App),
});
app.$mount('#app')
