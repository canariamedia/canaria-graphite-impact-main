export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/canaria-graphite-impact-main/",
  build: {
    outDir: "dist",
  },
});