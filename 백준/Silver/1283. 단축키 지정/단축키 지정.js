let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let word_arr=[];
for(let i=1;i<=N;i++){
    word_arr.push(input[i].split(' '));
}

let dic={};
let result=[];
for(let words of word_arr){
    let founded=false;
    for(let i=0;i<words.length;i++){
        let firstChar=words[i][0].toLowerCase();
        if(!dic[firstChar]){
            dic[firstChar]=true;
            words[i]=`[${words[i][0]}]${words[i].slice(1)}`;
            founded=true;
            break;
        }
    }

    if(!founded){
        outer:for(let i=0;i<words.length;i++){
            for(let j=1;j<words[i].length;j++){
                let ch=words[i][j].toLowerCase();
                if(!dic[ch]){
                    dic[ch]=true;
                    words[i] = words[i].slice(0, j) + `[${words[i][j]}]` + words[i].slice(j + 1);
                    founded=true;
                    break outer;
                }
            }
        }
    }
    result.push(words.join(' '));
}
console.log(result.join('\n'))