//using Array methods push(), pop(),toString();
//using push() method.This method is used to add any element at the end of our array.
//methods are of two types in array since arrays are immutable, first = those which change in the existing array and return the original updated array.
//the other type is the one which does no change in the original array and returns a new array after updating the change.
let foodItems=["jalapeno","orange","biscuits","apple"];
console.log("the size of original array is =", foodItems.length);
console.log(foodItems);
foodItems.push("chips","burger","pizza");
console.log("the size of updated array=",foodItems.length);
console.log(foodItems);
