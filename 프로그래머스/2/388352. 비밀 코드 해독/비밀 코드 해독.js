function solution(n, q, ans) {

    const check=(arr)=>{
        for(let i=0;i<q.length;i++){
            let count=0;
            for(let j=0;j<arr.length;j++){
                if(q[i].includes(arr[j])){
                    count++;
                }
            }
            if(count!==ans[i]){
                return false;
            }
        }
        return true;
    }
    let result=0;
    for(let i=1;i<=n-4;i++){
        for(let j=i+1;j<=n-3;j++){
            for(let k=j+1;k<=n-2;k++){
                for(let l=k+1;l<=n-1;l++){
                    for(let m=l+1;m<=n;m++){
                        let arr=[i,j,k,l,m];
                        if(check(arr)){
                            result++;
                        }
                    }
                }
            }
        }
    }
    return result;   
}