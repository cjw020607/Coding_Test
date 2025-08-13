let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M,K]=input[0].split(' ').map(Number);
let notebook=Array.from({length:N},()=>new Array(M).fill(0));
let stickers=[];

let i=1;
while(i<input.length){
    let [n,m]=input[i].split(' ').map(Number);
    let tmp=[];
    for(let j=i+1;j<=i+n;j++){
        tmp.push(input[j].split(' ').map(Number));
    }
    stickers.push(tmp);
    i+=1+n;
}

const attachSticker=(sticker)=>{
    let h=sticker.length;
    let w=sticker[0].length;
    //노트북의 붙일 자리 제한(위쪽 우선 후 왼쪽 우선)
    for(let y=0;y<=N-h;y++){
        for(let x=0;x<=M-w;x++){
            //스티커 크기만큼 돌면서 붙일 수 있는지 확인
            let available=true;
            for(let i=0;i<h;i++){
                for(let j=0;j<w;j++){
                    //스티커의 특정 부분이 노트북에 자리가 없을 때
                    if(sticker[i][j]===1&&notebook[i+y][j+x]===1){
                        available=false;
                        break;
                    }
                }
                if(available===false) break;
            }
            
            //스티커의 모든 영역에 대해 노트북에 자리가 있으면 스티커를 붙임
            if(available===true){
                for(let i=0;i<h;i++){
                    for(let j=0;j<w;j++){
                        if(sticker[i][j]===1){
                            //1인 부분만 노트북에 붙임
                            notebook[i+y][j+x]=sticker[i][j];
                        }
                    }
                }
                return true;
            } 
        }
    }
    return false;
}

const rotate90=(sticker)=>{
    let y=sticker.length;
    let x=sticker[0].length;
    //x,y 반대로 배열 생성
    let tmp=Array.from({length:x},()=>new Array(y).fill(0));
    for(let i=0;i<y;i++){
        for(let j=0;j<x;j++){
            tmp[j][y-i-1]=sticker[i][j];
        }
    }
    return tmp;
}

for(let i=0;i<K;i++){
    let sticker=stickers[i];
    let available=attachSticker(sticker);
    for(let j=0;j<3;j++){
        //스티커 못 붙이면 90도 회전
        if(!available){
            sticker=rotate90(sticker);
        }else break;
        available=attachSticker(sticker);
    }
}

let count=0;
for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
        if(notebook[i][j]===1) count+=1;
    }
}

console.log(count)