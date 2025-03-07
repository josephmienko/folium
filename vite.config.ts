import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    base: "/", // Ensures correct base path
    plugins: [react()],
    optimizeDeps: {
      esbuildOptions: {
        define: {
          "process.env": "{}",
          global: "window",
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({ process: true, buffer: true }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
    define: {
      "process.env": {},
      global: "window",
    },
    resolve: {
      alias: {
        process: "process/browser",
        path: "path-browserify",
        fs: "memfs",
        url: "url/",
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      strictPort: false,
      hmr: true,
      port: 3000,
      open: true,
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./vitest.setup.ts",
      coverage: {
        provider: "v8",
        reporter: ["text", "html"],
        all: true,
        exclude: ["node_modules", "dist", "vite.config.ts"],
      },
    },
  };
});
