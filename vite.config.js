import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Base racine pour Vercel (corrige le problème de MIME type)
  base: '/',
  plugins: [react(), tailwindcss()],
})
