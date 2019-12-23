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
/*
fs.readFile('readme.txt', 'utf8', (err, data)=> {
    if (err) throw err;

    console.log(data);    
});

console.log('!!!');
*/
/*fs.writeFile('readme.txt', 'GGG TTT OOO', (err) => {
    if(err) throw err;   
    
});
*/
/* write array of the files*/
/*let arr = ['First', 'Second', 'Third', 'Forth'];
for (let i = 0; i < arr.length; i ++) {
    fs.writeFile(arr[i]+'.txt', '', (err) => {
        if (err) throw err;
    });
}
*/
/*fs.readFile('readme.txt', 'utf8', (err, data) => {
    if (err) throw err;

    let digits = data.split('');

    for (let digit of digits) {
        fs.writeFile('folder/' + digit +'.txt', digit*digit, (err) => {
        if (err) throw err;
        console.log('done');        
        });
    }
}); 
*/
/* place file to the folder */

/*fs.rename('readme.txt', 'folder/readme.txt', err => {
    if (err) throw err;
    console.log('complete!');
    
});
*/

/* copy file */
/*
fs.writeFile('test.txt', 'GGG TTT OOO', (err) => {
    if (err) throw err;

});
    
fs.copyFile('test.txt', 'folder/text.txt', err => {
    if (err) throw err;

    console.log('copied !');
    
});
*/

/* Delete file */
/*
fs.unlink('folder/test2.txt', err => {
    if (err) throw err;

    console.log('removed !');
    
});
*/
/* Clean file */
/*
fs.truncate('test.txt', err => {
    if (err) throw err;

    console.log('done!');
    
});
*/
/* CREATE FOLDER */
/*
fs.mkdir('tests/test', err => {
    if (err) throw err;
});
*/

/* DELETE FOLDER */
/*
fs.rmdir('tests', err => {
    if (err) throw err;
});
*/

/* READ FOLDER */

fs.readdir('folder', (err, files) => {
    if (err) throw err;

    console.log(files);
    
});

