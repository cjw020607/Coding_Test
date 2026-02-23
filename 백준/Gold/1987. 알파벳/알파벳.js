const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [R,C]=input[0].split(' ').map(Number);
let arr=[];
for(let i=1;i<=R;i++){
    arr.push(input[i].split(''));
}
let max=1;
let count=1;

let startIdx = arr[0][0].charCodeAt(0) - 65;
let startBit = 1 << startIdx;

const bt=(position,bit,count)=>{
    let [y,x]=position;
    max = Math.max(max, count);
    let direction=[[1,0],[-1,0],[0,1],[0,-1]];
    for(let [dy,dx] of direction){
        let ny=y+dy;
        let nx=x+dx;

        if(ny<0||nx<0||ny>=R||nx>=C) continue;
        let idx = arr[ny][nx].charCodeAt(0) - 65;
        
        if (bit & (1 << idx)) continue;

        bt([ny,nx], bit | (1 << idx), count + 1);
        
        
    }

}
bt([0,0],startBit, count)
console.log(max)