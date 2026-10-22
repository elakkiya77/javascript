// Part 1: Array Manipulation Methods

// 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

fruits.push("Pineapple", "Kiwi", "Papaya");

console.log(fruits);
// Output: ["Apple", "Mango", "Banana", "Orange", "Grapes", "Pineapple", "Kiwi", "Papaya"]

// 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
let numbers = [10, 20, 30, 40, 50, 60];

numbers.pop();

console.log(numbers);
// Output: [10, 20, 30, 40, 50]

// 3. Create an array of 5 names. Remove the first element using shift() and print the array.
let names = ["Elakkiya", "Ravi", "Priya", "Anu", "Kumar"];

names.shift();

console.log(names);
// Output: ["Ravi", "Priya", "Anu", "Kumar"]

// 4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let n1 = [30, 40, 50, 60];

n1.unshift(10, 20);

console.log(n1);
// Output: [10, 20, 30, 40, 50, 60]

// 5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2);

console.log(arr);
// Output: [10, 40, 50]

// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
let arr = [1, 2, 3, 4, 5];

arr.splice(2, 1, 100);

console.log(arr);
// Output: [1, 2, 100, 4, 5]

// 7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
let numbers = [10, 20, 30, 40, 50];

numbers.fill("hello", 2, 5);

console.log(numbers);
// Output: [10, 20, "hello", "hello", "hello"]

//---------------------------------------------------------------------------------------------

// Part 2: Array Merge and Search Methods
// 8. Create two arrays of numbers and combine them using concat().
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let result = arr1.concat(arr2);

console.log(result);
// Output: [10, 20, 30, 40, 50, 60]

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
let arr = [10, 20, 30, 40, 50, 60];

let result = arr.slice(1, 5);

console.log(result);
// Output: [20, 30, 40, 50]

// 10. Create a nested array and convert it into a single-level array using flat(Infinity).
let arr = [1, [2, 3], [4, [5, 6]], 7];

let result = arr.flat(Infinity);

console.log(result);
// Output: [1, 2, 3, 4, 5, 6, 7]

// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
let arr = [10, 20, 30, 40, 50];

console.log(arr.includes(30));
// Output: true

// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
let arr = [5, 10, 15, 20, 25];

console.log(arr.indexOf(20));
// Output: 3

// 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
let arr = [1, 2, 3, 2, 1, 2];

console.log(arr.lastIndexOf(2));
// Output: 5

// 14. Create an array of numbers and arrange its elements using sort().
let numbers = [40, 10, 50, 20, 30];

numbers.sort((a, b) => a - b);

console.log(numbers);
// Output: [10, 20, 30, 40, 50]

// 15. Create an array of 7 numbers and reverse the order using reverse().

let numbers = [10, 20, 30, 40, 50, 60, 70];

numbers.reverse();

console.log(numbers);
// Output: [70, 60, 50, 40, 30, 20, 10]
//__________________________________________________________________________________________________________________________


// Part 3: Spread and Rest Operators
// 16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
let arr1 = [10, 20, 30, 40];
let arr2 = [50, 60, 70, 80];

let result = [...arr1, ...arr2];

console.log(result);
// Output: [10, 20, 30, 40, 50, 60, 70, 80]

// 17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
let student = {
    name: "Elakkiya",
    age: 27
};

let job = {
    role: "Developer",
    salary: 30000
};

let details = { ...student, ...job };

console.log(details);
// Output: { name: "Elakkiya", age: 27, role: "Developer", salary: 30000 }

// 18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
function display(a, b, ...rest) {
    console.log(a);    // Output: 10
    console.log(b);    // Output: 20
    console.log(rest); // Output: [30, 40, 50]
}

display(10, 20, 30, 40, 50);
// 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
function one(a, b, ...c) {
    console.log(a + b + c[0] + c[1]); // Output: 100
}

one(10, 20, 30, 40);
// 20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.
let arr1 = [10, 20, 30, 40];
let arr2 = [50, 60, 70];

let copy = [...arr1];

console.log(copy); // Output: [10, 20, 30, 40]
console.log(arr2); // Output: [50, 60, 70]

//_______________________________________________________________________________________________________________________________________


// Part 4: Array Destructuring
// 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
let arr = [10, 20, 30, 40];

let [a, b, c, d] = arr;

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30
console.log(d); // Output: 40

// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
let nested = [1, 2, [3, 4, [5, 6]]];
let [a, b, [c, d, [e, f]]] = nested;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5
console.log(f); // Output: 6

// 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.

let student = ["Elakkiya", 27, 9.0];
let [name4, age, cgpa] = student;
console.log("Name:", name4); // Output: Name: Elakkiya
console.log("Age:", age);   // Output: Age: 27
console.log("CGPA:", cgpa); // Output: CGPA: 9
//______________________________________________________________________________________________________________________________________________________


// Part 5: Object Destructuring
// 24. Create an object containing name, role, and location. Extract these properties using object destructuring.
let employee = {
    name3: "Elakkiya",
    role: "Developer",
    location: "Chennai"
};

let { name3, role, location } = employee;

console.log(name3);     // Output: Elakkiya
console.log(role);     // Output: Developer
console.log(location); // Output: Chennai

// 25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
let student = {
    name: "Elakkiya",
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

let { address: { city, state } } = student;

console.log(city);  // Output: Chennai
console.log(state); // Output: Tamil Nadu

// 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
let employee = {
    name: "Elakkiya",
    role: "Developer",
    location: {
        mainLocation: "Chennai",
        currentLocation: "Coimbatore"
    }
};

let {
    name2,
    role,
    location: { mainLocation, currentLocation }
} = employee;

console.log(name2);             // Output: Elakkiya
console.log(role);             // Output: Developer
console.log(mainLocation);     // Output: Chennai
console.log(currentLocation);  // Output: Coimbatore
//_________________________________________________________________________________________________________________________________



// Part 6: Mixed Practical Challenges
// 27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers.shift();
numbers.pop();
numbers.unshift(5, 15);

console.log(numbers);
// Output: [5, 15, 20, 30, 40, 50, 60, 70, 80, 90]

// 28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
let numbers = [10, 20, 30, 20, 40, 20];

console.log(numbers.includes(20));     // Output: true
console.log(numbers.indexOf(20));      // Output: 1
console.log(numbers.lastIndexOf(20));   // Output: 5

// 29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
let employee1 = {
    name1: "Elakkiya",
    age: 27
};

let employee2 = {
    role: "Developer",
    salary: 30000
};

let employee = { ...employee1, ...employee2 };

let { name1, role } = employee;

console.log(name1); // Output: Elakkiya
console.log(role); // Output: Developer

// 30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
let numbers = [1, [2, 3], [4, [5, 6]], 7];

let result = numbers.flat(Infinity);

result.reverse();

console.log(result);
// Output: [7, 6, 5, 4, 3, 2, 1]