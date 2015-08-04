contract('Redirector', function(accounts) {
  it("should work like the redirected contract", function(done) {
    var redirector = Redirector.at(Redirector.deployed_address);
    var mul2 = Mul2.at(Mul2.deployed_address);

    redirector.set_target(Mul2.deployed_address).
    then(function() {
      var fake_mul2 = Mul2.at(redirector.address);

      fake_mul2.mul2(43).
      then(function() { return mul2.last_result.call() }).
      then(function(result) {
        assert.equal(result, 86);
        done();
      }).catch(done)
    }).catch(done)
  });
});
