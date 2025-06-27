let fs=require('fs');
let [N,K,P,X]=fs.readFileSync(0).toString().trim().split(' ').map(Number);

let numbers=[[1,1,1,0,1,1,1],[0,0,1,0,0,1,0],[1,0,1,1,1,0,1],[1,0,1,1,0,1,1],[0,1,1,1,0,1,0],[1,1,0,1,0,1,1],[1,1,0,1,1,1,1],[1,0,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1]]

let splited_X=String(X).padStart(K,'0').split('').map(Number);
let result=0;

let C=1; //바꾸려는 수
while(N>=C){
    let splited_C = String(C).padStart(K, '0').split('').map(Number);
    if(X===C){
        C++;
        continue;
    }
    let count=0;
    //층의 자리수만큼 돎
    for(let i=0;i<K;i++){
        let c=splited_C[i]; //바꾸려는 층 각 자리 숫자
        let x=splited_X[i]; //현재 층 각 자리 숫자
        //현재 층 숫자와 비교해서 바꾸려는 숫자로 만들기 위해 얼마나 뒤집어야하는지 계산
        for(let k=0;k<7;k++){
            if(numbers[c][k]!==numbers[x][k]){
                count+=1;
            }
        }
        if(count>P) break;
    }
    //최대 반전 수보다 크지 않으면 
    if(count<=P){
        result+=1;
    }
    C++;
}

console.log(result);