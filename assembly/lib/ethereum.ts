// This file sets up functions provided by the VM for use with AssemblyScript

import "allocator/arena";

export declare function useGas(amount: i64): void;

export declare function getGasLeft(): i64;

export declare function getAddress(resultOffset: usize): void;

export declare function getBalance(addressOffset: usize, resultOffset: usize): void;

export declare function getBlockCoinbase(resultOffset: usize): void;

export declare function getBlockDifficulty(resultOffset: usize): void;

export declare function getBlockGasLimit(): i64;

export declare function getBlockHash(number: i64, resultOffset: usize): void;

export declare function getBlockNumber(): i64;

export declare function getBlockTimestamp(): i64;

export declare function getTxGasPrice(valueOffset: usize): void;

export declare function getTxOrigin(resultOffest: usize): void;

export declare function log(dataOffset: usize, length: i32, numberOfTopics: i32, topic1: i32, topic2: i32, topic3: i32, topic4: i32): void;

export declare function call(gas: i64, addressOffset: usize, valueOffset: usize, dataOffset: usize, dataLength: i32): i32;

export declare function callCode(gas: i64, addressOffset: usize, valueOffset: usize, dataOffset: usize, dataLength: i32): i32;

export declare function callDelegate(gas: i64, addressOffset: usize, dataOffset: usize, dataLength: i32): i32;

export declare function callStatic(gas: i64, addressOffset: usize, dataOffset: usize, dataLength: i32): i32;

export declare function create(valueOffset: usize, dataOffset: usize, length: i32, resultOffset: usize): i32;

export declare function returnDataCopy(resultOffset: usize, dataOffset: usize, length: i32): void;

export declare function getReturnDataSize(): i32;

@external("return")
export declare function finish(dataOffset: usize, length: i32): void;

export declare function revert(dataOffset: usize, length: i32): void;

export declare function callDataCopy(resultOffset: usize, dataOffset: usize, length: i32): void;

export declare function getCallDataSize(): i32;

export declare function getCaller(resultOffset: usize): void;

export declare function getCallValue(resultOffset: usize): void;

export declare function codeCopy(resultOffset: usize, codeOffset: usize, length: i32): void;

export declare function getCodeSize(): i32;

export declare function externalCodeCopy(addressOffset: usize, resultOffset: usize, codeOffset: usize, lengh: i32): void;

export declare function getExternalCodeSize(addressOffset: usize): i32;

export declare function storageStore(pathOffset: usize, valueOffset: usize): void;

export declare function storageLoad(pathOffset: usize, resultOffset: usize): void;

export declare function selfDestruct(addressOffset: usize): void;

@external("debug", "print32")
export declare function print32(value: i32): void;

@external("debug", "print64")
export declare function print64(value: i64): void;

@external("debug", "printMem")
export declare function printMem(dataOffset: usize, length: i32): void;

@external("debug", "printMemHex")
export declare function printMemHex(dataOffset: usize, length: i32): void;

@external("debug", "printStorage")
export declare function printStorage(pathOffset: usize): void;

@external("debug", "printStorageHex")
export declare function printStorageHex(pathOffset: usize): void;

@external("debug", "evmTrace")
export declare function evmTrace(pc: i32, opcode: i32, cost: i32, sp: i32): void;
