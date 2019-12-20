'use strict';

/*var arr = [
  [1, 2, 3, 4, 1],
  [4, 5, 6, 2, 6],
  [7, 8, 3, 6, 7],
  [1, 4, 4, 5, 4],
  [1, 8, 9, 6, 5]
];
var sumR = 0;
var sumL = 0;
for (var i = 0; i < arr.length; i ++) {
  for (var j = 0; j < arr.length; j ++) {
    if (i === j) {
      sumL += arr[i][j];
    }
    if (i + j === arr.length - 1) {
      sumR += arr[i][j];
    }
  }
}
var dif = Math.abs(sumR - sumL);
//console.log(arr[0][3], arr[1][2], arr[2][1], arr[3][0]);
//console.log(sumL, sumR, dif);
*/
var arr = [1, 2, -1, -2, -3, 0];

function plusMinus(arr) {
  var sumP = 0;
  var sumN = 0;
  var sumZ = 0;
  var newArr = [];

  for (var i = 0; i < arr.length; i ++) {
    var element = arr[i];

    if (element > 0) {
     sumP += 1;
    }
    else if (element < 0) {
      sumN += 1;
    } else {
      sumZ += 1;
    }
  }
  var fractionP = (sumP / arr.length).toFixed(6);
  var fractionN = (sumN / arr.length).toFixed(6);
  var fractionZ = (sumZ / arr.length).toFixed(6);
  //var str = fractionP + '<br>' + fractionN.toFixed(6) + '<br>' + fractionZ.toFixed(6);
  newArr.push(fractionP, fractionN, fractionZ);
  newArr = newArr.join('<br>');
  return newArr;
}
//document.write(plusMinus(arr));

/* ******* STAIRCASE ********** */

/*function staircase(n) {
  var symbol = '#';
  var space = '&nbsp;&nbsp;';
  var br = '<br>';
  for (var i = 0; i <= n; i ++) {
      document.write(space.repeat(n - i) + symbol.repeat(i) + br);
  }
}*/
//staircase(4);
function staircase(n) {
  var space = '&nbsp;&nbsp;';
  var symbol = '#';

  for (var i = 0; i <= n; i ++) {
    var j = n;
    while (j -- > i) {
      document.write(space);
    }
    while (j -- >= 0) {
      document.write(symbol);
    }
    document.write('<br>');
  }
}
//staircase(10);

/* ****************** MINI-MAX SUM *************** */

//var arr = [1, 2, 3, 4, 5];

var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var newArr = [];

  sum1 = arr[1] + arr[2] + arr[3] + arr[4];
  sum2 = arr[0] + arr[2] + arr[3] + arr[4];
  sum3 = arr[0] + arr[1] + arr[3] + arr[4];
  sum4 = arr[0] + arr[1] + arr[2] + arr[3];
  sum5 = arr[0] + arr[2] + arr[3] + arr[4];

newArr.push(sum1, sum2, sum3, sum4, sum5);
var result = newArr.sort();
var min = result[0];
var max = result[4];
//console.log(min, max);
//document.write(min +' '+ max);

var sum = 0;
var min = 1000000000;
var max = 0;

for (let element of arr) {
  sum += element; // sum of 5 elements of array

  if (min > element) {
    min = element;
  }
  if (max < element) {
    max = element;
  }
}
//console.log((sum - max), (sum - min));

function miniMaxSum(arr) {
  var sum = 0;
  var min = 1000000000;
  var max = 1;

  for (let element of arr) {
    sum += element; // sum of 5 elements of array

    if (min > element) {
      min = element;
    }
    if (max < element) {
      max = element;
    }
  }
  return ((sum - max) +' '+ (sum - min));
}
//document.write(miniMaxSum(arr));
