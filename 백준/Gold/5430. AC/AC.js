let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let T=+input[0];
for(let i=1;i<=T*3;i+=3){
    let P=input[i].split('');
    let n=+input[i+1];
    let X=input[i+2].slice(1,input[i+2].length-1).split(',').map(Number);
    let left=0;
    let right=n-1;
    let direction=1 //1: ->, -1: <-
    for(let p of P){
        if(p==="R"){
            //방향 전환
            direction*=-1;
        }else if(p=="D"){
            // ->
            if(direction===1){
                left+=1;
            }
            // <-
            else{
                right-=1;
            }
        }
    }
    if(left-right>1){
        console.log('error');
        continue;
    }
    let result=[];

    // ->
    if(direction===1){
        for(let i=left;i<=right;i++){
            result.push(X[i]);
        }
    }
    // <-
    else{
        for(let i=right;i>=left;i--){
            result.push(X[i])
        }
    }
    console.log(`[${result.join(',')}]`);
}