import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@variables': path.resolve(__dirname, 'src/_variables.scss'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@component': path.resolve(__dirname, 'src/component'),
    },
  },
});
