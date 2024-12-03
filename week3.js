// 1) Programming Paradigms
// 1) Introduction to Functional Programming
// 7) Programming Assignment Building a functional program
// Task 1: 
function consoleStyler(color, background, fontSize, txt){
  let message = "%c" + txt;
  let style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
};


// Task 2, 3:
function celebrateStyler(reason){
let fontStyle = "color: tomato; font-size: 50px";
if(reason == 'birthday'){
  console.log(`%cHappy birthday`, fontStyle);
} else if (reason == "champions"){
  console.log(`%cCongrats on the title!`, fontStyle);
} else {
  console.log(message, style);
}
};

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');


// Task 4
function styleAndCelebrate(color, background, fontSize, txt, reason){
  consoleStyler(color, background, fontSize, txt);  
  celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');




// 2) Introduction to Object-Oriented Programming
// 9) Programming Assignment Building an object-oriented program
// Task 1: Code a Person class

class Person {
  constructor(name = 'Tom', age = 20, energy = 100){
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep(){
    this.energy += 10;
  };
  doSomethingFun(){
    this.energy -= 10;
    return this.energy;
  };
}


// Task 2: Code a Worker class

class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10){
    super(name, age, energy)
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork(){
    this.xp += 10;
    return this.xp;
  };
}


// Task 3: Code a intern object
let intern = new Worker('Bob', 21, 110, 0, 10);
intern.goToWork()

// Task 4: Code a manager object
let manager = new Worker('Alice', 30, 120, 100, 30);
manager.doSomethingFun();




// 3) Advanced JavaScript Features
// 6) Programming Assignment Array and object iteration
// Task: Iterate Over an Array
// Step 1.** You are given an array of dairy products: 

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(dairy){
  for(var product of dairy){
    console.log(product);
  }
}

logDairy(dairy);

// Step 2.</b> You are given the following starter code:

// розкоментувати нижній код............
// const animal = {
//   canJump: true,
// };

// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;

// function birdCan(){
//   for(const key of Object.keys(bird)){
//     console.log(`${key}: ${bird[key]}`);
//   }
// };

// birdCan();
// розкоментувати верхній код.............


// Step 3.

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function animalCan(){
  for(const key in bird){
    console.log(`${key}: ${bird[key]}`);
  }
};

animalCan();




// 4) JavaScript in the Browser​
// 7) Exercise Capture Data
// Task 2: Get h1 into a variable
const h1 = document.querySelector('h1');

// Task 3: Code an array
const arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click'];

// Task 4: Write a click-handling function
function handleClicks(){
  switch(h1.innerText){
      case arr[0]:
          h1.innerText = arr[1];
          break;
      case arr[1]:
          h1.innerText = arr[2];
          break;
      case arr[2]:
          h1.innerText = arr[3];
          break;
      default:
          h1.innerText = arr[0];
          break;
  };
};

// Task 5: Add an event listener
h1.addEventListener('click', handleClicks);