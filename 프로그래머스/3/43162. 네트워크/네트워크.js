function solution(n, computers) {
    let visited=new Array(n).fill(0);
    let count=0;
    const dfs=(node)=>{
        visited[node]=1;
        for(let j=0;j<n;j++){
            if(computers[node][j]===1&&visited[j]===0){
                dfs(j)
            }
        }
        return
    }
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i);
            count+=1
        }
    }
    return count;
}