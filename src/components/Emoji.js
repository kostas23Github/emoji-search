import React, { Component } from 'react'
import'./emoji.css'

class Emoji extends Component {
  
  render() {
    const { title, symbol } = this.props;
    const red = Math.round(Math.random()*(200-100))
    const green = Math.round(Math.random()*50)
    console.log(this.props)
    return (
      <div
        className='emoji'
    style={{ backgroundColor: `rgba(${red}, ${green}, 50, 0.7)`}}
      >
        <p className='title'>{title}</p>
        <p className='symbol' data-clipboard-text={symbol} title='Copy Me'>{symbol}</p>
      </div>
    )
  }
}

export default Emoji