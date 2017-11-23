import React, { Component } from 'react'
import './App.css'
// import data from './library/data'
import data from './fetchData'
import Usercard from './Usercard'
import Buts from './Buts'

// fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
//   .then(
//     function (response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status)
//         return
//       }
//       response.json().then(function (data) {
//         console.log(data)
//         return data
//       })
//     }
//   )
//   .catch(function (err) {
//     console.log('Fetch Error :-S', err)
//   })
//
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonBool: true
    }
  }
  handleClick () {
    this.setState({buttonBool: !this.state.buttonBool})
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <Buts onClick={this.handleClick.bind(this)} label={this.state.buttonBool.toString()} />
        </header>
        <Usercard data={data} buttonVal={this.state.buttonBool} />
        <footer className='footer' />
      </div>
    )
  }
}

export default App
