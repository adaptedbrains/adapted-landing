import { SET_IS_MOBILE } from "../actions/types";

const INITIAL_STATE = {
  is_mobile: false,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_IS_MOBILE:
      const newState = action.payload !== "web";
      return { ...state, is_mobile: newState };
    default:
      return state;
  }
}
