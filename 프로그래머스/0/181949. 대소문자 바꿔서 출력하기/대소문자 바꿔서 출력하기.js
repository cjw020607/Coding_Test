const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str=str.split('').map(c=>{
        if(c===c.toUpperCase())
            return c.toLowerCase();
        else
            return c.toUpperCase();
    }).join('');
    console.log(str)
});