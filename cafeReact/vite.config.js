import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    // host: '0.0.0.0',
    port: 3000 
  },
  build: {
    outDir: 'build', // Specify the name of the output directory here
  }
});

