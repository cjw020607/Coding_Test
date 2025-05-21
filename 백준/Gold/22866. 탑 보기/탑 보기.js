fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let building=input[1].split(' ').map(Number);
let stack=[];
let result=Array.from({length:N},()=>({count:0,closest:null}))

//왼쪽 건물만 확인
for(let i=0;i<N;i++){
    let curHeight=building[i];
    while(stack.length>0&&curHeight>=stack[stack.length-1].height){
        stack.pop();
    }
    
    if(stack.length!==0){
        result[i].count+=stack.length;
        result[i].closest=stack[stack.length-1].idx;
    }
    stack.push({idx:i+1,height:curHeight});
}
stack=[];

//오른쪽 건물만 확인
for(let i=N-1;i>=0;i--){
    let curHeight=building[i];
    while(stack.length>0&&curHeight>=stack[stack.length-1].height){
        stack.pop();
    }

    if(stack.length>0){
        result[i].count+=stack.length;
        let closest=stack[stack.length-1];
        if(result[i].closest===null)
            result[i].closest=closest.idx;
        else{
            let prevDiff=Math.abs(result[i].closest-(i+1));
            let curDiff=Math.abs(closest.idx-(i+1));
            if(prevDiff>curDiff)
                result[i].closest=closest.idx
        }
    }
    stack.push({idx:i+1,height:curHeight});
}

let output=[];
for(let i=0;i<N;i++){
    if(result[i].count===0)
        output.push(0);
    else{
        output.push(`${result[i].count} ${result[i].closest}`)
    }
}
console.log(output.join('\n'))