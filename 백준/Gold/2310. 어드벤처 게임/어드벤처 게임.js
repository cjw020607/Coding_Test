let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let start=0;
let result=[];
while(true){
    let available=false;
    let n=+input[start];
    if(n===0) break;
    let way=[[1,0]];
    let visited=Array.from({length:n+1},()=>new Array(1001).fill(0));

    //bfs
    while(way.length>0){
        let [roomNumber, money]=way.shift();
        let [type,amount,...nextRooms]=input[start+roomNumber].split(' ').slice(0,-1);
        amount=+amount;
        
        //트롤일 때
        if(type==='T'){
            if(money>=amount){
                money-=amount;
            }else {
                continue;
            };
        }
        //레프리콘일 때
        else if(type==="L"){
            //소지금이 일정량 미만일 때에는 그만한 양이 되도록 금화를 채움
            if(money<amount) money=amount;
        }

        //마지막 방에 도착했을 때
        if(roomNumber===n){
            available=true;
            break;
        }

        for(let i=0;i<nextRooms.length;i++){
            //방문했으면 스킵
            if(!visited[+nextRooms[i]][money]){
                visited[+nextRooms[i]][money]=1;
                way.push([+nextRooms[i],money]);
            }
        }
    }
    available?result.push("Yes"):result.push("No");

    start=start+n+1;
}
console.log(result.join('\n'))
