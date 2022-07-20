console.log("hello from script")

var x = 5 //create a box with 5 in it label x
console.log("x is ",x)
//chaange the value
var x = 10 //value is now 1`0 in box x
console.log("x is ",x)//print the box x value

// some value that will change
var balance = 1000
console.log("before deposit", balance)
var deposit = 9000
balance = balance +  deposit
console.log("after deposit", balance)

//can also change, it is a scoped variable
let credit_card_debt = 10000

//this value should never change
const gravity = 9.8

var my_senctence = "Today is a beautiful day"
var my_senctence2 = "Jonathon's dog went missing"
var my_senctence3 = "Jonathon's dog went missing"

var y = 5 + 5
console.log("y",y)
var my_name = "jonathon"
//concatenation
var greeting = "Hello " + my_name +" it is nice to meet you"
console.log(greeting)

//be careful with string concatenation
var wrongBankGreeting = "Hello " + my_name +" your balnace is" + balance + deposit
console.log(wrongBankGreeting)
var bankGreeting = "Hello " + my_name +" your balnace is" + (balance + deposit)
console.log(bankGreeting)

var bankGreetingFormatted = `Hello ${my_name} your balnace is ${(balance + deposit)}`
console.log(bankGreetingFormatted)


//expressions

var userAge = 21
//assign result of expression to a variable
var isUserOver25 = userAge >= 25
console.log("is user over 25", isUserOver25)