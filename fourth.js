//introduction to looping statements(for)
const Alias={
    namae:"Anumeha",
    age:19,
    college:"Banasthali Vidyapith",
    tierofcollege:1,
    naac:"A+++",
}
let n=Alias["namae"];
let a=Alias.age;
let c=Alias.college;
let t=Alias["tierofcollege"];
let na=Alias["naac"];
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=i;j++)
    {
        console.log(n);
    }
    console.log(" ");
}
console.log("loop has ended");