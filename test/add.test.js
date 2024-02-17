// use mocha and chai to test the sum function
import {expect} from 'chai';
import add from '../add.js';



// write the test in mocha and chai
describe('calculor function', function() {

  it('should return 0 for an empty string', function() {
    expect(add([""])).to.deep.equal([0]);
  });

  it('should return sum for an comma seperated string', function() {
    expect(add(["4,5,5"])).to.deep.equal([14]);
  });

  it('should return sum for multiple comma seperated string', function() {
    expect(add(["", "1", "1,5"])).to.deep.equal([0,1,6]);
  });

});