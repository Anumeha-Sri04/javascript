//slice(startindex,endindex)=returns a piece of array. This does not change the original array.
//splice(startindex,delcount,newelement)= changes original array(add,remove,replace).
let spices=["cumin","turmeric","chilli powder","sbzi masala"];
console.log(spices);
console.log("the sliced array=", spices.slice(1,3));
let marks=[1,2,3,4,5,6,7,8,9,10,11];
console.log(marks);
marks.splice(4,3,55,45,66);
console.log("the spliced array=",marks);
