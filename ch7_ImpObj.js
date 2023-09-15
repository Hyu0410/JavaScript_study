//Number 객체
let numberFromLiteral = 273;
let numberFromConstructor = new Number(273); 

//Number 객체의 메소드
let number = 273.5210332;
let number_2 = new Number(273.5210332);

console.log(number.toFixed(1));
console.log(number.toFixed(3));
console.log(number_2.toFixed(2));

console.log(number.toPrecision(3));

console.log("------------");

//Number 클래스의 속성
let number_3 = new Number(Number.MAX_VALUE);
let number_4 = Number.MIN_VALUE;

console.log(number_3);
console.log(number_4);

console.log("----------");

//String 객체
let stringFromLiteral = "안녕하세요";
let stringFromConstructor = new String("안녕 못해요");

console.log(`stringFromLiter: ${stringFromLiteral}`);
console.log(`stringFromConstructor: ${stringFromConstructor}`);

//String 메소드 사용
let string_1 = "가나다라마바사";
let string_2 = "abcdefg";

console.log(`string_1 문자열의 길이: ${string_1.length}`);
console.log(`sting_2.charAt(position): ${string_2.charAt(2)}`);
console.log(`string_2.toUpperCase(): ${string_2.toUpperCase()}`);

console.log("-----------");

//Data 객체
let date_1 = new Date();
console.log(`new Data(): ${date_1}`);

let date_2 = new Date(692281800000);
console.log(`new Date(유닉스_타임): ${date_2}`);

let date_3 = new Date("December 24, 2018 21:00:00");
console.log(`new Data(시간_문자열): ${date_3}`);

let date_4 = new Date(2020, 12 - 1, 24, 21, 30, 0, 0);
console.log(`new Date(연, 월 - 1, 일, 시간, 분, 초, 밀리초: ${date_4})`);

console.log("-----------");

//Array 객체
let Array_1 = [{
    name: "고구마",
    price: 1000
}, {
    name: "감자",
    price: 500
}, {
    name: "바나나",
    price: 1500
}]

console.log(Array_1.pop()); //배열의 마지막 요소 제거 후 리턴
console.log(Array_1); //배열의 마지막 요소 제외한 모든 요소 출력

console.log("-------");

//Array 객체의 콜백 함수
let Array_2 = [{
    name: "고구마",
    price: 1000
}, {
    name: "감자",
    price: 500
}, {
    name: "사과",
    price: 1500
}]

console.log(`--- forEach() 메소드 ---`);
Array_2.forEach((item, index) => {
    console.log(`${index}번째 요소: ${item.name}입니다`);
});

console.log("-------");

//JSON 객체 활용
const jsObj = [{
    name: "유인성",
    region: "서울"
}, {
    name: "윤명월",
    region: "도쿄"
}];

const output_1 = JSON.stringify(jsObj);
const output_2 = JSON.stringify(jsObj, null, 2);

console.log(`typeof(output_1): ${typeof(output_1)}`);
console.log(`output_2: ${output_2}`);
console.log(`typeof(output_2): ${typeof(output_2)}`);
console.log(`typeof(jsObj): ${typeof(jsObj)}`);

const output_3 = JSON.parse(output_2);
console.log(`typeof(output_3): ${typeof(output_3)}`);
