import Axios from 'axios'

import nprogress from 'nprogress'//进度条
import 'nprogress/nprogress.css'//加载的进度条样式

// import {getTempUserToken,getToken} from '@/token/index'

// axios.defaults.baseURL = ''
let axios = Axios.create({
    baseURL: '???',
    timeout: 5000,//5s为超时
})
var _cookies = null;
//请求拦截器
axios.interceptors.request.use((config) => {
    if(_cookies) config.headers.cookie = _cookies // 携带cookie
    //进度条开始
    nprogress.start()
    return config
})
//响应拦截器
axios.interceptors.response.use(
    (response) => {
        var cookie = response.headers['set-cookie'] // 保存cookie
        if(cookie) _cookies = cookie


        //进度条结束
        nprogress.done()
        return response
    },
    (err) => {
        return Promise.reject(new Error('faile'))
    }
)

export default axios