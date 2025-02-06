import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/weather_App/", // Add this line (repository name)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
