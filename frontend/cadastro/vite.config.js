import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'C:/Users/PC HOME/React-em-Django/backend/home/static/js',
    emptyOutDir: true
  }
})
