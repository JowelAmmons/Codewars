/***The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times). */

function numberToPower(number, power){ 
  let result = 1;
  for (let count = 0; count < power; count++) {
  result *= number;
  }       
  return result;
} 