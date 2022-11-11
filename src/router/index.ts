import { createRouter, createWebHistory } from "vue-router";
import routes from "./route";
import layoutRouters from "./auto-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRouters],
});
console.log(layoutRouters);
export default router;
