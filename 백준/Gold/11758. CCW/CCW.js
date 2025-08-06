let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let position=[];
for(let i=0;i<3;i++){
    position.push(input[i].split(' ').map(Number));
}

let [x1,y1]=position[0];
let [x2,y2]=position[1];
let [x3,y3]=position[2];

//x1->x2
let grad1=(y2-y1)/(x2-x1);
let dir1=x2-x1; //양수면 오른쪽, 음수면 왼쪽

//x2->x3
let grad2=(y3-y2)/(x3-x2);
let dir2=x3-x2;
let result=1;

//x3->x1
let grad3=(y1-y3)/(x1-x3);

//기울기 같으면 일직선
if(Math.abs(grad1)===Math.abs(grad2)&&Math.abs(grad2)===Math.abs(grad3)){
    console.log(0);
}else{
    //첫번째 기울기가 더 작으면 (결과 * -1)
    if(grad1>grad2) result*=-1;
    //첫번째와 두번째 방향이 다르면 (결과 * -1)
    if(dir1*dir2<0) result*=-1;
    console.log(result);
}