function solution(myString) {
    var alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return myString.split("").map((item,idx)=>alp.indexOf(item)<11?"l":item).join("");
    
}