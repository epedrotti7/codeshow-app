import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import TabsPage from '../views/TabsPage.vue'
import PlayPage from '../views/PlayPage.vue'
import ScorePage from '../views/ScorePage.vue'
import PerfilPage from '../views/PerfilPage.vue'
import HistoryPage from '../views/HistoryPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: MainPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/playpage'
      },
      {
        path: 'playpage',
        component: PlayPage
      },
      {
        path: 'scorepage',
        component: ScorePage
      },
      {
        path: 'perfilpage',
        component: PerfilPage
      },
      {
        path: 'historypage',
        component: HistoryPage
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
