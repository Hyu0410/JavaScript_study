## 익명 함수(함수 리터럴, Literal)

1. let 함수_이름 = function(){

}

2.  리터럴: 변수 안에 들어있는 상태가 아니라 문자 그대로 나타내는 것

## 선언적 함수

1. function 함수_이름(){

}

## 화살표 함수

1. () => {}

2. let output = () => {
    console.log("히히");
    console.log("헤헤");
}
console.log(output());

## 매개 변수 초기화 방법

1. function print(name, count = 1){
    count = count || 1;
    //count = typeof(count) != "undefined" ? count : 1;

    console.log(`${name}이/가 ${count}개 있습니다`);
}

## 함수 덮어쓰기

1. 함수 = function(){
    console.log("첫 번째 함수");
}
function 함수(){
    console.log("두 번째 함수");
}
함수();

결과: 첫 번째 함수

2. 선언적 함수가 먼저 생성되고, 그 다음 익명 함수를 만든다.
