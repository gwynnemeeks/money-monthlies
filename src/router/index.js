import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Comparator from "../views/Comparator.vue"
import Create from "../views/Create.vue"
import Details from "../views/Details.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/budget/:budgetId",
    name: "Details",
    component: Details,
  },
  {
    path: "/compare",
    name: "Comparator",
    component: Comparator,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
