import dts from "rollup-plugin-dts";
const Dts = {
  input: "src/index.ts",
  output: {
    file: "dist/index.d.ts",
    format: "es",
  },
  plugins: [dts()],
};
export default [Dts];
