const todos = [
{
    id: 1,
    text: 'take out trash',
    isCompleted: true

},

{
    id: 2,
    text: 'meeting with boss',
    isCompleted: true

},
{
    id: 3,
    text: 'dentist appointment',
    isCompleted: false

}
];

const todoCompleted = todos.filter( function(todo){
return todo.isCompleted === true;
}).map(function(todo){
return todo.text;
})
console.log(todoCompleted);