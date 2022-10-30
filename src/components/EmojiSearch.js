import React, { Component } from 'react'
import './emojiSearch.css' 

export class EmojiSearch extends Component {

  handleInput = (event) => {
    this.props.handleSearchInput(event)
  }

  render() {
    return (
      <>
        <input onChange={this.handleInput} placeholder='Click on emoji to copy'/>
      </>
    )
  }
}
