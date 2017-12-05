import React, { Component } from 'react'
import printMonth from './month'
import './App.css'
import { Col, Row, Grid } from 'react-bootstrap'
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
          <Grid className='user' key={item.username}>
            <Row className='userTitle'>
              <Col xs={10}>
                <a href={'https://www.freecodecamp.org/' + item.username}><h1>{item.username}</h1></a>
              </Col>
              <Col xs={2}>
                <span className='ranking'>{index + 1}</span>
              </Col>
            </Row>
            <Row className='userInfo'>
              <Col xs={6}>
                <center>
                  <a href={'https://www.freecodecamp.org/' + item.username}><img src={item.img} width='50%'height='auto' alt={item.username} /></a>
                </center>
              </Col>
              <Col xs={6}>
                <center>
                  <Col xs={12} className='numbers'>{this.props.alltimeToggle ? item.alltime : item.recent}</Col>
                  <Col xs={12}>{this.props.alltimeToggle ? 'Total' : month}</Col>
                </center>
              </Col>
            </Row>
          </Grid>
        )
      })
    )
  }
}
export default Usercard
