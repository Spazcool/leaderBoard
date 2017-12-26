import React, { Component } from 'react'
import './App.css'

class Buts extends Component {
  render () {
    return (
      <button
        className='btn toggleButton'
        onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
};

export default Buts
