import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3001,
    hmr: {
      port: 3001,
    },
  },
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: './public/main.js'
    }
  }
});
