fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let input_arr=[];
for(let i=1;i<=N;i++){
    input_arr.push(+input[i]);
}
let visited=Array.from(new Array(N+1),()=>[0,0]);

let result=[];
const bfs=()=>{
    //첫 시작점은 계단으로 안치니까 -1로 초기화
    let arr=[[0,0,-1]];
    while(arr.length>0){
        let [step,sum,count_one]=arr.shift();
        if(step===N) {
            result.push(sum) 
        }
        //+1,+2
        for(let i=1;i<3;i++){
            let new_step=step+i;
            
            //계단이 초과할경우 멈추기
            if(new_step>N) break;
            
            let new_sum=sum+input_arr[new_step-1];
            
            //처음 시작점일 때
            if(count_one===-1){
                visited[new_step][0]=new_sum;
                arr.push([new_step,new_sum,0]);
            }

            //한 계단일 경우
            if(i===1){
                if(count_one>=1) continue; //2번연속 한 계단 오르는 경우 막기
                else if(visited[new_step][1]<new_sum){
                    visited[new_step][1]=new_sum;
                    arr.push([new_step,new_sum,1]);
                }
            }
            //두 계단일 경우
            else if(visited[new_step][0]<new_sum){
                visited[new_step][0]=new_sum;
                //2계단 오를때 count_one을 0으로 초기화
                arr.push([new_step,new_sum,0]);
            }
        }
    }
}

bfs();

console.log(Math.max(...result));