import postcss from './postcss.config'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs"
  },
  plugins: [svelte()],
  css: {
    postcss
  }
});

