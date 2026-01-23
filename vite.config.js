import { defineConfig } from 'vite';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'src/sphinx_icore_open/theme/sphinx_icore_open/static'),
    emptyOutDir: true, // Clean the output directory before building
    rollupOptions: {
      input: {
        theme: resolve(__dirname, 'static/scss/index.scss'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // This allows us to control the output filename for assets like CSS
          if (assetInfo.name === 'theme.css') { // The input filename for SASS is index.scss, but Vite will output it as [name].css, which will be theme.css because of the input name.
            return 'css/theme.css'; // Path for compiled CSS
          }
          // Default behavior for other assets
          return 'assets/[name].[hash][extname]';
        },
        entryFileNames: 'js/[name].js', // Path for any JS entry points
      },
    },
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'node_modules/@minvws/manon-themes/dist/icore-open/fonts/*',
          dest: resolve(__dirname, 'src/sphinx_icore_open/theme/sphinx_icore_open/static/fonts'),
        },
        {
          src: 'node_modules/@minvws/manon-themes/dist/icore-open/img/*',
          dest: resolve(__dirname, 'src/sphinx_icore_open/theme/sphinx_icore_open/static/img'),
        },
        {
          src: 'node_modules/@minvws/manon/js/*.js',
          dest: resolve(__dirname, 'src/sphinx_icore_open/theme/sphinx_icore_open/static/js'),
        },
      ],
      hook: 'writeBundle', // Execute after the bundle is written
      verbose: true, // For debugging, shows what files are copied
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [
          'node_modules', // Allow SASS to find imports from node_modules
        ],
      },
    },
  },
});
