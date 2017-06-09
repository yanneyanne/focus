class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    const host = 'http://localhost:5000/'
    const url = `${host}${route}`
    let options = { method: 'GET' }
    options.headers = Api.headers()

    return fetch(url,options).then((response) => {
      let json = response.json()
      if(response.ok) {
        return json
      }
      return json.then(err => {throw err})
    })
    return this.xhr(route, null, 'GET')
  }

  //static put(uri) {
  //  return this.xhr(uri, 'PUT')
  //}

  static post(uri) {
    return this.xhr(uri, 'POST')
  }

  static delete(uri) {
    return this.xhr(uri, 'DELETE')
  }

  static xhr(uri, verb) {
    let options = { method: verb }
    options.headers = Api.headers()

    return fetch(uri, options).then((response) => {
      let json = response.json()
      if(response.ok) {
        return json
      }
      return json.then(err => {throw err})
    })
  }
}

export default Api
