// This file provides syntax highlighting for a TypeScript IDE

declare function finish(dataOffset: i32, length: i32): void;
declare function revert(dataOffset: i32, length: i32): void;
declare function callDataCopy(resultOffset: i32, dataOffset: i32, length: i32): void;
declare function getCallDataSize(): i32;
declare function getCaller(dataOffset: i32): void;
declare function storageStore(pathOffset: i32, valueOffset: i32): void;
declare function storageLoad(pathOffset: i32, resultOffset: i32): void;
declare function printMemHex(dataOffset: i32, length: i32): void;

declare function allocate_memory(size: usize): usize;
declare function free_memory(ptr: usize): void;
declare function reset_memory(): void;
