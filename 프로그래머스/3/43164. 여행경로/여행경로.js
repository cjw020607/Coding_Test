function solution(tickets) {
    let visited=new Array(tickets.length).fill(0);
    let way=[];
    let founded=false;
    let result;
    function dfs(way,idx){
        if(way.length===tickets.length){
            founded=true;
            result=[...way];
            return;
        }
        for(let i=0;i<tickets.length;i++){
            //아직 방문 안한 곳 중에 전 목적지가 현 출바지인 티켓 찾기
            if(!visited[i]&&tickets[i][0]===tickets[idx][1]&&!founded){
                way.push(tickets[i]);
                visited[i]=1;
                dfs(way,i);
                way.pop();
                visited[i]=0;
            }
        }
        return;
    }
    //알파벳 순으로 정렬
    tickets.sort((a,b)=> {
        if(a[0]===b[0]){
            if(a[1]<b[1]){
                return -1;
            }
            return 1;
        }
        if(a[0]<b[0]){
            return -1;
        }
        return 1;
    });
    //정렬된 순으로 한번씩 출발점으로 지정
    for(let i=0;i<tickets.length;i++){
        if(tickets[i][0]==="ICN"){
            visited=new Array(tickets.length).fill(0);
            visited[i]=1;
            way=[tickets[i]];
            dfs(way,i);
            if(founded){
                let r=result.map(item=>item[0]);
                r.push(result[result.length-1][1])
                return r;
            }   
        }
    }
}