import Vue from 'vue'
import Router from 'vue-router'
import dash from '@/views/dash'
import stats from '@/views/stats'
import home from '@/views/home'
import log from '@/views/log'
import routine from '@/views/routine'
import history from '@/views/history'
import store from './store.js';
Vue.use(Router)

const router = new Router({
    mode: 'history',

    routes: [{
            path: '/dashboard',
            name: 'Dashboard',
            component: dash,
            beforeEnter: async function(to, from, next) {
                if (store.state.loggedIn) {
                    next(true)
                } else {
                    // User has no access to the app, redirect to dashboard
                    next({ path: '/' })
                }
            }
        },
        {
            path: '/stats',
            name: 'Stats',
            component: stats,
            beforeEnter: async function(to, from, next) {
                if (store.state.loggedIn) {
                    next(true)
                } else {
                    // User has no access to the app, redirect to dashboard
                    next({ path: '/' })
                }
            }

        },
        {
            path: '/log',
            name: 'Log',
            component: log,
            beforeEnter: async function(to, from, next) {
                if (store.state.loggedIn) {
                    next(true)
                } else {
                    // User has no access to the app, redirect to dashboard
                    next({ path: '/' })
                }
            }

        },
        {
            path: '/routine',
            name: 'Routine',
            component: routine,
            beforeEnter: async function(to, from, next) {
                if (store.state.loggedIn) {
                    next(true)
                } else {
                    // User has no access to the app, redirect to dashboard
                    next({ path: '/' })
                }
            }

        },
        {
            path: '/history',
            name: 'History',
            component: history,
            beforeEnter: async function(to, from, next) {
                if (store.state.loggedIn) {
                    next(true)
                } else {
                    // User has no access to the app, redirect to dashboard
                    next({ path: '/' })
                }
            }

        },

        {
            path: '/',
            name: 'Home',
            component: home,
        },

        {
            path: "*",
            beforeEnter: async function(to, from, next) {
                next({ path: '/' })
            }
        }
    ],

})
export default router;


router.afterEach((to) => {
    if (to.name === "Home") {
        document.querySelector("html").classList.add("bg");
    } else {
        document.querySelector("html").classList.remove("bg");
    }
});