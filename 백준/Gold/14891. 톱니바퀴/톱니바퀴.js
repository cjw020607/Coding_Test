fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let wheel_arr=[[0,0,0,0,0,0,0,0]];
for(let i=0;i<4;i++){
    wheel_arr.push(input[i].split('').map(Number));
}
let K=+input[4];
let spin_arr=[];
for(let i=5;i<K+5;i++){
    spin_arr.push(input[i].split(' ').map(Number));
}

let visited=[0,0,0,0,0];
let need_spin_arr=[];

const CheckSpin=(num,dir)=>{
    visited[num]=1;
    //1번 바퀴일때
    if(num===1){
        //마주보는 극이 같지 않고 다음 바퀴를 아직 방문 안했으면
        if((wheel_arr[num][2]!==wheel_arr[num+1][6])&&!visited[num+1]){
            need_spin_arr.push([num+1,dir*(-1)]);
            CheckSpin(num+1,dir*(-1));
        }
        return;
    }
    //4번 바퀴일때
    else if(num===4){
        //마주보는 극이 같지 않고 다음 바퀴를 아직 방문 안했으면
        if((wheel_arr[num][6]!==wheel_arr[num-1][2])&&!visited[num-1]){
           need_spin_arr.push([num-1,dir*(-1)]);
            CheckSpin(num-1,dir*(-1))

        }
        return;
    }
    //2,3번 바퀴일때
    else{
        //마주보는 극이 같지 않고 다음 바퀴를 아직 방문 안했으면
        if((wheel_arr[num][2]!==wheel_arr[num+1][6])&&!visited[num+1]){
            need_spin_arr.push([num+1,dir*(-1)]);
           CheckSpin(num+1,dir*(-1));
        }        

        //마주보는 극이 같지 않고 다음 바퀴를 아직 방문 안했으면
        if((wheel_arr[num][6]!==wheel_arr[num-1][2])&&!visited[num-1]){
           need_spin_arr.push([num-1,dir*(-1)]);
           CheckSpin(num-1,dir*(-1))
        }
        return;

    }
}

const SpinWheel=(arr)=>{
    for(let [num,dir] of arr){
        let tmp;
        //반시계 방향 회전
        if(dir===-1){
            tmp=wheel_arr[num].slice(1,8);
            tmp.push(wheel_arr[num][0]);
            wheel_arr[num]=tmp;
        }
        //시계 방향 회전
        else{
            tmp=wheel_arr[num].slice(0,7);
            tmp.unshift(wheel_arr[num][7]);
            wheel_arr[num]=tmp;
        }
    }
}

for(let i=0;i<spin_arr.length;i++){
    let [num,dir]=spin_arr[i];
    //톱니바퀴 방문 기록과 회전해야할 톱니바퀴 리스트 초기화
    // need_spin_arr=[];
    need_spin_arr=[[num,dir]];
    visited=[0,0,0,0,0];

    //회전해야할 톱니바퀴 정보 파악
    CheckSpin(num,dir);
    //회전해야할 톱니바퀴 회전
    SpinWheel(need_spin_arr);
}

//점수 계산
let score=[0,1,2,4,8];
let result=0;
for(let i=1;i<=4;i++){
    if(wheel_arr[i][0]) result+=score[i];
}
console.log(result)