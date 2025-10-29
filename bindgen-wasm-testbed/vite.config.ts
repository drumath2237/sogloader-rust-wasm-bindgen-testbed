import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      wasm(),
    ],
    base: mode === "production"
      ? "/sogloader-rust-wasm-bindgen-testbed/"
      : undefined,
  };
});
