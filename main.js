'use strict';
function findLargest(numbers) {
   numbers = [1, -28, 88, 200, 7];
   var maxValue = numbers[0];

   for (var i = 0; i < numbers.length; i ++) {

     if (numbers[i] > maxValue) {

       maxValue = numbers[i];
     }
   }
   return maxValue;
 }
 console.log(findLargest());
