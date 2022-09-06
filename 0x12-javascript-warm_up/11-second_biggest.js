#!/usr/bin/node
const { argv } = require("node:process");

if (argv.length <= 3) {
  console.log(0);
}

console.log(argv.slice(2,).sort()[argv.length - 4]);
