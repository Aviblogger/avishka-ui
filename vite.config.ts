import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
export default defineConfig({
  build:{
    lib:{
      entry:path.resolve(__dirname,'index.ts'),
      name:'test-vite-components',
      fileName:(format)=>`index.${format}.js`
    },
    rollupOptions:{
      external:[
        'react','react-dom'
      ],
      output:{
        globals:{
          'react':'React',
          'react-dom':'ReactDOM'
        }
      }
    },
    sourcemap:true,
    emptyOutDir:true,

  },
  plugins: [react(), dts()],
  css: {
    postcss: {
      plugins: [
        tailwindcss('./tailwind.config.js'),
      ],
    },
  }
})

