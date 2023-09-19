//type error 기본 예외 처리
function callThreeTimes(callback){
    for(let i = 0 ; i < 3 ; i++){
        callback();
    }
}

callThreeTimes(function(){
    console.log(`안녕하세요`);
});

//if문으로 함수일 때만 실행
function callFiveTimes(callback){
    if(typeof(callback) == "function"){
        for(let i = 0 ; i < 5 ; i++){
            callback();
        }
    }
    else{
        console.log(`파라미터가 함수가 아닙니다`);
    }
}

callFiveTimes(function(){
    console.log(`우웅`);
})

callFiveTimes();

console.log("----------");

//try catch finally
//예외 구문 const Array_1 = new Array(-2000);
try{
    const Array_1 = new Array(-2000);
} catch(exception){
    console.log(`${exception.name} 예외가 발생했습니다`);
} finally{
    console.log(`finally 구문 실행`);
}
