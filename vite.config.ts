import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ Tu repo en GitHub se llama "web"
// por eso el base tiene que ser "/web/" 
export default defineConfig({
  plugins: [react()],
  base: "/web/",

  build: {
    outDir: "dist",
  },
});