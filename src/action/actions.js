import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
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
export const createUserStart = () => {
  return {
    type: CREATE_USER_START,
  };
};
export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};
export const createUserFailed = () => {
  return {
    type: CREATE_USER_FAILED,
  };
};
export const createNewUser = (user) => {
  return async (dispatch, getState) => {
    dispatch(createUserStart());
    try {
      let res = await axios.post("http://localhost:8080/users/create", user);
      if (res && res.data && res.data.errCode === 0) {
        dispatch(createUserSuccess());
        dispatch(fetchAllUser());
      } else {
        dispatch(createUserFailed());
      }
    } catch (error) {
      dispatch(createUserFailed());
    }
  };
};
export const deleteUserStart = () => {
  return {
    type: DELETE_USER_START,
  };
};
export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};
export const deleteUserFailed = () => {
  return {
    type: DELETE_USER_FAILED,
  };
};
export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch(deleteUserStart());
    try {
      let res = await axios.post(
        `http://localhost:8080/users/delete/${userId}`
      );
      if (res && res.data && res.data.errCode === 0) {
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUser());
      } else {
        dispatch(deleteUserFailed());
      }
    } catch (error) {
      dispatch(deleteUserFailed());
    }
  };
};
