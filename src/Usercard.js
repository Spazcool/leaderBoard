import React, { Component } from 'react'
import './App.css'
import { Col, Row, Grid } from 'react-bootstrap'
// import { Grid } from 'react-flexbox-grid'

class Usercard extends Component {
  componentWillMount () {
    console.log('Will here? ', this.props.alltime.length, this.props.recent.length)
  }
  componentDidMount () {
    console.log('Did here? ', this.props.alltime.length, this.props.recent.length)
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
          <Grid fluid className='Usercard' key={item.username} xs={12} sm={6} lg={6}>
            <Row>
              <Col xs={12} id='userTitle'>
                <b>{item.username}</b>
              </Col>
            </Row>
            <Row>
              <Col md={4} className='imgBox'>
                <img src={item.img} width='125em' height='auto' alt='fuckyou' />
              </Col>
              <Col md={4} className='listStats'>
                <ul>
                  <li>Total Points: <b className='numbers'>{item.alltime}</b></li>
                  <li>Monthly Points: <b className='numbers'>{item.recent}</b></li>
                </ul>
              </Col>
              <Col md={4} className='rankBox'>
                <div className='thing' id='tiny'><sup>rank</sup></div>
                <div className='thing'>{index + 1}</div>
              </Col>
            </Row>
          </Grid>
        )
      })
    )
  }
}
export default Usercard
