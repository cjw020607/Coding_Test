let fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let arr=[];
for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number));
}

for(let k=0;k<N;k++){
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(arr[i][k]===1&&arr[k][j]===1){
                arr[i][j]=1;
            }
        }
    }
}
for(let i=0;i<N;i++){
    console.log(arr[i].join(' '))
}