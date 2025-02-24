fs=require('fs');
let [N,K]=fs.readFileSync(0).toString().trim().split(' ').map(Number);
let visited=new Array(100001).fill(0);
const bfs=(n,k)=>{
    let arr=[[n,0]];
    visited[n]=1;
    while(arr.length>0){
        let [location,count]=arr.shift();
        let new_location=[[location*2,count],[location-1,count+1],[location+1,count+1]];
        if(location===k) return count;
        for(let [l,c] of new_location){
            if(l===k) return c;
            if(l<0||l>=100000) continue;
            //순간이동 먼저 처리
            if(visited[l]===0){
                visited[l]=1;
                if(l===location*2) arr.unshift([l,c]);
                else arr.push([l,c]);
            }
        }
    }
}

console.log(bfs(N,K));
