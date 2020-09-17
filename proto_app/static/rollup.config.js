import typescript from 'rollup-plugin-typescript';
import less from "rollup-plugin-less";
// import multiEntry from "rollup-plugin-multi-entry";


export default {
  input: './src/main.js',
  output: [
    { file: 'public/styles.css' },
    { file: 'release/main.js', format: 'iife' }    
  ],
  plugins: [
    // multiEntry(),
    less(),
    typescript()
  ]
}

