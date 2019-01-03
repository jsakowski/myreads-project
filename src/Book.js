import React from 'react'
import PropTypes from 'prop-types'

const Book = (props) => {
  const { book } = props;

  const thumb = book.imageLinks ? book.imageLinks.smallThumbnail : '';

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${thumb})` }}></div>
        <div className="book-shelf-changer">
        {/*
          TODO: add functionality to change a shelf
        */}
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book