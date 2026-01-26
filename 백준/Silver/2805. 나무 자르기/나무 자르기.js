const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,M]=input[0].split(' ').map(Number);
const trees=input[1].split(' ').map(Number);

let start=0;
let end=Math.max(...trees);
let mid=Math.floor((start+end)/2);
let max=0;

while(start<=end){
    mid=Math.floor((start+end)/2);
    let sum=0;
    for(let i=0;i<N;i++){
        if(trees[i]>mid){
            sum+=trees[i]-mid;
        }
    }
    // 가져갈 수 있는 나무가 M보다 크면 절단기 설정 길이를 더 늘림
    if(sum>=M){
        max=Math.max(max,mid);
        start=mid+1;
    }else{
        end=mid-1;
    }
}
console.log(max)