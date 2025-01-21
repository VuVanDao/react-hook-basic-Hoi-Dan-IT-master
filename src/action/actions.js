import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "./types";
import axios from "axios";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};
export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
export const fetchUserStart = () => {
  return {
    type: FETCH_USER_START,
  };
};
export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};
export const fetchUserFailed = () => {
  return {
    type: FETCH_USER_FAILED,
  };
};
export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserStart());
    try {
      let res = await axios.get("http://localhost:8080/users/all");
      let data = res && res.data ? res.data : [];
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailed());
    }
  };
};
