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