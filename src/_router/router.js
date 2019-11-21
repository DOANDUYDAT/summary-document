import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition)
                } else {
                    resolve({ x: 0, y: 0 })
                }
            }, 200)
        })
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 0 }
        // }
    },
    routes: [
        {
            path: '/home',
            component: HomePage,
            name: "home",
            alias: '/'
        }
        
        
    ],


})



// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         let user = JSON.parse(localStorage.getItem('user'));
//         if (!user) {
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             })
//         } else {
//             next()
//         }
//     } else {
//         next() // make sure to always call next()!
//     }
// })

export default router;