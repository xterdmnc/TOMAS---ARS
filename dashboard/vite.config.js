import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3004,
    host: '192.168.10.41', // Set your IP address here
    https: false, // Set to true if you need HTTPS
  },
})
