const gulp = require("gulp");

gulp.task("build", callback => {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    "main.ts",
    "--lib" , "assembly/lib",
    "--baseDir", "assembly/src",
    "--binaryFile", "../../build/main.wasm",
    "--textFile", "../../build/main.wat",
    "--validate",
    "--optimize",
    "--sourceMap",
    "--measure"
  ], callback);
});

gulp.task("default", ["build"]);

gulp.task("project:load", () => { // WebAssembly Studio only
  const utils = require("@wasm/studio-utils");
  utils.eval(utils.project.getFile("setup.js").getData(), {
    logLn,
    project,
    monaco,
    fileTypeForExtension,
  });
});
