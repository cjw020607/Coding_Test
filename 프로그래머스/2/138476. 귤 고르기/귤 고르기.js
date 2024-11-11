function solution(k, tangerine) {
    
    let t=[...new Set(tangerine)];
    let dic={}
    let value=[]
    t.forEach(item=>dic[item]=0)
    tangerine.forEach(item=>dic[item]+=1)
    for(key in dic){
        value.push(dic[key]);
    }
    value.sort((a,b)=>b-a)
    let i=0;
    while(k>0){
        k-=value[i];
        i+=1
    }
    return i
}