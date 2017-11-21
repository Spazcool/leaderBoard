import React, { Component } from 'react'
import './App.css'

var buttonStyle = {
  margin: '10px 10px 10px 0',
  height: '100px',
  width: '50px'
}

class Buts extends Component {
  render () {
    return (
      <button
        className='btn btn-default'
        style={buttonStyle}
        onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
};

export default Buts
