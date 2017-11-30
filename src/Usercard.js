import React, { Component } from 'react'
import printMonth from './month'
import './App.css'
import { Col, Row, Grid } from 'react-bootstrap'
const month = printMonth()

class Usercard extends Component {
  componentWillMount () {
    // console.log('Will here? ', this.props.alltime.length, this.props.recent.length)
  }
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
          <Grid fluid className='Usercard' key={item.username} xs={8} sm={10} lg={6}>
            <Row className='userTitle'>
              <Col xs={1} />
              <Col xs={10}>
                <h2>{item.username}</h2>
              </Col>
              <Col xs={1}>
                {index + 1}
              </Col>
            </Row>
            <Row className='imgRank'>
              <Col xs={6}>
                <img src={item.img} width='70%'height='auto' alt={item.username} />
              </Col>
              <Col xs={6} className='numbers'>
                {item.alltime} / Total
                <br />
                {item.recent} / {month}
              </Col>
            </Row>
          </Grid>
        )
      })
    )
  }
}
export default Usercard
