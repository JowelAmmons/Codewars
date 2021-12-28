/* 
Parameter ---> Birds -> a passed in argument that is passed in as a string of words. There will be no numerical values placed inside of this argument.

Result ---> The passed in argument will be filtered out against a already defined array of strings. var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; The output will have the remianing strings that did not did not get filtered out. This will be in an a array.

Example ---> She sell sea shells down by the sea shore
filter: sea, shell
result: She sell down by the shore

Psuedo Code: 
I know I will be using a type of filtering method to go through the passed in argument to look for specific words/strings already defined for me to filter out the array. The argument passed in will most likely not be an array. I may need to change the argument into an array in order to use javascript array methods on the argument. The argument passed in will have to return the remaining objects in the array minus the filtered out words. I do not have to return the filtered out words, just filter the array of the words that are pre-defined. 


*/

birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return gooseFilter.map(geese);
  // return an array containing all of the strings in the input array except those that match strings in geese
};
