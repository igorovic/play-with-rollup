  
import fs from "fs";
import path from "path";
//import typescript from "@rollup/plugin-typescript";
//import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import fg from "fast-glob";
//import html from "rollup-plugin-html";
import njk from "./rollup-plugins/import-njk";

//import nunjucks from "nunjucks";

// const entries = fg.sync(["./templates/**/*.njk"], { dot: false });

// let templates = entries.map((templateFile) => {
//   const buffBase = fs.readFileSync("./templates/base.njk"); //should return a buffer
//   const b64Src = buffBase.toString("base64");
//   return {
//     name: path.basename(templateFile),
//     src: b64Src,
//   };
// });

// templates = JSON.stringify(templates);

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    resolve(),
    commonjs(),
    /* replace({
      values: {
        __templates: templates,
      },
      preventAssignment: true,
    }), */
    njk(),
    //typescript(),
  ],
};