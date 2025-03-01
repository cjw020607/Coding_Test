fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,C]=input[0].split(' ').map(Number);
let arr=[];
for(let i=1;i<=N;i++){
    arr.push(+input[i]);
}
arr.sort((a,b)=>a-b);

const checkDistance=(mid)=>{
    let start=0;//제일 최신 공유기 위치
    let count=1; //맨 앞 공유기는 설치 되어 있으니 1로 초기화
    for(let i=1;i<N;i++){
        if(arr[i]-arr[start]>=mid) {
            start=i; //최신 공유기 위치 업데이트
            count+=1; //최소 거리보다 차이가 크면 공유기 설치
        }
    }
    //공유기 수에 맞게 혹은 이상 설치했을 경우
    return count>=C;
}

let result=[];
const bin=(start,end)=>{
    let mid=~~((start+end)/2);
    if(start>end){
        console.log(Math.max(...result));
        return;
    } 
    const isAvailable=checkDistance(mid);
    //공유기 설치가 가능하면 최소 거리 증가
    if(isAvailable){
        result.push(mid);
        start=mid+1;
    }
    else end=mid-1;
    bin(start,end);
}

bin(1,arr[N-1]-arr[0]);