import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/Proyecto-Tareas/', // 👈 importante: debe tener slash inicial y final
})
