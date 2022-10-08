// 통신하는 코드를 짜보는 셈 치셈..
const http = require("http") // http 모듈 데려옴

const port = 3000;

http
    .createServer((req, res) => {
        res.write("<h1>IN SOPT SERVER!</h1>");
        res.end("<p>awesome</p>");
    })
    .listen(port, () => {
        console.log(`${port} 번 포트에서 대기중!`);
    });