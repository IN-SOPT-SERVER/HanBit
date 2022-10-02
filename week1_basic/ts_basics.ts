// 기본적인 문법 표현
const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`) // boolean, true

const str: string = 'hello'
console.log(`${typeof str}, ${str}`) // string, hello

let num: number = 31
console.log(`${typeof num}, ${num}`) // number, 31

// const sum: number = 'sum number' // !Type 'string' is not assignable to type 'number

// 배열 타입 표현
let numbers: number[] = [1, 2, 3];

const srings: Array<String> = ['hi', 'hello'];

const objArray1: Object[] = [
    { item1: 'oh' },
    { item2: 'wow' }
]

const objArray2: object[] = [
    { item1: 'oh' },
    { item2: 'wow' }
]

// 함수 타입 표현
const fun = (name: string): void => console.log(`hello, ${name}!`)

const sum1 = (a: number, b: number): number => a + b;

const sum2 = (a: number, b: number): number => {
    return a + b;
}

// null, undefined
const a: null = null;

let oops: null = 2; // Type '2' is not assignable to type 'null'.

let b: undefined = undefined;

let c: undefined = null; // Type 'null' is not assignable to type 'undefined'.

// 타입 단언
//* angle-bracket
let str: any = "장한빛";
let strLength: number = (<string>str).length;
console.log(`${typeof strLength}, ${strLength}`); // number, 3

//* as
let str2: any = "김민니";
let str2Length: number = (str2 as string).length;
console.log(`${typeof str2Length}, ${str2Length}`); // number, 3

// anyscript
const profile: any = {
    name: "장한빛",
    age: 24,
    isSOPT: true,
};

// interface
interface SOPT{
    name: string;
    age: number;
    isSOPT: boolean;
}

const info: SOPT = {
    name: "김민니",
    age: 26,
    isSOPT: false,
    // degree: null, // Object literal may only specify known properties, 
                     // and 'degree' does not exist in type 'SOPT'.
}

// 배열 타입 표현에도 interface 적용해보기
const infos: SOPT[] = [
    {
        name: "김민니",
        age: 26,
        isSOPT: false,
    },
    {
        name: "송우기",
        age: 24,
        isSOPT: false,
    },
    {
        name: "조미연",
        age: 26,
        isSOPT: false,
    },
];

// 선택적 프로퍼티
interface member {
    name: string;
    age: number;
    nationality?: string;
};

const info2: member = {
    name: "김민니",
    age: 26, // nationality가 없어도 에러 나지 않음
};