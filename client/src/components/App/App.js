import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import Posts from '../Posts/Posts'
import NewPost from '../Posts/NewPost/NewPost'
import NotFound from '../NotFound'

import './App.css';

import reducers from '../../stores/rootReducer'
import {loadPosts} from "../../stores/postActions";

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
            <Switch>
              <Route exact path="/" component={Posts}/>
              <Route exact path="/new" component={NewPost}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
