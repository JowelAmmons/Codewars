function checkExam(arr1, arr2) {
  let arr = [];
  let right = 4;
  let wrong = -1;
  let blank = 0;
  
   for(let i = 0; i < arr1.length; i++){
     if(arr2[i] === arr1[i]){
          arr.push(right)
     } 
     else if(arr2[i] !== arr1[i] && arr2[i] !== ''){
       arr.push(wrong)
     }
     else if(arr2[i] === ''){
       arr.push(blank)
     }
    }
    let final = arr.reduce((a, b) => a + b, 0)
    return final > 0 ? final : 0
}