import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteEnvs } from 'vite-envs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteEnvs({
      declarationFile: path.resolve(__dirname, '.env.declaration'),
      computedEnv: async () => {
        return {
          BUILD_TIME: Date.now(),
          VERSION: '1.2.3'
        }
      }
    })
  ],
})
