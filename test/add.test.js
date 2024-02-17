// use mocha and chai to test the sum function
import {expect} from 'chai';
import add from '../add.js';



// write the test in mocha and chai
describe('calculor function', function() {

  it('should return 0 for an empty string', function() {
    expect(add("")).to.equal(0);
  });

});