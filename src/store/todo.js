// redux에 필요한 것
// 스토어
// 리듀서, 액션 객체


// 액션 생성 함수
const CHANGE_INPUT = 'CHANGE_INPUT';
const INSERT = "INSERT";
const TOGGLE = "TOGGLE";
const REMOVE = "REMOVE";

const changeInput = () => ({type:CHANGE_INPUT});
const insert = () => ({type:INSERT});
const toggle = () => ({type:TOGGLE});
const remove = () => ({type:REMOVE});

