let fruits = ["apple", "mango", "orange"];
let vegetables = ["carrot", "broccoli", "potato"];

let groceries = [...fruits, ...vegetables, "chicken", "eggs", "oil"];

console.log(groceries);

let newFruits = [...fruits]; //shallow copy

console.log(...fruits);
console.log(newFruits);

let username = "Victor"
let letters = [...username].join("-"); 

console.log(letters);

let number = [1, 2, 3, 4, 5]
let max = Math.max(...number)
let min = Math.min(...number)

console.log(max);
console.log(min); 

/* let game = ["god of war", "gta", "silent hill"]; 

game[3] = "genshin impact"; 
game[3] = "mario"; 

game.push("genshin impact"); 
game.pop(); 
game.unshift("black myth wukong"); 
game.shift(); 

let num = game.length;
let index = game.indexOf("spiderman");

console.log(index);
console.log(num);
console.log(game);
console.log(game[0]);

for (i = 0; i < game.length; i++){
     console.log(game[i]);
}

for (i = 1; i < game.length; i+=2){
    console.log(game[i]);
}

for (i = game.length - 1; i >= 0; i--){ 
    console.log(game[i]);
}

game.sort().reverse(); 

for (let g of game){ 
    console.log(g);
}

// local scope >> variable scope 

/* function happyBirthday(username, age){
    console.log(`happy birthday to you ${username}! you are ${age} years old!`)
}

happyBirthday("victor", 36);
happyBirthday("niki", 34);

function add_two(a, b){
    return a + b;
}

function isEven(a){
    return a % 2 === 0 ? true : false; 
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(add_two(3, 4));
console.log(isEven(3240));
console.log(isValidEmail("vihbiisnghgmail.com"))

// Number guessing game with random number logic 

/* const min = 1; 
const max = 100; 

const result = Math.floor(Math.random() * max - min) + min; 

let guess = Number(window.prompt(`Enter your guess bw ${min} & ${max}`))

let attempt = 0; 

while(guess !== result){
    if (guess < min || guess > max){
        guess = Number(window.prompt("Out of range, try again"));
        attempt++;
    }
    else if (guess < result){
        guess = Number(window.prompt("Higher, try again"));
        attempt++;
    }
    else if (guess > result){
        guess = Number(window.prompt("Lower, try again"));
        attempt++;
    }
    else{ 
        guess = Number(window.prompt("Invalid guess, try again"));
        attempt++;
    }
}

window.alert(`Congrats! ${guess} is the correct answer! It took you ${attempt} attempts`)

/* Number guessing game - logic 


const numberResult = 38; 

let guess = Number(window.prompt("Enter your guess"));

while(guess !== numberResult){
    if (guess > numberResult){
        guess = Number(window.prompt("Lower, try again"));
    }
    else if (guess < numberResult){
        guess = Number(window.prompt("Higher, try again"));
    }
}

console.log("Congratulations!");

 


/* for (let i = 1; i <= 20; i++){
    if (i == 13){
        break; 
    }
    else{
        console.log(i);
    }
}

/* for (let i = 10; i >= 0; i--){
    console.log(i)
}
console.log("Happy new year!")


/* Check login credentials */

/* let isLoggedin = false; 
let username; 
let password; 

while(!isLoggedin) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "hello" && password === "hello"){
        isLoggedin = true;
        console.log("You are logged in!")
    }
    else{
        console.log("Invalid credentials. Try again.")
    }
} 

/* let username = ""

while (username === "" || username == null){
   username = window.prompt("Your username can't be empty, enter again: ")
}

console.log(username);
/* const PI = 3.14

let isPI = PI !== 3.14 ? "That is NOT PI" : "That is PI";

console.log(isPI);

/* let temp = 400; 

let tempCondition = temp <= 0 || temp > 30 ? "Weather is BAD" : "Weather is GOOD";

let isSunny = false; 

let isSunnyCondition = !isSunny ? "It is Cloudy" : "It is Sunny";

console.log(tempCondition);
console.log(isSunnyCondition);

/* let username = window.prompt("Enter your username: ")

username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase()

console.log(username);

/* No method chaining

let username = window.prompt("Enter your username: ")

username = username.trim();

let letterInitial = username.charAt(0)
letterInitial = letterInitial.toUpperCase();

let restLetters = username.slice(1, );
restLetters = restLetters.toLowerCase();

username = letterInitial + restLetters; 

console.log(username);

/* const email = "victornikiforov@gmail.com"

let userName = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)

console.log(userName);
console.log(extension);

const fullName = "Victor Nikiforov"

let space = fullName.indexOf(" ")
let firstNamez = fullName.slice(0, space);
let lastNamez = fullName.slice(space + 1, );

let fullNameProper = fullName.padEnd(1, "  ")
let firstName_index = fullNameProper.indexOf(" ");
let lastName_index = fullNameProper.lastIndexOf(" ")

let firstName = fullName.slice(0, firstName_index);
let lastName = fullName.slice(firstName_index, lastName_index);

console.log(fullName.slice(0, 1)); /* first char */

/* console.log(firstNamez);
console.log(lastNamez);
console.log(fullNameProper);

/* let userName = "dslfja";

console.log(userName.charAt(0));
console.log(userName.indexOf("t"));
console.log(userName.lastIndexOf("V"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.repeat(3));
console.log(userName.trim().startsWith("V"));
console.log(userName.endsWith("r"));
console.log(userName.includes("z"));
console.log(userName.padStart(15, "0"));
console.log(userName.padEnd(15, "0"));

const result = document.getElementById("result");

mySubmit.onclick = function(){
    
    const phoneNumber = document.getElementById("phone").value;
    let digits = phoneNumber.length

    if (digits == 9){
        result.textContent = `valid`
    }
    else {
        result.textContent = `invalid`
    }
}


/* let day = 6;

switch(day){
    case 1: 
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;

    case 3:
        console.log("It is Wednesday");
        break;

    case 4:
        console.log("It is Thursday");
        break;

    case 5:
        console.log("It is Friday");
        break;

    case 6:
        console.log("It is Saturday");
        break;

    case 7:
        console.log("It is Sunday");
        break;
    
    default: 
        console.log(`${day} is not a day`)
        break;

}

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default: 
        letterGrade = "F";
        break;
}

console.log(letterGrade);


/* let age = 1;
let message = age >= 18 ? "You are an adult" : "You're a minor";

console.log(message);

let time = 9;
let greeting = time <= 12 ? "Good morning" : "Good afternoon";

console.log(greeting);

let isStudent = false;
let truth = isStudent ? "You are a student" : "You are not a student";

console.log(truth);

let amount = 59; 
let discount = amount >= 50 ? 10: 0;

console.log(`Your total amount is $${amount - amount * (discount/100)}`);

/* const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You ARE subscribed`
    }
    else{
        subResult.textContent = `You ARE NOT subscribed`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with Mastercard`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal`
    }
    else{
        paymentResult.textContent = `You must select a payment method`
    }
}


/* const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age>=100){
    resultElement.textContent = `You are TOO OLD to enter this site`
}
    else if(age<0){
    resultElement.textContent = `Your age can't be below 0`
}
    else if(age>=18){
    resultElement.textContent = `You are old enough to enter this site`
}
    else{
    resultElement.textContent = `You must be 18+ to enter this site`
}
}

if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site")
}

if(time<12){
    console.log("Good morning!")
}
else{
    console.log("Good afternoon!")
}

if(isStudent){
    console.log("You are a student")
}
else{
    console.log("You are not a student")
}

if(age>=16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You can drive")
    }
    else{
        console.log("You need to get a license first")
    }
}
else{
    console.log("You must be 16+ to have a license")
}

if(age>=100){
    console.log("You are too old to enter this site");
}
else if(age<0){
    console.log("Your age can't be below 0")
}
else if(age>=18){
    console.log("You are old enough to enter this site")
}
else{
    console.log("You must be 18+ to enter this site")
}

/* const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);

/* let x = 3;
let y = 2;
let z = 1;

z = Math.floor(x);
g = Math.round(x);
t = Math.ceil(x);
f = Math.pow(x,y);
h = Math.trunc(x);
i = Math.sqrt(x);
j = Math.log(x);
k = Math.sin(x);
l = Math.cos(x);
m = Math.tan(x);
n = Math.abs(x);
o = Math.sign(x);

let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log(max);
console.log(min);

/*const PI = 3.14159; 
let radius;
let circumference; 

//radius = window.prompt("Enter the radius of a circle: ");

document.getElementById("radius2").onclick = function(){
    radius = document.getElementById("radius1").value;
    radius = Number(radius);
    circumference = 2 * PI * radius; 
    document.getElementById("radius3").textContent = circumference + "cm";
}

//let age = window.prompt("how old are you?");

//age = Number(age);
//age += 1;

//console.log(age, typeof age);

/* let x = "0";
let y = "pizza";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */



//let username = window.prompt("What's your username ?");

//console.log(username);

/* let username; 

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("yourH1").textContent = `Hello ${username}`
} */

//console.log(`Hello`);
//console.log(`I like pizza!`)

//window.alert(`This is an alert!`);
//window.alert(`I like pizza!`)

/* document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like Pizza!`;

let age = 27;
let price = 10.99;
let gpa = 3.5;
let firstName = "Victor";
let favoriteFood = "Udon";
let email = "victor@gmail.com";
let online = true;
let forSale = false;
let isStudent = false;
let fullName = "Victor Nikiforov";


console.log(age);
console.log(price);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);
console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`);
console.log(`${firstName} likes ${favoriteFood}`);
console.log(`${firstName}'s email is ${email}`);
console.log(typeof online);
console.log(`${firstName} is online: ${online}`);
console.log(`Is this car for sale? ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`; */

//comment

/* comments */

//let students = 30;

//students = students + 1; 
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

//students += 1 
//students -= 1
//students *= 2
//students /= 2
//students **= 2;
//students %= 2; 

//students++;
//students--;

/* 
console.log(students)

let result = 1 + 2 * 3 + 4 + 16;

console.log(result) */