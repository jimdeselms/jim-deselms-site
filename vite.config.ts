import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs'
  },
  base: '/jim-deselms-site/' // replace <repo-name> with your GitHub repo name
})
