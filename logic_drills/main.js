/* 
Parameter --> update_light('green')

return ---> next color should be yellow

example update_light('green'){
  return yellow
}

psudeo code --> You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

I think if else statments to set conditionals based off what argument is passed is acceptable.
*/

function updateLight(current) {
  if( current === "green"){
    let current = "yellow"
    return current
}else if( current === "yellow"){
  let current = "red"
  return current
}else if( current === "red" ){
  let current = "green"
  return current
}
}