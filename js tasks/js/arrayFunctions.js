'use strict';
/*var arr = ['1', '2', '3', '4', '5', '6'];
var result = [];

while (arr.length > 0) { //массив уменьшается в цикле пока не достигнет нуля
	var first = arr.shift();
	var last = arr.pop();
	var str = first+last; //тут будет строка '16', потом '25', потом '34'
	result.push(str);
}

//После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку:
result = result.join('-');
document.write(result);
*/

var arr = [43,-3, 10, 100];
console.log(arr.sort());

function sortArr(a,b){
	if(a > b)
		return -1; //или указать число меньше 0
	if(a < b)
		return 1; //или указать цифру больше 0
	if(a==b)
		return 0 ;
}
console.log(arr.sort(sortArr));
