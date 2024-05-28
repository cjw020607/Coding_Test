function solution(my_string, indices) {
    return my_string.split('').filter((item,idx)=>!indices.includes(idx)).join("");
}