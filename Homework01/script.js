// Write a JavaScript program that will
//  calculate the price of 30 Phones, where the price of one phone
// is $119.95 and the tax rate is 5%.

let phone = 119.95;
let phoneCount = 30;
let tax = (phone / 100) * 5;

let result = (phone + tax) * phoneCount;
console.log(result + "$");
