import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Make sure this matches your GitHub repo name
  build: {
    outDir: 'dist', // Ensure Vite builds the app to the dist folder
  },
  // Configure gh-pages plugin
  ssr: {
    external: ['vite-plugin-gh-pages'],
  },
});
