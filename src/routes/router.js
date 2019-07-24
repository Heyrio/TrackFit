import Vue from 'vue'
import Router from 'vue-router'
import dash from '@/views/dash'
import stats from '@/views/stats'
import home from '@/views/home'
Vue.use(Router)

const router = new Router({
    mode: 'history',

    routes: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: dash,
    }, {
        path: '/stats',
        name: 'Stats',
        component: stats,
    }, {
        path: '/',
        name: 'Home',
        component: home,
    }]

})
export default router;
router.afterEach((to) => {
    if (to.name === "Home") {
        document.querySelector("html").classList.add("bg");
    } else {
        document.querySelector("html").classList.remove("bg");
    }
});