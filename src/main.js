import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import VueApexCharts from "vue-apexcharts";
import router from './router'

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
