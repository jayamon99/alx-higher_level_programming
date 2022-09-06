#!/usr/bin/node
const { argv } = require("node:process");

let size = parseInt(argv[2]);
let text = "";

if (isNaN(argv[2]) || !argv[2]) {
  console.log("Missing size");
}

for (let i = 0; i < size; i++) {
  text += "X";
}
for (let j = 0; j < size; j++) {
  console.log(text);
}
