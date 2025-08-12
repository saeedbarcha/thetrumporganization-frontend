// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size limit from default 500kB to 1000kB
    rollupOptions: {
      output: {
        manualChunks: {
          // Group libraries into separate chunks
          react: ['react', 'react-dom'],
          // Add more here if needed, e.g., chart: ['chart.js']
        },
      },
    },
  },
});
