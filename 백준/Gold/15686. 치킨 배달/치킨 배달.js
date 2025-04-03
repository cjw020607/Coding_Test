fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=[];
let chicken=[];
let visited=new Array(chicken.length).fill(0);

for(let i=1;i<=N;i++){
    let a=input[i].split(' ').map(Number);
    for(let j=1;j<=N;j++){
        if(a[j-1]===2){
            chicken.push([i,j]);
        }
    }
    arr.push(a);
}

let result=Infinity;
let answer=[];

const bt=(depth,idx)=>{
    if(depth===M){
        let sum=0;
        for(let i=0;i<N;i++){
            for(let j=0;j<N;j++){
                let min=Infinity;
                //집의 좌표
                let hy=i+1;
                let hx=j+1;
                if(arr[i][j]!==1) continue;
                //집과 치킨집 사이의 거리
                for(let [cy,cx] of answer){
                    let dist=Math.abs(hy-cy)+Math.abs(hx-cx);
                    if(dist<min) min=dist;
                    
                }
                sum+=min;
            }
        }
        result=Math.min(sum,result);
        return;
    }
    for(let i=idx;i<chicken.length;i++){
        if(!visited[i]){
            visited[i]=1;
            answer.push(chicken[i]);
            bt(depth+1,i);
            answer.pop();
            visited[i]=0;
        }
    }
}


bt(0,0);
console.log(result);