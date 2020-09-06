import { DEFAULT_ACTION } from './constants';

export const initialState = {
  default: '',
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return action.default;
    default:
      return state;
  }
};

export default screenReducer;
