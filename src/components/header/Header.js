import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomUser } from '../../app/redux/slices/authSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);

  return (
    <div
      style={{
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <button onClick={() => dispatch(fetchRandomUser())}>
        get user data
      </button>
      <div>
        Header
      </div>
    </div>
  )
}

export default Header;
