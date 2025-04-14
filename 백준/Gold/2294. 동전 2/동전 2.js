fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [n,k]=input[0].split(' ').map(Number);
let input_arr=[];
let visited=new Array(k+1).fill(0);
for(let i=1;i<=n;i++){
    input_arr.push(+input[i]);
}
let way=[];
for(let coin of input_arr){
    way.push([coin,1]);
    visited[coin]=1;
}

let result=-1;
while(way.length>0){
    let [num,count]=way.shift();
    if(num===k){
        result=count;
        break;
    }
    for(let item of input_arr){
        let sum=num+item;
        if(sum>k) continue;
        if(!visited[sum]) way.push([num+item,count+1]);
        visited[sum]=1
    }
}


console.log(result);