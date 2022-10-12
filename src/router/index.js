import { createRouter, createWebHistory } from 'vue-router'

import vHome from '../components/vHome.vue'
import vLogin from '../components/vLogin.vue'

const routes = [
    {
        path: '/',
        component: vHome
    },
    {
        path: '/Login',
        component: vLogin
    }

]
const router = createRouter ({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    let isAuthenticated = !!sessionStorage.getItem('userInfo')
    // 如果路由要跳转到除了登录和注册的界面的话就判断是否已经登录，如果没有登录就强制跳到登录界面
    if (to.path !== '/Login' && to.path !== '/Register' && !isAuthenticated) {
      next({ path: '/Login' })

    } else next()
  })

export default router