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
              <a href={'https://www.freecodecamp.org/' + item.username}>{item.username}</a>
              <span className='ranking'>{index + 1}</span>
            </div>
            <div className='userInfo'>
              <div>
                <center>
                  <a href={'https://www.freecodecamp.org/' + item.username}><img src={item.img} width='50%' height='auto' alt={item.username} /></a>
                </center>
              </div>
              <div>
                <center>
                  <div className='numbers'>{this.props.alltimeToggle ? item.alltime : item.recent}</div>
                  <div>{this.props.alltimeToggle ? 'Total' : month}</div>
                </center>
              </div>
            </div>
          </div>
        )
      })
    )
  }
}
export default Usercard
