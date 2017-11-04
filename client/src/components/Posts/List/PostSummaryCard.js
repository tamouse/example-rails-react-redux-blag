import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Panel, ButtonToolbar, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const EXCERPT_LENGTH = 100

const PostSummaryCard = props => {
  const {post: {id, title, body, created_at: date}} = props
  const formattedDate = moment(date).format("lll")
  const excerpt = body.length > EXCERPT_LENGTH ?
    body.substr(0, 20) + '...' :
    body
  const panelHeader = (<h3>{title} <small>{formattedDate}</small></h3>)
  const panelFooter = (
    <ButtonToolbar>
      <LinkContainer to={`/${id}`}>
        <Button bsStyle='primary'>View</Button>
      </LinkContainer>
      <LinkContainer to={`/${id}/edit`}>
        <Button bsStyle='success'>Edit</Button>
      </LinkContainer>
      <LinkContainer to={`/${id}/delete`}>
        <Button bsStyle='danger'>Delete</Button>
      </LinkContainer>
    </ButtonToolbar>
  )
  return (
    <Panel header={panelHeader} footer={panelFooter}>
      {excerpt}
    </Panel>
  )
}

PostSummaryCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostSummaryCard
