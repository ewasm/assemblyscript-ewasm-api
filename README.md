# Ewasm AssemblyScript demo

The AssemblyScript project in this repository is a proof of concept barebones "ERC-20 style" implementation of a simple ledger. The main code lives in [main.ts](https://github.com/lrettig/wrc20-challenge/blob/master/assembly/main.ts). It allows anyone to check the token balance of an account, and a tokenholder to transfer some of their tokens to another account. Sample transaction data may be found on the [coding challenge gist](https://gist.github.com/axic/16158c5c88fbc7b1d09dfa8c658bc363).

## Steps to compile, deploy, and test

1. Use [WebassemblyStudio](https://webassembly.studio/) or another IDE to bootstrap the project and edit `main.ts`.
2. If using WebassemblyStudio, download the project code.
3. Navigate to the top directory of the project and run `npm install`.
4. Run `npm run build` to compile the AssemblyScript source to WASM bytecode. Find the compiled `main.wasm` file in the `build/` directory. At this point you have a valid WASM binary.

You now have a valid ewasm-compatible WAST which is ready to be deployed to the ewasm testnet using a tool such as [ewasm-studio](https://github.com/ewasm/ewasm-studio).

Another option is to test the code using `testeth`. See [this example](https://github.com/lrettig/tests/blob/wrc20-challenge/src/GeneralStateTestsFiller/stEWASMTests/wrc20ChallengeFiller.yml) of a test filler that fully tests this code.
