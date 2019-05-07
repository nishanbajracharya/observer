import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: [{
    file: 'lib/observer.js',
    format: 'iife',
    name: 'Observer',
  }, {
    file: 'lib/observer.cjs.js',
    format: 'cjs',
  },
  {
    file: 'lib/observer.esm.js',
    format: 'esm',
  }],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
