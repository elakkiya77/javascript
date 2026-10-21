//1. Create a function welcome() that prints "Welcome to JavaScript".
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
// Output:
// Welcome to JavaScript

// 2.Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}
studentDetails("Elakkiya", 27, 9.0);
studentDetails("Ravi", 21, 8.5);

// Output:
// Name: Elakkiya
// Age: 27
// CGPA: 9
// Name: Ravi
// Age: 21
// CGPA: 8.5

//3. Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
// Question 3: Return fee using a function
function calculateFee(fee) {
    return fee;
}

let studentFee = calculateFee(500000);

console.log(studentFee);
// Output:
// 500000

//4. Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;

    console.log("Discount amount: ₹" + discountAmount);
    console.log("Final fee: ₹" + finalFee);
}

discount(10);

// Output:
// Discount amount: ₹20000
// Final fee: ₹180000

//5. Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
}

studentForm("Elakkiya", 27, "yes");
studentForm("Ravi", 21, "no");
studentForm("Anu", 19);

// Output:
// Name: Elakkiya
// Age: 27
// Disability: yes
// Name: Ravi
// Age: 21
// Disability: no
// Name: Anu
// Age: 19
// Disability: no

// Part 2: 
//6.Create a named function that accepts a message and prints it.
function showMessage(message) {
    console.log(message); // Output: Welcome to javascript training class
}

showMessage("Welcome to javascript training class");

//7. Create an anonymous function and store it in a variable. Pass a name to it and print the name.
let displayName = function(name) {
    console.log(name); // Output: Elakkiya
};

displayName("Elakkiya");

// 8.Create an arrow function that accepts a number and prints it.
let printNumber = (num) => {
    console.log(num); // Output: 100
};

printNumber(100);

// 9..Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a); // Output: 10
        console.log(b); // Output: 20
        console.log(c); // Output: 30
    }

    console.log(a); // Output: 10
    // console.log(b); // Error: b is not defined
    // console.log(c); // Error: c is not defined
}

checkScope();

// 10.Predict the output of this code:// console.log(value);// var value = 10;
console.log(value); // Output: undefined

var value = 10;
console.log(value); // Output: 10

//part3:
// Question 11: Callback function

function first(callback) {
    console.log("First One"); // Output: First One
    callback();
}

function second() {
    console.log("Second One"); // Output: Second One
}

first(second);

//12.Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.

function add(callback, a, b) {
    console.log(a + b); // Output: 15
    callback(a, b);
}

function display(a, b) {
    console.log("Numbers:", a, b); // Output: Numbers: 10 5
}
add(display, 10, 5);

//13. Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.
let sub = (num1, num2) => {
    console.log(num1 - num2); // Output: 5
};

function add(callback, a, b) {
    console.log(a + b); // Output: 15
    callback(a, b);
}
add(sub, 10, 5);


// 14.Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.
function multiply(callback, a, b) {
    console.log(a * b); // Output: 50
    callback();
}
function message() {
    console.log("Multiplication completed"); // Output: Multiplication completed
}

multiply(message, 10, 5);

// Question 15: Divide using a callback
function divide(num1, num2) {
    console.log(num1 / num2); // Output: 5
}

function calculate(callback) {
    callback(20, 4);
}

calculate(divide);

// Question 16: Higher-order function
function studentDetails(callback) {
    callback("Priya");
}

function displayName(name) {
    console.log("Student name:", name); // Output: Student name: Priya
}

studentDetails(displayName);


// Part 4:
// 17.Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".
function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

console.log(result.next().value); // Output: 10% cashback
console.log(result.next().value); // Output: 30% cashback
console.log(result.next().value); // Output: Better luck next time

// 18.Call .next() three times on a generator object and observe the returned values.
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let result = numbers();

console.log(result.next()); // Output: { value: 10, done: false }
console.log(result.next()); // Output: { value: 20, done: false }
console.log(result.next()); // Output: { value: 30, done: false }

//19. Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
function* discounts() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "25% discount";
}

for (let discount of discounts()) {
    console.log(discount); // Output: each discount message, one by one
}

// Output:
// 5% discount
// 10% discount
// 15% discount
// 20% discount
// 25% discount

// 20.Create a generator function that yields three student names. Use a for-of loop to display them.
function* students() {
    yield "Elakkiya";
    yield "Raji";
    yield "Deepi";
}

for (let name of students()) {
    console.log(name); // Output: each student name, one by one
}

// Output:
// Elakkiya
// Raji
// Deepi

// 21.Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
let result = numbers();
console.log(result.next()); // Output: { value: 10, done: false }
console.log(result.next()); // Output: { value: 20, done: false }
console.log(result.next()); // Output: { value: 30, done: false }
console.log(result.next()); // Output: { value: 40, done: false }
console.log(result.next()); // Output: { value: undefined, done: true }

// Part 5:
// 22.Create a normal function add(a, b, c) that prints the sum of three numbers.
function add(a, b, c) {
    console.log(a + b + c); // Output: 30
}

add(5, 10, 15);

// 23.Convert the add(a, b, c) function into a curried function using nested functions.
function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c); // Output: 30
        };
    };
}

add(5)(10)(15);

// 24.Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).
function multiply(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c); // Output: 750
        };
    };
}

multiply(5)(10)(15);

// 25.Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.
function calculatePrice(price) {
    return function(discount) {
        return function(quantity) {
            let discountedPrice = price - (price * discount / 100);
            console.log(discountedPrice * quantity); // Output: 1800
        };
    };
}

calculatePrice(1000)(10)(2);

// 26.Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.
// Normal function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(5, 10, 15)); // Output: 30
// Curried function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(5)(10)(15)); // Output: 30


// Part 6: 
// 27.Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
(function(product, discount) {
    console.log(`${product} has ${discount}% discount!`);
    // Output: Laptop has 20% discount!
})("Laptop", 20);


//28. Create a function that returns a number. Store the returned value in a variable and print it.
function getNumber() {
    return 100;
}

let result = getNumber();

console.log(result); // Output: 100


//29. Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.
function getMarks(marks) {
    return marks;
}

let studentMarks = getMarks(85);

console.log(studentMarks); // Output: 85


// 30.Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.
function calculateFee(fee = 10000, callback) {
    let discount = callback(fee);
    let finalFee = fee - discount;

    return finalFee;
}

function calculateDiscount(fee) {
    return fee * 10 / 100;
}

let result = calculateFee(20000, calculateDiscount);
console.log(result); // Output: 18000