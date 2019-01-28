import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/Main.vue';
import Achievement from './pages/Achievement.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/achievement',
      name: 'achievement',
      component: Achievement,
    },
  ],
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    if (to.name !== undefined) { document.body.className = to.name; }
  });
});

export default router;
