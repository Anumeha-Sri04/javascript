//array is a object type
//string are immutable whereas arrays are mutable 
//it means that we can change a value of element in array at a certain index but the same can't be done for strings
let heroes=["ironman","thor","flash","zoom"];
for(hero of heroes)
{
    console.log(hero.toUpperCase());
}
console.log("length of array=",heroes.length);
for(let i=0;i<heroes.length;i++)
    {
        console.log(heroes[i]);
    }
