import resolve from '@rollup/plugin-node-resolve';
import vuePlugin from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import url from 'postcss-url';
export default {
  input: './packages/components/index.js',
  output: [
    {
      file: 'dist/es.js',
      name: 'TUI',
      format: 'es'
    },
    {
      file: 'dist/cjs.js',
      name: 'TUI',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/umd.js',
      name: 'TUI',
      format: 'umd',
      exports: 'named',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  plugins: [
    resolve(),
    vuePlugin(),
    postcss({
      extract: 'theme-chalk/style.css', // 将css提取到单独的文件中
      // use: ['sass'], // 启用 Sass 支持
      plugins: [
        autoprefixer(),
        url({
          url: 'copy',
          basePath: 'fonts',
          assetsPath: 'fonts',
        })
      ],
    }),
    copy({
      targets: [
        { src: 'packages/theme-chalk/fonts/*', dest: 'dist/theme-chalk/fonts/' }
      ]
    })
  ],
  external: ['vue'] // 依赖模块
}