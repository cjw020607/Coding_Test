fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let num_arr=input[1].split(' ').map(Number);
let M=+input[2];
let question_arr=[];
for(let i=3;i<M+3;i++){
    question_arr.push([...input[i].split(' ').map(Number)]);
}

const isPalindrome=(arr)=>{
    let startIdx=0;
    let endIdx=arr.length-1;
    while(startIdx<endIdx){
        if(arr[startIdx]!==arr[endIdx]) return false;
        else{
            startIdx++;
            endIdx--;
        }
    }
    return true;
}

let dp=Array.from({length:N},()=>new Array(N).fill(0));

//길이가 1일 때 무조건 팰린드롬
for(let i=0;i<N;i++){
    dp[i][i]=1;
}

//길이가 2일 때
for(let i=0;i<N;i++){
    if(num_arr[i]===num_arr[i+1]){
        dp[i][i+1]=1;
    }
}

//길이가 3이상 일 때
for(let len=3;len<=N;len++){
    for(let start=0;start<=N-len;start++){
        const end=start+len-1;
        if(num_arr[start]===num_arr[end]&&dp[start+1][end-1]===1){
            dp[start][end]=1;
        }
    }
}

let result=[];
for(let i=0;i<M;i++){
    let [S,E]=question_arr[i];
    result.push(dp[S-1][E-1]);
}
console.log(result.join('\n'))
