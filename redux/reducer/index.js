import { useSelector } from "react-redux";
import {
  ADD_AGE,
  ADD_GENDER,
  ADD_NAME,
  UPDATE_ALL,
  UPDATE_ALERT,
} from "../action/actionTypes";

const initialState = {
  name: "No name",
  age: 0,
  gender: "No gender",
  alert: false,
};

const userIdentityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case ADD_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case UPDATE_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case UPDATE_ALL:
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        gender: action.payload.gender,
        alert: action.payload.alert,
      };
    default:
      return state;
  }
};

export const useGetAllData = () => {
  return useSelector(({ userIdentity }) => userIdentity);
};

export const useGetName = () => {
  return useSelector(({ userIdentity }) => userIdentity.name);
};

export const useGetAge = () => {
  return useSelector(({ userIdentity }) => userIdentity.age);
};

export const useGetGender = () => {
  return useSelector(({ userIdentity }) => userIdentity.gender);
};

export const useGetAlert = () => {
  return useSelector(({ userIdentity }) => userIdentity.alert);
};

export default userIdentityReducer;
