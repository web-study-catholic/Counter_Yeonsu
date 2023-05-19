import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, selectCount, increaseByAmount, decreaseByAmount } from "../modules/Counter";


export function Couner() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  //초깃값 상태 2
  const [increaseAmount, setIncreaseAmount] = useState('2');
  //변수를 숫자로 변환해 incrementValue변수에 할당
  //값이 숫자가 아니면 0
  const incrementValue = Number(increaseAmount) || 0;

  return (
    <>
    <div>
      <button onClick={() => dispatch(decrease())}> - </button>
      <span>{count}</span>
      <button onClick={() => dispatch(increase())}> + </button>
    </div>
    <div>
      <input value={increaseAmount} onChange={(e) => setIncreaseAmount(e.target.value)} />
        <button onClick={() => dispatch(increaseByAmount(incrementValue))}>
          add Amount
        </button>
        <button onClick={() => dispatch(decreaseByAmount(incrementValue))}>
          minus Amount
        </button>
    </div>
    </>
  )
}

export default Couner;