contract('Redirector', function(accounts) {
  it("should work like the redirected contract", function(done) {
    var redirector = Redirector.at(Redirector.deployed_address);

    redirector.set_target(Mul2.deployed_address).
    then(function() {
      fake_mul2 = Mul2.at(redirector.address);

      fake_mul2.mul2.call(43).
      then(function(result) {
        assert.equal(result, 86);
        done();
      })
    }).catch(done)
  });
});
