import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

// Output directory for the built assets, matching Sphinx's expected structure
const OUT_DIR = resolve(
  __dirname,
  "src/sphinx_icore_open/theme/sphinx_icore_open/static",
);

export default defineConfig({
  // Set base to relative path for correct asset loading in Sphinx
  base: "./",

  // Alias to simplify imports from @minvws/manon-themes
  resolve: {
    alias: {
      "@manon-themes": resolve(
        __dirname,
        "node_modules/@minvws/manon-themes/dist/rijkshuisstijl-2008",
      ),
    },
  },

  build: {
    outDir: OUT_DIR,
    emptyOutDir: true,
    cssCodeSplit: false,

    rolldownOptions: {
      input: {
        theme: resolve(__dirname, "static/js/main.js"),
        styles: resolve(__dirname, "static/scss/index.scss"),
      },

      output: {
        entryFileNames: "js/[name].js",
      },
    },
  },

  // Copy static assets from both the theme and the Manon themes
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "static/img/**/*.{png,jpg,jpeg,svg,gif,webp,ico}",
          dest: "img",
          rename: { stripBase: 2 },
        },
        {
          src: "node_modules/@minvws/manon-themes/dist/icore-open/img/*",
          dest: "img",
          rename: { stripBase: 6 },
        },
      ],
    }),
  ],

  // SCSS configuration to include node_modules for Manon themes
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ["node_modules"],
      },
    },
  },
});
