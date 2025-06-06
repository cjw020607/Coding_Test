fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let A=input[0];
let B=input[1];
let C=input[2];

console.log(+A+(+B)-(+C));
console.log(+(A+B)-(+C));