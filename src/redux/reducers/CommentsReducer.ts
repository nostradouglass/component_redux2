import { ActionType } from "../actionTypes";
import { CommentActions } from "../actions";

interface CommentState {
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
  state: CommentState = initialState,
  action: CommentActions
): CommentState => {
  switch (action.type) {
    case ActionType.SEARCH_COMMENTS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_COMMENTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_COMMENTS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer
