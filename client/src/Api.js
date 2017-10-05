
export default class Api {
  static getAllPosts() {
    let headers = Object.assign({}, this.requestHeaders, {"Accepts": "application/json"})
    return fetch("/posts.json", {
      method: "GET",
      headers: headers,
    })
        .then(res => res.json())
        .catch(err => {
          console.error(err)
          return err
        })
  }
}
