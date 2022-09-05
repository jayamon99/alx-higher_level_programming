#!/usr/bin/node
const { argv } = require("node:process");



function factorial(n) {
    
    if (isNaN(n) || !n || n == 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(argv[2]));