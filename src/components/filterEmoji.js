import emojiList from './emojiList.json'

const filterEmoji = (searchTerm, maxResults) => {
    return emojiList.filter(emoji => {
        if (searchTerm.toLowerCase().includes(emoji.title.toLowerCase())) {
            return true
        }
        if (emoji.keywords.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true
        }
        return false
    })
    .slice(0, maxResults)
}

export default filterEmoji