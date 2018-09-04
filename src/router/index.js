import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    //导入组件模块
import Login from '@/views/Login'
export default new Router({
    routes: [
        { name: 'login', path: '/login', component: Login }

    ]
})