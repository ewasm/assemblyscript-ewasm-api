WebAssembly.instantiateStreaming(fetch("../out/main.wasm"), {
  env: {
    ethereum_callDataSize: function() {
      console.log("callDataSize -> 32");
      return "9993021aed09375dc6b20050d242d1611af97ee4a6e93cad".length/2;
    },
    ethereum_return: function(offset, length) {
      console.log("return(" + offset + "," + length + ")");
    }
  }
}).then(result => {
  const exports = result.instance.exports;
  exports.main();
}).catch(console.error);
