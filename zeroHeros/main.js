function noBoringZeros(x) {
  let a = x.toString().split('');
  for(let i = a.length -1; i >= 0; i--){
    if (a[i] == 0){
        a.pop()
    }else{
        break
    }
  }
return Number(a.join(''))
}
