const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];
const solutions=input[1].split(' ').map(Number);

solutions.sort((a,b)=>a-b);

let min=Infinity;
let result;

for(let i=0;i<N-2;i++){
    let left=i+1;
    let right=N-1;
    while(left<right){
        let a=solutions[i];
        let b=solutions[left];
        let c=solutions[right];
        
        let sum=a+b+c;
        if(sum<0){
            left++;
        }else if(sum>0){
            right--;
        }else{
            console.log(a,b,c);
            return;
        }
        if(Math.abs(sum)<Math.abs(min)){
            min=sum;
            result=[a,b,c];
        }
    }
}

console.log(result.join(' '));