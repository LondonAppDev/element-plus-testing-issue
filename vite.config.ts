/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElementPlus()],
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: true,
    },
  },
});
