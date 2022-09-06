#!/usr/bin/node
const { argv } = require('node:process');

function add (a, b) {
  a = parseInt(argv[2]);
  b = parseInt(argv[3]);
  return a + b;
}
if (argv.length <= 3) {
  console.log(NaN);
} else {
  console.log(add(argv[2], argv[3]));
}
