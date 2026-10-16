
//Declare a variable using var, assign it the value 10, reassign it to 20, and print the result.
var number = 10;
number = 20;
console.log(number);
//output:20

//Declare a variable using var with the value 30. Redeclare the same variable with the value 50 and print it.
var number = 30;
var number = 50;
console.log(number);
//Output:50


//Declare a variable using let with the value 100. Reassign it to 200 and print the result.
let number = 100;
number = 200;
console.log(number);
//Output:200

//Declare a variable using const to store your age. Print the value.
const age = 27;
console.log(age);
//Output:27

//Identify which variable declarations are valid and which are invalid: var, let, and const.

var x = 10;     // Valid
let y = 20;     // Valid
const z = 30;   // Valid
x = 15;         // Valid: var can be reassigned
y = 25;         // Valid: let can be reassigned
// z = 35;      // Invalid: const cannot be reassigned
var a = 1;
var a = 2;      // Valid: var can be redeclared
let b = 1;
// let b = 2;   // Invalid: let cannot be redeclared 
console.log(x); // 15
console.log(y); // 25
console.log(z); // 30
console.log(a); // 2
console.log(b); // 1

//Create three variables using var, let, and const to store your name, age, and city. Print all three.
var name = "Elakkiya";
let age = 21;
const city = "Chennai";
console.log(name);
console.log(age);
console.log(city);
//Output:Elakkiya
//27
//Chennai


//Part 2: 
//Use prompt() to get the user's name and display it using alert().
let userName = prompt("Enter your name:");
alert("Hello, " + userName);
//Output:Hello, Elakkiya

//Use prompt() to get the user's age and print it using console.log().
let age = prompt("Enter your age:");
console.log(age);
//Output:27

//Use confirm() to ask the user whether they know JavaScript. Print the returned value.
let answer = confirm("Do you know JavaScript?");
console.log(answer);
//Output: if user clicks OK:
//true
//if user clicks Cancel:
//false

//Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.
let name = "Elakkiya";
let age = 27;
let isStudent = true;
let result;
console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(result, typeof result);
//Output:Elakkiya string
//27 number
//true boolean
//undefined undefined

//Create an array containing five fruits. Print the entire array, the first element, and the last element.
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
//Output:["Apple", "Mango", "Banana", "Orange", "Grapes"]
//Apple
//Grapes

//Create an object containing a fruit array, an electronic-items array, and a vegetable name. Print each property separately.
let items = {
    fruits: ["Apple", "Mango", "Banana"],
    electronics: ["Laptop", "Mobile", "TV"],
    vegetable: "Carrot"
};
console.log(items.fruits);
console.log(items.electronics);
console.log(items.vegetable);
//Output:["Apple", "Mango", "Banana"]
//["Laptop", "Mobile", "TV"]
//Carrot

//Part 3:
//Declare two variables with values 15 and 4. Print their addition, subtraction, multiplication, and division.
let a = 15;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//Output:19,11,60,3.75

//Find the remainder when 27 is divided by 5 using the modulus operator.
console.log(27 % 5);
//output:2

//Calculate \(3^4\) using the exponentiation operator.
console.log(3 ** 4);
//Output:81

//Declare a variable with the value 10. Apply the pre-increment operator and print the result.
let a = 10;
console.log(++a);
//Output:11

//Declare a variable with the value 10. Apply the pre-decrement operator and print the result.
let a = 10;
console.log(--a);
//Output:9

//Predict the output:
let x = 5;
let y = x++;
console.log(x);
console.log(y);
//output: x=6,y=5

//Part 4: 
//19. Predict the output:
let a = 4;
console.log(a++);
console.log(a);
//output:4,5

//20. Predict the output:
let a = 4;
console.log(++a);
console.log(a);
//Output:5,5

//21. Predict the output:
let a = 8;
let b = a++;
console.log(a);
console.log(b);
//Output:9,8

//22. Predict the output:
let a = 8;
let b = ++a;
console.log(a);
console.log(b);
//Output:9,9

//23. Predict the output:
let a = 6;
let b = a--;
console.log(a);
console.log(b);
//output:5,6

//24. Predict the output:
let a = 6;
let b = --a;
console.log(a);
console.log(b);
//OUtput:5, 5

//25. Predict the output:
let a = 2;
a++;
a++;
console.log(a);
//Output:4

//26. Predict the output:
let a = 10;
--a;
--a;
console.log(a);
//Output:8

//27. Predict the output:
let b = 3;
b = b++;
console.log(b);
//Output:3

//28. Predict the output:
let c = 4;
let d = c++;
console.log("c:", c);
console.log("d:", d);
//Output:c: 5,  d: 4

//29. Predict the output:
let e = 5;
let f = --e;
console.log("e:", e);
console.log("f:", f);
//Output:e: 4,f: 4

//30. Predict the final values of a, b, and c:
let a = 5;
let b = a++;
let c = ++a;
console.log(a);
console.log(b);
console.log(c);
//Output:7,5,7