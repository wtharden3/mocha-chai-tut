const assert = require('assert');
const { expect } = require('chai');
const { getKilograms, addTwoNums } = require('../src/app');

describe('getKilograms', () => { //arrow functions are discouraged - read Mocha documnation on this later
  it('should convert pounds or lbs to kilograms or kg for all values in an array', () =>{
    const result = getKilograms([100,200,150,50]);
    expect(result).to.deep.equal([45.36,90.72,68.04,22.68]) //need to be == to.deep.equal https://stackoverflow.com/questions/58641369/chai-assertion-error-when-comparing-arrays
  })
})

describe('addTwoNums', () => { //arrow functions are discouraged - read Mocha documnation on this later
  it('should add two numbers and return the sum of the two numbers', () => {
    const result = addTwoNums(2,2);
    // assert.equal(result, 4); //the expected are integers but the actual are strings
    expect(result).to.be.eq(4);
    
    
    

    // not working
    // expect(addTwoNums('hello',undefined)).to.be.eq(`Both these values must be a number`);
  });

  it('should be able to handle two 0\'s', () => {
    const result = addTwoNums(0,0);
    expect(result).to.be.eq(0);
  });

  it('should be able to handle an undefined value and another number', () => {
    const result = addTwoNums(undefined,0);
    expect(result).to.be.eq(0);
  });

  it('should be able to handle two undefined values as parameters', () => {
    const result = addTwoNums(undefined,undefined);
    expect(result).to.be.eq(0);
  });

  it('should be able to handle an undefined value and a null value as parameters', () => {
    const result = addTwoNums(null,undefined);
    expect(result).to.be.eq('Both these values must be a number');
  });

  it('should be able to handle invalid values such as a string as parameters', () => {
    const result = addTwoNums('hello',undefined);
    expect(result).to.be.eq('Both these values must be a number');
  });

})