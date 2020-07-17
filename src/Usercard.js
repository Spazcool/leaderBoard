import React, { Component } from 'react'
import './App.css'

class Usercard extends Component {
  componentDidMount () {}
  render () {
    let sortAll = this.props.alltime.sort((a, b) => parseFloat(b.alltime) - parseFloat(a.alltime))

    return (
      sortAll.map((item, index) => {
        item.avatar_template = item.avatar_template.replace(/{size}/, '90')
        const regex = RegExp('https://');
        let source;
        if(regex.test(item.avatar_template)) {
          source = item.avatar_template;
        } else {
          source = "https://sjc1.discourse-cdn.com/freecodecamp/" + item.avatar_template;
        }

        return (
          <div className='user' key={item.username}>
            <div className='userTitle'>
              <a href={'https://forum.freecodecamp.org/u/' + item.username}>
                {item.username}
              </a>
              <div className='ranking align-bottom'>{index + 1}</div>
            </div>
            <div className='userInfo'>
              <a href={'https://forum.freecodecamp.org/u/' + item.username}>
                <img 
                  src={source} 
                  alt={item.username} 
                  width="45" height="45"
                />
              </a>
              <div className='numbers'>
                <div style={{fontWeight: 'bold'}}>{item.alltime}</div>
                <div style={{fontSize: 0.5 + 'em'}}>{item.name}</div>
              </div>
            </div>
          </div>
        )
      })
    )
  }
}
export default Usercard
