// This file sets up functions provided by the VM for use with AssemblyScript

import "allocator/arena";

@external("return")
export declare function finish(dataOffset: i32, length: i32): void;

export declare function revert(dataOffset: i32, length: i32): void;

export declare function callDataCopy(resultOffset: i32, dataOffset: i32, length: i32): void;

export declare function getCallDataSize(): i32;

export declare function getCaller(dataOffset: i32): void;

export declare function storageStore(pathOffset: i32, valueOffset: i32): void;

export declare function storageLoad(pathOffset: i32, resultOffset: i32): void;

@external("debug", "printMemHex")
export declare function printMemHex(dataOffset: i32, length: i32): void;

// TODO: need to implement a nice wrapper over the native functions which use native types and handles the memory.
