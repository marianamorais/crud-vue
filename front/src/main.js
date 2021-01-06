import Vue from 'vue';
import VueSweerAlert2 from 'vue-sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueSweerAlert2);

new Vue({
  router,
  render: (h) => h(App),
})
  .$mount('#app');