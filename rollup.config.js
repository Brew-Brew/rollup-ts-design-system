import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

export default {
  input: "./src/index.ts",
  output: [
    {
      dir: "build",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
  ],
};
