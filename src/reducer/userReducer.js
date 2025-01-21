import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../action/types";
const initState = {
  listUser: [],
  isLoading: false,
  isError: false,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      state.listUser = action.payload;
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
export default userReducer;
