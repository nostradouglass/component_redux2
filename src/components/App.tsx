import React from 'react';
import {Provider} from 'react-redux' 
import {store} from '../redux/store'
import CommentsList from './CommentsList';
import UsersList from './UsersList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h3>2</h3>
      <CommentsList />
      <br />
    <UsersList />
    </div>
    </Provider>
  );
}

export default App;
