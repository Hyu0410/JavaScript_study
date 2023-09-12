//객체 선언
let product = {
    제품명: "7D 건조 망고",
    유형: "당절임",
    성분: "망고, 설탕, 메타중아황산나트륨, 치자황색소",
    원산지: "필리핀"
}
console.log(product);
console.log(product["성분"]);

console.log("--------");

let obj_1 = {
    name: "바나나",
    price: 1200
}
console.log(`obj_1의 이름은 ${obj_1["name"]}, 가격은 ${obj_1.price}입니다`);

//객체와 반복문
let obj_2 = {
    name: "딸기",
    price: 1500
}
for(let key in obj_2){
    console.log(`${key}: ${obj_2[key]}`);
}

console.log("---------");

let obj_3 = {
    name: "짱구",
    age: 5,
    gender: "man",
    kidding: function(){
        console.log(`${this.age}살짜리 짱구는 못말려!`);
    }
}
obj_3.kidding(); //obj_3[kidding()]은 X.

console.log("-------");

//배열과 객체
let Obj_1 = [
    {name: "바나나",
    price: 1200,
    function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다`);
    }},
    {name: "사과",
    price: 2000,
    function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다`);
    }},
    {name: "배",
    price: 3000,
    function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다`);
    }},
    {name: "고구마",
    price: 700,
    function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다`);
    }},
    {name: "감자",
    price: 600,
    function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다`);
    }}, 
    {name: "수박",
    price: 5000,
    function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다`);
    }}
]

function printObj(Obj_1) {
    console.log(`${Obj_1.name}의 가격은 ${Obj_1.price}원 입니다`);
}

for(let i = 0 ; i < 6 ; i++){
    printObj(Obj_1[i]);
}

console.log("---------");

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    print(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다`);
    }
}

let product_2 = [
    new Product("바나나", 1200),
    new Product("사과", 2000),
    new Product("배", 3000)
]

for(let i = 0 ; i < 3 ; i++){
    product_2[i].print();
}
