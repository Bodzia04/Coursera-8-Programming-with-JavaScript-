// 1) The Building Blocks of a Program
// 1) Arrays, Objects and Functions

// Task 1, 2, 3, 4, 5, 6

function letterFinder(word, match){
for(var i = 0; i < word.length; i++){
  if(word[i] == match){
    console.log('Found the', match, 'at', i);
  } else {
    console.log('---No match found at', i);
  }
}
};

letterFinder('test', 't');




// 14) Exercise Creating arrays and objects

var clothes = [];
clothes.push('hat');
clothes.push('coat');
clothes.push('shoes');
clothes.push('t-shirt');
clothes.push('pants');
clothes.pop();
clothes.push('sweater');
console.log(clothes[2]);

var favCar = {};
favCar.color = 'black';
favCar.covertible = false;
console.log(favCar);



// 2) Error Handling
// 5) Exercise Error prevention

function addTwoNums(a, b){
  try{
    if(typeof a !== 'number'){
      throw new ReferenceError('the first argument is not a number.')
    } else if(typeof b !== 'number') {
      throw new ReferenceError('the second argument is not a number');
    } else {
      console.log(a + b);
    }
  } catch(err){
    console.log('Error!', err);
  }
}

addTwoNums(5, '5');
console.log('It still works');




// 7) Exercise Defensive programming

function letterFinder(word, match){
  var condition1 = typeof word == 'string' && word.length >= 2;
  var condition2 = typeof match == 'string' && match.length == 1;

  if(condition1 && condition2){
    for(var i = 0; i < word.length; i++){
      if(word[i] == match){
        console.log('Found the', match, 'at', i);
      } else {
        console.log('---No match found at', i);
      }
    }
  } else {
    console.log('Please pass correct arguments to the function.');
  }
}

letterFinder([], []);
letterFinder('cat', 'c');

