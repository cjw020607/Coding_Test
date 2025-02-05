function solution(participant, completion) {
   let dic={};
    participant.forEach(item => dic[item] = (dic[item] || 0) + 1);
    for(item of completion){
           dic[item]-=1;
    }
    return Object.keys(dic).find(key=>dic[key]>0)
}
