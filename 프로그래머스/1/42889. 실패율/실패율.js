function solution(N, stages) {
    let total=stages.length;
    stages=stages.filter(item=>item<=N);
    dic={}
    for(let i=1;i<N+1;i++){
        num=stages.filter(item=>item===i).length
        dic[i]=num
    }
    for(key in dic){
        let tmp=dic[key];
        dic[key]=dic[key]/total;
        total-=tmp;
    }
    let sortedArray = Object.entries(dic).sort(([, a], [, b]) =>b-a);
    return sortedArray.map(item=>+item[0])

}