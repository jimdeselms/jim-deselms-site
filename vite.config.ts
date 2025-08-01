import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'docs'
  },
  base: './' // Use relative base for GitHub Pages
})
