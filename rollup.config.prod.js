import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

const plugins = [
  babel({
    babelrc: false,
    presets: ['es2015-rollup'],
    plugins: [['transform-react-jsx', { pragma: 'h' }]]
  }),
  resolve({
    jsnext: true
  }),
  uglify()
]

const config = {
  input: './src/app.js',
  output: {
    name: 'app',
    file: './dist/app.js',
    format: 'iife',
    sourcemap: false
  },
  plugins
}

export default config