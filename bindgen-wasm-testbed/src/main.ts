import "./style.css";

import  { sum_array } from "../wasm/rust-wasm-bindgen-testbed";

async function main() {
  console.log(sum_array(new Int32Array([1, 2, 3, 4])));
}

main();
