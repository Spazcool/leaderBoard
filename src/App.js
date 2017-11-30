import React, { Component } from 'react'
import './App.css'
import './loading.css'
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
        console.log('Alltime Users Loaded.', result.length)
        this.setState({alltime: result})
      }.bind(this))

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function (result) {
        console.log('Recent Users Loaded.', result.length)
        this.setState({recent: result})
      }.bind(this))
      .catch(function () {
        return (
          console.log('Errors')
        )
      })
  }
  handleClick () {
    this.setState({alltimeToggle: !this.state.alltimeToggle})
  }
  render () {
    if (this.state.alltime && this.state.recent) {
      console.log('Rendering Users.')
      return (
        <div className='App'>
          <Buts onClick={this.handleClick.bind(this)} label={this.state.alltimeToggle.toString()} />
          <header className='App-header'>
            <h1>The Top Dogs</h1>
          </header>
          <Usercard alltime={this.state.alltime} recent={this.state.recent} alltimeToggle={this.state.alltimeToggle} />
          <footer className='footer'>
            Built by <a href='http://www.spazcool.com'>Doug Wright</a>.
            <br />
            Loading animation by <a href='http://danielhearn.co.uk/'>Daiel Hearn</a>.
          </footer>
        </div>
      )
    }
    return <div className='loaderContainer'>
      <div className='loader'>
        <div id='largeBox' />
        <div id='smallBox' />
      </div>
    </div>
  }
}

export default App
