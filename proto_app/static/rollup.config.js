import typescript from 'rollup-plugin-typescript';
import less from "rollup-plugin-less";
import { uglify } from "rollup-plugin-uglify";
import sourcemaps from 'rollup-plugin-sourcemaps';

// import multiEntry from "rollup-plugin-multi-entry";

export default {
  input: './ts/base.ts',
  output: { 
    file: 'js/base.js', 
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    // multiEntry(),
    // sourcemaps(),
    less({
      output: 'style/base.css',
      include: [ 'style/**/*.less' ]
    }),
    typescript({
      lib: ["es6", "dom"], //es5
      target: "es5",
      sourceMap: true      
    })
  ]
}

