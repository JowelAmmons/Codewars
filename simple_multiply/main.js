/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// PREP
// Paremeters --> If number is even multi by 8 else by 9
// Return --> 2 * 8 --> 3 * 9 
// Example --> multi even & odd(2,3)
// Pseudocode -->
Will need to create a if else statement to account for even or odd. 
Need to use modulus in order to find even or odd.
will need to have no remainder in order to be even else it will be odd. 

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
  if(number % 2 === 0){
    number = number * 8
    return number
  }else {
    number = number * 9
    return number
  }
}
