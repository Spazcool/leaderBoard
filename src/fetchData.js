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

// fcctop100.herokuapp.com/api/fccusers/top/recent
// let obj
//
// fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
//   .then((response) => response.json())
//   .then(data => obj = data)
//   .then(console.log)
//   .then(() => console.log(obj))
//   .catch(function (error) {
//     console.log(error)
//   })
// export default Data

// fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
//   .then(function (result) {
//     return (
//       console.log('fuck me:', result)
//     )
//   })
//   .catch(function () {
//     return (
//       console.log('still fucked')
//     )
//   })
