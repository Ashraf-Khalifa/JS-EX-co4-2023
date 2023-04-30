var age = 10;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("you are young");
}

var score = 45;
if (score > 50) {
  console.log("You passed the test!");
}else {
    console.log("You failed the test");
}

let Name = "John";
 
  console.log(`Hello, ${Name}`);

  let day = "Monday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
}  else {
  console.log("It's a weekday");
}

const number = 4;

if(number % 2 == 0) {
    console.log("The number is even.");
}

const  letter = 'g';

const index = 0;

console.log("It's a letter");


let x  = 5
if(x > 0){
  console.log("x is a positive number")
}
else if(x < 0){
  console.log("x is a negative number")
}


let y = -5
if(y > 0){
  console.log("y is a positive number")
}
else if(y < 0){
  console.log("y is a negative number")
}


function test(x) 
{
  if (x % 3 == 0 ) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test(9));

Input: gpa = 3.5
if(gpa >= 3){
    console.log("Congratulations, you have a good GPA")
  }
  else if(y < 3){
    console.log("sorry")
  }

  
  Input: password = "mypassword123"
  if(password.lenght >= 8){
    console.log("Your password is not long enough")
  }
  else {(password.lenght < 8 )
    console.log("Your password is long enough")
}


let numBet = 30;
let min = 18;
let max = 65;
if (numBet > min && numBet < max) {
 console.log("You are of working age");
}
else {
 console.log("Sorry");
}

Input: color = "red"
if(color == "red"){
    console.log("color is a primary color");
    }
    else if(color == "blue"){
        console.log("color is not primary color");
        }
        else if(color == "green"){
            console.log("color is not primary color");
            }


            function typeOfNaN(x) {
                if (Number.isNaN(x)) {
                  return 'Number NaN';
                }
                if (isNaN(x)) {
                  return 'NaN';
                }
              }
              
              console.log(typeOfNaN('11'));
              
              console.log(typeOfNaN(NaN));
