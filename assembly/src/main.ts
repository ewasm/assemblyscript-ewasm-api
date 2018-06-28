const DEBUG = false;

// ewasm main function
export function main(): void {
  // assume the memory is already expanded..
  // ethereum_return(0, ethereum_callDataSize())

  // Make sure we have enough args
  if (getCallDataSize() < 4)
    revert(0, 0);

  var ptrSelector = <i32>allocate_memory(4);
  callDataCopy(ptrSelector, 0, 4);
  var selector = load<i32>(ptrSelector);
  switch(selector) {
    case 0x9993021a:
      do_balance();
      break;
    case 0x5d359fbd:
      do_transfer();
      break;
    default:
      revert(0, 0);
  }
}

function do_balance(): void {
  if (getCallDataSize() !== 24)
    revert(0, 0);

  var ptrAddress = <i32>allocate_memory(20);
  callDataCopy(ptrAddress, 4, 20);
  var ptrBalance = <i32>allocate_memory(32);
  storageLoad(ptrAddress, ptrBalance);
  if (DEBUG) {
    printMemHex(ptrAddress, 32);
    printMemHex(ptrBalance, 32);
  }
  finish(ptrBalance, 32);
}

function do_transfer(): void {
  if (getCallDataSize() !== 32)
    revert(0, 0);

  var ptrSender = <i32>allocate_memory(32);
  getCaller(ptrSender);
  var ptrRecipient = <i32>allocate_memory(32);
  callDataCopy(ptrRecipient, 4, 20);
  var ptrValue = <i32>allocate_memory(32);
  callDataCopy(ptrValue, 24, 8);
  // debug_printMemHex(ptrValue, 32);
  var ptrSenderBalance = <i32>allocate_memory(32);
  var ptrRecipientBalance = <i32>allocate_memory(32);
  storageLoad(ptrSender, ptrSenderBalance);
  storageLoad(ptrRecipient, ptrRecipientBalance);
  if (DEBUG) {
    printMemHex(ptrSender, 32);
    printMemHex(ptrRecipient, 32);
    printMemHex(ptrSenderBalance, 32);
    printMemHex(ptrRecipientBalance, 32);
  }
  var senderBalance = load<i32>(ptrSenderBalance);
  var recipientBalance = load<i32>(ptrRecipientBalance);
  var value = load<i32>(ptrValue);

  if (senderBalance < value)
    revert(0, 0);

  store<i32>(ptrSenderBalance, senderBalance - value);
  store<i32>(ptrRecipientBalance, recipientBalance + value);
  storageStore(ptrSender, ptrSenderBalance);
  storageStore(ptrRecipient, ptrRecipientBalance);
}
