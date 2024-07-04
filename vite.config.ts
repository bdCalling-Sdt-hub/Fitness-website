import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "134.209.209.57",
    // host: "192.168.30.250",
    port: 3008
  }
})
