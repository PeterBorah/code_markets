contract('Mul2', function(accounts) {
  it("should multiply by 2", function(done) {
    var mul2 = Mul2.at(Mul2.deployed_address);

    mul2.mul2(42).
    then(function() { return mul2.last_result.call() }).
    then(function(result) {
      assert.equal(result, 84);
      done();
    }).catch(done)
  });
});
