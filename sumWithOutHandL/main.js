/***Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!) */

function sumArray(array) {
  if(array == null || array.length <= 1) return 0
    let sortedArr = array.sort((a,b) => a - b)
    sortedArr.shift()
    sortedArr.pop()
    return sortedArr.reduce((a,b) => a + b, 0)
  }