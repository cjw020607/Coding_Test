fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let top_arr=input[1].split(" ").map(Number);
let stack=[];
let result=[];

for(let i=0;i<N;i++){
    let cur_height=top_arr[i];

    //stack의 마지막이 현재 기둥 높이보다 크거나 같을 때까지 pop
    while(stack.length>0&&cur_height>stack[stack.length-1].height){
        stack.pop();
    }

    //stack이 비었을 때는 앞에 현재 기둥보다 높은 기둥이 없는것이므로 0 넣음
    if(stack.length===0){
        result.push(0);
    }else{
        result.push(stack[stack.length-1].index+1);
    }

    //현재 탑 높이 stack에 넣음
    stack.push({index:i,height:cur_height});
}

console.log(result.join(' '))