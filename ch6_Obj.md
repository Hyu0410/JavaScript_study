## 객체

1. 배열의 요소 접근하기 위해: 인덱스 사용
2. 객체: 키 사용
3. let product = {
    제품명: "7D 건조 망고",
    ...
}

product["제품명"] //7D 건조 망고
product.제품명 //7D 건조 망고

## 메소드

1. 객체의 속성 중 자료형이 함수인 속성

## 인스턴스(instance)

1. 클래스를 기반으로 만들어지는 객체

class Product {

}
let product = new Product();

## 생성자(constructor)

1. 클래스 내부에 함수(메소드)를 만들 때는 function 키워드를 따로 붙이지 않는다

class Product{
    constructor(name, price){

    }
}
let product = new Product("바나나", 1200);
