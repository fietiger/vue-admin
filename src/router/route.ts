import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/auth.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/auth/login.vue"),
      },
    ],
  },
] as RouteRecordRaw[]; //TS的类型推断，为了有代码提示
export default routes;
