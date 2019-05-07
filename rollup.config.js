import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: 'lib/observer.min.js',
    format: 'umd',
  },
  plugins: [
    uglify(),
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
