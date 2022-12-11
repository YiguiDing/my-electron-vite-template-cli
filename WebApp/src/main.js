import { createApp } from 'vue'
import "normalize.css"
import "./assets/common.css"
import App from './App.vue'
import router from "@/router"
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'


createApp(App).use(router).use(Layui).mount('#app')
