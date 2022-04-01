// lbs to kg
// [100, 200, 150, 50] => [45, 90, 67.5, 22.5]
// (lbs / 2) - (lbs * 1/10) 
// ex (100/2) = 50kg 
// then (50kg * 1/10) = 5kg
// then 50kg - 5kg = 45kg
// (100/2) - ((100/2)* 1/10) = 45kg
//return pounds.map(pound => (pound/2) - ((pound/2)* 1/10));
//(pound/2.2046).toFixed(2)
//[100, 120, 150, 50] => [45.36, 54.43, 68.04, 22.68]

const getKilograms = (pounds) => {
  //pounds.map(pound => (pound/2.2046).toFixed(2)) parseFloat
  return pounds.map(pound => parseFloat((pound/2.2046).toFixed(2)));
}

const addTwoNums = (num1 = 0, num2 = 0) => {
  if (num1 === undefined) num1 = 0;
  if (num2 === undefined) num2 = 0;
  if((Number.isInteger(num1)) && (Number.isInteger(num2))){
    return num1 + num2;
  } else {
    return `Both these values must be a number`;
  }  
}

// option 2
const add = (a,b) => {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 0;
  } 
  return a + b;
}

module.exports = {
  getKilograms,
  addTwoNums,
  add
}