import typescript from '@rollup/plugin-typescript'
export default {
  input: 'src/winbox.ts',
  output: {
    file: 'dist/winbox.js',
    format: 'umd',
    name: 'WinBox'
  },
  plugins: [typescript({lib: ['es5', 'es6', 'dom'], target: 'es5'})]
}