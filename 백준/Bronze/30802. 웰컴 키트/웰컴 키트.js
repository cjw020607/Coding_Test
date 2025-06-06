fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let tshirt=input[1].split(' ').map(Number);
let [T,P]=input[2].split(' ').map(Number);
let sum=0;
for(let i=0;i<tshirt.length;i++){
    if(tshirt[i]%T===0) sum+=tshirt[i]/T;
    else sum+=~~(tshirt[i]/T)+1;
}
console.log(sum);
console.log(~~(N/P), N%P);