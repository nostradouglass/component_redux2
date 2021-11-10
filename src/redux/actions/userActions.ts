import { ActionType } from "../actionTypes";

interface GetAllUsers {
  type: ActionType.GET_ALL_USERS;
}

interface GetAllUsersSuccessAction {
  type: ActionType.GET_ALL_USERS_SUCCESS;
  payload: [];
}

interface GetAllUsersErrorAction {
  type: ActionType.GET_ALL_USERS_ERROR;
  payload: string;
}

export type Actions =
  | GetAllUsers
  | GetAllUsersSuccessAction
  | GetAllUsersErrorAction;
