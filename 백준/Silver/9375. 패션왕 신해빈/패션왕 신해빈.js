let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let T=+input[0];
let i=1;

while(i<input.length){
    let map=new Map();

    let n=+input[i];
    for(let j=1;j<=n;j++){
        let [name,kind]=input[i+j].split(' ');
        map.set(kind,(map.get(kind)||0)+1);
    }
    let result=1;

    for(let item of map){
        result=result*(item[1]+1)
    }
    console.log(result-1);
    i=i+n+1;
}
