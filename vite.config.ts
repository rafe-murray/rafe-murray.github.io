import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import tailwindcss from '@tailwindcss/vite';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            transformers: [transformerCopyButton({ visibility: 'always' })],
          },
        ],
      ],
    }),
    tailwindcss(),
    reactRouter(),
    svgr(),
  ],
});
