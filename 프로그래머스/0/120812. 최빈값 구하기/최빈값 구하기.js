function solution(array) {
    s_array=[...new Set(array)];
    let result=[]
    let dic={}
    for(item of s_array){
        let count=0
        for(let i=0;i<array.length;i++){
            if(array[i]===item)
                count+=1;
        }
        dic[item]=count
        result.push(count);
    }
    let m=Math.max(...result)

    result.splice(result.indexOf(m), 1);

    if(m===Math.max(...result))
       return -1;
    else
       return Number(Object.keys(dic).find(key => dic[key] === m));
}