import axios from "axios";
import { ActionType } from "../actionTypes";

export const searchComments = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_COMMENTS,
    });

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${term}`
      );

      dispatch({
        type: ActionType.SEARCH_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_COMMENTS_ERROR,
        payload: err,
      });
    }
  };
};