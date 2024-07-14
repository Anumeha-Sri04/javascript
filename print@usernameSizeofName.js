//practice question. Prompt the user to enter their full name and generate their user name starting with @ and ending with size of their name.
let str=prompt("enter your full name to generate a user name");
let str2=str.length;
let str5=str.toLowerCase();
let str4=str5.concat(str2);
let str1=`@${str4}`;
let str3=`@${str5}${str2}`;
console.log(str1);
console.log(str3);//6 to 8