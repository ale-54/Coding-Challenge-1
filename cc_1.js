//Task 1 - Employee Information
let employeeName = `Chicken Nuggs`; //employee's name
const employeeID = 15632; //employee's ID
var isActive = true; //employee's activity status
console.log(typeof employeeName);
console.log(typeof employeeID);
console.log(typeof isActive);

//Task 2 - Product Details
let productName = `Lachlan Sad Rat`; //product name
const productPrice = 33.00; //product price
var isAvailable = true; //product availability status
console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof isAvailable);

//Task 3 - Financial Transactions
let accountBalance = 384; //account balance
accountBalance -=200;
console.log(accountBalance); //184
accountBalance +=1000;
console.log(accountBalance); //1384
accountBalance *=1.5;
console.log(accountBalance); //576
accountBalance /=2;
console.log(accountBalance); //192

//Task 4 - Customer Messaging
let customerName = `Mordecai Bird`; //customer's name
let welcomeName = `Hi ` + customerName `, Thank you for checking out our store!`;
console.log(welcomeName); //Hi Mordecai Bird, Thank you for checking out our store!

//Task 5 - Access Control
let isLoggedIn = true;
if (isLoggedIn) {
    console.log(`Welcome!`);
} else {
    console.log(`Denied.`);
}