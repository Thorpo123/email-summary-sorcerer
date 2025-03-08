
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Ensure this matches your GitHub repository name exactly
  base: "/email-summary-sorcerer/",
  build: {
    // Output more detailed information during build
    sourcemap: true,
    // Ensure assets are properly hashed
    assetsDir: "assets",
    // Make sure the output is optimized for GitHub Pages
    outDir: "dist",
    // Enable minification
    minify: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
