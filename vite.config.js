import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

export default defineConfig({
  base:"./",
  root: "./WebApp",
  build:{
    outDir:path.resolve(__dirname,"./WebApp_dist"),
  },
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./WebApp/src')
    }
  }
})
