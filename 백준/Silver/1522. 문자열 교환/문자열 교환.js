fs=require('fs');
input=fs.readFileSync(0).toString().trim();

let l=[...input].reduce((acc,item)=>{
    if(item==="a"){
        acc+=1
    }
    return acc;
},0);

let min=Infinity;
for(let i=0;i<input.length;i++){
    let count=0;
    for(let j=i;j<i+l;j++){
        let idx=j%input.length;
        if(input[idx]==="b") count+=1
    }
    min=Math.min(min,count);
}
console.log(min)