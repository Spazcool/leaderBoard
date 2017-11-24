function fetch (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.onload = function () {
      resolve(this.response)
    }
    xhr.onerror = reject
    xhr.open('GET', url)
    xhr.send()
  })
}

export default fetch
