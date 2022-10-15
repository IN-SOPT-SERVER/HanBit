const condition: boolean = false; // 비동기에서 실패한 경우로 들어갈 수밖에. 

//* 최초 생성 시점
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("우와 Promise다!");
    } else {
        reject(new Error("비동기 처리 도중 실패!")); // promise 안 로직이 반드시 실패할 경우
    }
});

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
promise
    .then((resolvedData): void => console.log(resolvedData))
    .catch((error): void => console.log(error)); // 실패한 경우 받아내기 (error) - 그 에러를 어떤 이름으로 받을지
