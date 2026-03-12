const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [R,C,T]=input[0].split(' ').map(Number);
let arr=[];
let machine=[];
for(let i=1;i<=R;i++){
    let a=input[i].split(' ').map(Number)
    if(a[0]===-1){
        machine.push(i-1);
    }
    arr.push(a);
}
let nextArr=Array.from({length:R},()=>new Array(C).fill(0));
const rotate=()=>{
    nextArr=Array.from({length:R},()=>new Array(C).fill(0));
    for(let y=0;y<R;y++){
        for(let x=0;x<C;x++){
            if(arr[y][x]!==0){
                let value=~~(arr[y][x]/5);
                let distance=[[1,0],[-1,0],[0,1],[0,-1]];
                let count=0;
                for(let [dy,dx] of distance){
                    let ny=dy+y;
                    let nx=dx+x;
                    if(ny<0||nx<0||ny>=R||nx>=C||arr[ny][nx]===-1) continue;
                    count+=1;
                    nextArr[ny][nx]+=value;
                }
                nextArr[y][x]+=arr[y][x]-count*value;
            }
        }
    }
    //회전
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            //공기 청정기 오른쪽 칸
            if(nextArr[i][j]===-1){
                arr[i][j+1]=0;
            } 
            //미세먼지 사라짐
            else if((i===machine[0]-1||i===machine[1]+1)&&j===0) continue;
            //아래로 가는 경우
            else if(i<machine[0]&&j===0||i>=machine[1]&&i<R-1&&j===C-1){
                arr[i+1][j]=nextArr[i][j];
            }
            //위로 가는 경우
            else if(j===0&&i>machine[1]||j===C-1&&i<=machine[0]&&i>0){
                arr[i-1][j]=nextArr[i][j];
            }
            //왼쪽으로 가는 경우
            else if(j>0&&i===0||i===R-1&&j>0){
                arr[i][j-1]=nextArr[i][j];
            }
            //오른쪽으로 가는 경우
            else if((i===machine[0]||i===machine[1])&&j>0&&j<C-1){
                arr[i][j+1]=nextArr[i][j];
            }
            //그 외 
            else{
                arr[i][j]=nextArr[i][j];
            }
        }
    }
}
for(let i=0;i<T;i++){
    rotate()
}

let result=0;

for(let i=0;i<R;i++){
    for(let j=0;j<C;j++){
        if(arr[i][j]===-1) continue;
        result+=arr[i][j];
    }
}
console.log(result)