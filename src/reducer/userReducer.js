import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../action/types";
const initState = {
  listUser: [],
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
      };
    case FETCH_USER_SUCCESS:
      state.listUser = action.payload;
      return {
        ...state,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default userReducer;
