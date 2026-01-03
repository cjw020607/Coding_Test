fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);

const map=new Map();

for(let i=1;i<=N;i++){
    let [site,pw]=input[i].split(' ');
    map.set(site,pw);
}

for(let i=N+1;i<=N+M;i++){
    console.log(map.get(input[i]));
}
