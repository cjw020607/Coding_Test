let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,K]=input[0].split(' ').map(Number);
let a=input[1].split(' ').map(Number);
let max=0;
let left=0;
let count_arr={};
for(let right=0;right<N;right++){
    let num=a[right];
    count_arr[num]=(count_arr[num]||0)+1;

    while(count_arr[num]>K){
        count_arr[a[left]]-=1;
        left+=1;
    }
    max=Math.max(right-left+1,max);
}
console.log(max)