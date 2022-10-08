// promise-chaining-reject.ts

Promise.resolve(true)
  .then((response) => {
    throw new Error("비동기 처리 중 에러 발생!"); // 그냥 Error throw하기 때문에
  })
  .then((response) => {
    console.log(response);
    return Promise.resolve(true);
  })
  .catch((error) => {
    console.log(error.message); // error.message 출력
  });