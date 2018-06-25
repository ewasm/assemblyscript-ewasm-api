import 'allocator/arena';

// ewasm imports
declare function ethereum_return(dataOffset: i32, length: i32): void;
declare function ethereum_revert(dataOffset: i32, length: i32): void;
declare function ethereum_callDataCopy(resultOffset: i32, dataOffset: i32, length: i32): void;
declare function ethereum_getCallDataSize(): i32;
declare function ethereum_storageStore(pathOffset: i32, valueOffset: i32): void;
declare function ethereum_storageLoad(pathOffset: i32, resultOffset: i32): void;

// TODO: need to implement a nice wrapper over the native functions which use native types and handles the memory.

// ewasm main function
export function main(): void {
  // assume the memory is already expanded..
  // ethereum_return(0, ethereum_callDataSize())

  // Make sure we have enough args
  if (ethereum_getCallDataSize() < 4)
    ethereum_revert(0, 0);

  var ptrSelector : i32 = allocate_memory(4);
  ethereum_callDataCopy(ptrSelector, 0, 4);
  var selector : i32 = load<i32>(ptrSelector);
  switch(selector) {
    case 0x9993021a:
      do_balance();
      break;
    case 0x5d359fbd:
      do_transfer();
      break;
    default:
      ethereum_revert(0, 0);
  }
}

function do_balance(): void {
  if (ethereum_getCallDataSize() !== 24)
    ethereum_revert(0, 0);

  var ptrAddress : i32 = allocate_memory(20);
  ethereum_callDataCopy(ptrAddress, 4, 20);
  var address : i32 = load<i32>(ptrAddress);
  // make sure that address is 160 bits here,
  // but storage key is 256 bits so need to pad it somehow
  var ptrBalance : i32 = allocate_memory(32);
  ethereum_storageLoad(address, ptrBalance);
  ethereum_return(ptrBalance, 32);
}

function do_transfer(): void {

}
