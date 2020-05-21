// 액션 객체, 액션 생성 함수
// 리듀서

import { createAction, handleActions } from "redux-actions";
import { fromJS, Map } from "immutable";

// 액션 객체
// create, change, remove, toggle
const CREATE = "todo/CREATE";
const CHANGE = "todo/CHANGE";
const REMOVE = "todo/REMOVE";
const TOGGLE = "todo/TOGGLE";
const SET_COLOR = "todo/SET_COLOR";

// 액션 생성 함수, createActions
export const create = createAction(CREATE); // input, todos, color
export const change = createAction(CHANGE); // e.target
export const remove = createAction(REMOVE); // id
export const toggle = createAction(TOGGLE); // id
export const setColor = createAction(SET_COLOR); // id

// reducer
// 초기 state
const initialState = fromJS({
  input: "",
  colors: [
    { id: 0, text: "black", selected: true },
    { id: 1, text: "red", selected: false },
    { id: 2, text: "green", selected: false },
    { id: 3, text: "blue", selected: false },
  ],
  todos: [
    {
      id: 1,
      text: "리액트 공부하기",
      checked: false,
      color: "black",
    },
    {
      id: 2,
      text: "택배 보내기",
      checked: true,
      color: "red",
    },
    {
      id: 3,
      text: "잘 자기",
      checked: false,
      color: "green",
    },
  ],
});

// reducer 함수
// handleActions 사용
// 내보내서 store에 연결해야함
export default handleActions(
  {
    [CREATE]: (state, action) => {
      const input = state.get("input");
      const todos = state.get("todos");
      const colors = state.get("colors");
      const selectedColor = colors.find(
        (color) => color.get("selected") === true
      );

      return state.set("input", "").set(
        "todos",
        todos.unshift(
          Map({
            id: Date.now(),
            text: input,
            checked: false,
            color: selectedColor.get("text"),
          })
        )
      );
    },
    [CHANGE]: (state, action) => {
      const { value } = action.payload.target;
      return state.set("input", value);
    },
    [REMOVE]: (state, action) => {
      const todos = state.get("todos");
      return state.set(
        "todos",
        todos.filter((todo) => todo.get("id") !== action.payload)
      );
    },
    [TOGGLE]: (state, action) => {
      const todos = state.get("todos");
      const index = todos.findIndex(
        (todo) => todo.get("id") === action.payload
      );
      return state.set(
        "todos",
        todos.update(index, (todo) => todo.set("checked", !todo.get("checked")))
      );
    },
    [SET_COLOR]: (state, action) => {
      const colors = state.get("colors");
      const nextColors = colors.map((color) => {
        if (color.get("id") === action.payload) {
          return color.set("selected", true);
        }
        return color.set("selected", false);
      });
      return state.set("colors", nextColors);
    },
  },
  initialState
);
