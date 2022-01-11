function highAndLow(numbers){
  // ...
  let newSort = numbers.split(' ').sort((a,b) => a-b);
  
  if(newSort.length <= 1){
    return newSort[0] + ' ' + newSort[0];
  }
  
  else {
  return newSort.pop() + ' ' + newSort.shift();
    }
}