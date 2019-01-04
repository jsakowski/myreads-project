import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Constants from './constants'

class BookshelfChanger extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired,
  }

  state = {
    shelf: this.props.shelf
  }

  handleChange = (event) => {
    const selectedShelf = event.target.value
    this.setState({
        shelf: selectedShelf
      }, () => {
        this.props.onMoveBook(this.state.shelf)
      })
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          {
            Constants.bookshelves.map((shelf) => (<option key={shelf.id} value={shelf.id}>{shelf.name}</option>))
          }
        </select>
      </div>
    )
  }
}

export default BookshelfChanger