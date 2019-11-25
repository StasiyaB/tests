'use strict';
/*1. Write the body of the average(table) function. The function should return the average of the values contained in table. Table is always a defined array, objects in table are always Numbers. average should return 0 if table is empty.*/
function average(table) {
  if (table.length != 0) {
    var sum = 0;
    for (var i = 0; i < table.length; i ++) {
      sum += Number(table[i]);
    }
    var result = sum / table.length;
    return result.toFixed(2);
  } else {
    return 0;
  }
}
//document.write(average([]));

/*2. findLargest(numbers) should return the largest Integer from the numbers array. numbers is an array of integers which always contains at least one number. Implement findLargest(numbers).*/
function findLargest(numbers) {
  if (numbers.length >= 1) {
    return Math.max.apply(null, numbers);
  }
}
//document.write(findLargest([2, 5, 8]));

/*3. Write the body of the calc(array, n1, n2) function. array is an array of integers. The n1 and n2 parameters are integers defined by the relation 0<= n1 <= n2 < array.length. The calc function should return the sum of the integers of array whose index belongs to the [n1; n2] interval*/

function calc(array, n1, n2) {
  var sum = 0;
  for (var i = n1 ; i <= n2; i ++) {
      sum += array[i];
  }
  return sum;
}
//document.write(calc([1, 2, 3, 4, 5, 6, 7], 0, 2));

/*4. Everyday in supermarkets, cashiers have to give back correct change to customers who pay in cash. How could they determine which bills to give back so that the number of bills is minimum?
In this exercise, we ask you to find the optimal solution to give back change when a checkout only has $2, $5 and $10 bills.
To make the problem simplier, we'll consider that we have an infinite ammount of bills.*/
function change(cash) {
  var two  = 0;
  var five = 0;
  var ten  = 0;
  var cashToGo = cash;
  while (cashToGo >= 11) {
    cashToGo -= 10;
    ten += 1;
  }
  while (cashToGo >= 7 && cashToGo <= 11) {
    cashToGo -= 5;
    five += 1;
  }
  while (cashToGo >= 2 && cashToGo <= 6) {
    if (cashToGo == 5) {
      cashToGo -= 5;
      five += 1;
    } else {
      cashToGo -= 2;
      two += 1;
    }
  }
  if (cash < 2) {
    return null;
  }
  return {
    two:  two,
    five: five,
    ten:  ten
  };
}
//console.log(change(589));

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
var arr = [
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
console.log(sumL, sumR, dif);
