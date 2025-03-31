import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/codec.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  dts: true,
  sourcemap: true,
  clean: true,
});
