import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/library",
    name: "library",
    component: () => import("../views/Library.vue"),
  },
  {
    path: "/library/:id",
    name: "SingleBook",
    component: () => import("../views/SingleBook.vue"),
    props: true,
  },
  // {
  //   path: "/library/:id",
  //   name: "SingleBook",
  //   component: () => import("../views/SingleBook.vue"),
  //   props: true,
  // },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
