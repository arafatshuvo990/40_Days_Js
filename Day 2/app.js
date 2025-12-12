const contentDiv = document.getElementById("content");
contentDiv.innerText = "This content is added by app.js";
//Task 1
let name = "Alice";                 
let age = 25;                       
let isStudent = true;               
const favoriteLanguage = "JavaScript";

//Task 2
console.log(name);
console.log(age);
console.log(isStudent);
console.log(favoriteLanguage);

//task 3

name = "Bob";
age = 30;
console.log(name, age);


favoriteLanguage = "Python"; 

//Task 4
//Objects
const person = { name: "Alice", age: 25 };
const newPerson = person;   

newPerson.age = 30;

console.log(person.age);    
console.log(newPerson.age);  

//Arrays
const numbers = [1, 2, 3];
const newNumbers = numbers;  

newNumbers.push(4);

console.log(numbers);     
console.log(newNumbers);  