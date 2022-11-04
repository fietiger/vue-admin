import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/Admin.vue"),
    children: [
      { path: "/", name: "home", component: () => import("@/views/Home.vue") },
    ],
  },
] as RouteRecordRaw[]; //TS的类型推断，为了有代码提示
export default routes;
