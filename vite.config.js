import { defineConfig } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'
import path from 'path'

export default defineConfig({
  root: 'src',
  base: '/',
  publicDir: path.resolve(__dirname, 'public'), // ✅ правильно указанный путь

  server: {
    port: 5173,
    host: true,
    strictPort: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*'
    },
    fs: {
      strict: true,
      allow: [
        path.resolve(__dirname, 'public'),
        path.resolve(__dirname, 'src/assets') // ✅ разрешаем
      ]
    }
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.html'),
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop()
          if (['woff', 'woff2'].includes(ext)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'].includes(ext)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/_variables.sass" as *;`,
        charset: false
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src/assets')
    }
  },

  plugins: [
    nunjucks({
      input: 'src/index.njk',
      output: 'src/index.html',
      templatesDir: path.resolve('src/html'),
      data: () => import('./src/data/data.json')
    })
  ],

  optimizeDeps: {
    include: ['@/assets/styles/_variables.sass']
  }
})
