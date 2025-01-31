fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let k=+input[0];
let sign=input[1].split(' ');
let arr=[0,1,2,3,4,5,6,7,8,9];
let visited=new Array(10).fill(0);
let number=[]
let result=[]
const bt=(depth)=>{
    for(let i=0;i<10;i++){
        if(number.length===k+1){
         result.push(number.join(''));
         return; 
        }
        if(visited[i]===1){
            continue;
        }
        if(number.length===0){
            visited[i]=1;
            number.push(arr[i]);
            bt(depth+1);
            visited[i]=0;
            number.pop();
        }
        else if((sign[depth-1]==='>' && number[depth-1]>arr[i])||(sign[depth-1]==='<' && number[depth-1]<arr[i])){
            visited[i]=1;
            number.push(arr[i]);
            bt(depth+1);
            number.pop();
            visited[i]=0;
        }
        
    }  
}

bt(0);
console.log(result[result.length-1]);
console.log(result[0]);