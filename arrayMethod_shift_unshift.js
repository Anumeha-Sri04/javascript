//unshift() method= adds an element at the start.It is just like push()
//shift() method= deletes from start and returns. It is just like pop()
let foodItems=["jalapeno","orange","biscuits","apple"];
console.log("the size of original array is =", foodItems.length);
console.log(foodItems);
foodItems.unshift("chips","burger","pizza");
console.log("the size of updated array=",foodItems.length);
console.log(foodItems);

let greetings=["hello","namaste","bonjour","hola","konnichiwaa","nihao"];
console.log(greetings);
let deletedGreeting= greetings.shift();
console.log(greetings);
console.log("deleted=", deletedGreeting);