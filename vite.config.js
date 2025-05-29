import { defineConfig } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'
import path from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [
    nunjucks({
      input: 'src/index.njk',
      output: 'src/index.html',
      templatesDir: path.resolve('src/html'),
      data: () => import('./src/data/data.json')
    })
  ]
})