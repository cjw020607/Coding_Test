fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let input_arr=[];
let visited=new Array(N+1).fill(0);

for(let i=1;i<=M;i++){
    input_arr.push(input[i].split(' ').map(Number));
}

//두 치킨집 건물 사이의 거리 계산
const dist = Array.from({ length: N+1 }, () => new Array(N+1).fill(Infinity));

// 인접 노드 연결
for (let [a, b] of input_arr) {
  dist[a][b] = 1;
  dist[b][a] = 1;
}

// 자기 자신까지는 거리 0
for (let i = 1; i <= N; i++) dist[i][i] = 0;

// Floyd-Warshall
for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
    }
  }
}


let comb_arr=[];
let comb=[];

//치킨집 건물 2개 고르는 경우의 수 구하기
const bt=(depth,idx)=>{
    if(depth===2){
        comb_arr.push([...comb]);
        return;
    }
    for(let i=idx;i<=N;i++){
        if(!visited[i]){
            visited[i]=1;
            comb.push(i);
            bt(depth+1,i+1);
            visited[i]=0;
            comb.pop();
        }
    }
}

let whole=new Array(N+1).fill(0).map((_,i)=>i);
//한 치킨집 경우의 수에 따라 전체 집과 치킨집 거리 사이의 최소 합 구하기
const distSum=(chicken_arr)=>{
    let house_arr=whole.filter(item=>item!==0 &&!chicken_arr.includes(item));
    let sum=0;
    for(let house of house_arr){
        let min=Infinity;
        for(let chicken of chicken_arr){
            let d=dist[house][chicken];
            min=Math.min(min,d);
        }
        sum+=min;
    }
    return sum;
}

bt(0,1);

let building;
let min=Infinity;

//전체 치킨집 건물 경우의 수 중에 최소 거리 구하기
for(let i=0;i<comb_arr.length;i++){
    let total_dist=distSum(comb_arr[i]);
    // console.log(comb_arr,total_dist)
    if(total_dist<min){
        building=comb_arr[i].sort((a,b)=>a-b);
        min=total_dist;
    }
}
let result=[...building,min*2];
console.log(result.join(' '))