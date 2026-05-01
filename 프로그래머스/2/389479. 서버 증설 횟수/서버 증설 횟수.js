function solution(players, m, k) {
    var answer = 0;
    let result=0;
    const serverCount=new Array(players.length).fill(0);
    for(let i=0;i<players.length;i++){
        const p=players[i];
        const q=Math.floor(p/m); //필요한 서버 수
        if(serverCount[i]<q){
            //증설해야할 횟수
            let neededServer=q-serverCount[i]
            result+=neededServer;
            for(let j=i;j<i+k;j++){
                serverCount[j]+=neededServer;
            }
        }
    }

    return result;
}