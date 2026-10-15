// Part 1: 
// Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
var number = 10;
number = 20;
console.log(number);      //20
var number = 30;
var number = 50;
console.log(number);      //50
let age = 18;
age = 20;
console.log(age);         //20
const salary = 25000;
console.log(salary);      //25000


// Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
let name1 = "Elakkiya";
let age = 27;
let programmingKnowledge = true;

console.log(name1);// Elakkiya
console.log(typeof name1);// string

console.log(age);// 27
console.log(typeof age);// number

console.log(programmingKnowledge);// true
console.log(typeof programmingKnowledge);// boolean

// Create an array of 5 fruits. Print the complete array, the first element, and the last element.

let fruits = ["Apple", "Mango", "Orange", "watermelon", "Kiwi"];
console.log(fruits);// ["Apple", "Mango", "Orange", "watermelon", "Kiwi"]
console.log(fruits[0]);// Apple
console.log(fruits[fruits.length - 1]);// Kiwi

// Create an object containing your name, role, and CGPA. Print each property separately.

let student = {
    name: "Elakkiya",
    role: "Full Stack Developer",
    CGPA: 7.9
};

console.log(student.name);// Elakkiya
console.log(student.role);// Full Stack Developer
console.log(student.CGPA);// 7.9

// Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
let name1 = prompt("Enter your name:");    // Prompt: Enter your name: Elakkiya
let age = prompt("Enter your age:");     // Prompt: Enter your age: 20
alert(name1);   // Alert popup: Elakkiya
console.log(age);     // Console: 20

// Part 2: Operators (7 Questions)
// Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.
let a = 10;
let b = 3;

console.log(a + b);// 13
console.log(a - b);// 7
console.log(a * b);// 30
console.log(a / b);// 3.3333333333333335
console.log(a % b);// 1
console.log(a ** b);// 1000


// Predict the output:
// let a = 5;
// console.log(a++);
// console.log(a);
// console.log(++a);
let a = 5;
console.log(a++);  //5
console.log(a);   //6
console.log(++a);  //7

// 8. Predict the output:
// let a = 10;
// let b = a--;
// let c = --a;
// console.log(a);
// console.log(b);
// console.log(c);

let a = 10;
let b = a--;
let c = --a;
console.log(a);// 8
console.log(b);// 10
console.log(c);// 8

// Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
let a = 20;
a += 5;
console.log(a);// 25
a -= 3;
console.log(a);// 22
a *= 2;
console.log(a);// 44
a /= 4;
console.log(a);// 11
a %= 3;
console.log(a);// 2

// Predict the results of these comparisons:
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(10 != "10");
// console.log(10 !== "10");
console.log(5 == "5");// true
console.log(5 === "5");// false
console.log(10 != "10");// false
console.log(10 !== "10");// true


// Use &&, ||, and ! to check different combinations of conditions.
let age = 20;
let hasID = true;
console.log(age >= 18 && hasID);// true
console.log(age < 18 || hasID);// true
console.log(!hasID);// false


// Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
let age = Number(prompt("Enter your age:"));

let result = age >= 18
    ? "You are eligible."
    : "You are not eligible.";

console.log(result);
// Output:
// If you enter 20:
// You are eligible.
//
// If you enter 16:
// You are not eligible.


// Part 3: 
// 13. Predict the data type of each expression:

console.log(typeof ("welcome" + 90));// string
console.log(typeof (70 + true));// number
console.log(typeof (50 + null));// number
console.log(typeof ("hello" + undefined));// string




// Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
let num = Number(prompt("Enter a number:"));
console.log(num + 10);
// Output:
// If you enter 20:
// 30

// Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.

console.log(Boolean(""));// false
console.log(Boolean("Hello"));// true
console.log(Boolean(0));// false
console.log(Boolean(true));// true

// Write an if-else statement to check whether a number is positive or not.
let num = Number(prompt("Enter a number:"));
if (num > 0) {
    console.log("Positive number");
} else {
    console.log("Not a positive number");
}
// Output:
// If you enter 5:
// Positive number
// If you enter -3:
// Not a positive number

// Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
let time = Number(prompt("Enter the hour (0-23):"));

if (time >= 4 && time < 6) {
    console.log("Early morning");
} else if (time >= 6 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 16) {
    console.log("Afternoon");
} else if (time >= 16 && time < 20) {
    console.log("Evening");
} else if (time >= 0 && time < 24) {
    console.log("Night");
} else {
    console.log("Invalid time");
}
// Output:
// If you enter 8:
// Morning
//
// If you enter 14:
// Afternoon

// Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
let age = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height in cm:"));
let weight = Number(prompt("Enter your weight in kg:"));

if (age >= 18) {
    if (height >= 150) {
        if (weight >= 45) {
            console.log("Eligible");
        } else {
            console.log("Weight is too low");
        }
    } else {
        console.log("Height is too low");
    }
} else {
    console.log("Age requirement not met");
}

// Example input:
// Enter your age: 20
// Enter your height in cm: 170
// Enter your weight in kg: 60

// Output:
// Eligible


// Part 4: 
// Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
let color = prompt("Enter traffic light color:").toLowerCase();

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}
// Output:
// Input: red
// Stop


// Use a for loop to print numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// Output:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

// Use a for loop to print all even numbers from 2 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
// Output:
// 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


// Use a while loop to print numbers from 10 down to 1.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
// Output:
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// Use a do-while loop to print numbers from 1 to 10.

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

// Output:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// Use a for-of loop to print each character in the string "JavaScript".
let word = "JavaScript";
for (let character of word) {
    console.log(character);
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t


// Use a for-of loop to print every element in an array of 5 student names.
let students = ["Elakkiya", "Deepika", "Arivumalar", "Ithyas", "Harini"];
for (let name of students) {
    console.log(name);
}// Output:
// Elakkiya
// Deepika
// Arivumalar
// Ithyas
// Harini

// Use a for-in loop to print all keys and values of this object:
// let student = {
//     name: "Priya",
//     role: "Frontend Developer",
//     cgpa: 9
// };

let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};
for (let key in student) {
    console.log(key, student[key]);
}
// Output:
// name Priya
// role Frontend Developer
// cgpa 9

// Part 5:
// Take two numbers using prompt() and display their sum, difference, product, and remainder.
let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Remainder:", a % b);
// Output:
// Input: 10 and 3
// Sum: 13
// Difference: 7
// Product: 30
// Remainder: 1

// Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
let numbers = [5, 12, 8, 20, 15];
for (let num of numbers) {
    if (num > 10) {
        console.log(num);
    }
}

// Output:
// 12
// 20
// 15

// Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}
// Output:
// If age = 20 → You are eligible.
// If age = 16 → You are not eligible.


// Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.
let choice = prompt(
    "Choose an operation: addition, subtraction, multiplication, division"
).toLowerCase();

let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));

switch (choice) {
    case "addition":
        alert("Result: " + (a + b));
        break;

    case "subtraction":
        alert("Result: " + (a - b));
        break;

    case "multiplication":
        alert("Result: " + (a * b));
        break;

    case "division":
        if (b !== 0) {
            alert("Result: " + (a / b));
        } else {
            alert("Cannot divide by zero");
        }
        break;

    default:
        alert("Invalid operation");
}

// Example Output:
// Choice: addition
// First number: 10
// Second number: 5
// Alert: Result: 15