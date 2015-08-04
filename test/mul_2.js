contract('Mul2', function(accounts) {
  it("should multiply by 2", function(done) {
    var mul2 = Mul2.at(Mul2.deployed_address);

    mul2.mul2.call(42).
    then(function(result) {
      assert.equal(result, 84);
      done();
    }).catch(done)
  });
});
