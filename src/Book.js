import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
  }

  onMoveBook = (selectedShelf) => {
    const { book, onAdd } = this.props;
    onAdd(book, selectedShelf)
  }

  render () {
    const { book } = this.props;

    const thumb = book.imageLinks ? book.imageLinks.smallThumbnail : '/images/default_book.jpg';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${thumb})` }}></div>

          <BookshelfChanger shelf={book.shelf} onMoveBook={this.onMoveBook} />
      </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
      </div>
    )
  }
}

export default Book