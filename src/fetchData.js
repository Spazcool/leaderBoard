// fcctop100.herokuapp.com/api/fccusers/top/recent
let data
return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
.then((response) => response.json())
.then(list => data = list)
.then(console.log)
// .then(() => console.log(data))
.catch(function(error) {
  console.log(error)
})
export default data
