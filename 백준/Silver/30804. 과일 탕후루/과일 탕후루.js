let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let S=input[1].split(' ').map(Number);
let max_length=0;
let left=0;
let map=new Map();
for(let right=0;right<N;right++){
    map.set(S[right],(map.get(S[right])||0)+1);
    while(map.size>2){
        map.set(S[left],map.get(S[left])-1);
        if(map.get(S[left])===0){
            map.delete(S[left]);
        }
        left++;
    }
    
    max_length=Math.max(max_length,right-left+1);   
}

console.log(max_length)