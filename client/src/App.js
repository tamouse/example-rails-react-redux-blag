import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import thunk from 'redux-thunk'
import Posts from './Posts'
import NewPost from './NewPost'

import './App.css';

import reducers from './rootReducer'
import {loadPosts} from "./postActions";

let store = createStore(
  reducers,
  applyMiddleware(thunk)
  )

store.dispatch(loadPosts())

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/new">New Post</Link>

            <Route exact path="/" component={Posts}/>
            <Route exact path="/new" component={NewPost}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
