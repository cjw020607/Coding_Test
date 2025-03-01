fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let t=input[0].split(' ').map(Number);

for(let i=1;i<input.length;i+=2){
    let arr=[];
    let [N,K]=input[i].split(' ').map(Number);
    arr=input[i+1].split(' ').map(Number);
    arr.sort((a,b)=>a-b);
    let result=[]
    let start=0;
    let end=N-1;
    let mindiff=Infinity; //최소 차이
    while(start<end){
        let sum=arr[start]+arr[end];
        let diff=Math.abs(sum-K);
        if(mindiff>diff){
            mindiff=diff
            result=[diff];
        }
        else if(mindiff===diff){
            result.push(diff);
        }
        if(sum===K){
            start+=1;
            end-=1;
        }else if(sum>K) end-=1;
        else start+=1;
    }
    console.log(result.length);

}
