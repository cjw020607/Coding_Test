const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];

let picked=[];
let total_count=0;
let count=0;

const dfs=(row)=>{
    if(row===N){
        total_count+=1;
        return;
    }
    for(let col=0;col<N;col++){
        let founded=true;
        if(picked.length!==0){
            for(let [py,px] of picked){
                if(row===py||col===px||Math.abs(px-col)===Math.abs(py-row)){
                    founded=false;
                    break;
                }
            }
        }
        if(founded){
            picked.push([row,col]);
            count+=1;
            dfs(row+1);
            picked.pop();
            count-=1;
        }
    }
}

dfs(0);

console.log(total_count);