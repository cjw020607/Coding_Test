fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let T=+input[0];
let W=[];
let K=[];

for(let i=1;i<=T*2;i+=2){
    W.push(input[i]);
    K.push(+input[i+1]);
}

let result=0;

for(let i=0;i<T;i++){
    let size=K[i];
    let str=W[i];
    let min=Infinity;
    let max=-1;
    const alphaMap = new Map();
    for(let m=0;m<str.length;m++){
        let ch=str[m];
        if(!alphaMap.has(ch)) alphaMap.set(ch,[]);
        alphaMap.get(ch).push(m);
    }
    for(const [char,positions] of alphaMap.entries()){
        if(positions.length<K[i]) continue;
        for(let j=0;j<=positions.length-K[i];j++){
            const start=positions[j];
            const end=positions[j+K[i]-1];
            const length=end-start+1;
            min=Math.min(min,length);
            max=Math.max(max,length);

        }
    }

    if(min===Infinity||max===-1){
        console.log(-1);
    }else{
        console.log(min, max);
    }
}
