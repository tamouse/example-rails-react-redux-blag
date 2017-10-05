import { combineReducers } from 'redux'
import { RECEIVE_POSTS, REQUEST_POSTS } from './postActions'

const initialState = {
  posts: [],
  isFetching: false,
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {isFetching: true})
    case RECEIVE_POSTS:
      return Object.assign({}, state, {isFetching: false, posts: action.posts})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts
})

export default rootReducer

