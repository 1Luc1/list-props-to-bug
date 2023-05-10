// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomeView"),
      },
    ],
  },
  {
    path: "/view/:id",
    name: "view",
    component: () => import("@/layouts/default/BaseLayout"),
    children: [
      {
        path: "right",
        name: "Right",
        component: () => import("@/views/RightView"),
      },
      {
        path: "rightTwo",
        name: "Right2",
        component: () => import("@/views/RightTwoView"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
