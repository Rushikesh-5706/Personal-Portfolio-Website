import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: 'terser',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['framer-motion', 'react-scroll-parallax'],
          react: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
