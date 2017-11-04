import React from 'react'
import {PageHeader, Panel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NotFound = () => {

  return (
    <div>
      <PageHeader>
        WOOPS!
      </PageHeader>

      <Panel>
        <h3>You've hit a snag.</h3>
        <p>I don't know what you want.</p>
        <p>Go back <Link to='/'>Home</Link>.</p>
      </Panel>
    </div>
  )
}

export default NotFound
