import { PLUS, MINUS } from "../constants";

const initialState = {
  count: 0
};

const counter = (state = initialState.count, action) => {
  switch (action.type) {
    case PLUS:
      return PLUS ? state + 1 : state;
    case MINUS:
      return MINUS ? state - 1 : state;

    default:
      return state;
  }
};
export default counter;
