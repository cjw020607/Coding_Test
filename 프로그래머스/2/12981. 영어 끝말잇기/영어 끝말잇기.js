function solution(n, words) {
    let l=words.length;
    let exist=[words[0]];
    let index=-1;
    for(let i=1;i<l;i++){
        if(words[i-1][words[i-1].length-1]!==words[i][0]||exist.includes(words[i])){
            index=i;
            break;
        }else
            exist.push(words[i]);
    }
    return index===-1?[0,0]:[index%n+1,~~(index/n)+1]
}