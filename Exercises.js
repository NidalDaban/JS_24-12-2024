
// Exercise #1

// let num1 = 20, num2 = 11;

// if (num1 > 10 && num2 > 10)
// {
//     console.log("Both numbers are greater than 10");
// }
// else
// {
//     console.log("At least one number is not greater than 10");
// }

// Exercise#2

// const userName = "Admin";
// const password = "1234";

// if (userName === "Admin" && password === "1234")
// {
//     console.log("Access granted");
// }
// else
// {
//     console.log("Access denied");
// }

////








// Exercise#3

// let number1 = 21;

// if (number1 >= 10 && number1 <= 20)
// {
//     console.log(`The number ${number1} is between 10 and 20`);
// }
// else
// {
//     console.log("The number is not between 10 and 20");
// }








// Exercise#4

// let age = "18";

// if (age >= 18)
// {
//     console.log("You can drive");
// }
// else
// {
//     console.log("You cannot drive");
// }










// Exercise#5
// let number = -1;

// if (number > 10 || number < 0)
// {
//     console.log("Invalid number");
// }
// else
// {
//     console.log("Valid number");
// }









// Exerxise#6

// let number = 15;

// if (number >= 5 && number <= 10)
// {
//     console.log("The number is valid");
// }
// else if (number >= 20 && number <= 25)
// {
//     console.log("The number is valid");
// }
// else
// {
//     console.log("The number is not valid");
// }








// Exercise#7











// const password = "secret"; // prompt

// if (password === "secret" || password === "password")
// {
//     console.log("Access granted");
// }
// else
//     console.log("Access denied");









// Exercise#8










// let number = 50;

// if ((number >= 0 && number <= 100) && (number % 2 === 0))
// {
//     console.log("The number is even and between 0 and 100");
// }
// else
//     console.log("The number is not even and/or not between 0 and 100");











// Exercise#9











// let num1 = 5, num2 = -4;

// if (num1 < 0 || num2 < 0)
//     console.log("At least one number is negative");
// else
//     console.log("Both numbers are positive");











// exercise#10











// let age = 21;
// let isStudent = true;

// if (age <= 18 || isStudent)
//     console.log("You qualify for a discount");
// else
//     console.log("You do not qualify for a discount");













// ------------------------------------ Task 2 ---------------------------------------------




// Execise#1

// console.log("Print the numbers from 1 to 10:")
// for (let i = 1; i <= 10; i++)
// {
//     console.log(i);
// }











// Exercise#2











// console.log("Even numbers from 1 to 10:");

// for (let i = 1; i <= 10; i++)
// {
//     if (i % 2 === 0)
//         console.log(i);
// }











// Exercise#3











// console.log("Odd numbers from 1 to 10:");

// for (let i = 1; i <= 10; i++)
// {
//     if (i % 2 != 0)
//         console.log(i);
// }











// Exercise#4










// console.log("Multiplication Table:\n");

// var number = 5;

// for (let i = 1; i <= number; i++)
// {
//     for (let j = 1; j <= number; j++)
//     {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log("\n");
// }











// Exercise#5









// let sum = 0, number = 1;

// while (number <= 100)
// {
//     sum += number;
//     number++;
// }

// console.log("The sum of numbers from 1 to 100 = " + sum);











// Exercise#6











// var number = 5, result = 1;

// for (let i = 1; i <= number; i++)
// {
//     result *= i;
// }

// console.log(result);











// Exrcise#7











// var prev2 = 0; prev1 = 1, next = 1, number = 8;

// console.log(`1 `);
// while (number > 1)
// {
//     next = prev2 + prev1;
//     prev2 = prev1;
//     console.log(`${next} `);
//     prev1 = next;

//     number--;
// }










// Exercise#8









// let numbers = [5, 10, 15, 20]


// for (let i = 0; i < numbers.length; i++)
// {
//     console.log(numbers[numbers.length - 1 - i]);
// }

