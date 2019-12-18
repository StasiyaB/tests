'use strict';

let fs = require('fs');

/*1. Даны два файла. Прочитайте текст из первого файла и запишите его во второй.*/
/*
fs.readFile('folder/1.txt', 'utf8', (err, data) => {
    if(err) throw err;

    console.log(data);

    fs.writeFile('folder/2.txt', data, (err) => {
        if (err) throw err;
        
        console.log('done');
    });
    
});
*/

/*2. Дан файл с текстом. Запишите ему в конец еще какой-нибудь текст. */
/*
fs.readFile('folder/1.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);

    fs.writeFile('folder/1.txt', data +'!', (err) => {
        if (err) throw err;

        console.log('done');
    });

});
*/
/*3. Дан файл, текстом которого является число. Прочитайте этот файл, вычислите квадрат этого числа и запишите этот квадрат обратно в файл.*/
/*fs.readFile('folder/2.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);

    fs.writeFile('folder/2.txt', data * data, (err) => {
        if (err) throw err;

        console.log('done');
    });

});*/

/*4. Дан файл, текстом которого является строка из чисел, разделенных запятыми.Прочитайте этот файл, вычислите среднее арифметическое этих чисел и запишите результат в новый файл.*/

/*fs.readFile('folder/2.txt', 'utf8', (err, data) => {
    if (err) throw err;

    let digits = data.split(',');

    console.log(digits);

    let sum = 0;
    for (let digit of digits) {
        
        sum += Number(digit);
        var result = sum / digits.length;        
    }
    fs.writeFile('folder/2.txt', result, (err) => {
        if (err) throw err;

        console.log('done');
    });

});
*/
/*5. Дан файл test.txt, в тексте которого находится число.Сделайте 2 копии этого файла.Откройте первую копию и возведите находящееся в тексте файла число в квадрат.Запишите новое число обратно в файл.*/

/*
let fileName = ['test1', 'test2'];
for (let i = 0; i < fileName.length; i ++) {
    fs.copyFile('test.txt', 'folder/'+fileName[i]+'.txt', err => {
        if (err) throw err;

        console.log('created!');

        fs.readFile('folder/test1.txt', 'utf8', (err, data) => {
            if (err) throw err;

            console.log(data);

            fs.writeFile('folder/test1.txt', data * data, err => {
                if (err) throw err;

                console.log('done !');

            });

        });
        
    });
}
*/
/*6. Дан массив с именами файлов. Переберите циклом эти имена и удалите соответствующие файлы из папки. */
/*
let fileNames = ['1.txt', '2.txt', '3.txt', 'test1.txt'];

for (let fileName of fileNames) {
    fs.unlink('folder/'+fileName, err => {
        if (err) throw err;

        console.log('done !');
        
    });
}
*/

/*7. Дан текстовый файл. Запустите таймер, который каждую секунду будет записывать в файл число - сначала 1, потом 2, потом 3 и так далее. Как только счетчик таймера дойдет до 100 - прекратите отсчет и очистите файл.*/
