function solution(arr) {
    let cur=[];
    let result=0;
    while(JSON.stringify(arr) !== JSON.stringify(cur)){
        cur=[...arr];
        arr=arr.map(item=>{
            if(item>=50&&!(item%2))
                return item/2
            else if(item<50&&item%2)
                return item*2+1
            else 
                return item
        })
        result+=1;
    }
    return result-1;
}