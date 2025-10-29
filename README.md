# rust-wasm-bindgen-testbed

[![Build](https://github.com/drumath2237/sogloader-rust-wasm-bindgen-testbed/actions/workflows/on_push.yml/badge.svg)](https://github.com/drumath2237/sogloader-rust-wasm-bindgen-testbed/actions/workflows/on_push.yml)

## About

A testbed project for create WASM by wasm-bindgen and use with Vite TypeScript Project.
This is one of a testbed of [sog-loader](https://github.com/users/drumath2237/projects/32) Dev Project.

## Environment

- Windows 11 Home
- Rust (Cargo) 1.90.0
  - wasm32-unknown-unknown platform
- wasm-bindgen-cli 0.2.104
- Vite 7.1.7

## Install

Install Rust by `rustup` and add wasm32 target.

```sh
rustup target add wasm32-unknown-unknown
```

Install wasm-bindgen-cli

```sh
cargo install -f wasm-bindgen-cli --version 0.2.104
```

Install Vite project dependencies.

```sh
cd bindgen-wasm-testbed

pnpm i
```

## Usage

Build wasm with cargo, and run wasm-bindgen.

```sh
# cargo build
cargo build --target wasm32-unknown-unknown

# bindgen
wasm-bindgen \
  ./target/wasm32-unknown-unknown/debug/rust-wasm-bindgen-testbed.wasm \
  --out-dir ./bindgen-wasm-testbed/wasm/ \
  --target bundler
```

Build Vite Web project.

```sh
cd bindgen-wasm-testbed

pnpm build
```

## Contact

[@drumath2237](https://x.com/ninisan_drumath)
