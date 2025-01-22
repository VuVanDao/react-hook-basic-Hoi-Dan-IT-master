import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
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
      return {
        ...state,
        isLoading: false,
        listUser: action.payload,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        isError: true,
      };
    //create user
    case CREATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_USER_FAILED:
      console.log("loi");
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
export default userReducer;
