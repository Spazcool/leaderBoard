import React, { Component } from 'react'
import './App.css'
import fetch from './fetchData'
import Usercard from './Usercard'
import Buts from './Buts'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alltimeToggle: true,
      alltime: null,
      recent: null
    }
  }
  componentDidMount () {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(function (result) {
        console.log('Alltime Loaded...', result.length)
        this.setState({alltime: result})
      }.bind(this))

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function (result) {
        console.log('Recent Loaded...', result.length)
        this.setState({recent: result})
      }.bind(this))
      // .catch(function () {
      //   return (
      //     console.log('Errors')
      //   )
      // })
  }
  handleClick () {
    this.setState({alltimeToggle: !this.state.alltimeToggle})
  }
  render () {
    if (this.state.alltime && this.state.recent) {
      console.log('Rendering it')
      return (
        <div className='App'>
          <header className='App-header'>
            <Buts onClick={this.handleClick.bind(this)} label={this.state.alltimeToggle.toString()} />
          </header>
          <Usercard alltime={this.state.alltime} recent={this.state.recent} alltimeToggle={this.state.alltimeToggle} />
          <footer className='footer' />
        </div>
      )
    }
    return <div>Loading...</div>
  }
}

export default App
