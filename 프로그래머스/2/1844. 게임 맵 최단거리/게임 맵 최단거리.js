function solution(maps) {
    let h = maps.length;
    let w = maps[0].length;
    let visited=new Array(h).fill().map(()=>new Array(w).fill(0))
    let queue=[[0,0,1]];
    let count=0;
    while (queue.length>0){
        let [y,x,dist] = queue.shift();
        if(x===w-1&&y===h-1){
                return dist;
            }
        visited[0][0]=1;
        
        count+=1;
        
        let linked=[];
        if(y>0){
            linked.push([y-1,x])
        }
        if(y<h-1){
            linked.push([y+1,x])
        }
        if(x>0){
            linked.push([y,x-1])
        }
        if(x<w-1){
            linked.push([y,x+1])       
        }
        for(item of linked){
            let [y,x]=item;
            
            if(visited[y][x]===0&&maps[y][x]===1){
                visited[y][x]=1
                queue.push([y,x,dist+1])
            }        
        }
    }
    return -1;
}