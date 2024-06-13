function solution(arr, k) {
    let a= [...new Set(arr)]
    if(a.length>=k)
        return a.slice(0,k);
    else{
        let f=new Array(k-a.length).fill(-1)
        return a.concat(f);
    }
        
}