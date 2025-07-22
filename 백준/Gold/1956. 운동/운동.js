let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [V,E]=input[0].split(' ').map(Number);
let arr=Array.from({length:V+1},()=>new Array(V+1).fill(Infinity));
for(let i=1;i<=E;i++){
    let [a,b,c]=input[i].split(' ').map(Number);
    arr[a][b]=c;
}

for(let k=1;k<=V;k++){
    for(let i=1;i<=V;i++){
        for(let j=1;j<=V;j++){
            arr[i][j]=Math.min(arr[i][j],arr[i][k]+arr[k][j]);
        }
    }
}

let result=Infinity;

for(let i=1;i<=V;i++){
    for(let j=1;j<=V;j++){
        if(i!==j&&arr[i][j]<Infinity&&arr[j][i]<Infinity){
            result=Math.min(result,arr[i][j]+arr[j][i]);
        }
    }
}

result===Infinity?console.log(-1):console.log(result)