let name = "Adam"

console.log (`Hello, my dear ${name}`); 

//jQuery part
$ ('p').html ('The <strong>jQuery</strong>  part has started!')

$ ('h1').css ('background', 'red')

$ ('h2').toggleClass ('green');
$ ('p').toggleClass ('green');
$ ('p').toggleClass ('green');

//$('main').append ('<p id="first">Added element</p>')
//$('main').append ('<p id="second">Added second element</p>')

$('#first').remove();

$('#add-button').click(() => {
    if($('main p').length < 5) {
    $('main').append (`<p>Username: ${$('#name').val()}</p>`);
} else 
$('main').append ('<p class="green"> Added a new p tag </p>');
}
);


let removeFunction = () => {
    $('main p:last-child').remove ();
}

$('#remove-button').click(removeFunction);


//Last Part Conditions and Loops

let age = 35;

if (age > 18) {
console.log ('This person can drink.');
} else {
console.log ('This is a kid, no alcohol.');
}

//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css ('background', 'orange');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css ('background', 'yellow');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css ('background', 'purple');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css ('background', 'blue');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css ('background', 'green');

let colors = ['orange', 'yellow', 'purple', 'blue', 'green'];
colors.push ('magenta');
colors.forEach((color) => {
    $('main').append('<div class="box"></div>');
    $('main div:last-child').css('background','color');
});

for (let i=0; i<100;i=i+1) {
    console.log ('Current number: '+ i);
}

//First Part from the Developer Console

//123
//123
//1+1
//2
//let age
//undefined
//let age;
//undefined
//age = 33
//33
//age+2
//35
//age =25
//25
//age+2
//27
//age=33-10
//23
//age = age+10
//33
//age=age+10
//43
//let name;
//undefined
//name = 'Adam'l
//VM362:1 Uncaught SyntaxError: Unexpected identifier
//name = 'Adam'
//"Adam"
//name = "Adam"
//"Adam"
//name = `Adam`
//"Adam"
//let greeting = "Hello 'everyone'!"
//undefined
//'This is a quote from someone: "The quote"'
//"This is a quote from someone: "The quote""
//´You can use both: ' and "´
//VM635:1 Uncaught SyntaxError: Invalid or unexpected token
//`You can use both: ' and "`
//"You can use both: ' and ""
//"Hello " + "Adam, who is " + age + " years old"
//"Hello Adam, who is 43 years old"
//`Hello ${name}, who is ${age} years old`
//"Hello Adam, who is 43 years old"
//let oldEnoughToDrive = true;
//undefined
//oldEnoughToDrive = false;
//false
//let comments = ["FIRST COMMENT!" , "second comment"];
//undefined
//comments [0]
//"FIRST COMMENT!"
//comments.push ("third comment");
//3
//name.length
//4
//comments.push('third comment');
//4
//comments
//(4) ["FIRST COMMENT!", "second comment", "third comment", "third comment"]0: "FIRST COMMENT!"1: "second comment"2: "third comment"3: "third comment"length: 4__proto__: Array(0)
//let person {
//VM1448:1 Uncaught SyntaxError: Unexpected token '{'
//let person {}
//VM1474:1 Uncaught SyntaxError: Unexpected token '{'
//let person {
//firstName: "Adam",
//lastName: "Gyulavari",
//email: "adam@gree.fox"
//};

//VM1645:1 Uncaught SyntaxError: Unexpected token '{'
//let person = {
//firstName: "Adam",
//lastName: "Gyulavari",
//email: "adam@gree.fox",
//age = 33,
//oldEnoughToDrive: true
//};
//VM1712:5 Uncaught SyntaxError: Invalid shorthand property initializer
//let person = {
 //   firstName: "Adam",
 //   lastName: "Gyulavari",
 //   email: "adam@green.fox",
 //   age: 33,
 //   oldEnoughToDrive: true
//};
//undefined
//person
//{firstName: "Adam", lastName: "Gyulavari", email: "adam@green.fox", age: 33, oldEnoughToDrive: true}
//person.email
//"adam@green.fox"
//person.age +10
//43
//person.favoriteColor = "green"
//"green"
//person
//{firstName: "Adam", lastName: "Gyulavari", email: "adam@green.fox", age: 33, oldEnoughToDrive: true, …}firstName: "Adam"lastName: "Gyulavari"email: "adam@green.fox"age: 33oldEnoughToDrive: truefavoriteColor: "green"__proto__: Object
//person.email = 'adam@greenfox.com'
//"adam@greenfox.com"
//let persons = [person, person, person]
//undefined
//persons
//(3) [{…}, {…}, {…}]0: {firstName: "Adam", lastName: "Gyulavari", email: "adam@greenfox.com", age: 33, oldEnoughToDrive: true, …}1: {firstName: "Adam", lastName: "Gyulavari", email: "adam@greenfox.com", age: 33, oldEnoughToDrive: true, …}2: {firstName: "Adam", lastName: "Gyulavari", email: "adam@greenfox.com", age: 33, oldEnoughToDrive: true, …}length: 3__proto__: Array(0)
//person.favoriteColor = ['green', 'orange']
//(2) ["green", "orange"]