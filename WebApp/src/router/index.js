import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes";

const router = createRouter({
    history: createWebHashHistory(),//指定路由工作模式
    linkActiveClass: 'actived_by_Router',//指定被点击后的链接会被添加上类名,默认为`router-link-active`
    routes,
})
export default router;