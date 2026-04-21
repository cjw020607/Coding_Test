const fs=require('fs');
const [A,B]=fs.readFileSync(0).toString().trim().split(' ').map(BigInt);

function countOnes(N){
    if(N<0n) return 0n;

    let count=0n;

    //i는 자릿수
    for(let i=0n;(2n**i)<=N;i++){
        let cycle=2n**(i+1n); //주기
        let full=(N+1n)/cycle; //완전 반복 수
        let r=(N+1n)%cycle;

        count+=full*2n**i;
        count+=r>2n**i?r-(2n**i):0n;
    }
    return count;
}
console.log((countOnes(B)-countOnes(A-1n)).toString());