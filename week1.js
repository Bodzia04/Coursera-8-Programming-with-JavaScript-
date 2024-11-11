// week 1
// 1) Introduction to Javascript
// 2) Welcome to Programming
// 15) Exercise Advanced use of operators


// Task 1: Using the logical && operator

const score = 8;
console.log('Навички середнього рівня:', score > 0 && score < 10);


// Task 2: Using the logical || operator

const timeRemaining = 0;
const energy = 10;

console.log('Game over:', timeRemaining == 0 || energy == 0);


// Task 3: Using the modulus operator, %, to test if a given number is odd

const num1 = 2;
const num2 = 5;
const test1 = num1 % 2;
const test2 = num2 % 2;
const result1 = test1 == 0;
const result2 = test2 == 0;
console.log('Is', num1, 'an ever number?:', result1);
console.log('Is', num2, 'an ever number?:', result2);


// Task 4: Add numbers using the + operator

console.log(5 + 10);


// Task 5: Concatenate numbers and strings using the + operator

const now = 'Now in ';
const three = 3;
const d = 'D!';

console.log(now + three + d);


// Task 6: Use the += operator to accumulate values in a variable

let counter = 0;
counter += 5;
counter += 3;
console.log(counter);




// 3) Conditionals and Loops
// 4) Exercise Practice conditional statements

// Complete the following steps to create: Are You Old Enough?
var age = 10;

if(age >= 65){
  console.log('You get your income from your pension');
} else if(age < 65 && age >= 18){
  console.log('Each month you get a salary');
} else if(age < 18){
  console.log('You get an allowance');
} else {
  console.log('The value of the age variable is not numerical');
}


// Code the days of the week program as a switch statement
var day = 'Sunday';
switch (day) {
  case 'Monday':
    console.log('Play tenis');
    break;
  case 'Tuesday':
    console.log('Gym');
  break; 
  case 'Wednesday':
    console.log('Run');
  break;  
  case 'Thursday':
    console.log('Gym');
  break;  
  case 'Friday':
    console.log('Read book');
  break;  
  case 'Saturday':
    console.log('Meet friends');
  break;  
  case 'Sunday':
    console.log('Chill');
  break;            

  default:
    console.log('There is not such day');
    break;
}



// 10) Exercise Repetitive tasks with loops
// Task 1 

for(var i = 1; i <= 5; i++){
  console.log(i);
};
console.log('Counting completed!');


// Task 2

for(var i = 5; i > 0; i--){
  console.log(i);
};
console.log('Countdown finished!');


// Task 3

var i = 1;
while(i < 6) {
  console.log(i);
  i++;
};
console.log('Counting completed!');


// Task 4

var i = 5;
while(i > 0){
  console.log(i);
  i--;
};
console.log('Countdown finished!');


// Task 5

var year = 2018;
while(year < 2023) {
  console.log(year);
  year++;
};






// 16) Exercise Working with conditionals and loops
// Exercise 1

for(var i = 1; i < 11; i++){
  if(i == 1){
    console.log('Gold medal');
  } else if(i == 2){
    console.log('Silver medal');
  } else if(i == 3){
    console.log('Bronze medal');
  }else{
    console.log(i);
  }
};


// Exercise 2

for(var i = 1; i < 11; i++){
  switch(i) {
    case 1:
      console.log('Gold medal');
      break;
    case 2:
      console.log('Silver medal');
      break;
    case 3:
      console.log('Bronze medal');
      break;    
    default:
      console.log(i);
      break;
  }
}