import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/my-portfolio/', // This is important, change 'my-portfolio' to match your repo name
});
