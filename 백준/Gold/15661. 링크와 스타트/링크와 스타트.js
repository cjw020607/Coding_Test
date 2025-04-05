fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let arr=[];
let visited=new Array(N).fill(0);
for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number));
}


let comb_arr=[];
let comb=[];
//경우의 수 구하기
const bt=(n,depth,idx)=>{
    if(depth===n) {
        comb_arr.push([...comb])
        return;
    }
    for(let i=idx;i<N;i++){
        if(!visited[i]){
            visited[i]=1;
            comb.push(i);
            bt(n,depth+1,i);
            visited[i]=0;
            comb.pop(i)
        }
    }
}

//팀의 능력치 합 구하기
const calculate=(team_arr)=>{
    let sum=0;
    let l=team_arr.length;
    if(l===1) return 0;
    for(let i=0;i<l;i++){
        for(let j=i+1;j<l;j++){
            let ti=team_arr[i]
            let tj=team_arr[j]
            sum+=arr[ti][tj]+arr[tj][ti];
        }
    }
    return sum;
}

let num=~~(N/2);

for(let i=1;i<=num;i++){
    bt(i,0,0);
}

let min=Infinity;
let whole=new Array(N).fill(0).map((_,i)=>i);
//경우의 수 전체 돌면서 팀의 능력치 차이 구하기
for(let i=0;i<comb_arr.length;i++){
    let start=comb_arr[i];
    let link=whole.filter(item=>!start.includes(item))
    let start_sum=calculate(start);
    let link_sum=calculate(link);
    let diff=Math.abs(start_sum-link_sum);
    min=Math.min(min,diff);
}

console.log(min);