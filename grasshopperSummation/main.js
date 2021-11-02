/**Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */

var summation = function(num) {
  let array = []
  for(let i = 1; i <= num; i++){
    array.push(i)
  }
  return array.reduce((a, b) => (a + b), 0);
}