import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react({ jsxRuntime: "classic" }),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "@mono/ui-lib",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
