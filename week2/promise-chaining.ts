const me = (callback: () => void, time: number) => { // callback, time을 인자로 받음
    setTimeout(callback, time); // callback함수를 몇 초 대기 후 수행할 ㄱ것인지
};

const wakeUp = (): Promise<string> => {
    return new Promise((resolve, reject) => { 
        me(() => {
            console.log("[현재] 일어남");
            resolve("일어남");
        }, 1000);
    });
};

const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 화장실로 이동함");
            resolve(`${now} -> 화장실로 이동함`);
        }, 1000);
    });
};

const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 칫솔과 치약을 준비함");
        resolve(`${now} -> 칫솔과 치약을 준비함`);
      }, 1000);
    });
  };
  
const startChikaChika = (now: string): Promise<string> => {
return new Promise((resolve, reject) => {
    me(() => {
    console.log("[현재] 양치함");
    resolve(`${now} -> 양치함`);
    }, 1000);
});
};
  
//* 나 자신에게 칭찬함
const goodJob = (now: string): Promise<string> => {
return new Promise((resolve, reject) => {
    me(() => {
    console.log("[현재] 나 자신에게 칭찬중");
    resolve(`${now} -> 칭찬중`);
    }, 1000);
});
};

// promise 객체 가진 5개 함수들을 then으로 chaining. now라는 이름으로 받아주고, 각 함수로 다시 보내주기
// resolve된 데이터들이 then을 통해 계속 전달되어 처리됨?
wakeUp()
    .then((now) => goBathRoom(now))
    .then((now) => ready(now))
    .then((now) => startChikaChika(now))
    .then((now) => goodJob(now))
    .then((now) => console.log(`\n${now}`));




