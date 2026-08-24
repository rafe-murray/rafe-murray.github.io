import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    tailwindcss(),
    reactRouter(),
    svgr(),
  ],
});
