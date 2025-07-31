import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  base: '/jim-deselms-site/' // replace <repo-name> with your GitHub repo name
})
