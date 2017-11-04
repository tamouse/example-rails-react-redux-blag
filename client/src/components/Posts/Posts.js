import {connect} from 'react-redux'

import PostsIndex from './List/PostsIndex'

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    isFetching: state.posts.isFetching,
  }
}

export default connect(
  mapStateToProps,
)(PostsIndex)

