import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../components/content/home/Home")
const cart = () => import("../components/content/cart/Cart")
const category = () => import("../components/content/category/Category")
const profile = () => import("../components/content/profile/Profile")
const one = () => import("../views/Home")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/one"
  },
  {
    path: "/one",
    component: one,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cart",
    component: cart,
  },
  {
    path: "/category",
    component: category,
  },
  {
    path: "/profile",
    component: profile,
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
