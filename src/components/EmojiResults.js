import React, { Component } from 'react'
import Emoji from './Emoji'
import './emojiResults.css'
import  Clipboard from 'clipboard'

export class EmojiResults extends Component {

  componentDidMount() {
    this.clipboard = new Clipboard('.symbol')
  }

  componentWillUnmount() {
    this.clipboard.destroy()
  }

  render() {
    return (
      <div className='searchResult'>
        {
          this.props.searchResults.map((emoji) => {
            return <Emoji key={emoji.title} title={emoji.title} symbol={emoji.symbol}/>
          })
        }
      </div>
    )
  }
}


