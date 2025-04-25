fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let test_num=+input[0];
let test_arr=[];
for(let i=1;i<=test_num;i++){
    test_arr.push(+input[i]);
}

let comb_arr=[];
let comb=[];
let cal=['+','-',' '];
//계산식 경우의 수 구하기
const bt=(depth,N)=>{
    if(depth>=N-1){
        comb_arr.push([...comb])
        return;
    }
    for(let i=0;i<3;i++){
        comb.push(cal[i]);
        bt(depth+1,N);
        comb.pop();
    }
}

//모든 테스트 케이스에 대해서
for(let N of test_arr){
    let result=[];
    comb_arr=[];
    bt(0,N);
    let arr=new Array(N).fill(0).map((_,i)=>i+1);
    //모든 경우의 수에 대해서
    for(let c of comb_arr){
        let total=""+arr[0];
        for(let i=0;i<N-1;i++){
            total+=c[i]+arr[i+1];
        }
        //공백 제거 후 계산한 결과가 0일 때 추가
        if(eval(total.replace(/\s/g, ""))===0){
            result.push(total);
        }  
    }
    console.log(result.sort().join('\n'))
    console.log('')
}