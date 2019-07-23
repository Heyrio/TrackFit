import Vue from 'vue'
import Router from 'vue-router'
import dash from '@/views/dash'
import stats from '@/views/stats'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: dash,
    }, {
        path: '/stats',
        name: 'Stats',
        component: stats,
    }]
})