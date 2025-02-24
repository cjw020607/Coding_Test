fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').map(Number);

let sum=arr.reduce((acc,item)=>acc+=item,0)
let start=~~(sum/M);

const blueRay=(mid)=>{
    let index=0;
    //블루레이 개수만큼
    for(let i=0;i<M;i++){
        let total=0;
        for(let j=index;j<N;j++){
            //블루레이 크기(mid) 초과할경우 다음 블루레이로 변경
            if(arr[j]+total>mid) break;
            else{
                total+=arr[j];
                index+=1;
            }

        }
    }
    if(index!==arr.length){
        return false;
    }
    else return true;
}

const bin=(start,end)=>{
    if(start>end) {
        console.log(start);
        return;
    }
    let mid=~~((start+end)/2);
    let available=blueRay(mid);
    if(available){
        end=mid-1;
    }
    else{
        start=mid+1;
    }
    bin(start,end)
}
bin(start,sum);