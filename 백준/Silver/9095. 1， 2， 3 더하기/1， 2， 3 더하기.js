const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
const n=+input[0]
let list=[];

for(let i=1;i<=n;i++){
    let a=+input[i];
    list.push(a);
}

for(let i=0;i<n;i++){
    let result=[1,2,4];
    let target=list[i]
    for(let j=3;j<target;j++){
        result.push(result[j-1]+result[j-2]+result[j-3]);
    }
    target===3||target===1||target===2?console.log(result[target-1]):console.log(result[target-1])
}
