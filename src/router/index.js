import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/AdminBooks.vue"),
  },
  {
    path: "/adminuser",
    name: "adminuser",
    component: () => import("../views/AdminUsers.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
