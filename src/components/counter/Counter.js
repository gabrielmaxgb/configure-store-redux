import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../app/redux/slices/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',

      }}
    >
      <button onClick={() => dispatch(decrementCounter())}>-</button>
      {counter}
      <button onClick={() => dispatch(incrementCounter())}>+</button>
    </div>
  );
}

export default Counter;
