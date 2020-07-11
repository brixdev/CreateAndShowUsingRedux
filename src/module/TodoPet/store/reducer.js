import * as types from "./actionTypes";

const intialState = {
  pets: [],
};

function reducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_PET:
      const prevState = state.pets || [];
      return {
        ...state,
        pets: [...prevState, payload],
      };
    default:
      return state;
  }
}

export default reducer;
