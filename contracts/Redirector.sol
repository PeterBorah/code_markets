contract Redirector {
  address target;

  function set_target(address _target) {
    target = _target;
  }

  function() {
    target.call(msg.data);
  }
}
