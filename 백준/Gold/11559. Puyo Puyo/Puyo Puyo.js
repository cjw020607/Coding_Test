fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let input_arr=[];
for(let i=0;i<12;i++){
    input_arr.push(input[i].split(''));
}

const explodePuyo=(location)=>{
    for(let [y,x] of location){
        input_arr[y][x]=".";
    }
}

const dropPuyo=()=>{
   for(let i=0;i<6;i++){
       let tmp=[];
       for(let j=11;j>=0;j--){
           if(input_arr[j][i]!=="."){
               tmp.push(input_arr[j][i]); //뿌요를 하나로 모음
           }
       }
       for(let j=11;j>=0;j--){
           input_arr[j][i]=tmp[11-j]||'.'; //모은 뿌요를 맨밑으로 내림
       }
   }
}

const bfs=(y,x,visited)=>{
    let way=[[y,x]];
    let location=[[y,x]];
    let color=input_arr[y][x];
    visited[y][x]=1;
    while(way.length>0){
        let [y,x]=way.shift();
        let direction=[[1,0],[-1,0],[0,1],[0,-1]];
        
        for(let [dy,dx] of direction){
            let ny=dy+y;
            let nx=dx+x;
            
            if(ny<0||nx<0||ny>=12||nx>=6) continue;
            if(!visited[ny][nx]&&input_arr[ny][nx]===color){
                visited[ny][nx]=1;
                way.push([ny,nx]);
                location.push([ny,nx]); //추후에 터트릴 뿌요 위치 저장
            }
        }
    }
    //개수가 4개 이상일 경우 뿌요 터뜨리기
    if(location.length>=4){
        return location;
    }
    return [];
}

let result=0;//연쇄 카운트
while(true){
    let visited=Array.from(Array(12),()=>Array(6).fill(0))
    let toExplode=[];
    for(let i=0;i<12;i++){
        for(let j=0;j<6;j++){
            if(!visited[i][j]&&input_arr[i][j]!=="."){
                let exploded=bfs(i,j,visited);
                if(exploded){
                    toExplode.push(...exploded);
                }
            }
        }
    }
    if(toExplode.length===0) break;
    explodePuyo(toExplode);
    dropPuyo();

    result+=1;
}
    
console.log(result)