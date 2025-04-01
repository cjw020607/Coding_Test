fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=[];
let chicken=[];
for(let i=1;i<=N;i++){
    let a=input[i].split(' ').map(Number);
    for(let j=1;j<=N;j++){
        if(a[j-1]===2){
            chicken.push([i,j]);
        }
    }
    arr.push(a);
}

const SelectChicken=(chicken_arr, num)=>{
    let result=[];
    if(num===1) return chicken_arr.map(item=>[item]);
    for(let i=0;i<chicken_arr.length;i++){
        const rest=chicken_arr.slice(i+1)//현재 인덱스 이후의 요소들
        const a=SelectChicken(rest,num-1);
        const attached=a.map(item=>[chicken_arr[i],...item]);
        result.push(...attached)
    }
    return result;
}

let chickenComb=SelectChicken(chicken,M);

let result=Infinity;

for(let c=0;c<chickenComb.length;c++){
    let sum=0;

    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            let min=Infinity;
            //집의 좌표
            let hy=i+1;
            let hx=j+1;
            if(arr[i][j]!==1) continue;
            for(let [cy,cx] of chickenComb[c]){
                let dist=Math.abs(hy-cy)+Math.abs(hx-cx);
                if(dist<min) min=dist;
                
            }
            sum+=min;
        }
    }
    result=Math.min(sum,result);
}


console.log(result);