function solution(citations) {
    citations.sort((a,b)=>b-a)
    let l=Math.max(...citations);
    for(let i=l;i>=0;i--){
        let sum=citations.reduce((acc,item)=>{
            if(item>=i)
                acc+=1;
            return acc;
        },0)
        if(sum>=i)
            return i;
    }
}
