import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路由别名定义
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});