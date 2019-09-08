
const btn = document.querySelector(".btn");

btn.addEventListener('mouseover', (e) =>{
    e.preventDefault();
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').innerHTML = '<h1>hello coders </h2>';
})