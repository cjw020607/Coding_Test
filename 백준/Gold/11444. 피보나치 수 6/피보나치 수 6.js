const fs=require('fs');
const n=BigInt(fs.readFileSync(0).toString().trim());

const MOD=1000000007n;

function fib(n){
    if(n===0n) return [0n,1n];

    const [a,b]=fib(n/2n);

    const c=(a*((2n*b-a+MOD)%MOD))%MOD;
    const d=(a*a+b*b)%MOD;

    if(n%2n===0n){
        return [c,d];
    }else{
        return [d, (c+d)%MOD];
    }
}

console.log(fib(n)[0].toString());