export default class Api {
  static getAllPosts() {
    let headers = Object.assign({}, this.requestHeaders, {"Accepts": "application/json"})
    return fetch("/posts.json", {
      method: "GET",
      headers: headers,
    })
      .then(res => res.json())
      .then(data => data.posts)
      .catch(err => {
        console.error(err)
        return err
      })
  }

  static createPost(data) {
    let headers = Object.assign({}, this.requestHeaders, {
      "Accepts": "application/json",
      "Content-type": "application/json"
    })
    return fetch("/posts.json", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => data.post)
      .catch(err => {
        console.error(err)
        return err
      })

  }
}
