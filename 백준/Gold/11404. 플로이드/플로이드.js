fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let n=+input[0];
let m=+input[1];
let bus_info=[];
for(let i=2;i<m+2;i++){
    bus_info.push(input[i].split(' ').map(Number));
}

const dist= Array.from({length:n},()=>new Array(n).fill(Infinity));

//자신은 0으로 초기화
for(let i=0;i<n;i++){
    dist[i][i]=0;
}

// 버스 정보 입력
for(let [start,end,cost] of bus_info){
    dist[start-1][end-1]=Math.min(cost,dist[start-1][end-1])
}

for(let k=0;k<n;k++){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            dist[i][j]=Math.min(dist[i][j],dist[i][k]+dist[k][j])
        }
    }
}

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(dist[i][j]===Infinity){
            dist[i][j]=0;
        }
    }
    console.log(dist[i].join(' '))
}
