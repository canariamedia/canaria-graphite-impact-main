import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // IMPORTANTE: tu sitio vive en un subpath,
  // entonces Vite debe generar URLs con ese prefijo
  base: "/canaria-graphite-impact-main/",

  build: {
    outDir: "dist",
  },
});