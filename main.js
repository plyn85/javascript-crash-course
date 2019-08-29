
// classic way of writing  a function
function addNums (num1, num2){
return num1 + num2;
}

console.log(addNums (5,5));

// shorther way of writing a function introdeced in es6

const addNums = (num1,num2) => num1+num2;
console.log(addNums(10,10));

// shortest way with only one value
const addNums = num1 => num1 + 5;
console.log(addNums(5));

// using short functions on a foreach method on an array 
// simplest way to loop trough an print out each item in an array

const todos = ['cook','clean','wash','shit']

todos.forEach((todo)=> console.log(todo))

