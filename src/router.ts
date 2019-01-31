import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/Main.vue';
import Achievement from './pages/Achievement.vue';
import Member from './pages/Member.vue';
import LUNA from './pages/LUNA.vue';
import P2018 from './pages/P2018.vue';
import Cooperation from './pages/Cooperation.vue';
import FAQ from './pages/FAQ.vue';

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
    {
      path: '/2018',
      name: 'p2018',
      component: P2018,
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: Cooperation,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    },
  ],
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    if (to.name !== undefined) { document.body.className = to.name; }
  });
});

export default router;
