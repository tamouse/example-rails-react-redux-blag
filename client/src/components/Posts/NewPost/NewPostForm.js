import React from 'react'
import './NewPostForm.css'

class NewPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let data = {
      post: {
        title: this.state.title,
        body: this.state.body,
      }
    }

    this.props.submitForm(data)

    this.setState({
      title: '',
      body: ''
    })

    window.location.href="/"
  }

  render () {
    return(
      <div className="new-post-form-wrapper">
        <h3>Create a new post</h3>
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <div><label htmlFor="title">Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/></label></div>
          <div><label htmlFor="body">Content:</label></div>
          <div><textarea name="body" id="body" cols="30" rows="10" value={this.state.body} onChange={this.handleChange}></textarea></div>
          <div><input type="submit" name="confirm" value="Create Post"/></div>
        </form>
      </div>
    )

  }
}

export default NewPostForm
