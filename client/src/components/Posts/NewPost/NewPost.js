import {connect} from 'react-redux'

import NewPostForm from './NewPostForm'
import {createPost} from "../../../stores/postActions";

const mapDispatchToProps = dispatch => {
  return {
    submitForm: data => {
      dispatch(createPost(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewPostForm)

