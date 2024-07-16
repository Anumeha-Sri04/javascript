let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//remove the first company from the array.
let deletedCompany=companies.shift();
console.log(companies);
console.log("the deleted company=",deletedCompany);
//replacing uber with Ola.
console.log(companies);
companies.splice(1,1,"Ola");
console.log("Uber replaced with Ola",companies);
//adding Amazon in the end
companies.push("Amazon");
console.log("added amazon at the end",companies);