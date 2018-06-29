// This file sets up functions provided by the VM for use with AssemblyScript

import "allocator/arena";

export declare function useGas(amount: i64): void;

export declare function getGasLeft(): i64;

export declare function getAddress(resultOffset: i32): void;

export declare function getBalance(addressOffset: i32, resultOffset: i32): void;

export declare function getBlockCoinbase(resultOffset: i32): void;

export declare function getBlockDifficulty(resultOffset: i32): void;

export declare function getBlockGasLimit(): i64;

export declare function getBlockHash(number: i64, resultOffset: i32): void;

export declare function getBlockNumber(): i64;

export declare function getBlockTimestamp(): i64;

export declare function getTxGasPrice(valueOffset: i32): void;

export declare function getTxOrigin(resultOffest: i32): void;

export declare function log(dataOffset: i32, length: i32, numberOfTopics: i32, topic1: i32, topic2: i32, topic3: i32, topic4: i32): void;

export declare function call(gas: i64, addressOffset: i32, valueOffset: i32, dataOffset: i32, dataLength: i32): i32;

export declare function callCode(gas: i64, addressOffset: i32, valueOffset: i32, dataOffset: i32, dataLength: i32): i32;

export declare function callDelegate(gas: i64, addressOffset: i32, dataOffset: i32, dataLength: i32): i32;

export declare function callStatic(gas: i64, addressOffset: i32, dataOffset: i32, dataLength: i32): i32;

export declare function create(valueOffset: i32, dataOffset: i32, length: i32, resultOffset: i32): i32;

export declare function returnDataCopy(resultOffset: i32, dataOffset: i32, length: i32): void;

export declare function getReturnDataSize(): i32;

@external("return")
export declare function finish(dataOffset: i32, length: i32): void;

export declare function revert(dataOffset: i32, length: i32): void;

export declare function callDataCopy(resultOffset: i32, dataOffset: i32, length: i32): void;

export declare function getCallDataSize(): i32;

export declare function getCaller(resultOffset: i32): void;

export declare function getCallValue(resultOffset: i32): void;

export declare function codeCopy(resultOffset: i32, codeOffset: i32, length: i32): void;

export declare function getCodeSize(): i32;

export declare function externalCodeCopy(addressOffset: i32, resultOffset: i32, codeOffset: i32, lengh: i32): void;

export declare function getExternalCodeSize(addressOffset: i32): i32;

export declare function storageStore(pathOffset: i32, valueOffset: i32): void;

export declare function storageLoad(pathOffset: i32, resultOffset: i32): void;

export declare function selfDestruct(addressOffset: i32): void;

@external("debug", "print32")
export declare function print32(value: i32): void;

@external("debug", "print64")
export declare function print64(value: i64): void;

@external("debug", "printMem")
export declare function printMem(dataOffset: i32, length: i32): void;

@external("debug", "printMemHex")
export declare function printMemHex(dataOffset: i32, length: i32): void;

@external("debug", "printStorage")
export declare function printStorage(pathOffset: i32): void;

@external("debug", "printStorageHex")
export declare function printStorageHex(pathOffset: i32): void;

@external("debug", "evmTrace")
export declare function evmTrace(pc: i32, opcode: i32, cost: i32, sp: i32): void;

// TODO: need to implement a nice wrapper over the native functions which use native types and handles the memory.
