import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": "/src/assets",
    },
  },
  plugins: [react()],
  server: { host: true },
  // build: {
  //   sourcemap: false,
  // },
});
