var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('can add', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  })

  it('can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal, 256);
  })

  it('can chain multiple operations together', function(){
    calculator.previousTotal = 4;
    calculator.multiply(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 4;
    calculator.multiply(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 12);
  })

});
