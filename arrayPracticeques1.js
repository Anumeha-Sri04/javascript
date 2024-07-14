//practice question.Find average of given marks of students[85,97,44,37,76,60]
let arr=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
}
let avg=sum/(arr.length);
console.log("average=",avg);