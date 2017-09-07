class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static xhr(route, params, verb) {
    const host = 'http://localhost:5000/'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()

    let response = fetch(url,options)
    let payload = response.then((resp) => {
      return resp.json()
    })

    // Return both the payload as well the status code and ok-value
    return Promise.all([payload, response]).then(([payload, response]) => {
      let aggregate = payload
      aggregate.ok = response.ok
      aggregate.status = response.status
      return aggregate
    })
  }

  static delete(uri) {
    let options = { method: 'DELETE' }
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
