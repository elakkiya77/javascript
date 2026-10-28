// Part 1: Array Higher-Order Methods
// 1. Create an array of 10 numbers and use forEach() to print each number.
let numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers1.forEach((num) => {
    console.log(num); // Output: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
});

// 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
let numbers2 = [1, 2, 3, 4, 5];

let multiplied = numbers2.map((num) => num * 5);

console.log(multiplied); // Output: [5, 10, 15, 20, 25]

// 3. Given an array of numbers, use filter() to get only numbers greater than 20.
let numbers3 = [10, 25, 15, 30, 40, 5];

let greaterThan20 = numbers3.filter((num) => num > 20);

console.log(greaterThan20); // Output: [25, 30, 40]

// 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
let employees = [
    { name: "Elakkiya", salary: 250000 },
    { name: "Anu", salary: 350000 },
    { name: "Kumar", salary: 200000 },
    { name: "Priya", salary: 400000 }
];

let filteredEmployees = employees.filter((emp) => emp.salary <= 300000);

console.log(filteredEmployees);
// Output:// [  { name: "Elakkiya", salary: 250000 }, { name: "Kumar", salary: 200000 } ]

// 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
let employee = employees.find((emp) => emp.salary > 200000);

console.log(employee);
// Output: { name: "Ravi", salary: 250000 }


// 6. Use reduce() to calculate the total of all numbers in an array.
let numbers4 = [10, 20, 30, 40, 50];

let total = numbers4.reduce((sum, num) => sum + num, 0);

console.log(total); // Output: 150

// 7. Create an array of numbers and use some() to check whether at least one number is even.
let numbers5 = [1, 3, 5, 8, 9];

let hasEven = numbers5.some((num) => num % 2 === 0);

console.log(hasEven); // Output: true

// 8. Use every() to check whether all numbers in an array are greater than zero.
let numbers6 = [10, 20, 30, 40, 50];

let allPositive = numbers6.every((num) => num > 0);

console.log(allPositive); // Output: true

// 9. Given an array of numbers, sort them in ascending order using the sort callback.
let numbers7 = [50, 10, 40, 20, 30];

numbers7.sort((a, b) => a - b);

console.log(numbers7); // Output: [10, 20, 30, 40, 50]
// 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
let numbers8 = [50, 10, 40, 20, 30];

numbers8.sort((a, b) => b - a);

console.log(numbers8); // Output: [50, 40, 30, 20, 10]

// Part 2: String Methods
// 11. Create a string "javascript" and print the character at index 4 using charAt().
let str1 = "javascript";

console.log(str1.charAt(4)); // Output: s

// 12. Find the character code at index 2 using charCodeAt().
let str2 = "javascript";

console.log(str2.charCodeAt(2)); // Output: 118

// 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
let str3 = "   Hello JavaScript   ";

console.log(str3.trim()); // Output: Hello JavaScript

// 14. Convert a string to uppercase and lowercase using the appropriate methods.
let str4 = "JavaScript";

console.log(str4.toUpperCase()); // Output: JAVASCRIPT
console.log(str4.toLowerCase()); // Output: javascript


// 15. Check whether a string contains "script" using includes().
let str5 = "javascript programming";

console.log(str5.includes("script")); // Output: true

// 16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
let str6 = "JavaScript";

console.log(str6.startsWith("Java")); // Output: true
console.log(str6.endsWith("Script")); // Output: true
// 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
let str7 = "java is popular and java is easy";

console.log(str7.replaceAll("java", "python"));
// Output: python is popular and python is easy

// 18. Split the string "html-css-javascript-react" into an array using split().
let str8 = "html-css-javascript-react";

let techArray = str8.split("-");

console.log(techArray);
// Output: ["html", "css", "javascript", "react"]

// 19. Convert an array of names into a single string using join() with a comma separator.
let names = ["Ravi", "Anu", "Priya", "Kumar"];

let nameString = names.join(",");

console.log(nameString); // Output: Ravi,Anu,Priya,Kumar
// 20. Create a string and extract a portion of it using slice().
let str9 = "JavaScript";

console.log(str9.slice(0, 4)); // Output: Java


// Part 3: Date Methods
// 21. Create a Date object and print the current year, month, date, and day.
let today = new Date();

console.log(today.getFullYear()); // Output: Current year (e.g., 2026)
console.log(today.getMonth());    // Output: Current month index (0-11)
console.log(today.getDate());     // Output: Current date (1-31)
console.log(today.getDay());      // Output: Current day index (0-6)

// 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let currentDate = new Date();

console.log(months[currentDate.getMonth()]);
// Output: Current month name (e.g., October)

// 23. Print the current hours, minutes, and seconds using the appropriate date methods.
let time = new Date();

console.log(time.getHours());   // Output: Current hour (0-23)
console.log(time.getMinutes()); // Output: Current minute (0-59)
console.log(time.getSeconds()); // Output: Current second (0-59)

// 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
let myDate = new Date();

myDate.setFullYear(2003);
myDate.setMonth(0); // January = 0
myDate.setDate(30);

console.log(myDate); 
// Output: A date in January 2003, on the 30th


// Part 4: Asynchronous JavaScript
// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);

// Output after 3 seconds: Welcome to JavaScript

// 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
let interval = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

// Output every 2 seconds:
// Learning JavaScript
// Learning JavaScript
// Learning JavaScript
// ...continues until stopped

// 27. Stop the interval created in Task 26 after 8 seconds using clearInterval().
let intervalId = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 8000);

// Output:
// Learning JavaScript  // after 2 seconds
// Learning JavaScript  // after 4 seconds
// Learning JavaScript  // after 6 seconds
// Interval stopped     // after 8 seconds
// 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.

function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();

// Output:
// One
// Three
// Two

// Part 5: Promises and API Fetching
// 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().

let loginPromise = new Promise((resolve, reject) => {
    resolve("Login successful");
});

loginPromise.then((message) => {
    console.log(message);
});

// Output: Login successful
// 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().

let passwordPromise = new Promise((resolve, reject) => {
    reject("Invalid password");
});

passwordPromise.catch((error) => {
    console.warn(error);
});

// Output: Invalid password

// 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
let processPromise = new Promise((resolve, reject) => {
    resolve("Data loaded successfully");
});

processPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.warn(error);
    })
    .finally(() => {
        console.log("Process completed");
    });

// Output:
// Data loaded successfully
// Process completed

// 32. Fetch product data from the Fake Store API:
// https://fakestoreapi.com/products
// Convert the response to JSON and print all product titles using forEach().

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log(product.title);
        });
    })
    .catch((error) => {
        console.warn(error.message);
    });

// Output: Title of each product (usually 20 products)


// 33. Fetch the same API and print the title, price, and category of every product.

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------");
        });
    })
    .catch((error) => {
        console.warn(error.message);
    });

// Output: Title, price, and category for every product

// 34. Handle API errors using .catch() and display the error message using console.warn().

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });

// Output if an error occurs:
// Error: Failed to fetch products
// The actual error message may vary

// 35. Use .finally() to print "API call completed" after the fetch process.

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });

// Output on success:
// Array of product objects
// API call completed
//
// Output on failure:
// Error: [error message]
// API call completed

// Part 6: Real-Time Mini Tasks

// 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.

let employees36 = [
    { name: "Ravi", salary: 250000 },
    { name: "Anu", salary: 350000 },
    { name: "Priya", salary: 200000 },
    { name: "Kumar", salary: 280000 },
    { name: "Divya", salary: 400000 }
];

let result36 = employees36.filter((emp) => emp.salary < 300000);

result36.forEach((emp) => {
    console.log("Name:", emp.name);
    console.log("Salary:", emp.salary);
});

// Output:
// Name: Ravi
// Salary: 250000
// Name: Priya
// Salary: 200000
// Name: Kumar
// Salary: 280000

// 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
// Use map() to create an array containing only titles and prices

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        let productDetails = products.map((product) => ({
            title: product.title,
            price: product.price
        }));

        console.log(productDetails);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });

// Output:
// [
//   { title: "Product title", price: 10.99 },
//   ...
// ]
// Actual product details come from the API
// 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
// Filter products by the chosen category "jewelery"

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        let result38 = products.filter(
            (product) => product.category === "jewelery"
        );

        result38.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Product search completed");
    });

// Output: Details of products in the "jewelery" category
// 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
// Use map(), filter(), reduce(), some(), and every()

let numbers39 = [10, 15, 20, 25, 30];

// map() - Multiply every number by 2
let doubled39 = numbers39.map((num) => num * 2);

console.log("Doubled:", doubled39);
// Output: [20, 30, 40, 50, 60]

// filter() - Get numbers greater than 20
let greater39 = numbers39.filter((num) => num > 20);

console.log("Greater than 20:", greater39);
// Output: [25, 30]

// reduce() - Calculate the total
let total39 = numbers39.reduce((sum, num) => sum + num, 0);

console.log("Total:", total39);
// Output: 100

// some() - Check whether at least one number is even
let hasEven39 = numbers39.some((num) => num % 2 === 0);

console.log("Has even number:", hasEven39);
// Output: true

// every() - Check whether all numbers are greater than zero
let allPositive39 = numbers39.every((num) => num > 0);

console.log("All positive:", allPositive39);
// Output: true


// 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().
// Print title, price, and category; handle errors and print completion message

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("----------------------");
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });

// Output:
// Title: [actual product title]
// Price: [actual product price]
// Category: [actual product category]
// ----------------------
// Repeats for each product
// API call completed
