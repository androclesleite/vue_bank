import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import Deposit from '../views/Deposit.vue';
import Transfer from '../views/Transfer.vue';
import Reverse from '../views/Reverse.vue';
import History from '../views/History.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Login },
  { path: '/deposit', component: Deposit },
  { path: '/transfer', component: Transfer },
  { path: '/reverse', component: Reverse },
  { path: '/history', component: History },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
