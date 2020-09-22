const request = {
  register: ((URL, data) => {
    return new Promise((resolve, reject) => {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error))
    })
  }),

  get: ((URL) => {
    return new Promise((resolve, reject) => {
      fetch(URL)
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    })
  }),

  put: ((URL, data) => {
    return new Promise((resolve, reject) => {
      fetch(URL, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error))
    })
  }),

  delete: ((URL, data) => {
    return new Promise((resolve, reject) => {
      fetch(URL, {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error))
    })
  })
}

export default request