
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import 'vue-svgicon/dist/polyfill'

require('./bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import VueSVGIcon from 'vue-svgicon'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueRouter)
Vue.use(VueProgressBar, {
    autoFinish: false,
    color: '#8cb9df',
    failedColor: 'red',
    thickness: '3px'
})
Vue.use(VueSVGIcon)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyD_X6EOD9nVWa8YDdb4_-8qIeyZUUjcGho'
    }
})

import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Connect from './components/Connect.vue'
import NotFound from './components/NotFound.vue'

import './svg/index'

const routes = [
    {
        path: '/',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        component: About,
        meta: { title: 'About' }
    },
    {
        path: '/skills',
        component: Skills,
        meta: { title: 'Skills' }
    },
    {
        path: '/projects',
        component: Projects,
        meta: { title: 'Projects' }
    },
    {
        path: '/connect',
        component: Connect,
        meta: { title: 'Connect' }
    },
    {
        path: '*',
        component: NotFound,
        meta: { title: 'Not Found' }
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (savedPosition)
                    return savedPosition
                else
                    return { x: 0, y: 0 }
            }, 200)
        })
    }
})

const initialTitle = document.title

router.beforeEach((to, from, next) => {
    document.title = (to.meta.title ? to.meta.title + ' | ' : '') + (router.app.appName || initialTitle)
    next()
})

const app = new Vue({
    el: '#app',
    router,
    data() {
        return {
            transitionName: 'fade',
            appName: initialTitle
        }
    },
    watch: {
        '$route'(to, from) {
            let fromIndex = routes.findIndex(o => o.path == from.path)
            let toIndex = routes.findIndex(o => o.path == to.path)
            this.transitionName = (fromIndex < toIndex) ? 'slide-left' : 'slide-right'
        }
    }
})

require('./main')
