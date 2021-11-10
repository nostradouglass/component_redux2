

import { combineReducers } from 'redux'
import CommentsReducer from './CommentsReducer'
import UsersReducer from './UsersReducer'

const reducers =combineReducers({
    comments: CommentsReducer,
    users: UsersReducer
})

export default reducers


export type RootState = ReturnType<typeof reducers>