let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,d,k,c]=input[0].split(' ').map(Number);
let sushi_arr=[];
for(let i=1;i<=N;i++){
    sushi_arr.push(+input[i]);
}
sushi_arr=[...sushi_arr,...sushi_arr];

let max=0;

for(let start=0;start<N;start++){
    let end=start+k;
    let sliced_arr=sushi_arr.slice(start,end);
    //중복제거
    let count=[...new Set(sliced_arr)].length;
    
    //쿠폰 번호 초밥 포함 안돼있으면 하나 더 먹을 수 있음
    if(!sliced_arr.includes(c)){
        count+=1;
    }
    max=Math.max(max,count)
}
console.log(max)