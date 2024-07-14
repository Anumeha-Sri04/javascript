//string methods
const obj=
{
    namae:"Anumeha",
    age:"   nineteen 19 ",
    cgpa:9.8,
};
let str=obj.namae;
let str1=obj.age;
let str2=str1.trim();
console.log(str.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());
console.log(str.slice(1,4));
console.log(str.concat(str2));
console.log(str.replace("A","n"));
console.log(str.charAt(1));