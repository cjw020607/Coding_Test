fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [L,C]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').sort();
let result=[];
let word='';

const bt=(index)=>{
 for(let i=index;i<=C;i++){
  if(word.length===L && /[aeiou]/.test(word) && (word.match(/[bcdfghjklmnpqrstvwxyz]/g)|| []).length>=2){
   result.push(word);
   return;
  }
  if(i===C){
   return;
  }
  word+=arr[i];
  bt(i+1);
  word=word.slice(0,-1);
 }
}

bt(0);

console.log(result.join('\n'));
