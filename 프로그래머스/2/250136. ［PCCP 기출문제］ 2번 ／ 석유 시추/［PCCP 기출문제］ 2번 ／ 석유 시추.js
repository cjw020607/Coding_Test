function solution(land) {
    let height=land.length;
    let width=land[0].length;
    let visited=Array.from({length:height},()=>new Array(width).fill(false));
    let sizeArr=Array.from({length:width},()=>[]);
    let rowVisited=[];

    const bfs=(y,x)=>{
        let queue=[[y,x]];
        let size=1;
        let cols=new Set([x]);

        while(queue.length>0){
            let [y,x]=queue.shift();
            let distance=[[1,0],[-1,0],[0,1],[0,-1]];
            for(let [dy,dx] of distance){
                let ny=y+dy;
                let nx=x+dx;
                if(ny<0||nx<0||ny>=height||nx>=width){
                    continue;
                }
                if(!visited[ny][nx]&&land[ny][nx]===1){
                    queue.push([ny,nx]);
                    visited[ny][nx]=true;
                    size++;
                    cols.add(nx);
                }

            }
        }
        
        return {size,cols};
        
    }

    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(!visited[i][j]&&land[i][j]===1){
                visited[i][j]=true;
                const {size,cols}=bfs(i,j);
                
                for(let c of cols){
                    sizeArr[c].push(size);
                }
            }
        }
    }
    let result=0;
    for(let arr of sizeArr){
        let sum=0;
        for(let item of arr){
            sum+=item;
        }
        result=Math.max(result,sum);
    }

    return result
}