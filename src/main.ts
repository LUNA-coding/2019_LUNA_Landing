import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import LUNA_Header from '@/components/luna/Header.vue';
import LUNA_NavList from '@/components/luna/NavList.vue';
import LUNA_NavItem from '@/components/luna/NavItem.vue';

Vue.config.productionTip = false;

Vue.component('LUNA-Header', LUNA_Header);
Vue.component('LUNA-NavList', LUNA_NavList);
Vue.component('LUNA-NavItem', LUNA_NavItem);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#luna');
