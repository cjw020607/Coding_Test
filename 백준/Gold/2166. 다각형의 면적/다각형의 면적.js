const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];
const coordinates=[];
for(let i=1;i<=N;i++){
    coordinates.push(input[i].split(' ').map(Number));
}
coordinates.push(input[1].split(' ').map(Number));

let a=0;
let b=0;

for(let i=0;i<N;i++){
    let x1=coordinates[i][0];
    let y1=coordinates[i][1];
    let x2=coordinates[i+1][0];
    let y2=coordinates[i+1][1];
    a+=x1*y2;
    b+=x2*y1;
}

console.log((Math.abs(a-b)*0.5).toFixed(1));