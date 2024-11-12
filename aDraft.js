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
