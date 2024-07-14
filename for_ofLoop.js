//for of loop(generally used with strings and arrays)
//for in loops used for objects and arrays
const profile=
{
    age:19,
    gender:"M",
    profession:"softwareengineer",
}; 
let str=profile.profession;
let size=0;
for(let i of str)//i is our iterator which gets the face value of each character in string.
{
    console.log("i= ",i);
    size++;
}
console.log("size= ",size);