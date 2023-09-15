## 객체 자료형

1. let number = new Number(273);
2. let string = new String("안녕하세요");
3. let boolean = new Boolean(true);

## 객체 자료형과 기본 자료형

1. 기본 자료형은 객체가 아니기에 속성과 메소드를 추가할 수 없다
-> 프로토타입을 사용하면 가능

let primitiveNumber = 273;

Number.prototype.method = function(){
    return 'Primitive Method';
}

console.log(primitiveNumber.method());

## Number 객체

1. 메소드
    1-1. toExponential(): 숫자를 지수 표시로 나타낸 문자열 리턴
    1-2. toFixed(): 숫자를 고정소수점 표시로 나타낸 문자열 리턴
    1-3. toPrecision(): 숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열 리턴

 2. 속성
    2-1. MAX_VALUE: 자바스크립트의 숫자가 나타낼 수 있는 최대 숫자
    2-2. MIN_VALUE: 자바스크립트의 숫자가 나타낼 수 있는 최소 숫자
    2-3. NaN: 자바스크립트의 숫자로 나타낼 수 없는 숫자
    2-4. POSITIVE_INFINITY: 양의 무한대 숫자
    2-5. NEGATIVER_INFINITY: 음의 무한대 숫자

## String 객체

1. 메소드
    1-1. charAt(position): position에 위치하는 문자 리턴
    1-2. charCodeAt(position): position에 위치하는 문자의 유니코드 번호 리턴
    1-3. concat(args): 매개 변수로 입력한 문자열을 이어 리턴
    1-4. indexOf(searchString, position): 앞에서부터 일치하는 문자열의 위치 리턴
    1-5. lastIndex(searchString, position): 뒤에서부터 일치하는 문자열의 위치 리턴
    1-6. match(regExp): 문자열 안에 regExp가 있는지 확인
    1-7. replace(regExp, replacement): regExp를 replacement로 바꾼 후 리턴
    1-8. search(regExp): regExp와 일치하는 문자열의 위치 리턴
    1-9. slice(start, end): 특정 위치의 문자열 추출해 리턴
    1-10. split(separator, limit): separator로 문자열을 잘라 배열 리턴
    1-11. substr(start, count): start부터 count만큼 문자열을 잘라서 리턴
    1-12. substring(start, end): start부터 end까지 문자열을 잘라서 리턴
    1-13. toLowerCase(): 문자열을 소문자로 바꾸어 리턴
    1-14. toUpperCase(): 문자열을 대문자로 바꾸어 리턴

2. 속성

    2-1. length: 문자열의 길이 리턴

3. 파괴적 메소드: 자신을 호출하는 객체의 내용을 변화시키는 메소드
(비파괴적 메소드: 객체의 내용을 변화시키지 않고 리턴하는 메소드)

## Array 객체

1. 메소드

    1-1. concat(): 매개 변수로 입력한 배열의 요소를 모두 합쳐 만들어 리턴
    1-2. join(): 배열 안의 모든 요소를 문자열로 만들어 리턴
    1-3. pop(): 배열의 마지막 요소를 제거하고 리턴*
    1-4. push(): 배열의 마지막 부분에 새로운 요소 추가*
    1-5. reverse(): 배열의 요소 순서를 뒤집는다*
    1-6. slice(): 배열 요소의 지정한 부분을 리턴
    1-7. sort(): 배열의 요소 정렬*
    1-8. splice(): 배열 요소의 지정한 부분을 삭제하고 삭제한 요소 리턴*
    (*는 자기 자신을 변화(파괴적 메소드))

## JSON 객체

1. JavaScript Object Notation: 자바스크립트 객체를 사용한 데이터 표현 방법
2. 문자열은 큰 따옴표로 만들어야 한다
3. 모든 키는 큰 따옴표로 감싸야 한다
4. 메소드
    4-1. JSON.stringify(객체, 변환_함수, 공백_개수): 자바스크립트 객체를 문자로 만든다
    4-2. JSON.parse(문자열): 문자열을 자바스크립트 객체로 파싱한다
