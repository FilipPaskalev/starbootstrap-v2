import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  base: '/gh-page-vite-ts-test/',
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
})
