import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62ce579d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _06b1f81f = () => interopDefault(import('../pages/_cat/index.vue' /* webpackChunkName: "pages/_cat/index" */))
const _777c089a = () => interopDefault(import('../pages/_cat/ssr/_slug.vue' /* webpackChunkName: "pages/_cat/ssr/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _62ce579d,
    name: "index"
  }, {
    path: "/:cat",
    component: _06b1f81f,
    name: "cat"
  }, {
    path: "/:cat/ssr/:slug?",
    component: _777c089a,
    name: "cat-ssr-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
