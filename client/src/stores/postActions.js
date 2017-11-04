import Api from '../api/Api'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = () => {
  return {type: REQUEST_POSTS}
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export const ADD_POST = 'ADD_POST'
export const addPost = data => {
  return {
    type: ADD_POST,
    data
  }
}

export const loadPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    return Api.getAllPosts()
      .then(posts => {
        dispatch(receivePosts(posts))
      })
      .catch(err => {
        console.error(err)
        throw(err)
      })
  }
}

export const createPost = (data) => {
  return (dispatch) => {
    dispatch(addPost(data))
    return Api.createPost(data)
      .then(post => {
        console.log("Created: ", post)
        dispatch(loadPosts())
      })
  }
}
