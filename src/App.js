import React, { Component } from 'react'
import './App.css'
import data from './library/data'
import Usercard from './Usercard'
import Buts from './Buts'

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
