let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let case_arr=[];
for(let i=0;i<input.length-1;i++){
    case_arr.push(input[i].split(''));
}

let result=[];

for(let c of case_arr){
    let lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let same=['OOO','XXX'];
    let shape;
    //X 개수
    let X_count=c.reduce((acc,item)=>{
        if(item==="X") 
            return acc+1;
        return acc;
    },0);
    //O 개수
    let O_count=c.reduce((acc,item)=>{
        if(item==="O") 
            return acc+1;
        return acc;
    },0);
    let same_line=[];
    for(let [i,j,k] of lines){
        if(same.includes(c[i]+c[j]+c[k]+"")){
            same_line.push([i,j,k]);
            shape=c[i]; //같은 줄의 모양
        }
    }
    //X 수가 더 작거나 X와 O의 차이가 1보다 클 때
    if(X_count<O_count || X_count-O_count>1){
        result.push("invalid");
        continue;
    }
    
    
    //같은게 2개 일 때 (3개 이상일 수는 없음)
    if(same_line.length===2){
        let common=false;
        let [a,b]=same_line;
        for(let i=0;i<3;i++){
            if(a.includes(b[i])) common=true;
        }
        //두 줄의 공통 칸이 없을 때
        if(!common){
            result.push("invalid");
            continue;
        }
    }

    //꽉 차지 않았는데 같은 줄이 없을 때
    if(c.includes('.')){
        if(same_line.length===0){
            result.push("invalid");
            continue;
        }
    }

    //같은 줄이 O일때 X수가 더 많을 경우
    if(same_line.length>0&&shape==="O"&&X_count>O_count){
        result.push("invalid");
        continue;
    }

    //같은 줄이 X일때 O수와 같을 경우
    if(same_line.length>0&&shape==="X"&&X_count===O_count){
        result.push("invalid");
        continue;
    }
    result.push("valid");
}
console.log(result.join('\n'))