import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/final-project/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true,
    chunkSizeWarningLimit: 4000, // Set the chunk size warning limit to 4000 kBs to make the page load but we recommend setting it to 1000 KBs for other projects
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  plugins: [react()],
})