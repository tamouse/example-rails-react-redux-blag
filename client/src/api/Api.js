const API_ROOT = '/api/v1/posts'

export default class Api {

  static getAllPosts() {
    return Api._fetchActual('/', 'GET', null)
      .then(data => data.posts)
  }

  static getOnePost(id) {
    return Api._fetchActual(`/${id}`, "GET", null)
      .then(data => data.post)
  }

  static createPost(data) {
    return Api._fetchActual('/', 'POST', JSON.stringify(data))
      .then(data => data.post)
  }

  static updatePost(id, data) {
    return Api._fetchActual(`/${id}`, 'PUT', JSON.stringify(data))
      .then(data => data.post)
  }

  static deletePost(id) {
    return Api._fetchActual(`/${id}`, "DELETE", null)
  }

  static _fetchActual(url, method, body) {
    let headers = Object.assign({}, this.requestHeaders, {
      "Accepts": "application/json",
      "Content-type": "application/json"
    })
    let options = {method, headers, body}
    let real_url = API_ROOT + url
    return fetch(real_url, options )
      .then(res => res.json())
      .catch(err => {
        console.log(err)
        return err
      })
  }
}
