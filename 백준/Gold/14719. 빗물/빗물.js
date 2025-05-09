fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [H,W]=input[0].split(' ').map(Number);
let input_arr=input[1].split(' ').map(Number);

let left=0, right=W-1;
let leftMax=input_arr[left], rightMax=input_arr[right];
let sum=0;
while(left<right){
    if(leftMax<rightMax){
        left+=1;
        leftMax=Math.max(leftMax,input_arr[left]);
        sum+=leftMax-input_arr[left];
    }else{
        right-=1;
        rightMax=Math.max(rightMax,input_arr[right]);
        sum+=rightMax-input_arr[right];
    }
}

console.log(sum);