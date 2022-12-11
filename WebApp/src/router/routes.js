export default [
  { path: '/', redirect: '/home' },//重定向路由
  { path: '/home', component: () => import("@/views/Home.vue") },
]