//practice questions 2.[250,645,300,900,50] all items have 10% offer.
let arr=[250,645,300,900,50];
for(let item of arr)
{
   item=item-(0.1*item);
   console.log(item);
}
for(let i=0;i<arr.length;i++)
{
    arr[i]=arr[i]-(0.1*arr[i]);
}
let output=`the revised array after applying 10%discount on each element is ${arr}`;
console.log(output);