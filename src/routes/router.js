import Vue from 'vue'
import Router from 'vue-router'
import sidemenu from '@/components/sidemenu'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: sidemenu,
    }]
})