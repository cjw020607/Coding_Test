fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=[];
for(let i=1;i<=M;i++){
    arr.push(+input[i]);
}

const countEnvy=(mid)=>{
    let people=0;
    for(let i=0;i<arr.length;i++){
        people+=~~(arr[i]/mid);
        if(arr[i]%mid!==0){
            people+=1;
        }
    }
    //현재 사람수 보다 나눠준 사람이 더 많아질 때, 즉 보석이 남을 때
    if(people>N){
        return true;
    }else{
        return false;
    }
}

const bin=(start,end)=>{
    let mid=~~((start+end)/2);
    if(start>end){
        console.log(start);
        return;
    }
    //여기서 mid는 질투심, 즉 가장 많은 보석을 가진 학생
    let isLeft=countEnvy(mid);
    //보석이 남으면 mid start 증가 안남으면 감소
    if(isLeft) start=mid+1;
    else end=mid-1;
    bin(start,end);
}

bin(1,Math.max(...arr));