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


let car2 = {
  speed: 200,
  color: 'red'
}

console.log(Object.keys(car2));
console.log(Object.values(car2));
console.log(Object.entries(car2));

for(let key of Object.keys(car2)){
  console.log(key,':', car2[key]);
}


const fruit = ['apple', 'pear', 'orange'];

function appendIndex(fruit, i){
  console.log(`${i}: ${fruit}`);
};

fruit.forEach(appendIndex);

const nums = [1, 2, 3, 4, 5, 6];

nums.filter(function(num){
  console.log(num > 4);
})

const result3 = [];
const drone = {
  speed: 100,
  color: 'red'
};

const droneKeys = Object.keys(drone);
droneKeys.forEach(key => {
  result3.push(key, drone[key]);
});

console.log(result3);


const number = [1, 2, 3, 4];

const newNumber = [number, 5, 6, ...number]
console.log(newNumber);
console.log(number);

function sum(a,b,c,d){
  return a + b + c + d;
};

console.log(sum(...number));

const user = { name: 'Bohdan', age: 20};

const updateUser = {...user, city: 'New York'}
console.log(updateUser);

const greeting = 'Hello';
const greetingOfChars = [...greeting]
console.log(greetingOfChars);


let [second] = number;
console.log(second);

let obj = {
  key: 1,
  value: 4
};

let output = {...obj};
output.value -= output.key;
console.log(output.value);

function count(...basket){
  console.log(basket.length);
  };

count(...number);

const input = document.createElement('input');
input.setAttribute('type', 'text')
document.body.appendChild(input)








