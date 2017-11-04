import React from 'react'
import PropTypes from 'prop-types'
import PostSummaryCard from './PostSummaryCard'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'


class PostsIndex extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.postCount = this.postCount.bind(this)
  }

  postCount() {
    return this.props.posts.length
  }

  render() {
    const {posts} = this.props
    return (
      <Grid fluid={true}>
        <Row>
          <PageHeader>
            Posts <small>There are {this.postCount()} posts</small>
          </PageHeader>
        </Row>
        {posts.map(post => (
          <Row key={post.id}>
            <Col xs={12}>
              <PostSummaryCard post={post}/>
            </Col>
          </Row>
        ))}
      </Grid>
    )
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
}
export default PostsIndex


