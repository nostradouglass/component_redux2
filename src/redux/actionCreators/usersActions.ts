import axios from "axios";
import { ActionType } from "../actionTypes";

export const getAllUsers = () => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.GET_ALL_USERS,
    });

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      dispatch({
        type: ActionType.GET_ALL_USERS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_ALL_USERS_ERROR,
        payload: err,
      });
    }
  };
};
