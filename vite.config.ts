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
  // MUY IMPORTANTE → ESTA URL DEBE COINCIDIR CON LA DE GITHUB PAGES
  base: "/canaria-graphite-impact-main/",
  build: {
    outDir: "dist",
  },
});