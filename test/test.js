const assert = require('chai').assert;
const multiply = require('../test/multiply');

describe('My first TDD Code assignment', function(){
    
  it('1 times 1 = 1: Failed test', function(){
      assert.equal(multiply(1,1), 0);
  });
  
  //First Test
  it('1 times 1 = 1', function(){
      assert.equal(multiply(1,1), 1);
  });
  //Second Test
  it('Second test', function(){
      assert.equal(multiply(2,2), 4);
  });
  //Third Test
  it('Third test', function(){
      assert.equal(multiply(3,3), 9);
  });
  //Fourth test
  it('Fourth test', function(){
      assert.equal(multiply(4,4), 16);
  });
  //Fifth test
  it('Fifth test', function(){
    assert.equal(multiply(23,45), 23*45);
  });

});
