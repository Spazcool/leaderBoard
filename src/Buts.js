import React, { Component } from 'react';
import './App.css';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class Buts extends Component {
  render() {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>
          {this.props.label}
      </button>
    );
  }
};

export default Buts;
