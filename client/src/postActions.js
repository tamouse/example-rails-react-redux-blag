import Api from './Api'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = () => {
  return {type: REQUEST_POSTS}
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = (json) => {
  return {
    type: RECEIVE_POSTS,
    posts: json,
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
