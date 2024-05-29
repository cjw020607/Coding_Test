function solution(i, j, k) {
    let result=0;
    for(let l=i;l<=j;l++){
        let s=String(l)
        if(s.includes(String(k))){
            for(let m=0;m<s.length;m++){
                if(s[m]==String(k))
                    result+=1
            }
        }
    }
    return result;
}