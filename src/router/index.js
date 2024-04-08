import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/maison/:id",
      name: "maison",
      component: () => import("../views/HouseView.vue"),
    },
  ],
});

export default router;
