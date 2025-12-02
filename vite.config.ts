import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Tu repo en GitHub se llama "canaria-graphite-impact-main"
  // así que la base tiene que ser ese path:
  base: "/canaria-graphite-impact-main/",
  build: {
    outDir: "dist",
  },
});