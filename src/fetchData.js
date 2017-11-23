// fcctop100.herokuapp.com/api/fccusers/top/recent
const data = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status)
        return
      }
      response.json().then(function (data) {
        console.log(data)
        return data
      })
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err)
  })

export default data
