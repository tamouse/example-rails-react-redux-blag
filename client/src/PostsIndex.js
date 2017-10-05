import React from 'react'

class PostsIndex extends React.Component {
  render() {

    const PostSummaryCard = props => {
      return (
        <div className="post-summary-card">
          <h3>
            {props.post.title}
          </h3>
          <p>
            {props.post.body.substr(0, 20) + "..."}
          </p>
        </div>
      )
    }

    return (
      <div className="posts-index">
        <h2>Posts</h2>
        <p>There are {this.props.posts.length} posts</p>
        {this.props.posts.map(post => {
          return (<PostSummaryCard key={`post-${post.id}`} post={post}/>)
        })}
      </div>
    )
  }
}

export default PostsIndex


