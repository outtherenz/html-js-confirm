import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/html-js-confirm.esm.js',
    format: 'esm',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
  ],
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/html-js-confirm.amd.js',
    format: 'amd',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
  ],
}, {
  input: 'src/index.js',
  output: {
    name: 'confirm',
    file: 'dist/html-js-confirm.js',
    format: 'umd',
  },
  plugins: [
    commonjs(),
    nodeResolve({ browser: true }),
    terser({ ecma: 2015 }),
  ],
}];
