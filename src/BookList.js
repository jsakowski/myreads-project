import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = (props) => {
  const { books } = props;
  return (
    <ol className="books-grid">
    {books.map((book) => (
      <li key={book.id}><Book book={book} /></li>
    ))}
    </ol>
  )
}

BookList.propTypes = {
  books: PropTypes.array,
};

export default BookList