import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ Repo en GitHub: canaria-graphite-impact-main
// URL de Pages (sin dominio propio):
// https://canariamedia.github.io/canaria-graphite-impact-main/

export default defineConfig({
  plugins: [react()],
  base: "/canaria-graphite-impact-main/",
  build: {
    outDir: "dist",
  },
});