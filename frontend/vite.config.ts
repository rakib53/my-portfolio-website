import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures relative paths work correctly
  build: {
    outDir: "dist", // Keeps the default build folder
    assetsDir: "assets", // Ensures correct static asset serving
  },
});
