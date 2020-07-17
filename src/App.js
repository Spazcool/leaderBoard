import React, { Component } from 'react'
import fetch from './fetchData'
import Usercard from './Usercard'
import './App.css'
import './loading.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alltime: null,
    }
  }
  componentDidMount () {
    fetch('https://buttercup-island.glitch.me/latest')
      .then(function (result) {
        this.setState({alltime: result.users})
      }.bind(this))
      .catch(function (err) {
        return (
          console.log('Errors: ', err)
        )
      })
  }

  render () {
    if (this.state.alltime) {
      return (
        <div className='App'>
          <header>
            <div className='homehome'>
              <a href='http://www.spazcool.com/' className='home'>Home</a>
            </div>
            <h1>Recent fCC Forum Posters</h1>
          </header>
          <Usercard alltime={this.state.alltime} />
          <footer>
            Built with <i className="fab fa-react"></i> by <a href='https://github.com/Spazcool'>Doug Wright</a>.
            <br />
            Loading animation by <a href='http://danielhearn.co.uk/'>Daiel Hearn</a>.
          </footer>
        </div>
      )
    }
    return (
      <div className='loaderContainer'>
        <div className='loader'>
          <div id='largeBox' />
          <div id='smallBox' />
        </div>
      </div>
    )
  }
}

export default App
