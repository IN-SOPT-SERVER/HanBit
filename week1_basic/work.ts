// * 파트원을 소개하는 코드 만들기 실습
// 이름, 나이, 지역, 좋아하는 것

// 1. 서버 파트원 2~3명 소개하는 객체 만들기
// or Array<Server>
const members: Server[] = [
    {
        name: '이종현',
        age: 26,
        where: '노원',
        like: '헬스',
        mbti: 'ENFJ',
        study: '알고리즘',
        haveSibling: true,
        willAppJam: false
    },
    {
        name: '한유진',
        age: 24,
        where: '잠실',
        like: '헬스',
        mbti: 'ISFJ',
        study: '알고리즘',
        haveSibling: true,
        willAppJam: true
    },
    {
        name: '장한빛',
        age: 24,
        where: '상봉',
        like: '웹툰',
        mbti: 'ESFP',
        study: '알고리즘',
        haveSibling: true,
        willAppJam: true
    },
    {
        name: '양지영',
        age: 25,
        where: '청량리',
        like: '아이스 아메리카노',
        mbti: 'INFJ',
        study: '사격',
        haveSibling: true,
        willAppJam: true
    }
];


// 2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
interface Server {
    name: string;
    age: number;
    where: string;
    like: string;
    mbti: string;
    study: string;
    haveSibling: boolean;
    willAppJam: boolean;
}

// 3. 모든 파트원 소개 아래와 같이 출력하기!
// map 함수
members.map((member) => console.log(`${member.name}님의 정보입니다.\n 
    나이: ${member.age}살\n 
    거주지: ${member.where}\n
    좋아하는 것: ${member.like}\n 
    MBTI: ${member.mbti}\n 
    참여중인 스터디: ${member.study}\n
    형제자매 유무: ${member.haveSibling}\n 
    앱잼 참여의사 유무: ${member.willAppJam}\n
    -----------------------------\n`
));