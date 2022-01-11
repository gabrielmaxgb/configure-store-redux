const INITIAL_STATE = {};

export const dummyReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch(type) {
    default:
      return state;
  }
}