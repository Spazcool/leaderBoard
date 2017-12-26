import React, { Component } from 'react'
import printMonth from './month'
import './App.css'
// import { Col, Row, Grid } from 'react-bootstrap'
const month = printMonth()

class Usercard extends Component {
  componentDidMount () {
    console.log('Mounted: ', this.props.alltime.length, this.props.recent.length)
  }
  render () {
    let sortAll = this.props.alltime
    if (this.props.alltimeToggle) {
      sortAll.sort((a, b) => parseFloat(b.alltime) - parseFloat(a.alltime))
    } else {
      sortAll = this.props.recent.sort((a, b) => parseFloat(b.recent) - parseFloat(a.recent))
    }
    return (
      sortAll.map((item, index) => {
        return (
          <div className='user' key={item.username}>
            <div className='userTitle'>
              <a href={'https://www.freecodecamp.org/' + item.username}>
                {item.username}
              </a>
              <div className='ranking'>{index + 1}</div>
            </div>
            <div className='userInfo'>
              <a href={'https://www.freecodecamp.org/' + item.username}>
                <img src={item.img} alt={item.username} />
              </a>
              <div className='numbers'>
                <div style={{fontWeight: 'bold'}}>{this.props.alltimeToggle ? item.alltime : item.recent}</div>
                <div style={{fontSize: 0.5 + 'em'}}>{this.props.alltimeToggle ? 'Total' : month}</div>
              </div>
            </div>
          </div>
        )
      })
    )
  }
}
export default Usercard
