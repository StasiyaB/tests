'use strict';
/*let date = new Date();
console.log(date.getFullYear());

let i = 0;
setInterval(function() {
    console.log(++i);
}, 1000);

for (var i = 1; i <= 10; i ++) {
    console.log(i);
}

setInterval(function () {
    console.log(new Date());
}, 1000);

 let math = require('./math');  
 console.log(math.square(4), math.cube(4), math.forth(4));
 */
let fs = require('fs');
/*
let text = fs.readFileSync('readme.txt', 'utf8');
console.log(text);
*/
fs.readFile('readme.txt', 'utf8', (err, data)=> {
    if (err) throw err;

    console.log(data);    
});

console.log('!!!');
