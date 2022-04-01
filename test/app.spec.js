const assert = require('assert');
const { getKilograms, addTwoNums } = require('../src/app');

describe('getKilograms', () => { //arrow functions are discouraged - read Mocha documnation on this later
  it('should convert pounds or lbs to kilograms or kg for all values in an array', () =>{
    const result = getKilograms([100, 200, 150, 50]);
    assert.equal(result, [45.36, 90.72, 68.04, 22.68]); //the expected are integers but the actual are strings
    // expect(getKilograms([100, 200, 150, 50]).to.deep.equal([45.36, 54.43, 68.04, 22.68])) //factors of 10
  })
})

describe('addTwoNums', () => { //arrow functions are discouraged - read Mocha documnation on this later
  it('should add two numbers and return the sum of the two numbers', () =>{
    const result = addTwoNums(2,2);
    assert.equal(result, 4); //the expected are integers but the actual are strings
    // expect(getKilograms([100, 200, 150, 50]).to.deep.equal([45.36, 54.43, 68.04, 22.68])) //factors of 10
  })
})