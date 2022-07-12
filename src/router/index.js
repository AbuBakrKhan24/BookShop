import { createRouter, createWebHistory } from "vue-router";
import SignUpView from "../views/SignUpView.vue";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/login",
    name: "login",

    component: () => import("../views/LoginView.vue"),
    name: "home",
  },

  {
    path: "/library",
    name: "library",
    component: () => import("../views/Library.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

//  http://localhost:8080/
