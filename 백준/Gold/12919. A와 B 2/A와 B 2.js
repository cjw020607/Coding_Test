fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let S=input[0];
let T=input[1];

let bfs_arr=[T];
while(bfs_arr.length>0){
    let S_str=bfs_arr.shift();
    if(S_str===S){
        console.log(1);
        return;
    }
    let sl=S_str.length;
    //바꾸려는 값보다 길이가 길 때만 제거
    if(sl>S.length){
        //맨뒤가 A일 때
        if(S_str[sl-1]==="A"){
            bfs_arr.push(S_str.slice(0,-1));
            //맨뒤가 A면서 맨 앞이 B일 때
            if(S_str[0]==="B"){
                bfs_arr.push(S_str.split('').reverse('').join('').slice(0,-1));
            }
        }
        //맨뒤가 B이면서 맨 앞이 B일 때
        else if(S_str[0]==="B"){
            bfs_arr.push(S_str.split('').reverse('').join('').slice(0,-1));
        }
    }
}
console.log(0);