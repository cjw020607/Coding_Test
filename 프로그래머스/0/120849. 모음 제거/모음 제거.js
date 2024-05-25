function solution(my_string) {
    let a="aeiou";
    return my_string.split("").map(item=>a.includes(item)?"":item).join("");
}