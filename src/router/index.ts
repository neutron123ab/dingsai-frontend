import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/pages/LoginPage.vue";
import UpdateUserInfo from "@/components/Login/UpdateUserInfo.vue";
import LoginInput from "@/components/Login/LoginInput.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import AddItem from "@/components/items/AddItem.vue";
import MainComponent from "@/components/layout/main/MainComponent.vue";
import DemandDetail from "@/components/layout/main/DemandDetail.vue";
import {useUserStore} from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'basicLayout',
      component: BasicLayout,
      children: [
        {
          path: '/',
          name: 'main',
          component: MainComponent
        },
        {
          path: '/addItem',
          name: 'addItem',
          component: AddItem
        },
        {
          path: '/demandDetail',
          name: '/demandDetail',
          component: DemandDetail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      children: [
        {
          path: '/login/input',
          name: 'input',
          component: LoginInput
        },
        {
          path: '/login/update',
          name: 'update',
          component: UpdateUserInfo
        }
      ]
    }
  ]
})

export default router
