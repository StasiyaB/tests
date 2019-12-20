'use strict';
function compareTriplets(a, b) {
    var result = [];
    var aSum = 0;
    var bSum = 0;
    for (var i = 0; i < 3; i ++) {
      if (a[i] < b[i]) {
        bSum += 1;
      }
      else if (a[i] > b[i]) {
        aSum += 1;
      }
    }
    result.push(aSum, bSum);
    return result;
}
//console.log(compareTriplets([3, 5, 1], [2, 5, 2]));

/* FRIENDS */
var friends = ["Ryan", "Kieran", "Mark", "Jenny", "Jene"];
/*var trueOnes = [];
for (var i = 0; i < friends.length; i ++) {
  if (friends[i].length === 4) {
    trueOnes.push(friends[i]);
  }
}
console.log(trueOnes);
*/

function friend(friends){
  var trueOnes = [];
  for (var i = 0; i < friends.length; i ++) {
    if (friends[i].length === 4) {
      trueOnes.push(friends[i]);
    }
  }
  return trueOnes;
}

//document.write(friend(friends));
function divisors(integer) {
  var arr = [];

  for (var i = 2; i < integer; i ++){
    if (integer % i == 0) {
      arr.push(i);
      console.log(i);
    }
  }
   return arr.length ? arr : integer + ' is prime';
};
//document.write(divisors(12));

/* ****** Replace With Alphabet Position ***** */
/*1. In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.*/
var text = 'The sunset sets at twelve o\' clock.';
/*function alphabetPosition(text) {

  return newArr;
}
console.log(alphabetPosition(text));
*/
var alphabet = {1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h', 9:'i', 10:'j', 11:'k', 12:'l', 13:'m', 14:'n', 15:'o', 16:'p', 17:'q', 18:'r', 19:'s', 20:'t', 21:'u', 22:'v', 23:'w', 24:'x', 25:'y', 26:'z'};

var arr = text.toLowerCase().split('');
var newArr = [];

for (var key in alphabet) {
  for (var element of arr) {
    if (element === alphabet[key]) {
      newArr.push(key);
    }
  }
}
