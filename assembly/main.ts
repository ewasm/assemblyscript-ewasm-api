import 'allocator/arena';

// ewasm imports
declare function ethereum_return(dataOffset: i32, length: i32): void;
declare function ethereum_revert(dataOffset: i32, length: i32): void;
declare function ethereum_callDataCopy(resultOffset: i32, dataOffset: i32, length: i32): void;
declare function ethereum_getCallDataSize(): i32;
declare function ethereum_getCaller(dataOffset: i32): void;
declare function ethereum_storageStore(pathOffset: i32, valueOffset: i32): void;
declare function ethereum_storageLoad(pathOffset: i32, resultOffset: i32): void;
declare function debug_printMemHex(dataOffset: i32, length: i32): void;

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
  var ptrBalance : i32 = allocate_memory(32);
  ethereum_storageLoad(ptrAddress, ptrBalance);
  debug_printMemHex(ptrAddress, 32);
  debug_printMemHex(ptrBalance, 32);
  ethereum_return(ptrBalance, 32);
}

function do_transfer(): void {
  if (ethereum_getCallDataSize() !== 32)
    ethereum_revert(0, 0);

  var ptrSender : i32 = allocate_memory(32);
  ethereum_getCaller(ptrSender);
  var ptrRecipient : i32 = allocate_memory(32);
  ethereum_callDataCopy(ptrRecipient, 4, 20);
  var ptrValue : i32 = allocate_memory(32);
  ethereum_callDataCopy(ptrValue, 24, 8);
  debug_printMemHex(ptrValue, 32);
  var ptrSenderBalance = allocate_memory(32);
  var ptrRecipientBalance = allocate_memory(32);
  ethereum_storageLoad(ptrSender, ptrSenderBalance);
  ethereum_storageLoad(ptrRecipient, ptrRecipientBalance);
  debug_printMemHex(ptrSender, 32);
  debug_printMemHex(ptrRecipient, 32);
  debug_printMemHex(ptrSenderBalance, 32);
  debug_printMemHex(ptrRecipientBalance, 32);

  var senderBalance = load<i32>(ptrSenderBalance);
  var recipientBalance = load<i32>(ptrRecipientBalance);
  var value = load<i32>(ptrValue);
  
  if (senderBalance < value)
    ethereum_revert(0, 0);

  store<i32>(ptrSenderBalance, senderBalance - value);
  store<i32>(ptrRecipientBalance, recipientBalance + value);
  ethereum_storageStore(ptrSender, ptrSenderBalance);
  ethereum_storageStore(ptrRecipient, ptrRecipientBalance);
}

