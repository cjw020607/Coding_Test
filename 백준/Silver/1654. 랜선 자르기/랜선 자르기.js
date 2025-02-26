fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [K,N]=input[0].split(' ').map(Number);
let arr=[];
let sum=0;
for(let i=1;i<=K;i++){
    arr.push(+input[i]);
    sum+=+input[i];
}

let start=1;
let end=Math.max(...arr);

const sliceCount=(mid)=>{
    let count=0;
    for(let i=0;i<K;i++){
        count+=~~(arr[i]/mid);
    }
    return count;
}

const bin=(start,end)=>{
    let mid=~~((start+end)/2);
    if(start>end) {
        console.log(end);
        return;
    }
    let c=sliceCount(mid);
    if(c>=N) start=mid+1;
    else end=mid-1
    bin(start,end);
}

bin(start,end);