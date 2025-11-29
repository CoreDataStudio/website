import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // This is crucial for GitHub Pages to work in a subdirectory
  build: {
    outDir: 'dist',
  },
});