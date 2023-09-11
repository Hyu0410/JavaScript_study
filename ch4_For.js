//for 반복문
for(let i = 0 ; i < 5 ; i++){
    console.log(`i: ${i}`);
}

console.log("------");
//배열
console.log("배열"); // let 이름 = [자료, 자료, 자료...]
let array = [52, 273, "아침밥", "점심밥", true, false];
for(let i = 0 ; i < 6 ; i++){
    console.log(array[i]);
}
console.log(`array.length: ${array.length}`);

console.log("--------");

//while 반복문
console.log("while 반복문");

let i = 0;
let array2 = [52, 273, 32, 65, 103];

while(i < array2.length){
    console.log(array2[i]);
    i++;
}

console.log("-------");

//for in, for of 반복문
console.log("for in, for of 반복문");
let array3 = ["사과", "배", "포도", "딸기", "바나나"];

/*for in 반복문
    for(let 인덱스 in 배열){

    }
*/
for(let i in array3){
    console.log(`${i}번째 요소: ${array3[i]}`);
}

/*for of 반복문
    for(let 요소 of 배열){

    }
*/
for(let item of array3){
    console.log(item);
}

console.log("-------");
//중첩 반복문
/*let result = '*';
for(let i = 0 ; i < 10 ; i++){
    for(let j = 0 ; j < i ; j++){
        result += '*';
    }
    console.log(result + '\n');
}
*/
let output = '';

for(let i = 0 ; i < 10 ; i++){
    for(let j = 0 ; j < i + 1 ; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output); //p.144

console.log("-----------");

let count = "";
for(let i = 0 ; i < 10 ; i++){
    for(let j = 0 ; j <= i ; j++){
        count += "*";
    }
    console.log(count);
    count = "";
}

console.log("-----------");

let count_2 = "";
for(let i = 0 ; i < 10 ; i++){
    for(let j = 0 ; j < 10 - i ; j++){
        count_2 += " ";
    }
    for(let j = 0 ; j < i + 1 ; j++){
        count_2 += "*";
    }
    console.log(count_2);
    count_2 = "";
}

//짝수 찾으면 break로 반복문 벗어남
console.log("짝수 찾으면 break로 루프 벗어남");

i = 0;
let Array = [1, 31, 273, 57, 8, 11, 32];

while(true){
    if(Array[i] % 2 == 0){
        console.log(`처음 발견한 짝수: ${Array[i]}`);
        break;
    }
    i++;
}

//continue: 현재 반복 멈추고 다음 반복 진행
console.log("continue");
Array_2 = [];
for(let i = 0 ; i < 10 ; i++){
    Array_2[i] = i + 1;
}
for(let i = 0 ; i < 10 ; i++){
    if(Array_2[i] % 2 == 0){
        continue;
    }
    console.log(Array_2[i]);
}

