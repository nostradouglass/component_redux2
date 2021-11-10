import { ActionType } from "../actionTypes";

interface SearchCommentsAction {
  type: ActionType.SEARCH_COMMENTS;
}

interface SearchCommentsSuccessAction {
  type: ActionType.SEARCH_COMMENTS_SUCCESS;
  payload: [];
}

interface SearchCommentsErrorAction {
  type: ActionType.SEARCH_COMMENTS_ERROR;
  payload: string;
}

export type Actions =
  | SearchCommentsAction
  | SearchCommentsSuccessAction
  | SearchCommentsErrorAction;
