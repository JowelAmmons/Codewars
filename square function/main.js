/*Prep
Parameters -> argument passed in to be squared
Return -> The argument but squared to the power of 2
Example --> Let x = 5 
function example(5){
  something happens
  return
}
expected output: 25
PseudoCode -->
I will need to create a function that can accept an argument and square it.
The square operator is **
return a variable or just the number? */

function square(base){
  let result = Math.pow(base,2)
  return result
}