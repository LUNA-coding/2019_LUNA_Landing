import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/Main.vue';
import Achievement from './pages/Achievement.vue';
import Member from './pages/Member.vue';
import LUNA from './pages/LUNA.vue';

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
    {
      path: '/member',
      name: 'member',
      component: Member,
    },
    {
      path: '/luna',
      name: 'luna',
      component: LUNA,
    },
  ],
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    if (to.name !== undefined) { document.body.className = to.name; }
  });
});

export default router;
