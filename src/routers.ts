import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "./pages/Login.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
