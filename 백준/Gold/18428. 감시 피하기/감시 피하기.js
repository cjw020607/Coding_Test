fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=input[0];
let input_arr=[];
for(let i=1;i<=N;i++){
    input_arr.push(input[i].split(' '));
}
let visited=Array.from({ length: N },()=> Array(N).fill(0));

let comb=[];
let comb_arr=[];
const bt=(depth,y)=>{
    if(depth>=3){
        comb_arr.push([...comb]);
        return;
    }
    for(let i=y;i<N;i++){
        for(let j=0;j<N;j++){
            if(!visited[i][j]&&input_arr[i][j]==='X'){
                visited[i][j]=1;
                comb.push([i,j]);
                bt(depth+1,i);
                visited[i][j]=0;
                comb.pop();
            }
        }
    }
}

bt(0,0);

let result;
for(let comb of comb_arr){
    result=true;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(input_arr[i][j]==='S'){
                //오른쪽
                for(k=j+1;k<N;k++){
                    //위치가 장애물인지 확인
                    let exists = comb.some(item => item[0] === i && item[1] ===k);
                    if(exists){
                        break;
                    }
                    else if(input_arr[i][k]==='T'){
                        result=false;
                    }
                }
                //왼쪽
                for(k=j-1;k>=0;k--){
                    let exists = comb.some(item => item[0] === i && item[1] ===k);
                    if(exists){
                        break;
                    }else if(input_arr[i][k]==='T'){
                        result=false;
                    }
                }
                //아래쪽
                for(k=i+1;k<N;k++){
                    let exists = comb.some(item => item[0] === k && item[1] ===j);
                    if(exists){
                        break;
                    }
                    else if(input_arr[k][j]==='T'){
                        result=false;
                    }
                }
                //위쪽
                for(k=i-1;k>=0;k--){
                    let exists = comb.some(item => item[0] === k && item[1] ===j);
                    if(exists){
                        break;
                    }
                    else if(input_arr[k][j]==='T'){
                        result=false;
                    }
                }
            }
            if(result===false) break;
            
        }
        if(result===false) break;
    }
    if(result){
            console.log("YES");
            return;
    }
}

console.log("NO")