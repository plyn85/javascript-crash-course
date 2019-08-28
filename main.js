const x = 10;
const y =10;
if( x > 5 || y  ==10){
    console.log("i love ten")
}else if( x >10){
console.log("x is greater than ten")
}else {
    console.log("i hate ten")
}


// for loop examples
// easiest example
const fruits = ['apple', 'orange', 'pear', 'strawberry'];
for(fruit in fruits){
   console.log(`I love eating ${fruit} all day long`)
}
// for loop
//second easiest example
for(var i in fruits){
    console.log(`I love eating ${fruits[i]} all day long`)
}

// for loop
//old school  example
for( i =0; i < fruits.length; i++){
    console.log(`I love eating ${fruits[i]} all day long`)
}