// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ← this is key for cPanel/static hosting
  plugins: [react()],
})
