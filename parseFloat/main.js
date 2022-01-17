function parseF(s) {
  if (Number.isNaN(parseFloat(s))){
    return null
  }
  else {
    return parseFloat(s)
  }
}