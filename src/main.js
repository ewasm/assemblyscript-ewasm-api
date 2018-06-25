WebAssembly.instantiateStreaming(fetch("../out/main.wasm"), {
  env: {
    ethereum_callDataSize: function() {
      console.log("callDataSize -> 32");
      return 32;
    },
    ethereum_return: function(offest, length) {
      console.log("return(" + offset + "," + length + ")");
    }
  }
}).then(result => {
  const exports = result.instance.exports;
  exports.main();
}).catch(console.error);

