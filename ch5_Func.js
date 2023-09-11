//함수
let sum = function(){
    console.log("함수1");
    console.log("함수2");
}
sum();
console.log(sum());

//함수의 기본 형태
/*function 함수_이름(매개변수) {
    함수 코드;
    return 리턴값;
}*/

//min부터 max까지 숫자를 더해 리턴하는 함수
console.log("min부터 max까지 숫자를 더해 리턴하는 함수");

function sum_2(min, max){
    let result = 0;
    for(let i = min ; i < max + 1 ; i++){
        result += i;
    }
    return result;
}
console.log(sum_2(1, 100));

console.log("----------");

//min부터 max까지 숫자를 곱해 리턴하는 함수
function multiply(min, max){
    let result = 1;
    for(let i = min ; i < max + 1 ; i++){
        result *= i;
    }
    return result;
}
console.log(multiply(1, 10));

console.log("---------");

//매개 변수 초기화
function print(name, count){
    if(typeof(count) == "undefined"){
        count = 1;
    }
    console.log(`${name}이/가 ${count}개 있습니다`);
}

print("사과", 2);
print("배");
//디폴트 매개 변수는 뒤쪽에 있는 매개 변수에만 적용 가능
//name에만 적용 불가, 'count와 name'엔 적용 가능

console.log("--------");

//parseInt(): 문자열 -> 정수
//parseFloat(): 문자열 -> 실수
let Array_3 = ["52", "52.273", "1401동"];

for(let i = 0 ; i < 3 ; i++){
    console.log(parseInt(Array_3[i]));
}
for(let i = 0 ; i < 3 ; i++){
    console.log(parseFloat(Array_3[i]));
}

console.log("--------");

//setTimeout(함수, 시간): 특정 시간 후에 함수를 실행
//setInterval(함수, 시간): 특정 시간마다 함수를 실행
let time = 1000;
setTimeout(function (){
    console.log(`${time / 1000}초가 지났습니다`);
}, time)
/*setInterval(function(){
    console.log(`${time / 1000}마다 함수가 실행됩니다`);
}, time)*/
//clearInterval(아이디): setInterval() 함수 호출 정지
let id = setInterval(function(){
    console.log(`${time / 1000}초마다 출력합니다`);
}, time)
setTimeout(function(){
    clearInterval(id);
    console.log("종료합니다");
}, 3000);
