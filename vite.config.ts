import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 👇 AGREGAR ESTA LÍNEA
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  // 👇 AGREGAR ESTE BLOQUE
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/web/",
  build: {
    outDir: "dist",
  },
});