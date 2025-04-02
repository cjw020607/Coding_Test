fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let arr=[]
for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number));
}
arr.sort((a,b)=>a[1]-b[1]||a[0]-b[0])

let count=0;
let end_time=-1;

for(let i=0;i<N;i++){
    if(arr[i][0]<end_time) continue;
    end_time=arr[i][1]
    count++;
}
console.log(count)