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
  // Como tu página se sirve en https://canariamedia.github.io/
  // la base tiene que ser la raíz:
  base: "/",
  build: {
    outDir: "dist",
  },
});