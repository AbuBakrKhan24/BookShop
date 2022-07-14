import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/profile/:id",
    name: "SingleBook",
    component: () => import("../views/SingleBook.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

//  http://localhost:8080/
