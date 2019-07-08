import { PLUS, MINUS } from "../constants";

export const increase = () => {
  return {
    type: PLUS
  };
};
export const decrease = () => {
  return {
    type: MINUS
  };
};
