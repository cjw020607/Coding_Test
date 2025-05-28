fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,K]=input[0].split(' ').map(Number);
let input_arr=[];

for(let i=1;i<=N;i++){
    input_arr.push(input[i].split(' ').map(Number));
}

//floyd-warshall
for(let k=0;k<N;k++){
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            input_arr[i][j]=Math.min(input_arr[i][j],input_arr[i][k]+input_arr[k][j]);
        }
    }
}

let sum=0;
let min=Infinity;
let visited=new Array(N).fill(0);
visited[K]=1;
const dfs=(idx,count)=>{
    //모든 행성을 한번 이상 방문했을 경우 리턴
    if(visited.every(v=>v)){
        min=Math.min(min,sum);
        return;
    }
    //행성을 다 방문 안해도 현재까지의 시간이 최소 시간보다 크면 리턴
    if(min<=sum) return;

    for(let i=0;i<N;i++){
        if(!visited[i]&&idx!==i){
            sum+=input_arr[idx][i];
            visited[i]=1;
            dfs(i,count+1) //끝나는 점이 다음 시작점이 됨
            sum-=input_arr[idx][i];
            visited[i]=0;
        }
    }
}
dfs(K,1)
console.log(min)