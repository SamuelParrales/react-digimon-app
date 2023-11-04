import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// console.log(process.env.NODE_ENV)
const base = process.env.NODE_ENV == 'development'
              ?''
              :'/react-digimon-app/'
export default defineConfig({
  plugins: [react()],
  base,
  
})

