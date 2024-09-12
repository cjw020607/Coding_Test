function solution(friends, gifts) {
    let l=friends.length;
    let graph=Array.from({length:l},()=>new Array(l).fill(0));
    let jisu=Array.from({length:l},()=>new Array(2).fill(0));
    for(gift of gifts){
        gift=gift.split(" ");
        graph[friends.indexOf(gift[0])][friends.indexOf(gift[1])]+=1;
    }
    //지수
    for(let i=0;i<l;i++){
        for(let j=0;j<l;j++){
            jisu[i][0]+=graph[i][j]; //준 선물
            jisu[j][1]+=graph[i][j]; //받은 선물
        }
    }
    result=new Array(l).fill(0);
    for(let i=0;i<l;i++){
        for(let j=0;j<l;j++){
            if(i===j)
                continue;
            if(graph[i][j]>graph[j][i]){ //준 선물이 더 많을때
                result[i]+=1;
            }
            else if(graph[i][j]===graph[j][i] || (graph[i][j]===0&&graph[j][i]===0)){
                //선물 지수 비교(크면 선물+1)
                if(jisu[i][0]-jisu[i][1]>jisu[j][0]-jisu[j][1])
                    result[i]+=1;
            }
        }
    }
    return Math.max(...result);
}