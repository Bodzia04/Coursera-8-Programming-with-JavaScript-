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



