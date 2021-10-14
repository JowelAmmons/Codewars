/* 
Parameter ---> argument gets passed

Result ---> returns even for even numbers or Odd for odd numbers.

Example ---> evenOdd(6){
  return
}
Even

Psuedo Code
Possible to use if else statements or a turnery statement however, I am not proficient enough with that yet. 

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/


function even_or_odd(number) {
  if(number % 2 === 0 ){
  number = "even"
  return number;
}else{
  number = "odd"
  return number
}}
