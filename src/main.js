import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/global.scss';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);


import {
  Loading,
  Button,
  Icon,
  Card,
  Row,
  Col,
} from 'element-ui';

Vue.use(Icon);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
