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
