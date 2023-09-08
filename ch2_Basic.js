//따옴표 앞에 \를 붙이면 따옴표 문자 그대로 사용 가능
console.log("This is \"String\"");

// 문자 선택
console.log("안녕하세요"[0]);
console.log("안녕하세요"[1]);
console.log("안녕하세요"[3]);

// 템플릿 문자열(`)
// 일반 문자열과 똑같이 취급. ${표현식}: 표현식이 계산되어 문자열에 들어감
console.log(`52 + 273 = ${52 + 273}`);

console.log("-------------");

//강제자료형 변환 함수
console.log(String(52));
console.log(String(true)); //문자열로 변환

console.log(Number("52")); //숫자로 변환
console.log(Number(true));
console.log(Number("안녕하세요")); //NaN(Not a Number): 숫자로 변환할 수 없는 문자열

let nan = Number("안녕하세요");
console.log(nan == nan); //NaN은 어떤 값과 비교해도 무조건 다르다
console.log(nan != nan);
console.log(isNaN(nan)); //isNaN(): NaN인지 확인하는 함수

let undef_var;
console.log(`Boolean(0): ` + Boolean(0)); 
console.log(`Boolean(nan): ` + Boolean(nan));
console.log(`Boolean(""): ` + Boolean(""));
console.log(`Boolean(null): ` + Boolean(null));
console.log(`Boolean(undefined): ` + Boolean(undefined)); //0, nan, "", null, undefined 만 false

console.log("----------");

console.log("숫자와 문자열 자료형 변환");
console.log(`52 + 273: ${52 + 273}`);
console.log(`"52" + 273: ` + ("52" + 273)); //52273 //문자열 + 숫자: 숫자가 문자열로 변환한 뒤에 연결
console.log(`"52" - 273: ${"52" - 273}`); //덧셈 이외의 연산자: 문자열이 숫자로 변환한 뒤 숫자 연산
