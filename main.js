// single element 
// const form = document.querySelector("h1")
// form.innerHTML ="js for losers"
// console.log(form)
// // multiple element 
// const list = document.querySelectorAll(".item");


// list.forEach((item)=>console.log(item))

const list = document.querySelector('.items')
console.log(list)
// list.remove();
// list.lastElementChild.remove();
list.firstElementChild.textContent = 'i love coding';
list.lastElementChild.textContent = 'i hate coding';
list.children[1].innerText = 'coding is for life not just for xmas';
list.children[1].innerHTML =' <h1>Code Code Code</h1>';
const btn = document.querySelector(".btn");
btn.style.background = 'red';
console.log(btn)
const mainHeader = document.querySelector('h1');
mainHeader.style.background ="red";
console.log(mainHeader)