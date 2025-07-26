let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let colors=input[1].split('');

let B_right=0;
let R_right=0;
let B_left=0;
let R_left=0;
let left=0;
let right;
while(left<N){
    if(colors[left]==="R"){
        left+=1;
        continue;
    }
    right=left+1;
    while(colors[right]==="B"){
        right+=1;
    }
    if(right>=N) break;
    B_right+=right-left;
    left=right+1;
}
left=0;
while(left<N){
    if(colors[left]==="B"){
        left+=1;
        continue;
    }
    right=left+1;
    while(colors[right]==="R"){
        right+=1;
    }
    if(right>=N) break;
    R_right+=right-left;
    left=right+1;
}

right=N-1;
while(right>0){
    if(colors[right]==="R"){
        right-=1;
        continue;
    }
    left=right-1;
    while(colors[left]==="B"){
        left-=1;
    }
    if(left<0) break;
    B_left+=right-left;
    right=left-1;
}

right=N-1;
while(right>0){
    if(colors[right]==="B"){
        right-=1;
        continue;
    }
    left=right-1;
    while(colors[left]==="R"){
        left-=1;
    }
    if(left<0) break;
    R_left+=right-left;
    right=left-1;
}

console.log(Math.min(B_right,B_left,R_right,R_left));