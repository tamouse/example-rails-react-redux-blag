import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import Posts from './Posts'

import './App.css';

import reducers from './rootReducer'
import {loadPosts} from "./postActions";

// let logger = createLogger()

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
            <Route exact path="/" component={Posts}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
