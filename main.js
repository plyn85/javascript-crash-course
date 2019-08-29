// constructor function

function Person (firstName,lastName,dob){
this.firstName = firstName;
this.lastName = lastName;
 this.dob = new Date(dob); //date object
}

// Instantiate object
const person1 = new Person('John', 'doe', '2-16-1985'); 
const person2 = new Person('Jane', 'doe', '2-26-1982'); 
const person3 = new Person('Jim', 'doe', '23-26-1765'); 
const person4 = new Person('James', 'doe', '23-16-1976'); 

console.log(person2.dob.getFullYear());