import { createApp } from 'vue';
import VueSweetAlert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

createApp(App).use(router, VueSweetAlert2).mount('#app');
