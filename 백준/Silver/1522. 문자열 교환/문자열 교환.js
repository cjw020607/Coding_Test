fs=require('fs');
input=fs.readFileSync(0).toString().trim();
let window_size=[...input].filter(item=>item==='a').length;
let l=input.length;

let min=Infinity;
let b_count;
for(let i=0;i<l;i++){
    b_count=0;
    //윈도우 내부
    for(let j=0;j<window_size;j++){ 
        let index=i+j;
        if(index>=l) index-=l;
        if(input[index]==='b') b_count+=1;
    }
    min=Math.min(min,b_count);
}

console.log(min)