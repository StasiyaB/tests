'use strict';
function square(num) {
    if (check(num)) {
        return Math.pow(num, 2);
    } else {
        return null;
    }    
}
function cube(num) {
    if (check(num)) {
        return Math.pow(num, 3);
    } else {
        return null;
    }    
}
function forthPower(num) {
    if (check(num)) {
        return Math.pow(num, 4);
    } else {
        return null;
    }
}
function check(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}
exports.square = square;
exports.cube = cube;
exports.forth = forthPower;