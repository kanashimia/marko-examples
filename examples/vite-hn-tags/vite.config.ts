import { defineConfig } from "vite";
import marko from "@marko/run/vite";

export default defineConfig({
  plugins: [
    // compression(),
    // inlineSource(),
    marko({
      // translator: "@marko/translator-interop-class-tags",
      // babelConfig: {
    }),
  ],
});

