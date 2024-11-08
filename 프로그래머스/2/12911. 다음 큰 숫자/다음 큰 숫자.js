function solution(n) {
    let b=[...n.toString(2)]
    let count=b.reduce((acc,item)=>{
        if(item==="1")
            acc+=1;
        return acc
    },0)
    
    i=n+1
    while(true){
        let b2=[...i.toString(2)];
        let count2=b2.reduce((acc,item)=>{
        if(item==="1")
            acc+=1;
        return acc;
    },0)
        if(count===count2)
            break;
        i+=1;
    }
    return i;
}