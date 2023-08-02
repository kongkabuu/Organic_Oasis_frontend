// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  root: './src/App.jsx', // Set the root directory for your project (where the index.jsx file is located)
});
