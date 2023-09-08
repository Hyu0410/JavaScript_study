console.log("현재 시간 구하기");
let date = new Date(); //현재 날짜 및 시간
console.log(date.getFullYear()); //2023

if(date.getHours() < 12) {
    console.log("오전입니다");
}
else {
    console.log("오후입니다");
}

console.log("--------");

console.log("switch 조건문");
/* 기본 형태
    switch(비교할 값) {
        case 값:
            문장
            break;
        case 값:
            문장
            break;
        default:
            문장
            break;
    }
*/
let input = 32;

switch(input % 2) {
    case 0:
        console.log("짝수입니다");
        break;
    case 1:
        console.log("홀수입니다");
        break;
    default:
        console.log("유효하지 않은 숫자입니다");
        break;
}
