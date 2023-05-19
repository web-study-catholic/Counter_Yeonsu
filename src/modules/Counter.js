import { createSlice } from "@reduxjs/toolkit";

//reducer 관리 초기상태
const initialState = {
  number : 0
};

//reducer : export default로 내보내기
//state는 항상 위에 선언한 초기값으로 함

export const counterSlice = createSlice({
  name : 'counter',
  initialState,
  reducers:{
    increase: (state) => {
      state.number += 1;
    },
    decrease: (state) => {
      state.number -= 1;
    },
    increaseByAmount : (state, action) => {
      state.number += action.payload;
    },
    decreaseByAmount : (state, action) => {
      state.number -= action.payload;
    },
  },
})

export const selectCount = (state) => state.counter.number;

export const {increase, decrease, increaseByAmount, decreaseByAmount} = counterSlice.actions;
export default counterSlice.reducer;