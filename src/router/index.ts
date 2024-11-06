import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory("/dc"), // 这里指定基本URL
  routes: [
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: () => import("@/components/HelloWorld.vue"),
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
  ],
});
export default router;
