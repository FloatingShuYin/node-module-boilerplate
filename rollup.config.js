import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'build/index.esm.js',
      format: 'es'
    }
  ],
  external: ['core-js'],
  plugins: [
    resolve(),
    babel(),
    commonjs(),
    terser({
      output: {
        // 保留版权注释
        comments (node, comment) {
          const text = comment.value
          const type = comment.type
          if (type === 'comment2' /* multiline comment */) {
            return /preserve|license|cc_on/i.test(text)
          }
        }
      }
    }),
    filesize()
  ]
}
