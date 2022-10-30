import React, { Component } from 'react'
import { Header } from './components/Header'
import { EmojiResults } from './components/EmojiResults'
import { EmojiSearch } from './components/EmojiSearch'
import filterEmoji from './components/filterEmoji'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredEmoji: filterEmoji("", 10),
    }
  }

  handleSearchInput = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 10),
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <EmojiSearch handleSearchInput={this.handleSearchInput} />
        <EmojiResults searchResults={this.state.filteredEmoji} />
      </div>
    )
  }
}

