import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
  render() {
    return (
      <div className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
      </div>
    )
  }
}
