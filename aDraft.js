// console.log('Bodzio'.indexOf('o'));
// console.log('Bodzio'.split(''));

const car = {};

car.color = 'red';
car.turnKey = function(){
  console.log('engine running');
}

car.turnKey2 = () => {
  console.log('engine running 2');
  return 'engine running 2 return';
}

console.log(car.color)
console.log(car.turnKey());
console.log(car.turnKey2());

var dog = {
color: 'black',
lenght: 60,
};
dog['type'] = 'corgi';

console.log(dog);

function add(a, b){
  return a + b;
}


// function localVar(){
//   let value = 1;
// }

// console.log(value);

// const car = {};

// car.color = 'red';
// car.turnKey = function(){
//   console.log('engine running');
// }

// car.turnKey2 = () => {
//   console.log('engine running 2');
//   return 'engine running 2 return';
// }

console.log(car.color)
console.log(car.turnKey());
console.log(car.turnKey2());

function noDefaultParam(number){
  console.log('Answer:', number * number);
  
}

noDefaultParam();

class NoDefaultParam{
  constructor(number1 = 1, number2 = 4, string){
    this.number1 = number1;
    this.number2 = number2;
    this.string = string;
  }
  calculate(){
    if(this.string){
      console.log(this.number1 + this.number2, this.string);
      return;
    }
    return 'it is false!'
  }
};

let fail = new NoDefaultParam(1, 2, true);
console.log(fail.calculate());



class Animal {
  sayHell(){
    console.log('hello');
    
  }
}

class Dog extends Animal {
  sayHell(){
    console.log('hey');
    
  }
}

let result = new Dog();
result.sayHell()

