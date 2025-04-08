fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let [r,c,d]=input[1].split(' ').map(Number);
let input_arr=[];
for(let i=2;i<N+2;i++){
    input_arr.push(input[i].replaceAll("1","-1").split(' ').map(Number));
}

let count=0;
let dist=[[1,0],[-1,0],[0,1],[0,-1]]; //주변 4칸
while(true){
    let dirty=false;
    //현재 칸이 아직 청소되지 않은 경우 현재 칸 청소
    if(input_arr[r][c]===0){
        input_arr[r][c]=1;
        count+=1;
    }
    
    for(let [dy,dx] of dist){
        let ny=r+dy;
        let nx=c+dx;
        //벽에 부딛히면 스킵
        if(input_arr[ny][nx]===-1 || ny<0 || ny>=N || nx<0 || nx>=M) continue;
        //청소상태
        if(input_arr[ny][nx]===0){
            dirty=true;
        }
    }

    let back=[[1,0],[0,-1],[-1,0],[0,1]]; //순서대로 북,동,남,서 일때 후진한 경우 좌표 변화
    let front=[[-1,0],[0,1],[1,0],[0,-1]]; //순서대로 북,동,남,서 일때 전진한 경우 좌표 변화
    
    //주변 4칸 중 더러운 칸이 없을 때
    if(dirty===false){
        let [by,bx]=back[d]; //후진시 방향에 따른 y,x 변화량
        let ny=r+by;
        let nx=c+bx;
        //후진 불가시 작동 멈춤
        if(input_arr[ny][nx]===-1 || ny<0 || ny>=N || nx<0 || nx>=M) break;
        //후진 가능시 현재 위치를 후진 위치로 변경
        r=ny;
        c=nx;
    }
    else{ //주변 4칸 중 더러운 칸이 있을 때
        d=(d+3)%4; //반시계 방향으로 90도 회전
        let [fy,fx]=front[d]; //전진시 방향에 따른 y,x 변화량
        let ny=r+fy;
        let nx=c+fx;

        //전진 불가
        if(input_arr[ny][nx]===-1 || ny<0 || ny>=N || nx<0 || nx>=M) continue;
        //전진 가능 및 청소 안되어 있을 때 현재 위치를 전진 위치로 변경
        else if(!input_arr[ny][nx]){
            r=ny;
            c=nx;
        }
    }
}
console.log(count)
