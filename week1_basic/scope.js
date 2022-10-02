if (true) {
    var x = "var";
}
console.log("x: ", x); // Function scope

if (true) {
    let y = "let";
}
// console.log("y: ", y); // Block scope - ReferenceError

//* var가 function scope를 벗어났을 때!
function func() {
    if (true) {
        var test = "var";
        console.log("test: ", test);
    }
    console.log("test: ", test);
}
func();
console.log("test: ", test); // ReferenceError: test is not defined

//* 호이스팅
// 변수를 먼저 사용하고 그 후에 선언 및 초기화 
console.log(num); // 호이스팅한 var 선언으로 인해 undefined 출력
var num; // 선언
num = 6; // 초기화

// 선언 없이 초기화만 존재 - 호이스팅 없음
console.log(num); // ReferenceError
num = 6; // 초기화