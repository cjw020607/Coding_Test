function solution(my_string, queries) {
    queries.forEach(query=>{
        let [e,s]=query;
        let temp='';
        for(let i=s;i>=e;i--){
            temp+=my_string[i];
        }
        my_string=my_string.slice(0,e).concat(temp).concat(my_string.slice(s+1));
    })
    return my_string;
}