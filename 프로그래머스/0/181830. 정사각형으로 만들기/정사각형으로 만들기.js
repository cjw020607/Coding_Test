function solution(arr) {
    let m=arr.length;
    let n=arr[0].length;
    if(m>n){
        return arr.map(list=>{
            a=new Array(m-n).fill(0);
            list=list.concat(a);
            return list; 
        })
    }
    else if(m<n){
        for(let i=0;i<n-m;i++){
            let list=new Array(n).fill(0);
            arr.push(list);
        }
    }
    return arr;
}