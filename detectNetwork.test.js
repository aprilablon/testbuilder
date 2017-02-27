/*
Test Coverage for detectNetwork.js

Covering the following cards:
- Diner's Club
- American Express
- Visa
- MasterCard
- Discover
- Maestro
- China UnionPay
- Switch
*/

// DINER'S CLUB
describe('Diner\'s Club', function() {
  var expect = chai.expect;

  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  });
});

// AMERICAN EXPRESS
describe('American Express', function() {
  var expect = chai.expect;

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

// VISA
describe('Visa', function() {
  var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

// MASTERCARD
describe('MasterCard', function() {
  var expect = chai.expect;
 
  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '12345678901234')).to.equal('MasterCard');
      });
    })(prefix);
  }
});

//DISCOVER
describe('Discover', function() {
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });
  
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123456')).to.equal('Discover');
      })
    })(prefix);
  }
  
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345678901234567')).to.equal('Discover');
  });
});

// MAESTRO
describe('Maestro', function() {
  var expect = chai.expect;
 
  it('has a prefix of 5018 and length of 12', function() {
    expect(detectNetwork('501812345678')).to.equal('Maestro');
  });
 
  it('has a prefix of 5018 and length of 13', function() {
    expect(detectNetwork('5018123456789')).to.equal('Maestro');
  });
 
  it('has a prefix of 5018 and length of 14', function() {
    expect(detectNetwork('50181234567890')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and length of 15', function() {
    expect(detectNetwork('501812345678901')).to.equal('Maestro');
  });
 
  it('has a prefix of 5018 and length of 16', function() {
    expect(detectNetwork('5018123456789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 5018 and length of 17', function() {
    expect(detectNetwork('50181234567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and length of 18', function() {
    expect(detectNetwork('501812345678901234')).to.equal('Maestro');
  });
 
  it('has a prefix of 5018 and length of 19', function() {
    expect(detectNetwork('5018123456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and length of 12', function() {
    expect(detectNetwork('502012345678')).to.equal('Maestro');
  });
 
  it('has a prefix of 5020 and length of 13', function() {
    expect(detectNetwork('5020123456789')).to.equal('Maestro');
  });
 
  it('has a prefix of 5020 and length of 14', function() {
    expect(detectNetwork('50201234567890')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and length of 15', function() {
    expect(detectNetwork('502012345678901')).to.equal('Maestro');
  });
 
  it('has a prefix of 5020 and length of 16', function() {
    expect(detectNetwork('5020123456789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 5020 and length of 17', function() {
    expect(detectNetwork('50201234567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and length of 18', function() {
    expect(detectNetwork('502012345678901234')).to.equal('Maestro');
  });
 
  it('has a prefix of 5020 and length of 19', function() {
    expect(detectNetwork('5020123456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and length of 12', function() {
    expect(detectNetwork('503812345678')).to.equal('Maestro');
  });
 
  it('has a prefix of 5038 and length of 13', function() {
    expect(detectNetwork('5038123456789')).to.equal('Maestro');
  });
 
  it('has a prefix of 5038 and length of 14', function() {
    expect(detectNetwork('50381234567890')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and length of 15', function() {
    expect(detectNetwork('503812345678901')).to.equal('Maestro');
  });
 
  it('has a prefix of 5038 and length of 16', function() {
    expect(detectNetwork('5038123456789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 5038 and length of 17', function() {
    expect(detectNetwork('50381234567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and length of 18', function() {
    expect(detectNetwork('503812345678901234')).to.equal('Maestro');
  });
 
  it('has a prefix of 5038 and length of 19', function() {
    expect(detectNetwork('5038123456789012345')).to.equal('Maestro');
  }); 

  it('has a prefix of 6304 and length of 12', function() {
    expect(detectNetwork('630412345678')).to.equal('Maestro');
  });
 
  it('has a prefix of 6304 and length of 13', function() {
    expect(detectNetwork('6304123456789')).to.equal('Maestro');
  });
 
  it('has a prefix of 6304 and length of 14', function() {
    expect(detectNetwork('63041234567890')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and length of 15', function() {
    expect(detectNetwork('630412345678901')).to.equal('Maestro');
  });
 
  it('has a prefix of 6304 and length of 16', function() {
    expect(detectNetwork('6304123456789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 6304 and length of 17', function() {
    expect(detectNetwork('63041234567890123')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and length of 18', function() {
    expect(detectNetwork('630412345678901234')).to.equal('Maestro');
  });
 
  it('has a prefix of 6304 and length of 19', function() {
    expect(detectNetwork('6304123456789012345')).to.equal('Maestro');
  });  
});

// CHINA UNIONPAY
describe('China UnionPay', function() {
  var expect = chai.expect;

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '1234567890')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 17', function() {
        expect(detectNetwork(prefix.toString() + '12345678901')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 18', function() {
        expect(detectNetwork(prefix.toString() + '123456789012')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123')).to.equal('China UnionPay');
      });
    })(prefix);
  }
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 17', function() {
        expect(detectNetwork(prefix.toString() + '12345678901234')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 18', function() {
        expect(detectNetwork(prefix.toString() + '123456789012345')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123456')).to.equal('China UnionPay');
      });
    })(prefix);
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '123456789012')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 17', function() {
        expect(detectNetwork(prefix.toString() + '1234567890123')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 18', function() {
        expect(detectNetwork(prefix.toString() + '12345678901234')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix.toString() + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '123456789012345')).to.equal('China UnionPay');
      });
    })(prefix);
  }
});

// SWITCH
describe('Switch', function() {
  var expect = chai.expect;

  it('has a prefix if 4903 and a length of 16', function() {
    expect(detectNetwork('4903123456789012')).to.equal('Switch');
  });
  it('has a prefix if 4903 and a length of 18', function() {
    expect(detectNetwork('490312345678901234')).to.equal('Switch');
  });
  it('has a prefix if 4903 and a length of 19', function() {
    expect(detectNetwork('4903123456789012345')).to.equal('Switch');
  });
  it('has a prefix if 4905 and a length of 16', function() {
    expect(detectNetwork('4905123456789012')).to.equal('Switch');
  });
  it('has a prefix if 4905 and a length of 18', function() {
    expect(detectNetwork('490512345678901234')).to.equal('Switch');
  });
  it('has a prefix if 4905 and a length of 19', function() {
    expect(detectNetwork('4905123456789012345')).to.equal('Switch');
  });
  it('has a prefix if 4911 and a length of 16', function() {
    expect(detectNetwork('4911123456789012')).to.equal('Switch');
  });
  it('has a prefix if 4911 and a length of 18', function() {
    expect(detectNetwork('491112345678901234')).to.equal('Switch');
  });
  it('has a prefix if 4911 and a length of 19', function() {
    expect(detectNetwork('4911123456789012345')).to.equal('Switch');
  });
  it('has a prefix if 4936 and a length of 16', function() {
    expect(detectNetwork('4936123456789012')).to.equal('Switch');
  });
  it('has a prefix if 4936 and a length of 18', function() {
    expect(detectNetwork('493612345678901234')).to.equal('Switch');
  });
  it('has a prefix if 4936 and a length of 19', function() {
    expect(detectNetwork('4936123456789012345')).to.equal('Switch');
  });
  it('has a prefix if 6333 and a length of 16', function() {
    expect(detectNetwork('6333123456789012')).to.equal('Switch');
  });
  it('has a prefix if 6333 and a length of 18', function() {
    expect(detectNetwork('633312345678901234')).to.equal('Switch');
  });
  it('has a prefix if 6333 and a length of 19', function() {
    expect(detectNetwork('6333123456789012345')).to.equal('Switch');
  });
  it('has a prefix if 6759 and a length of 16', function() {
    expect(detectNetwork('6759123456789012')).to.equal('Switch');
  });
  it('has a prefix if 6759 and a length of 18', function() {
    expect(detectNetwork('675912345678901234')).to.equal('Switch');
  });
  it('has a prefix if 6759 and a length of 19', function() {
    expect(detectNetwork('6759123456789012345')).to.equal('Switch');
  });
  it('has a prefix if 564182 and a length of 16', function() {
    expect(detectNetwork('5641821234567890')).to.equal('Switch');
  });
  it('has a prefix if 564182 and a length of 18', function() {
    expect(detectNetwork('564182123456789012')).to.equal('Switch');
  });
  it('has a prefix if 564182 and a length of 19', function() {
    expect(detectNetwork('5641821234567890123')).to.equal('Switch');
  });
  it('has a prefix if 633110 and a length of 16', function() {
    expect(detectNetwork('6331101234567890')).to.equal('Switch');
  });
  it('has a prefix if 633110 and a length of 18', function() {
    expect(detectNetwork('633110123456789012')).to.equal('Switch');
  });
  it('has a prefix if 633110 and a length of 19', function() {
    expect(detectNetwork('6331101234567890123')).to.equal('Switch');
  });
});
