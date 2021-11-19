/* 
Parameter ---> My paramater(s) are going to be two array that contain only one number each inside of them.

Result ---> The result will be the sum of all the entered parameters (arrays)

Example ---> arr1(1) + arr2(2) + arr3(3) = 5

Psuedo Code: I know I will be adding arrays together because I am looking for the sum of the two arrays and the result will be the addition of these arrays combined. Each array only contains on interger numbers so we can assume that the arrays will decimal or factoral numbers. They will be whole numbers.



*/


function arrayPlusArray(arr1, arr2) {
  
  return arr1.reduce((a,c)=>a*c,1) + arr2.reduce((a,c)=>a+c,0); 
}

