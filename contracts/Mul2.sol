contract Mul2 {
  uint public last_result;

  function mul2(uint x) returns(uint result) {
    last_result = x*2;
  }
}
