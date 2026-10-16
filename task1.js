//1.var — 10 Questions//
//Create a var variable called name and initialize it with your name. Print it.//
var name = "Elakkiya";
console.log(name); 
//Output::Elakkiya

//Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;
console.log(age);
//Output::30

//Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var city = "Chennai";
city = "Bangalore";
console.log(city);
//Output::Bangalore

//Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var salary = 25000;
var salary = 35000;
console.log(salary);
//Output::35000

//Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var value = 10;
value = 20;
var value = 30;
console.log(value);
//Output::30

//Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";
console.log(department);
//Output::CSE


//Create a var variable called mark with 50, reassign it to 75, and print it.
var mark = 50;
mark = 75;
console.log(mark);
//Output:75

//Create a var variable called company and redeclare it with another company name.
var company = "ACCENTURE";
var company = "STACKLY";
console.log(company);
//Output:STACKLY

//Create a var variable without assigning a value, then initialize it later and print it.
var city;
city = "DHARMAPURI";
console.log(city);
//Output:DHARMAPURI

//Create one var variable and change its value three times. Print the final value.
var b= 80;
b = 20;
b = 90;
b = 60;
console.log(b);
//Output:60


//2. let — 10 Questions

//Create a let variable called age and initialize it with your age. Print it.
let age = 25;
console.log(age);
//Output:25

//Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
let salary = 30000;
salary = 40000;
console.log(salary);
//Output:40000

//Create a let variable called name, assign your name, then change it to another name.
let name = "elakkiya";
name = "elak";
console.log(name);
//Output:elak

//Create a let variable called department and change its value from "ECE" to "CSE".
let department = "ECE";
department = "CSE";
console.log(department);
//Output:CSE

//Create a let variable called mark, initialize it with 60, then reassign it to 90.
let mark = 60;
mark = 90;
console.log(mark);
//Output:90

//Declare a let variable without initialization. Later assign a value and print it.
let city;
city = "Chennai";
console.log(city);
//Output:Chennai

//Try to redeclare the same let variable. Observe what happens.
let age = 20;
let age = 25;
console.log(age);
//Output:Identifier 'age' has already been declared

//Create a let variable called city and reassign it two times. Print the final value.
let city = "Chennai";
city = "Madurai";
city = "Coimbatore";
console.log(city);
//Output:Coimbatore

//Create three different let variables and print all three.
let name = "Kumar";
let age = 20;
let city = "Chennai";
console.log(name);
console.log(age);
console.log(city);
//Output:Kumar 20 Chennai

//Create a let variable, initialize it, reassign it, and try to redeclare it.
let mark = 50;
mark = 80;
let mark = 90;
console.log(mark);
//Output:Identifier 'mark' has already been declared

//3. const — 8 Questions

//Create a const variable called age with value 25 and print it.
const age = 25;
console.log(age);
//Output:25

//Create a const variable called salary with value 50000 and print it.
const salary = 50000;
console.log(salary);
//Output:50000

//Create a const variable called company with "Stackly" and print it.
const company = "Stackly";
console.log(company);
//Output:Stackly

//Try to reassign a const variable with another value. Observe the result.
const age = 25;
age = 30;
console.log(age);
//Output:Assignment to constant variable.

//Try to redeclare a const variable. Observe the result.
const age = 25;
const age = 30;
console.log(age);
//Output:Identifier 'age' has already been declared

//Create a const variable called college and initialize it with your college name.
const college = "GCE Salem College";
console.log(college);
//Output:GCE Salem College

//Create three const variables for name, age, and department. Print them.
const name = "Elakkiya";
const age = 27;
const department = "CSE";
console.log(name);
console.log(age);
console.log(department);
//Output:elakiya  27  CSE

//Write a program using one var, one let, and one const variable. Print all three.
var name = "elakiya";
let age = 27;
const department = "CSE";
console.log(name);
console.log(age);
console.log(department);
//Output:elakiya  27  CSE


//4. Printing Statements — 7 Questions
//Print your name using console.log().
console.log("Elakkiya");
//Output:Elakkiya

//Create a variable containing your age and print it using console.log().
let age = 27;
console.log(age);
//Output:27

//Print the number 100 using console.log().
console.log(100);
//Output:100

//Create three variables and print their values using console.log().
let name = "elakkiya";
let age = 27;
let city = "Chennai";
console.log(name);
console.log(age);
console.log(city);
//Output:Elakkiya 27 Chennai

//Create a variable called message with "Hello JavaScript" and print it.
let message = "Hello JavaScript";
console.log(message);
//Output:Hello JavaScript

//Create a variable, print its value, change its value, and print it again.
let number = 10;
console.log(number);
number = 20;
console.log(number);
//Output:10  20

//Print your name, age, and qualification using three separate console.log() statements.
console.log("elakkiya");
console.log(26);
console.log("B.E Computer Science");
//Output:elakkiya 26 B.E Computer Science

//5. alert() — 5 Questions
//Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");
//Output:Browser popup

//Create a variable called userName and display it using alert().
let userName = "Naveen";
alert(userName);
//Output:Popup:Naveen

//Create a variable called userAge and display it using alert().
let userAge = 20;
alert(userAge);
//Output:Popup:20

//Create a variable containing "Welcome Naveen" and show it in a popup.
let message = "Welcome Naveen";
alert(message);
//Output:Popup:Welcome Naveen


//Create a variable containing your qualification and display it using alert().
let qualification = "B.E Computer Science";
alert(qualification);
//Output:Popup:B.E Computer Science



//6. prompt() — 5 Questions
//Ask the user "What is your name?" using prompt() and print the answer in the console.
let name = prompt("What is your name?");
console.log(name);
//Output:What is your name?
//If user enters Elakkiya:
//Console:
//Elakkiya


//Ask the user "How old are you?" using prompt() and display the answer using alert().
let age = prompt("How old are you?");
alert(age);
//Output:Popup asks:
//How old are you?
//If user enters 25, another popup displays:
//25


//Ask the user for their qualification and print the answer in the console.
let qualification = prompt("What is your qualification?");
console.log(qualification);
//Output:If user enters:
//B.E Computer Science
// Console output:
//B.E Computer Science


//Ask the user for their name and show the entered name in a popup.
let userName = prompt("What is your name?");
alert(userName);
//Output:If user enters Elakkiya:
//Popup:
//Elakkiya

//sk the user for their age and print the entered age in the console.
let userAge = prompt("How old are you?");
console.log(userAge);
//Output:If user enters 25:
//Console:
//25


//7. confirm() & document.writeln() — 3 Questions

//Create a confirmation box asking "Do you know programming?".
confirm("Do you know programming?");
//output :Popup with:
//Do you know programming?
//[OK] [Cancel]

//Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
let message = "Welcome to Batch 41";
document.writeln(message);

//Output:Welcome to Batch 41


//Ask the user "Do you want to continue?" using confirm().
confirm("Do you want to continue?");
//Output:Popup:
//Do you want to continue?
//[OK] [Cancel]



//8. Console Methods — 2 Questions

//Write one program that uses console.log(), console.warn(), and console.error() to display three different messages.
console.log("normal message");
console.warn("you cant change pass");
console.error("pass is incorrect");

//Write a program using console.log(), console.warn(), console.error(), and console.clear(). Observe what happens after each statement.
console.log("Normal");
console.warn("Warning");
console.error("Error");
console.clear();
//Output:The previous console messages may disappear 
