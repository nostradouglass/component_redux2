import { ActionType } from "../actionTypes";
import { UserActions } from "../actions";

interface UserState {
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case ActionType.GET_ALL_USERS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_ALL_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.GET_ALL_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};
export default reducer;
