function solution(n,a,b)
{
    let list=[a,b];
    let result=1;

    while(true){
        if(Math.max(...list)-Math.min(...list)===1&&Math.min(...list)%2===1)
            break
        for(let i=0;i<2;i++){
            if(list[i]%2==0)
                list[i]/=2;
            else
                list[i]=(list[i]+1)/2;
        }
        result+=1;
    }
    return result;
}