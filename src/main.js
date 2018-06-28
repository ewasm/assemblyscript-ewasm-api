WebAssembly.instantiateStreaming(fetch("../build/main.wasm"), {
  ethereum: {
    callDataSize: function() {
      console.log("callDataSize -> 32");
      return "9993021aed09375dc6b20050d242d1611af97ee4a6e93cad".length/2;
    },
    "return": function(offset, length) {
      console.log("return(" + offset + "," + length + ")");
    }
  }
}).then(result => {
  const exports = result.instance.exports;
  exports.main();
}).catch(console.error);
