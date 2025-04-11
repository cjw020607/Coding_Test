fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let A=input[1].split(' ').map(Number);
let arr=input[2].split(' ').map(Number);

let oper_arr=[Array(arr[0]).fill('+'),Array(arr[1]).fill('-'),Array(arr[2]).fill('*'),Array(arr[3]).fill('/')].flat();
let l=oper_arr.length;
let visited=new Array(l).fill(0);

let colab=[];
let colab_arr=new Set();
//경우의 수 구하기
const bt=(depth)=>{
    if(depth===l){
        colab_arr.add(colab.join('')); //문자열로 변환 후 넣음
        return;
    }
    for(let i=0;i<l;i++){
        if(!visited[i]){
            visited[i]=1;
            colab.push(oper_arr[i]);
            bt(depth+1);
            visited[i]=0;
            colab.pop();
        }
    }
}
bt(0);
colab_arr = [...colab_arr].map(item=>item.split('')); // 다시 배열로 복원

let min=Infinity;
let max=-Infinity;

for(let [index,item] of colab_arr.entries()){
    let sum=A[0];
    for(let i=0;i<l;i++){
        if(item[i]==='+') sum+=A[i+1];
        else if(item[i]==='-') sum-=A[i+1];
        else if(item[i]==='*') sum*=A[i+1];
        //나눗셈일 때
        else if(sum<0) sum=~~(Math.abs(sum)/A[i+1])*(-1);
        else sum=~~(sum/A[i+1]);
    }
    if(sum>max) max=sum;
    if(sum<min) min=sum;
}
console.log(max===0?0:max)
console.log(min===0?0:min);