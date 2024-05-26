function solution(a, b, c) {
    let one=a+b+c;
    let two=a**2+b**2+c**2;
    let three=a**3+b**3+c**3;
    return a==b&&b==c
    ? one*two*three
    :a==b||b==c||a==c
    ?one*two
    :one;

}