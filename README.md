# Ewasm AssemblyScript demo

The AssemblyScript project in this repository is a proof of concept barebones "ERC-20 style" implementation of a simple ledger. The main code lives in [main.ts](https://github.com/lrettig/wrc20-challenge/blob/master/assembly/main.ts). It allows anyone to check the token balance of an account, and a tokenholder to transfer some of their tokens to another account. Sample transaction data may be found on the [coding challenge gist](https://gist.github.com/axic/16158c5c88fbc7b1d09dfa8c658bc363).

## Steps to compile, deploy, and test

1. Use [WebassemblyStudio](https://webassembly.studio/) or another IDE to bootstrap the project and edit `main.ts`.
2. If using WebassemblyStudio, download the project code.
3. Navigate to the top directory of the project and run `npm install`.
4. Run `npm build` to compile the AssemblyScript source to WASM bytecode. Find the compiled `wasm.out` file in the `out/` directory. At this point you have a valid WASM binary but it's not ready to be deployed onto Ethereum just yet. You need to fix the import names and namespaces. We're working on a tool to automate this process but for now this must be done by hand.
5. If you haven't already, download and compile the [WebAssembly binary toolkit (WABT)](https://github.com/WebAssembly/wabt):
```
> git clone --recursive https://github.com/WebAssembly/wabt ~/wabt
> cd ~/wabt
> make
```
6. Use WABT to convert the WASM bytecode to WAST (WebAssembly text format). This will let us edit the raw WAST.
```
> ~/wabt/bin/wasm2wat main.wasm > main.wast
```
7. Open `main.wast` in your favorite text editor. For each `import` at the top, change the `"env"` namespace to `"ethereum"` and remove the `ethereum_` from the name of the function to import. For example, this:
```
(import "env" "ethereum_getCallDataSize" (func $main/ethereum_getCallDataSize (type $t1)))
```
Should become this:
```
(import "ethereum" "getCallDataSize" (func $main/ethereum_getCallDataSize (type $t1)))
```
You now have valid ewasm-compatible WAST which is ready to be deployed to the ewasm testnet using a tool such as [ewasm-studio](https://github.com/ewasm/ewasm-studio). If you need to compile this back to WASM bytecode, you can do so using the `wabt/bin/wat2wasm` compiler.

Another option is to test the code using `testeth`. See [this example](https://github.com/lrettig/tests/blob/wrc20-challenge/src/GeneralStateTestsFiller/stEWASMTests/wrc20ChallengeFiller.yml) of a test filler that fully tests this code.
