// var를 사용해보자!
var myName = "장행빛";
console.log(`${myName} is wrong name!`);

var myName = "장한빛"; /* var은 재선언도, 재할당도 가능하다 */
myName = "장할빛"; 

console.log(`My name is ${myName}`);

// let을 사용해보자!
let part = "Server";
// let part = "서버서버서버"; /* let은 재할당은 가능하지만, 재선언은 불가능하다 */
part = "왓썹이들";
console.log(`레쓰고 ${part}`);

// const를 사용해보자!
const school = "SOPT";
//const school = "STOP"; /* const는 재선언도, 재할당도 불가하다 */
// school = "STOP";
console.log(`school ${part}`);