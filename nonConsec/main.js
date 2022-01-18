function firstNonConsecutive(arr) {
  let array = []
  for (let i = 0; i < arr.length - 1; i++) {
    let New = arr[i] + 1 
    let Number = arr[i + 1]
    if (New !== Number) return Number
  }
    return null
}
