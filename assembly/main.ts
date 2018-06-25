// ewasm imports
declare function ethereum_return(dataOffset: i32, length: i32): void;
declare function ethereum_revert(dataOffset: i32, length: i32): void;
declare function ethereum_callDataCopy(resultOffset: i32, dataOffset: i32, length: i32): void;
declare function ethereum_callDataSize(): i32;
declare function ethereum_storageStore(pathOffset: i32, valueOffset: i32): void;
declare function ethereum_storageLoad(pathOffset: i32, resultOffset: i32): void;

// TODO: need to implement a nice wrapper over the native functions which use native types and handle the memory

// ewasm main function
export function main(): void {
  // assume the memory is already expanded..
  ethereum_return(0, ethereum_callDataSize())
}
