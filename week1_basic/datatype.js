// String
console.log(`${myName} 입니다.`)

Boolean

// Symbol
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1); // true
console.log(sym1 === sym2); // false
console.log(sym3 === sym4); // false

// object
const user = {
    email: "ghiesf@naver.com",
    name: "장한빛",
    favorite: ["덮밥", "된장찌개"],
    introduce: function() {
        this.favorite.forEach((food) => {
            console.log(`${food} 맛 있 어`);
        });
    },
};

user.introduce()

// Array
const arr1 = ["장한빛", "덮밥", 24, true];
const arr2 = Array(1, null, "우와!", false, { sopt: "Server" });
arr1.map((item) => console.log("item1 :", item));
arr2.map((item) => console.log("item2 :", item));


// 인자 1개인 경우 괄호 생략 가능, 
// 로직이 한 줄인 경우에 return문 생략 가능
const add = (a, b) => a + b;
const hello = name => console.log(`${name}, hello!`)
const info = (name, age) => ({name, age})

function hello(name) {
    console.log(`안녕 ${name}`);
}

const sum = (num1, num2) => {
    const result = num1 + num2;
    console.log(result)
}