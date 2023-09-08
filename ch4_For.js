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

