// vite.config.ts
import { defineConfig } from 'vitest/config'; // ✅ <-- correct source
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
});
