//practiceset2
//problem no 1

// const prompt = require('prompt-sync')();

// let age = prompt ("what is your age");
// age = Number.parseInt(age)

// if(age>10 && age<=20)
// {
//     console.log("Your age lies between 10 and 20 ")
// }
// else{
//     console.log("Your age doesnot lies between 10 and 20 ")
// }


//problem 2


// const prompt = require('prompt-sync')();

// let age = prompt ("what is your age?");

// switch (age) {
//     case '12' :
//         console.log("Your age is 12")
//         break
    
//     case '13' :
//         console.log("Your age is 13")
//         break 

//     case '14' :
//         console.log("Your age is 14")
//         break 

//     default:
//         console.log("Your age is not Special")

// }


//problem 3

const prompt = require('prompt-sync')();
let num = prompt("what is your age?");
num = Number.parseInt(num)

if ( num % 2 == 0 && num % 3 ==0)
{
    console.log("Your number is divisible by 2 and 3")
}

else
{
    console.log("Your number is not divisible by 2 and 3")
}

let a = num >18 ? "you can drive" : "can not drive"
console.log(a)