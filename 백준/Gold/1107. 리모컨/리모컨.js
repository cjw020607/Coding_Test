fs = require('fs');
input = fs.readFileSync(0).toString().trim().split('\n');

let N = +input[0];
let N_arr = input[0].split('').map(Number);
let num_len = N_arr.length;

let M = input.length === 3 ? +input[1] : 0;
let broken_arr = input.length === 3 ? input[2].split(' ').map(Number) : [];
let whole = Array.from({ length: 10 }, (_, i) => i);
let fine_arr = whole.filter(i => !broken_arr.includes(i));

let min = Math.abs(N - 100);
let comb = [];

const bt = (depth, len) => {
    if (depth === len) {
        let num = parseInt(comb.join(''));
        let press = len + Math.abs(N - num);
        min = Math.min(min, press);
        return;
    }
    for (let i = 0; i < 10; i++) {
        if (fine_arr.includes(i)) {
            comb.push(i);
            bt(depth + 1, len);
            comb.pop();
        }
    }
};

if (fine_arr.length > 0) {
    if (num_len === 1) {
        bt(0, num_len);
        bt(0, num_len + 1);
    } else {
        bt(0, num_len - 1);
        bt(0, num_len);
        bt(0, num_len + 1);
    }
}

console.log(min);
