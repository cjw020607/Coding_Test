function solution(x) {
    a=[...String(x)].reduce((sum,item)=>sum+Number(item),0);
    return x%a==0;
}