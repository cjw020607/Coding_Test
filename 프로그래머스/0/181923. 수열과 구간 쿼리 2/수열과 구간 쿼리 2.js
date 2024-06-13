function solution(arr, queries) {
    return queries.map(query=>{
        let [s,e,k]=query;
        let r=[];
        for(let i=s;i<=e;i++){
            if(arr[i]>k)
                r.push(arr[i]);
        }
        return r.length==0?-1:Math.min(...r);
    })
}