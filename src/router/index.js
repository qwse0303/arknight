import * as VueRouter from 'vue-router';
import layout from '@/layout'

export const staticRoutes = [
  {
    path: '/',
    component: layout,
  }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    staticRoutes,
  });


// 重置路由
export function resetRouter() {
  router.matcher = VueRouter.createRouter().matcher
}



// 导出路由
export default router
