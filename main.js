
const myForm = document.querySelector('#my-form');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const msg= document.querySelector('.msg');
const user = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit (e) {
e.preventDefault();

if(myName.value === "" || myEmail.value === ""){
 msg.classList.add("error");   
msg.innerHTML = "please fill out required field";

setTimeout(() => msg.remove(), 3000)
}else{
const li = document.createElement('li');
li.appendChild(document.createTextNode(`${myName.value}: ${myEmail.value}`))
user.appendChild(li);
// clear fields
myName.value = "";
myEmail.value = "";
}
}